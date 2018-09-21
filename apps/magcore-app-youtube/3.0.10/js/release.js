! function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
    "use strict";

    function n() {
        var e, t = i(10),
            n = ["AuraHD2", "AuraHD3", "AuraHD8", "MAG254", "MAG275", "MAG276", "WR320"].indexOf(window.top.gSTB.GetDeviceModelExt()) !== -1;
        t.availHeight = t.height - (t.availTop + t.availBottom), t.availWidth = t.width - (t.availLeft + t.availRight), l.data || (l.data = {}), l.data.metrics = t, i(17).token && (l.data.metrics.mainMenuSize -= 2), l.pages = {
            main: i(21),
            search: i(57)
        }, s = new(i(51))({
            $node: document.getElementById("exitMessage"),
            events: {
                keydown: function(e) {
                    e.code === c.ok ? l.quit() : e.code !== c.back && e.code !== c.exit || (e.stop = !0, s.hide(), a.focus())
                }
            }
        }), s.$body.classList.add("modalExit"), s.$header.innerHTML = gettext("Exit from app?"), s.$content.innerHTML = "", s.$footer.innerHTML = "", s.$footer.appendChild(e = document.createElement("div")), e.innerText = gettext("Ok"), e.className = "btn confirm" + (n ? "" : " old"), s.$footer.appendChild(e = document.createElement("div")), e.className = "btn back" + (n ? "" : " old"), e.innerText = gettext("Cancelar"), l.params.search ? l.route(l.pages.search, {
            search: l.params.search
        }) : l.params.channelId ? l.route(l.pages.main, {
            channel: {
                id: l.params.channelId,
                noBack: !0
            }
        }) : l.route(l.pages.main), l.ready(), o = i(27)
    }
    var s, a, o, l = i(1),
        c = i(13),
        r = (i(15), i(16));
    l.quit = function() {
        core.storage.setItem(r.settingsFile, JSON.stringify(l.settings)), l.exit()
    }, l.reload = function() {
        core.storage.setItem(r.settingsFile, JSON.stringify(l.settings)), window.location.reload(), l.emit("load")
    }, l.addListeners({
        load: function() {
            var e, t, s = i(42),
                a = i(15);
            l.urlParser = core.plugins.youtubeDL;
            try {
                if (t = core.storage.getItem(r.settingsFile)) l.settings = JSON.parse(t);
                else {
                    for (e in r.defaultSettings) l.settings[e] && (l.settings[e] = r.defaultSettings[e]);
                    l.settings = r.defaultSettings, core.storage.setItem(r.settingsFile, JSON.stringify(l.settings))
                }
            } catch (e) {
                l.settings = !1
            }
            l.settings || (l.settings = r.defaultSettings, core.storage.setItem(r.settingsFile, JSON.stringify(l.settings)));
            for (e in r.defaultSettings) void 0 === l.settings[e] && (l.settings[e] = r.defaultSettings[e]);
            a.languages.indexOf(l.settings.keyboardLanguage) === -1 && (l.settings.keyboardLanguage = 0), l.params = i(71)(location.search.substring(1)), l.params.language && (l.settings.languageOverwrite = 1, l.settings.language = l.params.language), i(43).load({
                name: l.settings.language || core.environment.language || "br"
            }, function() {
                var e;
                l.languageIndex = s.languageIndex, l.settings.language = a.languages[l.languageIndex], document.documentElement.dir = a.directions[l.languageIndex], "rtl" === document.documentElement.dir && (e = c.left, c.left = c.right, c.right = e), n()
            }), l.settings.languageOverwrite ? s.setLang(l.settings.language) : l.settings.language = core.environment.language || "br"
        },
        unload: function() {
            core.storage.setItem(r.settingsFile, JSON.stringify(l.settings))
        },
        keydown: function(e) {
            e.stop || e.code === c.back && (o && !o.visible ? (a = l.activePage.activeComponent, s.show(), s.focus()) : l.quit())
        }
    })
}, function(e, t, i) {
    "use strict";
    var n = i(2);
    e.exports = n
}, function(e, t, i) {
    "use strict";
    var n = i(3),
        s = i(7);
    window.core = window.parent.getCoreInstance(window, n), i(8), i(9), i(11)("sdk"), i(12), i(11)("app"), n.platform = "mag", n.ready = function() {
        window.core.call("app:ready")
    }, n.exit = function() {
        n.events["exit"] && n.emit("exit"), core.call("exit")
    }, s.load = function(e) {
        document.body.setAttribute("platform", n.platform), core.ready ? n.events["load"] && n.emit("load", {}) : core.once("load", function() {
            n.events[e.type] && n.emit(e.type, e)
        })
    }, Object.keys(s).forEach(function(e) {
        window.addEventListener(e, s[e])
    }), e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        return !(!e || e.active) && (e.$node.classList.add("active"), e.active = !0, l.activePage = e, e.events["show"] && e.emit("show", {
            page: e,
            data: t
        }), !0)
    }

    function s(e) {
        return !(!e || !e.active) && (e.$node.classList.remove("active"), e.active = !1, l.activePage = null, e.events["hide"] && e.emit("hide", {
            page: e
        }), !0)
    }
    var a = i(4),
        o = i(5).parse,
        l = new a;
    l.query = o(document.location.search.substring(1)), l.config = i(6), l.activePage = null, l.route = function(e, t) {
        var i = l.activePage;
        return !(!e || e.active) && (s(l.activePage), n(e, t), this.events["route"] && this.emit("route", {
            from: i,
            to: e
        }), !0)
    }, e.exports = l
}, function(e, t, i) {
    "use strict";

    function n() {
        this.events = {}
    }
    n.prototype = {
        addListener: function(e, t) {
            this.events[e] = this.events[e] || [], this.events[e].push(t)
        },
        once: function(e, t) {
            var i = this;
            this.events[e] = this.events[e] || [], this.events[e].push(function n() {
                i.removeListener(e, n), t.apply(i, arguments)
            })
        },
        addListeners: function(e) {
            var t;
            for (t in e) e.hasOwnProperty(t) && this.addListener(t, e[t])
        },
        removeListener: function(e, t) {
            this.events[e] && (this.events[e] = this.events[e].filter(function(e) {
                return e !== t
            }), 0 === this.events[e].length && (this.events[e] = void 0))
        },
        emit: function(e) {
            var t, i = this.events[e];
            if (i)
                for (t = 0; t < i.length; t++) i[t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = {
        parse: function(e) {
            var t = {};
            return e.split("&").forEach(function(e) {
                e = e.split("="), 2 === e.length && (t[e[0]] = decodeURIComponent(e[1]))
            }), t
        },
        stringify: function(e) {
            var t = [];
            return Object.keys(e).forEach(function(i) {
                t.push(i + "=" + encodeURIComponent(e[i]))
            }), t.join("&")
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = {}
}, function(e, t, i) {
    "use strict";
    var n = i(3);
    e.exports = {
        DOMContentLoaded: function(e) {
            n.events["dom"] && n.emit("dom", e)
        },
        load: function(e) {
            n.events[e.type] && n.emit(e.type, e)
        },
        unload: function(e) {
            n.events[e.type] && n.emit(e.type, e)
        },
        error: function(e) {},
        keydown: function(e) {
            var t, i = n.activePage,
                s = {
                    code: e.keyCode,
                    stop: !1
                };
            e.ctrlKey && (s.code += "c"), e.altKey && (s.code += "a"), e.shiftKey && (s.code += "s"), t = i.activeComponent, t && t !== i && (t.events[e.type] && t.emit(e.type, s, e), !s.stop && t.propagate && t.parent && t.parent.events[e.type] && t.parent.emit(e.type, s, e)), s.stop || (i.events[e.type] && i.emit(e.type, s, e), e.stop || n.events[e.type] && n.emit(e.type, s, e))
        },
        keypress: function(e) {
            var t = n.activePage;
            t.activeComponent && t.activeComponent !== t && t.activeComponent.events[e.type] && t.activeComponent.emit(e.type, e)
        },
        mousewheel: function(e) {
            var t = n.activePage;
            t.activeComponent && t.activeComponent !== t && t.activeComponent.events[e.type] && t.activeComponent.emit(e.type, e), e.stop || t.events[e.type] && t.emit(e.type, e)
        }
    }
}, function(e, t) {
    "use strict";
    if (!document.documentElement.classList) {
        var i = Array.prototype,
            n = i.indexOf,
            s = i.slice,
            a = i.push,
            o = i.splice,
            l = i.join;
        window.DOMTokenList = function(e) {
            if (this._element = e, e.className !== this._classCache) {
                if (this._classCache = e.className, !this._classCache) return;
                var t, i = this._classCache.replace(/^\s+|\s+$/g, "").split(/\s+/);
                for (t = 0; t < i.length; t++) a.call(this, i[t])
            }
        }, window.DOMTokenList.prototype = {
            add: function(e) {
                this.contains(e) || (a.call(this, e), this._element.className = s.call(this, 0).join(" "))
            },
            contains: function(e) {
                return n.call(this, e) !== -1
            },
            item: function(e) {
                return this[e] || null
            },
            remove: function(e) {
                var t = n.call(this, e);
                t !== -1 && (o.call(this, t, 1), this._element.className = s.call(this, 0).join(" "))
            },
            toString: function() {
                return l.call(this, " ")
            },
            toggle: function(e) {
                return this.contains(e) ? this.remove(e) : this.add(e), this.contains(e)
            }
        }, Object.defineProperty(Element.prototype, "classList", {
            get: function() {
                return new window.DOMTokenList(this)
            }
        })
    }
}, function(e, t, i) {
    "use strict";
    var n = i(3),
        s = i(10);
    n.metrics = s[n.query.screenHeight] || s[screen.height] || s[720], n.metrics.availHeight = n.metrics.height - (n.metrics.availTop + n.metrics.availBottom), n.metrics.availWidth = n.metrics.width - (n.metrics.availLeft + n.metrics.availRight)
}, function(e, t) {
    "use strict";
    e.exports = {
        480: {
            height: 480,
            width: 720,
            availTop: 24,
            availBottom: 24,
            availRight: 32,
            availLeft: 48,
            mainMenuSize: 8
        },
        576: {
            height: 576,
            width: 720,
            availTop: 24,
            availBottom: 24,
            availRight: 28,
            availLeft: 54,
            mainMenuSize: 10
        },
        720: {
            height: 720,
            width: 1280,
            availTop: 10,
            availBottom: 10,
            availRight: 10,
            availLeft: 10,
            mainMenuSize: 9
        },
        1080: {
            height: 1080,
            width: 1920,
            availTop: 15,
            availBottom: 15,
            availRight: 15,
            availLeft: 15,
            mainMenuSize: 9
        }
    }
}, function(e, t, i) {
    "use strict";
    var n = i(3);
    e.exports = function(e) {
        var t = document.createElement("link");
        t.rel = "stylesheet", t.href = "css/release." + e + "." + n.metrics.height + ".css", document.head.appendChild(t)
    }
}, function(e, t, i) {
    "use strict";
    var n, s = i(3);
    n = document.createElement("link"), n.rel = "stylesheet", n.href = window.core.theme.path + s.metrics.height + ".css", document.head.appendChild(n), e.exports = n
}, function(e, t, i) {
    "use strict";
    var n = i(14);
    n.back = n.backspace, n.channelNext = n.tab, n.channelPrev = n.tab + "s", n.ok = n.enter, n.exit = n.escape, n.volumeUp = 107, n.volumeDown = 109, n.f1 = "112c", n.f2 = "113c", n.f3 = "114c", n.f4 = "115c", n.refresh = "116c", n.frame = "117c", n.phone = "119c", n.set = "120c", n.tv = "121c", n.menu = "122c", n.app = "123c", n.rewind = "66a", n.forward = "70a", n.audio = "71a", n.standby = "74a", n.keyboard = "76a", n.usbMounted = "80a", n.usbUnmounted = "81a", n.playPause = "82a", n.play = -1, n.pause = -1, n.stop = "83a", n.power = "85a", n.record = "87a", n.info = "89a", n.mute = "192a", n.digit0 = 48, n.digit1 = 49, n.digit2 = 50, n.digit3 = 51, n.digit4 = 52, n.digit5 = 53, n.digit6 = 54, n.digit7 = 55, n.digit8 = 56, n.digit9 = 57, e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = {
        backspace: 8,
        tab: 9,
        enter: 13,
        escape: 27,
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        del: 46
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        active: !0,
        languages: ["br", "en", "ru", "uk", "de"],
        languagesCodeLocalized: ["BR", "EN", "РУ", "УКР", "DE"],
        languagesLocalized: ["Português do Brasil", "English", "Русский", "Українська", "Deutch"],
        locales: ["pt-BR", "en-US", "ru-RU", "uk-UA", "de-DE"],
        regions: ["BR", "US", "RU", "UA", "DE"],
        directions: ["ltr", "ltr", "ltr", "ltr", "ltr"],
        fromCode: "UTF-8",
        addComments: "gettext",
        indent: !1,
        noLocation: !0,
        noWrap: !0,
        sortOutput: !0,
        sortByFile: !1,
        verbose: !1
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        defaultSettings: {
            safeSearch: 0,
            quality: 0,
            language: "br",
            languageOverwrite: 0,
            keyboardLanguage: 0,
            credentialsIndex: -1,
            refreshToken: null,
            sessionToken: null
        },
        settingsFile: "youtube.json",
        logging: !1,
        ajaxDebug: !1
    }
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    function s(e, t) {
        var i, a, o = m.credentials[e];
        i = new XMLHttpRequest, a = "https://www.googleapis.com/youtube/v3/search?part=id&hl=pt-BR&regionCode=BR&q=sad&key=", i.onload = function() {
            200 === this.status ? (m.activeKey = m.credentials[e].key, m.staticUrl = "&key=" + m.activeKey + "&hl=" + h.locales[r.languageIndex] + "&regionCode=" + m.regionCode, t()) : s(n(0, m.credentials.length - 1), t)
        }, i.open("GET", a + o.key), i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("Content-Type", "application/json"), i.send()
    }

    function a(e, t) {
        var i, n = 0,
            s = e.length,
            a = [];
        for (a.length = s; n < s;) i = n % t.length, a[n] = String.fromCharCode(e.charCodeAt(n) ^ t.charCodeAt(i)), ++n;
        return a.join("")
    }

    function o(e) {
        var t;
        try {
            t = JSON.parse(e), t.keys && (m.credentials = t.keys)
        } catch (e) {
            t = {
                menu: {}
            }
        }
        return new d(function(e) {
            var i;
            t.keys && "AIzaSyCFtsKHmupT42nYB2HO_xiwMIrkWe4CD3c" !== t.keys[0].key || (i = new XMLHttpRequest, i.open("GET", "1.cab", !1), i.send(), i = a(atob(i.responseText), kol("googleshallnotpass", "magiscool")), m.credentials = JSON.parse(i).map(function(e) {
                return {
                    key: e.k,
                    clientId: e.c,
                    secret: e.s
                }
            })), s(n(0, m.credentials.length - 1), function() {
                t.menu && t.menu.categories ? (Object.keys(t.menu.categories).forEach(function(e) {
                    m.categories.push({
                        id: e,
                        value: t.menu.categories[e],
                        title: t.menu.categories[e],
                        icon: p[e]
                    })
                }), t.menu.channels && Object.keys(t.menu.channels).forEach(function(e) {
                    m.subscriptions.push({
                        id: e,
                        value: t.menu.channels[e],
                        title: t.menu.channels[e],
                        icon: p["GCVG9wIEJsb2dz"]
                    })
                }), e()) : m.request("GET", "guideCategories?part=snippet").then(function(i) {
                    i && i.items && i.items.forEach(function(e) {
                        m.categories.push({
                            id: e.id,
                            title: e.snippet.title,
                            value: e.snippet.title,
                            icon: p[e.id]
                        })
                    }), t.menu && t.menu.channels && Object.keys(t.menu.channels).forEach(function(e) {
                        m.subscriptions.push({
                            id: e,
                            value: e,
                            title: t.menu.channels[e],
                            icon: p["GCVG9wIEJsb2dz"]
                        })
                    }), e()
                }, function(t) {
                    403 === t && m.credentials.length > 0 || e()
                })
            })
        })
    }

    function l() {
        var e = new XMLHttpRequest,
            t = "https://raw.githubusercontent.com/GeraldBrooks/youtube/master/config.json";
        return r.params.config && (t = r.params.config), e.open("GET", t), u(e).then(function(e) {
            return o(e)
        })["catch"](function(t) {
            e.open("GET", "config.json"), u(e).then(function(e) {
                return o(e)
            })["catch"](function() {
                o()
            })
        })
    }

    function c(e) {}
    var r = i(1),
        d = i(18),
        u = i(19),
        h = i(15),
        p = i(20),
        m = {
            credentials: [],
            categories: [],
            subscriptions: [],
            playlists: [],
            BASE_URL: "https://www.googleapis.com/youtube/v3/",
            APP_DOMAIN: "https://mathiasbynens.be/demo/css-without-html",
            AUTH_URL: "",
            credentialsIndex: 0,
            token: !1,
            refreshToken: !1,
            activeKey: "",
            staticUrl: "",
            regionCode: "",
            request: function(e, t, i) {
                var n = this;
                return new d(function(s, a) {
                    var o = new XMLHttpRequest;
                    o.open(e, n.BASE_URL + t + n.staticUrl + "&qq=123"), o.setRequestHeader("Accept", "application/json"), o.setRequestHeader("Content-Type", "application/json"), n.token && o.setRequestHeader("Authorization", "Bearer " + n.token), o.onload = function() {
                        200 === this.status ? s(this.responseText) : 401 === this.status ? (m.token = !1, r.settings.sessionToken = !1, c(r.settings).then(function() {
                            return l()
                        }, function() {
                            o.request(e, t, i).then(function(e) {
                                s(e)
                            })
                        })["catch"](function(e) {
                            a(e)
                        })) : a(403 === this.status ? this.status : this.status)
                    }, o.onerror = function() {
                        a()
                    }, o.send(i)
                })
            }
        };
    m.init = function(e) {
        return r.params.regionCode ? m.regionCode = r.params.regionCode : m.regionCode = h.regions[r.languageIndex], l()
    }, m.postAuth = function(e) {}, m.normalizeVideoDuration = function(e) {
        var t, i, n, s = new Date(0);
        return e = e.replace("PT", "").replace("S", "").split("M"), e.length > 1 ? (e[0] = e[0].split("H"), e[0].length > 1 ? (s.setUTCHours(e[0][0]), s.setUTCMinutes(e[0][1])) : s.setUTCMinutes(e[0]), s.setUTCSeconds(e[1]), n = e[1]) : (s.setUTCSeconds(e[0]), n = e[0]), t = s.getUTCHours(), i = s.getUTCMinutes(), n < 10 && (n || (n = "0"), n = "0" + n), t > 1 && i < 10 && (i = "0" + i), t < 1 ? t = "" : t < 10 && (t = "0" + t + ":"), t + i + ":" + n
    }, e.exports = m
}, function(e, t, i) {
    "use strict";

    function n(e) {
        this.state = null, this.value = null, this.deferreds = [], d(e, s(o, this), s(l, this))
    }

    function s(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }

    function a(e) {
        var t = this;
        return null === this.state ? void this.deferreds.push(e) : void setTimeout(function() {
            var i, n = t.state ? e.onFulfilled : e.onRejected;
            if (null === n) return void(t.state ? e.resolve : e.reject)(t.value);
            try {
                i = n(t.value)
            } catch (t) {
                return void e.reject(t)
            }
            e.resolve(i)
        })
    }

    function o(e) {
        try {
            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var t = e.then;
                if ("function" == typeof t) return void d(s(t, e), s(o, this), s(l, this))
            }
            this.state = !0, this.value = e, c.call(this)
        } catch (e) {
            l.call(this, e)
        }
    }

    function l(e) {
        this.state = !1, this.value = e, c.call(this)
    }

    function c() {
        var e, t;
        for (e = 0, t = this.deferreds.length; e < t; e++) a.call(this, this.deferreds[e]);
        this.deferreds = null
    }

    function r(e, t, i, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = i, this.reject = n
    }

    function d(e, t, i) {
        var n = !1;
        try {
            e(function(e) {
                n || (n = !0, t(e))
            }, function(e) {
                n || (n = !0, i(e))
            })
        } catch (e) {
            if (n) return;
            n = !0, i(e)
        }
    }
    n.prototype["catch"] = function(e) {
        return this.then(null, e)
    }, n.prototype.then = function(e, t) {
        var i = this;
        return new n(function(n, s) {
            a.call(i, new r(e, t, n, s))
        })
    }, n.all = function() {
        var e = Array.prototype.slice.call(1 === arguments.length && Array.isArray(arguments[0]) ? arguments[0] : arguments);
        return new n(function(t, i) {
            function n(s, o) {
                try {
                    if (o && ("object" == typeof o || "function" == typeof o)) {
                        var l = o.then;
                        if ("function" == typeof l) return void l.call(o, function(e) {
                            n(s, e)
                        }, i)
                    }
                    e[s] = o, 0 === --a && t(e)
                } catch (e) {
                    i(e)
                }
            }
            var s, a = e.length;
            if (0 === e.length) return t([]);
            for (s = 0; s < e.length; s++) n(s, e[s])
        })
    }, n.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === n ? e : new n(function(t) {
            t(e)
        })
    }, n.reject = function(e) {
        return new n(function(t, i) {
            i(e)
        })
    }, n.race = function(e) {
        return new n(function(t, i) {
            for (var n = 0, s = e.length; n < s; n++) e[n].then(t, i)
        })
    }, e.exports = window.Promise || n
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        return new s(function(i, n) {
            e.onload = function() {
                200 === this.status ? i(this.responseText) : n(this.statusText)
            }, e.onerror = function() {
                n()
            }, e.send(t)
        })
    }
    var s = i(18);
    e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = {
        GCQmVzdCBvZiBZb3VUdWJl: "icon popular",
        GCUGFpZCBDaGFubmVscw: "icon purchases",
        GCTXVzaWM: "icon music",
        GCQ29tZWR5: "icon humor",
        GCRmlsbSAmIEVudGVydGFpbm1lbnQ: "icon entertainment",
        GCR2FtaW5n: "icon games",
        GCQmVhdXR5ICYgRmFzaGlvbg: "icon social",
        GCRnJvbSBUVg: "fa fa-youtube-play",
        GCQXV0b21vdGl2ZQ: "fa fa-car",
        GCQW5pbWF0aW9u: "fa fa-picture-o",
        GCVG9wIFlvdVR1YmUgQ29sbGVjdGlvbnM: "icon popular",
        GCVG9wIEJsb2dz: "icon social",
        GCU3BvcnRz: "icon sport",
        GCSG93LXRvICYgRElZ: "fa fa-wrench",
        GCVGVjaA: "icon hobbie",
        GCU2NpZW5jZSAmIEVkdWNhdGlvbg: "fa fa-book",
        GCQ29va2luZyAmIEhlYWx0aA: "fa fa-spoon",
        GCQ2F1c2VzICYgTm9uLXByb2ZpdHM: "fa fa-users",
        GCTmV3cyAmIFBvbGl0aWNz: "icon news",
        GCTGlmZXN0eWxl: "fa fa-leaf"
    }
}, function(e, t, i) {
    "use strict";
    var n, s, a, o = i(13),
        l = i(1),
        c = i(22),
        r = "pm",
        d = i(25),
        u = new c({
            $node: document.getElementById(r)
        }),
        h = null;
    u.addListener("keydown", function(e) {
        e.code === o.info ? n.focus() : e.code === o.f3 ? l.route(l.pages.search) : e.code === o.back && h && (l.route(h), e.stop = !0)
    }), u.once("show", function() {
        s.content.tabs[s.activeTab].activate()
    }), u.addListener("show", function(e) {
        h = null, window.page = e.page, d.updateView({
            SEARCH: {
                icon: "search",
                visible: !0,
                text: gettext("Search")
            },
            MORE: {
                icon: "more",
                visible: !1,
                text: ""
            },
            GUIDE: {
                icon: "info",
                visible: !0,
                text: gettext("Guide")
            },
            BACK: {
                icon: "back",
                visible: !0,
                text: gettext("Exit")
            }
        }, "pageMain"), e.data && e.data.channel ? (a = s.activeTab, s.content.tabs[s.activeTab].hide(), s.activeTab = 1, e.data.channel.noBack || (h = l.pages.search), s.content.tabs[s.activeTab].activate(e.data.channel)) : s.content.tabs.length > 0 && (a || (a = 3), s.content.tabs[s.activeTab].hide(), s.activeTab = a, s.content.tabs[s.activeTab].activate())
    }), u.addListener("hide", function() {
        i(27).hide()
    }), s = i(28), u.add(n = i(29)), n.addListener("show", function() {
        d.updateView({
            SEARCH: {
                icon: "search",
                visible: !1,
                text: gettext("Search")
            },
            GUIDE: {
                icon: "info",
                visible: !0,
                text: gettext("Close Guide")
            }
        }, "pageMain")
    }), n.addListener("hide", function() {
        d.updateView({
            SEARCH: {
                icon: "search",
                visible: !0,
                text: gettext("Search")
            },
            GUIDE: {
                icon: "info",
                visible: !0,
                text: gettext("Guide")
            }
        }, "pageMain")
    }), s.content.tabs.push(i(32)), s.content.tabs.push(i(47)), s.content.tabs.push(i(50)), s.content.tabs.push(i(55)), s.content.tabs.forEach(function(e) {
        u.add(e)
    }), i(17).token ? i(46).getMine().then(function(e) {
        window.pmUserInfo.data = {
            disabled: !0
        }, window.pmUserInfo.appendChild(document.createElement("div")), window.pmUserInfo.firstChild.style.backgroundImage = "url(" + e.icon + ")", window.pmUserInfo.firstChild.classList.add("userImage"), window.pmUserInfo.appendChild(document.createElement("div")), window.pmUserInfo.children[1].innerHTML = e.title, window.pmUserInfo.children[1].classList.add("userName")
    })["catch"](function(e) {}) : window.pmUserInfo.style.display = "none", e.exports = u
}, function(e, t, i) {
    "use strict";
    e.exports = i(23), e.exports.prototype.name = "stb-component-page"
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.active = !1, this.activeComponent = null, s.call(this, e), this.active = this.$node.classList.contains("active"), null === this.$node.parentNode && document.body.appendChild(this.$node), this.page = this
    }
    var s = i(24);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.prototype.name = "spa-component-page", e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t, i = this;
        if (e = e || {}, this.visible = !0, this.focusable = !0, this.$node = null, this.$body = null, this.parent = null, this.children = [], this.propagate = !!e.propagate, a.call(this), this.$node = e.$node || document.createElement("div"), this.$body = e.$body || this.$node, this.$node.className = this.name + " " + (e.className || ""), this.id = e.id || this.$node.id || "cid" + o++, e.parent && e.parent.add(this), e.visible === !1 && this.hide(), e.focusable === !1 && (this.focusable = !1), this.defaultEvents) {
            e.events = e.events || {};
            for (t in this.defaultEvents) e.events[t] = e.events[t] || this.defaultEvents[t]
        }
        e.events && Object.keys(e.events).forEach(function(t) {
            i.addListener(t, e.events[t])
        }), e.children && this.add.apply(this, e.children), this.$node.addEventListener("click", function(e) {
            i.focus(), i.events["click"] && i.emit("click", e), e.stopPropagation()
        })
    }
    var s = i(3),
        a = i(4),
        o = 0;
    n.prototype = Object.create(a.prototype), n.prototype.constructor = n, n.prototype.defaultEvents = null, n.prototype.add = function(e) {
        var t;
        for (t = 0; t < arguments.length; t++) e = arguments[t], this.children.push(e), e.parent = this, e.$node && null === e.$node.parentNode && this.$body.appendChild(e.$node), this.events["add"] && this.emit("add", {
            item: e
        })
    }, n.prototype.remove = function() {
        this.parent && (s.activePage.activeComponent === this && (this.blur(), this.parent.focus()), this.parent.children.splice(this.parent.children.indexOf(this), 1)), this.children.forEach(function(e) {
            e.remove()
        }), this.events = {}, this.$node.parentNode.removeChild(this.$node), this.events["remove"] && this.emit("remove")
    }, n.prototype.focus = function(e) {
        var t = s.activePage,
            i = t.activeComponent;
        return !(!this.focusable || this === i) && (i && i.blur(), t.activeComponent = i = this, i.$node.classList.add("focus"), i.events["focus"] && i.emit("focus", e), !0)
    }, n.prototype.blur = function() {
        var e = s.activePage,
            t = e.activeComponent;
        return this.$node.classList.remove("focus"), this === t && (e.activeComponent = null, this.events["blur"] && this.emit("blur"), !0)
    }, n.prototype.show = function(e) {
        return !!this.visible || (this.$node.classList.remove("hidden"), this.visible = !0, this.events["show"] && this.emit("show", e), !0)
    }, n.prototype.hide = function() {
        return !this.visible || (this.$node.classList.add("hidden"), this.visible = !1, this.events["hide"] && this.emit("hide"), !0)
    }, e.exports = n
}, function(e, t, i) {
    "use strict";
    var n, s = i(26),
        a = new s({
            $node: document.getElementById("widgetHintButtons"),
            visible: !1
        }),
        o = {
            BACK: document.getElementById("hintBack"),
            SEARCH: document.getElementById("hintSearch"),
            MORE: document.getElementById("hintMore"),
            GUIDE: document.getElementById("hintGuide")
        };
    for (n in o) o[n].$icon = o[n].appendChild(document.createElement("div")), o[n].$label = o[n].appendChild(document.createElement("div")), o[n].$label.className = "hintText";
    a.updateView = function(e, t) {
        var i;
        this.show();
        for (i in e) e.hasOwnProperty(i) && (e[i].visible ? (o[i].$icon.className = "ico " + e[i].icon, o[i].style.display = "", o[i].$label.innerHTML = e[i].text) : o[i].style.display = "none");
        t ? a.$node.className = "component widget " + t : a.$node.className = "component widget"
    }, e.exports = a
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.focusable = e.focusable || !1, e.visible = e.visible || !1, s.call(this, e)
    }
    var s = i(24);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.prototype.name = "spa-component-widget", e.exports = n
}, function(e, t, i) {
    "use strict";

    function n() {
        c && (a.$node.style.backgroundImage = "url(" + r[l].src + ")", ++l, 4 === l && (l = 0)), o = setTimeout(n, 200)
    }
    var s = i(26),
        a = new s({
            $node: document.getElementById("loaderWidget"),
            visible: !1
        }),
        o = -1,
        l = 0,
        c = !1,
        r = [];
    ! function() {
        var e = 4;
        ["img/loader/1.png", "img/loader/2.png", "img/loader/3.png", "img/loader/4.png"].forEach(function(t) {
            var i = new Image;
            i.src = t, i.onload = function() {
                --e, 0 === e && (c = !0)
            }, r.push(i)
        })
    }(), a.show = function(e) {
        return !!this.visible || (this.$node.classList.remove("hidden"), this.visible = !0, void 0 !== this.events["show"] && this.emit("show", e), o = setTimeout(n, 200), !0)
    }, a.hide = function() {
        return l = 1, clearTimeout(o), !this.visible || (this.$node.classList.add("hidden"), this.visible = !1, void 0 !== this.events["hide"] && this.emit("hide"), !0)
    }, e.exports = a
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        s = {
            types: {
                CATEGORY_HEADER: 1,
                CATEGORY_ITEM: 2
            },
            content: {
                data: [],
                focusIndex: 1,
                tabs: []
            },
            activeTab: 3
        };
    s.content.data.push({
        disabled: !1,
        onclick: function() {
            n.route(n.pages.search)
        },
        type: s.types.CATEGORY_ITEM,
        value: gettext("Search"),
        id: -2,
        className: "icon search"
    }), s.content.data.push({
        disabled: !1,
        tabIndex: 3,
        type: s.types.CATEGORY_ITEM,
        value: gettext("Main"),
        id: -2,
        className: "icon what-to-watch"
    }), s.content.data.push({
        disabled: !1,
        tabIndex: 2,
        type: s.types.CATEGORY_ITEM,
        value: gettext("Settings"),
        id: -2,
        className: "icon player-settings"
    }), e.exports = s
}, function(e, t, i) {
    "use strict";
    var n, s = i(13),
        a = i(1),
        o = i(30),
        l = i(28);
    n = new o({
        $node: window.pmListMainMenu,
        $body: window.pmListMainMenuBody,
        className: "hidden",
        data: l.content.data,
        size: a.data.metrics.mainMenuSize,
        focusIndex: l.content.focusIndex,
        render: function(e, t) {
            e.ready || (e.$icon = document.createElement("span"), e.appendChild(e.$icon), e.$label = document.createElement("span"), e.appendChild(e.$label), e.ready = !0), t.type === l.types.CATEGORY_ITEM ? (e.$icon.className = t.className || "image", e.$icon.style.backgroundImage = t.icon ? "url(" + t.icon + ")" : "none", e.$label.className = "itemLabel", e.$label.innerHTML = t.value) : t.type === l.types.CATEGORY_HEADER && (e.$icon.className = "", e.$label.className = "categorylabel", e.$label.innerHTML = t.value)
        },
        visible: !1,
        events: {
            keydown: function(e) {
                switch (e.code) {
                    case s.back:
                    case s.right:
                    case s.info:
                        this.hide(), l.content.tabs[l.activeTab].activate(), e.stop = !0;
                        break;
                    case s.up:
                    case s.down:
                    case s.pageUp:
                    case s.pageDown:
                    case s.home:
                    case s.end:
                        this.move(e.code);
                        break;
                    case s.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
            },
            "click:item": function(e) {
                this.hide(), "function" == typeof e.$item.data.onclick ? (l.content.tabs[l.activeTab].activate(e.$item.data), e.$item.data.onclick()) : (l.content.tabs[l.activeTab].hide(), l.activeTab = e.$item.data.tabIndex, l.content.tabs[l.activeTab].activate(e.$item.data))
            },
            focus: function() {
                this.show()
            }
        }
    }), n.move = function(e) {
        var t = null,
            i = null;
        e === s.up && this.$focusItem && this.$focusItem.index > 0 && (this.$focusItem === this.$body.firstChild ? i = this.viewIndex - 1 : t = this.$focusItem.previousSibling), e === s.down && this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem === this.$body.lastChild ? i = this.viewIndex + 1 : t = this.$focusItem.nextSibling), e === s.pageUp && (i = this.viewIndex < this.size ? 0 : this.viewIndex - this.size + 1, t = this.$body.firstChild), e === s.pageDown && (this.data.length > this.size ? (i = this.viewIndex > this.data.length - 2 * this.size ? this.data.length - this.size : this.viewIndex + this.size - 1, t = this.$body.lastChild) : t = this.$body.children[this.data.length - 1]), e === s.home && (i = 0, t = this.$body.firstChild), e === s.end && (this.data.length > this.size ? (i = this.data.length - this.size, t = this.$body.lastChild) : t = this.$body.children[this.data.length - 1]), null !== i && this.renderView(i), null !== t && this.focusItem(t), this.$focusItem.data.disabled && (this.$focusItem.index > 0 ? this.move(e) : e === s.up && this.move(s.down))
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.$focusItem = null, this.viewIndex = null, this.data = [], this.type = this.TYPE_VERTICAL, this.size = 5, this.cycle = !1, this.scroll = null, e.type && (this.type = e.type), this.provider = null, e.className = e.className || "", this.type === this.TYPE_HORIZONTAL && (e.className += " horizontal"), a.call(this, e), this.init(e)
    }

    function s(e) {
        var t, i;
        for (t = 0; t < e.length; t++) i = e[t], "object" != typeof i && (i = e[t] = {
            value: e[t]
        });
        return e
    }
    var a = i(31),
        o = i(13);
    n.prototype = Object.create(a.prototype), n.prototype.constructor = n, n.prototype.name = "mag-component-list", n.prototype.TYPE_VERTICAL = 1, n.prototype.TYPE_HORIZONTAL = 2, n.prototype.renderItemDefault = function(e, t) {
        e.innerText = t.value
    }, n.prototype.renderItem = n.prototype.renderItemDefault, n.prototype.defaultEvents = {
        mousewheel: function(e) {
            this.type === this.TYPE_VERTICAL && e.wheelDeltaY && this.move(e.wheelDeltaY > 0 ? o.up : o.down), this.type === this.TYPE_HORIZONTAL && e.wheelDeltaX && this.move(e.wheelDeltaX > 0 ? o.left : o.right)
        },
        keydown: function(e) {
            switch (e.code) {
                case o.up:
                case o.down:
                case o.right:
                case o.left:
                case o.pageUp:
                case o.pageDown:
                case o.home:
                case o.end:
                    this.move(e.code);
                    break;
                case o.enter:
                    this.events["click:item"] && this.$focusItem && this.emit("click:item", {
                        $item: this.$focusItem,
                        event: e
                    })
            }
        }
    }, n.prototype.init = function(e) {
        var t, i, n = this,
            s = this.$body.children.length,
            a = function(e) {
                this.data && (n.focusItem(this), n.events["click:item"] && n.emit("click:item", {
                    $item: this,
                    event: e
                }))
            };
        if (void 0 !== e.cycle && (this.cycle = e.cycle), e.scroll && (this.scroll = e.scroll), e.provider && (this.provider = e.provider), e.render && (this.renderItem = e.render), e.size && (this.size = e.size), e.events && Object.keys(e.events).forEach(function(t) {
                n.events[t] = null, n.addListener(t, e.events[t])
            }), this.size !== s)
            for (s > 0 && (this.$body.innerText = null), i = 0; i < this.size; i++) t = document.createElement("div"), t.index = i, t.className = "item", t.addEventListener("click", a), this.$body.appendChild(t);
        this.provider ? this.provider.get(null, function(t, i) {
            t ? n.events["data:error"] && n.emit("data:error", t) : (i && (e.data = i, n.setData(e), n.scroll && n.scroll.init({
                realSize: n.provider.maxCount,
                viewSize: n.provider.size,
                value: n.provider.head + n.provider.pos
            })), n.events["data:get"] && n.emit("data:get"))
        }) : e.data && this.setData(e)
    }, n.prototype.setData = function(e) {
        e.data && (this.data = s(e.data)), this.viewIndex = null, this.$focusItem && this.blurItem(this.$focusItem), this.scroll && (this.provider ? this.scroll.realSize !== this.provider.maxCount && this.scroll.init({
            realSize: this.provider.maxCount,
            viewSize: this.provider.size,
            value: this.provider.head + this.provider.pos
        }) : this.scroll.init({
            realSize: this.data.length,
            viewSize: this.size,
            value: e.viewIndex || 0
        })), void 0 !== e.focusIndex && this.data.length ? this.focusIndex(e.focusIndex) : this.renderView(e.viewIndex || 0)
    }, n.prototype.renderView = function(e) {
        var t, i, n, s, a;
        if (this.viewIndex !== e) {
            for (s = this.viewIndex, this.viewIndex = a = e, i = 0; i < this.size; i++) t = this.$body.children[i], n = this.data[e], n ? (t.data = n, t.index = e, this.renderItem(t, n), n.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "&nbsp;", t.ready = !1), e++;
            return this.events["move:view"] && this.emit("move:view", {
                prevIndex: s,
                currIndex: a
            }), this.events["select:item"] && this.emit("select:item", {
                $item: t
            }), this.scroll && this.scroll.scrollTo(this.provider ? this.provider.head + this.provider.pos : this.viewIndex), !0
        }
        return !1
    }, n.prototype.move = function(e) {
        var t = this,
            i = !1;
        if (this.data.length) switch (e) {
            case o.left:
                if (this.type !== this.TYPE_HORIZONTAL) break;
                i = !0;
            case o.up:
                (i || this.type === this.TYPE_VERTICAL) && (this.$focusItem && this.$focusItem.index > 0 ? this.$focusItem === this.$body.firstChild ? this.renderView(this.viewIndex - 1) : this.focusItem(this.$focusItem.previousSibling) : this.provider ? this.provider.get(e, function(e, i, n) {
                    e ? t.events["data:error"] && t.emit("data:error", e) : i && t.setData({
                        data: i,
                        focusIndex: n || 0 === n ? n : t.$focusItem.index
                    })
                }) : (this.cycle && this.move(o.end), this.events["overflow"] && this.emit("overflow", {
                    direction: e,
                    cycle: this.cycle
                })));
                break;
            case o.right:
                if (this.type !== this.TYPE_HORIZONTAL) break;
                i = !0;
            case o.down:
                (i || this.type === this.TYPE_VERTICAL) && (this.$focusItem && this.$focusItem.index < this.data.length - 1 ? this.$focusItem === this.$body.lastChild ? this.renderView(this.viewIndex + 1) : this.focusItem(this.$focusItem.nextSibling) : this.provider ? this.provider.get(e, function(e, i, n) {
                    e ? t.events["data:error"] && t.emit("data:error", e) : i && t.setData({
                        data: i,
                        focusIndex: n || 0 === n ? n : t.$focusItem.index
                    })
                }) : (this.cycle && this.move(o.home), this.events["overflow"] && this.emit("overflow", {
                    direction: e,
                    cycle: this.cycle
                })));
                break;
            case o.pageUp:
                if (this.provider) return void this.provider.get(e, function(e, i, n) {
                    e ? t.events["data:error"] && t.emit("data:error", e) : i && t.setData({
                        data: i,
                        focusIndex: n ? n : 0
                    })
                });
                this.viewIndex < this.size ? this.renderView(0) : this.renderView(this.viewIndex - this.size + 1), this.focusItem(this.$body.firstChild);
                break;
            case o.pageDown:
                if (this.provider) {
                    this.provider.get(e, function(e, i, n) {
                        e ? t.events["data:error"] && t.emit("data:error", e) : i && t.setData({
                            data: i,
                            focusIndex: n || 0 === n ? n : i.length < t.size ? i.length - 1 : t.size - 1
                        })
                    });
                    break
                }
                this.data.length > this.size ? (this.viewIndex > this.data.length - 2 * this.size ? this.renderView(this.data.length - this.size) : this.renderView(this.viewIndex + this.size - 1), this.focusItem(this.$body.lastChild)) : this.focusItem(this.$body.children[this.data.length - 1]);
                break;
            case o.home:
                if (this.provider) {
                    this.provider.get(e, function(e, i, n) {
                        e ? t.events["data:error"] && t.emit("data:error", e) : i && t.setData({
                            data: i,
                            focusIndex: n ? n : 0
                        })
                    });
                    break
                }
                this.renderView(0), this.focusItem(this.$body.firstChild);
                break;
            case o.end:
                if (this.provider) {
                    this.provider.get(e, function(e, i, n) {
                        e ? t.events["data:error"] && t.emit("data:error", e) : i && t.setData({
                            data: i,
                            focusIndex: n || 0 === n ? n : i.length < t.size ? i.length - 1 : t.size - 1
                        })
                    });
                    break
                }
                this.data.length > this.size ? (this.renderView(this.data.length - this.size), this.focusItem(this.$body.lastChild)) : this.focusItem(this.$body.children[this.data.length - 1])
        }
    }, n.prototype.focusItem = function(e) {
        var t = this.$focusItem;
        return !(!e || t === e) && (null !== t && (t.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: t
        })), this.$focusItem = e, this.$focusItem.data = this.data[this.$focusItem.index], e.classList.add("focus"), this.events["focus:item"] && this.emit("focus:item", {
            $prev: t,
            $curr: e
        }), this.events["select:item"] && this.emit("select:item", {
            $item: e
        }), !0)
    }, n.prototype.blurItem = function(e) {
        return !!e && (e === this.$focusItem && (this.$focusItem = null), e.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: e
        }), !0)
    }, n.prototype.focusIndex = function(e) {
        var t = this.viewIndex || 0;
        e >= t + this.size ? (e = e < this.data.length - 1 ? e : this.data.length - 1, this.renderView(e - this.size + 1), this.focusItem(this.$body.lastChild)) : e < t ? (e = e > 0 ? e : 0, this.renderView(e), this.focusItem(this.$body.firstChild)) : (null === this.viewIndex && this.renderView(0), this.focusItem(this.$body.children[e - t]))
    }, n.prototype.markItem = function(e, t) {
        t ? e.classList.add("mark") : e.classList.remove("mark"), e.data.mark = t
    }, e.exports = n
}, function(e, t, i) {
    "use strict";
    e.exports = i(24)
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        var i = 1 ^ e;
        if (!k)
            if (t) k = !0, h.getPage({
                page: T - 1,
                count: 1
            }).then(function(t) {
                --T, --N, m[i].model.init({
                    channel: t[0]
                }), $ = i, I = e, f = i
            }, function(e) {});
            else {
                if (0 === m[I].data.length) return void m[e].emit("view:ready");
                k = !0, h.getPage({
                    page: N + 1,
                    count: 1
                }).then(function(t) {
                    ++T, ++N, m[e].model.init({
                        channel: t[0]
                    }), $ = i, I = e, f = i
                }, function(t) {
                    k = !1, "overflow" === t && (++T, ++N, m[e].model.init({
                        channel: {
                            id: "!",
                            title: ""
                        }
                    }), m[e].data = [], m[e].viewIndex = null, m[e].renderView(0), m[e].focusIndex(0), m[e].$title.innerHTML = "", $ = i, I = e, f = i, m[$].$node.style.top = w, m[I].$node.style.top = x, m[f].focus())
                })
            }
    }
    var s = i(13),
        a = i(1),
        o = i(33),
        l = i(30),
        c = i(35),
        r = i(36),
        d = i(37),
        u = i(38),
        h = i(46),
        p = i(29),
        m = [],
        v = document.getElementById("pm"),
        f = 0,
        g = new o({
            $node: document.getElementById("pmTabCategoryContent"),
            className: "tab hidden",
            visible: !1,
            events: {
                focus: function() {
                    m[f].focus()
                },
                show: function() {
                    v.style.backgroundImage = ""
                }
            }
        }),
        y = new c({
            $node: document.getElementById("pmCategorySearch"),
            $body: document.getElementById("pmCategorySearchBody"),
            className: "component input tabInputSearch",
            events: {
                focus: function() {
                    this.setValue(""), a.route(a.pages.search)
                }
            }
        }),
        b = i(27),
        x = 0,
        w = 0,
        $ = 0,
        I = 1,
        T = 0,
        N = 1,
        C = -1,
        k = !0;
    h.addListener("category:changed", function() {
        clearTimeout(C), C = setTimeout(function() {
            b.hide()
        }, 1e4), 0 === m.length && (m.push(new d({
            $node: document.getElementById("pmListCategoryVideos0Node"),
            $body: document.getElementById("pmListCategoryVideos0Body"),
            $title: document.getElementById("pmCategoryChannelTitle0"),
            className: "listMovie0Node",
            model: new u({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: l.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === s.left && p.focus()
                },
                "view:ready": function() {
                    m[$].$node.style.top = w, m[I] && (m[I].$node.style.top = x), this.$title.innerHTML = this.model.channel.title, this.show(), b.hide(), clearTimeout(C), m[f].focus(), k = !1
                },
                "view:error": function(e) {
                    k = !1, "empty" === e ? (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), g.focusEntry = m[f], m[$].$node.style.top = w, m[I] && (m[I].$node.style.top = x), this.$title.innerHTML = this.model.channel.title, this.show(), b.hide(), clearTimeout(C), m[f].focus()) : 0 === T && n(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && r.setContent({
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), m.push(new d({
            $node: document.getElementById("pmListCategoryVideos1Node"),
            $body: document.getElementById("pmListCategoryVideos1Body"),
            $title: document.getElementById("pmCategoryChannelTitle1"),
            className: "listMovie1Node",
            model: new u({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: l.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === s.left && (p.focus(), g.focusEntry = this)
                },
                "view:ready": function() {
                    m[$].$node.style.top = w, m[I].$node.style.top = x, this.$title.innerHTML = this.model.channel.title, this.show(), b.hide(), clearTimeout(C), m[f].focus(), k = !1
                },
                "view:error": function(e) {
                    k = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), g.focusEntry = m[f], m[$].$node.style.top = w, m[I] && (m[I].$node.style.top = x), this.$title.innerHTML = this.model.channel.title, this.show(), b.hide(), clearTimeout(C), m[f].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && r.setContent({
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), g.add(m[0]), g.add(m[1]), m[0].focus(), m[0].addListener("keydown", function(e) {
            e.code === s.down ? n(0, !1) : e.code === s.up ? T > 0 ? n(0, !0) : y.focus() : e.code === s.playPause && r.setContent({
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), m[1].addListener("keydown", function(e) {
            e.code === s.down ? n(1, !1) : e.code === s.up ? T > 0 ? n(1, !0) : y.focus() : e.code === s.playPause && r.setContent({
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), x = window.getComputedStyle(m[1].$node).getPropertyValue("top")), h.getPage({
            page: 0,
            count: 1
        }).then(function(e) {
            T = 0, $ = 0, I = 1, N = 1, f = 0, m[$].model.filter({
                channel: e[0]
            }), h.getPage({
                page: 1,
                count: 1
            }).then(function(e) {
                m[I].model.filter({
                    channel: e[0]
                }), m[f].focus()
            })
        })["catch"](function(e) {})
    }), g.activate = function(e) {
        this.show(), h.setActiveCategory(e) ? b.show() : m[f].focus()
    }, g.add(y), e.exports = g
}, function(e, t, i) {
    "use strict";
    e.exports = i(34), e.exports.prototype.name = "stb-component-panel"
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.focusable = e.focusable || !1, s.call(this, e)
    }
    var s = i(24);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.prototype.name = "spa-component-panel", e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.name = "component", this.value = "", this.type = this.TYPE_TEXT, e.className = "input " + (e.className || ""), s.call(this, e), this.$line = this.$body.appendChild(document.createElement("div")), this.$line.className = "line", this.$caret = this.$line.appendChild(document.createElement("div")), this.$caret.className = "caret", this.$placeholder = this.$line.appendChild(document.createElement("div")), this.$placeholder.className = "placeholder", this.$caret.index = 0, this.init(e)
    }
    var s = i(31),
        a = i(13);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.prototype.TYPE_TEXT = 0, n.prototype.TYPE_PASSWORD = 1, n.prototype.defaultEvents = {
        keypress: function(e) {
            this.addChar(String.fromCharCode(e.keyCode), this.$caret.index)
        },
        keydown: function(e) {
            switch (e.code) {
                case a["delete"]:
                    this.removeChar(this.$caret.index);
                    break;
                case a.back:
                    this.removeChar(this.$caret.index - 1);
                    break;
                case a.left:
                    this.setCaretPosition(this.$caret.index - 1);
                    break;
                case a.right:
                    this.setCaretPosition(this.$caret.index + 1);
                    break;
                case a.end:
                case a.down:
                    this.setCaretPosition(this.value.length);
                    break;
                case a.home:
                case a.up:
                    this.setCaretPosition(0)
            }
        }
    }, n.prototype.init = function(e) {
        e.type && (this.type = e.type), e.value && this.setValue(e.value), e.placeholder && (this.$placeholder.innerText = e.placeholder), this.$line.dir = e.direction || "ltr"
    }, n.prototype.addChar = function(e, t) {
        var i = document.createElement("div");
        t = void 0 === t ? this.$caret.index : t, 0 === this.value.length && this.$line.removeChild(this.$placeholder), i.className = "char", this.value = this.value.substring(0, t) + e + this.value.substring(t, this.value.length), ++this.$caret.index, this.type === this.TYPE_PASSWORD ? i.innerText = "*" : " " === e ? i.innerHTML = "&nbsp;" : i.innerText = e, t >= this.value.length ? (this.$line.appendChild(i), this.$line.appendChild(this.$caret)) : (this.$line.insertBefore(this.$caret, this.$line.children[t]), this.$line.insertBefore(i, this.$caret)), this.events["input"] && this.emit("input", {
            value: this.value
        })
    }, n.prototype.removeChar = function(e) {
        var t = this.value;
        e = void 0 === e ? this.$caret.index - 1 : e, this.value.length > 0 && (this.$caret.index === e && e < this.value.length ? this.$line.removeChild(this.$line.children[e + 1]) : this.$caret.index > e && (--this.$caret.index, this.$line.removeChild(this.$line.children[e])), this.value = this.value.substring(0, e) + this.value.substring(e + 1, this.value.length), this.events["input"] && t !== this.value && this.emit("input", {
            value: this.value
        })), 0 === this.value.length && this.$line.appendChild(this.$placeholder)
    }, n.prototype.setCaretPosition = function(e) {
        e >= 0 && e <= this.value.length && this.$caret.index !== e && (this.$line.removeChild(this.$caret), e === this.value.length ? this.$line.appendChild(this.$caret) : this.$line.insertBefore(this.$caret, this.$line.children[e]), this.$caret.index = e)
    }, n.prototype.setValue = function(e) {
        var t, i, n = this.value.length,
            s = e.length,
            a = 0;
        if (e !== this.value) {
            if (s > 0) {
                if (this.$placeholder.parentNode === this.$line && this.$line.removeChild(this.$placeholder), this.$line.removeChild(this.$caret), s !== n)
                    if (i = s - n, i > 0)
                        for (a = 0; a < i; a++) t = this.$line.appendChild(document.createElement("div")), t.className = "char";
                    else
                        for (a = 0; a > i; a--) this.$line.removeChild(this.$line.lastChild);
                for (a = 0; a < s; a++) t = this.$line.children[a], this.type === this.TYPE_PASSWORD ? t.innerHTML = "*" : " " === e[a] ? t.innerHTML = "&nbsp;" : t.innerText = e[a];
                this.value = e, this.$caret.index = s, this.$line.appendChild(this.$caret)
            } else this.value = "", this.$line.innerText = "", this.$line.appendChild(this.$caret), this.$line.appendChild(this.$placeholder);
            this.events["input"] && this.emit("input", {
                value: this.value
            })
        }
    }, e.exports = n
}, function(e, t, i) {
    var n, s, a = i(1),
        o = !1,
        l = i(27);
    n = a.urlParser, s = {
        intent: null,
        context: null,
        movie: {},
        channel: {},
        playlist: null,
        setContent: function(e) {
            o = !0, e.urlParseErrorCount || (e.urlParseErrorCount = 0), void 0 !== e.channel ? this.channel = e.channel : this.channel = {
                title: e.video.channelTitle,
                id: e.video.channelId
            }, this.playlist = e.playlist, this.listPosition = e.position, this.context = null, this.prepare(e)
        },
        prepare: function(e) {
            var t = this;
            return this.movie.title = e.video.title, "" === e.video.duration ? (window.core.notify({
                title: gettext("Live broadcasts are not supported"),
                icon: "alert",
                type: "warning",
                timeout: 5e3
            }), void(o = !1)) : (this.movie.id = e.video.id, l.show(), void n.getInfo("https://www.youtube.com/watch?v=" + e.video.id, function(i, n) {
                var s, a, c;
                if (l.hide(), i) return "0:00" === e.video.duration ? window.core.notify({
                    title: gettext("Live broadcasts are not supported"),
                    icon: "alert",
                    type: "warning",
                    timeout: 5e3
                }) : window.core.notify({
                    title: gettext("Video is not available"),
                    icon: "alert",
                    type: "warning",
                    timeout: 5e3
                }), void(o = !1);
                if (0 === n.formats.length) return "0:00" === e.video.duration ? window.core.notify({
                    title: gettext("Live broadcasts are not supported"),
                    icon: "alert",
                    type: "warning",
                    timeout: 5e3
                }) : window.core.notify({
                    title: gettext("Video is not available"),
                    icon: "alert",
                    type: "warning",
                    timeout: 5e3
                }), void(o = !1);
                for (a = 0, c = n.formats.length; a < c; ++a) n.formats[a].resolution = n.formats[a].resolution || "", "mp4" === n.formats[a].container && n.formats[a].audioBitrate && (s ? s.resolution < n.formats[a].resolution && n.formats[a].type.indexOf("video") !== -1 && (s = n.formats[a]) : n.formats[a].type.indexOf("video") !== -1 && (s = n.formats[a]));
                s || (s = n.formats[0]), t.movie.url = s.url, t.play()
            }))
        },
        play: function() {
            var e, t, i = this;
            i.playlist.length && i.playlist.length > i.listPosition && (t = function() {
                i.next()
            }), i.playlist.length && i.listPosition > 0 && (e = function() {
                i.prev()
            }), this.intent = core.intent({
                action: "play",
                mime: "content/video",
                data: {
                    title: i.movie.title,
                    uri: i.movie.url,
                    movie: i.movie.id,
                    proxy: a.params.proxy
                },
                events: {
                    end: function() {
                        i.playlist.length ? i.next() : i.intent.close()
                    },
                    error: function() {
                        i.intent.close()
                    },
                    close: function() {
                        i.context = null
                    },
                    next: t,
                    prev: e
                },
                context: i.context
            }, function(e, t) {
                i.context = t
            })
        },
        next: function() {
            this.playlist.length > this.listPosition + 1 && (this.listPosition++, this.prepare({
                video: this.playlist[this.listPosition]
            }))
        },
        prev: function() {
            this.listPosition < 0 && (this.listPosition--, this.prepare({
                video: this.playlist[this.listPosition]
            }))
        }
    }, e.exports = s
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t = this;
        this.model = null, this.activePage = 0, this.$title = null, this.loading = !1, e.visible = !1, e.data = [{
            id: "",
            value: "",
            publishedAt: "",
            icon: "",
            duration: "",
            title: "",
            channelTitle: "",
            viewCount: "",
            locale: {
                publishedAt: "",
                viewCount: "",
                channelTitle: ""
            }
        }], a.call(t, e), this.$node.classList.add("movieList"), this.$body.classList.add("movieListBody"), void 0 !== e.$title && (this.$title = e.$title, this.$title.classList.add("movieListHeader")), void 0 !== e.model && (this.model = e.model, this.model.addListener("content:changed", function() {
            t.model.getPage({
                page: 0,
                count: 50
            }, function(e, i) {
                t.activePage = 0, t.data = i, t.viewIndex = null, t.renderView(0), t.focusIndex(0), t.emit("view:ready")
            })
        }))
    }
    var s = i(13),
        a = i(30);
    n.prototype = Object.create(a.prototype), n.prototype.constructor = n, n.prototype.renderView = function(e) {
        var t, i, n, s, a;
        if (this.viewIndex !== e) {
            for (s = this.viewIndex, this.viewIndex = a = e, i = 0; i < this.size; i++) t = this.$body.children[i], this.data.length > e ? (t.classList.remove("hidden"), n = this.data[e], void 0 !== n ? (t.data = n, t.index = e, this.renderItem(t, n), n.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "", t.ready = !1), e++) : t.classList.add("hidden");
            return void 0 !== this.events["move:view"] && this.emit("move:view", {
                prevIndex: s,
                currIndex: a
            }), !0
        }
        return !1
    }, n.prototype.renderItem = function(e, t) {
        var i, n, s;
        t.duration.length > 10 && (t.duration = t.duration.substring(0, 10)), e.ready ? (e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", e.$videoDuration.innerText = t.duration, e.$videoTitle.innerText = t.title, e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = t.locale.viewCount, e.$dateAdded.innerText = t.locale.publishedAt) : (i = document.createElement("div"), i.className = "container", e.appendChild(i), n = document.createElement("div"), n.className = "tileTop", i.appendChild(n), s = document.createElement("div"), s.className = "tileBottom", i.appendChild(s), e.$videoThumb = document.createElement("div"), e.$videoThumb.className = "thumb", e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", n.appendChild(e.$videoThumb), e.$videoDuration = document.createElement("div"), e.$videoDuration.className = "duration", e.$videoDuration.innerText = t.duration, n.appendChild(e.$videoDuration), e.$videoTitle = document.createElement("div"), e.$videoTitle.className = "title", e.$videoTitle.innerText = t.title, s.appendChild(e.$videoTitle), e.$videoAthour = document.createElement("div"), e.$videoAthour.className = "uploader", t.channelTitle && (e.$videoAthour.innerText = t.locale.channelTitle), s.appendChild(e.$videoAthour), e.$viewCounter = document.createElement("div"), e.$viewCounter.className = "viewCount", t.viewCount && (e.$viewCounter.innerText = t.locale.viewCount), s.appendChild(e.$viewCounter), e.$dateAdded = document.createElement("div"), e.$dateAdded.className = "uploaded", e.$dateAdded.innerText = t.locale.publishedAt, s.appendChild(e.$dateAdded), e.ready = !0)
    }, n.prototype.defaultEvents.keydown = function(e) {
        if (!this.loading && this.data) switch (e.code) {
            case s.right:
                this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                break;
            case s.left:
                this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                break;
            case s.ok:
                void 0 !== this.events["click:item"] && this.emit("click:item", {
                    $item: this.$focusItem,
                    event: e
                })
        }
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        this.pages = {}, this.searchQuery = "", this.relatedToVideoId = "", this.channelId = "", this.order = "", this.type = "", d.call(this), e = e || {}, this.filter(e)
    }
    var s, a, o, l = i(18),
        c = i(1),
        r = i(17),
        d = i(39);
    n.prototype = Object.create(d.prototype), n.prototype.constructor = n, n.prototype.getPage = function(e) {
        var t, n = this;
        return s || (s = i(42), o = i(45), a = gettext("Author")), new l(function(i, s) {
            if (e.channel = e.channel || n.channel, e.type = n.type, e.searchQuery = e.searchQuery || n.searchQuery, e.page = +e.page || 0, e.relatedToVideoId = e.relatedToVideoId || n.relatedToVideoId, t = "search?part=id&maxResults=" + (e.count || 6), e.page) {
                if (!n.pages[e.page]) return void s();
                t += "&pageToken=" + n.pages[e.page]
            }
            e.channel && e.channel.id && (t += "&channelId=" + e.channel.id), n.order && (t += "&order=" + n.order), e.relatedToVideoId ? t += "&type=video&relatedToVideoId=" + e.relatedToVideoId : e.type && (t += "&type=video"), e.searchQuery && (t += "&q=" + encodeURIComponent(e.searchQuery)), c.settings.safeSearch && (t += "&safeSearch=strict"), r.request("GET", t).then(function(t) {
                var c, d = [],
                    u = 0,
                    h = {},
                    p = {},
                    m = "",
                    v = "",
                    f = "";
                if (t = JSON.parse(t), t.nextPageToken && (n.pages[e.page + 1] = t.nextPageToken), t.prevPageToken && (n.pages[e.page - 1] = t.prevPageToken), t = t.items, 0 === t.length) s("empty");
                else {
                    for (u = t.length, c = 0; c < u; ++c) "youtube#video" === t[c].id.kind ? m += t[c].id.videoId + "," : "youtube#channel" === t[c].id.kind ? (v += t[c].id.channelId + ",", h[c] = 1) : "youtube#playlist" === t[c].id.kind && (f += t[c].id.playlistId + ",", p[c] = 1);
                    l.all([n.getMovies(m.substr(0, m.length - 1)), n.getChannelsInfo(v.substr(0, v.length - 1)), n.getTotalInfoPlaylists({
                        id: f.substr(0, f.length - 1),
                        channel: !1
                    })]).then(function(e) {
                        var t = +new Date,
                            n = 0,
                            s = 0,
                            l = 0;
                        for (c = 0; c < u; ++c) h[c] && e[1][s] ? (d.push({
                            value: 1,
                            id: e[1][s].id,
                            title: e[1][s].snippet.localized.title,
                            icon: e[1][s].snippet.thumbnails["high"].url,
                            type: "channel",
                            viewCount: e[1][s].statistics.viewCount,
                            commentCount: e[1][s].statistics.commentCount,
                            subscriberCount: e[1][s].statistics.subscriberCount,
                            hiddenSubscriberCount: e[1][s].statistics.hiddenSubscriberCount,
                            videoCount: e[1][s].statistics.videoCount,
                            locale: {
                                subscriberCount: e[1][s].statistics.subscriberCount + " " + ngettext("subscriber", "subscribers", +e[1][s].statistics.subscriberCount)
                            }
                        }), ++s) : p[c] && e[2][l] ? (d.push({
                            value: 1,
                            playlistId: e[2][l].id,
                            channel: {
                                title: e[2][l].snippet.channelTitle,
                                id: e[2][l].snippet.channelId
                            },
                            title: e[2][l].snippet.title,
                            icon: e[2][l].snippet.thumbnails["high"].url,
                            type: "playlist",
                            channelTitle: e[2][l].snippet.channelTitle,
                            viewCount: " ",
                            duration: " ",
                            publishedAt: e[2][l].snippet.publishedAt,
                            locale: {
                                publishedAt: o(e[2][l].snippet.publishedAt, t),
                                viewCount: " ",
                                channelTitle: e[2][l].snippet.channelTitle ? a + ": " + e[2][l].snippet.channelTitle : " "
                            }
                        }), ++l) : e[0][n] && (d.push({
                            value: 1,
                            id: e[0][n].id,
                            channelTitle: e[0][n].snippet.channelTitle,
                            duration: r.normalizeVideoDuration(e[0][n].contentDetails.duration),
                            realDuration: e[0][n].contentDetails.duration,
                            viewCount: e[0][n].statistics.viewCount,
                            publishedAt: e[0][n].snippet.publishedAt,
                            dimension: e[0][n].contentDetails.dimension,
                            definition: e[0][n].contentDetails.definition,
                            title: e[0][n].snippet.localized.title,
                            icon: e[0][n].snippet.thumbnails["high"].url,
                            channelId: e[0][n].snippet.channelId,
                            type: "video",
                            locale: {
                                publishedAt: o(e[0][n].snippet.publishedAt, t),
                                viewCount: ngettext("view", "views", +e[0][n].statistics.viewCount) + " " + e[0][n].statistics.viewCount,
                                channelTitle: a + ": " + e[0][n].snippet.channelTitle
                            }
                        }), ++n);
                        i(d)
                    }, function(e) {})["catch"](function(e) {})
                }
            })["catch"](function(e) {})
        })
    }, n.prototype.getChannelsInfo = function(e) {
        return e ? r.request("GET", "channels?part=snippet,statistics&id=" + e).then(function(e) {
            return JSON.parse(e).items
        }) : l.resolve([])
    }, n.prototype.filter = function(e) {
        var t = !1;
        return void 0 !== e.channel && this.init({
            channel: e.channel
        }), void 0 !== e.searchQuery && this.searchQuery !== e.searchQuery && (t = !0, this.searchQuery = e.searchQuery), void 0 !== e.relatedToVideoId && this.relatedToVideoId !== e.relatedToVideoId && (t = !0, this.relatedToVideoId = e.relatedToVideoId), void 0 !== e.order && this.order !== e.order && (t = !0, this.order = e.order), void 0 !== e.type && this.type !== e.type && (t = !0, this.type = e.type), !!t && (this.pages = {}, this.emit("content:changed", e), !0)
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        this.pages = {}, this.channel = null, l.call(this), e = e || {}, void 0 !== e.events && this.addListeners(e.events), this.init(e)
    }
    var s, a, o = i(18),
        l = i(40),
        c = i(17);
    n.prototype = Object.create(l.prototype), n.prototype.constructor = n, n.prototype.getPage = function(e) {
        var t = this;
        return a || (s = i(45), a = gettext("Author")), e.channel = e.channel || this.channel, e.count = e.count || 6, e.page = +e.page || 0, new o(function(i, n) {
            return e.channel ? void t.getPlaylists({
                count: 1,
                channel: e.channel,
                page: e.page
            }).then(function(s) {
                e.playlist = s[0], t.getPlayListItems(e).then(i, n)
            }) : void n(e)
        })
    }, n.prototype.getPlaylists = function(e) {
        var t = this,
            i = "playlists?part=id";
        if (e.channel = e.channel || this.channel, e.channel) {
            if (e.page) {
                if (!t.pages[e.page]) return o.reject("no page");
                i += "&pageToken=" + t.pages[e.page]
            }
            return i += "&channelId=" + e.channel.id + "&maxResults=" + e.count, c.request("GET", i).then(function(i) {
                return i = JSON.parse(i), i.nextPageToken && (t.pages[e.page + 1] = i.nextPageToken), i.prevPageToken && (t.pages[e.page - 1] = i.prevPageToken), i.items
            })
        }
    }, n.prototype.getTotalInfoPlaylists = function(e) {
        var t = this,
            i = "playlists?part=snippet";
        if (e.channel = void 0 === e.channel ? this.channel : e.channel, e.page) {
            if (!t.pages[e.page]) return o.reject("no page");
            i += "&pageToken=" + t.pages[e.page]
        }
        if (e.channel) i += "&channelId=" + e.channel.id;
        else {
            if (!(void 0 !== e.id && e.id.length > 0)) return o.resolve([]);
            i += "&id=" + e.id
        }
        return void 0 !== e.count && (i += "&maxResults=" + e.count), c.request("GET", i).then(function(i) {
            return i = JSON.parse(i), i.nextPageToken && (t.pages[e.page + 1] = i.nextPageToken), i.prevPageToken && (t.pages[e.page - 1] = i.prevPageToken), i.items
        })
    }, n.prototype.getChannelBackground = function(e) {
        return e = e || this.channel, c.request("GET", "channels?part=brandingSettings&id=" + e.id).then(function(e) {
            return e = JSON.parse(e), e.items[0].brandingSettings.image.bannerTvImageUrl
        })
    }, n.prototype.init = function(e) {
        var t = !1;
        return void 0 !== e.channel && (this.channel ? this.channel && this.channel.id !== e.channel.id && (t = !0, this.channel = e.channel) : (t = !0, this.channel = e.channel)), e.mode && this.mode !== e.mode && (this.mode = e.mode), !!t && (this.pages = {}, this.emit("content:changed", e), !0)
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        return e && e.playlist ? "pid:" + e.playlist.id + ";p:" + e.page : "PLAYLIST"
    }

    function s(e) {
        this.pages = {}, this.playlist = null, c.call(this), e = e || {}, void 0 !== e.events && this.addListeners(e.events), this.init(e)
    }
    var a, o, l = i(18),
        c = i(4),
        r = i(17),
        d = !1,
        u = i(41);
    s.prototype = Object.create(c.prototype), s.prototype.constructor = s, s.prototype.getPage = function(e) {
        var t, i = this;
        return e.playlist = e.playlist || this.playlist, e.page = +e.page || 0, e.count = e.count || 20, new l(function(s, a) {
            if (t = u.get(n(e))) s(t);
            else {
                if (!e.playlist.id) return void a(e);
                i.getPlayListItems(e).then(s, a)
            }
        })
    }, s.prototype.getPlayListItems = function(e) {
        var t = this,
            s = [],
            c = "",
            h = "playlistItems?part=snippet&playlistId=" + e.playlist.id + "&maxResults=" + (e.count || 30);
        if (e.page = +e.page || 0, d || (d = i(42), a = i(45), o = gettext("Author")), e.page) {
            if (!t.pages[e.page]) return l.reject();
            h += "&pageToken=" + t.pages[e.page]
        }
        return r.request("GET", h).then(function(i) {
            try {
                i = JSON.parse(i), i.nextPageToken && (t.pages[e.page + 1] = i.nextPageToken), i.prevPageToken && (t.pages[e.page - 1] = i.prevPageToken), i.items.forEach(function(e) {
                    c += e.snippet.resourceId.videoId + ","
                })
            } catch (e) {}
            return t.getMovies(c.substr(0, c.length - 1)).then(function(t) {
                var i, l, c = +new Date;
                for (i = t.length, l = 0; l < i; ++l) s.push({
                    value: 1,
                    id: t[l].id,
                    channelTitle: t[l].snippet.channelTitle,
                    duration: r.normalizeVideoDuration(t[l].contentDetails.duration),
                    realDuration: t[l].contentDetails.duration,
                    viewCount: t[l].statistics.viewCount,
                    publishedAt: t[l].snippet.publishedAt,
                    dimension: t[l].contentDetails.dimension,
                    definition: t[l].contentDetails.definition,
                    title: t[l].snippet.localized.title,
                    icon: t[l].snippet.thumbnails["high"].url,
                    channelId: t[l].snippet.channelId,
                    type: "video",
                    locale: {
                        publishedAt: a(t[l].snippet.publishedAt, c),
                        viewCount: t[l].statistics.viewCount + " " + ngettext("view", "views", +t[l].statistics.viewCount),
                        channelTitle: o + ": " + t[l].snippet.channelTitle
                    }
                });
                return u.set(n(e), s, 3e5), s
            })
        })
    }, s.prototype.getMovies = function(e) {
        var t, i, n, s, a = [];
        for (i = e.split(","), n = 0, s = i.length; n < s; ++n)(t = u.get("vid:" + i[n])) && a.push(t);
        return r.request("GET", "videos?part=statistics,contentDetails,snippet&id=" + e).then(function(e) {
            for (e = JSON.parse(e).items, n = 0, s = e.length; n < s; ++n) u.set("vid:" + e[n].id, e[n], 6e4);
            return e
        })
    }, s.prototype.init = function(e) {
        return void 0 !== e.playlist && (this.playlist ? this.playlist && this.playlist.id !== e.playlist.id && (this.playlist = e.playlist) : this.playlist = e.playlist, this.pages = {}, this.emit("content:changed", e), !0)
    }, e.exports = s
}, function(e, t, i) {
    "use strict";
    var n = {
        store: {},
        size: 0,
        set: function(e, t, i) {
            var n, s, a = this;
            s = this.store[e] ? this.store[e] : void 0, s && s.timeout && clearTimeout(s.timeout), n = {
                value: t,
                timeout: -1
            }, "number" == typeof i && (n.timeout = setTimeout(function() {
                a.remove(e)
            }, i)), this.store[e] = n, ++this.size
        },
        get: function(e, t) {
            return !!this.store[e] && ("function" != typeof t ? this.store[e].value : void t(this.store[e].value))
        },
        remove: function(e) {
            --this.size, this.store[e] = null
        },
        clear: function() {
            var e = this.size;
            return this.store = {}, e
        }
    };
    e.exports = n
}, function(e, t, i) {
    "use strict";
    var n = i(15),
        s = i(16);
    e.exports = {
        languageIndex: 0,
        nextLang: function(e) {
            return e === n.languages.length - 1 ? 0 : ++e
        },
        setLang: function(e) {
            var t = this;
            i(43).load({
                name: e
            }, function(i) {
                i ? t.languageIndex = -1 : t.languageIndex = n.languages.indexOf(e), t.languageIndex === -1 && (t.languageIndex = n.languages.indexOf(s.defaultSettings.language))
            })
        }
    }
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t = new a(e);
        return window.gettext = window._ = t.gettext, window.pgettext = t.pgettext, window.ngettext = t.ngettext, t
    }
    var s = i(4),
        a = i(44),
        o = new s;
    o.defaultLanguage = "en", o.load = function(e, t) {
        var i;
        return e.ext = e.ext || "json", e.path = e.path || "lang", e.name === o.defaultLanguage ? (n(), t(null), !1) : (i = new XMLHttpRequest, i.onload = function() {
            var e;
            try {
                e = JSON.parse(i.responseText), n(e), t(null), o.events["load"] && o.emit("load")
            } catch (e) {
                i.onerror(e)
            }
        }, i.ontimeout = i.onerror = function(e) {
            n(), t(e), o.events["error"] && o.emit("error", e)
        }, i.open("GET", e.path + "/" + e.name + "." + e.ext, !0), i.send(null), !0)
    }, e.exports = o
}, function(module, exports, __webpack_require__) {
    "use strict";

    function Gettext(config) {
        var data, meta;
        config = config || {}, data = config.data || {}, data[""] = data[""] || {}, meta = config.meta, this.gettext = function(e) {
            return data[""][e] || e
        }, this.pgettext = function(e, t) {
            return data[e] && data[e][t] || t
        }, this.ngettext = function(msgId, plural, value) {
            var n;
            return data && meta && data[""][msgId] ? data[""][msgId][eval("n = " + value + "; " + meta.plural)] : 1 === value ? msgId : plural
        }
    }
    Gettext.prototype.constructor = Gettext, module.exports = Gettext
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var i, n, s;
        return e ? (n = e.match(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d).(\d\d\d)Z/), n.shift(), n.pop(), i = new Date(n[0], n[1] - 1, n[2], n[3], n[4], n[5]), i.setTime(t - i.getTime()), e = i.getTime(), i.getFullYear() > 1970 ? (s = i.getFullYear() - 1970, e = s + " " + ngettext("year", "years", +s) + " " + gettext("ago")) : i.getMonth() > 0 ? (s = i.getMonth() + 1, e = s + " " + ngettext("month", "months", +s) + " " + gettext("ago")) : i.getDate() > 1 ? (s = i.getDate(), e = s + " " + ngettext("day", "days", +s) + " " + gettext("ago")) : i.getHours() > 0 ? (s = i.getHours(), e = s + " " + ngettext("hour", "hours", +s) + " " + gettext("ago")) : i.getMinutes() > 0 ? (s = i.getMinutes(), e = s + " " + ngettext("minute", "minutes", +s) + " " + gettext("ago")) : (s = i.getSeconds(), e = s + " " + ngettext("second", "seconds", +s) + " " + gettext("ago")), e) : e
    }
}, function(e, t, i) {
    "use strict";
    var n = i(18),
        s = i(4),
        a = i(17),
        o = i(41),
        l = new s;
    l.activeCategory = {}, l.pages = {}, l.ownChannel = null, l.cacheKey = function(e) {
        return "c:" + e.category.id + ";p:" + e.page
    }, l.getPage = function(e) {
        var t, i, s = this;
        return e.page = +e.page || 0, e.category = e.category || this.activeCategory, new n(function(n, l) {
            if (t = o.get(s.cacheKey(e))) n(t);
            else {
                if (i = "channels?part=snippet&categoryId=" + e.category.id + "&maxResults=" + e.count, e.page) {
                    if (!s.pages[e.page]) return s.activeCategory.totalResults === e.page ? void l("overflow") : void l("no page");
                    i += "&pageToken=" + s.pages[e.page]
                }
                a.request("GET", i).then(function(t) {
                    var i, a, l = [];
                    for (t = JSON.parse(t), t.pageInfo.totalResults && (s.activeCategory.totalResults = t.pageInfo.totalResults), t.nextPageToken && (s.pages[e.page + 1] = t.nextPageToken), t.prevPageToken && (s.pages[e.page - 1] = t.prevPageToken), t = t.items, a = t.length, i = 0; i < a; ++i) l.push({
                        value: t[i].id,
                        id: t[i].id,
                        title: t[i].snippet.localized.title,
                        icon: t[i].snippet.thumbnails["high"].url
                    });
                    o.set(s.cacheKey(e), l, 3e5), n(l)
                })["catch"](function(e) {})
            }
        })
    }, l.getInfo = function(e) {
        return new n(function(t, i) {
            a.request("GET", "channels?part=snippet&id=" + e).then(function(e) {
                t(JSON.parse(e).items)
            }, i)
        })
    }, l.getMine = function() {
        return new n(function(e, t) {
            null !== l.ownChannel ? e(l.ownChannel) : a.request("GET", "channels?part=snippet&mine=true").then(function(t) {
                l.ownChannel = JSON.parse(t).items[0], l.ownChannel.title = l.ownChannel.snippet.title, l.ownChannel.icon = l.ownChannel.snippet.thumbnails["default"].url, a.ownChannel = l.ownChannel, e(l.ownChannel)
            }, t)
        })
    }, l.setActiveCategory = function(e) {
        return !(!e || this.activeCategory.id === e.id) && (this.activeCategory = e, this.pages = {}, void 0 !== this.events["category:changed"] && this.emit("category:changed", e), !0)
    }, e.exports = l
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        var i = 1 ^ e;
        if (!N)
            if (t) N = !0, C.getPage({
                page: $ - 1,
                count: 1
            }, function(t, n) {
                --$, --I, b = i, x = e, w = i, u[i].data = n, u[i].viewIndex = null, u[i].renderView(0), u[i].emit("view:ready")
            });
            else {
                if (0 === u[x].data.length) return void u[e].emit("view:ready");
                N = !0, C.getPage({
                    page: I + 1,
                    count: 1
                }, function(t, n) {
                    return n ? void(t || 0 === n.length ? (++$, ++I, u[e].data = [], u[e].viewIndex = null, u[e].renderView(0), u[e].$title.innerHTML = "", b = i, x = e, w = i, u[b].$node.style.top = y, u[x].$node.style.top = g, u[w].focus(), u[e].emit("view:ready")) : (++$, ++I, b = i, x = e, w = i, u[e].data = n, u[e].viewIndex = null, u[e].renderView(0), u[e].emit("view:ready"), u[w].focus())) : void u[e].emit("view:ready")
                })
            }
    }
    var s = i(13),
        a = (i(1), i(33)),
        o = i(30),
        l = i(37),
        c = i(48),
        r = i(36),
        d = (i(42), i(29)),
        u = [],
        h = new a({
            $node: document.getElementById("pmTabChannelContent"),
            className: "tab hidden",
            visible: !1,
            events: {
                focus: function() {
                    u[w].focus()
                }
            }
        }),
        p = i(27),
        m = document.getElementById("pm"),
        v = document.getElementById("pmChannelTitle"),
        f = document.getElementById("pmChannelIcon"),
        g = 0,
        y = 0,
        b = 0,
        x = 1,
        w = 0,
        $ = 0,
        I = 1,
        T = -1,
        N = !0,
        C = new c,
        k = {
            id: null,
            title: null
        };
    C.addListener("content:changed", function() {
        clearTimeout(T), T = setTimeout(function() {
            p.hide()
        }, 1e4), 0 === u.length && (u.push(new l({
            $node: document.getElementById("pmListChannelVideos0Node"),
            $body: document.getElementById("pmListChannelVideos0Body"),
            $title: document.getElementById("pmChannelTitle0"),
            className: "listMovie0Node",
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: o.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === s.left && d.focus()
                },
                "view:ready": function() {
                    h.focusEntry = u[w], u[b].$node.style.top = y, u[x] && (u[x].$node.style.top = g), this.$title.innerHTML = "", u[w] && u[w].data.length > 0 && u[w].data[0].value && (p.hide(), clearTimeout(T)), this.show(), u[w].focus(), N = !1
                },
                "view:error": function(e) {
                    N = !1, "empty" === e ? (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), h.focusEntry = u[w], u[b].$node.style.top = y, u[x] && (u[x].$node.style.top = g), this.show(), p.hide(), clearTimeout(T), u[w].focus()) : 0 === $ && n(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && r.setContent({
                        channel: k,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), u.push(new l({
            $node: document.getElementById("pmListChannelVideos1Node"),
            $body: document.getElementById("pmListChannelVideos1Body"),
            $title: document.getElementById("pmChannelTitle1"),
            className: "listMovie1Node",
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: o.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === s.left && d.focus()
                },
                "view:ready": function() {
                    h.focusEntry = u[w], u[b].$node.style.top = y, u[x] && (u[x].$node.style.top = g), this.$title.innerHTML = "", u[w] && u[w].data.length > 0 && u[w].data[0].value && (p.hide(), clearTimeout(T)), this.show(), u[w].focus(), N = !1
                },
                "view:error": function(e) {
                    N = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: " ",
                        duration: "",
                        title: " ",
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), h.focusEntry = u[w], u[b].$node.style.top = y, u[x] && (u[x].$node.style.top = g), this.$title.innerHTML = this.model.channel.title ? this.model.channel.title : "&nbsp;", this.show(), p.hide(), clearTimeout(T), u[w].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && r.setContent({
                        channel: k,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), h.add(u[0]), h.add(u[1]), u[0].focus(), u[0].addListener("keydown", function(e) {
            e.code === s.down ? n(0, !1) : e.code === s.up ? $ > 0 && n(0, !0) : e.code === s.playPause && r.setContent({
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), u[1].addListener("keydown", function(e) {
            e.code === s.down ? n(1, !1) : e.code === s.up ? $ > 0 && n(1, !0) : e.code === s.playPause && r.setContent({
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), g = window.getComputedStyle(u[1].$node).getPropertyValue("top")), C.getPage({
            page: 0,
            count: 1
        }, function(e, t) {
            $ = 0, b = 0, x = 1, I = 1, w = 0, u[b].data = t, u[b].viewIndex = null, u[b].renderView(0), u[b].emit("view:ready"), u[w].focus(), C.getPage({
                page: 1,
                count: 1
            }, function(e, t) {
                u[x].data = t, u[x].viewIndex = null, u[x].renderView(0), u[x].emit("view:ready"), u[w].focus()
            })
        })
    }), h.activate = function(e) {
        e && (this.show(), u.length && u[w].focus(), C.channelId = k.id = e.id, C.getInfo({}, function(e, t) {
            e || (t.background = t.background.split("=")[0] + "=w1920-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no", m.style.backgroundImage = "url(" + t.background + ")", f.style.backgroundImage = "url(" + t.icon + ")", k.title = v.innerHTML = t.title, k.icon = t.icon, C.emit("content:changed"))
        }))
    }, e.exports = h
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        var i, n, s, a, o, l, c, r, d, u, h, p = [];
        for (c = e.split("channels-content-item"), h = 0; h < c.length; h++) u = c[h], u.indexOf("yt-lockup-video") !== -1 && (r = u.indexOf('="https://i.ytimg') + 2, d = u.indexOf('"', r), l = u.substring(r, d), r = u.indexOf('data-context-item-id="') + 22, d = u.indexOf('"', r), i = u.substring(r, d), r = u.indexOf('<span class="video-time" aria-hidden="true">') + 44, r = u.indexOf(">", r) + 1, d = u.indexOf("</span>", r), n = u.substring(r, d), r = u.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36, d = u.indexOf(" ", r), s = u.substring(r, d), r = u.indexOf("</li><li>", r) + 9, d = u.indexOf("</li>", r), a = u.substring(r, d), r = u.indexOf('" href="/watch?v=') + 17, r = u.indexOf(">", r) + 1, d = u.indexOf("</a><span", r), o = u.substring(r, d), p.push({
            value: 1,
            id: i,
            channelTitle: t.title,
            duration: n,
            realDuration: n,
            viewCount: s,
            publishedAt: a,
            dimension: "",
            definition: "",
            title: o,
            icon: l,
            channelId: t.id,
            type: "video",
            locale: {
                publishedAt: a,
                viewCount: s,
                channelTitle: t.title
            }
        }));
        return p
    }

    function s() {
        l.call(this), this.channelId = null, this.pages = {}
    }
    var a = i(49),
        o = a.ajax,
        l = i(4);
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, s.prototype.getInfo = function(e, t) {
        return e = e || {}, !e.channelId && this.channelId && (e.channelId = this.channelId), e.channelId ? void o("get", "https://www.youtube.com/" + e.channelId + "/about", function(i, n) {
            var s, a, o, l, c, r, d;
            return 200 !== n ? void t({
                message: "request got bad http status (" + n + ")"
            }, {}) : (s = i.indexOf('img class="channel-header-profile-image" src="') + 46, a = i.indexOf('"', s), o = i.substring(s, a), s = i.indexOf("yt-subscription-button-subscriber-count-branded-horizontal"), s = i.indexOf('title="', s) + 7, a = i.indexOf('"', s), l = i.substring(s, a), s = i.indexOf('class="qualified-channel-title-text"'), s = i.indexOf('title="', s) + 7, a = i.indexOf('"', s), c = i.substring(s, a), s = i.indexOf('<div class="about-description'), a = i.indexOf('<div class="about-metadata-label', s), r = i.substring(s, a), s = i.indexOf(".hd-banner-image {"), s = i.indexOf("background-image: url(", s) + 22, a = i.indexOf(");", s), d = "http:" + i.substring(s, a), void t(null, {
                icon: o,
                subscribers: l,
                background: d,
                title: c,
                id: e.channelId,
                description: r
            }))
        }) : void t({
            message: "error: field arguments[0].channelId is empty"
        }, {})
    }, s.prototype.getPage = function(e, t) {
        var i = this;
        return e = e || {}, !e.channelId && this.channelId && (e.channelId = this.channelId), e.page = +e.page || 0, e.channelId ? void(this.pages[e.page] && this.pages[e.page].parseId ? this.pages[e.page].cached ? t(null, this.pages[e.page].data) : o("get", "https://www.youtube.com" + this.pages[e.page].parseId, function(s, a) {
            var o, l, c, r, d, u;
            if (200 !== a) return void t({
                message: "request got bad http status (" + a + ")"
            }, []);
            try {
                o = JSON.parse(s)
            } catch (e) {
                l = e, o = ""
            }
            return o ? (o.load_more_widget_html.trim().length > 10 ? (c = o.load_more_widget_html.indexOf('data-uix-load-more-href="/browse_ajax') + 25, r = o.load_more_widget_html.indexOf('"', c), d = o.load_more_widget_html.substring(c, r).replace(/&amp;/g, "&")) : d = "", i.pages[e.page + 1] = {
                parseId: d,
                cached: !1
            }, s.indexOf('class="qualified-channel-title-text"') === -1 ? u = i.pages[0] && i.pages[0].data && i.pages[0].data[0] && i.pages[0].data[0] && i.pages[0].data[0].channelTitle ? i.pages[0].data[0].channelTitle : "" : (c = s.indexOf('class="qualified-channel-title-text"'), c = s.indexOf('title="', c) + 7, r = s.indexOf('"', c), u = s.substring(c, r)), i.pages[e.page].cached = !0, i.pages[e.page].data = n(o.content_html, {
                id: e.channelId,
                title: u
            }), void t(null, i.pages[e.page].data)) : void t({
                message: "parse error for page id " + i.pages[e.page].parseId,
                code: l
            }, [])
        }) : e.page ? this.pages[e.page] && !this.pages[e.page].parseId ? t(null, []) : t({
            message: "wrong page number (page id not found in cache)"
        }, []) : o("get", "https://www.youtube.com/" + e.channelId + "/videos", function(s, a) {
            var o, l, c, r;
            return 200 !== a ? void t({
                message: "request got bad http status (" + a + ")"
            }, []) : (l = s.indexOf('class="qualified-channel-title-text"'), l = s.indexOf('title="', l) + 7, c = s.indexOf('"', l), r = s.substring(l, c), l = s.indexOf('data-uix-load-more-href="/browse_ajax') + 25, c = s.indexOf('"', l), i.pages[e.page + 1] = {
                parseId: s.substring(l, c).replace(/&amp;/g, "&"),
                cached: !1
            }, o = s.slice(s.indexOf('id="channels-browse-content-grid"'), s.indexOf("browse-items-load-more-button")), i.pages[0] = {
                cached: !0,
                parseId: "   ",
                data: n(o, {
                    id: e.channelId,
                    title: r
                })
            }, void t(null, i.pages[0].data))
        })) : void t({
            message: "error: field arguments[0].channelId is empty"
        }, [])
    }, s.prototype.filter = function() {
        return !1
    }, e.exports = s
}, function(e, t) {
    function i(e) {
        for (var t = {
                strictMode: !1,
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, i = t.parser[t.strictMode ? "strict" : "loose"].exec(e), n = {}, s = 14; s--;) n[t.key[s]] = i[s] || "";
        return n[t.q.name] = {}, n[t.key[12]].replace(t.q.parser, function(e, i, s) {
            i && (n[t.q.name][i] = s)
        }), n
    }

    function n(e, t, i, n, s, a) {
        var o, l = null,
            c = null,
            r = new XMLHttpRequest;
        "AJAX " + e.toUpperCase() + " " + t;
        if (a = a !== !1, r.onreadystatechange = function() {
                var e;
                if (4 === r.readyState) {
                    if (clearTimeout(c), "json" === s && 200 === r.status) try {
                        l = JSON.parse(r.responseText)
                    } catch (e) {
                        l = null
                    }
                    "function" == typeof i && (e = "xml" === s ? r.responseXML : "json" === s ? l : r.responseText, i(e, r.status, r))
                }
            }, r.open(e, t, a), n)
            for (o in n) n.hasOwnProperty(o) && r.setRequestHeader(o, n[o]);
        return r.send(), c = setTimeout(function() {
            r.abort(), "function" == typeof i && i(null, 0)
        }, 6e4), r
    }
    window.ajax = n, e.exports = {
        ajax: n,
        parseUri: i
    }
}, function(e, t, i) {
    "use strict";

    function n() {
        return r.languageIndex !== x && (a ? (a.show(), l = r.activePage.activeComponent, a.focus()) : (a = new h({
            visible: !1,
            events: {
                keydown: function(e) {
                    var t, i;
                    e.code === c.ok ? (r.settings.language = m.languages[x], x = -1, r.settings.languageOverwrite = 1, r.settings.keyboardLanguage = x, r.reload()) : e.code === c.back && (s.data[s.size - 1].value = x = r.languageIndex, e.stop = !0, a.hide(), y.show(), l.focus(), t = s.$focusItem.index, i = s.viewIndex, s.viewIndex = null, s.renderView(i), s.focusIndex(t))
                }
            }
        }), a.$body.classList.add("modalExit"), a.$header.innerHTML = gettext("In order to apply a new language, you must restart the application"), a.$content.innerHTML = "", a.$content.appendChild(o = document.createElement("div")), o.innerText = gettext("Ok"), o.className = "btn confirm" + (b ? " old" : ""), a.$content.appendChild(o = document.createElement("div")), o.className = "btn back" + (b ? " old" : ""), o.innerText = gettext("Cancelar"), a.$footer.innerHTML = "", r.activePage.add(a), y.hide(), a.show(), l = r.activePage.activeComponent, a.focus()), !0)
    }
    var s, a, o, l, c = i(13),
        r = i(1),
        d = i(30),
        u = i(33),
        h = i(51),
        p = (i(17), i(53)),
        m = i(15),
        v = document.getElementById("pm"),
        f = new u({
            $node: document.getElementById("pmTabSettings"),
            className: "tab",
            visible: !1,
            events: {
                show: function() {
                    v.style.backgroundImage = ""
                }
            }
        }),
        g = i(29),
        y = i(25),
        b = ["AuraHD2", "AuraHD3", "AuraHD8", "MAG254", "MAG275", "MAG276", "WR320"].indexOf(p.deviceModel()) !== -1,
        x = r.languageIndex;
    g.addListener("focus", function() {
        n()
    }), f.activate = function() {
        var e, t;
        s || (t = i(42), e = i(54), s = new d({
            $node: document.getElementById("pmSettingsList"),
            type: d.prototype.TYPE_HORIZONTAL,
            size: 1,
            data: [{
                title: gettext("Language"),
                value: r.languageIndex,
                values: m.languagesLocalized,
                description: gettext("Interface language"),
                icon: "icon flag",
                onclick: function(e) {
                    var i = t.nextLang(this.value);
                    this.value = i, x = i, e.$value.innerText = m.languagesLocalized[i]
                }
            }],
            render: function(e, t) {
                e.ready || (e.$container = e.appendChild(document.createElement("div")), e.$container.className = "container", e.$title = e.$container.appendChild(document.createElement("div")), e.$title.className = "title", e.$value = e.$container.appendChild(document.createElement("div")), e.$value.className = "value", e.$icon = e.$container.appendChild(document.createElement("div")), e.$description = e.appendChild(document.createElement("div")), e.$description.className = "description", e.ready = !0), e.$title.innerText = t.title, e.$value.innerHTML = t.values[t.value], e.$icon.className = t.icon, e.$description.innerText = t.description
            },
            events: {
                keydown: function(e) {
                    switch (e.code) {
                        case c.right:
                            break;
                        case c.left:
                            this.viewIndex > 0 && this.viewIndex < this.data.length - this.size ? this.renderView(this.viewIndex + 1) : this.move(e.code);
                            break;
                        case c.ok:
                            void 0 !== this.events["click:item"] && this.emit("click:item", {
                                $item: this.$focusItem,
                                event: e
                            });
                            break;
                        case c.back:
                            n() && (e.stop = !0)
                    }
                },
                "click:item": function(e) {
                    e.$item.data.onclick(e.$item)
                },
                overflow: function(e) {
                    e.direction === c.left && g.focus()
                }
            }
        }), f.add(s), s.renderView = function(e) {
            var t, i, n, s, a;
            if (this.viewIndex !== e) {
                for (s = this.viewIndex, this.viewIndex = a = e, i = 0; i < this.size; i++) t = this.$body.children[i], n = this.data[e], void 0 !== n ? (t.data = n, t.index = e, this.renderItem(t, n), n.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "", t.ready = !1), e++;
                return void 0 !== this.events["move:view"] && this.emit("move:view", {
                    prevIndex: s,
                    currIndex: a
                }), !0
            }
            return !1
        }), this.show(), s.focus(), s.focusIndex(0), f.focusEntry = s
    }, e.exports = f
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.className = "modalMessage" + (e.className || ""), s.call(this, e), this.$header = this.$body.appendChild(document.createElement("div")), this.$content = this.$body.appendChild(document.createElement("div")), this.$footer = this.$body.appendChild(document.createElement("div")), this.$header.className = "header", this.$content.className = "content", this.$footer.className = "footer", this.$header.innerText = "header", this.$content.innerText = "content", this.$footer.innerText = "footer", this.hide()
    }
    var s = i(52);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.$body = document.createElement("div"), e.$body.className = "body", s.call(this, e), this.$node.appendChild(document.createElement("div").appendChild(this.$body).parentNode)
    }
    var s = i(24);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.prototype.name = "spa-component-modal", e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = {
        initPlayer: window.top.gSTB.InitPlayer,
        saveUserData: window.top.gSTB.SaveUserData,
        loadUserData: window.top.gSTB.LoadUserData,
        setPosTime: window.top.gSTB.SetPosTime,
        getPosTime: window.top.gSTB.GetPosTime,
        play: window.top.gSTB.Play,
        pause: window.top.gSTB.Pause,
        continuePlay: window.top.gSTB.Continue,
        getVolume: window.top.gSTB.GetVolume,
        setVolume: window.top.gSTB.SetVolume,
        setNativeStringMode: window.top.gSTB && window.top.gSTB.SetNativeStringMode ? window.top.gSTB.SetNativeStringMode : function() {},
        setServiceButtonState: window.top.gSTB.EnableServiceButton,
        setVKButtonState: window.top.gSTB.EnableVKButton,
        setTvButtonState: window.top.gSTB.EnableTvButton,
        setAppButtonState: window.top.gSTB.EnableAppButton,
        hideVK: window.top.gSTB.HideVirtualKeyboard,
        showVK: window.top.gSTB.ShowVirtualKeyboard,
        getStandByStatus: window.top.gSTB.GetStandByStatus,
        setStandByStatus: window.top.gSTB.StandBy,
        getEnv: window.top.gSTB.GetEnv,
        isMuted: window.top.gSTB.GetMute,
        setMute: window.top.gSTB.SetMute,
        deviceModel: window.top.gSTB.GetDeviceModelExt
    }
}, function(e, t, i) {
    "use strict";
    var n = i(4),
        s = new n;
    s.data = {
        quality: [gettext("Best"), "720p", "480p", "360p", "240p"],
        safeSearch: [gettext("Off"), gettext("On")]
    }, s.getNext = function(e, t) {
        if (s.data[e] && s.data[e][t]) return ++t, s.data[e].length === t && (t = 0), this.emit("changed", {
            key: e,
            value: s.data[e][t],
            index: t
        }), {
            value: s.data[e][t],
            index: t
        }
    }, e.exports = s
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        var i = 1 ^ e;
        if (!k)
            if (t) k = !0, h.getPage({
                page: T - 1,
                count: 1
            }, function(t, n) {
                --T, --N, $ = i, I = e, g = i, v[i].data = n, v[i].viewIndex = null, v[i].renderView(0), v[i].focusIndex(0), v[i].emit("view:ready")
            });
            else {
                if (0 === v[I].data.length) return void v[e].emit("view:ready");
                k = !0, h.getPage({
                    page: N + 1,
                    count: 1
                }, function(t, n) {
                    return n ? void(t || 0 === n.length ? (++T, ++N, v[e].data = [], v[e].viewIndex = null, v[e].renderView(0), v[e].focusIndex(0), v[e].$title.innerHTML = "", $ = i, I = e, g = i, v[$].$node.style.top = w, v[I].$node.style.top = x, v[g].focus(), v[e].emit("view:ready")) : (++T, ++N, $ = i, I = e, g = i, v[e].data = n, v[e].viewIndex = null, v[e].renderView(0), v[e].focusIndex(0), v[e].emit("view:ready"))) : void v[e].emit("view:ready")
                })
            }
    }
    var s = i(13),
        a = i(1),
        o = i(33),
        l = i(30),
        c = i(35),
        r = i(37),
        d = i(36),
        u = i(56),
        h = new u,
        p = i(29),
        m = i(27),
        v = [],
        f = document.getElementById("pm"),
        g = 0,
        y = new o({
            $node: document.getElementById("pmTabMainContent"),
            visible: !1,
            className: "tab hidden",
            events: {
                focus: function() {
                    v[g].focus()
                },
                show: function() {
                    f.style.backgroundImage = ""
                }
            }
        }),
        b = new c({
            $node: document.getElementById("pmMainSearch"),
            $body: document.getElementById("pmMainSearchBody"),
            className: "tabInputSearch",
            events: {
                focus: function() {
                    this.setValue(""), a.route(a.pages.search)
                }
            }
        }),
        x = 0,
        w = 0,
        $ = 0,
        I = 1,
        T = 0,
        N = 1,
        C = -1,
        k = !0;
    y.activate = function() {
        this.show(), clearTimeout(C), C = setTimeout(function() {
            m.hide()
        }, 1e4), 0 === v.length ? (m.show(), v.push(new r({
            $node: document.getElementById("pmListMainVideos0Node"),
            $body: document.getElementById("pmListMainVideos0Body"),
            $title: document.getElementById("pmMainChannelTitle0"),
            className: "listMovie0Node",
            model: new u({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: l.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === s.left && p.focus()
                },
                "view:ready": function() {
                    y.focusEntry = v[g], v[$].$node.style.top = w, v[I] && (v[I].$node.style.top = x), this.$title.innerHTML = "", v[g] && v[g].data.length > 0 && v[g].data[0].value && (m.hide(), clearTimeout(C)), this.show(), v[g].focus(), k = !1
                },
                "view:error": function(e) {
                    k = !1, "empty" === e ? (this.data = [], this.viewIndex = null, this.renderView(0), this.focusIndex(0), y.focusEntry = v[g], v[$].$node.style.top = w, v[I] && (v[I].$node.style.top = x), this.$title.innerHTML = this.model.channel.title, m.hide(), this.show(), clearTimeout(C), v[g].focus()) : 0 === T && n(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && d.setContent({
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                },
                focus: function() {
                    y.focusEntry = this
                }
            }
        })), v.push(new r({
            $node: document.getElementById("pmListMainVideos1Node"),
            $body: document.getElementById("pmListMainVideos1Body"),
            $title: document.getElementById("pmMainChannelTitle1"),
            className: "listMovie1Node",
            model: new u({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: l.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === s.left && p.focus()
                },
                "view:ready": function() {
                    y.focusEntry = v[g], v[$].$node.style.top = w, v[I].$node.style.top = x, this.$title.innerHTML = "", v[g] && v[g].data.length > 0 && v[g].data[0].value && (m.hide(), clearTimeout(C)), this.show(), clearTimeout(C), v[g].focus(), k = !1
                },
                "view:error": function(e) {
                    k = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), y.focusEntry = v[g], v[$].$node.style.top = w, v[I] && (v[I].$node.style.top = x), this.$title.innerHTML = this.model.channel.title, this.show(), m.hide(), clearTimeout(C), v[g].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && d.setContent({
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                },
                focus: function() {
                    y.focusEntry = this
                }
            }
        })), y.add(v[0]), y.add(v[1]), v[0].addListener("keydown", function(e) {
            e.code === s.down ? n(0, !1) : e.code === s.up ? T > 0 ? n(0, !0) : b.focus() : e.code === s.playPause && d.setContent({
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), v[1].addListener("keydown", function(e) {
            e.code === s.down ? n(1, !1) : e.code === s.up ? T > 0 ? n(1, !0) : b.focus() : e.code === s.playPause && d.setContent({
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), x = window.getComputedStyle(v[1].$node).getPropertyValue("top"), h.getPage({
            page: 0,
            count: 1
        }, function(e, t) {
            e && (t = []), T = 0, $ = 0, I = 1, N = 1, g = 0, v[$].data = t, v[$].viewIndex = null, v[$].renderView(0), v[$].focusIndex(0), v[$].emit("view:ready"), v[g].focus(), h.getPage({
                page: 1,
                count: 1
            }, function(e, t) {
                e && (t = []), v[I].data = t, v[I].viewIndex = null, v[I].renderView(0), v[I].focusIndex(0), v[I].emit("view:ready")
            })
        })) : v[g].data.length && v[g].focus(), window.lists = v
    }, y.add(b), e.exports = y
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t, i, n, s, a, o, l, c, r, d, u, h, p, m, v, f, g = [];
        for (r = e.split('<li class="yt-shelf-grid-item'), p = 0; p < r.length; p++)
            if (h = r[p], h.indexOf("yt-lockup-content") !== -1) {
                if (h.indexOf("yt-lockup-playlist") !== -1) m = "playlist";
                else {
                    if (h.indexOf("yt-lockup-video") === -1 || h.indexOf("branded-page-module") !== -1 || h.indexOf("data-set-reminder-text") !== -1) continue;
                    m = "video", f = h.indexOf("yt-badge-live") !== -1
                }
                d = h.indexOf("//i.ytimg"), u = h.indexOf('"', d), l = "https:" + h.substring(d, u).replace(/&amp;/g, "&"), h.indexOf('<a href="/channel/') === -1 ? h.indexOf("data-channel-external-id=") === -1 ? h.indexOf('<a href="/user/') === -1 ? c = "" : (d = h.indexOf('<a href="/user/') + 10, u = h.indexOf('"', d), c = h.substring(d, u)) : (d = h.indexOf('data-channel-external-id="') + 26, u = h.indexOf('"', d), c = "channel/" + h.substring(d, u)) : (d = h.indexOf('<a href="/channel/') + 10, u = h.indexOf('"', d), c = h.substring(d, u)), "playlist" === m && (d = h.indexOf('" dir="ltr">') + 12, u = h.indexOf("</a><span", d), o = h.substring(d, u), h.indexOf('<div class="yt-lockup-byline ">YouTube</div>') !== -1 && (c = ""), d = h.indexOf('<a href="/watch?v=') + 9, u = h.indexOf('"', d), v = h.substring(d, u).replace("&amp;", "&"), d = h.indexOf('" dir="ltr">') + 12, u = h.indexOf("<", d), i = h.substring(d, u), g.push({
                    value: 1,
                    playlistId: v,
                    channel: {
                        title: i.substr(0, 100),
                        id: c
                    },
                    title: o.substr(0, 100),
                    icon: l,
                    type: "playlist",
                    channelTitle: i.substr(0, 100),
                    viewCount: " ",
                    duration: " ",
                    publishedAt: " ",
                    locale: {
                        publishedAt: " ",
                        viewCount: " ",
                        channelTitle: i.substr(0, 100)
                    }
                })), "video" === m && (d = h.indexOf('data-context-item-id="') + 22, u = h.indexOf('"', d), t = h.substring(d, u), d = h.indexOf('<span class="video-time" aria-hidden="true">') + 44, u = h.indexOf("</span>", d), n = h.substring(d, u), d = h.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36, u = h.indexOf(" ", d), s = h.substring(d, u), d = h.indexOf("</li><li>", d) + 9, u = h.indexOf("</li></ul></div>", d), a = h.substring(d, u), d = h.indexOf('" dir="ltr">') + 12, 11 === d && (d = h.indexOf(' dir="ltr">') + 11, 10 === d && (d = h.indexOf('" dir="rtl">') + 12)), u = h.indexOf("</", d), o = h.substring(d, u), d = h.indexOf('<a href="', u), d = h.indexOf(">", d) + 1, u = h.indexOf("</a>", d), i = h.substring(d, u), g.push({
                    value: 1,
                    id: t,
                    channelTitle: i.substr(0, 100),
                    duration: f ? "" : n.substr(0, 100),
                    realDuration: f ? "" : n.substr(0, 100),
                    viewCount: s.substr(0, 100),
                    publishedAt: f ? "" : a.substr(0, 100),
                    dimension: "",
                    definition: "",
                    title: o.substr(0, 100),
                    icon: l,
                    channelId: c,
                    type: "video",
                    locale: {
                        publishedAt: f ? "" : a.substr(0, 100),
                        viewCount: s.substr(0, 100),
                        channelTitle: i.substr(0, 100)
                    }
                }))
            }
        return g
    }

    function s() {
        l.call(this), this.pages = {}
    }
    var a = i(49),
        o = a.ajax,
        l = i(4);
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, s.prototype.getPage = function(e, t) {
        var i = this;
        e.page = +e.page || 0, this.pages[e.page] && this.pages[e.page].parseId ? this.pages[e.page].cached ? t(null, this.pages[e.page].data) : o("get", "https://www.youtube.com" + this.pages[e.page].parseId, function(s, a) {
            var o, l, c, r, d;
            if (200 !== a) return void t({
                message: "request got bad http status (" + a + ")"
            }, []);
            try {
                o = JSON.parse(s)
            } catch (e) {
                l = e, o = ""
            }
            return o ? (o.load_more_widget_html.trim().length > 10 ? (c = o.load_more_widget_html.indexOf('data-uix-load-more-href="') + 25, r = o.load_more_widget_html.indexOf('"', c), d = o.load_more_widget_html.substring(c, r).replace(/&amp;/g, "&")) : d = "", i.pages[e.page + 1] = {
                parseId: d,
                cached: !1
            }, i.pages[e.page].cached = !0, i.pages[e.page].data = n(o.content_html), void t(null, i.pages[e.page].data)) : void t({
                message: "parse error for page id " + i.pages[e.page].parseId,
                code: l
            }, [])
        }) : e.page ? this.pages[e.page] && !this.pages[e.page].parseId ? t(null, []) : t({
            message: "wrong page number (page id not found in cache)"
        }, []) : o("get", "https://www.youtube.com/", function(s, a) {
            var o, l, c;
            return 200 !== a ? void t({
                message: "request got bad http status (" + a + ")"
            }, []) : (l = s.indexOf('data-uix-load-more-href="') + 25, c = s.indexOf('"', l), i.pages[e.page + 1] = {
                parseId: s.substring(l, c).replace(/&amp;/g, "&"),
                cached: !1
            }, o = s.slice(s.indexOf('id="feed-main-'), s.indexOf('id="feed-error"')), i.pages[0] = {
                cached: !0,
                parseId: "   ",
                data: n(o)
            }, void t(null, i.pages[0].data))
        })
    }, s.prototype.filter = function() {
        return !1
    }, e.exports = s
}, function(e, t, i) {
    "use strict";
    var n, s, a, o = "ps",
        l = i(13),
        c = i(1),
        r = i(22),
        d = i(58),
        u = i(37),
        h = i(59),
        p = i(36),
        m = new(i(60)),
        v = i(61),
        f = i(25),
        g = (i(15), new r({
            $node: document.getElementById(o)
        })),
        y = new d({
            $node: document.getElementById("psSearch"),
            $body: document.getElementById("psSearchInput")
        }),
        b = i(27),
        x = !0,
        w = " ",
        $ = null,
        I = -1;
    g.addListener("keydown", function(e) {
            e.code === l.back && (c.route(c.pages.main), e.stop = !0)
        }), g.addListener("hide", function() {
            b.hide()
        }), s = v(function(e) {
            w = e.value, $.model.filter({
                searchQuery: e.value
            }), clearTimeout(I), I = setTimeout(function() {
                b.hide()
            }, 5e3)
        }, 1e3), g.addListener("show", function(e) {
            e = e.data || {}, f.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !1,
                    text: ""
                },
                MORE: {
                    icon: "more",
                    visible: !1,
                    text: ""
                },
                GUIDE: {
                    icon: "info",
                    visible: !1,
                    text: ""
                },
                BACK: {
                    icon: "back",
                    visible: !0,
                    text: gettext("Back")
                }
            }), b.hide(), g.activeComponent || (x && (window.psSearchIcon.style.display = "block", setTimeout(function() {
                window.psSearchIcon.style.display = "inline-table"
            }, 0)), null !== g.activeComponent && g.activeComponent !== y || setTimeout(function() {
                y.focus(), window.searchInput = y, e.search && y.setValue(e.search)
            }, 0))
        }),
        function() {
            n = i(62), y.addListener("keydown", function(e) {
                e.code === l.down ? (a = y.getCaretPosition(), n.focus()) : e.code === l.up && $.visible ? ($.focus(), $.$focusItem || $.focusIndex(0)) : e.code === l.back && 0 === this.$body.value.length && (c.route(c.pages.main), e.stop = !0)
            }), y.addListener("input", function(e) {
                $.hide(), b.show(), s(e)
            }), n.addListener("overflow", function(e) {
                e.direction === l.up && y.focus()
            }), n.addListener("click:item", function(e) {
                "symbol" === e.$item.data.className ? (y.addChar(e.$item.data.value, a), ++a) : e.$item.data.className.indexOf("keySpace") !== -1 ? (y.addChar(" ", a), a = y.getCaretPosition()) : e.$item.data.className.indexOf("keyDelete") !== -1 ? (y.removeChar(), a = y.getCaretPosition()) : e.$item.data.className.indexOf("delete") !== -1 && (y.setValue(""), a = y.getCaretPosition())
            }), n.addListener("keydown", function() {
                s({
                    value: y.value
                })
            }), $ = new u({
                $node: document.getElementById("psListVideos"),
                model: new h({
                    order: "relevance"
                }),
                className: "movieList",
                size: 5,
                events: {
                    keydown: function(e) {
                        switch (e.code) {
                            case l.down:
                                y.focus();
                                break;
                            case l.right:
                                this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                                break;
                            case l.left:
                                this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : 1 === this.$focusItem.index ? this.focusIndex(0) : this.move(e.code);
                                break;
                            case l.ok:
                                this.emit("click:item", {
                                    $item: this.$focusItem,
                                    event: e
                                })
                        }
                    },
                    "click:item": function(e) {
                        "video" === e.$item.data.type ? p.setContent({
                            video: e.$item.data,
                            playlist: this.data,
                            position: e.$item.index
                        }) : "playlist" === e.$item.data.type ? m.getPage({
                            playlistId: e.$item.data.playlistId
                        }, function(t, i) {
                            p.setContent({
                                channel: e.$item.data.channel,
                                video: i[0],
                                playlist: i,
                                position: 0
                            })
                        }) : "channel" === e.$item.data.type && c.route(c.pages.main, {
                            channel: e.$item.data
                        })
                    },
                    "view:ready": function() {
                        clearTimeout(I), b.hide(), this.show(), this.focusIndex(0)
                    }
                },
                render: function(e, t) {
                    var i, n, s;
                    e.ready ? (e.$videoThumb.className = "thumb " + t.type, e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", e.$videoTitle.innerText = t.title, e.$videoTitle.className = "title " + t.type, e.$videoAthour.className = "uploader " + t.type, "video" === t.type ? (e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = t.locale.viewCount, e.$dateAdded.innerText = t.locale.publishedAt, e.$videoDuration.innerText = t.duration) : "channel" === t.type ? (e.$videoAthour.innerText = t.locale.subscriberCount, e.$viewCounter.innerText = "", e.$dateAdded.innerText = "", e.$videoDuration.innerText = "") : (e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = "", e.$dateAdded.innerText = "", e.$videoDuration.innerText = ""), "playlist" === t.type ? e.$videoDuration.className = "icon playlist" : e.$videoDuration.className = "duration") : (i = document.createElement("div"), i.className = "container", e.appendChild(i), n = document.createElement("div"), n.className = "tileTop", i.appendChild(n), s = document.createElement("div"), s.className = "tileBottom", i.appendChild(s), e.$videoThumb = document.createElement("div"), e.$videoThumb.className = "thumb " + t.type, e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", n.appendChild(e.$videoThumb), e.$videoDuration = document.createElement("div"), "playlist" === t.type ? e.$videoDuration.className = "icon playlist" : e.$videoDuration.className = "duration", t.duration ? e.$videoDuration.innerText = t.duration : e.$videoDuration.innerText = "", n.appendChild(e.$videoDuration), e.$videoTitle = document.createElement("div"), e.$videoTitle.className = "title " + t.type, e.$videoTitle.innerText = t.title, s.appendChild(e.$videoTitle), e.$videoAthour = document.createElement("div"), e.$videoAthour.className = "uploader " + t.type, t.channelTitle ? e.$videoAthour.innerText = t.locale.channelTitle : "channel" === t.type ? e.$videoAthour.innerText = t.locale.subscriberCount : e.$videoAthour.innerText = "", s.appendChild(e.$videoAthour), e.$viewCounter = document.createElement("div"), e.$viewCounter.className = "viewCount", "video" === t.type ? e.$viewCounter.innerText = t.locale.viewCount : e.$viewCounter.innerText = "", s.appendChild(e.$viewCounter), e.$dateAdded = document.createElement("div"), e.$dateAdded.className = "uploaded", "video" === t.type ? e.$dateAdded.innerText = t.locale.publishedAt : e.$dateAdded.innerText = "", s.appendChild(e.$dateAdded), e.ready = !0)
                }
            })
        }(), e.exports = g
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t = this;
        this.value = "", this.type = this.TYPE_TEXT, this.type = this.TYPE_TEXT, this.direction = "ltr", this.noprevent = !0, e = e || {}, e.className = "inputNative " + (e.className || ""), s.call(this, e), this.init(e), this.addListener("keydown", function(e) {
            e.code === a.back && (e.stop = !0)
        }), this.$body.addEventListener("input", function(e) {
            t.value = t.$body.value, void 0 !== t.events["input"] && t.emit("input", {
                value: t.$body.value
            })
        }), this.addListener("focus", function() {
            t.$body.focus()
        }), this.addListener("blur", function() {
            t.$body.blur()
        })
    }
    var s = i(31),
        a = i(13);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.prototype.init = function(e) {
        void 0 !== e.type && (this.$body.type = this.type = e.type), void 0 !== e.value && (this.$body.value = this.value = e.value), void 0 !== e.placeholder && (this.$body.placeholder = e.placeholder), void 0 !== e.direction && (this.$node.dir = this.direction = e.direction)
    }, n.prototype.addChar = function(e, t) {
        t = void 0 === t ? this.value.length : t, this.value = this.value.substring(0, t) + e + this.value.substring(t, this.value.length), this.$body.value = this.value, void 0 !== this.events["input"] && this.emit("input", {
            value: this.value
        })
    }, n.prototype.removeChar = function(e) {
        e = void 0 === e ? this.value.length - 1 : e, this.value.length > 0 && (this.value = this.value.substring(0, e) + this.value.substring(e + 1, this.value.length), this.$body.value = this.value, void 0 !== this.events["input"] && this.emit("input", {
            value: this.value
        })), this.$body.value = this.value
    }, n.prototype.setCaretPosition = function(e) {
        this.$body.setSelectionRange(e, e)
    }, n.prototype.getCaretPosition = function() {
        return this.$body.selectionStart
    }, n.prototype.setValue = function(e) {
        this.value !== e && (this.value = e, this.$body.value = this.value, void 0 !== this.events["input"] && this.emit("input", {
            value: this.value
        }))
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t, i, n, s, a, o, l, c, r, d, u, h, p, m, v, f, g, y, b = [];
        for (v = e.split('<div class="yt-lockup yt-lockup-tile '), f = 0; f < v.length; f++)
            if (g = v[f], g.indexOf("yt-lockup-content") !== -1) {
                if (g.indexOf("yt-lockup-playlist") !== -1) t = "playlist";
                else if (g.indexOf("yt-lockup-channel") !== -1) t = "channel";
                else {
                    if (g.indexOf("yt-lockup-video") === -1 || g.indexOf("branded-page-module") !== -1 || g.indexOf("data-set-reminder-text") !== -1) continue;
                    y = g.indexOf("yt-badge-live") !== -1, t = "video"
                }
                p = g.indexOf("//i.ytimg"), m = g.indexOf('"', p), c = "https:" + g.substring(p, m).replace(/&amp;/g, "&"), p = g.indexOf('" dir="ltr">') + 12, 11 === p && (p = g.indexOf(' dir="ltr">') + 11, 10 === p && (p = g.indexOf('" dir="rtl">') + 12)), m = g.indexOf("</", p), l = g.substring(p, m), g.indexOf('<a href="/channel/') === -1 ? g.indexOf("data-channel-external-id=") === -1 ? g.indexOf('<a href="/user/') === -1 ? r = "" : (p = g.indexOf('<a href="/user/') + 10, m = g.indexOf('"', p), r = g.substring(p, m)) : (p = g.indexOf('data-channel-external-id="') + 26, m = g.indexOf('"', p), r = "channel/" + g.substring(p, m)) : (p = g.indexOf('<a href="/channel/') + 10, m = g.indexOf('"', p), r = g.substring(p, m)), "playlist" === t && (g.indexOf('<div class="yt-lockup-byline ">YouTube</div>') !== -1 && (r = ""), p = g.indexOf('<a href="/watch?v=') + 9, m = g.indexOf('"', p), d = g.substring(p, m).replace("&amp;", "&"), p = g.indexOf('" dir="ltr">', m) + 12, m = g.indexOf("<", p), n = g.substring(p, m), b.push({
                    value: 1,
                    playlistId: d,
                    channel: {
                        title: n.substr(0, 100),
                        id: r
                    },
                    title: l.substr(0, 100),
                    icon: c,
                    type: "playlist",
                    channelTitle: n.substr(0, 100),
                    viewCount: " ",
                    duration: " ",
                    publishedAt: " ",
                    locale: {
                        publishedAt: " ",
                        viewCount: " ",
                        channelTitle: n.substr(0, 100)
                    }
                })), "video" === t && (p = g.indexOf('href="/watch?v=') + 15, m = g.indexOf('"', p), i = g.substring(p, m), p = g.indexOf('<a href="', p), p = g.indexOf(">", p) + 1, m = g.indexOf("</a>", p), n = g.substring(p, m), p = g.indexOf('<span class="video-time" aria-hidden="true">') + 44, 43 === p && (p = g.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36), m = g.indexOf("</", p), s = g.substring(p, m), p = g.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36, m = g.indexOf("</", p), o = g.substring(p, m), y ? (p = g.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36, m = g.indexOf("<", p)) : (p = g.indexOf("</li><li>", p) + 9, m = g.indexOf(" ", p)), a = g.substring(p, m), b.push({
                    value: 1,
                    id: i,
                    channelTitle: n.substr(0, 100),
                    duration: y ? "" : s.substr(0, 100),
                    realDuration: y ? "" : s.substr(0, 100),
                    viewCount: a.substr(0, 100),
                    publishedAt: y ? "" : o.substr(0, 100),
                    dimension: "",
                    definition: "",
                    title: l.substr(0, 100),
                    icon: c,
                    channelId: r,
                    type: "video",
                    locale: {
                        publishedAt: y ? "" : o.substr(0, 100),
                        viewCount: a.substr(0, 100),
                        channelTitle: n.substr(0, 100)
                    }
                })), "channel" === t && (p = g.indexOf("//yt"), m = g.indexOf('"', p), c = "https:" + g.substring(p, m), p = g.indexOf('" dir="ltr">') + 12, m = g.indexOf("<", p), l = g.substring(p, m), g.indexOf("yt-channel-title-autogenerated") === -1 ? (p = g.indexOf('"yt-lockup-meta-info"><li>') + 26, m = g.indexOf(" ", p), u = g.substring(p, m)) : u = "", p = g.indexOf('yt-subscriber-count" title="') + 28, m = g.indexOf('"', p), h = g.substring(p, m), b.push({
                    value: 1,
                    id: r,
                    title: l.substr(0, 100),
                    icon: c,
                    type: "channel",
                    viewCount: "",
                    commentCount: "",
                    subscriberCount: h.substr(0, 100),
                    hiddenSubscriberCount: "",
                    videoCount: u.substr(0, 100),
                    locale: {
                        subscriberCount: h.substr(0, 100)
                    }
                }))
            }
        return b
    }

    function s(e) {
        l.call(this), this.pages = {}, this.searchQuery = "", this.filter(e)
    }
    var a = i(49),
        o = a.ajax,
        l = i(4);
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, s.prototype.getPage = function(e, t) {
        var i = this;
        e.page = +e.page || 0, this.pages[e.page] && this.pages[e.page].parseId ? this.pages[e.page].cached ? t(null, this.pages[e.page].data) : o("get", "https://www.youtube.com" + this.pages[e.page].parseId, function(s, a) {
            var o, l, c, r;
            return 200 !== a ? void t({
                message: "request got bad http status (" + a + ")"
            }, []) : (l = s.indexOf('class="branded-page-box search-pager'), c = s.indexOf('class="branded-page-v2-secondary-col', l), o = s.substring(l, c), o = o.split('<a href="'), o[o.length - 1] && o[o.length - 1].indexOf("»") !== -1 ? (l = o[o.length - 1].indexOf('href="/results?') + 6,
                c = o[o.length - 1].indexOf('"', l), r = o[o.length - 1].substring(l, c).replace("&amp;", "&")) : r = "", i.pages[e.page + 1] = {
                parseId: r,
                cached: !1
            }, o = s.slice(s.indexOf('id="item-section-'), s.indexOf('class="branded-page-box search-pager')), i.pages[e.page] = {
                cached: !0,
                data: n(o)
            }, void t(null, i.pages[e.page].data))
        }) : e.page ? this.pages[e.page] && !this.pages[e.page].parseId ? t(null, []) : t({
            message: "wrong page number (page id not found in cache)"
        }, []) : o("get", "https://www.youtube.com/results?search_query=" + this.searchQuery, function(s, a) {
            var o, l, c, r;
            return 200 !== a ? void t({
                message: "request got bad http status (" + a + ")"
            }, []) : (l = s.indexOf('class="branded-page-box search-pager'), c = s.indexOf('class="branded-page-v2-secondary-col', l), o = s.substring(l, c), o = o.split('<a href="'), o[o.length - 1] && o[o.length - 1].indexOf("»") !== -1 ? (l = o[o.length - 1].indexOf('href="/results?') + 6, c = o[o.length - 1].indexOf('"', l), r = o[o.length - 1].substring(l, c).replace("&amp;", "&")) : r = "", i.pages[e.page + 1] = {
                parseId: r,
                cached: !1
            }, o = s.slice(s.indexOf('id="item-section-'), s.indexOf('class="branded-page-box search-pager')), i.pages[0] = {
                cached: !0,
                parseId: "/results?search_query=" + i.searchQuery,
                data: n(o)
            }, void t(null, i.pages[0].data))
        })
    }, s.prototype.filter = function(e) {
        var t = !1;
        return void 0 !== e.searchQuery && this.searchQuery !== e.searchQuery && (t = !0, this.searchQuery = e.searchQuery), !!t && (this.pages = {}, this.emit("content:changed", e), !0)
    }, e.exports = s
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        var i, n, s, a, o, l, c, r, d, u = [];
        for (o = e.split('<li class="yt-uix-scroller-scroll-unit'), d = 0; d < o.length; d++) r = o[d], r.indexOf('<div class="playlist-video-description">') !== -1 && (l = r.indexOf('<span class="video-uploader-byline">') + 36, c = r.indexOf("</span>", l), r.substring(l, c).trim() && (l = r.indexOf('data-video-id="') + 15, c = r.indexOf('"', l), i = r.substring(l, c), l = r.indexOf('data-video-title="') + 18, c = r.indexOf('"', l), s = r.substring(l, c), l = r.indexOf('="https://i.ytimg') + 2, c = r.indexOf('"', l), a = r.substring(l, c).replace(/&amp;/g, "&"), l = r.indexOf('data-video-username="') + 21, c = r.indexOf('"', l), n = r.substring(l, c), u.push({
            value: 1,
            id: i,
            channelTitle: n,
            duration: " ",
            realDuration: " ",
            viewCount: " ",
            publishedAt: " ",
            dimension: "",
            definition: "",
            title: s,
            icon: a,
            channelId: t,
            type: "video",
            locale: {
                publishedAt: " ",
                viewCount: " ",
                channelTitle: n
            }
        })));
        return u
    }

    function s() {
        l.call(this), this.pages = {}, this.playlistId = null
    }
    var a = i(49),
        o = a.ajax,
        l = i(4);
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, s.prototype.getPage = function(e, t) {
        var i = this;
        return e.page = e.page || 0, e.playlistId ? (e.playlistId !== this.playlistId && (this.playlistId = e.playlistId, this.pages = {}), e.page ? void t(null, []) : void(this.pages[0] ? t(null, this.pages[0].data) : o("get", "https://www.youtube.com" + e.playlistId, function(s, a) {
            var o, l, c, r;
            return 200 !== a ? void t({
                message: "request got bad http status (" + a + ")"
            }, []) : (l = s.indexOf('<a href="/channel/') + 10, c = s.indexOf('"', l), r = s.substring(l, c), l = s.indexOf('id="playlist-autoscroll-list"'), c = s.indexOf('id="placeholder-player"', l), o = s.slice(l, c), i.pages[0] = {
                cached: !0,
                parseId: e.playlistId.replace(/&amp;/g, "&"),
                data: n(o, r)
            }, void t(null, i.pages[0].data))
        }))) : void t({
            message: "error: field arguments[0].playlistId is empty"
        }, [])
    }, s.prototype.filter = function() {
        return !1
    }, e.exports = s
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var i;
        return function() {
            var n = this,
                s = arguments;
            clearTimeout(i), i = setTimeout(function() {
                i = null, e.apply(n, s)
            }, t)
        }
    }
}, function(e, t, i) {
    "use strict";
    var n, s = i(1),
        a = i(63),
        o = i(42),
        l = i(15),
        c = new a({
            $node: document.getElementById("psKeyboard"),
            className: "keyList",
            cycleY: !1,
            events: {
                "click:item": function(e) {
                    e.$item.data.className.indexOf("keyGlobe") !== -1 ? (s.settings.keyboardLanguage = o.nextLang(s.settings.keyboardLanguage), this.viewIndex = null, this.init({
                        data: i(65)("./" + l.languages[s.settings.keyboardLanguage])
                    }), this.focusItem(n), window.top.gSTB.SetInputLang(l.languages[s.settings.keyboardLanguage])) : e.$item.data.className.indexOf("nums") !== -1 ? this.init({
                        data: [
                            [{
                                value: "1",
                                className: "symbol"
                            }, {
                                value: "2",
                                className: "symbol"
                            }, {
                                value: "3",
                                className: "symbol"
                            }, {
                                value: "^",
                                className: "symbol"
                            }, {
                                value: "`",
                                className: "symbol"
                            }, {
                                value: "!",
                                className: "symbol"
                            }, {
                                value: "#",
                                className: "symbol"
                            }, {
                                value: "$",
                                className: "symbol"
                            }, {
                                value: "%",
                                className: "symbol"
                            }],
                            [{
                                value: "4",
                                className: "symbol"
                            }, {
                                value: "5",
                                className: "symbol"
                            }, {
                                value: "6",
                                className: "symbol"
                            }, {
                                value: "&",
                                className: "symbol"
                            }, {
                                value: "(",
                                className: "symbol"
                            }, {
                                value: ")",
                                className: "symbol"
                            }, {
                                value: "*",
                                className: "symbol"
                            }, {
                                value: ";",
                                className: "symbol"
                            }, {
                                value: ":",
                                className: "symbol"
                            }],
                            [{
                                value: "7",
                                className: "symbol"
                            }, {
                                value: "8",
                                className: "symbol"
                            }, {
                                value: "9",
                                className: "symbol"
                            }, {
                                value: "~",
                                className: "symbol"
                            }, {
                                value: "/",
                                className: "symbol"
                            }, {
                                value: "|",
                                className: "symbol"
                            }, {
                                value: "%",
                                className: "symbol"
                            }, {
                                value: ":",
                                className: "symbol"
                            }, {
                                value: "?",
                                className: "symbol"
                            }],
                            [{
                                value: "№",
                                className: "symbol"
                            }, {
                                value: "0",
                                className: "symbol"
                            }, {
                                value: "[",
                                className: "symbol"
                            }, {
                                value: "]",
                                className: "symbol"
                            }, {
                                value: '"',
                                className: "symbol"
                            }, {
                                value: "'",
                                className: "symbol"
                            }, {
                                value: "{",
                                className: "symbol"
                            }, {
                                value: "}",
                                className: "symbol"
                            }, {
                                value: "ABC",
                                className: "symbol letters"
                            }]
                        ]
                    }) : e.$item.data.className.indexOf("letters") !== -1 && this.init({
                        data: i(65)("./" + l.languages[s.settings.keyboardLanguage])
                    })
                }
            },
            render: function(e, t) {
                "keyGlobe" === t.className ? (e.innerHTML = l.languagesCodeLocalized[s.settings.keyboardLanguage], n = e) : e.innerHTML = t.value, t.className && (e.className = "item " + t.className)
            },
            data: i(65)("./" + l.languages[s.settings.keyboardLanguage])
        });
    window.top.gSTB.SetInputLang(l.languages[s.settings.keyboardLanguage]), e.exports = c
}, function(e, t, i) {
    "use strict";
    e.exports = i(64), e.exports.prototype.name = "stb-component-grid"
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.map = [], this.$focusItem = null, this.data = [], this.cycleX = !0, this.cycleY = !0, this.focusX = 0, this.focusY = 0, l.call(this, e), this.init(e)
    }

    function s(e) {
        var t, i, n;
        for (t = 0; t < e.length; t++)
            for (i = 0; i < e[t].length; i++) n = e[t][i], "object" == typeof n ? (n.colSpan = n.colSpan || 1, n.rowSpan = n.rowSpan || 1) : n = e[t][i] = {
                value: e[t][i],
                colSpan: 1,
                rowSpan: 1
            };
        return e
    }

    function a(e, t, i, n, s, a) {
        var o, l;
        for (o = i; o < i + s; o++) {
            for (e.length < o + 1 && e.push([]); void 0 !== e[o][t];) t++;
            for (l = t; l < t + n; l++) e[o].length < l + 1 && e[o].push(), e[o][l] = a, void 0 === a.x && (a.x = l), void 0 === a.y && (a.y = o)
        }
    }

    function o(e) {
        var t, i, n, s = [];
        for (t = 0; t < e.length; t++)
            for (i = 0; i < e[t].length; i++) n = e[t][i], a(s, i, t, n.colSpan, n.rowSpan, n.$item), delete n.$item;
        return s
    }
    var l = i(24),
        c = i(14);
    n.prototype = Object.create(l.prototype), n.prototype.constructor = n, n.prototype.name = "spa-component-grid", n.prototype.renderItemDefault = function(e, t) {
        e.innerText = t.value
    }, n.prototype.renderItem = n.prototype.renderItemDefault, n.prototype.defaultEvents = {
        mousewheel: function(e) {
            e.wheelDeltaY && this.move(e.wheelDeltaY > 0 ? c.up : c.down), e.wheelDeltaX && this.move(e.wheelDeltaX > 0 ? c.left : c.right)
        },
        keydown: function(e) {
            switch (e.code) {
                case c.up:
                case c.down:
                case c.right:
                case c.left:
                    this.move(e.code);
                    break;
                case c.enter:
                    this.events["click:item"] && this.emit("click:item", {
                        $item: this.$focusItem,
                        event: e
                    })
            }
        }
    }, n.prototype.init = function(e) {
        var t, i, n, a, l, c, r, d, u = this,
            h = !1,
            p = function(e) {
                this.data.disable !== !0 && (u.focusItem(this), u.events["click:item"] && u.emit("click:item", {
                    $item: this,
                    event: e
                }))
            },
            m = function(d) {
                if (d && u.data !== d && (u.data = d, h = !0), e.render && u.renderItem !== e.render && (u.renderItem = e.render, h = !0), h) {
                    for (u.$table = document.createElement("table"), l = document.createElement("tbody"), u.data = s(u.data), t = 0; t < u.data.length; t++) {
                        for (n = l.insertRow(), i = 0; i < u.data[t].length; i++) a = n.insertCell(-1), a.className = "item", r = u.data[t][i], r.$item = a, a.colSpan = r.colSpan, a.rowSpan = r.rowSpan, r.focus && (c = a), r.disable && a.classList.add("disable"), r.mark && a.classList.add("mark"), u.renderItem(a, r), a.data = r, a.addEventListener("click", p);
                        l.appendChild(n)
                    }
                    u.map = o(u.data), u.$body.innerText = null, u.$table.appendChild(l), u.$body.appendChild(u.$table), c ? u.focusItem(c) : u.focusItem(u.map[0][0])
                }
            };
        void 0 !== e.cycleX && (this.cycleX = e.cycleX), void 0 !== e.cycleY && (this.cycleY = e.cycleY), e.provider && (this.provider = e.provider, this.sizeX = e.sizeX, this.sizeY = e.sizeY), e.translate && (this.translate = e.translate), e.provider ? (d = this.provider.get(null, function(e, t) {
            e && u.events["data:error"] && u.emit("data:error", e), m(u.translate(t)), u.events["data:ready"] && u.emit("data:ready")
        }), this.events["data:get"] && this.emit("data:get", {
            fresh: d
        })) : m(e.data)
    }, n.prototype.defaultTranslate = function(e) {
        var t, i, n, s = [];
        for (t = 0; t < this.sizeY; t++) {
            for (n = [], i = 0; i < this.sizeX; i++) n[i] = e[t * this.sizeX + i];
            s[t] = n
        }
        return s
    }, n.prototype.translate = n.prototype.defaultTranslate, n.prototype.move = function(e) {
        for (var t, i = this.focusX, n = this.focusY, s = !0, a = !1, o = !1; s;) {
            switch (e) {
                case c.up:
                    n > 0 ? n-- : (this.cycleY && (n = this.map.length - 1, o = !0), a = !0);
                    break;
                case c.down:
                    n < this.map.length - 1 ? n++ : (this.cycleY && (n = 0, o = !0), a = !0);
                    break;
                case c.right:
                    i < this.map[n].length - 1 ? i++ : (this.cycleX && (i = 0, o = !0), a = !0);
                    break;
                case c.left:
                    i > 0 ? i-- : (this.cycleX && (i = this.map[n].length - 1, o = !0), a = !0)
            }
            i === this.focusX && n === this.focusY && (s = !1), this.map[n][i] !== this.map[this.focusY][this.focusX] && this.map[n][i].data.disable !== !0 && (s = !1), a && (s = !1, this.map[n][i].data.disable === !0 && (i = this.focusX, n = this.focusY))
        }
        this.focusItem(this.map[n][i]), this.focusX = i, this.focusY = n, a && (this.provider && (t = this.provider.get(e, function(e, t) {
            var i, n;
            if (e && self.events["data:error"]) return void self.emit("data:error", e);
            if (t) {
                for (self.data = self.translate(t), i = 0; i < self.sizeY - 1; i++)
                    for (n = 0; n < self.sizeX; n++) self.renderItem(self.map[i][n], self.data[i][n]);
                self.events["data:ready"] && self.emit("data:ready")
            }
        }), this.events["data:get"] && this.emit("data:get", {
            fresh: t
        })), this.events["overflow"] && this.emit("overflow", {
            direction: e,
            cycle: o
        }))
    }, n.prototype.focusItem = function(e) {
        var t = this.$focusItem;
        return !(!e || t === e || e.data.disable === !0) && (null !== t && (t.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: t
        })), this.focusX = e.x, this.focusY = e.y, this.$focusItem = e, e.classList.add("focus"), this.events["focus:item"] && this.emit("focus:item", {
            $prev: t,
            $curr: e
        }), !0)
    }, n.prototype.markItem = function(e, t) {
        t ? e.classList.add("mark") : e.classList.remove("mark"), e.data.mark = t
    }, e.exports = n
}, function(e, t, i) {
    function n(e) {
        return i(s(e))
    }

    function s(e) {
        return a[e] || function() {
            throw new Error("Cannot find module '" + e + "'.")
        }()
    }
    var a = {
        "./en": 66,
        "./en.js": 66,
        "./de": 67,
        "./de.js": 67,
        "./br": 68,
        "./br.js": 68,
        "./ru": 69,
        "./ru.js": 69,
        "./uk": 70,
        "./uk.js": 70
    };
    n.keys = function() {
        return Object.keys(a)
    }, n.resolve = s, e.exports = n, n.id = 65
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "ض",
            className: "symbol"
        }, {
            value: "ص",
            className: "symbol"
        }, {
            value: "ث",
            className: "symbol"
        }, {
            value: "ق",
            className: "symbol"
        }, {
            value: "ف",
            className: "symbol"
        }, {
            value: "غ",
            className: "symbol"
        }, {
            value: "ع",
            className: "symbol"
        }, {
            value: "ه",
            className: "symbol"
        }, {
            value: "خ",
            className: "symbol"
        }, {
            value: "ح",
            className: "symbol"
        }, {
            value: "ج",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete wide",
            colSpan: 2
        }, {
            value: "&nbsp;",
            className: "icon keyDelete"
        }],
        [{
            value: "د",
            className: "symbol"
        }, {
            value: "ش",
            className: "symbol"
        }, {
            value: "س",
            className: "symbol"
        }, {
            value: "ي",
            className: "symbol"
        }, {
            value: "ب",
            className: "symbol"
        }, {
            value: "ل",
            className: "symbol"
        }, {
            value: "ا",
            className: "symbol"
        }, {
            value: "ت",
            className: "symbol"
        }, {
            value: "ن",
            className: "symbol"
        }, {
            value: "ذ",
            className: "symbol"
        }, {
            value: "م",
            className: "symbol"
        }, {
            value: "ك",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums wide"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "ط",
            className: "symbol"
        }, {
            value: "ئ",
            className: "symbol"
        }, {
            value: "ء",
            className: "symbol"
        }, {
            value: "ؤ",
            className: "symbol"
        }, {
            value: "ر",
            className: "symbol"
        }, {
            value: "لا",
            className: "symbol"
        }, {
            value: "ى",
            className: "symbol"
        }, {
            value: "ة",
            className: "symbol"
        }, {
            value: "و",
            className: "symbol"
        }, {
            value: "ز",
            className: "symbol"
        }, {
            value: "ظ",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 3
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "q",
            className: "symbol"
        }, {
            value: "w",
            className: "symbol"
        }, {
            value: "e",
            className: "symbol"
        }, {
            value: "r",
            className: "symbol"
        }, {
            value: "t",
            className: "symbol"
        }, {
            value: "z",
            className: "symbol"
        }, {
            value: "u",
            className: "symbol"
        }, {
            value: "i",
            className: "symbol"
        }, {
            value: "o",
            className: "symbol"
        }, {
            value: "p",
            className: "symbol"
        }, {
            value: "ü",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "a",
            className: "symbol"
        }, {
            value: "s",
            className: "symbol"
        }, {
            value: "d",
            className: "symbol"
        }, {
            value: "f",
            className: "symbol"
        }, {
            value: "g",
            className: "symbol"
        }, {
            value: "h",
            className: "symbol"
        }, {
            value: "j",
            className: "symbol"
        }, {
            value: "k",
            className: "symbol"
        }, {
            value: "l",
            className: "symbol"
        }, {
            value: "ö",
            className: "symbol"
        }, {
            value: "ä",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "y",
            className: "symbol"
        }, {
            value: "x",
            className: "symbol"
        }, {
            value: "c",
            className: "symbol"
        }, {
            value: "v",
            className: "symbol"
        }, {
            value: "b",
            className: "symbol"
        }, {
            value: "n",
            className: "symbol"
        }, {
            value: "m",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "@",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 13
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "q",
            className: "symbol"
        }, {
            value: "w",
            className: "symbol"
        }, {
            value: "e",
            className: "symbol"
        }, {
            value: "r",
            className: "symbol"
        }, {
            value: "t",
            className: "symbol"
        }, {
            value: "y",
            className: "symbol"
        }, {
            value: "u",
            className: "symbol"
        }, {
            value: "i",
            className: "symbol"
        }, {
            value: "o",
            className: "symbol"
        }, {
            value: "p",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "a",
            className: "symbol"
        }, {
            value: "s",
            className: "symbol"
        }, {
            value: "d",
            className: "symbol"
        }, {
            value: "f",
            className: "symbol"
        }, {
            value: "g",
            className: "symbol"
        }, {
            value: "h",
            className: "symbol"
        }, {
            value: "j",
            className: "symbol"
        }, {
            value: "k",
            className: "symbol"
        }, {
            value: "l",
            className: "symbol"
        }, {
            value: "-",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "z",
            className: "symbol"
        }, {
            value: "x",
            className: "symbol"
        }, {
            value: "c",
            className: "symbol"
        }, {
            value: "v",
            className: "symbol"
        }, {
            value: "b",
            className: "symbol"
        }, {
            value: "n",
            className: "symbol"
        }, {
            value: "m",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 12
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "й",
            className: "symbol"
        }, {
            value: "ц",
            className: "symbol"
        }, {
            value: "у",
            className: "symbol"
        }, {
            value: "к",
            className: "symbol"
        }, {
            value: "е",
            className: "symbol"
        }, {
            value: "н",
            className: "symbol"
        }, {
            value: "г",
            className: "symbol"
        }, {
            value: "ш",
            className: "symbol"
        }, {
            value: "щ",
            className: "symbol"
        }, {
            value: "з",
            className: "symbol"
        }, {
            value: "х",
            className: "symbol"
        }, {
            value: "ъ",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "ф",
            className: "symbol"
        }, {
            value: "ы",
            className: "symbol"
        }, {
            value: "в",
            className: "symbol"
        }, {
            value: "а",
            className: "symbol"
        }, {
            value: "п",
            className: "symbol"
        }, {
            value: "р",
            className: "symbol"
        }, {
            value: "о",
            className: "symbol"
        }, {
            value: "л",
            className: "symbol"
        }, {
            value: "д",
            className: "symbol"
        }, {
            value: "ж",
            className: "symbol"
        }, {
            value: "э",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "Удалить",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "я",
            className: "symbol"
        }, {
            value: "ч",
            className: "symbol"
        }, {
            value: "с",
            className: "symbol"
        }, {
            value: "м",
            className: "symbol"
        }, {
            value: "и",
            className: "symbol"
        }, {
            value: "т",
            className: "symbol"
        }, {
            value: "ь",
            className: "symbol"
        }, {
            value: "б",
            className: "symbol"
        }, {
            value: "ю",
            className: "symbol"
        }, {
            value: "ё",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 14
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "й",
            className: "symbol"
        }, {
            value: "ц",
            className: "symbol"
        }, {
            value: "у",
            className: "symbol"
        }, {
            value: "к",
            className: "symbol"
        }, {
            value: "е",
            className: "symbol"
        }, {
            value: "н",
            className: "symbol"
        }, {
            value: "г",
            className: "symbol"
        }, {
            value: "ш",
            className: "symbol"
        }, {
            value: "щ",
            className: "symbol"
        }, {
            value: "з",
            className: "symbol"
        }, {
            value: "х",
            className: "symbol"
        }, {
            value: "ї",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "ф",
            className: "symbol"
        }, {
            value: "і",
            className: "symbol"
        }, {
            value: "в",
            className: "symbol"
        }, {
            value: "а",
            className: "symbol"
        }, {
            value: "п",
            className: "symbol"
        }, {
            value: "р",
            className: "symbol"
        }, {
            value: "о",
            className: "symbol"
        }, {
            value: "л",
            className: "symbol"
        }, {
            value: "д",
            className: "symbol"
        }, {
            value: "ж",
            className: "symbol"
        }, {
            value: "є",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "Удалить",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "ґ",
            className: "symbol"
        }, {
            value: "я",
            className: "symbol"
        }, {
            value: "ч",
            className: "symbol"
        }, {
            value: "с",
            className: "symbol"
        }, {
            value: "м",
            className: "symbol"
        }, {
            value: "и",
            className: "symbol"
        }, {
            value: "т",
            className: "symbol"
        }, {
            value: "ь",
            className: "symbol"
        }, {
            value: "б",
            className: "symbol"
        }, {
            value: "ю",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 14
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t = {};
        return e.split("&").forEach(function(e) {
            e = e.split("="), 2 === e.length && (t[e[0]] = decodeURIComponent(e[1]))
        }), t
    }
}]);
//# sourceMappingURL=release.map