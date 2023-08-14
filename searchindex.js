Search.setIndex({"docnames": ["advanced-usage", "contributing", "docker", "index", "jtop/how_is_it_works", "jtop/jtop", "other-tools/environment_variables", "other-tools/index", "other-tools/jetson_config", "other-tools/jetson_release", "other-tools/jetson_swap", "reference/exceptions", "reference/fan", "reference/gpu", "reference/index", "reference/jetson_clocks", "reference/jtop", "reference/memory", "reference/nvpmodel", "sponsors", "troubleshooting"], "filenames": ["advanced-usage.rst", "contributing.rst", "docker.rst", "index.rst", "jtop/how_is_it_works.rst", "jtop/jtop.rst", "other-tools/environment_variables.rst", "other-tools/index.rst", "other-tools/jetson_config.rst", "other-tools/jetson_release.rst", "other-tools/jetson_swap.rst", "reference/exceptions.rst", "reference/fan.rst", "reference/gpu.rst", "reference/index.rst", "reference/jetson_clocks.rst", "reference/jtop.rst", "reference/memory.rst", "reference/nvpmodel.rst", "sponsors.rst", "troubleshooting.rst"], "titles": ["\ud83d\udc68\u200d\ud83d\udcbb Advanced Usage", "\u2728 Contributing", "\ud83d\udc0b Docker", "jetson-stats", "How is it works", "\ud83d\udcca jtop", "Environment variables", "\ud83e\uddf0 Other tools", "jetson_config", "jetson_release", "jetson_swap", "Exceptions", "Fan", "GPU", "\ud83d\udcd6 API Reference", "jetson_clocks", "jtop", "Memory", "NVPModel", "\ud83d\udc96 Sponsor", "\ud83c\udd98 Troubleshooting"], "terms": {"you": [0, 1, 2, 3, 5, 6, 7, 12, 15, 16, 17, 18, 19, 20], "can": [0, 1, 2, 3, 5, 6, 12, 15, 16, 17, 18, 20], "instal": [0, 1, 2, 5, 6, 7, 8, 20], "jtop": [0, 2, 3, 11, 12, 13, 14, 15, 17, 18], "docker": [0, 16], "follow": [0, 1, 20], "guidelin": 0, "below": [0, 1, 2, 5, 12, 13, 16, 17, 20], "If": [0, 1, 2, 3, 5, 15, 16, 18, 20], "need": [0, 1, 2, 3, 16], "like": [0, 4, 5, 13, 15, 16, 17, 20], "virtualenv": 0, "must": [0, 16], "befor": [0, 1, 5, 12, 15, 16, 19, 20], "your": [0, 3, 4, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20], "host": [0, 2, 16], "after": [0, 5, 12, 16], "venv": 0, "sourc": [0, 2], "bin": [0, 16], "activ": [0, 10, 15, 16], "pip": [0, 2, 3, 5, 20], "u": [0, 1, 2, 3, 5, 20], "jetson": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20], "stat": [0, 1, 2, 4, 5, 7, 8, 9, 14, 16, 19, 20], "i": [0, 1, 3, 5, 6, 10, 12, 13, 15, 16, 17, 18, 20], "complet": 0, "control": [0, 1, 3, 12, 15, 16, 18], "all": [0, 1, 3, 4, 6, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20], "system": [0, 4, 5, 16], "nvidia": [0, 3, 4, 5, 9, 10, 15, 16, 20], "tegrastat": [0, 16], "nvp": [0, 16, 18], "model": [0, 4, 5, 14, 16, 18], "fan": [0, 5, 14, 16], "statu": [0, 4, 5, 8, 9, 10, 13, 14, 15, 16, 17, 18], "board": [0, 1, 3, 4, 5, 9, 12, 13, 14, 15, 16, 18, 20], "g": [0, 17, 20], "version": [0, 1, 5, 6, 8, 12, 16, 20], "jetpack": [0, 5, 6, 9, 12, 16, 20], "from": [0, 1, 2, 3, 4, 5, 8, 12, 13, 16, 17, 19], "import": [0, 3], "initi": [0, 5, 16], "node": 0, "file": [0, 1, 4, 5, 10, 15, 16], "ok": [0, 3, 12, 13, 14, 15, 16, 17, 18, 20], "provid": [0, 3, 15, 16], "proper": [0, 1, 3], "updat": [0, 1, 3, 8, 20], "frequenc": [0, 3, 5, 16, 18], "while": [0, 3, 16], "read": [0, 3, 4, 5, 6, 12, 13, 15, 16, 17, 18, 20], "tegra": [0, 3, 16], "print": [0, 2, 3, 12, 15, 16, 18], "Or": 0, "manual": [0, 12, 20], "start": [0, 1, 3, 4, 5, 14, 15, 16], "up": [0, 5, 16], "basic": 0, "function": [0, 16, 18, 19], "open": [0, 1, 3, 4, 5, 16, 20], "close": [0, 14, 16], "via": 0, "callback": [0, 16], "def": [0, 16], "read_stat": [0, 16], "attach": [0, 5, 11, 14, 16], "where": [0, 1, 5, 12, 16], "loop_for_ev": [0, 14, 16], "other": [0, 4, 5, 9, 16, 20], "exampl": [0, 1, 2, 16], "ar": [0, 1, 3, 4, 5, 7, 8, 12, 13, 15, 16, 18, 20], "avail": [0, 3, 5, 8, 9, 10, 12, 13, 16, 17, 18], "folder": 0, "commun": [1, 16], "maintain": 1, "project": [1, 3], "we": [1, 3], "happili": [1, 3], "accept": 1, "want": [1, 5, 16, 17], "quick": 1, "rule": 1, "make": [1, 16, 19], "right": [1, 5], "page": [1, 3, 8, 16], "warn": [1, 5, 16], "user": [1, 2, 4, 5, 8, 16, 20], "support": [1, 16, 18], "l4t": [1, 16, 20], "35": 1, "2": [1, 5, 9, 16, 20], "1": [1, 5, 13, 16, 18, 20], "pleas": [1, 3, 12, 13, 16, 17, 19, 20], "try": [1, 2, 20], "sudo": [1, 3, 5, 8, 10], "pip3": [1, 3, 5], "github": [1, 5, 19], "issu": [1, 2, 3, 5, 20], "press": [1, 5, 20], "ctrl": 1, "click": [1, 5, 8], "core": [1, 5, 12, 13, 15, 16, 17, 18], "jetson_vari": 1, "py": 1, "around": 1, "line": [1, 5, 20], "49": 1, "variabl": [1, 5, 7, 8, 9, 16, 18], "call": [1, 4, 16], "nvidia_jetpack": 1, "increas": [1, 5, 16, 18], "minor": 1, "__version__": 1, "__init__": [1, 14, 16], "creat": [1, 5, 10, 17], "pull": 1, "request": [1, 16], "append": 1, "templat": 1, "miss": [1, 5], "md": 1, "url": 1, "submit": 1, "order": [1, 16], "includ": [1, 5, 7, 16], "our": [1, 19], "checklist": 1, "descript": [1, 15, 16], "messag": [1, 5, 9, 10, 11, 15, 16], "same": [1, 5, 13, 15, 16, 18], "wish": 1, "check": [1, 4, 5, 8, 10, 12, 16, 17, 20], "fresh": [1, 16], "discuss": 1, "idea": 1, "There": [1, 5, 15, 20], "contributor": 1, "friendli": 1, "tag": 1, "should": 1, "ideal": 1, "peopl": 1, "who": 1, "veri": 1, "familiar": 1, "codebas": 1, "yet": 1, "fork": 1, "repositori": 1, "chang": [1, 5, 15, 16, 20], "write": [1, 3, 5, 16, 18, 20], "which": [1, 4, 5, 6, 12, 16], "show": [1, 5, 9, 10, 11, 12, 16], "wa": [1, 15], "work": [1, 2, 3, 5, 8, 16, 20], "expect": 1, "send": [1, 13], "until": 1, "get": [1, 2, 12, 13, 16, 17, 19], "merg": 1, "publish": 1, "clone": 1, "build": 1, "mode": [1, 4, 16, 18, 20], "git": 1, "http": [1, 16], "com": 1, "rbonghi": [1, 2], "jetson_stat": [1, 2], "cd": 1, "v": [1, 2, 5, 9, 20], "e": [1, 5, 16, 20], "one": [1, 5, 8, 16, 20], "termin": [1, 3, 5], "command": [1, 2, 4, 5, 9, 13, 16, 17], "systemctl": [1, 20], "now": [1, 5], "run": [1, 2, 4, 15, 16, 18, 20], "jtop_servic": 1, "true": [1, 5, 13, 15, 16, 18], "forc": [1, 18], "enabl": [1, 5, 8, 10, 12, 13, 15, 16, 17, 20], "commit": 1, "multipl": [1, 2], "python": [1, 2, 3, 4, 16], "built": 1, "script": [1, 4, 5, 6, 16], "quickli": [1, 15], "bash": 1, "local_test": 1, "sh": 1, "when": [1, 4, 7, 11, 15, 16, 18, 20], "do": [1, 5, 20], "compil": 1, "imag": [1, 4, 5], "7": [1, 16], "3": [1, 2, 3, 5, 16, 20], "6": [1, 5, 16], "8": [1, 10, 16, 20], "9": [1, 16], "10": [1, 5, 16, 17, 18], "11": 1, "sphinx": 1, "differ": [1, 2, 5, 8, 16, 20], "option": [1, 9, 10, 12, 15, 16, 17, 18], "workstat": 1, "help": [1, 5, 8, 9, 10, 20], "local": [1, 16], "us": [1, 3, 4, 5, 8, 12, 13, 15, 16, 17, 18, 20], "onli": [1, 2, 4, 5, 8, 12, 16], "IN": 1, "A": [1, 3, 5, 16], "desktop": [1, 7], "machin": [1, 9, 16], "usag": [1, 5, 9, 10], "h": [1, 5, 9, 10], "debug": 1, "pyhton": 1, "specif": [1, 3, 16], "doc": [1, 16], "librari": [1, 3, 4, 5, 9, 16, 19], "python3": [1, 2, 20], "m": 1, "tests_gui": 1, "x": [1, 16], "name": [1, 5, 10, 12, 13, 14, 16, 18], "gui_pag": 1, "announc": 1, "intent": 1, "discord": 1, "see": [1, 3, 5], "anyon": 1, "last": [1, 5], "minut": [1, 5], "number": [1, 5, 9, 12, 16, 18, 20], "y": [1, 2], "z": [1, 16], "branch": 1, "automat": [1, 5, 8], "gener": [1, 5, 6, 16], "directli": [2, 5], "contain": [2, 16], "well": 2, "pass": [2, 16], "sock": [2, 5], "thi": [2, 4, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20], "rm": 2, "latest": [2, 8, 20], "few": [2, 20], "thing": 2, "apt": [2, 20], "simpl": [2, 3, 5, 10, 15, 16, 20], "buster": 2, "group": [2, 4, 5, 16], "add": [2, 5, 16, 20], "jtop_gid": 2, "getent": 2, "awk": 2, "f": [2, 16], "refer": [2, 3], "391": 2, "packag": [3, 8, 16], "monitor": [3, 4, 5], "orin": [3, 5, 15, 16, 18], "xavier": [3, 15, 16, 18], "nano": [3, 9, 10, 15, 16, 18], "tx": [3, 15, 16, 18], "seri": [3, 16], "ecosystem": 3, "don": [3, 5], "t": [3, 5, 10, 12, 13, 16, 18, 20], "forget": [3, 5], "logout": [3, 5, 20], "login": [3, 5, 8, 20], "reboot": [3, 5, 18, 20], "That": 3, "": [3, 5, 9, 10, 16, 20], "pretti": 3, "just": 3, "interfac": [3, 5, 16], "appear": [3, 15], "more": [3, 5, 15, 16], "capabl": 3, "document": [3, 5, 12, 13, 16, 17], "The": [3, 5, 9, 11, 16, 18, 20], "depth": 3, "guid": [3, 16], "place": [3, 10], "api": 3, "level": [3, 16, 18], "clara": 3, "agx": [3, 5], "experiment": 3, "nx": [3, 16], "igx": 3, "industri": 3, "tx2": 3, "tx2i": 3, "tx1": 3, "tk1": 3, "nintendo": 3, "switch": [3, 5, 10, 16], "an": [3, 16, 17, 18, 20], "made": [3, 16], "under": 3, "agpl": 3, "0": [3, 9, 12, 16, 18], "For": [3, 5, 16, 18], "detail": [3, 5, 9, 16, 19], "welcom": 3, "power": [4, 5, 14, 16, 18], "servic": [4, 5, 8, 12, 15, 16, 18], "client": [4, 16], "abov": [4, 16], "load": [4, 5, 16], "decod": 4, "inform": [4, 5, 8, 9, 15, 16, 20], "eeprom": 4, "detect": 4, "jetson_clock": [4, 5, 8, 14, 16], "know": [4, 5, 6, 13, 16], "engin": [4, 5, 14, 16], "involv": 4, "nvpmodel": [4, 5, 14, 16], "select": [4, 5, 12, 18], "socket": 4, "wait": [4, 16], "connect": [4, 16], "current": [4, 5, 10, 12, 15, 16, 18], "share": [4, 5, 16], "data": [4, 15, 16], "estim": [4, 5, 16], "cpu": [4, 14, 16, 18], "util": [4, 5, 16], "proc": [4, 16], "devic": [4, 5, 13, 16, 17], "sy": [4, 13, 16], "memori": [4, 5, 14, 16, 18], "meminfo": [4, 16], "swap": [4, 5, 10, 16, 17], "swapon": 4, "between": [4, 12, 16], "gui": 4, "server": [4, 16], "It": [4, 5, 16, 18], "locat": [4, 17], "protect": 4, "access": [4, 16, 20], "660": 4, "equival": [4, 13, 15], "srw": 4, "rw": 4, "have": [4, 5, 6, 8, 16, 19, 20], "fast": 5, "shell": 5, "loop": 5, "r": [5, 16], "refresh": 5, "p": [5, 16, 20], "argument": [5, 9, 10, 16], "exit": [5, 9, 10], "fix": [5, 8], "default": [5, 9, 10, 12, 16, 17, 18], "fals": [5, 9, 10, 16, 17, 18], "reset": 5, "configur": [5, 8, 15, 16, 18], "everi": [5, 16], "5": [5, 12, 16, 20], "base": [5, 11, 12, 13, 15, 16, 17, 18], "also": [5, 7, 12, 13, 16, 17, 18, 20], "jtop_color_filt": 5, "interv": [5, 14, 16], "500": 5, "program": 5, "left": 5, "arrow": 5, "tab": 5, "how": [5, 18], "ti": 5, "menu": [5, 8], "someth": [5, 18], "goe": 5, "wrong": [5, 12, 16, 18], "tool": [5, 8, 15, 16], "permiss": [5, 8, 16, 20], "environ": [5, 7, 8], "origin": 5, "simpli": 5, "red": 5, "text": 5, "background": 5, "blue": 5, "To": [5, 13, 16], "featur": [5, 16, 19], "bashrc": 5, "output": [5, 12, 13, 15, 16, 17, 18, 20], "hardwar": [5, 6, 16], "launch": 5, "readi": 5, "four": 5, "collect": [5, 16], "about": [5, 8, 9, 16, 20], "disk": [5, 14, 16], "real": 5, "time": [5, 16], "histori": 5, "plot": 5, "chart": 5, "list": [5, 12, 16, 17, 18], "disabl": [5, 8, 13, 15, 16, 17], "here": [5, 16, 18, 20], "cuda": [5, 16], "serial": [5, 9, 16], "In": [5, 16], "summar": 5, "each": [5, 16, 18], "percentag": [5, 16], "green": 5, "yellow": 5, "nice": [5, 16], "bar": 5, "describ": [5, 16], "4": [5, 9, 16, 20], "ram": [5, 16], "cyan": 5, "buffer": [5, 16], "cach": [5, 16, 17, 20], "emc": [5, 16], "bandwidth": [5, 16], "iram": [5, 16], "section": 5, "mani": 5, "speed": [5, 12, 14, 16], "rpm": [5, 12, 14, 16], "space": [5, 16], "process": [5, 14, 16], "sort": 5, "tabl": [5, 16], "titl": 5, "hw": 5, "temperatur": [5, 14, 16], "zone": 5, "over": 5, "84": 5, "degre": 5, "critic": 5, "100": [5, 12, 16, 20], "rail": [5, 16], "instantan": [5, 16], "averag": [5, 16], "bold": 5, "total": [5, 16], "integr": [5, 13, 16], "igpu": 5, "governor": [5, 16], "grei": 5, "flag": 5, "3d": [5, 13, 16], "scale": [5, 13, 16], "railgat": [5, 16], "tpc": [5, 16, 18], "pg": [5, 16], "minimum": [5, 16], "maximum": [5, 16], "side": 5, "gpc": [5, 16], "processor": 5, "new": [5, 12, 13, 15, 16, 17, 18, 19], "clean": 5, "second": [5, 16], "legend": 5, "On": [5, 16], "larg": [5, 16], "free": [5, 16], "block": [5, 16], "lfb": [5, 16], "4mb": [5, 16], "area": 5, "visual": 5, "linear": 5, "gaug": 5, "clear": [5, 15, 16, 17], "type": [5, 12, 13, 15, 16, 17, 18], "zram": 5, "magenta": 5, "partit": [5, 16], "prioriti": [5, 16], "p5": 5, "written": 5, "keyboard": 5, "c": [5, 9, 16], "b": [5, 16], "set": [5, 12, 13, 15, 16, 17, 18], "boot": [5, 8, 10, 14, 15, 16, 17], "decreas": [5, 16, 18], "size": [5, 10, 16, 17], "remov": [5, 16], "find": [5, 16, 20], "case": 5, "ha": [5, 15], "main": [5, 16], "allow": [5, 16, 18, 20], "pwm": 5, "revolut": 5, "per": 5, "button": 5, "profil": [5, 12, 14, 16], "note": [5, 16], "60": [5, 15], "letter": 5, "d": [5, 10, 16], "mean": 5, "volt": [5, 16], "teh": 5, "fail": [5, 11, 16, 20], "deselect": 5, "technic": 5, "compar": [5, 16], "previou": 5, "hidden": 5, "kei": [5, 16], "easi": 6, "alreadi": [6, 15, 18], "export": [6, 16], "grep": 6, "jetson_config": 7, "health": [7, 20], "jetson_releas": [7, 20], "jetson_swap": 7, "improv": 8, "perform": [8, 15, 16], "wifi": 8, "self": 8, "broken": 8, "part": [8, 9, 16], "submenu": 8, "rememb": [8, 16, 20], "ssh": 8, "requir": [8, 10], "softwar": 9, "2023": 9, "raffaello": 9, "bonghi": 9, "verbos": [9, 16], "manag": [10, 16], "off": [10, 16], "swapfil": 10, "directori": 10, "n": [10, 20], "dir": [10, 20], "gigabyt": 10, "auto": 10, "class": [11, 12, 13, 15, 16, 17, 18], "jtopexcept": [11, 12, 13, 14, 15, 16, 18], "error": 11, "rais": [11, 12, 13, 15, 16, 17, 18], "reason": [11, 20], "genericinterfac": [12, 13, 17], "set_profil": [12, 14], "tegra_fan": 12, "method": [12, 13, 15, 16, 17, 18], "attribut": [12, 13, 15, 16, 17], "all_profil": [12, 14, 16], "return": [12, 13, 15, 16, 17, 18], "temp_control": 12, "map": [12, 16], "nvfancontrol": [12, 16], "quiet": [12, 16], "cool": 12, "stop": [12, 16], "alwai": 12, "paramet": [12, 13, 15, 16, 17, 18], "str": [12, 13, 15, 16, 17, 18], "doesn": [12, 13, 16, 18, 20], "exist": [12, 13, 16, 18], "get_profil": [12, 14], "valu": [12, 13, 15, 16, 17], "readabl": [12, 13, 16, 17], "get_profile_default": [12, 14], "usual": [12, 16], "first": [12, 15, 20], "get_rpm": [12, 14], "idx": 12, "int": [12, 16, 17, 18], "index": 12, "get_spe": [12, 14], "properti": [12, 13, 15, 16, 18], "simplifi": [12, 16, 18], "cannot": 12, "set_spe": [12, 14], "float": [12, 16, 17], "90": [12, 16], "dictionari": [13, 16, 17], "usabl": [13, 16, 17], "set_scaling_3d": [13, 14, 16], "get_scaling_3d": [13, 14], "bool": [13, 15, 16, 17, 18], "scaling_3d": [13, 14], "ga10b": 13, "echo": 13, "17000000": 13, "enable_3d_sc": 13, "detach": [14, 16], "gpu": [14, 16, 18], "interval_us": [14, 16], "json": [14, 16], "local_interfac": [14, 16], "restor": [14, 16], "uptim": [14, 16], "clear_cach": [14, 17], "swap_deactiv": [14, 17], "swap_is_en": [14, 17], "swap_path": [14, 17], "swap_set": [14, 16, 17], "jetsonclock": [14, 15, 16], "clear_config": [14, 15], "get_boot": [14, 15], "get_en": [14, 15], "get_statu": [14, 15], "is_config": [14, 15], "set_boot": [14, 15], "set_en": [14, 15], "get_all_nvpmodel": [14, 18], "get_default": [14, 18], "get_nvpmodel_id": [14, 18], "get_nvpmodel_nam": [14, 18], "id": [14, 16, 18], "is_run": [14, 18], "set_nvpmodel_id": [14, 18], "set_nvpmodel_nam": [14, 18], "except": 14, "object": [15, 16, 18], "maxim": [15, 16], "With": 15, "deactiv": [15, 16, 17], "wai": [15, 16, 20], "state": [15, 16], "six": 15, "uncontrol": 15, "abl": 15, "setup": [15, 16], "inact": 15, "store": 15, "boolean": [15, 16], "valueerror": [15, 16, 17, 18], "thread": 16, "anoth": 16, "observ": 16, "format": 16, "input": 16, "look": 16, "platform": 16, "extract": 16, "distribut": 16, "linux_distribut": 16, "linux": 16, "releas": [16, 20], "kernel": 16, "python_vers": 16, "firmwar": 16, "devicetre": 16, "699": 16, "boardid": 16, "tree": [16, 18], "modul": [16, 18, 20], "convers": 16, "soc": 16, "chip": 16, "compat": 16, "arch": 16, "architectur": 16, "codenam": 16, "evalu": 16, "opencv": 16, "opencv_vers": 16, "cudnn": 16, "dpkg": 16, "l": 16, "tensorrt": 16, "vpi": 16, "vulkan": 16, "vulkaninfo": 16, "two": [16, 20], "etc": 16, "nv_tegra_releas": 16, "depend": 16, "usr": 16, "txt": 16, "nvcc": 16, "dict": [16, 18], "idl": 16, "aggreg": 16, "defin": 16, "onlin": [16, 18], "freq": 16, "info_freq": 16, "idle_st": 16, "min": 16, "khz": 16, "max": 16, "cur": 16, "offlin": 16, "org": 16, "admin": 16, "pm": 16, "cpuidl": 16, "html": 16, "www": 16, "linuxhowto": 16, "procstat": 16, "htm": 16, "rosettacod": 16, "wiki": 16, "linux_cpu_util": 16, "gb": 16, "available_no_root": 16, "ap": 16, "dla": [16, 18], "nvdec": 16, "nvenc": 16, "similar": 16, "some": 16, "collet": 16, "metric": 16, "jp5": 16, "higher": 16, "full": 16, "discret": 16, "power_control": 16, "tpc_pg_mask": 16, "mask": 16, "3d_scale": 16, "specifi": 16, "constructor": 16, "advanc": 16, "none": 16, "json_arg": 16, "ani": 16, "addit": [16, 19], "keyword": 16, "dump": 16, "hostnam": 16, "network": 16, "ip": 16, "address": 16, "design": 16, "code": 16, "10gb": 16, "on_boot": [16, 17], "tot": 16, "kb": 16, "val": 16, "rel": 16, "measur": 16, "field": 16, "memtot": 16, "memfre": 16, "sreclaim": 16, "prio": 16, "voltag": [16, 18], "regul": [16, 18], "optim": [16, 18], "effici": [16, 18], "three": [16, 18], "budget": [16, 18], "watt": [16, 18], "15": [16, 18], "30": [16, 18], "sever": [16, 18], "possibl": [16, 18], "variou": [16, 18], "cap": [16, 18], "pva": [16, 18], "prequalifi": [16, 18], "confin": [16, 18], "target": [16, 18], "string": [16, 18], "nv": 16, "doe": 16, "spin": 16, "sleep": 16, "ex_valu": 16, "ore": 16, "channel": 16, "ina3221": 16, "consumpt": 16, "view": 16, "thermal": 16, "sum": 16, "vdd_in": 16, "pom_5v_in": 16, "sensor": 16, "millivolt": 16, "curr": 16, "milliamper": 16, "milliwatt": 16, "avg": 16, "limit": 16, "crit": 16, "datasheet": 16, "item": 16, "pid": 16, "percent": 16, "occupi": 16, "indic": 16, "interrupt": 16, "uninterrupt": 16, "zombi": 16, "signal": 16, "trace": 16, "dead": 16, "live": 16, "14": 16, "utim": 16, "spent": 16, "clock": 16, "tick": 16, "stime": 16, "22": 16, "starttim": 16, "sc_clk_tck": 16, "total_tim": 16, "clock_tick": 16, "cpu_usag": 16, "resid": 16, "vmrss": 16, "statm": 16, "portion": 16, "held": 16, "out": 16, "amount": 16, "dx": 16, "graphic": 16, "card": 16, "next": 16, "man7": 16, "man": 16, "man5": 16, "max_count": 16, "zero": 16, "els": 16, "counter": 16, "test": 16, "yield": 16, "oper": 16, "lost": 16, "log": 16, "panda": 16, "csv": 16, "datetim": 16, "timedelta": 16, "temp": 16, "human": 16, "compact": 16, "statist": 16, "bsp": 16, "bpmp": 16, "o": [16, 18], "celsiu": 16, "256": 16, "precis": 16, "margin": 16, "Not": 16, "hide": 16, "pmic": 16, "sinc": 16, "turn": 16, "path": 17, "15w": 18, "che": 18, "nvpmodel_id": 18, "nvpmodel_nam": 18, "go": [18, 19], "consid": 19, "develop": 19, "especi": 19, "compani": 19, "benefit": 19, "contribut": 19, "toward": 19, "ad": 19, "sure": 19, "continu": 19, "meet": 19, "high": 19, "qualiti": 19, "standard": 19, "contact": 19, "sponsorship": 19, "perk": 19, "through": 19, "question": 19, "let": 20, "resolv": 20, "common": 20, "happen": 20, "previous": 20, "step": 20, "restart": 20, "journalctl": 20, "pager": 20, "report": 20, "without": 20, "usermod": 20, "experi": 20, "sequenc": 20, "qqqqqwqqqq": 20, "xxxx": 20, "window": 20, "translat": 20, "vt100": 20, "draw": 20, "even": 20, "utf": 20, "reinstal": 20, "save": 20, "somewher": 20, "me": 20, "understand": 20, "pxxxx": 20, "xxx": 20}, "objects": {"jtop": [[11, 0, 1, "", "JtopException"], [16, 0, 1, "", "jtop"]], "jtop.core.fan": [[12, 0, 1, "", "Fan"]], "jtop.core.fan.Fan": [[12, 1, 1, "", "all_profiles"], [12, 1, 1, "", "get_profile"], [12, 1, 1, "", "get_profile_default"], [12, 1, 1, "", "get_rpm"], [12, 1, 1, "", "get_speed"], [12, 2, 1, "", "profile"], [12, 2, 1, "", "rpm"], [12, 1, 1, "", "set_profile"], [12, 1, 1, "", "set_speed"], [12, 2, 1, "", "speed"]], "jtop.core.gpu": [[13, 0, 1, "", "GPU"]], "jtop.core.gpu.GPU": [[13, 1, 1, "", "get_scaling_3D"], [13, 2, 1, "", "scaling_3D"], [13, 1, 1, "", "set_scaling_3D"]], "jtop.core.jetson_clocks": [[15, 0, 1, "", "JetsonClocks"]], "jtop.core.jetson_clocks.JetsonClocks": [[15, 2, 1, "", "boot"], [15, 1, 1, "", "clear_config"], [15, 1, 1, "", "get_boot"], [15, 1, 1, "", "get_enable"], [15, 1, 1, "", "get_status"], [15, 1, 1, "", "is_config"], [15, 1, 1, "", "set_boot"], [15, 1, 1, "", "set_enable"], [15, 2, 1, "", "status"]], "jtop.core.memory": [[17, 0, 1, "", "Memory"]], "jtop.core.memory.Memory": [[17, 1, 1, "", "clear_cache"], [17, 1, 1, "", "swap_deactivate"], [17, 1, 1, "", "swap_is_enable"], [17, 1, 1, "", "swap_path"], [17, 1, 1, "", "swap_set"]], "jtop.core.nvpmodel": [[18, 0, 1, "", "NVPModel"]], "jtop.core.nvpmodel.NVPModel": [[18, 1, 1, "", "get_all_nvpmodels"], [18, 1, 1, "", "get_default"], [18, 1, 1, "", "get_nvpmodel_id"], [18, 1, 1, "", "get_nvpmodel_name"], [18, 2, 1, "", "id"], [18, 1, 1, "", "is_running"], [18, 2, 1, "", "models"], [18, 2, 1, "", "name"], [18, 1, 1, "", "set_nvpmodel_id"], [18, 1, 1, "", "set_nvpmodel_name"], [18, 2, 1, "", "status"]], "jtop.jtop": [[16, 1, 1, "", "__init__"], [16, 1, 1, "", "attach"], [16, 2, 1, "", "board"], [16, 1, 1, "", "close"], [16, 2, 1, "", "cpu"], [16, 1, 1, "", "detach"], [16, 2, 1, "", "disk"], [16, 2, 1, "", "engine"], [16, 2, 1, "", "fan"], [16, 2, 1, "", "gpu"], [16, 2, 1, "", "interval"], [16, 2, 1, "", "interval_user"], [16, 2, 1, "", "jetson_clocks"], [16, 1, 1, "", "json"], [16, 2, 1, "", "local_interfaces"], [16, 1, 1, "", "loop_for_ever"], [16, 2, 1, "", "memory"], [16, 2, 1, "", "nvpmodel"], [16, 1, 1, "", "ok"], [16, 2, 1, "", "power"], [16, 2, 1, "", "processes"], [16, 1, 1, "", "restore"], [16, 1, 1, "", "start"], [16, 2, 1, "", "stats"], [16, 2, 1, "", "temperature"], [16, 2, 1, "", "uptime"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:property"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "property", "Python property"]}, "titleterms": {"advanc": [0, 3], "usag": [0, 3], "virtual": 0, "environ": [0, 1, 6], "contribut": [1, 3], "add": 1, "new": 1, "jetpack": 1, "featur": 1, "fix": [1, 20], "bug": 1, "set": 1, "up": 1, "your": [1, 2], "develop": 1, "manual": 1, "stop": 1, "disabl": 1, "jtop": [1, 4, 5, 16, 20], "servic": [1, 20], "restor": [1, 5], "test": 1, "thi": 1, "packag": 1, "live": 1, "docker": [1, 2], "tox": 1, "document": 1, "gui": 1, "releas": 1, "design": 2, "dockerfil": 2, "tip": 2, "trick": 2, "jetson": 3, "stat": 3, "instal": 3, "run": [3, 5], "compat": 3, "licens": 3, "how": 4, "i": 4, "work": 4, "initi": 4, "loop": 4, "sock": 4, "option": 5, "health": [5, 8], "color": 5, "filter": 5, "error": [5, 20], "log": 5, "page": 5, "all": 5, "gpu": [5, 13], "cpu": 5, "mem": 5, "control": 5, "eng": 5, "ctrl": 5, "info": 5, "variabl": 6, "other": 7, "tool": 7, "jetson_config": 8, "desktop": 8, "jetson_releas": 9, "jetson_swap": 10, "except": 11, "fan": 12, "api": 14, "refer": [14, 15, 16, 18], "jetson_clock": 15, "memori": 17, "nvpmodel": 18, "sponsor": 19, "troubleshoot": 20, "pip3": 20, "command": 20, "found": 20, "inact": 20, "start": 20, "onli": 20, "sudo": 20, "bad": 20, "visual": 20, "putti": 20, "noth": 20, "my": 20}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 58}, "alltitles": {"\ud83d\udc68\u200d\ud83d\udcbb Advanced Usage": [[0, "advanced-usage"]], "Virtual environment": [[0, null]], "\u2728 Contributing": [[1, "contributing"]], "Add a new Jetpack": [[1, "add-a-new-jetpack"]], "Add new feature or fix a bug": [[1, "add-new-feature-or-fix-a-bug"]], "Setting up your developing environment": [[1, "setting-up-your-developing-environment"]], "Manually stop and disable jtop service": [[1, "manually-stop-and-disable-jtop-service"]], "Restore jtop service": [[1, "restore-jtop-service"]], "Test this package": [[1, "test-this-package"]], "Live docker with tox": [[1, "live-docker-with-tox"]], "Test documentation": [[1, "test-documentation"]], "Test GUI": [[1, "test-gui"]], "Release": [[1, "release"]], "\ud83d\udc0b Docker": [[2, "docker"]], "Design your Dockerfile": [[2, "design-your-dockerfile"]], "Tips and tricks": [[2, "tips-and-tricks"]], "jetson-stats": [[3, "jetson-stats"]], "Installing": [[3, "installing"]], "Run": [[3, "run"]], "Advanced usage": [[3, "advanced-usage"]], "Compatibility": [[3, "compatibility"]], "License": [[3, "license"]], "Contributing": [[3, "contributing"]], "How is it works": [[4, "how-is-it-works"]], "Initialization": [[4, "initialization"]], "Loop": [[4, "loop"]], "jtop.sock": [[4, "jtop-sock"]], "\ud83d\udcca jtop": [[5, "jtop"]], "Run jtop": [[5, "run-jtop"]], "Options": [[5, "options"]], "Health": [[5, "health"], [8, "health"]], "Restore": [[5, "restore"]], "Color filter": [[5, "color-filter"]], "Error-log": [[5, "error-log"]], "Pages": [[5, "pages"]], "ALL": [[5, "all"]], "GPU": [[5, "gpu"], [13, "gpu"]], "CPU": [[5, "cpu"]], "MEM": [[5, "mem"]], "Controls": [[5, "controls"], [5, "id1"]], "ENG": [[5, "eng"]], "CTRL": [[5, "ctrl"]], "INFO": [[5, "info"]], "Environment variables": [[6, "environment-variables"]], "\ud83e\uddf0 Other tools": [[7, "other-tools"]], "jetson_config": [[8, "jetson-config"]], "Desktop": [[8, "desktop"]], "jetson_release": [[9, "jetson-release"]], "jetson_swap": [[10, "jetson-swap"]], "Exceptions": [[11, "exceptions"]], "Fan": [[12, "fan"]], "\ud83d\udcd6 API Reference": [[14, "api-reference"]], "jetson_clocks": [[15, "jetson-clocks"]], "Reference": [[15, null], [16, null], [16, null], [16, null], [16, null], [16, null], [16, null], [16, null], [18, null]], "jtop": [[16, "jtop"]], "Memory": [[17, "memory"]], "NVPModel": [[18, "nvpmodel"]], "\ud83d\udc96 Sponsor": [[19, "sponsor"]], "\ud83c\udd98 Troubleshooting": [[20, "troubleshooting"]], "pip3: command not found": [[20, "pip3-command-not-found"]], "jtop.service inactive": [[20, "jtop-service-inactive"]], "jtop start only with sudo": [[20, "jtop-start-only-with-sudo"]], "Bad visualization on Putty": [[20, "bad-visualization-on-putty"]], "Nothing fix my error": [[20, "nothing-fix-my-error"]]}, "indexentries": {"jtopexception (class in jtop)": [[11, "jtop.JtopException"]], "fan (class in jtop.core.fan)": [[12, "jtop.core.fan.Fan"]], "all_profiles() (jtop.core.fan.fan method)": [[12, "jtop.core.fan.Fan.all_profiles"]], "get_profile() (jtop.core.fan.fan method)": [[12, "jtop.core.fan.Fan.get_profile"]], "get_profile_default() (jtop.core.fan.fan method)": [[12, "jtop.core.fan.Fan.get_profile_default"]], "get_rpm() (jtop.core.fan.fan method)": [[12, "jtop.core.fan.Fan.get_rpm"]], "get_speed() (jtop.core.fan.fan method)": [[12, "jtop.core.fan.Fan.get_speed"]], "profile (jtop.core.fan.fan property)": [[12, "jtop.core.fan.Fan.profile"]], "rpm (jtop.core.fan.fan property)": [[12, "jtop.core.fan.Fan.rpm"]], "set_profile() (jtop.core.fan.fan method)": [[12, "jtop.core.fan.Fan.set_profile"]], "set_speed() (jtop.core.fan.fan method)": [[12, "jtop.core.fan.Fan.set_speed"]], "speed (jtop.core.fan.fan property)": [[12, "jtop.core.fan.Fan.speed"]], "gpu (class in jtop.core.gpu)": [[13, "jtop.core.gpu.GPU"]], "get_scaling_3d() (jtop.core.gpu.gpu method)": [[13, "jtop.core.gpu.GPU.get_scaling_3D"]], "scaling_3d (jtop.core.gpu.gpu property)": [[13, "jtop.core.gpu.GPU.scaling_3D"]], "set_scaling_3d() (jtop.core.gpu.gpu method)": [[13, "jtop.core.gpu.GPU.set_scaling_3D"]], "jetsonclocks (class in jtop.core.jetson_clocks)": [[15, "jtop.core.jetson_clocks.JetsonClocks"]], "boot (jtop.core.jetson_clocks.jetsonclocks property)": [[15, "jtop.core.jetson_clocks.JetsonClocks.boot"]], "clear_config() (jtop.core.jetson_clocks.jetsonclocks method)": [[15, "jtop.core.jetson_clocks.JetsonClocks.clear_config"]], "get_boot() (jtop.core.jetson_clocks.jetsonclocks method)": [[15, "jtop.core.jetson_clocks.JetsonClocks.get_boot"]], "get_enable() (jtop.core.jetson_clocks.jetsonclocks method)": [[15, "jtop.core.jetson_clocks.JetsonClocks.get_enable"]], "get_status() (jtop.core.jetson_clocks.jetsonclocks method)": [[15, "jtop.core.jetson_clocks.JetsonClocks.get_status"]], "is_config() (jtop.core.jetson_clocks.jetsonclocks method)": [[15, "jtop.core.jetson_clocks.JetsonClocks.is_config"]], "set_boot() (jtop.core.jetson_clocks.jetsonclocks method)": [[15, "jtop.core.jetson_clocks.JetsonClocks.set_boot"]], "set_enable() (jtop.core.jetson_clocks.jetsonclocks method)": [[15, "jtop.core.jetson_clocks.JetsonClocks.set_enable"]], "status (jtop.core.jetson_clocks.jetsonclocks property)": [[15, "jtop.core.jetson_clocks.JetsonClocks.status"]], "__init__() (jtop.jtop method)": [[16, "jtop.jtop.__init__"]], "attach() (jtop.jtop method)": [[16, "jtop.jtop.attach"]], "board (jtop.jtop property)": [[16, "jtop.jtop.board"]], "close() (jtop.jtop method)": [[16, "jtop.jtop.close"]], "cpu (jtop.jtop property)": [[16, "jtop.jtop.cpu"]], "detach() (jtop.jtop method)": [[16, "jtop.jtop.detach"]], "disk (jtop.jtop property)": [[16, "jtop.jtop.disk"]], "engine (jtop.jtop property)": [[16, "jtop.jtop.engine"]], "fan (jtop.jtop property)": [[16, "jtop.jtop.fan"]], "gpu (jtop.jtop property)": [[16, "jtop.jtop.gpu"]], "interval (jtop.jtop property)": [[16, "jtop.jtop.interval"]], "interval_user (jtop.jtop property)": [[16, "jtop.jtop.interval_user"]], "jetson_clocks (jtop.jtop property)": [[16, "jtop.jtop.jetson_clocks"]], "json() (jtop.jtop method)": [[16, "jtop.jtop.json"]], "jtop (class in jtop)": [[16, "jtop.jtop"]], "local_interfaces (jtop.jtop property)": [[16, "jtop.jtop.local_interfaces"]], "loop_for_ever() (jtop.jtop method)": [[16, "jtop.jtop.loop_for_ever"]], "memory (jtop.jtop property)": [[16, "jtop.jtop.memory"]], "nvpmodel (jtop.jtop property)": [[16, "jtop.jtop.nvpmodel"]], "ok() (jtop.jtop method)": [[16, "jtop.jtop.ok"]], "power (jtop.jtop property)": [[16, "jtop.jtop.power"]], "processes (jtop.jtop property)": [[16, "jtop.jtop.processes"]], "restore() (jtop.jtop method)": [[16, "jtop.jtop.restore"]], "start() (jtop.jtop method)": [[16, "jtop.jtop.start"]], "stats (jtop.jtop property)": [[16, "jtop.jtop.stats"]], "temperature (jtop.jtop property)": [[16, "jtop.jtop.temperature"]], "uptime (jtop.jtop property)": [[16, "jtop.jtop.uptime"]], "memory (class in jtop.core.memory)": [[17, "jtop.core.memory.Memory"]], "clear_cache() (jtop.core.memory.memory method)": [[17, "jtop.core.memory.Memory.clear_cache"]], "swap_deactivate() (jtop.core.memory.memory method)": [[17, "jtop.core.memory.Memory.swap_deactivate"]], "swap_is_enable() (jtop.core.memory.memory method)": [[17, "jtop.core.memory.Memory.swap_is_enable"]], "swap_path() (jtop.core.memory.memory method)": [[17, "jtop.core.memory.Memory.swap_path"]], "swap_set() (jtop.core.memory.memory method)": [[17, "jtop.core.memory.Memory.swap_set"]], "nvpmodel (class in jtop.core.nvpmodel)": [[18, "jtop.core.nvpmodel.NVPModel"]], "get_all_nvpmodels() (jtop.core.nvpmodel.nvpmodel method)": [[18, "jtop.core.nvpmodel.NVPModel.get_all_nvpmodels"]], "get_default() (jtop.core.nvpmodel.nvpmodel method)": [[18, "jtop.core.nvpmodel.NVPModel.get_default"]], "get_nvpmodel_id() (jtop.core.nvpmodel.nvpmodel method)": [[18, "jtop.core.nvpmodel.NVPModel.get_nvpmodel_id"]], "get_nvpmodel_name() (jtop.core.nvpmodel.nvpmodel method)": [[18, "jtop.core.nvpmodel.NVPModel.get_nvpmodel_name"]], "id (jtop.core.nvpmodel.nvpmodel property)": [[18, "jtop.core.nvpmodel.NVPModel.id"]], "is_running() (jtop.core.nvpmodel.nvpmodel method)": [[18, "jtop.core.nvpmodel.NVPModel.is_running"]], "models (jtop.core.nvpmodel.nvpmodel property)": [[18, "jtop.core.nvpmodel.NVPModel.models"]], "name (jtop.core.nvpmodel.nvpmodel property)": [[18, "jtop.core.nvpmodel.NVPModel.name"]], "set_nvpmodel_id() (jtop.core.nvpmodel.nvpmodel method)": [[18, "jtop.core.nvpmodel.NVPModel.set_nvpmodel_id"]], "set_nvpmodel_name() (jtop.core.nvpmodel.nvpmodel method)": [[18, "jtop.core.nvpmodel.NVPModel.set_nvpmodel_name"]], "status (jtop.core.nvpmodel.nvpmodel property)": [[18, "jtop.core.nvpmodel.NVPModel.status"]]}})