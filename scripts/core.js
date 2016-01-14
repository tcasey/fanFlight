function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function formatMoney(moneyVal) {
    if (void 0 === moneyVal || null === moneyVal)
        return "$";
    for (var cleanedString = "" + moneyVal.toFixed(2), change = cleanedString.slice(cleanedString.indexOf(".")), withoutChange = cleanedString.slice(0, cleanedString.indexOf(".")), newWithoutChange = "", i = withoutChange.length - 1, j = 0; i >= 0; i--, j++)
        newWithoutChange = j%3 === 0 && 0 !== j ? withoutChange[i] + "," + newWithoutChange : withoutChange[i] + newWithoutChange;
    return "$" + newWithoutChange + change
}
function removeByVal(arr, val) {
    var ix = arr.indexOf(val);
    return ix >= 0 && arr.splice(ix, 1), arr
}
function checkForExistsByDottedPath(obj, dottedPath) {
    if (dottedPath.indexOf(".") < 0)
        return obj.hasOwnProperty(dottedPath);
    var pathComponents = dottedPath.split(".");
    return checkForExistsByDottedPath(obj[pathComponents[0]], pathComponents.splice(1).join("."))
}
function getValByDottedPath(obj, dottedPath) {
    if (dottedPath.indexOf(".") < 0)
        return obj[dottedPath];
    var pathComponents = dottedPath.split(".");
    return getValByDottedPath(obj[pathComponents[0]], pathComponents.splice(1).join("."))
}
function getInnerObjSetterByDottedPath(obj, targetAccessor) {
    return void 0 === targetAccessor ? function() {} : targetAccessor.indexOf(".") < 0 ? function(val) {
        obj[targetAccessor] = val
    } : getInnerObjSetterByDottedPath(obj[targetAccessor.split(".")[0]], targetAccessor.split(".").splice(1).join("."))
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}
function isMobile() {
    return window.isMobileSession
}
function isMobileBTest() {
    return window.isMobileSession && window.isBTest
}
function wasNumericEvt(evt) {
    return evt.keyCode >= 48 && evt.keyCode <= 57
}
function wasEnterEvt(evt) {
    return 13 === evt.keyCode
}
function addParamToUrl(url, param) {
    var paramsStart = url.indexOf("?");
    if (0 > paramsStart)
        url += "?" + $.param(param);
    else {
        var existingParams = url.substring(paramsStart + 1, url.length);
        url += (existingParams ? "&" : "") + $.param(param)
    }
    return url
}
function urlContainsParam(url, param) {
    var contains = url.indexOf("&" + param);
    return 0 > contains && (contains = url.indexOf("?" + param)), contains >= 0
}
function throttler(fn, throttle) {
    throttle = throttle || 100;
    var shouldPerform=!0;
    return setInterval(function() {
        shouldPerform=!0
    }, throttle), function() {
        shouldPerform && (fn.apply(this, arguments), shouldPerform=!1)
    }
}
if (!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a)?!1 : 1 === a.nodeType && b?!0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    function D(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a
    }
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c]=!0
        }), b
    }
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + Math.random()
    }
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c?!0 : "false" === c?!1 : "null" === c ? null : + c + "" === c?+c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function Z() {
        return !0
    }
    function $() {
        return !1
    }
    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
                    }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*"): a.querySelectorAll ? a.querySelectorAll(b || "*"): [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display: n.css(e[0], "display");
        return e.detach(), f
    }
    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function Fb(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; e--;)
            if (b = Eb[e] + c, b in a)
                return b;
        return d
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }
    function Ib(a, b, c) {
        var d=!0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }
    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = n.now()
    }
    function Tb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e ||!q || void 0 === q[d])
                        continue;
                        p=!0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden=!p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length: 0;
                if (e)
                    return this;
                for (e=!0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing);
        g > f;
        f++)if (d = Qb[f].call(j, a, k, j.opts))
            return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function rc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                for (; d = f[e++];)
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function sc(a, b, c, d) {
        function g(h) {
            var i;
            return e[h]=!0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f?!(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        var e = {}, f = a === oc;
        return g(b.dataTypes[0]) ||!e["*"] && g("*")
    }
    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }
    function uc(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g===!0 ? g = j[e] : j[e]!==!0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                            if (g!==!0)
                                if (g && a["throws"])
                                    b = g(b);
                                else
                                    try {
                                        b = g(b)
                                    } catch (l) {
                                        return {
                                            state: "parsererror",
                                            error: g ? l: "No conversion from " + i + " to " + f
                                        }
                                    }
                                }
        return {
            state: "success",
            data: b
        }
    }
    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Bc(a + "[" + e + "]", b[e], c, d)
            }
    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function(a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length, c =+ a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j=!1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e=!1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a)?!1 : a.constructor&&!j.call(a.constructor.prototype, "isPrototypeOf")?!1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g)
                    for (; f > e && (d = b.apply(a[e], c), d!==!1); e++);
                else
                    for (e in a)
                        if (d = b.apply(a[e], c), d===!1)
                            break
            } else if (g)
                for (; f > e && (d = b.call(a[e], e, a[e]), d!==!1); e++);
            else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d===!1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b?-1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c =+ b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h=!c; g > f; f++)
                d=!b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    var t = function(a) {
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p&&!e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h ||!h.parentNode)
                                return d;
                                if (h.id === j)
                                    return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h), d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)), d;
                            if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                                return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q ||!q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; l--;)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            var a = [];
            return b
        }
        function hb(a) {
            return a[u]=!0, a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function jb(a, b) {
            for (var c = a.split("|"), e = a.length; e--;)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b)
                        return - 1;
            return a ? 1 : - 1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b =+ b, hb(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)
                        c[e = f[g]] && (c[e]=!(d[e] = c[e]))
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        function pb() {}
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g))
                                    return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h])
                && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d&&!d[u] && (d = vb(d)), e&&!e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q=!a ||!f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = ub(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k])
                        && (r[n[k]]=!(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k])
                                && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k])
                            && (j = e ? K.call(f, l) : m[k])>-1 && (f[j]=!(g[j] = l))
                        }
                } else
                    r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a)>-1
            }, h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e=++i; f > e&&!d.relative[a[e].type]; e++);
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*": ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1: Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        for (m = 0; o = a[m++];)
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l=!o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    for (m = 0; o = b[m++];)
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            for (; q--;)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k&&!f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" +- new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l=!0), 0
        }, C = "undefined", D = 1<<31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return - 1
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d>>10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a: v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p=!f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName ||!e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];)
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a, d = b && b.parentNode;
                return a === d ||!(!d || 1 !== d.nodeType ||!(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a)
                            return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b)
                    return l=!0, 0;
                var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d ||!c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a)?-1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d?-1 : 1)
            } : function(a, b) {
                if (a === b)
                    return l=!0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f ||!g)
                    return a === e?-1 : b === e ? 1 : f?-1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                for (c = a; c = c.parentNode;)
                    h.unshift(c);
                for (c = b; c = c.parentNode;)
                    i.unshift(c);
                for (; h[d] === i[d];)
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v?-1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector ||!p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p): void 0;
            return void 0 !== f ? f : c.attributes ||!p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l=!c.detectDuplicates, k=!c.sortStable && a.slice(0), a.sort(B), l) {
                for (; b = a[f++];)
                    b === a[f] && (e = d.push(f));
                for (; e--;)
                    a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                    } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                for (; b = a[d++];)
                    c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] =+ (a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] =+ (a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c=!a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c)>-1 : "$=" === b ? c && e.slice( - c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c)>-1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice( - 4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s=!i&&!h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a&&!o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; l=++n && l && l[p] || (m = n = 0)
                                    || o.pop();
                                )if (1 === l.nodeType&&++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                for (; (l=++n && l && l[p] || (m = n = 0) || o.pop())
                                    && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType)||!++m || (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l !== b));
                            );
                            return m -= e, m === d || m%d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;)
                            d = K.call(a, f[g]), a[d]=!(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h])
                            && (a[h]=!(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a)>-1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus())&&!!(a.type || a.href||~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled===!1
                },
                disabled: function(a) {
                    return a.disabled===!0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b&&!!a.checked || "option" === b&&!!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected===!0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = lb(b);
        for (b in{
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = mb(b);
        return pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c=!1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g]&&!(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        }, h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--;)
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o=!f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                for (i = X.needsContext.test(a) ? 0 : j.length; i--&&(k = j[i], !d.relative[l = k.type]);)
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)
                            return I.apply(e, f), e;
                            break
                    }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates=!!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b]===!0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                        }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c ||!c[1] && b)
                return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                    for (c in b)
                        n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                        d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c)>-1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i=!a.once && [], j = function(l) {
            for (b = a.memory && l, c=!0, g = e || 0, e = 0, f = h.length, d=!0; h && f > g; g++)
                if (h[g].apply(l[0], l[1])===!1 && a.stopOnFalse) {
                    b=!1;
                    break
                }
            d=!1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    for (var c; (c = n.inArray(b, h, c))>-1;)
                        h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            },
            has: function(a) {
                return a ? n.inArray(a, h)>-1 : !(!h ||!h.length)
            },
            empty: function() {
                return h = [], f = 0, this
            },
            disable: function() {
                return h = i = b = void 0, this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0, b || k.disable(), this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, b) {
                return !h || c&&!i || (b = b || [], b = [a, b.slice ? b.slice(): b], d ? i.push(b) : j(b)), this
            },
            fire: function() {
                return k.fireWith(this, arguments), this
            },
            fired: function() {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1^a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e: 0, g = 1 === f ? a: n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            };
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a===!0?--n.readyWait : n.isReady) || (n.isReady=!0, a!==!0&&--n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    }), n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e=!0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e=!0, n.isFunction(d) || (g=!0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c)
        })), b))for (; i > h; h++)
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType||!+a.nodeType
    }, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                for (; c--;)
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType&&!L.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;)
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)
                        return c;
                    if (c = M.get(f, d), void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0), void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = M.get(this, d);
                        M.set(this, d, b), - 1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)
                c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") ||!n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin"in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length; j--;)
                    h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g)!==!1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o]=!0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(E) || [""], j = b.length; j--;)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;)
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h&&!h.test(k.namespace) || d && d !== k.selector && ("**" !== d ||!k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g&&!m.length && (l.teardown && l.teardown.call(a, p, r.handle)!==!1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type: b, r = j.call(b, "namespace") ? b.namespace.split("."): [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType&&!X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e ||!o.trigger || o.trigger.apply(d, c)!==!1)
                ) {
                if (!e&&!o.noBubble&&!n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = p[f++])&&!b.isPropagationStopped();)
                    b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result===!1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c)!==!1 ||!n.acceptData(d) || k && n.isFunction(d[q])&&!n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a)!==!1) {
                for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++])&&!a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, c = 0; (g = f.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)
                        ) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e)===!1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled!==!0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--;)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue===!1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando]=!0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d&&!n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d===!1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b===!1 || "function" == typeof b) && (c = b, b = void 0), c===!1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td, n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
                    pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
                        nb(f[d], g[d]);
                else
                    nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0]; j--;)
                            f = f.lastChild;
                            n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d||-1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c))
                    for (j = 0; e = f[j++];)
                        fb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a?!1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a&&!db.test(a)&&!ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p&&!k.checkClone && eb.test(p))
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
                    h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)
                        h = f[j], fb.test(h.type || "")&&!L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {}, ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };
    !function() {
        function g() {
            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
            var g = a.getComputedStyle(f, null);
            b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
        }
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        f.style && (f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f), a.getComputedStyle && n.extend(k, {
            pixelPosition: function() {
                return g(), b
            },
            boxSizingReliable: function() {
                return null == c && g(), c
            },
            reliableMarginRight: function() {
                var b, c = f.appendChild(l.createElement("div"));
                return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b=!parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
            }
        }))
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Eb = ["Webkit", "O", "Moz", "ms"];
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get"in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c===!0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    }), n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f&&+d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g =+ d || 1;
                do
                    h = h || ".5", g/=h, n.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h&&--i)
                }
            return e && (g = c.start =+ g||+d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : + e[2]), c
        }
        ]
    };
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]): a = a.split(" ");
            for (var c,
            d = 0,
            e = a.length;
            e > d;
            d++)c = a[d],
            Rb[c] = Rb[c] || [],
            Rb[c].unshift(b)
        }, prefilter : function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a): {
            complete: c ||!c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b&&!n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue===!0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue===!1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a!==!1 && this.queue(a || "fx", []), this.each(function() {
                var b=!0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b=!1, f.splice(e, 1));
                (b ||!c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a!==!1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length: 0;
                for (c.finish=!0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled=!0, k.optDisabled=!c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }(); var Yb, Zb, $b = n.expr.attrHandle; n.fn.extend({
        attr : function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];)
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d]=!1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b===!1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g ||!n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : - 1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        for (f = 0; e = b[f++];)
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;)
                                d = d.replace(" " + e + " ", " ");
                                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++];)
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else (c === U || "boolean" === c)
                    && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a===!1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)) : void 0
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f)
                                return b;
                                g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;)
                        d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c=!0);
                    return c || (a.selectedIndex =- 1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = l.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [], n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function(a, b) {
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j=!s)) : (s = x, (a ||!x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r: s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l): n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f)
                            for (f = {}; b = ic.exec(e);)
                                f[b[1].toLowerCase()] = b[2];
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain=!(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)
                return v;
            i = k.global, i && 0 === n.active++&&n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent=!kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache===!1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType!==!1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k)===!1 || 2 === t))
                return v.abort();
            u = "abort";
            for (j in{
                success: 1,
                error: 1,
                complete: 1
            })
                v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x( - 1, w)
                }
            } else
                x( - 1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;)
                    a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery&&!n.isPlainObject(a)
            )n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a)
                Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name&&!n(this).is(":disabled") && Ac.test(this.nodeName)&&!zc.test(a) && (this.checked ||!T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(yc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cc = 0, Dc = {}, Ec = {
        0: 200,
        1223: 204
    }, Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Dc)
            Dc[a]()
    }), k.cors=!!Fc && "withCredentials"in Fc, k.ajax = Fc=!!Fc, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Fc&&!a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g=++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache=!1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || n.expando + "_" + cc++;
            return this[a]=!0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp!==!1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data&&!(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp!==!1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b=!1), b = b || l;
        var d = v.exec(a), e=!c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Ic = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto")>-1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jc; a&&!n.nodeName(a, "html") && "static" === n.css(a, "position");)
                    a = a.offsetParent;
                return a || Jc
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d===!0 || e===!0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Lc = a.jQuery, Mc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
}), function() {
    var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, v = e.reduce, h = e.reduceRight, g = e.filter, d = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, _ = Object.keys, j = i.bind, w = function(n) {
        return n instanceof w ? n : this instanceof w ? void(this._wrapped = n) : new w(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.3";
    var A = w.each = w.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s)
                n.forEach(t, e);
            else if (n.length ===+ n.length) {
                for (var u = 0, i = n.length; i > u; u++)
                    if (t.call(e, n[u], u, n) === r)
                        return
            } else
                for (var a in n)
                    if (w.has(n, a) && t.call(e, n[a], a, n) === r)
                        return
    };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduce === v)
            return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u=!0)
        }), !u)
            throw new TypeError(O);
        return r
    }, w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduceRight === h)
            return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i!==+i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u=!0)
        }), !u)
            throw new TypeError(O);
        return r
    }, w.find = w.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, w.reject = function(n, t, r) {
        return w.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u=!0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var E = w.some = w.any = function(n, t, e) {
        t || (t = w.identity);
        var u=!1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    w.contains = w.include = function(n, t) {
        return null == n?!1 : y && n.indexOf === y?-1 != n.indexOf(t) : E(n, function(n) {
            return n === t
        })
    }, w.invoke = function(n, t) {
        var r = o.call(arguments, 2);
        return w.map(n, function(n) {
            return (w.isFunction(t) ? t : n[t]).apply(n, r)
        })
    }, w.pluck = function(n, t) {
        return w.map(n, function(n) {
            return n[t]
        })
    }, w.where = function(n, t) {
        return w.isEmpty(t) ? [] : w.filter(n, function(n) {
            for (var r in t)
                if (t[r] !== n[r])
                    return !1;
            return !0
        })
    }, w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] ===+ n[0] && 65535 > n.length)
            return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n))
            return - 1 / 0;
        var e = {
            computed: - 1 / 0,
            value: - 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i): n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] ===+ n[0] && 65535 > n.length)
            return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n))
            return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i): n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.shuffle = function(n) {
        var t, r = 0, e = [];
        return A(n, function(n) {
            t = w.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var F = function(n) {
        return w.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    w.sortBy = function(n, t, r) {
        var e = F(t);
        return w.pluck(w.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r)
                    return 1;
                if (e > r || void 0 === e)
                    return - 1
            }
            return n.index < t.index?-1 : 1
        }), "value")
    };
    var k = function(n, t, r, e) {
        var u = {}, i = F(t || w.identity);
        return A(n, function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }), u
    };
    w.groupBy = function(n, t, r) {
        return k(n, t, r, function(n, t, r) {
            (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, w.countBy = function(n, t, r) {
        return k(n, t, r, function(n, t) {
            w.has(n, t) || (n[t] = 0), n[t]++
        })
    }, w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity : F(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a>>>1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    }, w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length ===+ n.length ? w.map(n, w.identity) : w.values(n) : []
    }, w.size = function(n) {
        return null == n ? 0 : n.length ===+ n.length ? n.length : w.keys(n).length
    }, w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
        return A(n, function(n) {
            w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }), r
    };
    w.flatten = function(n, t) {
        return R(n, t, [])
    }, w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    }, w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t=!1);
        var u = r ? w.map(n, r, e): n, i = [], a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, w.union = function() {
        return w.uniq(c.apply(e, arguments))
    }, w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n), function(n) {
            return w.every(t, function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    }, w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n, function(n) {
            return !w.contains(t, n)
        })
    }, w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++)
            r[e] = w.pluck(n, "" + e);
        return r
    }, w.object = function(n, t) {
        if (null == n)
            return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, w.indexOf = function(n, t, r) {
        if (null == n)
            return - 1;
        var e = 0, u = n.length;
        if (r) {
            if ("number" != typeof r)
                return e = w.sortedIndex(n, t), n[e] === t ? e : - 1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y)
            return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t)
                return e;
        return - 1
    }, w.lastIndexOf = function(n, t, r) {
        if (null == n)
            return - 1;
        var e = null != r;
        if (b && n.lastIndexOf === b)
            return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t)
                return u;
        return - 1
    }, w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;)
            i[u++] = n, n += r;
        return i
    };
    var I = function() {};
    w.bind = function(n, t) {
        var r, e;
        if (n.bind === j && j)
            return j.apply(n, o.call(arguments, 1));
        if (!w.isFunction(n))
            throw new TypeError;
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e))
                return n.apply(t, r.concat(o.call(arguments)));
            I.prototype = n.prototype;
            var u = new I;
            I.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 == t.length && (t = w.functions(n)), A(t, function(t) {
            n[t] = w.bind(n[t], n)
        }), n
    }, w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity), function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    }, w.throttle = function(n, t) {
        var r, e, u, i, a = 0, o = function() {
            a = new Date, u = null, i = n.apply(r, e)
        };
        return function() {
            var c = new Date, l = t - (c - a);
            return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
        }
    }, w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this, a = arguments, o = function() {
                e = null, r || (u = n.apply(i, a))
            }, c = r&&!e;
            return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
        }
    }, w.once = function(n) {
        var t, r=!1;
        return function() {
            return r ? t : (r=!0, t = n.apply(this, arguments), n = null, t)
        }
    }, w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--)
                t = [n[r].apply(this, t)];
            return t[0]
        }
    }, w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1>--n ? t.apply(this, arguments) : void 0
        }
    }, w.keys = _ || function(n) {
        if (n !== Object(n))
            throw new TypeError("Invalid object");
        var t = [];
        for (var r in n)
            w.has(n, r) && (t[t.length] = r);
        return t
    }, w.values = function(n) {
        var t = [];
        for (var r in n)
            w.has(n, r) && t.push(n[r]);
        return t
    }, w.pairs = function(n) {
        var t = [];
        for (var r in n)
            w.has(n, r) && t.push([r, n[r]]);
        return t
    }, w.invert = function(n) {
        var t = {};
        for (var r in n)
            w.has(n, r) && (t[n[r]] = r);
        return t
    }, w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n)
            w.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, w.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    n[r] = t[r]
        }), n
    }, w.pick = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, w.omit = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n)
            w.contains(r, u) || (t[u] = n[u]);
        return t
    }, w.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    null == n[r] && (n[r] = t[r])
        }), n
    }, w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
    }, w.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t))
            return !1;
        switch (u) {
        case"[object String]":
            return n == t + "";
        case"[object Number]":
            return n!=+n ? t!=+t : 0 == n ? 1 / n == 1 / t : n ==+ t;
        case"[object Date]":
        case"[object Boolean]":
            return + n ==+ t;
        case"[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t)
            return !1;
        for (var i = r.length; i--;)
            if (r[i] == n)
                return e[i] == t;
        r.push(n), e.push(t);
        var a = 0, o=!0;
        if ("[object Array]" == u) {
            if (a = n.length, o = a == t.length)
                for (; a--&&(o = S(n[a], t[a], r, e)););
        } else {
            var c = n.constructor, f = t.constructor;
            if (c !== f&&!(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f))
                return !1;
            for (var s in n)
                if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e))))
                    break;
            if (o) {
                for (s in t)
                    if (w.has(t, s)&&!a--)
                        break;
                o=!a
            }
        }
        return r.pop(), e.pop(), o
    };
    w.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, w.isEmpty = function(n) {
        if (null == n)
            return !0;
        if (w.isArray(n) || w.isString(n))
            return 0 === n.length;
        for (var t in n)
            if (w.has(n, t))
                return !1;
        return !0
    }, w.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, w.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, w.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), w.isArguments(arguments) || (w.isArguments = function(n) {
        return !(!n ||!w.has(n, "callee"))
    }), w.isFunction = function(n) {
        return "function" == typeof n
    }, w.isFinite = function(n) {
        return isFinite(n)&&!isNaN(parseFloat(n))
    }, w.isNaN = function(n) {
        return w.isNumber(n) && n!=+n
    }, w.isBoolean = function(n) {
        return n===!0 || n===!1 || "[object Boolean]" == l.call(n)
    }, w.isNull = function(n) {
        return null === n
    }, w.isUndefined = function(n) {
        return void 0 === n
    }, w.has = function(n, t) {
        return f.call(n, t)
    }, w.noConflict = function() {
        return n._ = t, this
    }, w.identity = function(n) {
        return n
    }, w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++)
            e[u] = t.call(r, u);
        return e
    }, w.random = function(n, t) {
        return null == t && (t = n, n = 0), n + (0 | Math.random() * (t - n + 1))
    };
    var T = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    T.unescape = w.invert(T.escape);
    var M = {
        escape: RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"], function(n) {
        w[n] = function(t) {
            return null == t ? "" : ("" + t).replace(M[n], function(t) {
                return T[n][t]
            })
        }
    }), w.result = function(n, t) {
        if (null == n)
            return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    }, w.mixin = function(n) {
        A(w.functions(n), function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = "" + ++N;
        return n ? n + t : t
    }, w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/, B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        r = w.defaults({}, r, w.templateSettings);
        var e = RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), u = 0, i = "__p+='";
        n.replace(e, function(t, r, e, a, o) {
            return i += n.slice(u, o).replace(D, function(n) {
                return "\\" + B[n]
            }), r && (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), a && (i += "';\n" + a + "\n__p+='"), u = o + t.length, t
        }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = Function(r.variable || "obj", "_", i)
        } catch (o) {
            throw o.source = i, o
        }
        if (t)
            return a(t, w);
        var c = function(n) {
            return a.call(this, n, w)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + i + "}", c
    }, w.chain = function(n) {
        return w(n).chain()
    };
    var z = function(n) {
        return this._chain ? w(n).chain() : n
    };
    w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), w.extend(w.prototype, {
        chain: function() {
            return this._chain=!0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this), function() {
    {
        var a, t = this, e = t.Backbone, i = [], s = (i.push, i.slice);
        i.splice
    }
    a = "undefined" != typeof exports ? exports : t.Backbone = {}, a.VERSION = "1.1.0";
    var h = t._;
    h || "undefined" == typeof require || (h = require("underscore")), a.$ = t.jQuery || t.Zepto || t.ender || t.$, a.noConflict = function() {
        return t.Backbone = e, this
    }, a.emulateHTTP=!1, a.emulateJSON=!1;
    var o = a.Events = {
        on: function(t, e, i) {
            if (!l(this, "on", t, [e, i]) ||!e)
                return this;
            this._events || (this._events = {});
            var r = this._events[t] || (this._events[t] = []);
            return r.push({
                callback: e,
                context: i,
                ctx: i || this
            }), this
        },
        once: function(t, e, i) {
            if (!l(this, "once", t, [e, i]) ||!e)
                return this;
            var r = this, s = h.once(function() {
                r.off(t, s), e.apply(this, arguments)
            });
            return s._callback = e, this.on(t, s, i)
        },
        off: function(t, e, i) {
            var r, s, n, a, o, u, c, f;
            if (!this._events ||!l(this, "off", t, [e, i]))
                return this;
            if (!t&&!e&&!i)
                return this._events = {}, this;
            for (a = t ? [t] : h.keys(this._events), o = 0, u = a.length; u > o; o++)
                if (t = a[o], n = this._events[t]) {
                    if (this._events[t] = r = [], e || i)
                        for (c = 0, f = n.length; f > c; c++)
                            s = n[c], (e && e !== s.callback && e !== s.callback._callback || i && i !== s.context) && r.push(s);
                            r.length || delete this._events[t]
                }
            return this
        },
        trigger: function(t) {
            if (!this._events)
                return this;
            var e = s.call(arguments, 1);
            if (!l(this, "trigger", t, e))
                return this;
            var i = this._events[t], r = this._events.all;
            return i && c(i, e), r && c(r, arguments), this
        },
        stopListening: function(t, e, i) {
            var r = this._listeningTo;
            if (!r)
                return this;
            var s=!e&&!i;
            i || "object" != typeof e || (i = this), t && ((r = {})[t._listenId] = t);
            for (var n in r)
                t = r[n], t.off(e, i, this), (s || h.isEmpty(t._events)) && delete this._listeningTo[n];
            return this
        }
    }, u = /\s+/, l = function(t, e, i, r) {
        if (!i)
            return !0;
        if ("object" == typeof i) {
            for (var s in i)
                t[e].apply(t, [s, i[s]].concat(r));
            return !1
        }
        if (u.test(i)) {
            for (var n = i.split(u), a = 0, h = n.length; h > a; a++)
                t[e].apply(t, [n[a]].concat(r));
            return !1
        }
        return !0
    }, c = function(t, e) {
        var i, r =- 1, s = t.length, n = e[0], a = e[1], h = e[2];
        switch (e.length) {
        case 0:
            for (; ++r < s;)(i = t[r])
                .callback.call(i.ctx);
            return;
        case 1:
            for (; ++r < s;)(i = t[r])
                .callback.call(i.ctx, n);
            return;
        case 2:
            for (; ++r < s;)(i = t[r])
                .callback.call(i.ctx, n, a);
            return;
        case 3:
            for (; ++r < s;)(i = t[r])
                .callback.call(i.ctx, n, a, h);
            return;
        default:
            for (; ++r < s;)(i = t[r])
                .callback.apply(i.ctx, e)
        }
    }, f = {
        listenTo: "on",
        listenToOnce: "once"
    };
    h.each(f, function(t, e) {
        o[e] = function(e, i, r) {
            var s = this._listeningTo || (this._listeningTo = {}), n = e._listenId || (e._listenId = h.uniqueId("l"));
            return s[n] = e, r || "object" != typeof i || (r = this), e[t](i, r, this), this
        }
    }), o.bind = o.on, o.unbind = o.off, h.extend(a, o);
    var d = a.Model = function(t, e) {
        var i = t || {};
        e || (e = {}), this.cid = h.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {}), i = h.defaults({}, i, h.result(this, "defaults")), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
    };
    h.extend(d.prototype, o, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return h.clone(this.attributes)
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        get: function(t) {
            return this.attributes[t]
        },
        escape: function(t) {
            return h.escape(this.get(t))
        },
        has: function(t) {
            return null != this.get(t)
        },
        set: function(t, e, i) {
            var r, s, n, a, o, u, l, c;
            if (null == t)
                return this;
            if ("object" == typeof t ? (s = t, i = e) : (s = {})[t] = e, i || (i = {}), !this._validate(s, i))
                return !1;
            n = i.unset, o = i.silent, a = [], u = this._changing, this._changing=!0, u || (this._previousAttributes = h.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
            for (r in s)
                e = s[r], h.isEqual(c[r], e) || a.push(r), h.isEqual(l[r], e) ? delete this.changed[r] : this.changed[r] = e, n ? delete c[r] : c[r] = e;
            if (!o) {
                a.length && (this._pending=!0);
                for (var f = 0, d = a.length; d > f; f++)
                    this.trigger("change:" + a[f], this, c[a[f]], i)
            }
            if (u)
                return this;
            if (!o)
                for (; this._pending;)
                    this._pending=!1, this.trigger("change", this, i);
            return this._pending=!1, this._changing=!1, this
        },
        unset: function(t, e) {
            return this.set(t, void 0, h.extend({}, e, {
                unset : !0
            }))
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes)
                e[i] = void 0;
            return this.set(e, h.extend({}, t, {
                unset: !0
            }))
        },
        hasChanged: function(t) {
            return null == t?!h.isEmpty(this.changed) : h.has(this.changed, t)
        },
        changedAttributes: function(t) {
            if (!t)
                return this.hasChanged() ? h.clone(this.changed) : !1;
            var e, i=!1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var s in t)
                h.isEqual(r[s], e = t[s]) || ((i || (i = {}))[s] = e);
            return i
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function() {
            return h.clone(this._previousAttributes)
        },
        fetch: function(t) {
            t = t ? h.clone(t) : {}, void 0 === t.parse && (t.parse=!0);
            var e = this, i = t.success;
            return t.success = function(r) {
                return e.set(e.parse(r, t), t) ? (i && i(e, r, t), void e.trigger("sync", e, r, t)) : !1
            }, M(this, t), this.sync("read", this, t)
        },
        save: function(t, e, i) {
            var r, s, n, a = this.attributes;
            if (null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = h.extend({
                validate: !0
            }, i), r&&!i.wait) {
                if (!this.set(r, i))
                    return !1
            } else if (!this._validate(r, i))
                return !1;
            r && i.wait && (this.attributes = h.extend({}, a, r)), void 0 === i.parse && (i.parse=!0);
            var o = this, u = i.success;
            return i.success = function(t) {
                o.attributes = a;
                var e = o.parse(t, i);
                return i.wait && (e = h.extend(r || {}, e)), h.isObject(e)&&!o.set(e, i)?!1 : (u && u(o, t, i), void o.trigger("sync", o, t, i))
            }, M(this, i), s = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === s && (i.attrs = r), n = this.sync(s, this, i), r && i.wait && (this.attributes = a), n
        },
        destroy: function(t) {
            t = t ? h.clone(t) : {};
            var e = this, i = t.success, r = function() {
                e.trigger("destroy", e, e.collection, t)
            };
            if (t.success = function(s) {
                (t.wait || e.isNew()) && r(), i && i(e, s, t), e.isNew() || e.trigger("sync", e, s, t)
            }, this.isNew())
                return t.success(), !1;
            M(this, t);
            var s = this.sync("delete", this, t);
            return t.wait || r(), s
        },
        url: function() {
            var t = h.result(this, "urlRoot") || h.result(this.collection, "url") || U();
            return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(t) {
            return t
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        isValid: function(t) {
            return this._validate({}, h.extend(t || {}, {
                validate: !0
            }))
        },
        _validate: function(t, e) {
            if (!e.validate ||!this.validate)
                return !0;
            t = h.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return i ? (this.trigger("invalid", this, i, h.extend(e, {
                validationError: i
            })), !1) : !0
        }
    });
    var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    h.each(p, function(t) {
        d.prototype[t] = function() {
            var e = s.call(arguments);
            return e.unshift(this.attributes), h[t].apply(h, e)
        }
    });
    var v = a.Collection = function(t, e) {
        e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, h.extend({
            silent: !0
        }, e))
    }, g = {
        add: !0,
        remove: !0,
        merge: !0
    }, m = {
        add: !0,
        remove: !1
    };
    h.extend(v.prototype, o, {
        model: d,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        add: function(t, e) {
            return this.set(t, h.extend({
                merge: !1
            }, e, m))
        },
        remove: function(t, e) {
            var i=!h.isArray(t);
            t = i ? [t] : h.clone(t), e || (e = {});
            var r, s, n, a;
            for (r = 0, s = t.length; s > r; r++)
                a = t[r] = this.get(t[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], n = this.indexOf(a), this.models.splice(n, 1), this.length--, e.silent || (e.index = n, a.trigger("remove", a, this, e)), this._removeReference(a));
            return i ? t[0] : t
        },
        set: function(t, e) {
            e = h.defaults({}, e, g), e.parse && (t = this.parse(t, e));
            var i=!h.isArray(t);
            t = i ? t ? [t] : [] : h.clone(t);
            var r, s, n, a, o, u, l, c = e.at, f = this.model, p = this.comparator && null == c && e.sort!==!1, v = h.isString(this.comparator) ? this.comparator: null, m = [], y = [], _ = {}, w = e.add, b = e.merge, x = e.remove, E=!p && w && x ? [] : !1;
            for (r = 0, s = t.length; s > r; r++) {
                if (o = t[r], n = o instanceof d ? a = o : o[f.prototype.idAttribute], u = this.get(n))
                    x && (_[u.cid]=!0), b && (o = o === a ? a.attributes : o, e.parse && (o = u.parse(o, e)), u.set(o, e), p&&!l && u.hasChanged(v) && (l=!0)), t[r] = u;
                else if (w) {
                    if (a = t[r] = this._prepareModel(o, e), !a)
                        continue;
                    m.push(a), a.on("all", this._onModelEvent, this), this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a)
                }
                E && E.push(u || a)
            }
            if (x) {
                for (r = 0, s = this.length; s > r; ++r)
                    _[(a = this.models[r]).cid] || y.push(a);
                y.length && this.remove(y, e)
            }
            if (m.length || E && E.length)
                if (p && (l=!0), this.length += m.length, null != c)
                    for (r = 0, s = m.length; s > r; r++)
                        this.models.splice(c + r, 0, m[r]);
                else {
                    E && (this.models.length = 0);
                    var T = E || m;
                    for (r = 0, s = T.length; s > r; r++)
                        this.models.push(T[r])
                }
            if (l && this.sort({
                silent: !0
            }), !e.silent) {
                for (r = 0, s = m.length; s > r; r++)(a = m[r])
                    .trigger("add", a, this, e);
                (l || E && E.length) && this.trigger("sort", this, e)
            }
            return i ? t[0] : t
        },
        reset: function(t, e) {
            e || (e = {});
            for (var i = 0, r = this.models.length; r > i; i++)
                this._removeReference(this.models[i]);
            return e.previousModels = this.models, this._reset(), t = this.add(t, h.extend({
                silent: !0
            }, e)), e.silent || this.trigger("reset", this, e), t
        },
        push: function(t, e) {
            return this.add(t, h.extend({
                at: this.length
            }, e))
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t), e
        },
        unshift: function(t, e) {
            return this.add(t, h.extend({
                at: 0
            }, e))
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t), e
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(t) {
            return null == t ? void 0 : this._byId[t.id] || this._byId[t.cid] || this._byId[t]
        },
        at: function(t) {
            return this.models[t]
        },
        where: function(t, e) {
            return h.isEmpty(t) ? e ? void 0 : [] : this[e ? "find": "filter"](function(e) {
                for (var i in t)
                    if (t[i] !== e.get(i))
                        return !1;
                return !0
            })
        },
        findWhere: function(t) {
            return this.where(t, !0)
        },
        sort: function(t) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return t || (t = {}), h.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(h.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
        },
        pluck: function(t) {
            return h.invoke(this.models, "get", t)
        },
        fetch: function(t) {
            t = t ? h.clone(t) : {}, void 0 === t.parse && (t.parse=!0);
            var e = t.success, i = this;
            return t.success = function(r) {
                var s = t.reset ? "reset": "set";
                i[s](r, t), e && e(i, r, t), i.trigger("sync", i, r, t)
            }, M(this, t), this.sync("read", this, t)
        },
        create: function(t, e) {
            if (e = e ? h.clone(e) : {}, !(t = this._prepareModel(t, e)))
                return !1;
            e.wait || this.add(t, e);
            var i = this, r = e.success;
            return e.success = function(t, e, s) {
                s.wait && i.add(t, s), r && r(t, e, s)
            }, t.save(null, e), t
        },
        parse: function(t) {
            return t
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(t, e) {
            if (t instanceof d)
                return t.collection || (t.collection = this), t;
            e = e ? h.clone(e) : {}, e.collection = this;
            var i = new this.model(t, e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
        },
        _removeReference: function(t) {
            this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(t, e, i, r) {
            ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, r), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
        }
    });
    var y = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    h.each(y, function(t) {
        v.prototype[t] = function() {
            var e = s.call(arguments);
            return e.unshift(this.models), h[t].apply(h, e)
        }
    });
    var _ = ["groupBy", "countBy", "sortBy"];
    h.each(_, function(t) {
        v.prototype[t] = function(e, i) {
            var r = h.isFunction(e) ? e: function(t) {
                return t.get(e)
            };
            return h[t](this.models, r, i)
        }
    });
    var w = a.View = function(t) {
        this.cid = h.uniqueId("view"), t || (t = {}), h.extend(this, h.pick(t, x)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, b = /^(\S+)\s*(.*)$/, x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    h.extend(w.prototype, o, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function(t, e) {
            return this.$el && this.undelegateEvents(), this.$el = t instanceof a.$ ? t : a.$(t), this.el = this.$el[0], e!==!1 && this.delegateEvents(), this
        },
        delegateEvents: function(t) {
            if (!t&&!(t = h.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var e in t) {
                var i = t[e];
                if (h.isFunction(i) || (i = this[t[e]]), i) {
                    var r = e.match(b), s = r[1], n = r[2];
                    i = h.bind(i, this), s += ".delegateEvents" + this.cid, "" === n ? this.$el.on(s, i) : this.$el.on(s, n, i)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(h.result(this, "el"), !1);
            else {
                var t = h.extend({}, h.result(this, "attributes"));
                this.id && (t.id = h.result(this, "id")), this.className && (t["class"] = h.result(this, "className"));
                var e = a.$("<" + h.result(this, "tagName") + ">").attr(t);
                this.setElement(e, !1)
            }
        }
    }), a.sync = function(t, e, i) {
        var r = T[t];
        h.defaults(i || (i = {}), {
            emulateHTTP: a.emulateHTTP,
            emulateJSON: a.emulateJSON
        });
        var s = {
            type: r,
            dataType: "json"
        };
        if (i.url || (s.url = h.result(e, "url") || U()), null != i.data ||!e || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", s.data = JSON.stringify(i.attrs || e.toJSON(i))), i.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
            model: s.data
        } : {}), i.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
            s.type = "POST", i.emulateJSON && (s.data._method = r);
            var n = i.beforeSend;
            i.beforeSend = function(t) {
                return t.setRequestHeader("X-HTTP-Method-Override", r), n ? n.apply(this, arguments) : void 0
            }
        }
        "GET" === s.type || i.emulateJSON || (s.processData=!1), "PATCH" === s.type && E && (s.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var o = i.xhr = a.ajax(h.extend(s, i));
        return e.trigger("request", e, o, i), o
    };
    var E=!("undefined" == typeof window ||!window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    a.ajax = function() {
        return a.$.ajax.apply(a.$, arguments)
    };
    var k = a.Router = function(t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, S = /\((.*?)\)/g, $ = /(\(\?)?:\w+/g, H = /\*\w+/g, A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    h.extend(k.prototype, o, {
        initialize: function() {},
        route: function(t, e, i) {
            h.isRegExp(t) || (t = this._routeToRegExp(t)), h.isFunction(e) && (i = e, e = ""), i || (i = this[e]);
            var r = this;
            return a.history.route(t, function(s) {
                var n = r._extractParameters(t, s);
                i && i.apply(r, n), r.trigger.apply(r, ["route:" + e].concat(n)), r.trigger("route", e, n), a.history.trigger("route", r, e, n)
            }), this
        },
        navigate: function(t, e) {
            return a.history.navigate(t, e), this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = h.result(this, "routes");
                for (var t, e = h.keys(this.routes); null != (t = e.pop());)
                    this.route(t, this.routes[t])
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(A, "\\$&").replace(S, "(?:$1)?").replace($, function(t, e) {
                return e ? t : "([^/]+)"
            }).replace(H, "(.*?)"), new RegExp("^" + t + "$")
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return h.map(i, function(t) {
                return t ? decodeURIComponent(t) : null
            })
        }
    });
    var I = a.History = function() {
        this.handlers = [], h.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, N = /^[#\/]|\s+$/g, O = /^\/+|\/+$/g, P = /msie [\w.]+/, C = /\/$/, j = /[?#].*$/;
    I.started=!1, h.extend(I.prototype, o, {
        interval: 50,
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        },
        getFragment: function(t, e) {
            if (null == t)
                if (this._hasPushState ||!this._wantsHashChange || e) {
                    t = this.location.pathname;
                    var i = this.root.replace(C, "");
                    t.indexOf(i) || (t = t.slice(i.length))
                } else
                    t = this.getHash();
            return t.replace(N, "")
        },
        start: function(t) {
            if (I.started)
                throw new Error("Backbone.history has already been started");
            I.started=!0, this.options = h.extend({
                root: "/"
            }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange!==!1, this._wantsPushState=!!this.options.pushState, this._hasPushState=!!(this.options.pushState && this.history && this.history.pushState);
            var e = this.getFragment(), i = document.documentMode, r = P.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
            this.root = ("/" + this.root + "/").replace(O, "/"), r && this._wantsHashChange && (this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(e)), this._hasPushState ? a.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window&&!r ? a.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = e;
            var s = this.location, n = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState&&!n)
                    return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                this._hasPushState && n && s.hash && (this.fragment = this.getHash().replace(N, ""), this.history.replaceState({}, document.title, this.root + this.fragment + s.search))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), I.started=!1
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function() {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment?!1 : (this.iframe && this.navigate(e), void this.loadUrl())
        },
        loadUrl: function(t) {
            return t = this.fragment = this.getFragment(t), h.any(this.handlers, function(e) {
                return e.route.test(t) ? (e.callback(t), !0) : void 0
            })
        },
        navigate: function(t, e) {
            if (!I.started)
                return !1;
            e && e!==!0 || (e = {
                trigger: !!e
            });
            var i = this.root + (t = this.getFragment(t || ""));
            if (t = t.replace(j, ""), this.fragment !== t) {
                if (this.fragment = t, "" === t && "/" !== i && (i = i.slice(0, - 1)), this._hasPushState)
                    this.history[e.replace ? "replaceState": "pushState"]({}, document.title, i);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(i);
                    this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                }
                return e.trigger ? this.loadUrl(t) : void 0
            }
        },
        _updateHash: function(t, e, i) {
            if (i) {
                var r = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(r + "#" + e)
            } else
                t.hash = "#" + e
        }
    }), a.history = new I;
    var R = function(t, e) {
        var r, i = this;
        r = t && h.has(t, "constructor") ? t.constructor : function() {
            return i.apply(this, arguments)
        }, h.extend(r, i, e);
        var s = function() {
            this.constructor = r
        };
        return s.prototype = i.prototype, r.prototype = new s, t && h.extend(r.prototype, t), r.__super__ = i.prototype, r
    };
    d.extend = v.extend = k.extend = w.extend = I.extend = R;
    var U = function() {
        throw new Error('A "url" property or function must be specified')
    }, M = function(t, e) {
        var i = e.error;
        e.error = function(r) {
            i && i(t, r, e), t.trigger("error", t, r, e)
        }
    }
}.call(this), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+ function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c=!1, d = this;
        a(this).one("bsTransitionEnd", function() {
            c=!0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]', d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading=!1
    };
    c.VERSION = "3.3.2", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val": "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading=!0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading=!1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a=!0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a=!1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b: f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause&&!("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused=!1), this.interval && clearInterval(this.interval), this.options.interval&&!this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d&&!this.options.wrap)
            return b;
        var e = "prev" == a?-1 : 1, f = (c + e)%this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused=!0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left": "right", i = this;
        if (f.hasClass("active"))
            return this.sliding=!1;
        var j = f[0], k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding=!0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding=!1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding=!1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval=!1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle=!1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning&&!this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle": a.extend({}, e.data(), {
            trigger: this
        });
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this), e = c(d), f = {
                relatedTarget: this
            };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function d(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.2", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which)
                    return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown=!0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown&&!b.isDefaultPrevented() && (this.isShown=!1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }, c.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, c.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth: "",
            paddingRight: this.bodyIsOverflowing&&!a ? this.scrollbarWidth: ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle": a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        this.enabled=!0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter": "focusin", i = "hover" == g ? "mouseleave": "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() ||!d)
                return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]): this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.options.container ? a(this.options.container): this.$element.parent(), p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i: 2 * k.top - f + j, n = l ? "offsetWidth": "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html": "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this, f = this.tip(), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
            top: 0,
            left: 0
        }
        : b.offset(), g = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop: b.scrollTop()
        }, h = d ? {
            width: a(window).width(),
            height: a(window).height()
        }
        : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do
            a+=~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled=!0
    }, c.prototype.disable = function() {
        this.enabled=!1
    }, c.prototype.toggleEnabled = function() {
        this.enabled=!this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.2", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html": "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html": "append": "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.2", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset", c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null, this.clear();
        for (a = e.length; a--;)
            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            }), g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented()&&!f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade")||!!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.2", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)
            return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != c ? e + this.unpin <= f.top?!1 : "bottom" : a - d >= e + g?!1 : "bottom";
        var h = null == this.affixed, i = h ? e: f.top, j = h ? g: b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a("body").height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())
                    return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), $(document).ready(function() {
    function getEventData(element) {
        for (var event_data = {}, attributes = [{
            attr_name: "data-ga-event-category",
            field_name: "category"
        }, {
            attr_name: "data-ga-event-action",
            field_name: "action"
        }, {
            attr_name: "data-ga-event-label",
            field_name: "label"
        }
        ], i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            void 0 != element.attr(attribute.attr_name) && (event_data[attribute.field_name] = element.attr(attribute.attr_name))
        }
        return event_data
    }
    function getProductData(element) {
        for (var product_data = {}, attributes = [{
            attr_name: "data-ga-id",
            field_name: "id"
        }, {
            attr_name: "data-ga-name",
            field_name: "name"
        }, {
            attr_name: "data-ga-brand",
            field_name: "brand"
        }, {
            attr_name: "data-ga-category",
            field_name: "category"
        }, {
            attr_name: "data-ga-variant",
            field_name: "variant"
        }, {
            attr_name: "data-ga-price",
            field_name: "price"
        }, {
            attr_name: "data-ga-quantity",
            field_name: "quantity"
        }, {
            attr_name: "data-ga-position",
            field_name: "position"
        }
        ], i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            void 0 != element.attr(attribute.attr_name) && (product_data[attribute.field_name] = element.attr(attribute.attr_name))
        }
        return product_data
    }
    function getActionData(element) {
        for (var action_data = {}, attributes = [{
            attr_name: "data-ga-action",
            field_name: "action"
        }, {
            attr_name: "data-ga-transaction-id",
            field_name: "transaction_id"
        }, {
            attr_name: "data-ga-revenue",
            field_name: "revenue"
        }, {
            attr_name: "data-ga-tax",
            field_name: "tax"
        }, {
            attr_name: "data-ga-shipping",
            field_name: "shipping"
        }, {
            attr_name: "data-ga-coupon",
            field_name: "coupon"
        }, {
            attr_name: "data-ga-list",
            field_name: "list"
        }, {
            attr_name: "data-ga-step",
            field_name: "step"
        }, {
            attr_name: "data-ga-option",
            field_name: "option"
        }
        ], i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            void 0 != element.attr(attribute.attr_name) && (action_data[attribute.field_name] = element.attr(attribute.attr_name))
        }
        return action_data
    }
    function getImpressionData(element) {
        for (var impression_data = {}, attributes = [{
            attr_name: "data-ga-id",
            field_name: "id"
        }, {
            attr_name: "data-ga-name",
            field_name: "name"
        }, {
            attr_name: "data-ga-category",
            field_name: "category"
        }, {
            attr_name: "data-ga-list",
            field_name: "list"
        }
        ], i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            void 0 != element.attr(attribute.attr_name) && (impression_data[attribute.field_name] = element.attr(attribute.attr_name))
        }
        return impression_data
    }
    $("body").delegate(".gaq-track", "click", function() {
        var category = $(this).data("category"), action = $(this).data("action"), label = $(this).data("label");
        ga("send", "event", category, action, label)
    }), $("body").delegate("[data-ga-type='event']", "click", function(event) {
        var element = $(this), event = getEventData(element);
        ga("send", "event", event.category, event.action, event.label)
    }), $("body").delegate("[data-ga-type='ee-event']", "click", function(event) {
        console.log("Enhanced Ecommerce Click Event");
        var element = $(this), event = getEventData(element), product = getProductData(element), action = getActionData(element);
        console.log(event), console.log(product), console.log(action), ga("ec:addProduct", product), ga("ec:setAction", action.action, action), ga("send", "event", event.category, event.action, event.label)
    });
    var impression_lists = {};
    $("[data-ga-type='ee-impression']").each(function() {
        var element = $(this), impression_data = getImpressionData(element);
        void 0 == impression_lists[impression_data.list] && (impression_lists[impression_data.list] = []), impression_lists[impression_data.list].push(impression_data)
    });
    for (var list_name in impression_lists) {
        for (var impression_list = impression_lists[list_name], i = 0; i < impression_list.length; i++) {
            var impression_data = impression_list[i];
            ga("ec:addImpression", impression_data), i%50 == 0 && ga("send", "event", "Product Event", "Impression")
        }
        ga("send", "event", "Product Event", "Impression")
    }
}), _.context_compose = function() {
    var args = Array.prototype.slice.call(arguments), targetContext = args[0], composeFuns = args.slice(1), wrappedFuns = _.map(composeFuns, function(fn) {
        return function(innerVal) {
            return fn.call(targetContext, innerVal)
        }
    });
    return _.compose.apply(this, wrappedFuns)
}, _.where_defined = function(iteree, definedField) {
    return iteree.filter(function(el) {
        var val = el instanceof Backbone.Model ? el.get(definedField): el[definedField];
        return null !== val && void 0 !== val
    })
}, _.lookup_hash = function(arr, key) {
    for (var lookup = {}, i = 0, len = arr.length; len > i; i++) {
        var instance = arr[i];
        instance.hasOwnProperty(key) ? lookup[instance[key]] = instance : instance.hasOwnProperty("attributes") && (lookup[instance.get(key)] = instance)
    }
    return lookup
}, $.ajaxPrefilter(function(options) {
    var windowParams = {
        isBTest: "b",
        experimentVariation: "variation"
    };
    if ("post" === options.type.toLowerCase() || "get" === options.type.toLowerCase())
        for (var param in windowParams)
            if (window.hasOwnProperty(param)) {
                var paramObj = {};
                paramObj[windowParams[param]] = window[param], options.url = addParamToUrl(options.url, paramObj)
            }
}), function() {
    var ua = navigator.userAgent;
    window.rukBrowserInfo = {
        isChrome: /chrome/i.test(ua),
        isIPhone: /iphone/i.test(ua),
        isAndroid: /android/i.test(ua),
        isFirefox: /firefox/i.test(ua),
        isIE: /msie/i.test(ua),
        isIE9: /ie 9/i.test(ua),
        isIE11: !window.ActiveXObject && "ActiveXObject"in window
    }
}(), function() {
    for (var e, hashParams = {}, a = /\+/g, r = /([^&;=]+)=?([^&;]*)/g, d = function(s) {
        return decodeURIComponent(s.replace(a, " "))
    }, q = window.location.hash.substring(1); e = r.exec(q);)
        hashParams[d(e[1])] = d(e[2]);
    for (key in hashParams)
        window[key] = hashParams[key]
}(), String.prototype.format || (String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return "undefined" != typeof args[number] ? args[number] : match
    })
});
var CookieManager = {
    createCookie: function(name, value, days) {
        if (days) {
            var date = new Date;
            date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3);
            var expires = "; expires=" + date.toGMTString()
        } else
            var expires = "";
        name = name, document.cookie = name + "=" + value + expires + "; path=/"
    },
    readCookie: function(name) {
        for (var nameEQ = name + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
            for (var c = ca[i]; " " == c.charAt(0);)
                c = c.substring(1, c.length);
            if (0 == c.indexOf(nameEQ))
                return c.substring(nameEQ.length, c.length)
        }
        return null
    },
    eraseCookie: function(name) {
        this.createCookie(name, "", - 1)
    }
};
void 0 !== console && console.log && console.log("Rockstar developer? Join the Rukkus!! --- https://rukkus.com/jobs"), window.RukGlobal = window.RukGlobal || {}, window.RukGlobal.cloneCanvas = function(oldCanvas, newCanvas) {
    newCanvas = newCanvas || document.createElement("canvas");
    var context = newCanvas.getContext("2d");
    return newCanvas.width = oldCanvas.width, newCanvas.height = oldCanvas.height, newCanvas.style.cssText = oldCanvas.style.cssText, context.drawImage(oldCanvas, 0, 0), newCanvas
}, window.RukGlobal.utf8_encode = function(argString) {
    if (null === argString || "undefined" == typeof argString)
        return "";
    var start, end, string = argString + "", utftext = "", stringl = 0;
    start = end = 0, stringl = string.length;
    for (var n = 0; stringl > n; n++) {
        var c1 = string.charCodeAt(n), enc = null;
        if (128 > c1)
            end++;
        else if (c1 > 127 && 2048 > c1)
            enc = String.fromCharCode(c1>>6 | 192, 63 & c1 | 128);
        else if (55296 != (63488 & c1))
            enc = String.fromCharCode(c1>>12 | 224, c1>>6 & 63 | 128, 63 & c1 | 128);
        else {
            if (55296 != (64512 & c1))
                throw new RangeError("Unmatched trail surrogate at " + n);
            var c2 = string.charCodeAt(++n);
            if (56320 != (64512 & c2))
                throw new RangeError("Unmatched lead surrogate at " + (n - 1));
            c1 = ((1023 & c1)<<10) + (1023 & c2) + 65536, enc = String.fromCharCode(c1>>18 | 240, c1>>12 & 63 | 128, c1>>6 & 63 | 128, 63 & c1 | 128)
        }
        null !== enc && (end > start && (utftext += string.slice(start, end)), utftext += enc, start = end = n + 1)
    }
    return end > start && (utftext += string.slice(start, stringl)), utftext
}, window.RukGlobal.md5 = function(str) {
    var xl, k, AA, BB, CC, DD, a, b, c, d, rotateLeft = function(lValue, iShiftBits) {
        return lValue<<iShiftBits | lValue>>>32 - iShiftBits
    }, addUnsigned = function(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        return lX8 = 2147483648 & lX, lY8 = 2147483648 & lY, lX4 = 1073741824 & lX, lY4 = 1073741824 & lY, lResult = (1073741823 & lX) + (1073741823 & lY), lX4 & lY4 ? 2147483648^lResult^lX8^lY8 : lX4 | lY4 ? 1073741824 & lResult ? 3221225472^lResult^lX8^lY8 : 1073741824^lResult^lX8^lY8 : lResult^lX8^lY8
    }, _F = function(x, y, z) {
        return x & y|~x & z
    }, _G = function(x, y, z) {
        return x & z | y&~z
    }, _H = function(x, y, z) {
        return x^y^z
    }, _I = function(x, y, z) {
        return y^(x|~z)
    }, _FF = function(a, b, c, d, x, s, ac) {
        return a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac)), addUnsigned(rotateLeft(a, s), b)
    }, _GG = function(a, b, c, d, x, s, ac) {
        return a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac)), addUnsigned(rotateLeft(a, s), b)
    }, _HH = function(a, b, c, d, x, s, ac) {
        return a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac)), addUnsigned(rotateLeft(a, s), b)
    }, _II = function(a, b, c, d, x, s, ac) {
        return a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac)), addUnsigned(rotateLeft(a, s), b)
    }, convertToWordArray = function(str) {
        for (var lWordCount, lMessageLength = str.length, lNumberOfWords_temp1 = lMessageLength + 8, lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1%64) / 64, lNumberOfWords = 16 * (lNumberOfWords_temp2 + 1), lWordArray = new Array(lNumberOfWords - 1), lBytePosition = 0, lByteCount = 0; lMessageLength > lByteCount;)
            lWordCount = (lByteCount - lByteCount%4) / 4, lBytePosition = lByteCount%4 * 8, lWordArray[lWordCount] = lWordArray[lWordCount] | str.charCodeAt(lByteCount)<<lBytePosition, lByteCount++;
        return lWordCount = (lByteCount - lByteCount%4) / 4, lBytePosition = lByteCount%4 * 8, lWordArray[lWordCount] = lWordArray[lWordCount] | 128<<lBytePosition, lWordArray[lNumberOfWords - 2] = lMessageLength<<3, lWordArray[lNumberOfWords - 1] = lMessageLength>>>29, lWordArray
    }, wordToHex = function(lValue) {
        var lByte, lCount, wordToHexValue = "", wordToHexValue_temp = "";
        for (lCount = 0; 3 >= lCount; lCount++)
            lByte = lValue>>>8 * lCount & 255, wordToHexValue_temp = "0" + lByte.toString(16), wordToHexValue += wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
        return wordToHexValue
    }, x = [], S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    for (str = this.utf8_encode(str), x = convertToWordArray(str), a = 1732584193, b = 4023233417, c = 2562383102, d = 271733878, xl = x.length, k = 0; xl > k; k += 16)
        AA = a, BB = b, CC = c, DD = d, a = _FF(a, b, c, d, x[k + 0], S11, 3614090360), d = _FF(d, a, b, c, x[k + 1], S12, 3905402710), c = _FF(c, d, a, b, x[k + 2], S13, 606105819), b = _FF(b, c, d, a, x[k + 3], S14, 3250441966), a = _FF(a, b, c, d, x[k + 4], S11, 4118548399), d = _FF(d, a, b, c, x[k + 5], S12, 1200080426), c = _FF(c, d, a, b, x[k + 6], S13, 2821735955), b = _FF(b, c, d, a, x[k + 7], S14, 4249261313), a = _FF(a, b, c, d, x[k + 8], S11, 1770035416), d = _FF(d, a, b, c, x[k + 9], S12, 2336552879), c = _FF(c, d, a, b, x[k + 10], S13, 4294925233), b = _FF(b, c, d, a, x[k + 11], S14, 2304563134), a = _FF(a, b, c, d, x[k + 12], S11, 1804603682), d = _FF(d, a, b, c, x[k + 13], S12, 4254626195), c = _FF(c, d, a, b, x[k + 14], S13, 2792965006), b = _FF(b, c, d, a, x[k + 15], S14, 1236535329), a = _GG(a, b, c, d, x[k + 1], S21, 4129170786), d = _GG(d, a, b, c, x[k + 6], S22, 3225465664), c = _GG(c, d, a, b, x[k + 11], S23, 643717713), b = _GG(b, c, d, a, x[k + 0], S24, 3921069994), a = _GG(a, b, c, d, x[k + 5], S21, 3593408605), d = _GG(d, a, b, c, x[k + 10], S22, 38016083), c = _GG(c, d, a, b, x[k + 15], S23, 3634488961), b = _GG(b, c, d, a, x[k + 4], S24, 3889429448), a = _GG(a, b, c, d, x[k + 9], S21, 568446438), d = _GG(d, a, b, c, x[k + 14], S22, 3275163606), c = _GG(c, d, a, b, x[k + 3], S23, 4107603335), b = _GG(b, c, d, a, x[k + 8], S24, 1163531501), a = _GG(a, b, c, d, x[k + 13], S21, 2850285829), d = _GG(d, a, b, c, x[k + 2], S22, 4243563512), c = _GG(c, d, a, b, x[k + 7], S23, 1735328473), b = _GG(b, c, d, a, x[k + 12], S24, 2368359562), a = _HH(a, b, c, d, x[k + 5], S31, 4294588738), d = _HH(d, a, b, c, x[k + 8], S32, 2272392833), c = _HH(c, d, a, b, x[k + 11], S33, 1839030562), b = _HH(b, c, d, a, x[k + 14], S34, 4259657740), a = _HH(a, b, c, d, x[k + 1], S31, 2763975236), d = _HH(d, a, b, c, x[k + 4], S32, 1272893353), c = _HH(c, d, a, b, x[k + 7], S33, 4139469664), b = _HH(b, c, d, a, x[k + 10], S34, 3200236656), a = _HH(a, b, c, d, x[k + 13], S31, 681279174), d = _HH(d, a, b, c, x[k + 0], S32, 3936430074), c = _HH(c, d, a, b, x[k + 3], S33, 3572445317), b = _HH(b, c, d, a, x[k + 6], S34, 76029189), a = _HH(a, b, c, d, x[k + 9], S31, 3654602809), d = _HH(d, a, b, c, x[k + 12], S32, 3873151461), c = _HH(c, d, a, b, x[k + 15], S33, 530742520), b = _HH(b, c, d, a, x[k + 2], S34, 3299628645), a = _II(a, b, c, d, x[k + 0], S41, 4096336452), d = _II(d, a, b, c, x[k + 7], S42, 1126891415), c = _II(c, d, a, b, x[k + 14], S43, 2878612391), b = _II(b, c, d, a, x[k + 5], S44, 4237533241), a = _II(a, b, c, d, x[k + 12], S41, 1700485571), d = _II(d, a, b, c, x[k + 3], S42, 2399980690), c = _II(c, d, a, b, x[k + 10], S43, 4293915773), b = _II(b, c, d, a, x[k + 1], S44, 2240044497), a = _II(a, b, c, d, x[k + 8], S41, 1873313359), d = _II(d, a, b, c, x[k + 15], S42, 4264355552), c = _II(c, d, a, b, x[k + 6], S43, 2734768916), b = _II(b, c, d, a, x[k + 13], S44, 1309151649), a = _II(a, b, c, d, x[k + 4], S41, 4149444226), d = _II(d, a, b, c, x[k + 11], S42, 3174756917), c = _II(c, d, a, b, x[k + 2], S43, 718787259), b = _II(b, c, d, a, x[k + 9], S44, 3951481745), a = addUnsigned(a, AA), b = addUnsigned(b, BB), c = addUnsigned(c, CC), d = addUnsigned(d, DD);
    var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
    return temp.toLowerCase()
}, window.RukGlobal.activateExperiment = function(experimentId) {
    window.optimizely = window.optimizely || [], window.optimizely.push(["activate", experimentId])
};
var LocationModel = Backbone.Model.extend({
    defaults: {
        q: "",
        latitude: "40.7127",
        longitude: "-74.0059"
    },
    initialize: function() {
        this.on("change:q", function() {
            this.fetch()
        })
    },
    url: function() {
        return "/geocode/?q=" + this.get("q")
    },
    parse: function(response) {
        var parsed = {}, acceptedLocation = response[0];
        return parsed.latitude = acceptedLocation.location.latitude, parsed.longitude = acceptedLocation.location.longitude, parsed
    },
    addGoogleMap: function(container, centerLat, centerLng) {
        var map_canvas = document.getElementById(container), map_options = {
            center: new google.maps.LatLng(centerLat, centerLng),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        return new google.maps.Map(map_canvas, map_options)
    },
    addGoogleMapUsingAddr: function(container, address) {
        var _this = this;
        this.set({
            q: address
        }), this.on("sync", function() {
            _this.addGoogleMap(container, _this.get("latitude"), _this.get("longitude"))
        })
    },
    addMarker: function(googleMap, centerLat, centerLng) {
        return new google.maps.Marker({
            position: new google.maps.LatLng(centerLat, centerLng),
            map: googleMap
        })
    }
}), PlacesModel = Backbone.Model.extend({
    defaults: {
        q: "",
        results: []
    },
    url: function() {
        return "/places/?q=" + this.get("q")
    },
    parse: function(resp) {
        return {
            results: resp
        }
    },
    placesSearch: function() {
        return this.fetch()
    },
    reset: function() {
        this.set({
            q: "",
            results: []
        })
    }
}), ChromeConsoleModel = Backbone.Model.extend({
    defaults: {
        timerLabel: "timer",
        profileLabel: "profiler"
    },
    printDir: function(obj) {
        console.dir(obj)
    },
    profileStart: function(label) {
        console.profile(label)
    },
    profileStop: function(label) {
        console.profileEnd(label)
    },
    timerStart: function(label) {
        console.time(label)
    },
    timerStop: function(label) {
        console.timeEnd(label)
    },
    trace: function() {
        console.trace()
    }
});
window.rukConsole = new ChromeConsoleModel;
var User = Backbone.Model.extend({
    defaults: {
        headshot: "//s3.amazonaws.com/static.rukkus.com/images/rukkusr-white.svg"
    },
    getGravatarUrl: function(email) {
        return "http://www.gravatar.com/avatar/" + window.RukGlobal.md5(email)
    },
    doFbLogin: function(callbacks) {
        var _this = this;
        FB.getLoginStatus(function(response) {
            "connected" === response.status ? callbacks.loginSuccess(response) : FB.login(function(response) {
                _this.loginStatus(response, callbacks.loginSuccess, callbacks.loginFailure)
            })
        })
    },
    loginStatus: function(response, loginSuccess, loginFailure) {
        "connected" === response.status ? loginSuccess(response) : loginFailure(response)
    },
    makeApiCall: function(callback) {
        FB.api("/me", function(response) {
            response.id && this.set({
                headshot: "http://graph.facebook.com/" + response.id + "/picture?type=normal"
            }), callback(response)
        }.bind(this))
    },
    doGoogleLogin: function(callback) {
        var onAuth2 = function() {
            auth2.isSignedIn.get() ? callback(auth2.currentUser.get()) : (auth2.signIn({
                scope: "profile email"
            }), auth2.isSignedIn.listen(function(signedIn) {
                signedIn && callback(auth2.currentUser.get())
            }))
        };
        window.auth2 ? onAuth2() : function() {
            gapi.load("auth2", function() {
                window.auth2 = gapi.auth2.init({
                    client_id: "462873405101-232a2222gaud84i1itpo49s9vub47m50.apps.googleusercontent.com"
                }), auth2.then(onAuth2)
            })
        }()
    }
}), SearchModel = Backbone.Model.extend({
    defaults: {
        q: "",
        data: null,
        go: 0,
        location: new LocationModel,
        requests: [],
        isMobile: !1,
        selectedResult: - 1
    },
    initialize: function() {
        var _this = this;
        this.on("change:q", function() {
            "" === _this.get("q") ? _this.reset() : _this.get("requests").push($.ajax({
                type: "GET",
                url: _this.url(),
                success: function(res, xhr) {
                    _this.parse(res, xhr)
                }
            }))
        })
    },
    isEmptyQ: function() {
        return "" === this.get("q") || null === this.get("q")
    },
    totalDataSize: function() {
        return _.reduce(_.values(this.get("data")), function(acc, cur) {
            return acc + cur.length
        }, 0)
    },
    dataAtIndex: function(index) {
        for (var dataKeys = ["performer", "event", "venue"], listCounter = 0, i = 0; i < dataKeys.length; i++)
            for (var dataList = this.get("data")[dataKeys[i]], j = 0; j < dataList.length; j++, listCounter++)
                if (listCounter === index)
                    return dataList[j]
    },
    getRedirectUrl: function() {
        var performers = this.get("data").performer, venues = this.get("data").venue;
        return performers.length > 0 ? performers[0].absolute_url : 1 == venues.length ? venues[0].absolute_url : !1
    },
    reset: function() {
        _.each(this.get("requests"), function(req) {
            req.abort()
        }), this.set({
            requests: []
        }), this.set({
            data: null
        }), this.set({
            selectedResult: - 1
        })
    },
    url: function() {
        return "/search-results/?q=" + encodeURI(this.get("q")) + "&latitude=" + this.get("location").get("latitude") + "&longitude=" + this.get("location").get("longitude")
    },
    parse: function(resp) {
        this.set("data", resp.data)
    }
}), FieldModel = Backbone.Model.extend({
    defaults: {
        rules: [],
        name: null,
        val: null,
        error: null,
        valid: null,
        liveValidate: !1,
        mirroredField: null,
        onChangeCb: function() {},
        numOnly: !1,
        next: null
    },
    initialize: function() {
        this.on("change:val", function() {
            this.get("onChangeCb").call(this, this.get("val"))
        }, this)
    },
    validate: function() {
        var _this = this, isValid = 0 === this.get("rules").length ||!this.get("error") && _.every(_.map(this.get("rules"), function(ruleObj) {
            var ruleFn = ruleObj.fn, ruleMsg = ruleObj.msg, success = ruleFn.call(_this, _this.get("val"));
            return ruleMsg&&!success && _this.set({
                error: ruleMsg
            }), success
        }));
        return this.set({
            valid: isValid
        }), isValid
    },
    redrawViews: function() {
        this.trigger("trigger:redraw")
    },
    focusViews: function() {
        this.trigger("trigger:focus")
    },
    clearError: function() {
        this.set({
            error: null
        }, {
            silent: !0
        })
    },
    notEmpty: function(val) {
        return null !== val && "" !== val
    }
}), NonEmptyField = FieldModel.extend({
    defaults: _.extend({}, FieldModel.prototype.defaults, {
        rules: [{
            fn: function(val) {
                return this.notEmpty(val)
            },
            msg: "value is required"
        }
        ]
    })
}), MatchingField = FieldModel.extend({
    defaults: _.extend({}, FieldModel.prototype.defaults, {
        rules: [{
            fn: function(val) {
                return val === _this.get("matchedField").get("val")
            },
            msg: "values must be the same"
        }
        ],
        matchedField: null
    })
}), FieldView = Backbone.View.extend({
    errorTpl: _.template("<div class='slide-down-error'><%= error %></div>"),
    errorRendered: !1,
    events: {
        change: "onChange",
        keyup: "onChange",
        keydown: "onKeyDown"
    },
    initialize: function() {
        this.onChange(), this.model.get("liveValidate") && this.model.on("change:val", this.render, this), this.model.on("change:error", this.render, this), this.model.on("change:valid", this.render, this), this.model.on("trigger:redraw", this.setValFromModel, this), this.model.on("trigger:focus", this.setFocus, this)
    },
    onChange: function() {
        this.model.set({
            val: this.$el.val(),
            error: null
        })
    },
    onKeyDown: function(evt) {
        this.model.get("numOnly")&&!wasNumericEvt(evt) && evt.preventDefault(), this.model.get("next") && wasEnterEvt(evt) && (evt.preventDefault(), this.model.get("next").focusViews())
    },
    _animateFn: function($el) {
        return function(yOffset, additional) {
            if (!window.rukBrowserInfo.isIE9)
                return $el.snabbt($.extend({
                    position: [0, yOffset, 0],
                    duration: 500
                }, additional || {}));
            if ($el.css("top", yOffset + "px"), additional)
                for (var key in additional)
                    _.isFunction(additional[key]) || $el.css(key, additional[key])
        }
    },
    _hideError: function() {
        var $error = this.$el.next(), animator = this._animateFn($error);
        animator(20, {
            opacity: 0,
            callback: function() {
                $error.css("display", "none")
            }
        }), this.errorRendered=!1
    },
    _showError: function() {
        var renderedError = this.errorTpl(this.model.attributes);
        this.errorRendered || (this.$el.after(renderedError), window.scrollTo(0, this.$el.offset().top - 100));
        var animator = this._animateFn(this.$el.next());
        animator(50), this.errorRendered=!0
    },
    _highlight: function(validated) {
        var $formGroup = this.$el.closest(".form-group");
        validated ? ($formGroup.removeClass("has-error"), $formGroup.addClass("has-success")) : ($formGroup.addClass("has-error"), $formGroup.removeClass("has-success")), this.model.get("error")&&!this.errorRendered ? this._showError() : !this.model.get("error") && this.errorRendered && this._hideError()
    },
    setValFromModel: function() {
        this.$el.val(this.model.get("val"))
    },
    setFocus: function() {
        this.$el.focus()
    },
    render: function() {
        this._highlight(this.model.validate())
    }
}), FormView = Backbone.View.extend({
    formErrorsTpl: _.template("<% _.each(errors, function(error) { %><div class='error'><%= error %></div><% }) %>"),
    events: {
        "submit form": "submitForm"
    },
    initialize: function(options) {
        this.fieldToModel = {}, this.formErrors = [], this.onSubmit = options.onSubmit, this.onComplete = options.onComplete, this.onFail = options.onFail, this.nonFieldValidators = options.nonFieldValidators || [], this.chainFields = options.chainFields ||!1, this.lastFieldAdded = null, this.blocks = options.blocks || [], this.replaceSubmitWith = options.replaceSubmitWith || null, this.submitUrl = options.submitUrl || null, this.preventSubmit=!1, this.$formErrorsContainer = this.$el.find(".form-errors"), this.$formErrorsContainer.length || (this.$el.find("form").append("<div class='form-errors'></div>"), this.$formErrorsContainer = this.$el.find(".form-errors")), this.$submitProxy = options.proxy;
        var _this = this;
        this.$submitProxy && this.$submitProxy.on("click", function(evt) {
            _this.submitForm(evt)
        })
    },
    _clearAllErrors: function() {
        this.$el.find(".form-group").removeClass("has-error"), this.$el.find(".slide-down-error").remove(), this.$formErrorsContainer.html(""), this.formErrors = []
    },
    _renderNonFieldErrors: function() {
        this.$formErrorsContainer.html(this.formErrorsTpl({
            errors: this.formErrors
        }))
    },
    _disableSubmit: function() {
        var $submitButton = this.$submitProxy ? this.$submitProxy: this.$el.find('button[type="submit"]');
        $submitButton.addClass("disabled"), $submitButton.attr("disabled", !0), this.preventSubmit=!0
    },
    _enableSubmit: function() {
        var $submitButton = this.$submitProxy ? this.$submitProxy: this.$el.find('button[type="submit"]');
        $submitButton.removeClass("disabled"), $submitButton.attr("disabled", !1), this.preventSubmit=!1
    },
    _submitForm: function($form) {
        var $submitButton = this.$el.find('button[type="submit"]'), _this = this;
        this.onSubmit && this.onSubmit(), $.post(this.submitUrl || $form.attr("action"), $form.serialize()).success(function(resp) {
            var redirect_url = JSON.parse(resp).url;
            redirect_url && (window.location = redirect_url), $submitButton.button("finished")
        }).always(function() {
            _this._enableSubmit(), _this.onComplete && _this.onComplete(), _this.replaceSubmitWith && $submitButton.replaceWith(_this.replaceSubmitWith)
        }).fail(function(resp) {
            var responseJson = JSON.parse(resp.responseText), errors = responseJson.errors;
            _.each(_.keys(errors), function(errorField) {
                var errorModel = _this.fieldToModel[errorField];
                errorModel ? errorModel.set({
                    error: errors[errorField]
                }) : _this.formErrors.push(errors[errorField])
            }), _this._enableSubmit(), _this._renderNonFieldErrors(), $submitButton.text("Try Again");
            var evalJs = responseJson.execute;
            evalJs && eval(evalJs), _this.onFail && _this.onFail()
        }), this._disableSubmit()
    },
    resetFieldChain: function() {
        this.lastFieldAdded = null
    },
    getField: function(fieldName) {
        return this.fieldToModel[fieldName]
    },
    removeField: function(fieldName) {
        return this.fieldToModel[fieldName].destroy(), delete this.fieldToModel[fieldName], this
    },
    removeFields: function(fieldNames) {
        return fieldNames.map(this.removeField), this
    },
    addField: function(fieldModel) {
        return this.fieldToModel[fieldModel.get("name")] = fieldModel, null !== this.lastFieldAdded && this.chainFields && this.lastFieldAdded.set({
            next: fieldModel
        }), this.lastFieldAdded = fieldModel, this
    },
    addFields: function(fieldModels) {
        return fieldModels.map(this.addField, this), this
    },
    validateModels: function(models) {
        return _.every(models, function(model) {
            return model.validate()
        })
    },
    validateAllModels: function() {
        var formModels = this.fieldToModel;
        return this.validateModels(_.values(formModels))
    },
    nonFieldValidate: function() {
        var _this = this, valid = _.every(_.map(this.nonFieldValidators, function(validator) {
            var validated = validator.fn.apply(this);
            return !validated && _this.formErrors.push(validator.msg), validated
        }));
        return !valid && this._renderNonFieldErrors(), valid
    },
    validate: function() {
        return this.validateAllModels() && this.nonFieldValidate()
    },
    submitForm: function(evt) {
        evt && evt.preventDefault();
        var isValid = this.validate();
        isValid && (this._clearAllErrors(), !this.preventSubmit && this._submitForm(this.$el.find("form")))
    }
});
window.AccountForm = window.AccountForm || Object.create({
    emailField: null,
    passwordField: null,
    nameField: null,
    _createViews: function(el, isSignup) {
        new FieldView({
            model: this.emailField,
            el: el + ' input[name="email"]'
        }), new FieldView({
            model: this.passwordField,
            el: el + ' input[name="password"]'
        }), isSignup && new FieldView({
            model: this.firstNameField,
            el: el + ' input[name="first_name"]'
        }), isSignup && new FieldView({
            model: this.lastNameField,
            el: el + ' input[name="last_name"]'
        })
    },
    create: function(opts) {
        var el = opts.el, isSignup = opts.isSignup, onSocialSubmit = opts.onSocialSubmit;
        this.emailField = new FieldModel({
            name: "email",
            rules: [{
                fn: function(email) {
                    return this.notEmpty(email)
                },
                msg: "email is required"
            }
            ]
        }), this.passwordField = new FieldModel({
            name: "password",
            rules: [{
                fn: function(password) {
                    return this.notEmpty(password)
                },
                msg: "password is required"
            }
            ]
        }), this.firstNameField = new FieldModel({
            name: "first_name",
            rules: [{
                fn: function(name) {
                    return this.notEmpty(name)
                },
                msg: "name is required"
            }
            ]
        }), this.lastNameField = new FieldModel({
            name: "last_name",
            rules: [{
                fn: function(name) {
                    return this.notEmpty(name)
                },
                msg: "name is required"
            }
            ]
        });
        var AccountFormView = FormView.extend({
            events: function() {
                return _.extend({}, FormView.prototype.events, {
                    "click .btn-facebook": "facebookLogin",
                    "click .btn-google": "googleLogin"
                })
            },
            initialize: function(options) {
                options.isSignup && (options.onComplete = this.trackSignup), options.onFail = function() {
                    this.$el.find('input[type="text"], input[type="password"], input[type="hidden"]').val("")
                }.bind(this), (window.rukBrowserInfo.isIE || window.rukBrowserInfo.isIE9 || window.rukBrowserInfo.isIE11) && this.$el.find(".btn-google").addClass("hidden"), FormView.prototype.initialize.apply(this, [options])
            },
            trackSignup: function() {
                if (console.log("Track Signup"), window.optimizely = window.optimizely || [], null != CookieManager.readCookie("optimizely_experiment_id")) {
                    var experiment_id = CookieManager.readCookie("optimizely_experiment_id"), variation_id = CookieManager.readCookie("optimizely_variation_id");
                    window.optimizely.push(["bucketVisitor", experiment_id, variation_id]), window.optimizely.push(["trackEvent", "signup_complete"])
                }
            },
            _populateFormWithResponse: function($form, responseObj) {
                var $email = $form.find('input[name="email"]'), $firstName = $form.find('input[name="first_name"]'), $lastName = $form.find('input[name="last_name"]'), $password = $form.find('input[name="password"]'), fbEmail = responseObj.email;
                fbEmail = fbEmail || responseObj.id + "@facebook.com", $email.val(fbEmail).change(), $password.val(responseObj.id).change(), $firstName.length > 0 && ($firstName.val(responseObj.first_name).change(), $lastName.val(responseObj.last_name).change())
            },
            facebookLogin: function(evt) {
                evt.preventDefault();
                var _this = this, $btn = $(evt.currentTarget), $form = $btn.closest("form"), $fbId = $form.find('input[name="facebook_id"]');
                this.model.doFbLogin({
                    loginSuccess: function() {
                        _this.model.makeApiCall(function(response) {
                            $fbId.val(response.id).change(), _this._populateFormWithResponse($form, response), onSocialSubmit ? onSocialSubmit() : $form.submit()
                        })
                    },
                    loginFailure: function() {}
                })
            },
            googleLogin: function(evt) {
                evt.preventDefault();
                var $btn = $(evt.currentTarget), $form = $btn.closest("form"), $googleToken = $form.find('input[name="google_token"]');
                this.model.doGoogleLogin(function(googleUser) {
                    var profile = googleUser.getBasicProfile(), idToken = googleUser.getAuthResponse().id_token;
                    console.log("**email is " + profile.getEmail() + "**");
                    var fullName = profile.getName();
                    $googleToken.val(idToken).change(), this._populateFormWithResponse($form, {
                        email: profile.getEmail(),
                        id: idToken,
                        first_name: fullName.split(" ")[0],
                        last_name: fullName.split(" ").slice(1).join(" ")
                    }), onSocialSubmit ? onSocialSubmit() : $form.submit()
                }.bind(this))
            }
        }), AccountForm = new AccountFormView({
            el: el,
            model: opts.model || new User,
            isSignup: isSignup
        });
        return AccountForm.addField(this.emailField), AccountForm.addField(this.passwordField), isSignup && AccountForm.addField(this.firstNameField), isSignup && AccountForm.addField(this.lastNameField), this._createViews(el, isSignup), AccountForm
    }
});
var SearchBoxAutocomplete = window.SearchBoxAutocomplete || {
    searchView: null,
    searchModel: null,
    create: function(el) {
        var SearchView = Backbone.View.extend({
            template: $(".search-result-tpl").length && _.template($(".search-result-tpl").html()),
            events: {
                keyup: "keyboardNavigate",
                "mouseover .search-results li": "highlightResult",
                "keyup .search-input": "autocomplete",
                "click .search-submit-btn": "fullSearch"
            },
            cached: {
                $input: null,
                $results: null
            },
            initialize: function() {
                this.model.set({
                    isMobile: window.isMobileSession
                }), this.model.bind("change", this.render, this), this.cached.$input = this.$el.find("input"), this.cached.$results = this.$el.find(".search-results"), this.model.get("isMobile") && (this.events["touchdown .search-toggle"] = "toggleMobileSearch", this.events["click .search-toggle"] = "toggleMobileSearch", this.delegateEvents())
            },
            keyboardNavigate: function(evt) {
                var DOWN = 40, UP = 38, ENTER = 13, ESCAPE = 27, keycode = evt.keyCode, selectedResult = this.model.get("selectedResult");
                if (keycode === UP && 0 >= selectedResult)
                    this.$el.find(".search-input").focus(), this.model.set({
                        selectedResult: - 1
                    });
                else if (keycode === UP)
                    this.model.set({
                        selectedResult: selectedResult - 1
                    });
                else if (keycode === DOWN && selectedResult < this.model.totalDataSize() - 1)
                    this.model.set({
                        selectedResult: selectedResult + 1
                    });
                else if (keycode === ESCAPE)
                    this.model.reset();
                else if (keycode === ENTER) {
                    evt.stopPropagation();
                    var selectedData = this.model.dataAtIndex(selectedResult);
                    void 0 != selectedData && (window.location = selectedData.absolute_url)
                }
            },
            highlightResult: function(evt) {
                var $selected = $(evt.currentTarget), highlightedIndex = parseInt($selected.data("index"));
                this.model.set({
                    selectedResult: highlightedIndex
                })
            },
            autocomplete: function(evt) {
                if (13 === evt.keyCode && this.model.get("selectedResult") < 0) {
                    var redirect_url = this.model.getRedirectUrl();
                    "" == redirect_url ? this.$el.find(".search-submit-btn").click() : window.location = redirect_url
                } else {
                    var val = $(evt.target).val();
                    this.model.set({
                        q: val
                    })
                }
            },
            fullSearch: function(evt) {
                evt.preventDefault();
                var queryVal = this.model.get("q"), prevHref = $(evt.target).closest("a").attr("href");
                "" !== queryVal && (window.location = prevHref + "?q=" + encodeURI(queryVal))
            },
            showMobileSearch: function() {
                this.$el.addClass("expanded"), this.cached.$input.focus()
            },
            hideMobileSearch: function() {
                this.cached.$input.blur(), this.$el.removeClass("expanded")
            },
            toggleMobileSearch: function() {
                this.cached.$input.is(":visible") ? this.hideMobileSearch() : this.showMobileSearch()
            },
            render: function() {
                this.cached.$results.html(this.template(this.model.attributes)), null !== this.model.get("data") ? this.cached.$results.show() : this.cached.$results.hide()
            }
        });
        return new SearchView({
            model: new SearchModel,
            el: el || ".search-container"
        })
    }
};
$(document).ready(function() {
    if (window.isMobileSession) {
        {
            var is_scrolling=!1, window_scroll_y = 0;
            $(".mobile-nav-bar").height()
        }
        $(".search-overlay-toggle").click(function() {
            console.log("search overlay toggled"), window_scroll_y = window.scrollY, body_height = $(window).height() + window.scrollY + "px", body_top =- window_scroll_y + "px", $("body").css("height", body_height).css("overflow", "hidden").css("top", body_top).css("position", "absolute").css("width", "100%"), $("html").addClass("scroll-fix"), overlay_top = window_scroll_y + "px", overlay_height = $(window).height() + "px", $("#search-overlay").css("top", overlay_top).css("height", overlay_height), $("#search-overlay").fadeIn(), $("#search-overlay input").focus(), $(window).scrollTop(0)
        }), $("#search-overlay .close-btn").click(function() {
            $("#search-overlay").fadeOut(400, function() {
                body_height = $(window).height() + window.scrollY + "px", body_top =- window_scroll_y + "px", $("body").css("height", "auto").css("top", "0px").css("position", "relative"), $(window).scrollTop(window_scroll_y), $("html").removeClass("scroll-fix")
            }), $("#search-overlay input").blur()
        }), $("#search-overlay .search-results-wrap").bind("touchstart", function() {
            is_scrolling=!1
        }), $("#search-overlay .search-results-wrap").bind("touchmove", function() {
            is_scrolling=!0
        }), $("body").delegate("#search-overlay .search-results a", "touchend", function() {
            is_scrolling || (window.location = $(this).attr("href"))
        }), SearchBoxAutocomplete.create("#search-overlay")
    } else
        $("body").delegate(".search-results", "click", function(event) {
            event.stopPropagation()
        }), $("body").click(function() {
            $(".search-results").fadeOut()
        })
}), window.LoginSignupView = window.LoginSignupView || {
    create: function(opts) {
        var LSView = Backbone.View.extend({
            signupSelected: !0,
            buttonTpl: _.template('<button class="btn switch-selection-btn signup<% if (signupSelected) { %> active<% } %>">Signup</button><button class="btn switch-selection-btn login<% if (!signupSelected) { %> active<% } %>">Login</button>'),
            events: {
                "click .switch-selection-btn": "toggleSignup",
                "click .forgot-password-prompt": "showForgotPassword"
            },
            initialize: function(opts) {
                window.AccountForm.create({
                    el: opts.el + " .signup-form-container",
                    isSignup: !1
                }), window.AccountForm.create({
                    el: opts.el + " .login-form-container",
                    isSignup: !0
                });
                var emailField = new NonEmptyField({
                    name: "forgot_password_email"
                });
                new FieldView({
                    model: emailField,
                    el: '.forgot-password-form-container input[name="email"]'
                });
                var ForgotPasswordForm = new FormView({
                    el: ".forgot-password-form-container",
                    replaceSubmitWith: "<div class='password-reset-submitted' style='text-align:center;'><span>Please check your email to complete password recovery</span></div>"
                });
                ForgotPasswordForm.addField(emailField), this.render()
            },
            _showContainer: function(containerSel) {
                this.$el.find(".register-form-container").removeClass("open"), this.$el.find(containerSel).addClass("open")
            },
            toggleDisplay: function(showSignup) {
                this.signupSelected = showSignup;
                var open = showSignup ? ".signup-form-container": ".login-form-container";
                this._showContainer(open), this.render()
            },
            toggleSignup: function(evt) {
                this.toggleDisplay($(evt.currentTarget).hasClass("signup"))
            },
            showForgotPassword: function() {
                this._showContainer(".forgot-password-form-container")
            },
            render: function() {
                this.$el.find(".toggle-signup-container").html(this.buttonTpl({
                    signupSelected: this.signupSelected
                }))
            }
        });
        return new LSView(opts)
    }
}, $(document).ready(function() {
    window.LSView = window.LoginSignupView.create({
        el: ".signup-popup"
    });
    var NavBarView = Backbone.View.extend({
        el: ".nav-bar-container",
        events: {
            "click .account-button": "toggleLS"
        },
        toggleLS: function(evt) {
            var $btn = $(evt.currentTarget);
            window.LSView.toggleDisplay("signup" === $btn.data("accountType"))
        }
    });
    new NavBarView({}), $.ajaxSetup({
        cache: !0
    }), $.getScript("//connect.facebook.net/en_UK/all.js", function() {
        FB.init({
            appId: "379135702119769",
            cookie: !0,
            xfbml: !0,
            version: "v2.0"
        })
    });
    var PromoFieldView = Backbone.View.extend({
        events: {
            change: "onChange",
            keyup: "onChange"
        },
        initialize: function() {
            this.model.on("change:valid", this.displayValidationFeedback, this)
        },
        onChange: function() {
            this.model.set({
                val: this.$el.val()
            })
        },
        displayValidationFeedback: function() {
            this.model.get("valid") ? this.$el.removeClass("error").addClass("success") : this.$el.removeClass("success").addClass("error")
        }
    }), PromoEmailFieldModel = new FieldModel({
        rules: [{
            fn: function(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
                return re.test(email)
            }
        }
        ]
    }), PromoPasswordFieldModel = new FieldModel({
        rules: [{
            fn: function(password) {
                return this.notEmpty(password)
            }
        }
        ]
    }), PromoView = (new PromoFieldView({
        model: PromoEmailFieldModel,
        el: '#email-capture-modal input[name="email"]'
    }), new PromoFieldView({
        model: PromoPasswordFieldModel,
        el: '#email-capture-modal input[name="password"]'
    }), Backbone.View.extend({
        el: "#email-capture-modal",
        step: 1,
        email: PromoEmailFieldModel,
        password: PromoPasswordFieldModel,
        events: {
            "click .signup-btn": "signup",
            click: "clicked",
            "keyup input": "keypressHandler",
            "click .close-btn": "closeModal"
        },
        initialize: function() {
            $("body").click(function() {})
        },
        clicked: function(event) {
            event.stopPropagation()
        },
        closeModal: function() {
            this.email.validate() ? (console.log("has valid email"), this.password.validate() || (console.log("no valid password"), this.$("form input[name='password']").val("default-password")), this.executeSignupRequest()) : (console.log("no valid email"), this.hide())
        },
        keypressHandler: function(event) {
            var ENTER = 13, keycode = event.keyCode;
            keycode == ENTER && this.submitForm()
        },
        signup: function(event) {
            event.stopPropagation(), this.submitForm()
        },
        submitForm: function() {
            if (1 == this.step) {
                if (this.email.validate()) {
                    var _this = this;
                    this.trackOptimizelyEvent("email_entered"), this.$("input[name='email']").fadeOut(400, function() {
                        _this.$("input[name='password']").fadeIn(), _this.$("input[name='password']").focus()
                    }), this.step = 2
                }
            } else
                this.password.validate() && (this.trackOptimizelyEvent("password_entered"), this.executeSignupRequest())
        },
        executeSignupRequest: function() {
            var _this = this, action_url = this.$("form").attr("action"), email = this.$("form input[name='email']").val();
            this.$("form input[name='name']").val(email);
            var params = this.$("form").serialize();
            $.post(action_url, params, function() {
                _this.trackOptimizelyEvent("signup_complete");
                var redirect_url = window.location.origin + window.location.pathname;
                window.location = redirect_url
            }, "json"), this.$el.fadeOut()
        },
        trackOptimizelyEvent: function(event_name) {
            if (console.log("trackOptimizelyEvent"), window.optimizely = window.optimizely || [], null != CookieManager.readCookie("optimizely_experiment_id")) {
                var experiment_id = CookieManager.readCookie("optimizely_experiment_id"), variation_id = CookieManager.readCookie("optimizely_variation_id");
                window.optimizely.push(["bucketVisitor", experiment_id, variation_id]), window.optimizely.push(["trackEvent", event_name]), console.log("optimizely signup event pushed")
            }
        },
        hide: function() {
            this.$el.fadeOut()
        },
        show: function() {
            this.$el.fadeIn()
        }
    }));
    window.promoView = new PromoView({})
});
var NavBarMobile = window.NavBarMobile || {
    created: !1,
    searchBox: null,
    create: function() {
        return this.created || (this.searchBox = SearchBoxAutocomplete.create(".mobile-nav-bar"), this.created=!0), this
    }
};
$(document).ready(function() {
    $(".mobile-nav-bar .nav-toggle").click(function(event) {
        event.stopPropagation(), $(".mobile-nav-bar .dropdown-container").slideToggle()
    }), $("body").click(function() {
        $(".mobile-nav-bar .dropdown-container").slideUp()
    })
}), !function(a, b) {
    "object" == typeof exports ? module.exports = b().snabbt : "function" == typeof define && define.amd ? define([], function() {
        return a.returnExportsGlobal = b().snabbt
    }) : a.snabbt = b().snabbt
}(this, function() {
    var a = a || {};
    a.Animation = function(b) {
        this._startState = b.startState, this._endState = b.endState, this.offset = b.offset, this.duration = b.duration || 500, this.delay = b.delay || 0, this.easing = a.createEaser("linear"), this.perspective = b.perspective, b.easing && (this.easing = a.createEaser(b.easing, b)), this._currentState = this._startState.clone(), b.offset && (this._currentState.offsetX = this.offset[0], this._currentState.offsetY = this.offset[1], this._currentState.offsetZ = this.offset[2], this._endState.offsetX = this.offset[0], this._endState.offsetY = this.offset[1], this._endState.offsetZ = this.offset[2]), this.startTime = 0, this.currentTime = 0, this._stopped=!1
    }, a.Animation.prototype.stop = function() {
        this._stopped=!0
    }, a.Animation.prototype.stopped = function() {
        return this._stopped
    }, a.Animation.prototype.tick = function(a) {
        if (!this._stopped) {
            this.startTime || (this.startTime = a), a - this.startTime > this.delay && (this.currentTime = a - this.delay);
            var b = Math.min(Math.max(0, this.currentTime - this.startTime), this.duration), c = this.duration;
            this.easing.tick(b / c), this.updateCurrentTransform()
        }
    }, a.Animation.prototype.currentState = function() {
        return this._currentState
    }, a.Animation.prototype.updateCurrentTransform = function() {
        var b = this.easing.value();
        a.TweenStates(this._startState, this._endState, this._currentState, b)
    }, a.Animation.prototype.completed = function() {
        return this._stopped?!0 : 0 === this.startTime?!1 : this.easing.completed()
    }, a.Animation.prototype.updateElement = function(b) {
        var c = this._currentState.asMatrix(), d = this._currentState.properties();
        a.updateElementTransform(b, c, this.perspective), a.updateElementProperties(b, d)
    }, a.ValueFeededAnimation = function(b) {
        this.valueFeeder = b.valueFeeder, this.duration = b.duration || 500, this.delay = b.delay || 0, this.perspective = b.perspective, this.easing = a.createEaser("linear"), b.easing && (this.easing = a.createEaser(b.easing, b)), this._currentState = new a.State({}), this.currentMatrix = this.valueFeeder(0, new a.Matrix), this.startTime = 0, this.currentTime = 0, this._stopped=!1
    }, a.ValueFeededAnimation.prototype.stop = function() {
        this._stopped=!0
    }, a.ValueFeededAnimation.prototype.stopped = function() {
        return this._stopped
    }, a.ValueFeededAnimation.prototype.tick = function(a) {
        if (!this._stopped) {
            this.startTime || (this.startTime = a), a - this.startTime > this.delay && (this.currentTime = a - this.delay);
            var b = Math.min(Math.max(.001, this.currentTime - this.startTime), this.duration), c = this.duration;
            this.easing.tick(b / c), this.updateCurrentTransform()
        }
    }, a.ValueFeededAnimation.prototype.currentState = function() {
        return this._currentState
    }, a.ValueFeededAnimation.prototype.updateCurrentTransform = function() {
        var a = this.easing.value();
        this.currentMatrix.clear(), this.currentMatrix = this.valueFeeder(a, this.currentMatrix)
    }, a.ValueFeededAnimation.prototype.completed = function() {
        return this._stopped?!0 : this.easing.completed()
    }, a.ValueFeededAnimation.prototype.updateElement = function(b) {
        a.updateElementTransform(b, this.currentMatrix.data, this.perspective)
    }, a.AttentionAnimation = function(b) {
        this.movement = b.movement, this.currentMovement = new a.State({}), b.initialVelocity = .1, b.equilibriumPosition = 0, this.spring = new a.SpringEasing(b), this._stopped=!1
    }, a.AttentionAnimation.prototype.stop = function() {
        this._stopped=!0
    }, a.AttentionAnimation.prototype.stopped = function() {
        return this._stopped
    }, a.AttentionAnimation.prototype.tick = function() {
        this._stopped || this.spring.equilibrium || (this.spring.tick(), this.updateMovement())
    }, a.AttentionAnimation.prototype.updateMovement = function() {
        this.currentMovement.x = this.movement.x * this.spring.position, this.currentMovement.y = this.movement.y * this.spring.position, this.currentMovement.z = this.movement.z * this.spring.position, this.currentMovement.ax = this.movement.ax * this.spring.position, this.currentMovement.ay = this.movement.ay * this.spring.position, this.currentMovement.az = this.movement.az * this.spring.position, this.currentMovement.bx = this.movement.bx * this.spring.position, this.currentMovement.by = this.movement.by * this.spring.position, this.currentMovement.bz = this.movement.bz * this.spring.position
    }, a.AttentionAnimation.prototype.updateElement = function(b) {
        var c = this.currentMovement.asMatrix(), d = this.currentMovement.properties();
        a.updateElementTransform(b, c), a.updateElementProperties(b, d)
    }, a.AttentionAnimation.prototype.currentState = function() {
        return this.currentMovement
    }, a.AttentionAnimation.prototype.completed = function() {
        return this.spring.equilibrium || this._stopped
    }, a.createAnimation = function(b) {
        return b.valueFeeder ? new a.ValueFeededAnimation(b) : new a.Animation(b)
    };
    var a = a || {};
    a.linearEasing = function(a) {
        return a
    }, a.ease = function(a) {
        return (Math.cos(a * Math.PI + Math.PI) + 1) / 2
    }, a.easeIn = function(a) {
        return a * a
    }, a.easeOut = function(a) {
        return - Math.pow(a - 1, 2) + 1
    }, a.SpringEasing = function(b) {
        this.position = a.optionOrDefault(b.startPosition, 0), this.equilibriumPosition = a.optionOrDefault(b.equilibriumPosition, 1), this.velocity = a.optionOrDefault(b.initialVelocity, 0), this.springConstant = a.optionOrDefault(b.springConstant, .8), this.deacceleration = a.optionOrDefault(b.springDeacceleration, .9), this.mass = a.optionOrDefault(b.springMass, 10), this.equilibrium=!1
    }, a.SpringEasing.prototype.tick = function(a) {
        if (0 !== a&&!this.equilibrium) {
            var b =- (this.position - this.equilibriumPosition) * this.springConstant, c = b / this.mass;
            this.velocity += c, this.position += this.velocity, this.velocity*=this.deacceleration, Math.abs(this.position - this.equilibriumPosition) < .001 && Math.abs(this.velocity) < .001 && (this.equilibrium=!0)
        }
    }, a.SpringEasing.prototype.value = function() {
        return this.position
    }, a.SpringEasing.prototype.completed = function() {
        return this.equilibrium
    }, a.EASING_FUNCS = {
        linear: a.linearEasing,
        ease: a.ease,
        easeIn: a.easeIn,
        easeOut: a.easeOut
    }, a.Easer = function(a) {
        this.easer = a, this._value = 0
    }, a.Easer.prototype.tick = function(a) {
        this._value = this.easer(a), this.lastValue = a
    }, a.Easer.prototype.value = function() {
        return this._value
    }, a.Easer.prototype.completed = function() {
        return this.lastValue >= 1
    }, a.createEaser = function(b, c) {
        if ("spring" == b)
            return new a.SpringEasing(c);
        var d;
        return d = a.isFunction(b) ? b : a.EASING_FUNCS[b], new a.Easer(d)
    }, window.jQuery&&!function(b) {
        b.fn.snabbt = function(b, c) {
            return a.snabbt(this.get(), b, c)
        }
    }(jQuery);
    var a = a || {};
    a.snabbt = function(b, c, d) {
        var e = b;
        if (e.hasOwnProperty("length")) {
            for (var f = {
                chainers: [],
                then: function(a) {
                    for (var b = 0; b < this.chainers.length; ++b)
                        this.chainers[b].then(a);
                    return f
                }
            }, g = 0; g < e.length; ++g)
                f.chainers.push(a.snabbtSingleElement(e[g], c, d));
            return f
        }
        return a.snabbtSingleElement(e, c, d)
    }, a.snabbtSingleElement = function(b, c, d) {
        function e(b) {
            return k.tick(b), k.updateElement(f), k.stopped() ? void 0 : k.completed() ? void(g.loop > 1&&!k.stopped() ? (g.loop -= 1, k = a.createAnimation(j), a.requestAnimationFrame(e)) : (g.callback && g.callback(), l.length && (g = l.pop(), h = a.stateFromFromOptions(i, g), i = a.stateFromOptions(new a.State({}), g), a.setupAnimationOptions(h, i, g), k = new a.Animation(g), a.runningAnimations.push([f, k]), k.tick(b), a.requestAnimationFrame(e)))) : a.requestAnimationFrame(e)
        }
        if ("attention" === c)
            return a.setupAttentionAnimation(b, d);
        if ("stop" === c)
            return a.stopAnimation(b);
        var f = b, g = c;
        a.clearOphanedEndStates();
        var h = a.currentAnimationState(f);
        h = a.stateFromFromOptions(h, g);
        var i = new a.State({});
        i = a.stateFromOptions(i, g);
        var j = a.setupAnimationOptions(h, i, g), k = a.createAnimation(j);
        a.runningAnimations.push([f, k]), k.updateElement(f);
        var l = [], m = {
            then: function(a) {
                return l.unshift(a), m
            }
        };
        return a.requestAnimationFrame(e), m
    }, a.setupAttentionAnimation = function(b, c) {
        function d(c) {
            f.tick(c), f.updateElement(b), f.completed() || a.requestAnimationFrame(d)
        }
        var e = a.stateFromOptions(new a.State({}), c);
        c.movement = e;
        var f = new a.AttentionAnimation(c);
        a.runningAnimations.push([b, f]), a.requestAnimationFrame(d)
    }, a.stopAnimation = function(b) {
        for (var c = 0; c < a.runningAnimations.length; ++c) {
            var d = a.runningAnimations[c][0], e = a.runningAnimations[c][1];
            d === b && e.stop()
        }
    }, a.findAnimationState = function(a, b) {
        for (var c = 0; c < a.length; ++c) {
            var d = a[c][0], e = a[c][1];
            if (d === b)
                return state = e.currentState(), e.stop(), state
        }
    }, a.currentAnimationState = function(b) {
        var c = a.findAnimationState(a.runningAnimations, b);
        return c ? c : a.findAnimationState(a.completedAnimations, b)
    }, a.stateFromOptions = function(b, c) {
        return b || (b = new a.State({})), c.position && (b.x = c.position[0], b.y = c.position[1], b.z = c.position[2]), c.rotation && (b.ax = c.rotation[0], b.ay = c.rotation[1], b.az = c.rotation[2]), c.skew && (b.skewX = c.skew[0], b.skewY = c.skew[1]), c.rotationPost && (b.bx = c.rotationPost[0], b.by = c.rotationPost[1], b.bz = c.rotationPost[2]), c.scale && (b.sx = c.scale[0], b.sy = c.scale[1]), void 0 !== c.width && (b.width = c.width), void 0 !== c.height && (b.height = c.height), void 0 !== c.opacity && (b.opacity = c.opacity), b
    }, a.stateFromFromOptions = function(b, c) {
        return b || (b = new a.State({})), c.fromPosition && (b.x = c.fromPosition[0], b.y = c.fromPosition[1], b.z = c.fromPosition[2]), c.fromRotation && (b.ax = c.fromRotation[0], b.ay = c.fromRotation[1], b.az = c.fromRotation[2]), c.fromSkew && (b.skewX = c.fromSkew[0], b.skewY = c.fromSkew[1]), c.fromRotationPost && (b.bx = c.fromRotationPost[0], b.by = c.fromRotationPost[1], b.bz = c.fromRotationPost[2]), c.fromScale && (b.sx = c.fromScale[0], b.sy = c.fromScale[1]), void 0 !== c.fromWidth && (b.width = c.fromWidth), void 0 !== c.fromHeight && (b.height = c.fromHeight), void 0 !== c.fromOpacity && (b.opacity = c.fromOpacity), b
    }, a.setupAnimationOptions = function(a, b, c) {
        return c.startState = a, c.endState = b, c
    }, a.tickRequests = [], a.runningAnimations = [], a.completedAnimations = [], a.requestAnimationFrame = function(b) {
        a.tickRequests.push(b)
    }, a.tickAnimations = function(b) {
        for (var c = a.tickRequests.length, d = 0; c > d; ++d)
            a.tickRequests[d](b);
        a.tickRequests.splice(0, c), window.requestAnimationFrame(a.tickAnimations);
        var e = a.runningAnimations.filter(function(a) {
            return a[1].completed()
        });
        a.completedAnimations = a.completedAnimations.filter(function(a) {
            for (var b = 0; b < e.length; ++b)
                if (a[0] === e[b][0])
                    return !1;
            return !0
        }), a.completedAnimations = a.completedAnimations.concat(e), a.runningAnimations = a.runningAnimations.filter(function(a) {
            return !a[1].completed()
        })
    }, a.clearOphanedEndStates = function() {
        a.completedAnimations = a.completedAnimations.filter(function(b) {
            return a.findUltimateAncestor(b[0]).body
        })
    }, a.findUltimateAncestor = function(a) {
        for (var b = a; b.parentNode;)
            b = b.parentNode;
        return b
    }, window.requestAnimationFrame(a.tickAnimations);
    var a = a || {};
    a.assignTranslate = function(a, b, c, d) {
        a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = b, a[13] = c, a[14] = d, a[15] = 1
    }, a.assignRotateX = function(a, b) {
        a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = Math.cos(b), a[6] =- Math.sin(b), a[7] = 0, a[8] = 0, a[9] = Math.sin(b), a[10] = Math.cos(b), a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1
    }, a.assignRotateY = function(a, b) {
        a[0] = Math.cos(b), a[1] = 0, a[2] = Math.sin(b), a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] =- Math.sin(b), a[9] = 0, a[10] = Math.cos(b), a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1
    }, a.assignRotateZ = function(a, b) {
        a[0] = Math.cos(b), a[1] =- Math.sin(b), a[2] = 0, a[3] = 0, a[4] = Math.sin(b), a[5] = Math.cos(b), a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1
    }, a.assignSkew = function(a, b, c) {
        a[0] = 1, a[1] = Math.tan(b), a[2] = 0, a[3] = 0, a[4] = Math.tan(c), a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1
    }, a.assignScale = function(a, b, c) {
        a[0] = b, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = c, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1
    }, a.assignIdentity = function(a) {
        a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1
    }, a.copyArray = function(a, b) {
        b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]
    }, a.Matrix = function() {
        this.data = new Float32Array(16), this.a = new Float32Array(16), this.b = new Float32Array(16), a.assignIdentity(this.data)
    }, a.Matrix.prototype.clear = function() {
        a.assignIdentity(this.data)
    }, a.Matrix.prototype.translate = function(b, c, d) {
        return a.copyArray(this.data, this.a), a.assignTranslate(this.b, b, c, d), a.assignedMatrixMultiplication(this.a, this.b, this.data), this
    }, a.Matrix.prototype.rotateX = function(b) {
        return a.copyArray(this.data, this.a), a.assignRotateX(this.b, b), a.assignedMatrixMultiplication(this.a, this.b, this.data), this
    }, a.Matrix.prototype.rotateY = function(b) {
        return a.copyArray(this.data, this.a), a.assignRotateY(this.b, b), a.assignedMatrixMultiplication(this.a, this.b, this.data), this
    }, a.Matrix.prototype.rotateZ = function(b) {
        return a.copyArray(this.data, this.a), a.assignRotateZ(this.b, b), a.assignedMatrixMultiplication(this.a, this.b, this.data), this
    }, a.Matrix.prototype.scale = function(b, c) {
        return a.copyArray(this.data, this.a), a.assignScale(this.b, b, c), a.assignedMatrixMultiplication(this.a, this.b, this.data), this
    }, a.Matrix.prototype.skew = function(b, c) {
        return a.copyArray(this.data, this.a), a.assignSkew(this.b, b, c), a.assignedMatrixMultiplication(this.a, this.b, this.data), this
    }, a.assignedMatrixMultiplication = function(a, b, c) {
        return c[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12], c[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13], c[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14], c[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15], c[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12], c[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13], c[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14], c[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15], c[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12], c[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13], c[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14], c[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15], c[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12], c[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13], c[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14], c[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15], c
    }, a.matrixToCSS = function(a) {
        for (var b = "matrix3d(", c = 0; c < a.length - 1; ++c)
            b += Math.abs(a[c]) < .01 ? "0," : a[c].toFixed(10) + "0,";
        return b += a[15].toFixed(10) + ")"
    }, a.setCSS = function(b, c) {
        b.style.webkitTransform = a.matrixToCSS(c), b.style.transform = a.matrixTCSS(c)
    }, a.State = function(b) {
        this.ax = a.optionOrDefault(b.ax, 0), this.ay = a.optionOrDefault(b.ay, 0), this.az = a.optionOrDefault(b.az, 0), this.x = a.optionOrDefault(b.x, 0), this.y = a.optionOrDefault(b.y, 0), this.z = a.optionOrDefault(b.z, 0), this.bx = a.optionOrDefault(b.bx, 0), this.by = a.optionOrDefault(b.by, 0), this.bz = a.optionOrDefault(b.bz, 0), this.skewX = a.optionOrDefault(b.skewX, 0), this.skewY = a.optionOrDefault(b.skewY, 0), this.offsetX = a.optionOrDefault(b.offsetX, 0), this.offsetY = a.optionOrDefault(b.offsetY, 0), this.offsetZ = a.optionOrDefault(b.offsetZ, 0), this.sx = a.optionOrDefault(b.sx, 1), this.sy = a.optionOrDefault(b.sy, 1), this.width = b.width, this.height = b.height, this.opacity = a.optionOrDefault(b.opacity, 1)
    }, a.State.prototype.clone = function() {
        var b = new a.State({
            ax: this.ax,
            ay: this.ay,
            az: this.az,
            x: this.x,
            y: this.y,
            z: this.z,
            bx: this.bx,
            by: this.by,
            bz: this.bz,
            skewX: this.skewX,
            skewY: this.skewY,
            sx: this.sx,
            sy: this.sy,
            height: this.height,
            width: this.width,
            opacity: this.opacity
        });
        return b
    }, a.State.prototype.assign = function(a) {
        this.ax = a.ax, this.ay = a.ay, this.az = a.az, this.x = a.x, this.y = a.y, this.z = a.z, this.bx = a.bx, this.by = a.by, this.bz = a.bz, this.skewX = a.skewX, this.skewY = a.skewY, this.sx = a.sx, this.sy = a.sy, this.opacity = a.opacity, this.height = this.height, this.width = this.width
    }, a.State.prototype.asMatrix = function() {
        var b = new a.Matrix;
        return b.translate(this.offsetX, this.offsetY, this.offsetZ), b.scale(this.sx, this.sy), b.skew(this.skewX, this.skewY), b.rotateX(this.ax), b.rotateY(this.ay), b.rotateZ(this.az), b.translate(this.x, this.y, this.z), b.rotateX(this.bx), b.rotateY(this.by), b.rotateZ(this.bz), b.data
    }, a.State.prototype.properties = function() {
        return {
            opacity: this.opacity,
            width: this.width + "px",
            height: this.height + "px"
        }
    };
    var a = a || {};
    a.TweenStates = function(a, b, c, d) {
        var e = b.x - a.x, f = b.y - a.y, g = b.z - a.z, h = b.ax - a.ax, i = b.ay - a.ay, j = b.az - a.az, k = b.bx - a.bx, l = b.by - a.by, m = b.bz - a.bz, n = b.sx - a.sx, o = b.sy - a.sy, p = b.skewX - a.skewX, q = b.skewY - a.skewY, r = b.width - a.width, s = b.height - a.height, t = b.opacity - a.opacity;
        c.ax = a.ax + d * h, c.ay = a.ay + d * i, c.az = a.az + d * j, c.x = a.x + d * e, c.y = a.y + d * f, c.z = a.z + d * g, c.bx = a.bx + d * k, c.by = a.by + d * l, c.bz = a.bz + d * m, c.skewX = a.skewX + d * p, c.skewY = a.skewY + d * q, c.sx = a.sx + d * n, c.sy = a.sy + d * o, void 0 !== b.width && (c.width = a.width + d * r), void 0 !== b.height && (c.height = a.height + d * s), void 0 !== b.opacity && (c.opacity = a.opacity + d * t)
    };
    var a = a || {};
    return a.optionOrDefault = function(a, b) {
        return "undefined" == typeof a ? b : a
    }, a.updateElementTransform = function(b, c, d) {
        var e = "";
        d && (e = "perspective(" + d + "px) "), b.style.webkitTransform = e + a.matrixToCSS(c), b.style.transform = e + a.matrixToCSS(c)
    }, a.updateElementProperties = function(a, b) {
        for (var c in b)
            a.style[c] = b[c]
    }, a.isFunction = function(a) {
        return "function" == typeof a
    }, a
});
