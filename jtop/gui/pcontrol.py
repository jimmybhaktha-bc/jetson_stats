# -*- coding: UTF-8 -*-
# This file is part of the jetson_stats package (https://github.com/rbonghi/jetson_stats or http://rnext.it).
# Copyright (c) 2019-2023 Raffaello Bonghi.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.

import curses
from .jtopgui import Page
# Graphics elements
from .lib.common import check_curses, unit_to_string
# Graphic library
from .lib.colors import NColors
from .lib.chart import Chart
from .lib.smallbutton import SmallButton, ButtonList

FAN_STEP = 10
PROFILE_STR = "Profiles:"


@check_curses
def plot_temperatures(stdscr, start, offset, width, height, jetson):
    counter = 0
    start = start + (width - 17) // 2
    # Define color temperatures
    color_options = {
        60: NColors.red(),
        40: NColors.yellow(),
        20: curses.A_NORMAL,
    }
    # Plot title
    stdscr.addstr(offset, start - 1, " [Sensor] ", NColors.icyan() | curses.A_BOLD)
    stdscr.addstr(offset, start + 11, " [Temp] ", NColors.icyan() | curses.A_BOLD)
    # Plot name and temperatures
    for idx, name in enumerate(jetson.temperature):
        # Print temperature name
        value = jetson.temperature[name]
        # Set color temperature
        color = curses.A_NORMAL
        for k in color_options.keys():
            if value >= k:
                color = color_options[k]
                break
        # Print temperature value
        try:
            stdscr.addstr(offset + idx + 1, start, ("{name:<7}").format(name=name))
            stdscr.addstr(offset + idx + 1, start + offset // 2 + 3, ("{val:8.2f}C").format(val=value), color)
        except curses.error:
            pass
        counter = idx
    return counter


@check_curses
def plot_watts(stdscr, start, offset, width, height, jetson):
    start = start + (width - 6) // 2
    # Plot title
    stdscr.addstr(offset, start - 11, " [Power] ", NColors.icyan() | curses.A_BOLD)
    stdscr.addstr(offset, start + 2, " [Inst] ", NColors.icyan() | curses.A_BOLD)
    stdscr.addstr(offset, start + 9, " [Avg] ", NColors.icyan() | curses.A_BOLD)
    # Plot watts
    power = jetson.power['rail']
    for idx, name in enumerate(power):
        value = power[name]
        string_name = name.replace("VDDQ_", "").replace("VDD_", "").replace("_", " ")
        stdscr.addstr(offset + idx + 1, start - 10, string_name, curses.A_NORMAL)
        unit_power = unit_to_string(value['power'], value['unit'], 'W')
        stdscr.addstr(offset + idx + 1, start + 3, unit_power, curses.A_NORMAL)
        unit_avg = unit_to_string(value['avg'], value['unit'], 'W')
        stdscr.addstr(offset + idx + 1, start + 10, unit_avg, curses.A_NORMAL)
    # Plot totals before finishing
    total = jetson.power['tot']
    len_power = len(power)
    stdscr.addstr(offset + len_power + 1, start - 10, 'ALL', curses.A_BOLD)
    unit_power = unit_to_string(total['power'], total['unit'], 'W')
    stdscr.addstr(offset + len_power + 1, start + 3, unit_power, curses.A_BOLD)
    unit_avg = unit_to_string(total['avg'], total['unit'], 'W')
    stdscr.addstr(offset + len_power + 1, start + 10, unit_avg, curses.A_BOLD)


class CTRL(Page):

    def __init__(self, stdscr, jetson):
        super(CTRL, self).__init__("CTRL", stdscr, jetson)
        # Only if exist a fan will be load a chart
        # Initialize FAN chart
        self._fan_gui = {}
        for fan_name in self.jetson.fan:
            fan = self.jetson.fan[fan_name]
            # Initialize profile and list of fan
            profiles = jetson.fan.all_profiles(fan_name)
            button_list = ButtonList(stdscr, self.action_fan_profile, profiles, info={'name': fan_name})
            size_profile = max([len(profile) for profile in profiles] + [len(PROFILE_STR)]) + 2
            self._fan_gui[fan_name] = {'profile': button_list, 'fan': [], 'size_w': size_profile, 'len_profiles': len(profiles)}
            # Initialize all fan chart and buttons
            for idx in range(len(fan['speed'])):
                chart_fan = Chart(jetson, "{name} {idx}".format(name=fan_name.upper(), idx=idx), self.update_chart,
                                  line="o", color_text=curses.COLOR_BLUE, color_chart=[curses.COLOR_BLUE])
                button_increase = SmallButton(stdscr, self.action_fan_increase, info={'name': fan_name, 'idx': idx})
                button_decrease = SmallButton(stdscr, self.action_fan_decrease, info={'name': fan_name, 'idx': idx})
                self._fan_gui[fan_name]['fan'] += [{'chart': chart_fan, 'increase': button_increase, 'decrease': button_decrease}]
        # Initialize jetson_clocks buttons
        if self.jetson.jetson_clocks is not None:
            self._jetson_clocks_start = SmallButton(stdscr, self.action_jetson_clocks_start, trigger_key='s')
            self._jetson_clocks_boot = SmallButton(stdscr, self.action_jetson_clocks_boot, trigger_key='e')
        # Initialize NVP Model buttons
        if self.jetson.nvpmodel is not None:
            # nvp_modes = [name.replace('MODE_', '').replace('_', ' ') for name in self.jetson.nvpmodel.modes]
            nvp_modes = self.jetson.nvpmodel.modes
            self._nvpmodel_profile = ButtonList(stdscr, self.action_nvpmodels, nvp_modes)
            self._nvpmodel_increase = SmallButton(stdscr, self.action_nvp_increase, trigger_key='+')
            self._nvpmodel_decrease = SmallButton(stdscr, self.action_nvp_decrease, trigger_key='-')

    def action_fan_profile(self, info, selected):
        # Set new fan profile
        self.jetson.fan.set_profile(info['name'], info['label'])

    def action_fan_increase(self, info, selected):
        # Read current speed
        speed = self.jetson.fan.get_speed(info['name'], info['idx'])
        # Round and increase speed
        spd = round(speed / 10) * 10 + FAN_STEP
        new_speed = spd if spd <= 100 else 100
        # Update fan speed
        self.jetson.fan.set_speed(info['name'], new_speed, info['idx'])

    def action_fan_decrease(self, info, selected):
        # Read current speed
        speed = self.jetson.fan.get_speed(info['name'], info['idx'])
        # Round and decrease speed
        spd = round(speed / 10) * 10 - FAN_STEP
        new_speed = spd if spd >= 0 else 0
        # Update fan speed
        self.jetson.fan.set_speed(info['name'], new_speed, info['idx'])

    def action_jetson_clocks_start(self, info, selected):
        # Start jetson_clocks
        self.jetson.jetson_clocks = not self.jetson.jetson_clocks

    def action_jetson_clocks_boot(self, info, selected):
        # Start jetson_clocks
        self.jetson.jetson_clocks.boot = not self.jetson.jetson_clocks.boot

    def action_nvpmodels(self, info, selected):
        # Set new nvpmodel
        self.jetson.nvpmodel = info['label']

    def action_nvp_increase(self, info, selected):
        # NVPmodel controller
        if self.jetson.nvpmodel.id >= len(self.jetson.nvpmodel.modes) - 1:
            return
        self.jetson.nvpmodel += 1

    def action_nvp_decrease(self, info, selected):
        # NVPmodel controller
        if self.jetson.nvpmodel.id <= 0:
            return
        self.jetson.nvpmodel -= 1

    def update_chart(self, jetson, name):
        info_chart = name.split(" ")
        name = info_chart[0].lower()
        idx = int(info_chart[1])
        speed = jetson.fan[name]['speed'][idx]
        # Append in list
        return {
            'value': [speed],
        }

    def compact_jetson_clocks(self, pos_y, pos_x, key, mouse):
        if self.jetson.jetson_clocks is None:
            return
        # Show jetson_clocks
        self.stdscr.addstr(pos_y, pos_x, "Jetson Clocks:", curses.A_BOLD)
        # Status jetson clocks
        jetson_clocks_status = self.jetson.jetson_clocks.status
        # Color status
        if jetson_clocks_status == "running":
            color = (curses.A_BOLD | NColors.green())  # Running (Bold)
        elif jetson_clocks_status == "inactive":
            color = curses.A_NORMAL       # Normal (Grey)
        elif "ing" in jetson_clocks_status:
            color = NColors.yellow()  # Warning (Yellow)
        else:
            color = NColors.red()  # Error (Red)
        # Draw status button
        self._jetson_clocks_start.update(pos_y, pos_x + 15, jetson_clocks_status, key, mouse, color=color)
        # Draw boot button
        boot = self.jetson.jetson_clocks.boot
        jetson_clocks_boot = "enable" if boot else "disable"
        self.stdscr.addstr(pos_y, pos_x + 31, "on boot:", curses.A_BOLD)
        color_boot = NColors.green() if boot else curses.A_NORMAL
        self._jetson_clocks_boot.update(pos_y, pos_x + 40, jetson_clocks_boot, key, mouse, color=color_boot)

    def compact_nvpmodes(self, pos_y, pos_x, key, mouse):
        if self.jetson.nvpmodel is None:
            return
        # Draw all profiles
        self.stdscr.addstr(pos_y, pos_x, "NVP modes:", curses.A_BOLD)
        # Write ID NVP model
        id = self.jetson.nvpmodel.id
        color = NColors.yellow() if self.jetson.nvpmodel.is_running else curses.A_BOLD
        self.stdscr.addstr(pos_y, pos_x + 16, str(id), color)
        # Add buttons -/+
        self._nvpmodel_decrease.update(pos_y, pos_x + 11, key=key, mouse=mouse)
        self._nvpmodel_increase.update(pos_y, pos_x + 18, key=key, mouse=mouse)
        # Draw all modes
        current_mode = self.jetson.nvpmodel.name
        self._nvpmodel_profile.update(pos_y + 1, pos_x + 2, key, mouse, current_mode)

    def draw(self, key, mouse):
        # Screen size
        height, width, first = self.size_page()
        # Measure height
        fan_height = (height * 1 // 3 + 2) // len(self.jetson.fan) if len(self.jetson.fan) > 0 else 0
        # Draw all GPU
        for fan_idx, (fan_gui, fan_name) in enumerate(zip(self._fan_gui, self.jetson.fan)):
            gui_chart = self._fan_gui[fan_gui]
            fan = self.jetson.fan[fan_name]
            # Split width for each pwm
            fan_speed_width = (width - 2) // len(fan['speed'])
            # Print all profiles
            pos_y_profiles = fan_height // 2 - gui_chart['len_profiles']
            size_profile = gui_chart['size_w']
            self.stdscr.addstr(first + 1 + fan_idx * (fan_height + 1) + pos_y_profiles - 1, 1, PROFILE_STR, curses.A_BOLD)
            # Draw a button list with all profiles
            profile = self.jetson.fan.get_profile(fan_name)
            gui_chart['profile'].update(first + 1 + fan_idx * (fan_height + 1) + pos_y_profiles, 1, key, mouse, profile)
            # Print all fans
            for idx, speed in enumerate(fan['speed']):
                # Set size chart gpu
                size_x = [1 + idx * fan_speed_width + size_profile, 1 + (idx + 1) * (fan_speed_width - 2)]
                size_y = [first + 1 + fan_idx * (fan_height + 1), first + 1 + (fan_idx + 1) * (fan_height - 1)]
                # Print speed and RPM
                label_fan = "PWM {speed: >3.0f}%".format(speed=speed)
                if 'rpm' in fan:
                    label_fan += " - {rpm}RPM".format(rpm=fan['rpm'][idx])
                # Draw GPU chart
                gui_chart['fan'][idx]['chart'].draw(self.stdscr, size_x, size_y, label=label_fan)
                # buttons
                gui_chart['fan'][idx]['decrease'].update(first + 1 + fan_idx * (fan_height + 1), 40, '-', key, mouse)
                gui_chart['fan'][idx]['increase'].update(first + 1 + fan_idx * (fan_height + 1), 45, '+', key, mouse)
        # Draw jetson clocks
        self.compact_jetson_clocks(first + 1 + fan_height + 0, 1, key, mouse)
        # Draw nvpmodels
        self.compact_nvpmodes(first + 1 + fan_height + 1, 1, key, mouse)
# EOF
