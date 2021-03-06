/*!
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2013 Happyworm Ltd
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 * Author: Mark J Panaghiston
 * Version: 2.4.0
 * Date: 5th June 2013
 */
/*!
 * jQuery Mobile v1.3.1
 * http://jquerymobile.com
 *
 * Copyright 2010, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
/*!
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\
*/
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
/*!
 HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
! function(a, b) {
    function c(a) {
        var b = a.length,
            c = ka.type(a);
        return ka.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    function d(a) {
        var b = za[a] = {};
        return ka.each(a.match(ma) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    function e(a, c, d, e) {
        if (ka.acceptData(a)) {
            var f, g, h = ka.expando,
                i = a.nodeType,
                j = i ? ka.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = ba.pop() || ka.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: ka.noop
            }), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = ka.extend(j[k], c) : j[k].data = ka.extend(j[k].data, c)), g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[ka.camelCase(c)] = d), "string" == typeof c ? (f = g[c], null == f && (f = g[ka.camelCase(c)])) : f = g, f
        }
    }
    function f(a, b, c) {
        if (ka.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? ka.cache : a,
                i = f ? a[ka.expando] : ka.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    ka.isArray(b) ? b = b.concat(ka.map(b, ka.camelCase)) : b in d ? b = [b] : (b = ka.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !h(d) : !ka.isEmptyObject(d)) return
                }(c || (delete g[i].data, h(g[i]))) && (f ? ka.cleanData([a], !0) : ka.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
            }
        }
    }
    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Ba, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Aa.test(d) ? ka.parseJSON(d) : d
                } catch (f) {}
                ka.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var b;
        for (b in a) if (("data" !== b || !ka.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }
    function i() {
        return !0
    }
    function j() {
        return !1
    }
    function k() {
        try {
            return Y.activeElement
        } catch (a) {}
    }
    function l(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    function m(a, b, c) {
        if (ka.isFunction(b)) return ka.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return ka.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Qa.test(b)) return ka.filter(b, a, c);
            b = ka.filter(b, a)
        }
        return ka.grep(a, function(a) {
            return ka.inArray(a, b) >= 0 !== c
        })
    }
    function n(a) {
        var b = Ua.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) for (; b.length;) c.createElement(b.pop());
        return c
    }
    function o(a, b) {
        return ka.nodeName(a, "table") && ka.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function p(a) {
        return a.type = (null !== ka.find.attr(a, "type")) + "/" + a.type, a
    }
    function q(a) {
        var b = eb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ka._data(c, "globalEval", !b || ka._data(b[d], "globalEval"))
    }
    function s(a, b) {
        if (1 === b.nodeType && ka.hasData(a)) {
            var c, d, e, f = ka._data(a),
                g = ka._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) ka.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ka.extend({}, g.data))
        }
    }
    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ka.support.noCloneEvent && b[ka.expando]) {
                e = ka._data(b);
                for (d in e.events) ka.removeEvent(b, d, e.handle);
                b.removeAttribute(ka.expando)
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ka.support.html5Clone && a.innerHTML && !ka.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    function u(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g) for (g = [], d = a.childNodes || a; null != (e = d[f]); f++)!c || ka.nodeName(e, c) ? g.push(e) : ka.merge(g, u(e, c));
        return c === b || c && ka.nodeName(a, c) ? ka.merge([a], g) : g
    }
    function v(a) {
        bb.test(a.type) && (a.defaultChecked = a.checked)
    }
    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yb.length; e--;) if (b = yb[e] + c, b in a) return b;
        return d
    }
    function x(a, b) {
        return a = b || a, "none" === ka.css(a, "display") || !ka.contains(a.ownerDocument, a)
    }
    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ka._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = ka._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && ka._data(d, "olddisplay", e ? c : ka.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function z(a, b, c) {
        var d = rb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ka.css(a, c + xb[f], !0, e)), d ? ("content" === c && (g -= ka.css(a, "padding" + xb[f], !0, e)), "margin" !== c && (g -= ka.css(a, "border" + xb[f] + "Width", !0, e))) : (g += ka.css(a, "padding" + xb[f], !0, e), "padding" !== c && (g += ka.css(a, "border" + xb[f] + "Width", !0, e)));
        return g
    }
    function B(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = kb(a),
            g = ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lb(a, b, f), (0 > e || null == e) && (e = a.style[b]), sb.test(e)) return e;
            d = g && (ka.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function C(a) {
        var b = Y,
            c = ub[a];
        return c || (c = D(a, b), "none" !== c && c || (jb = (jb || ka("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jb[0].contentWindow || jb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jb.detach()), ub[a] = c), c
    }
    function D(a, b) {
        var c = ka(b.createElement(a)).appendTo(b.body),
            d = ka.css(c[0], "display");
        return c.remove(), d
    }
    function E(a, b, c, d) {
        var e;
        if (ka.isArray(b)) ka.each(b, function(b, e) {
            c || Ab.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ka.type(b)) d(a, b);
        else for (e in b) E(a + "[" + e + "]", b[e], c, d)
    }
    function F(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ma) || [];
            if (ka.isFunction(c)) for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function G(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, ka.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
            }), j
        }
        var g = {}, h = a === Rb;
        return f(c.dataTypes[0]) || !g["*"] && f("*")
    }
    function H(a, c) {
        var d, e, f = ka.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && ka.extend(!0, a, d), a
    }
    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes;
        "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break
        }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }
    function J(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    function K() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function M() {
        return setTimeout(function() {
            $b = b
        }), $b = ka.now()
    }
    function N(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function O(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = ka.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $b || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: ka.extend({}, b),
                opts: ka.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || M(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = ka.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++) if (d = dc[f].call(j, a, k, j.opts)) return d;
        return ka.map(k, N, j), ka.isFunction(j.opts.start) && j.opts.start.call(a, j), ka.fx.timer(ka.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function P(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = ka.camelCase(c), e = b[d], f = a[c], ka.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ka.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this,
            k = {}, l = a.style,
            m = a.nodeType && x(a),
            n = ka._data(a, "fxshow");
        c.queue || (h = ka._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--, ka.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === ka.css(a, "display") && "none" === ka.css(a, "float") && (ka.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), c.overflow && (l.overflow = "hidden", ka.support.shrinkWrapBlocks || j.always(function() {
            l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], ac.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
            k[d] = n && n[d] || ka.style(a, d)
        }
        if (!ka.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = ka._data(a, "fxshow", {}), f && (n.hidden = !m), m ? ka(a).show() : j.done(function() {
                ka(a).hide()
            }), j.done(function() {
                var b;
                ka._removeData(a, "fxshow");
                for (b in k) ka.style(a, b, k[b])
            });
            for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e)
    }
    function S(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function T(a) {
        return ka.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var U, V, W = typeof b,
        X = a.location,
        Y = a.document,
        Z = Y.documentElement,
        $ = a.jQuery,
        _ = a.$,
        aa = {}, ba = [],
        ca = "1.10.1",
        da = ba.concat,
        ea = ba.push,
        fa = ba.slice,
        ga = ba.indexOf,
        ha = aa.toString,
        ia = aa.hasOwnProperty,
        ja = ca.trim,
        ka = function(a, b) {
            return new ka.fn.init(a, b, V)
        }, la = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ma = /\S+/g,
        na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        pa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        qa = /^[\],:{}\s]*$/,
        ra = /(?:^|:|,)(?:\s*\[)+/g,
        sa = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ta = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ua = /^-ms-/,
        va = /-([\da-z])/gi,
        wa = function(a, b) {
            return b.toUpperCase()
        }, xa = function(a) {
            (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (ya(), ka.ready())
        }, ya = function() {
            Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xa, !1), a.removeEventListener("load", xa, !1)) : (Y.detachEvent("onreadystatechange", xa), a.detachEvent("onload", xa))
        };
    ka.fn = ka.prototype = {
        jquery: ca,
        constructor: ka,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : oa.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof ka ? c[0] : c, ka.merge(this, ka.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), pa.test(e[1]) && ka.isPlainObject(c)) for (e in c) ka.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                if (f = Y.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = Y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ka.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ka.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return fa.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            var b = ka.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return ka.each(this, a, b)
        },
        ready: function(a) {
            return ka.ready.promise().done(a), this
        },
        slice: function() {
            return this.pushStack(fa.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function(a) {
            return this.pushStack(ka.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ea,
        sort: [].sort,
        splice: [].splice
    }, ka.fn.init.prototype = ka.fn, ka.extend = ka.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ka.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ka.isPlainObject(d) || (c = ka.isArray(d))) ? (c ? (c = !1, g = a && ka.isArray(a) ? a : []) : g = a && ka.isPlainObject(a) ? a : {}, h[e] = ka.extend(k, g, d)) : d !== b && (h[e] = d));
        return h
    }, ka.extend({
        expando: "jQuery" + (ca + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === ka && (a.$ = _), b && a.jQuery === ka && (a.jQuery = $), ka
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ka.readyWait++ : ka.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--ka.readyWait : !ka.isReady) {
                if (!Y.body) return setTimeout(ka.ready);
                ka.isReady = !0, a !== !0 && --ka.readyWait > 0 || (U.resolveWith(Y, [ka]), ka.fn.trigger && ka(Y).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === ka.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === ka.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ha.call(a)] || "object" : typeof a
        },
        isPlainObject: function(a) {
            var c;
            if (!a || "object" !== ka.type(a) || a.nodeType || ka.isWindow(a)) return !1;
            try {
                if (a.constructor && !ia.call(a, "constructor") && !ia.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            if (ka.support.ownLast) for (c in a) return ia.call(a, c);
            for (c in a);
            return c === b || ia.call(a, c)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw Error(a)
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Y;
            var d = pa.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ka.buildFragment([a], b, e), e && ka(e).remove(), ka.merge([], d.childNodes))
        },
        parseJSON: function(c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = ka.trim(c), c && qa.test(c.replace(sa, "@").replace(ta, "]").replace(ra, ""))) ? Function("return " + c)() : (ka.error("Invalid JSON: " + c), b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ka.error("Invalid XML: " + c), d
        },
        noop: function() {},
        globalEval: function(b) {
            b && ka.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(ua, "ms-").replace(va, wa)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: ja && !ja.call("\ufeff ") ? function(a) {
            return null == a ? "" : ja.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(na, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ka.merge(d, "string" == typeof a ? [a] : a) : ea.call(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (ga) return ga.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
            else for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !! c; g > f; f++) d = !! b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h) for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
            else for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
            return da.apply([], i)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), ka.isFunction(a) ? (d = fa.call(arguments, 2), e = function() {
                return a.apply(c || this, d.concat(fa.call(arguments)))
            }, e.guid = a.guid = a.guid || ka.guid++, e) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === ka.type(d)) {
                f = !0;
                for (i in d) ka.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, ka.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                return k.call(ka(a), c)
            })), c)) for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }), ka.ready.promise = function(b) {
        if (!U) if (U = ka.Deferred(), "complete" === Y.readyState) setTimeout(ka.ready);
        else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xa, !1), a.addEventListener("load", xa, !1);
        else {
            Y.attachEvent("onreadystatechange", xa), a.attachEvent("onload", xa);
            var c = !1;
            try {
                c = null == a.frameElement && Y.documentElement
            } catch (d) {}
            c && c.doScroll && function e() {
                if (!ka.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    ya(), ka.ready()
                }
            }()
        }
        return U.promise(b)
    }, ka.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        aa["[object " + b + "]"] = b.toLowerCase()
    }), V = ka(Y),
    function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n;
            if ((b ? b.ownerDocument || b : S) !== K && J(b), b = b || K, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (M && !d) {
                if (e = xa.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && Q(b, f) && f.id === g) return c.push(f), c
                } else {
                    if (e[2]) return ea.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && B.getElementsByClassName && b.getElementsByClassName) return ea.apply(c, b.getElementsByClassName(g)), c
                }
                if (B.qsa && (!N || !N.test(a))) {
                    if (l = k = R, m = b, n = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = p(a), (k = b.getAttribute("id")) ? l = k.replace(Aa, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + q(j[i]);
                        m = ra.test(a) && b.parentNode || b, n = j.join(",")
                    }
                    if (n) try {
                        return ea.apply(c, m.querySelectorAll(n)), c
                    } catch (o) {} finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return y(a.replace(oa, "$1"), b, c, d)
        }
        function d(a) {
            return wa.test(a + "")
        }
        function e() {
            function a(c, d) {
                return b.push(c += " ") > D.cacheLength && delete a[b.shift()], a[c] = d
            }
            var b = [];
            return a
        }
        function f(a) {
            return a[R] = !0, a
        }
        function g(a) {
            var b = K.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function h(a, b, c) {
            a = a.split("|");
            for (var d, e = a.length, f = c ? null : b; e--;)(d = D.attrHandle[a[e]]) && d !== b || (D.attrHandle[a[e]] = f)
        }
        function i(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : a[b] === !0 ? b.toLowerCase() : null
        }
        function j(a, b) {
            return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }
        function k(a) {
            return "input" === a.nodeName.toLowerCase() ? a.defaultValue : b
        }
        function l(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || _) - (~a.sourceIndex || _);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }
        function m(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function n(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function o(a) {
            return f(function(b) {
                return b = +b, f(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function p(a, b) {
            var d, e, f, g, h, i, j, k = W[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = D.preFilter; h;) {
                (!d || (e = pa.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = qa.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(oa, " ")
                }), h = h.slice(d.length));
                for (g in D.filter)!(e = va[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return b ? h.length : h ? c.error(a) : W(a, i).slice(0)
        }
        function q(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function r(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = U++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = T + " " + f;
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || e) if (j = b[R] || (b[R] = {}), (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === C) return h === !0
                } else if (i = j[d] = [k], i[1] = a(b, c, g) || C, i[1] === !0) return !0
            }
        }
        function s(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }
        function t(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function u(a, b, c, d, e, g) {
            return d && !d[R] && (d = u(d)), e && !e[R] && (e = u(e, g)), f(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || x(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : t(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = t(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && (j = e ? ga.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = t(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : ea.apply(g, r)
            })
        }
        function v(a) {
            for (var b, c, d, e = a.length, f = D.relative[a[0].type], g = f || D.relative[" "], h = f ? 1 : 0, i = r(function(a) {
                return a === b
            }, g, !0), j = r(function(a) {
                return ga.call(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                return !f && (d || c !== H) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }]; e > h; h++) if (c = D.relative[a[h].type]) k = [r(s(k), c)];
            else {
                if (c = D.filter[a[h].type].apply(null, a[h].matches), c[R]) {
                    for (d = ++h; e > d && !D.relative[a[d].type]; d++);
                    return u(h > 1 && s(k), h > 1 && q(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(oa, "$1"), c, d > h && v(a.slice(h, d)), e > d && v(a = a.slice(d)), e > d && q(a))
                }
                k.push(c)
            }
            return s(k)
        }
        function w(a, b) {
            var d = 0,
                e = b.length > 0,
                g = a.length > 0,
                h = function(f, h, i, j, k) {
                    var l, m, n, o = [],
                        p = 0,
                        q = "0",
                        r = f && [],
                        s = null != k,
                        u = H,
                        v = f || g && D.find.TAG("*", k && h.parentNode || h),
                        w = T += null == u ? 1 : Math.random() || .1;
                    for (s && (H = h !== K && h, C = d); null != (l = v[q]); q++) {
                        if (g && l) {
                            for (m = 0; n = a[m++];) if (n(l, h, i)) {
                                j.push(l);
                                break
                            }
                            s && (T = w, C = ++d)
                        }
                        e && ((l = !n && l) && p--, f && r.push(l))
                    }
                    if (p += q, e && q !== p) {
                        for (m = 0; n = b[m++];) n(r, o, h, i);
                        if (f) {
                            if (p > 0) for (; q--;) r[q] || o[q] || (o[q] = ca.call(j));
                            o = t(o)
                        }
                        ea.apply(j, o), s && !f && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                    }
                    return s && (T = w, H = u), r
                };
            return e ? f(h) : h
        }
        function x(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d
        }
        function y(a, b, c, d) {
            var e, f, g, h, i, j = p(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && B.getById && 9 === b.nodeType && M && D.relative[f[1].type]) {
                    if (b = (D.find.ID(g.matches[0].replace(Ba, Ca), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = va.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !D.relative[h = g.type]);) if ((i = D.find[h]) && (d = i(g.matches[0].replace(Ba, Ca), ra.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && q(f), !a) return ea.apply(c, d), c;
                    break
                }
            }
            return G(a, j)(d, b, !M, c, ra.test(a)), c
        }
        function z() {}
        var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R = "sizzle" + -new Date,
            S = a.document,
            T = 0,
            U = 0,
            V = e(),
            W = e(),
            X = e(),
            Y = !1,
            Z = function() {
                return 0
            }, $ = typeof b,
            _ = 1 << 31,
            aa = {}.hasOwnProperty,
            ba = [],
            ca = ba.pop,
            da = ba.push,
            ea = ba.push,
            fa = ba.slice,
            ga = ba.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
                return -1
            }, ha = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ia = "[\\x20\\t\\r\\n\\f]",
            ja = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            la = ja.replace("w", "w#"),
            ma = "\\[" + ia + "*(" + ja + ")" + ia + "*(?:([*^$|!~]?=)" + ia + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + la + ")|)|)" + ia + "*\\]",
            na = ":(" + ja + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ma.replace(3, 8) + ")*)|.*)\\)|)",
            oa = RegExp("^" + ia + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ia + "+$", "g"),
            pa = RegExp("^" + ia + "*," + ia + "*"),
            qa = RegExp("^" + ia + "*([>+~]|" + ia + ")" + ia + "*"),
            ra = RegExp(ia + "*[+~]"),
            sa = RegExp("=" + ia + "*([^\\]'\"]*)" + ia + "*\\]", "g"),
            ta = RegExp(na),
            ua = RegExp("^" + la + "$"),
            va = {
                ID: RegExp("^#(" + ja + ")"),
                CLASS: RegExp("^\\.(" + ja + ")"),
                TAG: RegExp("^(" + ja.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + ma),
                PSEUDO: RegExp("^" + na),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ia + "*(even|odd|(([+-]|)(\\d*)n|)" + ia + "*(?:([+-]|)" + ia + "*(\\d+)|))" + ia + "*\\)|)", "i"),
                bool: RegExp("^(?:" + ha + ")$", "i"),
                needsContext: RegExp("^" + ia + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ia + "*((?:-\\d)?\\d*)" + ia + "*\\)|)(?=[^-]|$)", "i")
            }, wa = /^[^{]+\{\s*\[native \w/,
            xa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ya = /^(?:input|select|textarea|button)$/i,
            za = /^h\d$/i,
            Aa = /'|\\/g,
            Ba = RegExp("\\\\([\\da-f]{1,6}" + ia + "?|(" + ia + ")|.)", "ig"),
            Ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
            };
        try {
            ea.apply(ba = fa.call(S.childNodes), S.childNodes), ba[S.childNodes.length].nodeType
        } catch (Da) {
            ea = {
                apply: ba.length ? function(a, b) {
                    da.apply(a, fa.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        F = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, B = c.support = {}, J = c.setDocument = function(a) {
            var c = a ? a.ownerDocument || a : S,
                e = c.parentWindow;
            return c !== K && 9 === c.nodeType && c.documentElement ? (K = c, L = c.documentElement, M = !F(c), e && e.frameElement && e.attachEvent("onbeforeunload", function() {
                J()
            }), B.attributes = g(function(a) {
                return a.innerHTML = "<a href='#'></a>", h("type|href|height|width", j, "#" === a.firstChild.getAttribute("href")), h(ha, i, null == a.getAttribute("disabled")), a.className = "i", !a.getAttribute("className")
            }), B.input = g(function(a) {
                return a.innerHTML = "<input>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }), h("value", k, B.attributes && B.input), B.getElementsByTagName = g(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), B.getElementsByClassName = g(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), B.getById = g(function(a) {
                return L.appendChild(a).id = R, !c.getElementsByName || !c.getElementsByName(R).length
            }), B.getById ? (D.find.ID = function(a, b) {
                if (typeof b.getElementById !== $ && M) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, D.filter.ID = function(a) {
                var b = a.replace(Ba, Ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete D.find.ID, D.filter.ID = function(a) {
                var b = a.replace(Ba, Ca);
                return function(a) {
                    var c = typeof a.getAttributeNode !== $ && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), D.find.TAG = B.getElementsByTagName ? function(a, c) {
                return typeof c.getElementsByTagName !== $ ? c.getElementsByTagName(a) : b
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, D.find.CLASS = B.getElementsByClassName && function(a, c) {
                return typeof c.getElementsByClassName !== $ && M ? c.getElementsByClassName(a) : b
            }, O = [], N = [], (B.qsa = d(c.querySelectorAll)) && (g(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || N.push("\\[" + ia + "*(?:value|" + ha + ")"), a.querySelectorAll(":checked").length || N.push(":checked")
            }), g(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && N.push("[*^$]=" + ia + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), N.push(",.*:")
            })), (B.matchesSelector = d(P = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && g(function(a) {
                B.disconnectedMatch = P.call(a, "div"), P.call(a, "[s!='']:x"), O.push("!=", na)
            }), N = N.length && RegExp(N.join("|")), O = O.length && RegExp(O.join("|")), Q = d(L.contains) || L.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            }, B.sortDetached = g(function(a) {
                return 1 & a.compareDocumentPosition(c.createElement("div"))
            }), Z = L.compareDocumentPosition ? function(a, b) {
                if (a === b) return Y = !0, 0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !B.sortDetached && b.compareDocumentPosition(a) === d ? a === c || Q(S, a) ? -1 : b === c || Q(S, b) ? 1 : I ? ga.call(I, a) - ga.call(I, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function(a, b) {
                var d, e = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (a === b) return Y = !0, 0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : I ? ga.call(I, a) - ga.call(I, b) : 0;
                if (f === g) return l(a, b);
                for (d = a; d = d.parentNode;) h.unshift(d);
                for (d = b; d = d.parentNode;) i.unshift(d);
                for (; h[e] === i[e];) e++;
                return e ? l(h[e], i[e]) : h[e] === S ? -1 : i[e] === S ? 1 : 0
            }, c) : K
        }, c.matches = function(a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== K && J(a), b = b.replace(sa, "='$1']"), !(!B.matchesSelector || !M || O && O.test(b) || N && N.test(b))) try {
                var d = P.call(a, b);
                if (d || B.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return c(b, K, null, [a]).length > 0
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== K && J(a), Q(a, b)
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== K && J(a);
            var d = D.attrHandle[c.toLowerCase()],
                e = d && aa.call(D.attrHandle, c.toLowerCase()) ? d(a, c, !M) : b;
            return e === b ? B.attributes || !M ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
        }, c.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a)
        }, c.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (Y = !B.detectDuplicates, I = !B.sortStable && a.slice(0), a.sort(Z), Y) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return a
        }, E = c.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += E(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d]; d++) c += E(b);
            return c
        }, D = c.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: va,
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
                    return a[1] = a[1].replace(Ba, Ca), a[3] = (a[4] || a[5] || "").replace(Ba, Ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return va.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && ta.test(d) && (c = p(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(Ba, Ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = V[a + " "];
                    return b || (b = RegExp("(^|" + ia + ")" + a + "(" + ia + "|$)")) && V(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== $ && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[R] || (q[R] = {}), j = k[a] || [], n = j[0] === T && j[1], m = j[0] === T && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [T, n, m];
                                    break
                                }
                            } else if (s && (j = (b[R] || (b[R] = {}))[a]) && j[0] === T) m = j[1];
                            else for (;
                            (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[R] || (l[R] = {}))[a] = [T, m]), l !== b)););
                            return m -= e, m === d || 0 === m % d && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var d, e = D.pseudos[a] || D.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[R] ? e(b) : e.length > 1 ? (d = [a, a, "", b], D.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = ga.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, d)
                    }) : e
                }
            },
            pseudos: {
                not: f(function(a) {
                    var b = [],
                        c = [],
                        d = G(a.replace(oa, "$1"));
                    return d[R] ? f(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: f(function(a) {
                    return function(b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: f(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || E(b)).indexOf(a) > -1
                    }
                }),
                lang: f(function(a) {
                    return ua.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(Ba, Ca).toLowerCase(),
                    function(b) {
                        var c;
                        do if (c = M ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === L
                },
                focus: function(a) {
                    return a === K.activeElement && (!K.hasFocus || K.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !D.pseudos.empty(a)
                },
                header: function(a) {
                    return za.test(a.nodeName)
                },
                input: function(a) {
                    return ya.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: o(function() {
                    return [0]
                }),
                last: o(function(a, b) {
                    return [b - 1]
                }),
                eq: o(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: o(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: o(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: o(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: o(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                    return a
                })
            }
        };
        for (A in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) D.pseudos[A] = m(A);
        for (A in {
            submit: !0,
            reset: !0
        }) D.pseudos[A] = n(A);
        G = c.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = X[a + " "];
            if (!f) {
                for (b || (b = p(a)), c = b.length; c--;) f = v(b[c]), f[R] ? d.push(f) : e.push(f);
                f = X(a, w(e, d))
            }
            return f
        }, D.pseudos.nth = D.pseudos.eq, z.prototype = D.filters = D.pseudos, D.setFilters = new z, B.sortStable = R.split("").sort(Z).join("") === R, J(), [0, 0].sort(Z), B.detectDuplicates = Y, ka.find = c, ka.expr = c.selectors, ka.expr[":"] = ka.expr.pseudos, ka.unique = c.uniqueSort, ka.text = c.getText, ka.isXMLDoc = c.isXML, ka.contains = c.contains
    }(a);
    var za = {};
    ka.Callbacks = function(a) {
        a = "string" == typeof a ? za[a] || d(a) : ka.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++) if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    e = !1;
                    break
                }
                c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
            }, m = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            ka.each(b, function(b, c) {
                                var e = ka.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), c ? g = j.length : e && (i = b, l(e))
                    }
                    return this
                },
                remove: function() {
                    return j && ka.each(arguments, function(a, b) {
                        for (var d;
                        (d = ka.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                    }), this
                },
                has: function(a) {
                    return a ? ka.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function() {
                    return j = [], g = 0, this
                },
                disable: function() {
                    return j = k = e = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, e || m.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], !j || f && !k || (c ? k.push(b) : l(b)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return m
    }, ka.extend({
        Deferred: function(a) {
            var b = [
                ["resolve", "done", ka.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ka.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ka.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return ka.Deferred(function(c) {
                            ka.each(b, function(b, f) {
                                var g = f[0],
                                    h = ka.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && ka.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? ka.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, ka.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = fa.call(arguments),
                g = f.length,
                h = 1 !== g || a && ka.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ka.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? fa.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1) for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && ka.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), ka.support = function(b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, b.htmlSerialize = !! l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), b.cssFloat = !! d.style.cssFloat, b.checkOn = !! e.value, b.optSelected = h.selected, b.enctype = !! Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch (m) {
            b.deleteExpando = !1
        }
        e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in ka(b)) break;
        return b.ownLast = "0" !== k, ka(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ka.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === l.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }), c = f = g = h = d = e = null, b
    }({});
    var Aa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Ba = /([A-Z])/g;
    ka.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? ka.cache[a[ka.expando]] : a[ka.expando], !! a && !h(a)
        },
        data: function(a, b, c) {
            return e(a, b, c)
        },
        removeData: function(a, b) {
            return f(a, b)
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return f(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && ka.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), ka.fn.extend({
        data: function(a, c) {
            var d, e, f = null,
                h = 0,
                i = this[0];
            if (a === b) {
                if (this.length && (f = ka.data(i), 1 === i.nodeType && !ka._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; d.length > h; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = ka.camelCase(e.slice(5)), g(i, e, f[e]));
                    ka._data(i, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                ka.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                ka.data(this, a, c)
            }) : i ? g(i, a, ka.data(i, a)) : null
        },
        removeData: function(a) {
            return this.each(function() {
                ka.removeData(this, a)
            })
        }
    }), ka.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = ka._data(a, c), d && (!e || ka.isArray(d) ? e = ka._data(a, c, ka.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ka.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ka._queueHooks(a, b),
                g = function() {
                    ka.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ka._data(a, c) || ka._data(a, c, {
                empty: ka.Callbacks("once memory").add(function() {
                    ka._removeData(a, b + "queue"), ka._removeData(a, c)
                })
            })
        }
    }), ka.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? ka.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = ka.queue(this, a, c);
                ka._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ka.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                ka.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = ka.fx ? ka.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = ka.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ka._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var Ca, Da, Ea = /[\t\r\n\f]/g,
        Fa = /\r/g,
        Ga = /^(?:input|select|textarea|button|object)$/i,
        Ha = /^(?:a|area)$/i,
        Ia = /^(?:checked|selected)$/i,
        Ja = ka.support.getSetAttribute,
        Ka = ka.support.input;
    ka.fn.extend({
        attr: function(a, b) {
            return ka.access(this, ka.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ka.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return ka.access(this, ka.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = ka.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).addClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(ma) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : " ")) {
                for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = ka.trim(d)
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).removeClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(ma) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                c.className = a ? ka.trim(d) : ""
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return ka.isFunction(a) ? this.each(function(c) {
                ka(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c) for (var e, f = 0, g = ka(this), h = b, i = a.match(ma) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else(c === W || "boolean" === c) && (this.className && ka._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ka._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ea, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = ka.isFunction(a), this.each(function(c) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, c, ka(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ka.isArray(f) && (f = ka.map(f, function(a) {
                    return null == a ? "" : a + ""
                })), d = ka.valHooks[this.type] || ka.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (d = ka.valHooks[f.type] || ka.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Fa, "") : null == c ? "" : c)) : void 0
        }
    }), ka.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = ka.find.attr(a, "value");
                    return null != b ? b : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (ka.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ka.nodeName(c.parentNode, "optgroup"))) {
                        if (b = ka(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ka.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = ka.inArray(ka(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === W ? ka.prop(a, c, d) : (1 === g && ka.isXMLDoc(a) || (c = c.toLowerCase(), e = ka.attrHooks[c] || (ka.expr.match.bool.test(c) ? Da : Ca)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = ka.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (ka.removeAttr(a, c), b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(ma);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = ka.propFix[c] || c, ka.expr.match.bool.test(c) ? Ka && Ja || !Ia.test(c) ? a[d] = !1 : a[ka.camelCase("default-" + c)] = a[d] = !1 : ka.attr(a, c, ""), a.removeAttribute(Ja ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ka.support.radioValue && "radio" === b && ka.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !ka.isXMLDoc(a), g && (c = ka.propFix[c] || c, f = ka.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = ka.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Ga.test(a.nodeName) || Ha.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), Da = {
        set: function(a, b, c) {
            return b === !1 ? ka.removeAttr(a, c) : Ka && Ja || !Ia.test(c) ? a.setAttribute(!Ja && ka.propFix[c] || c, c) : a[ka.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, ka.each(ka.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = ka.expr.attrHandle[c] || ka.find.attr;
        ka.expr.attrHandle[c] = Ka && Ja || !Ia.test(c) ? function(a, c, e) {
            var f = ka.expr.attrHandle[c],
                g = e ? b : (ka.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return ka.expr.attrHandle[c] = f, g
        } : function(a, c, d) {
            return d ? b : a[ka.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    }), Ka && Ja || (ka.attrHooks.value = {
        set: function(a, c, d) {
            return ka.nodeName(a, "input") ? (a.defaultValue = c, b) : Ca && Ca.set(a, c, d)
        }
    }), Ja || (Ca = {
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
        }
    }, ka.expr.attrHandle.id = ka.expr.attrHandle.name = ka.expr.attrHandle.coords = function(a, c, d) {
        var e;
        return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
    }, ka.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value : b
        },
        set: Ca.set
    }, ka.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Ca.set(a, "" === b ? !1 : b, c)
        }
    }, ka.each(["width", "height"], function(a, c) {
        ka.attrHooks[c] = {
            set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b
            }
        }
    })), ka.support.hrefNormalized || ka.each(["href", "src"], function(a, b) {
        ka.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), ka.support.style || (ka.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }), ka.support.optSelected || (ka.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), ka.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ka.propFix[this.toLowerCase()] = this
    }), ka.support.enctype || (ka.propFix.enctype = "encoding"), ka.each(["radio", "checkbox"], function() {
        ka.valHooks[this] = {
            set: function(a, c) {
                return ka.isArray(c) ? a.checked = ka.inArray(ka(a).val(), c) >= 0 : b
            }
        }, ka.support.checkOn || (ka.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var La = /^(?:input|select|textarea)$/i,
        Ma = /^key/,
        Na = /^(?:mouse|contextmenu)|click/,
        Oa = /^(?:focusinfocus|focusoutblur)$/,
        Pa = /^([^.]*)(?:\.(.+)|)$/;
    ka.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = ka._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ka.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                    return typeof ka === W || a && ka.event.triggered === a.type ? b : ka.event.dispatch.apply(l.elem, arguments)
                }, l.elem = a), c = (c || "").match(ma) || [""], i = c.length; i--;) g = Pa.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = ka.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ka.event.special[o] || {}, m = ka.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && ka.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ka.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ka.hasData(a) && ka._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ma) || [""], j = b.length; j--;) if (h = Pa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = ka.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ka.removeEvent(a, n, q.handle), delete k[n])
                } else for (n in k) ka.event.remove(a, n + b[j], c, d, !0);
                ka.isEmptyObject(k) && (delete q.handle, ka._removeData(a, "events"))
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || Y],
                o = ia.call(c, "type") ? c.type : c,
                p = ia.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Oa.test(o + ka.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[ka.expando] ? c : new ka.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ka.makeArray(d, [c]), k = ka.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !ka.isWindow(e)) {
                    for (j = k.delegateType || o, Oa.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0;
                (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ka._data(i, "events") || {})[c.type] && ka._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ka.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && ka.acceptData(e) && h && e[o] && !ka.isWindow(e)) {
                    l = e[h], l && (e[h] = null), ka.event.triggered = o;
                    try {
                        e[o]()
                    } catch (q) {}
                    ka.event.triggered = b, l && (e[h] = l)
                }
                return c.result
            }
        },
        dispatch: function(a) {
            a = ka.event.fix(a);
            var c, d, e, f, g, h = [],
                i = fa.call(arguments),
                j = (ka._data(this, "events") || {})[a.type] || [],
                k = ka.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = ka.event.handlers.call(this, a, j), c = 0;
                (f = h[c++]) && !a.isPropagationStopped();) for (a.currentTarget = f.elem, g = 0;
                (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((ka.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (; j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ka(d, this).index(j) >= 0 : ka.find(d, this, null, [j]).length), f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                })
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        fix: function(a) {
            if (a[ka.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ka.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, g.filter ? g.filter(a, f) : a
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
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === k() && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ka.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                },
                _default: function(a) {
                    return ka.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ka.extend(new ka.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ka.event.trigger(e, null, b) : ka.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, ka.removeEvent = Y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
    }, ka.Event = function(a, c) {
        return this instanceof ka.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, c && ka.extend(this, c), this.timeStamp = a && a.timeStamp || ka.now(), this[ka.expando] = !0, b) : new ka.Event(a, c)
    }, ka.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i, this.stopPropagation()
        }
    }, ka.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        ka.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !ka.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), ka.support.submitBubbles || (ka.event.special.submit = {
        setup: function() {
            return ka.nodeName(this, "form") ? !1 : (ka.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target,
                    d = ka.nodeName(c, "input") || ka.nodeName(c, "button") ? c.form : b;
                d && !ka._data(d, "submitBubbles") && (ka.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), ka._data(d, "submitBubbles", !0))
            }), b)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ka.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return ka.nodeName(this, "form") ? !1 : (ka.event.remove(this, "._submit"), b)
        }
    }), ka.support.changeBubbles || (ka.event.special.change = {
        setup: function() {
            return La.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ka.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), ka.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ka.event.simulate("change", this, a, !0)
            })), !1) : (ka.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                La.test(b.nodeName) && !ka._data(b, "changeBubbles") && (ka.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ka.event.simulate("change", this.parentNode, a, !0)
                }), ka._data(b, "changeBubbles", !0))
            }), b)
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
        },
        teardown: function() {
            return ka.event.remove(this, "._change"), !La.test(this.nodeName)
        }
    }), ka.support.focusinBubbles || ka.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                ka.event.simulate(b, a.target, ka.event.fix(a), !0)
            };
        ka.event.special[b] = {
            setup: function() {
                0 === c++ && Y.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && Y.removeEventListener(a, d, !0)
            }
        }
    }), ka.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
            else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return ka().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = ka.guid++)), this.each(function() {
                ka.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ka(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function() {
                ka.event.remove(this, a, d, c)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                ka.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? ka.event.trigger(a, c, d, !0) : b
        }
    });
    var Qa = /^.[^:#\[\.,]*$/,
        Ra = /^(?:parents|prev(?:Until|All))/,
        Sa = ka.expr.match.needsContext,
        Ta = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ka.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(ka(a).filter(function() {
                for (b = 0; e > b; b++) if (ka.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) ka.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ka.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        has: function(a) {
            var b, c = ka(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (ka.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(m(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(m(this, a || [], !1))
        },
        is: function(a) {
            return !!m(this, "string" == typeof a && Sa.test(a) ? ka(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sa.test(a) || "string" != typeof a ? ka(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && ka.find.matchesSelector(c, a))) {
                c = f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? ka.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ka.inArray(this[0], ka(a)) : ka.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? ka(a, b) : ka.makeArray(a && a.nodeType ? [a] : a),
                d = ka.merge(this.get(), c);
            return this.pushStack(ka.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ka.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ka.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ka.dir(a, "parentNode", c)
        },
        next: function(a) {
            return l(a, "nextSibling")
        },
        prev: function(a) {
            return l(a, "previousSibling");
        },
        nextAll: function(a) {
            return ka.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return ka.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ka.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ka.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ka.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ka.sibling(a.firstChild)
        },
        contents: function(a) {
            return ka.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ka.merge([], a.childNodes)
        }
    }, function(a, b) {
        ka.fn[a] = function(c, d) {
            var e = ka.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ka.filter(d, e)), this.length > 1 && (Ta[a] || (e = ka.unique(e)), Ra.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    }), ka.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ka.find.matchesSelector(d, a) ? [d] : [] : ka.find.matches(a, ka.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ka(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ua = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Va = / jQuery\d+="(?:null|\d+)"/g,
        Wa = RegExp("<(?:" + Ua + ")[\\s/>]", "i"),
        Xa = /^\s+/,
        Ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Za = /<([\w:]+)/,
        $a = /<tbody/i,
        _a = /<|&#?\w+;/,
        ab = /<(?:script|style|link)/i,
        bb = /^(?:checkbox|radio)$/i,
        cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        db = /^$|\/(?:java|ecma)script/i,
        eb = /^true\/(.*)/,
        fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ka.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, hb = n(Y),
        ib = hb.appendChild(Y.createElement("div"));
    gb.optgroup = gb.option, gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead, gb.th = gb.td, ka.fn.extend({
        text: function(a) {
            return ka.access(this, function(a) {
                return a === b ? ka.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
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
            for (var c, d = a ? ka.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ka.cleanData(u(c)), c.parentNode && (b && ka.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ka.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ka.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return ka.clone(this, a, b)
            })
        },
        html: function(a) {
            return ka.access(this, function(a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Va, "") : b;
                if (!("string" != typeof a || ab.test(a) || !ka.support.htmlSerialize && Wa.test(a) || !ka.support.leadingWhitespace && Xa.test(a) || gb[(Za.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Ya, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ka.cleanData(u(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = ka.map(this, function(a) {
                return [a.nextSibling, a.parentNode]
            }),
                b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++],
                    e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), ka(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, c) {
            a = da.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                m = k - 1,
                n = a[0],
                o = ka.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || ka.support.checkClone) && cb.test(n)) return this.each(function(d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c)
            });
            if (k && (i = ka.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                for (g = ka.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = ka.clone(e, !0, !0), f && ka.merge(g, u(e, "script"))), b.call(this[j], e, j);
                if (f) for (h = g[g.length - 1].ownerDocument, ka.map(g, q), j = 0; f > j; j++) e = g[j], db.test(e.type || "") && !ka._data(e, "globalEval") && ka.contains(h, e) && (e.src ? ka._evalUrl(e.src) : ka.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fb, "")));
                i = d = null
            }
            return this
        }
    }), ka.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ka.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ka(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ka(f[d])[b](c), ea.apply(e, c.get());
            return this.pushStack(e)
        }
    }), ka.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ka.contains(a.ownerDocument, a);
            if (ka.support.html5Clone || ka.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ib.innerHTML = a.outerHTML, ib.removeChild(f = ib.firstChild)), !(ka.support.noCloneEvent && ka.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ka.isXMLDoc(a))) for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b) if (c) for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
            else s(a, f);
            return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++) if (f = a[p], f || 0 === f) if ("object" === ka.type(f)) ka.merge(o, f.nodeType ? [f] : f);
            else if (_a.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Za.exec(f) || ["", ""])[1].toLowerCase(), k = gb[i] || gb._default, h.innerHTML = k[1] + f.replace(Ya, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ka.support.leadingWhitespace && Xa.test(f) && o.push(b.createTextNode(Xa.exec(f)[0])), !ka.support.tbody) for (f = "table" !== i || $a.test(f) ? "<table>" !== k[1] || $a.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ka.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ka.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), ka.support.appendChecked || ka.grep(u(o, "input"), v), p = 0; f = o[p++];) if ((!d || -1 === ka.inArray(f, d)) && (g = ka.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c)) for (e = 0; f = h[e++];) db.test(f.type || "") && c.push(f);
            return h = null, m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ka.expando, i = ka.cache, j = ka.support.deleteExpando, k = ka.event.special; null != (c = a[g]); g++) if ((b || ka.acceptData(c)) && (e = c[h], f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? ka.event.remove(c, d) : ka.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, ba.push(e))
            }
        },
        _evalUrl: function(a) {
            return ka.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ka.fn.extend({
        wrapAll: function(a) {
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ka(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return ka.isFunction(a) ? this.each(function(b) {
                ka(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = ka(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = ka.isFunction(a);
            return this.each(function(c) {
                ka(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ka.nodeName(this, "body") || ka(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var jb, kb, lb, mb = /alpha\([^)]*\)/i,
        nb = /opacity\s*=\s*([^)]*)/,
        ob = /^(top|right|bottom|left)$/,
        pb = /^(none|table(?!-c[ea]).+)/,
        qb = /^margin/,
        rb = RegExp("^(" + la + ")(.*)$", "i"),
        sb = RegExp("^(" + la + ")(?!px)[a-z%]+$", "i"),
        tb = RegExp("^([+-])=(" + la + ")", "i"),
        ub = {
            BODY: "block"
        }, vb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, wb = {
            letterSpacing: 0,
            fontWeight: 400
        }, xb = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"];
    ka.fn.extend({
        css: function(a, c) {
            return ka.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (ka.isArray(c)) {
                    for (f = kb(a), e = c.length; e > h; h++) g[c[h]] = ka.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? ka.style(a, c, d) : ka.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : x(this)) ? ka(this).show() : ka(this).hide()
            })
        }
    }), ka.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = lb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ka.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = ka.camelCase(c),
                    j = a.style;
                if (c = ka.cssProps[i] || (ka.cssProps[i] = w(j, i)), h = ka.cssHooks[c] || ka.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ka.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ka.cssNumber[i] || (d += "px"), ka.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = ka.camelCase(c);
            return c = ka.cssProps[i] || (ka.cssProps[i] = w(a.style, i)), h = ka.cssHooks[c] || ka.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lb(a, c, e)), "normal" === g && c in wb && (g = wb[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ka.isNumeric(f) ? f || 0 : g) : g
        }
    }), a.getComputedStyle ? (kb = function(b) {
        return a.getComputedStyle(b, null)
    }, lb = function(a, c, d) {
        var e, f, g, h = d || kb(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || ka.contains(a.ownerDocument, a) || (i = ka.style(a, c)), sb.test(i) && qb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }) : Y.documentElement.currentStyle && (kb = function(a) {
        return a.currentStyle
    }, lb = function(a, c, d) {
        var e, f, g, h = d || kb(a),
            i = h ? h[c] : b,
            j = a.style;
        return null == i && j && j[c] && (i = j[c]), sb.test(i) && !ob.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
    }), ka.each(["height", "width"], function(a, c) {
        ka.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && pb.test(ka.css(a, "display")) ? ka.swap(a, vb, function() {
                    return B(a, c, e)
                }) : B(a, c, e) : b
            },
            set: function(a, b, d) {
                var e = d && kb(a);
                return z(a, b, d ? A(a, c, d, ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ka.support.opacity || (ka.cssHooks.opacity = {
        get: function(a, b) {
            return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ka.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ka.trim(f.replace(mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mb.test(f) ? f.replace(mb, e) : f + " " + e)
        }
    }), ka(function() {
        ka.support.reliableMarginRight || (ka.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? ka.swap(a, {
                    display: "inline-block"
                }, lb, [a, "marginRight"]) : b
            }
        }), !ka.support.pixelPosition && ka.fn.position && ka.each(["top", "left"], function(a, c) {
            ka.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = lb(a, c), sb.test(d) ? ka(a).position()[c] + "px" : d) : b
                }
            }
        })
    }), ka.expr && ka.expr.filters && (ka.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !ka.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ka.css(a, "display"))
    }, ka.expr.filters.visible = function(a) {
        return !ka.expr.filters.hidden(a)
    }), ka.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ka.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, qb.test(a) || (ka.cssHooks[a + b].set = z)
    });
    var zb = /%20/g,
        Ab = /\[\]$/,
        Bb = /\r?\n/g,
        Cb = /^(?:submit|button|image|reset|file)$/i,
        Db = /^(?:input|select|textarea|keygen)/i;
    ka.fn.extend({
        serialize: function() {
            return ka.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ka.prop(this, "elements");
                return a ? ka.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ka(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !bb.test(a))
            }).map(function(a, b) {
                var c = ka(this).val();
                return null == c ? null : ka.isArray(c) ? ka.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bb, "\r\n")
                }
            }).get()
        }
    }), ka.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = ka.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = ka.ajaxSettings && ka.ajaxSettings.traditional), ka.isArray(a) || a.jquery && !ka.isPlainObject(a)) ka.each(a, function() {
            f(this.name, this.value)
        });
        else for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zb, "+")
    }, ka.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ka.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ka.fn.extend({
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
    var Eb, Fb, Gb = ka.now(),
        Hb = /\?/,
        Ib = /#.*$/,
        Jb = /([?&])_=[^&]*/,
        Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mb = /^(?:GET|HEAD)$/,
        Nb = /^\/\//,
        Ob = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pb = ka.fn.load,
        Qb = {}, Rb = {}, Sb = "*/".concat("*");
    try {
        Fb = X.href
    } catch (Tb) {
        Fb = Y.createElement("a"), Fb.href = "", Fb = Fb.href
    }
    Eb = Ob.exec(Fb.toLowerCase()) || [], ka.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pb) return Pb.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ka.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ka.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments, h.html(e ? ka("<div>").append(ka.parseHTML(a)).find(e) : a)
        }).complete(d && function(a, b) {
            h.each(d, f || [a.responseText, b, a])
        }), this
    }, ka.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ka.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), ka.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fb,
            type: "GET",
            isLocal: Lb.test(Eb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
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
                "text json": ka.parseJSON,
                "text xml": ka.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? H(H(a, ka.ajaxSettings), b) : H(ka.ajaxSettings, a)
        },
        ajaxPrefilter: F(Qb),
        ajaxTransport: F(Rb),
        ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ka.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ka.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ka.active || ka.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = ka.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? ka(n) : ka.event,
                p = ka.Deferred(),
                q = ka.Callbacks("once memory"),
                r = m.statusCode || {}, s = {}, t = {}, u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!l) for (l = {}; b = Kb.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                        else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fb) + "").replace(Ib, "").replace(Nb, Eb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ka.trim(m.dataType || "*").toLowerCase().match(ma) || [""], null == m.crossDomain && (e = Ob.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Eb[1] && e[2] === Eb[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Eb[3] || ("http:" === Eb[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = ka.param(m.data, m.traditional)), G(Qb, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === ka.active++ && ka.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hb.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jb.test(g) ? g.replace(Jb, "$1_=" + Gb++) : g + (Hb.test(g) ? "&" : "?") + "_=" + Gb++)), m.ifModified && (ka.lastModified[g] && w.setRequestHeader("If-Modified-Since", ka.lastModified[g]), ka.etag[g] && w.setRequestHeader("If-None-Match", ka.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = G(Rb, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return ka.get(a, b, c, "json")
        },
        getScript: function(a, c) {
            return ka.get(a, b, c, "script")
        }
    }), ka.each(["get", "post"], function(a, c) {
        ka[c] = function(a, d, e, f) {
            return ka.isFunction(d) && (f = f || e, e = d, d = b), ka.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), ka.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ka.globalEval(a), a
            }
        }
    }), ka.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ka.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = Y.head || ka("head")[0] || Y.documentElement;
            return {
                send: function(b, e) {
                    c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Ub = [],
        Vb = /(=)\?(?=&|$)|\?\?/;
    ka.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Ub.pop() || ka.expando + "_" + Gb++;
            return this[a] = !0, a
        }
    }), ka.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vb.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ka.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vb, "$1" + f) : c.jsonp !== !1 && (c.url += (Hb.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || ka.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ub.push(f)), h && ka.isFunction(g) && g(h[0]), h = g = b
        }), "script") : b
    });
    var Wb, Xb, Yb = 0,
        Zb = a.ActiveXObject && function() {
            var a;
            for (a in Wb) Wb[a](b, !0)
        };
    ka.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && K() || L()
    } : K, Xb = ka.ajaxSettings.xhr(), ka.support.cors = !! Xb && "withCredentials" in Xb, Xb = ka.support.ajax = !! Xb, Xb && ka.ajaxTransport(function(c) {
        if (!c.crossDomain || ka.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = ka.noop, Zb && delete Wb[g]), e) 4 !== i.readyState && i.abort();
                            else {
                                l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText
                                } catch (m) {
                                    k = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch (n) {
                            e || f(-1, n)
                        }
                        l && f(h, k, l, j)
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yb, Zb && (Wb || (Wb = {}, ka(a).unload(Zb)), Wb[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(b, !0)
                }
            }
        }
    });
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = RegExp("^(?:([+-])=|)(" + la + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [Q],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (ka.cssNumber[a] ? "" : "px"),
                    g = (ka.cssNumber[a] || "px" !== f && +d) && bc.exec(ka.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, ka.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    ka.Animation = ka.extend(O, {
        tweener: function(a, b) {
            ka.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }), ka.Tween = R, R.prototype = {
        constructor: R,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ka.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ka.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ka.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                ka.fx.step[a.prop] ? ka.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ka.cssProps[a.prop]] || ka.cssHooks[a.prop]) ? ka.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ka.each(["toggle", "show", "hide"], function(a, b) {
        var c = ka.fn[b];
        ka.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
        }
    }), ka.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = ka.isEmptyObject(a),
                f = ka.speed(b, c, d),
                g = function() {
                    var b = O(this, ka.extend({}, a), f);
                    (e || ka._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = ka.timers,
                    g = ka._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else for (c in g) g[c] && g[c].stop && cc.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && ka.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ka._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = ka.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, ka.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), ka.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
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
        ka.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), ka.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? ka.extend({}, a) : {
            complete: c || !c && b || ka.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ka.isFunction(b) && b
        };
        return d.duration = ka.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ka.fx.speeds ? ka.fx.speeds[d.duration] : ka.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            ka.isFunction(d.old) && d.old.call(this), d.queue && ka.dequeue(this, d.queue)
        }, d
    }, ka.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ka.timers = [], ka.fx = R.prototype.init, ka.fx.tick = function() {
        var a, c = ka.timers,
            d = 0;
        for ($b = ka.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || ka.fx.stop(), $b = b
    }, ka.fx.timer = function(a) {
        a() && ka.timers.push(a) && ka.fx.start()
    }, ka.fx.interval = 13, ka.fx.start = function() {
        _b || (_b = setInterval(ka.fx.tick, ka.fx.interval))
    }, ka.fx.stop = function() {
        clearInterval(_b), _b = null
    }, ka.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ka.fx.step = {}, ka.expr && ka.expr.filters && (ka.expr.filters.animated = function(a) {
        return ka.grep(ka.timers, function(b) {
            return a === b.elem
        }).length
    }), ka.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            ka.offset.setOffset(this, a, b)
        });
        var c, d, e = {
            top: 0,
            left: 0
        }, f = this[0],
            g = f && f.ownerDocument;
        return g ? (c = g.documentElement, ka.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e) : void 0
    }, ka.offset = {
        setOffset: function(a, b, c) {
            var d = ka.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = ka(a),
                h = g.offset(),
                i = ka.css(a, "top"),
                j = ka.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && ka.inArray("auto", [i, j]) > -1,
                l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ka.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, ka.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === ka.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ka.nodeName(a[0], "html") || (c = a.offset()), c.top += ka.css(a[0], "borderTopWidth", !0), c.left += ka.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ka.css(d, "marginTop", !0),
                    left: b.left - c.left - ka.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Z; a && !ka.nodeName(a, "html") && "static" === ka.css(a, "position");) a = a.offsetParent;
                return a || Z
            })
        }
    }), ka.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        ka.fn[a] = function(e) {
            return ka.access(this, function(a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? ka(g).scrollLeft() : f, d ? f : ka(g).scrollTop()) : a[e] = f, b)
            }, a, e, arguments.length, null)
        }
    }), ka.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        ka.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            ka.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return ka.access(this, function(c, d, e) {
                    var f;
                    return ka.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ka.css(c, d, h) : ka.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), ka.fn.size = function() {
        return this.length
    }, ka.fn.andSelf = ka.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ka : (a.jQuery = a.$ = ka, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ka
    }))
}(window),
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(a) {
        return a
    }
    function c(a) {
        return decodeURIComponent(a.replace(e, " "))
    }
    function d(a) {
        0 === a.indexOf('"') && (a = a.slice(1, - 1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return f.json ? JSON.parse(a) : a
        } catch (b) {}
    }
    var e = /\+/g,
        f = a.cookie = function(e, g, h) {
            if (void 0 !== g) {
                if (h = a.extend({}, f.defaults, h), "number" == typeof h.expires) {
                    var i = h.expires,
                        j = h.expires = new Date;
                    j.setDate(j.getDate() + i)
                }
                return g = f.json ? JSON.stringify(g) : String(g), document.cookie = [f.raw ? e : encodeURIComponent(e), "=", f.raw ? g : encodeURIComponent(g), h.expires ? "; expires=" + h.expires.toUTCString() : "", h.path ? "; path=" + h.path : "", h.domain ? "; domain=" + h.domain : "", h.secure ? "; secure" : ""].join("")
            }
            for (var k = f.raw ? b : c, l = document.cookie.split("; "), m = e ? void 0 : {}, n = 0, o = l.length; o > n; n++) {
                var p = l[n].split("="),
                    q = k(p.shift()),
                    r = k(p.join("="));
                if (e && e === q) {
                    m = d(r);
                    break
                }
                e || (m[q] = d(r))
            }
            return m
        };
    f.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 !== a.cookie(b) ? (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !0) : !1
    }
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, - 10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, - 10 * --b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, - 10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, - 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
}),
function(a, b, c) {
    "function" == typeof define && define.amd ? define(["jquery"], function(d) {
        return c(d, a, b), d.mobile
    }) : c(a.jQuery, a, b)
}(this, document, function(a, b, c, d) {
    ! function(a, b, c, d) {
        function e(a) {
            for (; a && "undefined" != typeof a.originalEvent;) a = a.originalEvent;
            return a
        }
        function f(b, c) {
            var f, g, h, i, j, k, l, m, n, o = b.type;
            if (b = a.Event(b), b.type = c, f = b.originalEvent, g = a.event.props, o.search(/^(mouse|click)/) > -1 && (g = D), f) for (l = g.length, i; l;) i = g[--l], b[i] = f[i];
            if (o.search(/mouse(down|up)|click/) > -1 && !b.which && (b.which = 1), - 1 !== o.search(/^touch/) && (h = e(f), o = h.touches, j = h.changedTouches, k = o && o.length ? o[0] : j && j.length ? j[0] : d)) for (m = 0, n = B.length; n > m; m++) i = B[m], b[i] = k[i];
            return b
        }
        function g(b) {
            for (var c, d, e = {}; b;) {
                c = a.data(b, y);
                for (d in c) c[d] && (e[d] = e.hasVirtualBinding = !0);
                b = b.parentNode
            }
            return e
        }
        function h(b, c) {
            for (var d; b;) {
                if (d = a.data(b, y), d && (!c || d[c])) return b;
                b = b.parentNode
            }
            return null
        }
        function i() {
            L = !1
        }
        function j() {
            L = !0
        }
        function k() {
            P = 0, J.length = 0, K = !1, j()
        }
        function l() {
            i()
        }
        function m() {
            n(), F = setTimeout(function() {
                F = 0, k()
            }, a.vmouse.resetTimerDuration)
        }
        function n() {
            F && (clearTimeout(F), F = 0)
        }
        function o(b, c, d) {
            var e;
            return (d && d[b] || !d && h(c.target, b)) && (e = f(c, b), a(c.target).trigger(e)), e
        }
        function p(b) {
            var c = a.data(b.target, z);
            if (!(K || P && P === c)) {
                var d = o("v" + b.type, b);
                d && (d.isDefaultPrevented() && b.preventDefault(), d.isPropagationStopped() && b.stopPropagation(), d.isImmediatePropagationStopped() && b.stopImmediatePropagation())
            }
        }
        function q(b) {
            var c, d, f = e(b).touches;
            if (f && 1 === f.length && (c = b.target, d = g(c), d.hasVirtualBinding)) {
                P = O++, a.data(c, z, P), n(), l(), I = !1;
                var h = e(b).touches[0];
                G = h.pageX, H = h.pageY, o("vmouseover", b, d), o("vmousedown", b, d)
            }
        }
        function r(a) {
            L || (I || o("vmousecancel", a, g(a.target)), I = !0, m())
        }
        function s(b) {
            if (!L) {
                var c = e(b).touches[0],
                    d = I,
                    f = a.vmouse.moveDistanceThreshold,
                    h = g(b.target);
                I = I || Math.abs(c.pageX - G) > f || Math.abs(c.pageY - H) > f, I && !d && o("vmousecancel", b, h), o("vmousemove", b, h), m()
            }
        }
        function t(a) {
            if (!L) {
                j();
                var b, c = g(a.target);
                if (o("vmouseup", a, c), !I) {
                    var d = o("vclick", a, c);
                    d && d.isDefaultPrevented() && (b = e(a).changedTouches[0], J.push({
                        touchID: P,
                        x: b.clientX,
                        y: b.clientY
                    }), K = !0)
                }
                o("vmouseout", a, c), I = !1, m()
            }
        }
        function u(b) {
            var c, d = a.data(b, y);
            if (d) for (c in d) if (d[c]) return !0;
            return !1
        }
        function v() {}
        function w(b) {
            var c = b.substr(1);
            return {
                setup: function(d, e) {
                    u(this) || a.data(this, y, {});
                    var f = a.data(this, y);
                    f[b] = !0, E[b] = (E[b] || 0) + 1, 1 === E[b] && N.bind(c, p), a(this).bind(c, v), M && (E.touchstart = (E.touchstart || 0) + 1, 1 === E.touchstart && N.bind("touchstart", q).bind("touchend", t).bind("touchmove", s).bind("scroll", r))
                },
                teardown: function(d, e) {
                    --E[b], E[b] || N.unbind(c, p), M && (--E.touchstart, E.touchstart || N.unbind("touchstart", q).unbind("touchmove", s).unbind("touchend", t).unbind("scroll", r));
                    var f = a(this),
                        g = a.data(this, y);
                    g && (g[b] = !1), f.unbind(c, v), u(this) || f.removeData(y)
                }
            }
        }
        var x, y = "virtualMouseBindings",
            z = "virtualTouchID",
            A = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            B = "clientX clientY pageX pageY screenX screenY".split(" "),
            C = a.event.mouseHooks ? a.event.mouseHooks.props : [],
            D = a.event.props.concat(C),
            E = {}, F = 0,
            G = 0,
            H = 0,
            I = !1,
            J = [],
            K = !1,
            L = !1,
            M = "addEventListener" in c,
            N = a(c),
            O = 1,
            P = 0;
        a.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (var Q = 0; Q < A.length; Q++) a.event.special[A[Q]] = w(A[Q]);
        M && c.addEventListener("click", function(b) {
            var c, d, e, f, g, h, i = J.length,
                j = b.target;
            if (i) for (c = b.clientX, d = b.clientY, x = a.vmouse.clickDistanceThreshold, e = j; e;) {
                for (f = 0; i > f; f++) if (g = J[f], h = 0, e === j && Math.abs(g.x - c) < x && Math.abs(g.y - d) < x || a.data(e, z) === g.touchID) return b.preventDefault(), void b.stopPropagation();
                e = e.parentNode
            }
        }, !0)
    }(a, b, c)
}),
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
function(a) {
    function b(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = 0,
            g = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), g = e, void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (g = 0, f = -1 * e), void 0 !== c.wheelDeltaY && (g = c.wheelDeltaY / 120), void 0 !== c.wheelDeltaX && (f = -1 * c.wheelDeltaX / 120), d.unshift(b, e, f, g), (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var c = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks) for (var d = c.length; d;) a.event.fixHooks[c[--d]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var a = c.length; a;) this.addEventListener(c[--a], b, !1);
            else this.onmousewheel = b
        },
        teardown: function() {
            if (this.removeEventListener) for (var a = c.length; a;) this.removeEventListener(c[--a], b, !1);
            else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
}(jQuery),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery ? a.jQuery : a.Zepto)
}(this, function(a, b) {
    a.fn.jPlayer = function(c) {
        var d = "string" == typeof c,
            e = Array.prototype.slice.call(arguments, 1),
            f = this;
        return c = !d && e.length ? a.extend.apply(null, [!0, c].concat(e)) : c, d && "_" === c.charAt(0) ? f : (d ? this.each(function() {
            var d = a(this).data("jPlayer"),
                g = d && a.isFunction(d[c]) ? d[c].apply(d, e) : d;
            return g !== d && g !== b ? (f = g, !1) : void 0
        }) : this.each(function() {
            var b = a(this).data("jPlayer");
            b ? b.option(c || {}) : a(this).data("jPlayer", new a.jPlayer(c, this))
        }), f)
    }, a.jPlayer = function(b, c) {
        if (arguments.length) {
            this.element = a(c), this.options = a.extend(!0, {}, this.options, b);
            var d = this;
            this.element.bind("remove.jPlayer", function() {
                d.destroy()
            }), this._init()
        }
    }, "function" != typeof a.fn.stop && (a.fn.stop = function() {}), a.jPlayer.emulateMethods = "load play pause", a.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate", a.jPlayer.emulateOptions = "muted volume", a.jPlayer.reservedEvent = "ready flashreset resize repeat error warning", a.jPlayer.event = {}, a.each("ready flashreset resize repeat click error warning loadstart progress suspend abort emptied stalled play pause loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange".split(" "), function() {
        a.jPlayer.event[this] = "jPlayer_" + this
    }), a.jPlayer.htmlEvent = "loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough ratechange".split(" "), a.jPlayer.pause = function() {
        a.each(a.jPlayer.prototype.instances, function(a, b) {
            b.data("jPlayer").status.srcSet && b.jPlayer("pause")
        })
    }, a.jPlayer.timeFormat = {
        showHour: !1,
        showMin: !0,
        showSec: !0,
        padHour: !1,
        padMin: !0,
        padSec: !0,
        sepHour: ":",
        sepMin: ":",
        sepSec: ""
    };
    var c = function() {
        this.init()
    };
    c.prototype = {
        init: function() {
            this.options = {
                timeFormat: a.jPlayer.timeFormat
            }
        },
        time: function(a) {
            var b = new Date(1e3 * (a && "number" == typeof a ? a : 0)),
                c = b.getUTCHours();
            return a = this.options.timeFormat.showHour ? b.getUTCMinutes() : b.getUTCMinutes() + 60 * c, b = this.options.timeFormat.showMin ? b.getUTCSeconds() : b.getUTCSeconds() + 60 * a, c = this.options.timeFormat.padHour && 10 > c ? "0" + c : c, a = this.options.timeFormat.padMin && 10 > a ? "0" + a : a, b = this.options.timeFormat.padSec && 10 > b ? "0" + b : b, c = "" + (this.options.timeFormat.showHour ? c + this.options.timeFormat.sepHour : ""), c += this.options.timeFormat.showMin ? a + this.options.timeFormat.sepMin : "", c += this.options.timeFormat.showSec ? b + this.options.timeFormat.sepSec : ""
        }
    };
    var d = new c;
    a.jPlayer.convertTime = function(a) {
        return d.time(a)
    }, a.jPlayer.uaBrowser = function(a) {
        a = a.toLowerCase();
        var b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            c = /(msie) ([\w.]+)/,
            d = /(mozilla)(?:.*? rv:([\w.]+))?/;
        return a = /(webkit)[ \/]([\w.]+)/.exec(a) || b.exec(a) || c.exec(a) || 0 > a.indexOf("compatible") && d.exec(a) || [], {
            browser: a[1] || "",
            version: a[2] || "0"
        }
    }, a.jPlayer.uaPlatform = function(a) {
        var b = a.toLowerCase(),
            c = /(android)/,
            d = /(mobile)/;
        return a = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(b) || [], b = /(ipad|playbook)/.exec(b) || !d.exec(b) && c.exec(b) || [], a[1] && (a[1] = a[1].replace(/\s/g, "_")), {
            platform: a[1] || "",
            tablet: b[1] || ""
        }
    }, a.jPlayer.browser = {}, a.jPlayer.platform = {};
    var e = a.jPlayer.uaBrowser(navigator.userAgent);
    e.browser && (a.jPlayer.browser[e.browser] = !0, a.jPlayer.browser.version = e.version), e = a.jPlayer.uaPlatform(navigator.userAgent), e.platform && (a.jPlayer.platform[e.platform] = !0, a.jPlayer.platform.mobile = !e.tablet, a.jPlayer.platform.tablet = !! e.tablet), a.jPlayer.getDocMode = function() {
        var b;
        return a.jPlayer.browser.msie && (document.documentMode ? b = document.documentMode : (b = 5, document.compatMode && "CSS1Compat" === document.compatMode && (b = 7))), b
    }, a.jPlayer.browser.documentMode = a.jPlayer.getDocMode(), a.jPlayer.nativeFeatures = {
        init: function() {
            var a, b, c = document,
                d = c.createElement("video"),
                e = {
                    w3c: "fullscreenEnabled fullscreenElement requestFullscreen exitFullscreen fullscreenchange fullscreenerror".split(" "),
                    moz: "mozFullScreenEnabled mozFullScreenElement mozRequestFullScreen mozCancelFullScreen mozfullscreenchange mozfullscreenerror".split(" "),
                    webkit: " webkitCurrentFullScreenElement webkitRequestFullScreen webkitCancelFullScreen webkitfullscreenchange ".split(" "),
                    webkitVideo: "webkitSupportsFullscreen webkitDisplayingFullscreen webkitEnterFullscreen webkitExitFullscreen  ".split(" ")
                }, f = ["w3c", "moz", "webkit", "webkitVideo"];
            for (this.fullscreen = d = {
                support: {
                    w3c: !! c[e.w3c[0]],
                    moz: !! c[e.moz[0]],
                    webkit: "function" == typeof c[e.webkit[3]],
                    webkitVideo: "function" == typeof d[e.webkitVideo[2]]
                },
                used: {}
            }, a = 0, b = f.length; b > a; a++) {
                var g = f[a];
                if (d.support[g]) {
                    d.spec = g, d.used[g] = !0;
                    break
                }
            }
            if (d.spec) {
                var h = e[d.spec];
                d.api = {
                    fullscreenEnabled: !0,
                    fullscreenElement: function(a) {
                        return a = a ? a : c, a[h[1]]
                    },
                    requestFullscreen: function(a) {
                        return a[h[2]]()
                    },
                    exitFullscreen: function(a) {
                        return a = a ? a : c, a[h[3]]()
                    }
                }, d.event = {
                    fullscreenchange: h[4],
                    fullscreenerror: h[5]
                }
            } else d.api = {
                fullscreenEnabled: !1,
                fullscreenElement: function() {
                    return null
                },
                requestFullscreen: function() {},
                exitFullscreen: function() {}
            }, d.event = {}
        }
    }, a.jPlayer.nativeFeatures.init(), a.jPlayer.focus = null, a.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";
    var f = function(b) {
        var c, d = a.jPlayer.focus;
        d && (a.each(a.jPlayer.keyIgnoreElementNames.split(/\s+/g), function(a, d) {
            return b.target.nodeName.toUpperCase() === d.toUpperCase() ? (c = !0, !1) : void 0
        }), c || a.each(d.options.keyBindings, function(c, e) {
            return e && b.which === e.key && a.isFunction(e.fn) ? (b.preventDefault(), e.fn(d), !1) : void 0
        }))
    };
    a.jPlayer.keys = function(b) {
        a(document.documentElement).unbind("keydown.jPlayer"), b && a(document.documentElement).bind("keydown.jPlayer", f)
    }, a.jPlayer.keys(!0), a.jPlayer.prototype = {
        count: 0,
        version: {
            script: "2.4.0",
            needFlash: "2.4.0",
            flash: "unknown"
        },
        options: {
            swfPath: "js",
            solution: "html, flash",
            supplied: "mp3",
            preload: "metadata",
            volume: .8,
            muted: !1,
            wmode: "opaque",
            backgroundColor: "#000000",
            cssSelectorAncestor: "#jp_container_1",
            cssSelector: {
                videoPlay: ".jp-video-play",
                play: ".jp-play",
                pause: ".jp-pause",
                stop: ".jp-stop",
                seekBar: ".jp-seek-bar",
                playBar: ".jp-play-bar",
                mute: ".jp-mute",
                unmute: ".jp-unmute",
                volumeBar: ".jp-volume-bar",
                volumeBarValue: ".jp-volume-bar-value",
                volumeMax: ".jp-volume-max",
                currentTime: ".jp-current-time",
                duration: ".jp-duration",
                fullScreen: ".jp-full-screen",
                restoreScreen: ".jp-restore-screen",
                repeat: ".jp-repeat",
                repeatOff: ".jp-repeat-off",
                gui: ".jp-gui",
                noSolution: ".jp-no-solution"
            },
            smoothPlayBar: !1,
            fullScreen: !1,
            fullWindow: !1,
            autohide: {
                restored: !1,
                full: !0,
                fadeIn: 200,
                fadeOut: 600,
                hold: 1e3
            },
            loop: !1,
            repeat: function(b) {
                b.jPlayer.options.loop ? a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
                    a(this).jPlayer("play")
                }) : a(this).unbind(".jPlayerRepeat")
            },
            nativeVideoControls: {},
            noFullWindow: {
                msie: /msie [0-6]\./,
                ipad: /ipad.*?os [0-4]\./,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android [0-3]\.(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/
            },
            noVolume: {
                ipad: /ipad/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/,
                playbook: /playbook/
            },
            timeFormat: {},
            keyEnabled: !1,
            audioFullScreen: !1,
            keyBindings: {
                play: {
                    key: 32,
                    fn: function(a) {
                        a.status.paused ? a.play() : a.pause()
                    }
                },
                fullScreen: {
                    key: 13,
                    fn: function(a) {
                        (a.status.video || a.options.audioFullScreen) && a._setOption("fullScreen", !a.options.fullScreen)
                    }
                },
                muted: {
                    key: 8,
                    fn: function(a) {
                        a._muted(!a.options.muted)
                    }
                },
                volumeUp: {
                    key: 38,
                    fn: function(a) {
                        a.volume(a.options.volume + .1)
                    }
                },
                volumeDown: {
                    key: 40,
                    fn: function(a) {
                        a.volume(a.options.volume - .1)
                    }
                }
            },
            verticalVolume: !1,
            idPrefix: "jp",
            noConflict: "jQuery",
            emulateHtml: !1,
            errorAlerts: !1,
            warningAlerts: !1
        },
        optionsAudio: {
            size: {
                width: "0px",
                height: "0px",
                cssClass: ""
            },
            sizeFull: {
                width: "0px",
                height: "0px",
                cssClass: ""
            }
        },
        optionsVideo: {
            size: {
                width: "480px",
                height: "270px",
                cssClass: "jp-video-270p"
            },
            sizeFull: {
                width: "100%",
                height: "100%",
                cssClass: "jp-video-full"
            }
        },
        instances: {},
        status: {
            src: "",
            media: {},
            paused: !0,
            format: {},
            formatType: "",
            waitForPlay: !0,
            waitForLoad: !0,
            srcSet: !1,
            video: !1,
            seekPercent: 0,
            currentPercentRelative: 0,
            currentPercentAbsolute: 0,
            currentTime: 0,
            duration: 0,
            videoWidth: 0,
            videoHeight: 0,
            readyState: 0,
            networkState: 0,
            playbackRate: 1,
            ended: 0
        },
        internal: {
            ready: !1
        },
        solution: {
            html: !0,
            flash: !0
        },
        format: {
            mp3: {
                codec: 'audio/mpeg; codecs="mp3"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4a: {
                codec: 'audio/mp4; codecs="mp4a.40.2"',
                flashCanPlay: !0,
                media: "audio"
            },
            oga: {
                codec: 'audio/ogg; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            wav: {
                codec: 'audio/wav; codecs="1"',
                flashCanPlay: !1,
                media: "audio"
            },
            webma: {
                codec: 'audio/webm; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            fla: {
                codec: "audio/x-flv",
                flashCanPlay: !0,
                media: "audio"
            },
            rtmpa: {
                codec: 'audio/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4v: {
                codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !0,
                media: "video"
            },
            ogv: {
                codec: 'video/ogg; codecs="theora, vorbis"',
                flashCanPlay: !1,
                media: "video"
            },
            webmv: {
                codec: 'video/webm; codecs="vorbis, vp8"',
                flashCanPlay: !1,
                media: "video"
            },
            flv: {
                codec: "video/x-flv",
                flashCanPlay: !0,
                media: "video"
            },
            rtmpv: {
                codec: 'video/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "video"
            }
        },
        _init: function() {
            var c = this;
            if (this.element.empty(), this.status = a.extend({}, this.status), this.internal = a.extend({}, this.internal), this.options.timeFormat = a.extend({}, a.jPlayer.timeFormat, this.options.timeFormat), this.internal.cmdsIgnored = a.jPlayer.platform.ipad || a.jPlayer.platform.iphone || a.jPlayer.platform.ipod, this.internal.domNode = this.element.get(0), this.options.keyEnabled && !a.jPlayer.focus && (a.jPlayer.focus = this), this.formats = [], this.solutions = [], this.require = {}, this.htmlElement = {}, this.html = {}, this.html.audio = {}, this.html.video = {}, this.flash = {}, this.css = {}, this.css.cs = {}, this.css.jq = {}, this.ancestorJq = [], this.options.volume = this._limitValue(this.options.volume, 0, 1), a.each(this.options.supplied.toLowerCase().split(","), function(b, d) {
                var e = d.replace(/^\s+|\s+$/g, "");
                if (c.format[e]) {
                    var f = !1;
                    a.each(c.formats, function(a, b) {
                        return e === b ? (f = !0, !1) : void 0
                    }), f || c.formats.push(e)
                }
            }), a.each(this.options.solution.toLowerCase().split(","), function(b, d) {
                var e = d.replace(/^\s+|\s+$/g, "");
                if (c.solution[e]) {
                    var f = !1;
                    a.each(c.solutions, function(a, b) {
                        return e === b ? (f = !0, !1) : void 0
                    }), f || c.solutions.push(e)
                }
            }), this.internal.instance = "jp_" + this.count, this.instances[this.internal.instance] = this.element, this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count), this.internal.self = a.extend({}, {
                id: this.element.attr("id"),
                jq: this.element
            }), this.internal.audio = a.extend({}, {
                id: this.options.idPrefix + "_audio_" + this.count,
                jq: b
            }), this.internal.video = a.extend({}, {
                id: this.options.idPrefix + "_video_" + this.count,
                jq: b
            }), this.internal.flash = a.extend({}, {
                id: this.options.idPrefix + "_flash_" + this.count,
                jq: b,
                swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "Jplayer.swf" : "")
            }), this.internal.poster = a.extend({}, {
                id: this.options.idPrefix + "_poster_" + this.count,
                jq: b
            }), a.each(a.jPlayer.event, function(a, d) {
                c.options[a] !== b && (c.element.bind(d + ".jPlayer", c.options[a]), c.options[a] = b)
            }), this.require.audio = !1, this.require.video = !1, a.each(this.formats, function(a, b) {
                c.require[c.format[b].media] = !0
            }), this.options = this.require.video ? a.extend(!0, {}, this.optionsVideo, this.options) : a.extend(!0, {}, this.optionsAudio, this.options), this._setSize(), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this.status.noVolume = this._uaBlocklist(this.options.noVolume), a.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners(), this._restrictNativeVideoControls(), this.htmlElement.poster = document.createElement("img"), this.htmlElement.poster.id = this.internal.poster.id, this.htmlElement.poster.onload = function() {
                (!c.status.video || c.status.waitForPlay) && c.internal.poster.jq.show()
            }, this.element.append(this.htmlElement.poster), this.internal.poster.jq = a("#" + this.internal.poster.id), this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            }), this.internal.poster.jq.hide(), this.internal.poster.jq.bind("click.jPlayer", function() {
                c._trigger(a.jPlayer.event.click)
            }), this.html.audio.available = !1, this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !! this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)), this.html.video.available = !1, this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !! this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)), this.flash.available = this._checkForFlash(10.1), this.html.canPlay = {}, this.flash.canPlay = {}, a.each(this.formats, function(a, b) {
                c.html.canPlay[b] = c.html[c.format[b].media].available && "" !== c.htmlElement[c.format[b].media].canPlayType(c.format[b].codec), c.flash.canPlay[b] = c.format[b].flashCanPlay && c.flash.available
            }), this.html.desired = !1, this.flash.desired = !1, a.each(this.solutions, function(b, d) {
                if (0 === b) c[d].desired = !0;
                else {
                    var e = !1,
                        f = !1;
                    a.each(c.formats, function(a, b) {
                        c[c.solutions[0]].canPlay[b] && ("video" === c.format[b].media ? f = !0 : e = !0)
                    }), c[d].desired = c.require.audio && !e || c.require.video && !f
                }
            }), this.html.support = {}, this.flash.support = {}, a.each(this.formats, function(a, b) {
                c.html.support[b] = c.html.canPlay[b] && c.html.desired, c.flash.support[b] = c.flash.canPlay[b] && c.flash.desired
            }), this.html.used = !1, this.flash.used = !1, a.each(this.solutions, function(b, d) {
                a.each(c.formats, function(a, b) {
                    return c[d].support[b] ? (c[d].used = !0, !1) : void 0
                })
            }), this._resetActive(), this._resetGate(), this._cssSelectorAncestor(this.options.cssSelectorAncestor), this.html.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({
                type: a.jPlayer.error.NO_SOLUTION,
                context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                message: a.jPlayer.errorMsg.NO_SOLUTION,
                hint: a.jPlayer.errorHint.NO_SOLUTION
            }), this.css.jq.noSolution.length && this.css.jq.noSolution.show()), this.flash.used) {
                var d, e = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                if (a.jPlayer.browser.msie && (9 > Number(a.jPlayer.browser.version) || 9 > a.jPlayer.browser.documentMode)) {
                    e = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + e + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'], d = document.createElement('<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>');
                    for (var f = 0; f < e.length; f++) d.appendChild(document.createElement(e[f]))
                } else f = function(a, b, c) {
                    var d = document.createElement("param");
                    d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
                }, d = document.createElement("object"), d.setAttribute("id", this.internal.flash.id), d.setAttribute("name", this.internal.flash.id), d.setAttribute("data", this.internal.flash.swf), d.setAttribute("type", "application/x-shockwave-flash"), d.setAttribute("width", "1"), d.setAttribute("height", "1"), d.setAttribute("tabindex", "-1"), f(d, "flashvars", e), f(d, "allowscriptaccess", "always"), f(d, "bgcolor", this.options.backgroundColor), f(d, "wmode", this.options.wmode);
                this.element.append(d), this.internal.flash.jq = a(d)
            }
            this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = a("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = a("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.internal.video.jq.bind("click.jPlayer", function() {
                c._trigger(a.jPlayer.event.click)
            }))), this.options.emulateHtml && this._emulateHtmlBridge(), this.html.used && !this.flash.used && setTimeout(function() {
                c.internal.ready = !0, c.version.flash = "n/a", c._trigger(a.jPlayer.event.repeat), c._trigger(a.jPlayer.event.ready)
            }, 100), this._updateNativeVideoControls(), this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), a.jPlayer.prototype.count++
        },
        destroy: function() {
            this.clearMedia(), this._removeUiClass(), this.css.jq.currentTime.length && this.css.jq.currentTime.text(""), this.css.jq.duration.length && this.css.jq.duration.text(""), a.each(this.css.jq, function(a, b) {
                b.length && b.unbind(".jPlayer")
            }), this.internal.poster.jq.unbind(".jPlayer"), this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer"), this._fullscreenRemoveEventListeners(), this === a.jPlayer.focus && (a.jPlayer.focus = null), this.options.emulateHtml && this._destroyHtmlBridge(), this.element.removeData("jPlayer"), this.element.unbind(".jPlayer"), this.element.empty(), delete this.instances[this.internal.instance]
        },
        enable: function() {},
        disable: function() {},
        _testCanPlayType: function(a) {
            try {
                return a.canPlayType(this.format.mp3.codec), !0
            } catch (b) {
                return !1
            }
        },
        _uaBlocklist: function(b) {
            var c = navigator.userAgent.toLowerCase(),
                d = !1;
            return a.each(b, function(a, b) {
                return b && b.test(c) ? (d = !0, !1) : void 0
            }), d
        },
        _restrictNativeVideoControls: function() {
            this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
        },
        _updateNativeVideoControls: function() {
            this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            })))
        },
        _addHtmlEventListeners: function(b, c) {
            var d = this;
            b.preload = this.options.preload, b.muted = this.options.muted, b.volume = this.options.volume, b.addEventListener("progress", function() {
                c.gate && (d.internal.cmdsIgnored && 0 < this.readyState && (d.internal.cmdsIgnored = !1), d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.progress))
            }, !1), b.addEventListener("timeupdate", function() {
                c.gate && (d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.timeupdate))
            }, !1), b.addEventListener("durationchange", function() {
                c.gate && (d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.durationchange))
            }, !1), b.addEventListener("play", function() {
                c.gate && (d._updateButtons(!0), d._html_checkWaitForPlay(), d._trigger(a.jPlayer.event.play))
            }, !1), b.addEventListener("playing", function() {
                c.gate && (d._updateButtons(!0), d._seeked(), d._trigger(a.jPlayer.event.playing))
            }, !1), b.addEventListener("pause", function() {
                c.gate && (d._updateButtons(!1), d._trigger(a.jPlayer.event.pause))
            }, !1), b.addEventListener("waiting", function() {
                c.gate && (d._seeking(), d._trigger(a.jPlayer.event.waiting))
            }, !1), b.addEventListener("seeking", function() {
                c.gate && (d._seeking(), d._trigger(a.jPlayer.event.seeking))
            }, !1), b.addEventListener("seeked", function() {
                c.gate && (d._seeked(), d._trigger(a.jPlayer.event.seeked))
            }, !1), b.addEventListener("volumechange", function() {
                c.gate && (d.options.volume = b.volume, d.options.muted = b.muted, d._updateMute(), d._updateVolume(), d._trigger(a.jPlayer.event.volumechange))
            }, !1), b.addEventListener("suspend", function() {
                c.gate && (d._seeked(), d._trigger(a.jPlayer.event.suspend))
            }, !1), b.addEventListener("ended", function() {
                c.gate && (a.jPlayer.browser.webkit || (d.htmlElement.media.currentTime = 0), d.htmlElement.media.pause(), d._updateButtons(!1), d._getHtmlStatus(b, !0), d._updateInterface(), d._trigger(a.jPlayer.event.ended))
            }, !1), b.addEventListener("error", function() {
                c.gate && (d._updateButtons(!1), d._seeked(), d.status.srcSet && (clearTimeout(d.internal.htmlDlyCmdId), d.status.waitForLoad = !0, d.status.waitForPlay = !0, d.status.video && !d.status.nativeVideoControls && d.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                }), d._validString(d.status.media.poster) && !d.status.nativeVideoControls && d.internal.poster.jq.show(), d.css.jq.videoPlay.length && d.css.jq.videoPlay.show(), d._error({
                    type: a.jPlayer.error.URL,
                    context: d.status.src,
                    message: a.jPlayer.errorMsg.URL,
                    hint: a.jPlayer.errorHint.URL
                })))
            }, !1), a.each(a.jPlayer.htmlEvent, function(e, f) {
                b.addEventListener(this, function() {
                    c.gate && d._trigger(a.jPlayer.event[f])
                }, !1)
            })
        },
        _getHtmlStatus: function(a, b) {
            var c = 0,
                d = 0,
                e = 0,
                f = 0;
            isFinite(a.duration) && (this.status.duration = a.duration), c = a.currentTime, d = 0 < this.status.duration ? 100 * c / this.status.duration : 0, "object" == typeof a.seekable && 0 < a.seekable.length ? (e = 0 < this.status.duration ? 100 * a.seekable.end(a.seekable.length - 1) / this.status.duration : 100, f = 0 < this.status.duration ? 100 * a.currentTime / a.seekable.end(a.seekable.length - 1) : 0) : (e = 100, f = d), b && (d = f = c = 0), this.status.seekPercent = e, this.status.currentPercentRelative = f, this.status.currentPercentAbsolute = d, this.status.currentTime = c, this.status.videoWidth = a.videoWidth, this.status.videoHeight = a.videoHeight, this.status.readyState = a.readyState, this.status.networkState = a.networkState, this.status.playbackRate = a.playbackRate, this.status.ended = a.ended
        },
        _resetStatus: function() {
            this.status = a.extend({}, this.status, a.jPlayer.prototype.status)
        },
        _trigger: function(b, c, d) {
            b = a.Event(b), b.jPlayer = {}, b.jPlayer.version = a.extend({}, this.version), b.jPlayer.options = a.extend(!0, {}, this.options), b.jPlayer.status = a.extend(!0, {}, this.status), b.jPlayer.html = a.extend(!0, {}, this.html), b.jPlayer.flash = a.extend(!0, {}, this.flash), c && (b.jPlayer.error = a.extend({}, c)), d && (b.jPlayer.warning = a.extend({}, d)), this.element.trigger(b)
        },
        jPlayerFlashEvent: function(b, c) {
            if (b === a.jPlayer.event.ready) if (this.internal.ready) {
                if (this.flash.gate) {
                    if (this.status.srcSet) {
                        var d = this.status.currentTime,
                            e = this.status.paused;
                        this.setMedia(this.status.media), d > 0 && (e ? this.pause(d) : this.play(d))
                    }
                    this._trigger(a.jPlayer.event.flashreset)
                }
            } else this.internal.ready = !0, this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            }), this.version.flash = c.version, this.version.needFlash !== this.version.flash && this._error({
                type: a.jPlayer.error.VERSION,
                context: this.version.flash,
                message: a.jPlayer.errorMsg.VERSION + this.version.flash,
                hint: a.jPlayer.errorHint.VERSION
            }), this._trigger(a.jPlayer.event.repeat), this._trigger(b);
            if (this.flash.gate) switch (b) {
                case a.jPlayer.event.progress:
                    this._getFlashStatus(c), this._updateInterface(), this._trigger(b);
                    break;
                case a.jPlayer.event.timeupdate:
                    this._getFlashStatus(c), this._updateInterface(), this._trigger(b);
                    break;
                case a.jPlayer.event.play:
                    this._seeked(), this._updateButtons(!0), this._trigger(b);
                    break;
                case a.jPlayer.event.pause:
                    this._updateButtons(!1), this._trigger(b);
                    break;
                case a.jPlayer.event.ended:
                    this._updateButtons(!1), this._trigger(b);
                    break;
                case a.jPlayer.event.click:
                    this._trigger(b);
                    break;
                case a.jPlayer.event.error:
                    this.status.waitForLoad = !0, this.status.waitForPlay = !0, this.status.video && this.internal.flash.jq.css({
                        width: "0px",
                        height: "0px"
                    }), this._validString(this.status.media.poster) && this.internal.poster.jq.show(), this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show(), this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media), this._updateButtons(!1), this._error({
                        type: a.jPlayer.error.URL,
                        context: c.src,
                        message: a.jPlayer.errorMsg.URL,
                        hint: a.jPlayer.errorHint.URL
                    });
                    break;
                case a.jPlayer.event.seeking:
                    this._seeking(), this._trigger(b);
                    break;
                case a.jPlayer.event.seeked:
                    this._seeked(), this._trigger(b);
                    break;
                case a.jPlayer.event.ready:
                    break;
                default:
                    this._trigger(b)
            }
            return !1
        },
        _getFlashStatus: function(a) {
            this.status.seekPercent = a.seekPercent, this.status.currentPercentRelative = a.currentPercentRelative, this.status.currentPercentAbsolute = a.currentPercentAbsolute, this.status.currentTime = a.currentTime, this.status.duration = a.duration, this.status.videoWidth = a.videoWidth, this.status.videoHeight = a.videoHeight, this.status.readyState = 4, this.status.networkState = 0, this.status.playbackRate = 1, this.status.ended = !1
        },
        _updateButtons: function(a) {
            a === b ? a = !this.status.paused : this.status.paused = !a, this.css.jq.play.length && this.css.jq.pause.length && (a ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide())), this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide())), this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
        },
        _updateInterface: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%"), this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({
                width: this.status.currentPercentAbsolute + "%"
            }, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%")), this.css.jq.currentTime.length && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)), this.css.jq.duration.length && this.css.jq.duration.text(this._convertTime(this.status.duration))
        },
        _convertTime: c.prototype.time,
        _seeking: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
        },
        _seeked: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
        },
        _resetGate: function() {
            this.html.audio.gate = !1, this.html.video.gate = !1, this.flash.gate = !1
        },
        _resetActive: function() {
            this.html.active = !1, this.flash.active = !1
        },
        setMedia: function(b) {
            var c = this,
                d = !1,
                e = this.status.media.poster !== b.poster;
            this._resetMedia(), this._resetGate(), this._resetActive(), a.each(this.formats, function(e, f) {
                var g = "video" === c.format[f].media;
                return a.each(c.solutions, function(a, e) {
                    if (c[e].support[f] && c._validString(b[f])) {
                        var h = "html" === e;
                        return g ? (h ? (c.html.video.gate = !0, c._html_setVideo(b), c.html.active = !0) : (c.flash.gate = !0, c._flash_setVideo(b), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.show(), c.status.video = !0) : (h ? (c.html.audio.gate = !0, c._html_setAudio(b), c.html.active = !0) : (c.flash.gate = !0, c._flash_setAudio(b), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.hide(), c.status.video = !1), d = !0, !1
                    }
                }), d ? !1 : void 0
            }), d ? (this.status.nativeVideoControls && this.html.video.gate || !this._validString(b.poster) || (e ? this.htmlElement.poster.src = b.poster : this.internal.poster.jq.show()), this.status.srcSet = !0, this.status.media = a.extend({}, b), this._updateButtons(!1), this._updateInterface()) : this._error({
                type: a.jPlayer.error.NO_SUPPORT,
                context: "{supplied:'" + this.options.supplied + "'}",
                message: a.jPlayer.errorMsg.NO_SUPPORT,
                hint: a.jPlayer.errorHint.NO_SUPPORT
            })
        },
        _resetMedia: function() {
            this._resetStatus(), this._updateButtons(!1), this._updateInterface(), this._seeked(), this.internal.poster.jq.hide(), clearTimeout(this.internal.htmlDlyCmdId), this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },
        clearMedia: function() {
            this._resetMedia(), this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia(), this._resetGate(), this._resetActive()
        },
        load: function() {
            this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
        },
        focus: function() {
            this.options.keyEnabled && (a.jPlayer.focus = this)
        },
        play: function(a) {
            a = "number" == typeof a ? a : NaN, this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(a) : this.flash.active && this._flash_play(a)) : this._urlNotSetError("play")
        },
        videoPlay: function() {
            this.play()
        },
        pause: function(a) {
            a = "number" == typeof a ? a : NaN, this.status.srcSet ? this.html.active ? this._html_pause(a) : this.flash.active && this._flash_pause(a) : this._urlNotSetError("pause")
        },
        pauseOthers: function() {
            var b = this;
            a.each(this.instances, function(a, c) {
                b.element !== c && c.data("jPlayer").status.srcSet && c.jPlayer("pause")
            })
        },
        stop: function() {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },
        playHead: function(a) {
            a = this._limitValue(a, 0, 100), this.status.srcSet ? this.html.active ? this._html_playHead(a) : this.flash.active && this._flash_playHead(a) : this._urlNotSetError("playHead")
        },
        _muted: function(b) {
            this.options.muted = b, this.html.used && this._html_mute(b), this.flash.used && this._flash_mute(b), !this.html.video.gate && !this.html.audio.gate && (this._updateMute(b), this._updateVolume(this.options.volume), this._trigger(a.jPlayer.event.volumechange))
        },
        mute: function(a) {
            a = a === b ? !0 : !! a, this._muted(a)
        },
        unmute: function(a) {
            a = a === b ? !0 : !! a, this._muted(!a)
        },
        _updateMute: function(a) {
            a === b && (a = this.options.muted), this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : a ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
        },
        volume: function(b) {
            b = this._limitValue(b, 0, 1), this.options.volume = b, this.html.used && this._html_volume(b), this.flash.used && this._flash_volume(b), !this.html.video.gate && !this.html.audio.gate && (this._updateVolume(b), this._trigger(a.jPlayer.event.volumechange))
        },
        volumeBar: function(b) {
            if (this.css.jq.volumeBar.length) {
                var c = a(b.currentTarget),
                    d = c.offset(),
                    e = b.pageX - d.left,
                    f = c.width();
                b = c.height() - b.pageY + d.top, c = c.height(), this.options.verticalVolume ? this.volume(b / c) : this.volume(e / f)
            }
            this.options.muted && this._muted(!1)
        },
        volumeBarValue: function() {},
        _updateVolume: function(a) {
            a === b && (a = this.options.volume), a = this.options.muted ? 0 : a, this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * a + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
        },
        volumeMax: function() {
            this.volume(1), this.options.muted && this._muted(!1)
        },
        _cssSelectorAncestor: function(b) {
            var c = this;
            this.options.cssSelectorAncestor = b, this._removeUiClass(), this.ancestorJq = b ? a(b) : [], b && 1 !== this.ancestorJq.length && this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: b,
                message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
            }), this._addUiClass(), a.each(this.options.cssSelector, function(a, b) {
                c._cssSelector(a, b)
            }), this._updateInterface(), this._updateButtons(), this._updateAutohide(), this._updateVolume(), this._updateMute()
        },
        _cssSelector: function(b, c) {
            var d = this;
            "string" == typeof c ? a.jPlayer.prototype.options.cssSelector[b] ? (this.css.jq[b] && this.css.jq[b].length && this.css.jq[b].unbind(".jPlayer"), this.options.cssSelector[b] = c, this.css.cs[b] = this.options.cssSelectorAncestor + " " + c, this.css.jq[b] = c ? a(this.css.cs[b]) : [], this.css.jq[b].length && this.css.jq[b].bind("click.jPlayer", function(c) {
                c.preventDefault(), d[b](c), a(this).blur()
            }), c && 1 !== this.css.jq[b].length && this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: this.css.cs[b],
                message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[b].length + " found for " + b + " method.",
                hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
            })) : this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_METHOD,
                context: b,
                message: a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                hint: a.jPlayer.warningHint.CSS_SELECTOR_METHOD
            }) : this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_STRING,
                context: c,
                message: a.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                hint: a.jPlayer.warningHint.CSS_SELECTOR_STRING
            })
        },
        seekBar: function(b) {
            if (this.css.jq.seekBar.length) {
                var c = a(b.currentTarget),
                    d = c.offset();
                b = b.pageX - d.left, c = c.width(), this.playHead(100 * b / c)
            }
        },
        playBar: function() {},
        repeat: function() {
            this._loop(!0)
        },
        repeatOff: function() {
            this._loop(!1)
        },
        _loop: function(b) {
            this.options.loop !== b && (this.options.loop = b, this._updateButtons(), this._trigger(a.jPlayer.event.repeat))
        },
        currentTime: function() {},
        duration: function() {},
        gui: function() {},
        noSolution: function() {},
        option: function(c, d) {
            var e = c;
            if (0 === arguments.length) return a.extend(!0, {}, this.options);
            if ("string" == typeof c) {
                var f = c.split(".");
                if (d === b) {
                    for (var e = a.extend(!0, {}, this.options), g = 0; g < f.length; g++) {
                        if (e[f[g]] === b) return this._warning({
                            type: a.jPlayer.warning.OPTION_KEY,
                            context: c,
                            message: a.jPlayer.warningMsg.OPTION_KEY,
                            hint: a.jPlayer.warningHint.OPTION_KEY
                        }), b;
                        e = e[f[g]]
                    }
                    return e
                }
                for (var g = e = {}, h = 0; h < f.length; h++) h < f.length - 1 ? (g[f[h]] = {}, g = g[f[h]]) : g[f[h]] = d
            }
            return this._setOptions(e), this
        },
        _setOptions: function(b) {
            var c = this;
            return a.each(b, function(a, b) {
                c._setOption(a, b)
            }), this
        },
        _setOption: function(b, c) {
            var d = this;
            switch (b) {
                case "volume":
                    this.volume(c);
                    break;
                case "muted":
                    this._muted(c);
                    break;
                case "cssSelectorAncestor":
                    this._cssSelectorAncestor(c);
                    break;
                case "cssSelector":
                    a.each(c, function(a, b) {
                        d._cssSelector(a, b)
                    });
                    break;
                case "fullScreen":
                    if (this.options[b] !== c) {
                        var e = a.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                        (!e || e && !this.status.waitForPlay) && (e || (this.options[b] = c), c ? this._requestFullscreen() : this._exitFullscreen(), e || this._setOption("fullWindow", c))
                    }
                    break;
                case "fullWindow":
                    this.options[b] !== c && (this._removeUiClass(), this.options[b] = c, this._refreshSize());
                    break;
                case "size":
                    !this.options.fullWindow && this.options[b].cssClass !== c.cssClass && this._removeUiClass(), this.options[b] = a.extend({}, this.options[b], c), this._refreshSize();
                    break;
                case "sizeFull":
                    this.options.fullWindow && this.options[b].cssClass !== c.cssClass && this._removeUiClass(), this.options[b] = a.extend({}, this.options[b], c), this._refreshSize();
                    break;
                case "autohide":
                    this.options[b] = a.extend({}, this.options[b], c), this._updateAutohide();
                    break;
                case "loop":
                    this._loop(c);
                    break;
                case "nativeVideoControls":
                    this.options[b] = a.extend({}, this.options[b], c), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this._restrictNativeVideoControls(), this._updateNativeVideoControls();
                    break;
                case "noFullWindow":
                    this.options[b] = a.extend({}, this.options[b], c), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this._restrictNativeVideoControls(), this._updateButtons();
                    break;
                case "noVolume":
                    this.options[b] = a.extend({}, this.options[b], c), this.status.noVolume = this._uaBlocklist(this.options.noVolume), this._updateVolume(), this._updateMute();
                    break;
                case "emulateHtml":
                    this.options[b] !== c && ((this.options[b] = c) ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                    break;
                case "timeFormat":
                    this.options[b] = a.extend({}, this.options[b], c);
                    break;
                case "keyEnabled":
                    this.options[b] = c, !c && this === a.jPlayer.focus && (a.jPlayer.focus = null);
                    break;
                case "keyBindings":
                    this.options[b] = a.extend(!0, {}, this.options[b], c);
                    break;
                case "audioFullScreen":
                    this.options[b] = c
            }
            return this
        },
        _refreshSize: function() {
            this._setSize(), this._addUiClass(), this._updateSize(), this._updateButtons(), this._updateAutohide(), this._trigger(a.jPlayer.event.resize)
        },
        _setSize: function() {
            this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass), this.element.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _addUiClass: function() {
            this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
        },
        _removeUiClass: function() {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
        },
        _updateSize: function() {
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            }), !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _updateAutohide: function() {
            var a = this,
                b = function() {
                    a.css.jq.gui.fadeIn(a.options.autohide.fadeIn, function() {
                        clearTimeout(a.internal.autohideId), a.internal.autohideId = setTimeout(function() {
                            a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)
                        }, a.options.autohide.hold)
                    })
                };
            this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(".jPlayerAutohide"), this.css.jq.gui.unbind(".jPlayerAutohide"), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind("mousemove.jPlayer.jPlayerAutohide", b), this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide", b), this.css.jq.gui.hide()) : this.css.jq.gui.show())
        },
        fullScreen: function() {
            this._setOption("fullScreen", !0)
        },
        restoreScreen: function() {
            this._setOption("fullScreen", !1)
        },
        _fullscreenAddEventListeners: function() {
            var b = this,
                c = a.jPlayer.nativeFeatures.fullscreen;
            c.api.fullscreenEnabled && c.event.fullscreenchange && ("function" != typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function() {
                b._fullscreenchange()
            }), document.addEventListener(c.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
        },
        _fullscreenRemoveEventListeners: function() {
            var b = a.jPlayer.nativeFeatures.fullscreen;
            this.internal.fullscreenchangeHandler && document.addEventListener(b.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
        },
        _fullscreenchange: function() {
            this.options.fullScreen && !a.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
        },
        _requestFullscreen: function() {
            var b = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0],
                c = a.jPlayer.nativeFeatures.fullscreen;
            c.used.webkitVideo && (b = this.htmlElement.video), c.api.fullscreenEnabled && c.api.requestFullscreen(b)
        },
        _exitFullscreen: function() {
            var b, c = a.jPlayer.nativeFeatures.fullscreen;
            c.used.webkitVideo && (b = this.htmlElement.video), c.api.fullscreenEnabled && c.api.exitFullscreen(b)
        },
        _html_initMedia: function(b) {
            var c = a(this.htmlElement.media).empty();
            a.each(b.track || [], function(a, b) {
                var d = document.createElement("track");
                d.setAttribute("kind", b.kind ? b.kind : ""), d.setAttribute("src", b.src ? b.src : ""), d.setAttribute("srclang", b.srclang ? b.srclang : ""), d.setAttribute("label", b.label ? b.label : ""), b.def && d.setAttribute("default", b.def), c.append(d)
            }), this.htmlElement.media.src = this.status.src, "none" !== this.options.preload && this._html_load(), this._trigger(a.jPlayer.event.timeupdate)
        },
        _html_setFormat: function(b) {
            var c = this;
            a.each(this.formats, function(a, d) {
                return c.html.support[d] && b[d] ? (c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1) : void 0
            })
        },
        _html_setAudio: function(a) {
            this._html_setFormat(a), this.htmlElement.media = this.htmlElement.audio, this._html_initMedia(a)
        },
        _html_setVideo: function(a) {
            this._html_setFormat(a), this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(a.poster) ? a.poster : ""), this.htmlElement.media = this.htmlElement.video, this._html_initMedia(a)
        },
        _html_resetMedia: function() {
            this.htmlElement.media && (this.htmlElement.media.id === this.internal.video.id && !this.status.nativeVideoControls && this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.htmlElement.media.pause())
        },
        _html_clearMedia: function() {
            this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
        },
        _html_load: function() {
            this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load()), clearTimeout(this.internal.htmlDlyCmdId)
        },
        _html_play: function(a) {
            var b = this,
                c = this.htmlElement.media;
            if (this._html_load(), isNaN(a)) c.play();
            else {
                this.internal.cmdsIgnored && c.play();
                try {
                    if (c.seekable && !("object" == typeof c.seekable && 0 < c.seekable.length)) throw 1;
                    c.currentTime = a, c.play()
                } catch (d) {
                    return void(this.internal.htmlDlyCmdId = setTimeout(function() {
                        b.play(a)
                    }, 250))
                }
            }
            this._html_checkWaitForPlay()
        },
        _html_pause: function(a) {
            var b = this,
                c = this.htmlElement.media;
            if (a > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId), c.pause(), !isNaN(a)) try {
                if (c.seekable && !("object" == typeof c.seekable && 0 < c.seekable.length)) throw 1;
                c.currentTime = a
            } catch (d) {
                return void(this.internal.htmlDlyCmdId = setTimeout(function() {
                    b.pause(a)
                }, 250))
            }
            a > 0 && this._html_checkWaitForPlay()
        },
        _html_playHead: function(a) {
            var b = this,
                c = this.htmlElement.media;
            this._html_load();
            try {
                if ("object" == typeof c.seekable && 0 < c.seekable.length) c.currentTime = a * c.seekable.end(c.seekable.length - 1) / 100;
                else {
                    if (!(0 < c.duration) || isNaN(c.duration)) throw "e";
                    c.currentTime = a * c.duration / 100
                }
            } catch (d) {
                return void(this.internal.htmlDlyCmdId = setTimeout(function() {
                    b.playHead(a)
                }, 250))
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },
        _html_checkWaitForPlay: function() {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _html_volume: function(a) {
            this.html.audio.available && (this.htmlElement.audio.volume = a), this.html.video.available && (this.htmlElement.video.volume = a)
        },
        _html_mute: function(a) {
            this.html.audio.available && (this.htmlElement.audio.muted = a), this.html.video.available && (this.htmlElement.video.muted = a)
        },
        _flash_setAudio: function(b) {
            var c = this;
            try {
                a.each(this.formats, function(a, d) {
                    if (c.flash.support[d] && b[d]) {
                        switch (d) {
                            case "m4a":
                            case "fla":
                                c._getMovie().fl_setAudio_m4a(b[d]);
                                break;
                            case "mp3":
                                c._getMovie().fl_setAudio_mp3(b[d]);
                                break;
                            case "rtmpa":
                                c._getMovie().fl_setAudio_rtmp(b[d])
                        }
                        return c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1
                    }
                }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (d) {
                this._flashError(d)
            }
        },
        _flash_setVideo: function(b) {
            var c = this;
            try {
                a.each(this.formats, function(a, d) {
                    if (c.flash.support[d] && b[d]) {
                        switch (d) {
                            case "m4v":
                            case "flv":
                                c._getMovie().fl_setVideo_m4v(b[d]);
                                break;
                            case "rtmpv":
                                c._getMovie().fl_setVideo_rtmp(b[d])
                        }
                        return c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1
                    }
                }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (d) {
                this._flashError(d)
            }
        },
        _flash_resetMedia: function() {
            this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            }), this._flash_pause(NaN)
        },
        _flash_clearMedia: function() {
            try {
                this._getMovie().fl_clearMedia()
            } catch (a) {
                this._flashError(a)
            }
        },
        _flash_load: function() {
            try {
                this._getMovie().fl_load()
            } catch (a) {
                this._flashError(a)
            }
            this.status.waitForLoad = !1
        },
        _flash_play: function(a) {
            try {
                this._getMovie().fl_play(a)
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad = !1, this._flash_checkWaitForPlay()
        },
        _flash_pause: function(a) {
            try {
                this._getMovie().fl_pause(a)
            } catch (b) {
                this._flashError(b)
            }
            a > 0 && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
        },
        _flash_playHead: function(a) {
            try {
                this._getMovie().fl_play_head(a)
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },
        _flash_checkWaitForPlay: function() {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _flash_volume: function(a) {
            try {
                this._getMovie().fl_volume(a)
            } catch (b) {
                this._flashError(b)
            }
        },
        _flash_mute: function(a) {
            try {
                this._getMovie().fl_mute(a)
            } catch (b) {
                this._flashError(b)
            }
        },
        _getMovie: function() {
            return document[this.internal.flash.id]
        },
        _getFlashPluginVersion: function() {
            var a, b = 0;
            if (window.ActiveXObject) try {
                if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                    var c = a.GetVariable("$version");
                    c && (c = c.split(" ")[1].split(","), b = parseInt(c[0], 10) + "." + parseInt(c[1], 10))
                }
            } catch (d) {} else navigator.plugins && 0 < navigator.mimeTypes.length && (a = navigator.plugins["Shockwave Flash"]) && (b = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1"));
            return 1 * b
        },
        _checkForFlash: function(a) {
            var b = !1;
            return this._getFlashPluginVersion() >= a && (b = !0), b
        },
        _validString: function(a) {
            return a && "string" == typeof a
        },
        _limitValue: function(a, b, c) {
            return b > a ? b : a > c ? c : a
        },
        _urlNotSetError: function(b) {
            this._error({
                type: a.jPlayer.error.URL_NOT_SET,
                context: b,
                message: a.jPlayer.errorMsg.URL_NOT_SET,
                hint: a.jPlayer.errorHint.URL_NOT_SET
            })
        },
        _flashError: function(b) {
            var c;
            c = this.internal.ready ? "FLASH_DISABLED" : "FLASH", this._error({
                type: a.jPlayer.error[c],
                context: this.internal.flash.swf,
                message: a.jPlayer.errorMsg[c] + b.message,
                hint: a.jPlayer.errorHint[c]
            }), this.internal.flash.jq.css({
                width: "1px",
                height: "1px"
            })
        },
        _error: function(b) {
            this._trigger(a.jPlayer.event.error, b), this.options.errorAlerts && this._alert("Error!" + (b.message ? "\n\n" + b.message : "") + (b.hint ? "\n\n" + b.hint : "") + "\n\nContext: " + b.context)
        },
        _warning: function(c) {
            this._trigger(a.jPlayer.event.warning, b, c), this.options.warningAlerts && this._alert("Warning!" + (c.message ? "\n\n" + c.message : "") + (c.hint ? "\n\n" + c.hint : "") + "\n\nContext: " + c.context)
        },
        _alert: function(a) {
            alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + a)
        },
        _emulateHtmlBridge: function() {
            var b = this;
            a.each(a.jPlayer.emulateMethods.split(/\s+/g), function(a, c) {
                b.internal.domNode[c] = function(a) {
                    b[c](a)
                }
            }), a.each(a.jPlayer.event, function(c, d) {
                var e = !0;
                a.each(a.jPlayer.reservedEvent.split(/\s+/g), function(a, b) {
                    return b === c ? e = !1 : void 0
                }), e && b.element.bind(d + ".jPlayer.jPlayerHtml", function() {
                    b._emulateHtmlUpdate();
                    var a = document.createEvent("Event");
                    a.initEvent(c, !1, !0), b.internal.domNode.dispatchEvent(a)
                })
            })
        },
        _emulateHtmlUpdate: function() {
            var b = this;
            a.each(a.jPlayer.emulateStatus.split(/\s+/g), function(a, c) {
                b.internal.domNode[c] = b.status[c]
            }), a.each(a.jPlayer.emulateOptions.split(/\s+/g), function(a, c) {
                b.internal.domNode[c] = b.options[c]
            })
        },
        _destroyHtmlBridge: function() {
            var b = this;
            this.element.unbind(".jPlayerHtml"), a.each((a.jPlayer.emulateMethods + " " + a.jPlayer.emulateStatus + " " + a.jPlayer.emulateOptions).split(/\s+/g), function(a, c) {
                delete b.internal.domNode[c]
            })
        }
    }, a.jPlayer.error = {
        FLASH: "e_flash",
        FLASH_DISABLED: "e_flash_disabled",
        NO_SOLUTION: "e_no_solution",
        NO_SUPPORT: "e_no_support",
        URL: "e_url",
        URL_NOT_SET: "e_url_not_set",
        VERSION: "e_version"
    }, a.jPlayer.errorMsg = {
        FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
        FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
        NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
        NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
        URL: "Media URL could not be loaded.",
        URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
        VERSION: "jPlayer " + a.jPlayer.prototype.version.script + " needs Jplayer.swf version " + a.jPlayer.prototype.version.needFlash + " but found "
    }, a.jPlayer.errorHint = {
        FLASH: "Check your swfPath option and that Jplayer.swf is there.",
        FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
        NO_SOLUTION: "Review the jPlayer options: support and supplied.",
        NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
        URL: "Check media URL is valid.",
        URL_NOT_SET: "Use setMedia() to set the media URL.",
        VERSION: "Update jPlayer files."
    }, a.jPlayer.warning = {
        CSS_SELECTOR_COUNT: "e_css_selector_count",
        CSS_SELECTOR_METHOD: "e_css_selector_method",
        CSS_SELECTOR_STRING: "e_css_selector_string",
        OPTION_KEY: "e_option_key"
    }, a.jPlayer.warningMsg = {
        CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
        CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
        CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
        OPTION_KEY: "The option requested in jPlayer('option') is undefined."
    }, a.jPlayer.warningHint = {
        CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
        CSS_SELECTOR_METHOD: "Check your method name.",
        CSS_SELECTOR_STRING: "Check your css selector is a string.",
        OPTION_KEY: "Check your option name."
    }
}),
function(a) {
    a.fn.heightLine = function() {
        var b, c = this,
            d = Math.random(),
            e = {
                op: {
                    maxWidth: 1e4,
                    minWidth: 0,
                    fontSizeCheck: !1
                },
                setOption: function(b) {
                    this.op = a.extend(this.op, b)
                },
                destroy: function() {
                    c.css("height", "")
                },
                create: function(b) {
                    var d = this,
                        e = 0,
                        f = a(window).width();
                    d.setOption(b), f <= d.op.maxWidth && f >= d.op.minWidth && c.each(function() {
                        a(this).outerHeight() > e && (e = a(this).outerHeight())
                    }).each(function() {
                        var b = e - parseInt(a(this).css("padding-top")) - parseInt(a(this).css("padding-bottom"));
                        a(this).height(b)
                    })
                },
                refresh: function(a) {
                    this.destroy(), this.create(a)
                },
                removeEvent: function() {
                    a(window).off("resize." + d), c.off("destroy refresh"), clearInterval(b)
                }
            };
        if ("string" == typeof arguments[0] && "destroy" === arguments[0]) c.trigger("destroy");
        else if ("string" == typeof arguments[0] && "refresh" === arguments[0]) c.trigger("refresh");
        else if (e.create(arguments[0]), a(window).on("resize." + d, function() {
            e.refresh()
        }), c.on("destroy", function() {
            e.removeEvent(), e.destroy()
        }).on("refresh", function() {
            e.refresh()
        }), e.op.fontSizeCheck) {
            a("#fontSizeChange").length <= 0 && a("<span id='fontSizeChange'></span>").css({
                width: 0,
                height: "1em",
                position: "absolute",
                left: 0,
                top: 0
            }).appendTo("body");
            var f = a("#fontSizeChange").height();
            b = setInterval(function() {
                f != a("#fontSizeChange").height() && e.refresh()
            }, 100)
        }
        return c
    }
}(jQuery),
function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = "*",
        h = function() {}, i = function(a, b) {
            return a - b
        }, j = {
            n: {}
        }, k = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = k.listeners(a),
                j = 0,
                l = [],
                m = {}, n = [],
                o = b;
            b = a, c = 0;
            for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
            for (l.sort(i); l[j] < 0;) if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
            for (p = 0; q > p; p++) if (e = h[p], "zIndex" in e) if (e.zIndex == l[j]) {
                if (n.push(e.apply(d, g)), c) break;
                do if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break;
                while (e)
            } else m[e.zIndex] = e;
            else if (n.push(e.apply(d, g)), c) break;
            return c = f, b = o, n.length ? n : null
        };
    k._events = j, k.listeners = function(a) {
        var b, c, d, e, h, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++) for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, k.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
            n: {}
        });
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++) if (d.f[e] == b) return h;
        return d.f.push(b),
        function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, k.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, k.stop = function() {
        c = 1
    }, k.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, k.nts = function() {
        return b.split(f)
    }, k.off = k.unbind = function(a, b) {
        if (!a) return void(k._events = j = {
            n: {}
        });
        var c, d, h, i, l, m, n, o = a.split(f),
            p = [j];
        for (i = 0, l = o.length; l > i; i++) for (m = 0; m < p.length; m += h.length - 2) {
            if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
            else for (d in c) c[e](d) && h.push(c[d]);
            p.splice.apply(p, h)
        }
        for (i = 0, l = p.length; l > i; i++) for (c = p[i]; c.n;) {
            if (b) {
                if (c.f) {
                    for (m = 0, n = c.f.length; n > m; m++) if (c.f[m] == b) {
                        c.f.splice(m, 1);
                        break
                    }!c.f.length && delete c.f
                }
                for (d in c.n) if (c.n[e](d) && c.n[d].f) {
                    var q = c.n[d].f;
                    for (m = 0, n = q.length; n > m; m++) if (q[m] == b) {
                        q.splice(m, 1);
                        break
                    }!q.length && delete c.n[d].f
                }
            } else {
                delete c.f;
                for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f
            }
            c = c.n
        }
    }, k.once = function(a, b) {
        var c = function() {
            return k.unbind(a, c), b.apply(this, arguments)
        };
        return k.on(a, c)
    }, k.version = d, k.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
        return k
    }) : a.eve = k
}(this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function(c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function(a, b) {
    function c(a) {
        if (c.is(a, "function")) return u ? a() : b.on("raphael.DOMload", a);
        if (c.is(a, V)) return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a);
        var d = Array.prototype.slice.call(arguments, 0);
        if (c.is(d[d.length - 1], "function")) {
            var e = d.pop();
            return u ? e.call(c._engine.create[D](c, d)) : b.on("raphael.DOMload", function() {
                e.call(c._engine.create[D](c, d))
            })
        }
        return c._engine.create[D](c, arguments)
    }
    function d(a) {
        if (Object(a) !== a) return a;
        var b = new a.constructor;
        for (var c in a) a[z](c) && (b[c] = d(a[c]));
        return b
    }
    function e(a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0])
    }
    function f(a, b, c) {
        function d() {
            var f = Array.prototype.slice.call(arguments, 0),
                g = f.join("␀"),
                h = d.cache = d.cache || {}, i = d.count = d.count || [];
            return h[z](g) ? (e(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[D](b, f), c ? c(h[g]) : h[g])
        }
        return d
    }
    function g() {
        return this.hex
    }
    function h(a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{
                x: +a[d - 2],
                y: +a[d - 1]
            }, {
                x: +a[d],
                y: +a[d + 1]
            }, {
                x: +a[d + 2],
                y: +a[d + 3]
            }, {
                x: +a[d + 4],
                y: +a[d + 5]
            }];
            b ? d ? e - 4 == d ? f[3] = {
                x: +a[0],
                y: +a[1]
            } : e - 2 == d && (f[2] = {
                x: +a[0],
                y: +a[1]
            }, f[3] = {
                x: +a[2],
                y: +a[3]
            }) : f[0] = {
                x: +a[e - 2],
                y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                x: +a[d],
                y: +a[d + 1]
            }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }
    function i(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c
    }
    function j(a, b, c, d, e, f, g, h, j) {
        null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
        for (var k = j / 2, l = 12, m = [-.1252, .1252, - .3678, .3678, - .5873, .5873, - .7699, .7699, - .9041, .9041, - .9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) {
            var q = k * m[p] + k,
                r = i(q, a, c, e, g),
                s = i(q, b, d, f, h),
                t = r * r + s * s;
            o += n[p] * N.sqrt(t)
        }
        return k * o
    }
    function k(a, b, c, d, e, f, g, h, i) {
        if (!(0 > i || j(a, b, c, d, e, f, g, h) < i)) {
            var k, l = 1,
                m = l / 2,
                n = l - m,
                o = .01;
            for (k = j(a, b, c, d, e, f, g, h, n); Q(k - i) > o;) m /= 2, n += (i > k ? 1 : -1) * m, k = j(a, b, c, d, e, f, g, h, n);
            return n
        }
    }
    function l(a, b, c, d, e, f, g, h) {
        if (!(O(a, c) < P(e, g) || P(a, c) > O(e, g) || O(b, d) < P(f, h) || P(b, d) > O(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                k = (a - c) * (f - h) - (b - d) * (e - g);
            if (k) {
                var l = i / k,
                    m = j / k,
                    n = +l.toFixed(2),
                    o = +m.toFixed(2);
                if (!(n < +P(a, c).toFixed(2) || n > +O(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +O(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +O(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +O(f, h).toFixed(2))) return {
                    x: l,
                    y: m
                }
            }
        }
    }
    function m(a, b, d) {
        var e = c.bezierBBox(a),
            f = c.bezierBBox(b);
        if (!c.isBBoxIntersect(e, f)) return d ? 0 : [];
        for (var g = j.apply(0, a), h = j.apply(0, b), i = ~~ (g / 5), k = ~~ (h / 5), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; i + 1 > q; q++) {
            var r = c.findDotsAtSegment.apply(c, a.concat(q / i));
            m.push({
                x: r.x,
                y: r.y,
                t: q / i
            })
        }
        for (q = 0; k + 1 > q; q++) r = c.findDotsAtSegment.apply(c, b.concat(q / k)), n.push({
            x: r.x,
            y: r.y,
            t: q / k
        });
        for (q = 0; i > q; q++) for (var s = 0; k > s; s++) {
            var t = m[q],
                u = m[q + 1],
                v = n[s],
                w = n[s + 1],
                x = Q(u.x - t.x) < .001 ? "y" : "x",
                y = Q(w.x - v.x) < .001 ? "y" : "x",
                z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
            if (z) {
                if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
                o[z.x.toFixed(4)] = z.y.toFixed(4);
                var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
                    B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                A >= 0 && 1 >= A && B >= 0 && 1 >= B && (d ? p++ : p.push({
                    x: z.x,
                    y: z.y,
                    t1: A,
                    t2: B
                }))
            }
        }
        return p
    }
    function n(a, b, d) {
        a = c._path2curve(a), b = c._path2curve(b);
        for (var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
            var s = a[q];
            if ("M" == s[0]) e = i = s[1], f = j = s[2];
            else {
                "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var t = 0, u = b.length; u > t; t++) {
                    var v = b[t];
                    if ("M" == v[0]) g = k = v[1], h = l = v[2];
                    else {
                        "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var w = m(n, o, d);
                        if (d) p += w;
                        else {
                            for (var x = 0, y = w.length; y > x; x++) w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
                            p = p.concat(w)
                        }
                    }
                }
            }
        }
        return p
    }
    function o(a, b, c, d, e, f) {
        null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }
    function p() {
        return this.x + H + this.y + H + this.width + " × " + this.height
    }
    function q(a, b, c, d, e, f) {
        function g(a) {
            return ((l * a + k) * a + j) * a
        }
        function h(a, b) {
            var c = i(a, b);
            return ((o * c + n) * c + m) * c
        }
        function i(a, b) {
            var c, d, e, f, h, i;
            for (e = a, i = 0; 8 > i; i++) {
                if (f = g(e) - a, Q(f) < b) return e;
                if (h = (3 * l * e + 2 * k) * e + j, Q(h) < 1e-6) break;
                e -= f / h
            }
            if (c = 0, d = 1, e = a, c > e) return c;
            if (e > d) return d;
            for (; d > c;) {
                if (f = g(e), Q(f - a) < b) return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }
        var j = 3 * b,
            k = 3 * (d - b) - j,
            l = 1 - j - k,
            m = 3 * c,
            n = 3 * (e - c) - m,
            o = 1 - m - n;
        return h(a, 1 / (200 * f))
    }
    function r(a, b) {
        var c = [],
            d = {};
        if (this.ms = b, this.times = 1, a) {
            for (var e in a) a[z](e) && (d[_(e)] = a[e], c.push(_(e)));
            c.sort(la)
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c
    }
    function s(a, d, e, f, g, h) {
        e = _(e);
        var i, j, k, l, m, n, p = a.ms,
            r = {}, s = {}, t = {};
        if (f) for (v = 0, x = hb.length; x > v; v++) {
            var u = hb[v];
            if (u.el.id == d.id && u.anim == a) {
                u.percent != e ? (hb.splice(v, 1), k = 1) : j = u, d.attr(u.totalOrigin);
                break
            }
        } else f = +s;
        for (var v = 0, x = a.percents.length; x > v; v++) {
            if (a.percents[v] == e || a.percents[v] > f * a.top) {
                e = a.percents[v], m = a.percents[v - 1] || 0, p = p / a.top * (e - m), l = a.percents[v + 1], i = a.anim[e];
                break
            }
            f && d.attr(a.anim[a.percents[v]])
        }
        if (i) {
            if (j) j.initstatus = f, j.start = new Date - j.ms * f;
            else {
                for (var y in i) if (i[z](y) && (da[z](y) || d.paper.customAttributes[z](y))) switch (r[y] = d.attr(y), null == r[y] && (r[y] = ca[y]), s[y] = i[y], da[y]) {
                    case T:
                        t[y] = (s[y] - r[y]) / p;
                        break;
                    case "colour":
                        r[y] = c.getRGB(r[y]);
                        var A = c.getRGB(s[y]);
                        t[y] = {
                            r: (A.r - r[y].r) / p,
                            g: (A.g - r[y].g) / p,
                            b: (A.b - r[y].b) / p
                        };
                        break;
                    case "path":
                        var B = Ka(r[y], s[y]),
                            C = B[1];
                        for (r[y] = B[0], t[y] = [], v = 0, x = r[y].length; x > v; v++) {
                            t[y][v] = [0];
                            for (var D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (C[v][D] - r[y][v][D]) / p
                        }
                        break;
                    case "transform":
                        var G = d._,
                            H = Pa(G[y], s[y]);
                        if (H) for (r[y] = H.from, s[y] = H.to, t[y] = [], t[y].real = !0, v = 0, x = r[y].length; x > v; v++) for (t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p;
                        else {
                            var K = d.matrix || new o,
                                L = {
                                    _: {
                                        transform: G.transform
                                    },
                                    getBBox: function() {
                                        return d.getBBox(1)
                                    }
                                };
                            r[y] = [K.a, K.b, K.c, K.d, K.e, K.f], Na(L, s[y]), s[y] = L._.transform, t[y] = [(L.matrix.a - K.a) / p, (L.matrix.b - K.b) / p, (L.matrix.c - K.c) / p, (L.matrix.d - K.d) / p, (L.matrix.e - K.e) / p, (L.matrix.f - K.f) / p]
                        }
                        break;
                    case "csv":
                        var M = I(i[y])[J](w),
                            N = I(r[y])[J](w);
                        if ("clip-rect" == y) for (r[y] = N, t[y] = [], v = N.length; v--;) t[y][v] = (M[v] - r[y][v]) / p;
                        s[y] = M;
                        break;
                    default:
                        for (M = [][E](i[y]), N = [][E](r[y]), t[y] = [], v = d.paper.customAttributes[y].length; v--;) t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
                }
                var O = i.easing,
                    P = c.easing_formulas[O];
                if (!P) if (P = I(O).match(Z), P && 5 == P.length) {
                    var Q = P;
                    P = function(a) {
                        return q(a, + Q[1], + Q[2], + Q[3], + Q[4], p)
                    }
                } else P = na;
                if (n = i.start || a.start || +new Date, u = {
                    anim: a,
                    percent: e,
                    timestamp: n,
                    start: n + (a.del || 0),
                    status: 0,
                    initstatus: f || 0,
                    stop: !1,
                    ms: p,
                    easing: P,
                    from: r,
                    diff: t,
                    to: s,
                    el: d,
                    callback: i.callback,
                    prev: m,
                    next: l,
                    repeat: h || a.times,
                    origin: d.attr(),
                    totalOrigin: g
                }, hb.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - p * f, 1 == hb.length)) return jb();
                k && (u.start = new Date - u.ms * f), 1 == hb.length && ib(jb)
            }
            b("raphael.anim.start." + d.id, d, a)
        }
    }
    function t(a) {
        for (var b = 0; b < hb.length; b++) hb[b].el.paper == a && hb.splice(b--, 1)
    }
    c.version = "2.1.0", c.eve = b;
    var u, v, w = /[, ]+/,
        x = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        }, y = /\{(\d+)\}/g,
        z = "hasOwnProperty",
        A = {
            doc: document,
            win: a
        }, B = {
            was: Object.prototype[z].call(A.win, "Raphael"),
            is: A.win.Raphael
        }, C = function() {
            this.ca = this.customAttributes = {}
        }, D = "apply",
        E = "concat",
        F = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch,
        G = "",
        H = " ",
        I = String,
        J = "split",
        K = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [J](H),
        L = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, M = I.prototype.toLowerCase,
        N = Math,
        O = N.max,
        P = N.min,
        Q = N.abs,
        R = N.pow,
        S = N.PI,
        T = "number",
        U = "string",
        V = "array",
        W = Object.prototype.toString,
        X = (c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        Y = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        }, Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        $ = N.round,
        _ = parseFloat,
        aa = parseInt,
        ba = I.prototype.toUpperCase,
        ca = c._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        }, da = c._availableAnimAttrs = {
            blur: T,
            "clip-rect": "csv",
            cx: T,
            cy: T,
            fill: "colour",
            "fill-opacity": T,
            "font-size": T,
            height: T,
            opacity: T,
            path: "path",
            r: T,
            rx: T,
            ry: T,
            stroke: "colour",
            "stroke-opacity": T,
            "stroke-width": T,
            transform: "transform",
            width: T,
            x: T,
            y: T
        }, ea = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        fa = {
            hs: 1,
            rg: 1
        }, ga = /,?([achlmqrstvxz]),?/gi,
        ha = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ia = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ja = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        ka = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        la = function(a, b) {
            return _(a) - _(b)
        }, ma = function() {}, na = function(a) {
            return a
        }, oa = c._rectPath = function(a, b, c, d, e) {
            return e ? [
                ["M", a + e, b],
                ["l", c - 2 * e, 0],
                ["a", e, e, 0, 0, 1, e, e],
                ["l", 0, d - 2 * e],
                ["a", e, e, 0, 0, 1, - e, e],
                ["l", 2 * e - c, 0],
                ["a", e, e, 0, 0, 1, - e, - e],
                ["l", 0, 2 * e - d],
                ["a", e, e, 0, 0, 1, e, - e],
                ["z"]
            ] : [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", - c, 0],
                ["z"]
            ]
        }, pa = function(a, b, c, d) {
            return null == d && (d = c), [
                ["M", a, b],
                ["m", 0, - d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, - 2 * d],
                ["z"]
            ]
        }, qa = c._getPath = {
            path: function(a) {
                return a.attr("path")
            },
            circle: function(a) {
                var b = a.attrs;
                return pa(b.cx, b.cy, b.r)
            },
            ellipse: function(a) {
                var b = a.attrs;
                return pa(b.cx, b.cy, b.rx, b.ry)
            },
            rect: function(a) {
                var b = a.attrs;
                return oa(b.x, b.y, b.width, b.height, b.r)
            },
            image: function(a) {
                var b = a.attrs;
                return oa(b.x, b.y, b.width, b.height)
            },
            text: function(a) {
                var b = a._getBBox();
                return oa(b.x, b.y, b.width, b.height)
            },
            set: function(a) {
                var b = a._getBBox();
                return oa(b.x, b.y, b.width, b.height)
            }
        }, ra = c.mapPath = function(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = Ka(a), e = 0, g = a.length; g > e; e++) for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        };
    if (c._g = A, c.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
        var sa, ta = A.doc.createElement("div");
        if (ta.innerHTML = '<v:shape adj="1"/>', sa = ta.firstChild, sa.style.behavior = "url(#default#VML)", !sa || "object" != typeof sa.adj) return c.type = G;
        ta = null
    }
    c.svg = !(c.vml = "VML" == c.type), c._Paper = C, c.fn = v = C.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function(a, b) {
        return b = M.call(b), "finite" == b ? !Y[z](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || W.call(a).slice(8, - 1).toLowerCase() == b
    }, c.angle = function(a, b, d, e, f, g) {
        if (null == f) {
            var h = a - d,
                i = b - e;
            return h || i ? (180 + 180 * N.atan2(-i, - h) / S + 360) % 360 : 0
        }
        return c.angle(a, b, f, g) - c.angle(d, e, f, g)
    }, c.rad = function(a) {
        return a % 360 * S / 180
    }, c.deg = function(a) {
        return 180 * a / S % 360
    }, c.snapTo = function(a, b, d) {
        if (d = c.is(d, "finite") ? d : 10, c.is(a, V)) {
            for (var e = a.length; e--;) if (Q(a[e] - b) <= d) return a[e]
        } else {
            a = +a;
            var f = b % a;
            if (d > f) return b - f;
            if (f > a - d) return b - f + a
        }
        return b
    }, c.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    }(/[xy]/g, function(a) {
        var b = 16 * N.random() | 0,
            c = "x" == a ? b : 3 & b | 8;
        return c.toString(16)
    }), c.setWindow = function(a) {
        b("raphael.setWindow", c, A.win, a), A.win = a, A.doc = A.win.document, c._engine.initWin && c._engine.initWin(A.win)
    };
    var ua = function(a) {
        if (c.vml) {
            var b, d = /^\s+|\s+$/g;
            try {
                var e = new ActiveXObject("htmlfile");
                e.write("<body>"), e.close(), b = e.body
            } catch (g) {
                b = createPopup().document.body
            }
            var h = b.createTextRange();
            ua = f(function(a) {
                try {
                    b.style.color = I(a).replace(d, G);
                    var c = h.queryCommandValue("ForeColor");
                    return c = (255 & c) << 16 | 65280 & c | (16711680 & c) >>> 16, "#" + ("000000" + c.toString(16)).slice(-6)
                } catch (e) {
                    return "none"
                }
            })
        } else {
            var i = A.doc.createElement("i");
            i.title = "Raphaël Colour Picker", i.style.display = "none", A.doc.body.appendChild(i), ua = f(function(a) {
                return i.style.color = a, A.doc.defaultView.getComputedStyle(i, G).getPropertyValue("color")
            })
        }
        return ua(a)
    }, va = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    }, wa = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    }, xa = function() {
        return this.hex
    }, ya = function(a, b, d) {
        if (null == b && c.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && c.is(a, U)) {
            var e = c.getRGB(a);
            a = e.r, b = e.g, d = e.b
        }
        return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
    }, za = function(a, b, d, e) {
        a *= 255, b *= 255, d *= 255;
        var f = {
            r: a,
            g: b,
            b: d,
            hex: c.rgb(a, b, d),
            toString: xa
        };
        return c.is(e, "finite") && (f.opacity = e), f
    };
    c.color = function(a) {
        var b;
        return c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
            hex: "none"
        }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = xa, a
    }, c.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = c * b, h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], za(e, f, g, d)
    }, c.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], za(e, f, g, d)
    }, c.rgb2hsb = function(a, b, c) {
        c = ya(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
            h: d,
            s: e,
            b: f,
            toString: va
        }
    }, c.rgb2hsl = function(a, b, c) {
        c = ya(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
            h: d,
            s: e,
            l: f,
            toString: wa
        }
    }, c._path2string = function() {
        return this.join(",").replace(ga, "$1")
    }, c._preload = function(a, b) {
        var c = A.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
            b.call(this), this.onload = null, A.doc.body.removeChild(this)
        }, c.onerror = function() {
            A.doc.body.removeChild(this)
        }, A.doc.body.appendChild(c), c.src = a
    }, c.getRGB = f(function(a) {
        if (!a || (a = I(a)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: g
        };
        if ("none" == a) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: g
        };
        !(fa[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = ua(a));
        var b, d, e, f, h, i, j = a.match(X);
        return j ? (j[2] && (e = aa(j[2].substring(5), 16), d = aa(j[2].substring(3, 5), 16), b = aa(j[2].substring(1, 3), 16)), j[3] && (e = aa((h = j[3].charAt(3)) + h, 16), d = aa((h = j[3].charAt(2)) + h, 16), b = aa((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][J](ea), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100)), j[5] ? (i = j[5][J](ea), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsb2rgb(b, d, e, f)) : j[6] ? (i = j[6][J](ea), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsl2rgb(b, d, e, f)) : (j = {
            r: b,
            g: d,
            b: e,
            toString: g
        }, j.hex = "#" + (16777216 | e | d << 8 | b << 16).toString(16).slice(1), c.is(f, "finite") && (j.opacity = f), j)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: g
        }
    }, c), c.hsb = f(function(a, b, d) {
        return c.hsb2rgb(a, b, d).hex
    }), c.hsl = f(function(a, b, d) {
        return c.hsl2rgb(a, b, d).hex
    }), c.rgb = f(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
    }), c.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: a || .75
        }, c = this.hsb2rgb(b.h, b.s, b.b);
        return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        })), c.hex
    }, c.getColor.reset = function() {
        delete this.start
    }, c.parsePathString = function(a) {
        if (!a) return null;
        var b = Aa(a);
        if (b.arr) return Ca(b.arr);
        var d = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, e = [];
        return c.is(a, V) && c.is(a[0], V) && (e = Ca(a)), e.length || I(a).replace(ha, function(a, b, c) {
            var f = [],
                g = b.toLowerCase();
            if (c.replace(ja, function(a, b) {
                b && f.push(+b)
            }), "m" == g && f.length > 2 && (e.push([b][E](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][E](f));
            else for (; f.length >= d[g] && (e.push([b][E](f.splice(0, d[g]))), d[g]););
        }), e.toString = c._path2string, b.arr = Ca(e), e
    }, c.parseTransformString = f(function(a) {
        if (!a) return null;
        var b = [];
        return c.is(a, V) && c.is(a[0], V) && (b = Ca(a)), b.length || I(a).replace(ia, function(a, c, d) {
            var e = [];
            M.call(c), d.replace(ja, function(a, b) {
                b && e.push(+b)
            }), b.push([c][E](e))
        }), b.toString = c._path2string, b
    });
    var Aa = function(a) {
        var b = Aa.ps = Aa.ps || {};
        return b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
        }, setTimeout(function() {
            for (var c in b) b[z](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        }), b[a]
    };
    c.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
            k = R(j, 3),
            l = R(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            w = j * e + i * g,
            x = j * f + i * h,
            y = 90 - 180 * N.atan2(q - s, r - t) / S;
        return (q > s || t > r) && (y += 180), {
            x: o,
            y: p,
            m: {
                x: q,
                y: r
            },
            n: {
                x: s,
                y: t
            },
            start: {
                x: u,
                y: v
            },
            end: {
                x: w,
                y: x
            },
            alpha: y
        }
    }, c.bezierBBox = function(a, b, d, e, f, g, h, i) {
        c.is(a, "array") || (a = [a, b, d, e, f, g, h, i]);
        var j = Ja.apply(null, a);
        return {
            x: j.min.x,
            y: j.min.y,
            x2: j.max.x,
            y2: j.max.y,
            width: j.max.x - j.min.x,
            height: j.max.y - j.min.y
        }
    }, c.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
    }, c.isBBoxIntersect = function(a, b) {
        var d = c.isPointInsideBBox;
        return d(b, a.x, a.y) || d(b, a.x2, a.y) || d(b, a.x, a.y2) || d(b, a.x2, a.y2) || d(a, b.x, b.y) || d(a, b.x2, b.y) || d(a, b.x, b.y2) || d(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
    }, c.pathIntersection = function(a, b) {
        return n(a, b)
    }, c.pathIntersectionNumber = function(a, b) {
        return n(a, b, 1)
    }, c.isPointInsidePath = function(a, b, d) {
        var e = c.pathBBox(a);
        return c.isPointInsideBBox(e, b, d) && n(a, [
            ["M", b, d],
            ["H", e.x2 + 10]
        ], 1) % 2 == 1
    }, c._removedFactory = function(a) {
        return function() {
            b("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
        }
    };
    var Ba = c.pathBBox = function(a) {
        var b = Aa(a);
        if (b.bbox) return d(b.bbox);
        if (!a) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0
        };
        a = Ka(a);
        for (var c, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++) if (c = a[i], "M" == c[0]) e = c[1], f = c[2], g.push(e), h.push(f);
        else {
            var k = Ja(e, f, c[1], c[2], c[3], c[4], c[5], c[6]);
            g = g[E](k.min.x, k.max.x), h = h[E](k.min.y, k.max.y), e = c[5], f = c[6]
        }
        var l = P[D](0, g),
            m = P[D](0, h),
            n = O[D](0, g),
            o = O[D](0, h),
            p = n - l,
            q = o - m,
            r = {
                x: l,
                y: m,
                x2: n,
                y2: o,
                width: p,
                height: q,
                cx: l + p / 2,
                cy: m + q / 2
            };
        return b.bbox = d(r), r
    }, Ca = function(a) {
        var b = d(a);
        return b.toString = c._path2string, b
    }, Da = c._pathToRelative = function(a) {
        var b = Aa(a);
        if (b.rel) return Ca(b.rel);
        c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a));
        var d = [],
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
        for (var j = i, k = a.length; k > j; j++) {
            var l = d[j] = [],
                m = a[j];
            if (m[0] != M.call(m[0])) switch (l[0] = M.call(m[0]), l[0]) {
                case "a":
                    l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                    break;
                case "v":
                    l[1] = +(m[1] - f).toFixed(3);
                    break;
                case "m":
                    g = m[1], h = m[2];
                default:
                    for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
            } else {
                l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
                for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
            }
            var r = d[j].length;
            switch (d[j][0]) {
                case "z":
                    e = g, f = h;
                    break;
                case "h":
                    e += +d[j][r - 1];
                    break;
                case "v":
                    f += +d[j][r - 1];
                    break;
                default:
                    e += +d[j][r - 2], f += +d[j][r - 1]
            }
        }
        return d.toString = c._path2string, b.rel = Ca(d), d
    }, Ea = c._pathToAbsolute = function(a) {
        var b = Aa(a);
        if (b.abs) return Ca(b.abs);
        if (c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a)), !a || !a.length) return [["M", 0, 0]];
        var d = [],
            e = 0,
            f = 0,
            g = 0,
            i = 0,
            j = 0;
        "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, i = f, j++, d[0] = ["M", e, f]);
        for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) {
            if (d.push(k = []), l = a[n], l[0] != ba.call(l[0])) switch (k[0] = ba.call(l[0]), k[0]) {
                case "A":
                    k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                    break;
                case "V":
                    k[1] = +l[1] + f;
                    break;
                case "H":
                    k[1] = +l[1] + e;
                    break;
                case "R":
                    for (var p = [e, f][E](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
                    d.pop(), d = d[E](h(p, m));
                    break;
                case "M":
                    g = +l[1] + e, i = +l[2] + f;
                default:
                    for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f)
            } else if ("R" == l[0]) p = [e, f][E](l.slice(1)), d.pop(), d = d[E](h(p, m)), k = ["R"][E](l.slice(-2));
            else for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
            switch (k[0]) {
                case "Z":
                    e = g, f = i;
                    break;
                case "H":
                    e = k[1];
                    break;
                case "V":
                    f = k[1];
                    break;
                case "M":
                    g = k[k.length - 2], i = k[k.length - 1];
                default:
                    e = k[k.length - 2], f = k[k.length - 1]
            }
        }
        return d.toString = c._path2string, b.abs = Ca(d), d
    }, Fa = function(a, b, c, d) {
        return [a, b, c, d, c, d]
    }, Ga = function(a, b, c, d, e, f) {
        var g = 1 / 3,
            h = 2 / 3;
        return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    }, Ha = function(a, b, c, d, e, g, h, i, j, k) {
        var l, m = 120 * S / 180,
            n = S / 180 * (+e || 0),
            o = [],
            p = f(function(a, b, c) {
                var d = a * N.cos(c) - b * N.sin(c),
                    e = a * N.sin(c) + b * N.cos(c);
                return {
                    x: d,
                    y: e
                }
            });
        if (k) y = k[0], z = k[1], w = k[2], x = k[3];
        else {
            l = p(a, b, - n), a = l.x, b = l.y, l = p(i, j, - n), i = l.x, j = l.y;
            var q = (N.cos(S / 180 * e), N.sin(S / 180 * e), (a - i) / 2),
                r = (b - j) / 2,
                s = q * q / (c * c) + r * r / (d * d);
            s > 1 && (s = N.sqrt(s), c = s * c, d = s * d);
            var t = c * c,
                u = d * d,
                v = (g == h ? -1 : 1) * N.sqrt(Q((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                w = v * c * r / d + (a + i) / 2,
                x = v * -d * q / c + (b + j) / 2,
                y = N.asin(((b - x) / d).toFixed(9)),
                z = N.asin(((j - x) / d).toFixed(9));
            y = w > a ? S - y : y, z = w > i ? S - z : z, 0 > y && (y = 2 * S + y), 0 > z && (z = 2 * S + z), h && y > z && (y -= 2 * S), !h && z > y && (z -= 2 * S)
        }
        var A = z - y;
        if (Q(A) > m) {
            var B = z,
                C = i,
                D = j;
            z = y + m * (h && z > y ? 1 : -1), i = w + c * N.cos(z), j = x + d * N.sin(z), o = Ha(i, j, c, d, e, 0, h, C, D, [z, B, w, x])
        }
        A = z - y;
        var F = N.cos(y),
            G = N.sin(y),
            H = N.cos(z),
            I = N.sin(z),
            K = N.tan(A / 4),
            L = 4 / 3 * c * K,
            M = 4 / 3 * d * K,
            O = [a, b],
            P = [a + L * G, b - M * F],
            R = [i + L * I, j - M * H],
            T = [i, j];
        if (P[0] = 2 * O[0] - P[0], P[1] = 2 * O[1] - P[1], k) return [P, R, T][E](o);
        o = [P, R, T][E](o).join()[J](",");
        for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x;
        return U
    }, Ia = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i;
        return {
            x: R(j, 3) * a + 3 * R(j, 2) * i * c + 3 * j * i * i * e + R(i, 3) * g,
            y: R(j, 3) * b + 3 * R(j, 2) * i * d + 3 * j * i * i * f + R(i, 3) * h
        }
    }, Ja = f(function(a, b, c, d, e, f, g, h) {
        var i, j = e - 2 * c + a - (g - 2 * e + c),
            k = 2 * (c - a) - 2 * (e - c),
            l = a - c,
            m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j,
            n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j,
            o = [b, h],
            p = [a, g];
        return Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ia(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ia(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j, Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ia(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ia(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
            min: {
                x: P[D](0, p),
                y: P[D](0, o)
            },
            max: {
                x: O[D](0, p),
                y: O[D](0, o)
            }
        }
    }),
        Ka = c._path2curve = f(function(a, b) {
            var c = !b && Aa(a);
            if (!b && c.curve) return Ca(c.curve);
            for (var d = Ea(a), e = b && Ea(b), f = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, g = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, h = (function(a, b) {
                var c, d;
                if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                switch (!(a[0] in {
                    T: 1,
                    Q: 1
                }) && (b.qx = b.qy = null), a[0]) {
                    case "M":
                        b.X = a[1], b.Y = a[2];
                        break;
                    case "A":
                        a = ["C"][E](Ha[D](0, [b.x, b.y][E](a.slice(1))));
                        break;
                    case "S":
                        c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d][E](a.slice(1));
                        break;
                    case "T":
                        b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"][E](Ga(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                        break;
                    case "Q":
                        b.qx = a[1], b.qy = a[2], a = ["C"][E](Ga(b.x, b.y, a[1], a[2], a[3], a[4]));
                        break;
                    case "L":
                        a = ["C"][E](Fa(b.x, b.y, a[1], a[2]));
                        break;
                    case "H":
                        a = ["C"][E](Fa(b.x, b.y, a[1], b.y));
                        break;
                    case "V":
                        a = ["C"][E](Fa(b.x, b.y, b.x, a[1]));
                        break;
                    case "Z":
                        a = ["C"][E](Fa(b.x, b.y, b.X, b.Y))
                }
                return a
            }), i = function(a, b) {
                if (a[b].length > 7) {
                    a[b].shift();
                    for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"][E](c.splice(0, 6)));
                    a.splice(b, 1), l = O(d.length, e && e.length || 0)
                }
            }, j = function(a, b, c, f, g) {
                a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = O(d.length, e && e.length || 0))
            }, k = 0, l = O(d.length, e && e.length || 0); l > k; k++) {
                d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
                var m = d[k],
                    n = e && e[k],
                    o = m.length,
                    p = e && n.length;
                f.x = m[o - 2], f.y = m[o - 1], f.bx = _(m[o - 4]) || f.x, f.by = _(m[o - 3]) || f.y, g.bx = e && (_(n[p - 4]) || g.x), g.by = e && (_(n[p - 3]) || g.y), g.x = e && n[p - 2], g.y = e && n[p - 1]
            }
            return e || (c.curve = Ca(d)), e ? [d, e] : d
        }, null, Ca),
        La = (c._parseDots = f(function(a) {
            for (var b = [], d = 0, e = a.length; e > d; d++) {
                var f = {}, g = a[d].match(/^([^:]*):?([\d\.]*)/);
                if (f.color = c.getRGB(g[1]), f.color.error) return null;
                f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), b.push(f)
            }
            for (d = 1, e = b.length - 1; e > d; d++) if (!b[d].offset) {
                for (var h = _(b[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++) if (b[j].offset) {
                    i = b[j].offset;
                    break
                }
                i || (i = 100, j = e), i = _(i);
                for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, b[d].offset = h + "%"
            }
            return b
        }), c._tear = function(a, b) {
            a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
        }),
        Ma = (c._tofront = function(a, b) {
            b.top !== a && (La(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
        }, c._toback = function(a, b) {
            b.bottom !== a && (La(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
        }, c._insertafter = function(a, b, c) {
            La(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
        }, c._insertbefore = function(a, b, c) {
            La(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
        }, c.toMatrix = function(a, b) {
            var c = Ba(a),
                d = {
                    _: {
                        transform: G
                    },
                    getBBox: function() {
                        return c
                    }
                };
            return Na(d, b), d.matrix
        }),
        Na = (c.transformPath = function(a, b) {
            return ra(a, Ma(a, b))
        }, c._extractTransform = function(a, b) {
            if (null == b) return a._.transform;
            b = I(b).replace(/\.{3}|\u2026/g, a._.transform || G);
            var d = c.parseTransformString(b),
                e = 0,
                f = 0,
                g = 0,
                h = 1,
                i = 1,
                j = a._,
                k = new o;
            if (j.transform = d || [], d) for (var l = 0, m = d.length; m > l; l++) {
                var n, p, q, r, s, t = d[l],
                    u = t.length,
                    v = I(t[0]).toLowerCase(),
                    w = t[0] != v,
                    x = w ? k.invert() : 0;
                "t" == v && 3 == u ? w ? (n = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - n, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k
            }
            a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
        }),
        Oa = function(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }, Pa = c._equaliseTransform = function(a, b) {
            b = I(b).replace(/\.{3}|\u2026/g, a), a = c.parseTransformString(a) || [], b = c.parseTransformString(b) || [];
            for (var d, e, f, g, h = O(a.length, b.length), i = [], j = [], k = 0; h > k; k++) {
                if (f = a[k] || Oa(b[k]), g = b[k] || Oa(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return;
                for (i[k] = [], j[k] = [], d = 0, e = O(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
            }
            return {
                from: i,
                to: j
            }
        };
    c._getContainer = function(a, b, d, e) {
        var f;
        return f = null != e || c.is(a, "object") ? a : A.doc.getElementById(a), null != f ? f.tagName ? null == b ? {
            container: f,
            width: f.style.pixelWidth || f.offsetWidth,
            height: f.style.pixelHeight || f.offsetHeight
        } : {
            container: f,
            width: b,
            height: d
        } : {
            container: 1,
            x: a,
            y: b,
            width: d,
            height: e
        } : void 0
    }, c.pathToRelative = Da, c._engine = {}, c.path2curve = Ka, c.matrix = function(a, b, c, d, e, f) {
        return new o(a, b, c, d, e, f)
    },
    function(a) {
        function b(a) {
            return a[0] * a[0] + a[1] * a[1]
        }
        function d(a) {
            var c = N.sqrt(b(a));
            a[0] && (a[0] /= c), a[1] && (a[1] /= c)
        }
        a.add = function(a, b, c, d, e, f) {
            var g, h, i, j, k = [
                [],
                [],
                []
            ],
                l = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1]
                ],
                m = [
                    [a, c, e],
                    [b, d, f],
                    [0, 0, 1]
                ];
            for (a && a instanceof o && (m = [
                [a.a, a.c, a.e],
                [a.b, a.d, a.f],
                [0, 0, 1]
            ]), g = 0; 3 > g; g++) for (h = 0; 3 > h; h++) {
                for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                k[g][h] = j
            }
            this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2]
        }, a.invert = function() {
            var a = this,
                b = a.a * a.d - a.b * a.c;
            return new o(a.d / b, - a.b / b, - a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
        }, a.clone = function() {
            return new o(this.a, this.b, this.c, this.d, this.e, this.f)
        }, a.translate = function(a, b) {
            this.add(1, 0, 0, 1, a, b)
        }, a.scale = function(a, b, c, d) {
            null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, - c, - d)
        }, a.rotate = function(a, b, d) {
            a = c.rad(a), b = b || 0, d = d || 0;
            var e = +N.cos(a).toFixed(9),
                f = +N.sin(a).toFixed(9);
            this.add(e, f, - f, e, b, d), this.add(1, 0, 0, 1, - b, - d)
        }, a.x = function(a, b) {
            return a * this.a + b * this.c + this.e
        }, a.y = function(a, b) {
            return a * this.b + b * this.d + this.f
        }, a.get = function(a) {
            return +this[I.fromCharCode(97 + a)].toFixed(4)
        }, a.toString = function() {
            return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, a.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, a.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }, a.split = function() {
            var a = {};
            a.dx = this.e, a.dy = this.f;
            var e = [
                [this.a, this.c],
                [this.b, this.d]
            ];
            a.scalex = N.sqrt(b(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = N.sqrt(b(e[1])), d(e[1]), a.shear /= a.scaley;
            var f = -e[0][1],
                g = e[1][1];
            return 0 > g ? (a.rotate = c.deg(N.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(N.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
        }, a.toTransformString = function(a) {
            var b = a || this[J]();
            return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : G) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : G) + (b.rotate ? "r" + [b.rotate, 0, 0] : G)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(o.prototype);
    var Qa = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    "Apple Computer, Inc." == navigator.vendor && (Qa && Qa[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Qa && Qa[1] < 8 ? v.safari = function() {
        var a = this.rect(-99, - 99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            a.remove()
        })
    } : v.safari = ma;
    for (var Ra = function() {
        this.returnValue = !1
    }, Sa = function() {
        return this.originalEvent.preventDefault()
    }, Ta = function() {
        this.cancelBubble = !0
    }, Ua = function() {
        return this.originalEvent.stopPropagation()
    }, Va = function() {
        return A.doc.addEventListener ? function(a, b, c, d) {
            var e = F && L[b] ? L[b] : b,
                f = function(e) {
                    var f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                        g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
                        h = e.clientX + g,
                        i = e.clientY + f;
                    if (F && L[z](b)) for (var j = 0, k = e.targetTouches && e.targetTouches.length; k > j; j++) if (e.targetTouches[j].target == a) {
                        var l = e;
                        e = e.targetTouches[j], e.originalEvent = l, e.preventDefault = Sa, e.stopPropagation = Ua;
                        break
                    }
                    return c.call(d, e, h, i)
                };
            return a.addEventListener(e, f, !1),
            function() {
                return a.removeEventListener(e, f, !1), !0
            }
        } : A.doc.attachEvent ? function(a, b, c, d) {
            var e = function(a) {
                a = a || A.win.event;
                var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                    e = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
                    f = a.clientX + e,
                    g = a.clientY + b;
                return a.preventDefault = a.preventDefault || Ra, a.stopPropagation = a.stopPropagation || Ta, c.call(d, a, f, g)
            };
            a.attachEvent("on" + b, e);
            var f = function() {
                return a.detachEvent("on" + b, e), !0
            };
            return f
        } : void 0
    }(), Wa = [], Xa = function(a) {
        for (var c, d = a.clientX, e = a.clientY, f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, h = Wa.length; h--;) {
            if (c = Wa[h], F) {
                for (var i, j = a.touches.length; j--;) if (i = a.touches[j], i.identifier == c.el._drag.id) {
                    d = i.clientX, e = i.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                    break
                }
            } else a.preventDefault();
            var k, l = c.el.node,
                m = l.nextSibling,
                n = l.parentNode,
                o = l.style.display;
            A.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, A.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && b("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, b("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
        }
    }, Ya = function(a) {
        c.unmousemove(Xa).unmouseup(Ya);
        for (var d, e = Wa.length; e--;) d = Wa[e], d.el._drag = {}, b("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, a);
        Wa = []
    }, Za = c.el = {}, $a = K.length; $a--;)! function(a) {
        c[a] = Za[a] = function(b, d) {
            return c.is(b, "function") && (this.events = this.events || [], this.events.push({
                name: a,
                f: b,
                unbind: Va(this.shape || this.node || A.doc, a, b, d || this)
            })), this
        }, c["un" + a] = Za["un" + a] = function(b) {
            for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !c.is(b, "undefined") && d[e].f != b || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
            return this
        }
    }(K[$a]);
    Za.data = function(a, d) {
        var e = ka[this.id] = ka[this.id] || {};
        if (0 == arguments.length) return e;
        if (1 == arguments.length) {
            if (c.is(a, "object")) {
                for (var f in a) a[z](f) && this.data(f, a[f]);
                return this
            }
            return b("raphael.data.get." + this.id, this, e[a], a), e[a]
        }
        return e[a] = d, b("raphael.data.set." + this.id, this, d, a), this
    }, Za.removeData = function(a) {
        return null == a ? ka[this.id] = {} : ka[this.id] && delete ka[this.id][a], this
    }, Za.getData = function() {
        return d(ka[this.id] || {})
    }, Za.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    }, Za.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var _a = [];
    Za.drag = function(a, d, e, f, g, h) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var j = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                k = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
            this._drag.x = i.clientX + k, this._drag.y = i.clientY + j, this._drag.id = i.identifier, !Wa.length && c.mousemove(Xa).mouseup(Ya), Wa.push({
                el: this,
                move_scope: f,
                start_scope: g,
                end_scope: h
            }), d && b.on("raphael.drag.start." + this.id, d), a && b.on("raphael.drag.move." + this.id, a), e && b.on("raphael.drag.end." + this.id, e), b("raphael.drag.start." + this.id, g || f || this, i.clientX + k, i.clientY + j, i)
        }
        return this._drag = {}, _a.push({
            el: this,
            start: i
        }), this.mousedown(i), this
    }, Za.onDragOver = function(a) {
        a ? b.on("raphael.drag.over." + this.id, a) : b.unbind("raphael.drag.over." + this.id)
    }, Za.undrag = function() {
        for (var a = _a.length; a--;) _a[a].el == this && (this.unmousedown(_a[a].start), _a.splice(a, 1), b.unbind("raphael.drag.*." + this.id));
        !_a.length && c.unmousemove(Xa).unmouseup(Ya), Wa = []
    }, v.circle = function(a, b, d) {
        var e = c._engine.circle(this, a || 0, b || 0, d || 0);
        return this.__set__ && this.__set__.push(e), e
    }, v.rect = function(a, b, d, e, f) {
        var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.ellipse = function(a, b, d, e) {
        var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0);
        return this.__set__ && this.__set__.push(f), f
    }, v.path = function(a) {
        a && !c.is(a, U) && !c.is(a[0], V) && (a += G);
        var b = c._engine.path(c.format[D](c, arguments), this);
        return this.__set__ && this.__set__.push(b), b
    }, v.image = function(a, b, d, e, f) {
        var g = c._engine.image(this, a || "about:blank", b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.text = function(a, b, d) {
        var e = c._engine.text(this, a || 0, b || 0, I(d));
        return this.__set__ && this.__set__.push(e), e
    }, v.set = function(a) {
        !c.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new lb(a);
        return this.__set__ && this.__set__.push(b), b.paper = this, b.type = "set", b
    }, v.setStart = function(a) {
        this.__set__ = a || this.set()
    }, v.setFinish = function(a) {
        var b = this.__set__;
        return delete this.__set__, b
    }, v.setSize = function(a, b) {
        return c._engine.setSize.call(this, a, b)
    }, v.setViewBox = function(a, b, d, e, f) {
        return c._engine.setViewBox.call(this, a, b, d, e, f)
    }, v.top = v.bottom = null, v.raphael = c;
    var ab = function(a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.body,
            e = c.documentElement,
            f = e.clientTop || d.clientTop || 0,
            g = e.clientLeft || d.clientLeft || 0,
            h = b.top + (A.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            i = b.left + (A.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: h,
            x: i
        }
    };
    v.getElementByPoint = function(a, b) {
        var c = this,
            d = c.canvas,
            e = A.doc.elementFromPoint(a, b);
        if (A.win.opera && "svg" == e.tagName) {
            var f = ab(d),
                g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1])
        }
        if (!e) return null;
        for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
        return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
    }, v.getElementsByBBox = function(a) {
        var b = this.set();
        return this.forEach(function(d) {
            c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
        }), b
    }, v.getById = function(a) {
        for (var b = this.bottom; b;) {
            if (b.id == a) return b;
            b = b.next
        }
        return null
    }, v.forEach = function(a, b) {
        for (var c = this.bottom; c;) {
            if (a.call(b, c) === !1) return this;
            c = c.next
        }
        return this
    }, v.getElementsByPoint = function(a, b) {
        var c = this.set();
        return this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d)
        }), c
    }, Za.isPointInside = function(a, b) {
        var d = this.realPath = this.realPath || qa[this.type](this);
        return c.isPointInsidePath(d, a, b)
    }, Za.getBBox = function(a) {
        if (this.removed) return {};
        var b = this._;
        return a ? ((b.dirty || !b.bboxwt) && (this.realPath = qa[this.type](this), b.bboxwt = Ba(this.realPath), b.bboxwt.toString = p, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = qa[this.type](this)), b.bbox = Ba(ra(this.realPath, this.matrix)), b.bbox.toString = p, b.dirty = b.dirtyT = 0), b.bbox)
    }, Za.clone = function() {
        if (this.removed) return null;
        var a = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(a), a
    }, Za.glow = function(a) {
        if ("text" == this.type) return null;
        a = a || {};
        var b = {
            width: (a.width || 10) + (+this.attr("stroke-width") || 1),
            fill: a.fill || !1,
            opacity: a.opacity || .5,
            offsetx: a.offsetx || 0,
            offsety: a.offsety || 0,
            color: a.color || "#000"
        }, c = b.width / 2,
            d = this.paper,
            e = d.set(),
            f = this.realPath || qa[this.type](this);
        f = this.matrix ? ra(f, this.matrix) : f;
        for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
            stroke: b.color,
            fill: b.fill ? b.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(b.width / c * g).toFixed(3),
            opacity: +(b.opacity / c).toFixed(3)
        }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var bb = function(a, b, d, e, f, g, h, i, l) {
        return null == l ? j(a, b, d, e, f, g, h, i) : c.findDotsAtSegment(a, b, d, e, f, g, h, i, k(a, b, d, e, f, g, h, i, l))
    }, cb = function(a, b) {
        return function(d, e, f) {
            d = Ka(d);
            for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) {
                if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
                else {
                    if (j = bb(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
                        if (b && !m.start) {
                            if (k = bb(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                            m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                            continue
                        }
                        if (!a && !b) return k = bb(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {
                            x: k.x,
                            y: k.y,
                            alpha: k.alpha
                        }
                    }
                    n += j, g = +i[5], h = +i[6]
                }
                l += i.shift() + i
            }
            return m.end = l, k = a ? n : b ? m : c.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = {
                x: k.x,
                y: k.y,
                alpha: k.alpha
            }), k
        }
    }, db = cb(1),
        eb = cb(),
        fb = cb(0, 1);
    c.getTotalLength = db, c.getPointAtLength = eb, c.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return fb(a, b).end;
        var d = fb(a, c, 1);
        return b ? fb(d, b).end : d
    }, Za.getTotalLength = function() {
        return "path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : db(this.attrs.path) : void 0
    }, Za.getPointAtLength = function(a) {
        return "path" == this.type ? eb(this.attrs.path, a) : void 0
    }, Za.getSubpath = function(a, b) {
        return "path" == this.type ? c.getSubpath(this.attrs.path, a, b) : void 0
    };
    var gb = c.easing_formulas = {
        linear: function(a) {
            return a
        },
        "<": function(a) {
            return R(a, 1.7)
        },
        ">": function(a) {
            return R(a, .48)
        },
        "<>": function(a) {
            var b = .48 - a / 1.04,
                c = N.sqrt(.1734 + b * b),
                d = c - b,
                e = R(Q(d), 1 / 3) * (0 > d ? -1 : 1),
                f = -c - b,
                g = R(Q(f), 1 / 3) * (0 > f ? -1 : 1),
                h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function(a) {
            return a == !! a ? a : R(2, - 10 * a) * N.sin(2 * (a - .075) * S / .3) + 1
        },
        bounce: function(a) {
            var b, c = 7.5625,
                d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }
    };
    gb.easeIn = gb["ease-in"] = gb["<"], gb.easeOut = gb["ease-out"] = gb[">"], gb.easeInOut = gb["ease-in-out"] = gb["<>"], gb["back-in"] = gb.backIn, gb["back-out"] = gb.backOut;
    var hb = [],
        ib = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
            setTimeout(a, 16)
        }, jb = function() {
            for (var a = +new Date, d = 0; d < hb.length; d++) {
                var e = hb[d];
                if (!e.el.removed && !e.paused) {
                    var f, g, h = a - e.start,
                        i = e.ms,
                        j = e.easing,
                        k = e.from,
                        l = e.diff,
                        m = e.to,
                        n = (e.t, e.el),
                        o = {}, p = {};
                    if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && hb.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h)) if (i > h) {
                        var q = j(h / i);
                        for (var r in k) if (k[z](r)) {
                            switch (da[r]) {
                                case T:
                                    f = +k[r] + q * i * l[r];
                                    break;
                                case "colour":
                                    f = "rgb(" + [kb($(k[r].r + q * i * l[r].r)), kb($(k[r].g + q * i * l[r].g)), kb($(k[r].b + q * i * l[r].b))].join(",") + ")";
                                    break;
                                case "path":
                                    f = [];
                                    for (var t = 0, u = k[r].length; u > t; t++) {
                                        f[t] = [k[r][t][0]];
                                        for (var v = 1, w = k[r][t].length; w > v; v++) f[t][v] = +k[r][t][v] + q * i * l[r][t][v];
                                        f[t] = f[t].join(H)
                                    }
                                    f = f.join(H);
                                    break;
                                case "transform":
                                    if (l[r].real) for (f = [], t = 0, u = k[r].length; u > t; t++) for (f[t] = [k[r][t][0]], v = 1, w = k[r][t].length; w > v; v++) f[t][v] = k[r][t][v] + q * i * l[r][t][v];
                                    else {
                                        var x = function(a) {
                                            return +k[r][a] + q * i * l[r][a]
                                        };
                                        f = [
                                            ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                                        ]
                                    }
                                    break;
                                case "csv":
                                    if ("clip-rect" == r) for (f = [], t = 4; t--;) f[t] = +k[r][t] + q * i * l[r][t];
                                    break;
                                default:
                                    var y = [][E](k[r]);
                                    for (f = [], t = n.paper.customAttributes[r].length; t--;) f[t] = +y[t] + q * i * l[r][t]
                            }
                            o[r] = f
                        }
                        n.attr(o),
                        function(a, c, d) {
                            setTimeout(function() {
                                b("raphael.anim.frame." + a, c, d)
                            })
                        }(n.id, n, e.anim)
                    } else {
                        if (function(a, d, e) {
                            setTimeout(function() {
                                b("raphael.anim.frame." + d.id, d, e), b("raphael.anim.finish." + d.id, d, e), c.is(a, "function") && a.call(d)
                            })
                        }(e.callback, n, e.anim), n.attr(m), hb.splice(d--, 1), e.repeat > 1 && !e.next) {
                            for (g in m) m[z](g) && (p[g] = e.totalOrigin[g]);
                            e.el.attr(p), s(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
                        }
                        e.next && !e.stop && s(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
                    }
                }
            }
            c.svg && n && n.paper && n.paper.safari(), hb.length && ib(jb)
        }, kb = function(a) {
            return a > 255 ? 255 : 0 > a ? 0 : a
        };
    Za.animateWith = function(a, b, d, e, f, g) {
        var h = this;
        if (h.removed) return g && g.call(h), h;
        var i = d instanceof r ? d : c.animation(d, e, f, g);
        s(i, h, i.percents[0], null, h.attr());
        for (var j = 0, k = hb.length; k > j; j++) if (hb[j].anim == b && hb[j].el == a) {
            hb[k - 1].start = hb[j].start;
            break
        }
        return h
    }, Za.onAnimation = function(a) {
        return a ? b.on("raphael.anim.frame." + this.id, a) : b.unbind("raphael.anim.frame." + this.id), this
    }, r.prototype.delay = function(a) {
        var b = new r(this.anim, this.ms);
        return b.times = this.times, b.del = +a || 0, b
    }, r.prototype.repeat = function(a) {
        var b = new r(this.anim, this.ms);
        return b.del = this.del, b.times = N.floor(O(a, 0)) || 1, b
    }, c.animation = function(a, b, d, e) {
        if (a instanceof r) return a;
        (c.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
        var f, g, h = {};
        for (g in a) a[z](g) && _(g) != g && _(g) + "%" != g && (f = !0, h[g] = a[g]);
        return f ? (d && (h.easing = d), e && (h.callback = e), new r({
            100: h
        }, b)) : new r(a, b)
    }, Za.animate = function(a, b, d, e) {
        var f = this;
        if (f.removed) return e && e.call(f), f;
        var g = a instanceof r ? a : c.animation(a, b, d, e);
        return s(g, f, g.percents[0], null, f.attr()), f
    }, Za.setTime = function(a, b) {
        return a && null != b && this.status(a, P(b, a.ms) / a.ms), this
    }, Za.status = function(a, b) {
        var c, d, e = [],
            f = 0;
        if (null != b) return s(a, this, - 1, P(b, 1)), this;
        for (c = hb.length; c > f; f++) if (d = hb[f], d.el.id == this.id && (!a || d.anim == a)) {
            if (a) return d.status;
            e.push({
                anim: d.anim,
                status: d.status
            })
        }
        return a ? 0 : e
    }, Za.pause = function(a) {
        for (var c = 0; c < hb.length; c++) hb[c].el.id != this.id || a && hb[c].anim != a || b("raphael.anim.pause." + this.id, this, hb[c].anim) !== !1 && (hb[c].paused = !0);
        return this
    }, Za.resume = function(a) {
        for (var c = 0; c < hb.length; c++) if (hb[c].el.id == this.id && (!a || hb[c].anim == a)) {
            var d = hb[c];
            b("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status))
        }
        return this
    }, Za.stop = function(a) {
        for (var c = 0; c < hb.length; c++) hb[c].el.id != this.id || a && hb[c].anim != a || b("raphael.anim.stop." + this.id, this, hb[c].anim) !== !1 && hb.splice(c--, 1);
        return this
    }, b.on("raphael.remove", t), b.on("raphael.clear", t), Za.toString = function() {
        return "Raphaël’s object"
    };
    var lb = function(a) {
        if (this.items = [], this.length = 0, this.type = "set", a) for (var b = 0, c = a.length; c > b; b++)!a[b] || a[b].constructor != Za.constructor && a[b].constructor != lb || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
    }, mb = lb.prototype;
    mb.push = function() {
        for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], !a || a.constructor != Za.constructor && a.constructor != lb || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    }, mb.pop = function() {
        return this.length && delete this[this.length--], this.items.pop()
    }, mb.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; d > c; c++) if (a.call(b, this.items[c], c) === !1) return this;
        return this
    };
    for (var nb in Za) Za[z](nb) && (mb[nb] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) {
                c[a][D](c, b)
            })
        }
    }(nb));
    return mb.attr = function(a, b) {
        if (a && c.is(a, V) && c.is(a[0], "object")) for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
        else for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, b);
        return this
    }, mb.clear = function() {
        for (; this.length;) this.pop()
    }, mb.splice = function(a, b, c) {
        a = 0 > a ? O(this.length + a, 0) : a, b = O(0, P(this.length - a, b));
        var d, e = [],
            f = [],
            g = [];
        for (d = 2; d < arguments.length; d++) g.push(arguments[d]);
        for (d = 0; b > d; d++) f.push(this[a + d]);
        for (; d < this.length - a; d++) e.push(this[a + d]);
        var h = g.length;
        for (d = 0; d < h + e.length; d++) this.items[a + d] = this[a + d] = h > d ? g[d] : e[d - h];
        for (d = this.items.length = this.length -= b - h; this[d];) delete this[d++];
        return new lb(f)
    }, mb.exclude = function(a) {
        for (var b = 0, c = this.length; c > b; b++) if (this[b] == a) return this.splice(b, 1), !0
    }, mb.animate = function(a, b, d, e) {
        (c.is(d, "function") || !d) && (e = d || null);
        var f, g, h = this.items.length,
            i = h,
            j = this;
        if (!h) return this;
        e && (g = function() {
            !--h && e.call(j)
        }), d = c.is(d, U) ? d : g;
        var k = c.animation(a, b, d, g);
        for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--;
        return this
    }, mb.insertAfter = function(a) {
        for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
        return this
    }, mb.getBBox = function() {
        for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;) if (!this.items[e].removed) {
            var f = this.items[e].getBBox();
            a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
        }
        return a = P[D](0, a), b = P[D](0, b), c = O[D](0, c), d = O[D](0, d), {
            x: a,
            y: b,
            x2: c,
            y2: d,
            width: c - a,
            height: d - b
        }
    }, mb.clone = function(a) {
        a = this.paper.set();
        for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
        return a
    }, mb.toString = function() {
        return "Raphaël‘s set"
    }, mb.glow = function(a) {
        var b = this.paper.set();
        return this.forEach(function(c, d) {
            var e = c.glow(a);
            null != e && e.forEach(function(a, c) {
                b.push(a)
            })
        }), b
    }, mb.isPointInside = function(a, b) {
        var c = !1;
        return this.forEach(function(d) {
            return d.isPointInside(a, b) ? (console.log("runned"), c = !0, !1) : void 0
        }), c
    }, c.registerFont = function(a) {
        if (!a.face) return a;
        this.fonts = this.fonts || {};
        var b = {
            w: a.w,
            face: {},
            glyphs: {}
        }, c = a.face["font-family"];
        for (var d in a.face) a.face[z](d) && (b.face[d] = a.face[d]);
        if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
            b.face["units-per-em"] = aa(a.face["units-per-em"], 10);
            for (var e in a.glyphs) if (a.glyphs[z](e)) {
                var f = a.glyphs[e];
                if (b.glyphs[e] = {
                    w: f.w,
                    k: {},
                    d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                        return {
                            l: "L",
                            c: "C",
                            x: "z",
                            t: "m",
                            r: "l",
                            v: "c"
                        }[a] || "M"
                    }) + "z"
                }, f.k) for (var g in f.k) f[z](g) && (b.glyphs[e].k[g] = f.k[g])
            }
        }
        return a
    }, v.getFont = function(a, b, d, e) {
        if (e = e || "normal", d = d || "normal", b = +b || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[b] || 400, c.fonts) {
            var f = c.fonts[a];
            if (!f) {
                var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, G) + "(\\s|$)", "i");
                for (var h in c.fonts) if (c.fonts[z](h) && g.test(h)) {
                    f = c.fonts[h];
                    break
                }
            }
            var i;
            if (f) for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != b || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++);
            return i
        }
    }, v.print = function(a, b, d, e, f, g, h, i) {
        g = g || "middle", h = O(P(h || 0, 1), - 1), i = O(P(i || 1, 3), 1);
        var j, k = I(d)[J](G),
            l = 0,
            m = 0,
            n = G;
        if (c.is(e, "string") && (e = this.getFont(e)), e) {
            j = (f || 16) / e.face["units-per-em"];
            for (var o = e.face.bbox[J](w), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) {
                if ("\n" == k[t]) l = 0, x = 0, m = 0, r += q * i;
                else {
                    var v = m && e.glyphs[k[t - 1]] || {}, x = e.glyphs[k[t]];
                    l += m ? (v.w || e.w) + (v.k && v.k[k[t]] || 0) + e.w * h : 0, m = 1
                }
                x && x.d && (n += c.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (b - s) / j]))
            }
        }
        return this.path(n).attr({
            fill: "#000",
            stroke: "none"
        })
    }, v.add = function(a) {
        if (c.is(a, "array")) for (var b, d = this.set(), e = 0, f = a.length; f > e; e++) b = a[e] || {}, x[z](b.type) && d.push(this[b.type]().attr(b));
        return d
    }, c.format = function(a, b) {
        var d = c.is(b, V) ? [0][E](b) : arguments;
        return a && c.is(a, U) && d.length - 1 && (a = a.replace(y, function(a, b) {
            return null == d[++b] ? G : d[b]
        })), a || G
    }, c.fullfill = function() {
        var a = /\{([^\}]+)\}/g,
            b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            c = function(a, c, d) {
                var e = d;
                return c.replace(b, function(a, b, c, d, f) {
                    b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                }), e = (null == e || e == d ? a : e) + ""
            };
        return function(b, d) {
            return String(b).replace(a, function(a, b) {
                return c(a, b, d)
            })
        }
    }(), c.ninja = function() {
        return B.was ? A.win.Raphael = B.is : delete Raphael, c
    }, c.st = mb,
    function(a, b, d) {
        function e() {
            /in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
        }
        null == a.readyState && a.addEventListener && (a.addEventListener(b, d = function() {
            a.removeEventListener(b, d, !1), a.readyState = "complete"
        }, !1), a.readyState = "loading"), e()
    }(document, "DOMContentLoaded"), b.on("raphael.DOMload", function() {
        u = !0
    }),
    function() {
        if (c.svg) {
            var a = "hasOwnProperty",
                b = String,
                d = parseFloat,
                e = parseInt,
                f = Math,
                g = f.max,
                h = f.abs,
                i = f.pow,
                j = /[, ]+/,
                k = c.eve,
                l = "",
                m = " ",
                n = "http://www.w3.org/1999/xlink",
                o = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                }, p = {};
            c.toString = function() {
                return "Your browser supports SVG.\nYou are running Raphaël " + this.version
            };
            var q = function(d, e) {
                if (e) {
                    "string" == typeof d && (d = q(d));
                    for (var f in e) e[a](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), b(e[f])) : d.setAttribute(f, b(e[f])))
                } else d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return d
            }, r = function(a, e) {
                var j = "linear",
                    k = a.id + e,
                    m = .5,
                    n = .5,
                    o = a.node,
                    p = a.paper,
                    r = o.style,
                    s = c._g.doc.getElementById(k);
                if (!s) {
                    if (e = b(e).replace(c._radial_gradient, function(a, b, c) {
                        if (j = "radial", b && c) {
                            m = d(b), n = d(c);
                            var e = 2 * (n > .5) - 1;
                            i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                        }
                        return l
                    }), e = e.split(/\s*\-\s*/), "linear" == j) {
                        var t = e.shift();
                        if (t = -d(t), isNaN(t)) return null;
                        var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))],
                            v = 1 / (g(h(u[2]), h(u[3])) || 1);
                        u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
                    }
                    var w = c._parseDots(e);
                    if (!w) return null;
                    if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), a.gradient && k != a.gradient.id && (p.defs.removeChild(a.gradient), delete a.gradient), !a.gradient) {
                        s = q(j + "Gradient", {
                            id: k
                        }), a.gradient = s, q(s, "radial" == j ? {
                            fx: m,
                            fy: n
                        } : {
                            x1: u[0],
                            y1: u[1],
                            x2: u[2],
                            y2: u[3],
                            gradientTransform: a.matrix.invert()
                        }), p.defs.appendChild(s);
                        for (var x = 0, y = w.length; y > x; x++) s.appendChild(q("stop", {
                            offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                            "stop-color": w[x].color || "#fff"
                        }))
                    }
                }
                return q(o, {
                    fill: "url(#" + k + ")",
                    opacity: 1,
                    "fill-opacity": 1
                }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
            }, s = function(a) {
                var b = a.getBBox(1);
                q(a.pattern, {
                    patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
                })
            }, t = function(d, e, f) {
                if ("path" == d.type) {
                    for (var g, h, i, j, k, m = b(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--;) switch (m[v]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                            w = m[v];
                            break;
                        case "wide":
                            y = 5;
                            break;
                        case "narrow":
                            y = 2;
                            break;
                        case "long":
                            x = 5;
                            break;
                        case "short":
                            x = 2
                    }
                    if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {
                        fill: "none",
                        stroke: t.stroke
                    }) : (j = i = x / 2, k = {
                        fill: t.stroke,
                        stroke: "none"
                    }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
                        var A = "raphael-marker-" + w,
                            B = "raphael-marker-" + r + w + x + y;
                        c._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {
                            "stroke-linecap": "round",
                            d: o[w],
                            id: A
                        })), p[A] = 1);
                        var C, D = c._g.doc.getElementById(B);
                        D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {
                            id: B,
                            markerHeight: y,
                            markerWidth: x,
                            orient: "auto",
                            refX: j,
                            refY: y / 2
                        }), C = q(q("use"), {
                            "xlink:href": "#" + A,
                            transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                            "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                        }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
                        var E = i * ("diamond" != w && "oval" != w);
                        f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - E * u) : (g = E * u, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = c.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e
                    } else f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - g) : (g = 0, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {
                        d: c.getSubpath(t.path, g, h)
                    }), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
                    for (k in p) if (p[a](k) && !p[k]) {
                        var F = c._g.doc.getElementById(k);
                        F && F.parentNode.removeChild(F)
                    }
                }
            }, u = {
                "": [0],
                none: [0],
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3]
            }, v = function(a, c, d) {
                if (c = u[b(c).toLowerCase()]) {
                    for (var e = a.attrs["stroke-width"] || "1", f = {
                        round: e,
                        square: e,
                        butt: 0
                    }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = c.length; h--;) g[h] = c[h] * e + (h % 2 ? 1 : -1) * f;
                    q(a.node, {
                        "stroke-dasharray": g.join(",")
                    })
                }
            }, w = function(d, f) {
                var i = d.node,
                    k = d.attrs,
                    m = i.style.visibility;
                i.style.visibility = "hidden";
                for (var o in f) if (f[a](o)) {
                    if (!c._availableAttrs[a](o)) continue;
                    var p = f[o];
                    switch (k[o] = p, o) {
                        case "blur":
                            d.blur(p);
                            break;
                        case "href":
                        case "title":
                        case "target":
                            var u = i.parentNode;
                            if ("a" != u.tagName.toLowerCase()) {
                                var w = q("a");
                                u.insertBefore(w, i), w.appendChild(i), u = w
                            }
                            "target" == o ? u.setAttributeNS(n, "show", "blank" == p ? "new" : p) : u.setAttributeNS(n, o, p);
                            break;
                        case "cursor":
                            i.style.cursor = p;
                            break;
                        case "transform":
                            d.transform(p);
                            break;
                        case "arrow-start":
                            t(d, p);
                            break;
                        case "arrow-end":
                            t(d, p, 1);
                            break;
                        case "clip-rect":
                            var x = b(p).split(j);
                            if (4 == x.length) {
                                d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                                var z = q("clipPath"),
                                    A = q("rect");
                                z.id = c.createUUID(), q(A, {
                                    x: x[0],
                                    y: x[1],
                                    width: x[2],
                                    height: x[3]
                                }), z.appendChild(A), d.paper.defs.appendChild(z), q(i, {
                                    "clip-path": "url(#" + z.id + ")"
                                }), d.clip = A
                            }
                            if (!p) {
                                var B = i.getAttribute("clip-path");
                                if (B) {
                                    var C = c._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g, l));
                                    C && C.parentNode.removeChild(C), q(i, {
                                        "clip-path": l
                                    }), delete d.clip
                                }
                            }
                            break;
                        case "path":
                            "path" == d.type && (q(i, {
                                d: p ? k.path = c._pathToAbsolute(p) : "M0,0"
                            }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                            break;
                        case "width":
                            if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                            o = "x", p = k.x;
                        case "x":
                            k.fx && (p = -k.x - (k.width || 0));
                        case "rx":
                            if ("rx" == o && "rect" == d.type) break;
                        case "cx":
                            i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                            break;
                        case "height":
                            if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                            o = "y", p = k.y;
                        case "y":
                            k.fy && (p = -k.y - (k.height || 0));
                        case "ry":
                            if ("ry" == o && "rect" == d.type) break;
                        case "cy":
                            i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                            break;
                        case "r":
                            "rect" == d.type ? q(i, {
                                rx: p,
                                ry: p
                            }) : i.setAttribute(o, p), d._.dirty = 1;
                            break;
                        case "src":
                            "image" == d.type && i.setAttributeNS(n, "href", p);
                            break;
                        case "stroke-width":
                            (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                            break;
                        case "stroke-dasharray":
                            v(d, p, f);
                            break;
                        case "fill":
                            var D = b(p).match(c._ISURL);
                            if (D) {
                                z = q("pattern");
                                var E = q("image");
                                z.id = c.createUUID(), q(z, {
                                    x: 0,
                                    y: 0,
                                    patternUnits: "userSpaceOnUse",
                                    height: 1,
                                    width: 1
                                }), q(E, {
                                    x: 0,
                                    y: 0,
                                    "xlink:href": D[1]
                                }), z.appendChild(E),
                                function(a) {
                                    c._preload(D[1], function() {
                                        var b = this.offsetWidth,
                                            c = this.offsetHeight;
                                        q(a, {
                                            width: b,
                                            height: c
                                        }), q(E, {
                                            width: b,
                                            height: c
                                        }), d.paper.safari()
                                    })
                                }(z), d.paper.defs.appendChild(z), q(i, {
                                    fill: "url(#" + z.id + ")"
                                }), d.pattern = z, d.pattern && s(d);
                                break
                            }
                            var F = c.getRGB(p);
                            if (F.error) {
                                if (("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p)) {
                                    if ("opacity" in k || "fill-opacity" in k) {
                                        var G = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                        if (G) {
                                            var H = G.getElementsByTagName("stop");
                                            q(H[H.length - 1], {
                                                "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                                            })
                                        }
                                    }
                                    k.gradient = p, k.fill = "none";
                                    break
                                }
                            } else delete f.gradient, delete k.gradient, !c.is(k.opacity, "undefined") && c.is(f.opacity, "undefined") && q(i, {
                                opacity: k.opacity
                            }), !c.is(k["fill-opacity"], "undefined") && c.is(f["fill-opacity"], "undefined") && q(i, {
                                "fill-opacity": k["fill-opacity"]
                            });
                            F[a]("opacity") && q(i, {
                                "fill-opacity": F.opacity > 1 ? F.opacity / 100 : F.opacity
                            });
                        case "stroke":
                            F = c.getRGB(p), i.setAttribute(o, F.hex), "stroke" == o && F[a]("opacity") && q(i, {
                                "stroke-opacity": F.opacity > 1 ? F.opacity / 100 : F.opacity
                            }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                            break;
                        case "gradient":
                            ("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p);
                            break;
                        case "opacity":
                            k.gradient && !k[a]("stroke-opacity") && q(i, {
                                "stroke-opacity": p > 1 ? p / 100 : p
                            });
                        case "fill-opacity":
                            if (k.gradient) {
                                G = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), G && (H = G.getElementsByTagName("stop"), q(H[H.length - 1], {
                                    "stop-opacity": p
                                }));
                                break
                            }
                        default:
                            "font-size" == o && (p = e(p, 10) + "px");
                            var I = o.replace(/(\-.)/g, function(a) {
                                return a.substring(1).toUpperCase()
                            });
                            i.style[I] = p, d._.dirty = 1, i.setAttribute(o, p)
                    }
                }
                y(d, f), i.style.visibility = m
            }, x = 1.2,
                y = function(d, f) {
                    if ("text" == d.type && (f[a]("text") || f[a]("font") || f[a]("font-size") || f[a]("x") || f[a]("y"))) {
                        var g = d.attrs,
                            h = d.node,
                            i = h.firstChild ? e(c._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                        if (f[a]("text")) {
                            for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild);
                            for (var j, k = b(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++) j = q("tspan"), n && q(j, {
                                dy: i * x,
                                x: g.x
                            }), j.appendChild(c._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j
                        } else for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++) n ? q(m[n], {
                            dy: i * x,
                            x: g.x
                        }) : q(m[0], {
                            dy: 0
                        });
                        q(h, {
                            x: g.x,
                            y: g.y
                        }), d._.dirty = 1;
                        var p = d._getBBox(),
                            r = g.y - (p.y + p.height / 2);
                        r && c.is(r, "finite") && q(m[0], {
                            dy: r
                        })
                    }
                }, z = function(a, b) {
                    this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.matrix = c.matrix(), this.realPath = null, this.paper = b, this.attrs = this.attrs || {}, this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        deg: 0,
                        dx: 0,
                        dy: 0,
                        dirty: 1
                    }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                }, A = c.el;
            z.prototype = A, A.constructor = z, c._engine.path = function(a, b) {
                var c = q("path");
                b.canvas && b.canvas.appendChild(c);
                var d = new z(c, b);
                return d.type = "path", w(d, {
                    fill: "none",
                    stroke: "#000",
                    path: a
                }), d
            }, A.rotate = function(a, c, e) {
                if (this.removed) return this;
                if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                    var f = this.getBBox(1);
                    c = f.x + f.width / 2, e = f.y + f.height / 2
                }
                return this.transform(this._.transform.concat([
                    ["r", a, c, e]
                ])), this
            }, A.scale = function(a, c, e, f) {
                if (this.removed) return this;
                if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                    ["s", a, c, e, f]
                ])), this
            }, A.translate = function(a, c) {
                return this.removed ? this : (a = b(a).split(j), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([
                    ["t", a, c]
                ])), this)
            }, A.transform = function(b) {
                var d = this._;
                if (null == b) return d.transform;
                if (c._extractTransform(this, b), this.clip && q(this.clip, {
                    transform: this.matrix.invert()
                }), this.pattern && s(this), this.node && q(this.node, {
                    transform: this.matrix
                }), 1 != d.sx || 1 != d.sy) {
                    var e = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
                    this.attr({
                        "stroke-width": e
                    })
                }
                return this
            }, A.hide = function() {
                return !this.removed && this.paper.safari(this.node.style.display = "none"), this
            }, A.show = function() {
                return !this.removed && this.paper.safari(this.node.style.display = ""), this
            }, A.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    var a = this.paper;
                    a.__set__ && a.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && a.defs.removeChild(this.gradient), c._tear(this, a), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                    for (var b in this) this[b] = "function" == typeof this[b] ? c._removedFactory(b) : null;
                    this.removed = !0
                }
            }, A._getBBox = function() {
                if ("none" == this.node.style.display) {
                    this.show();
                    var a = !0
                }
                var b = {};
                try {
                    b = this.node.getBBox()
                } catch (c) {} finally {
                    b = b || {}
                }
                return a && this.hide(), b
            }, A.attr = function(b, d) {
                if (this.removed) return this;
                if (null == b) {
                    var e = {};
                    for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                    return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                }
                if (null == d && c.is(b, "string")) {
                    if ("fill" == b && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    if ("transform" == b) return this._.transform;
                    for (var g = b.split(j), h = {}, i = 0, l = g.length; l > i; i++) b = g[i], b in this.attrs ? h[b] = this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? h[b] = this.paper.customAttributes[b].def : h[b] = c._availableAttrs[b];
                    return l - 1 ? h : h[g[0]]
                }
                if (null == d && c.is(b, "array")) {
                    for (h = {}, i = 0, l = b.length; l > i; i++) h[b[i]] = this.attr(b[i]);
                    return h
                }
                if (null != d) {
                    var m = {};
                    m[b] = d
                } else null != b && c.is(b, "object") && (m = b);
                for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
                for (n in this.paper.customAttributes) if (this.paper.customAttributes[a](n) && m[a](n) && c.is(this.paper.customAttributes[n], "function")) {
                    var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                    this.attrs[n] = m[n];
                    for (var p in o) o[a](p) && (m[p] = o[p])
                }
                return w(this, m), this
            }, A.toFront = function() {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                var a = this.paper;
                return a.top != this && c._tofront(this, a), this
            }, A.toBack = function() {
                if (this.removed) return this;
                var a = this.node.parentNode;
                return "a" == a.tagName.toLowerCase() ? a.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : a.firstChild != this.node && a.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper), this.paper, this
            }, A.insertAfter = function(a) {
                if (this.removed) return this;
                var b = a.node || a[a.length - 1].node;
                return b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this
            }, A.insertBefore = function(a) {
                if (this.removed) return this;
                var b = a.node || a[0].node;
                return b.parentNode.insertBefore(this.node, b), c._insertbefore(this, a, this.paper), this
            }, A.blur = function(a) {
                var b = this;
                if (0 !== +a) {
                    var d = q("filter"),
                        e = q("feGaussianBlur");
                    b.attrs.blur = a, d.id = c.createUUID(), q(e, {
                        stdDeviation: +a || 1.5
                    }), d.appendChild(e), b.paper.defs.appendChild(d), b._blur = d, q(b.node, {
                        filter: "url(#" + d.id + ")"
                    })
                } else b._blur && (b._blur.parentNode.removeChild(b._blur), delete b._blur, delete b.attrs.blur), b.node.removeAttribute("filter");
                return b
            }, c._engine.circle = function(a, b, c, d) {
                var e = q("circle");
                a.canvas && a.canvas.appendChild(e);
                var f = new z(e, a);
                return f.attrs = {
                    cx: b,
                    cy: c,
                    r: d,
                    fill: "none",
                    stroke: "#000"
                }, f.type = "circle", q(e, f.attrs), f
            }, c._engine.rect = function(a, b, c, d, e, f) {
                var g = q("rect");
                a.canvas && a.canvas.appendChild(g);
                var h = new z(g, a);
                return h.attrs = {
                    x: b,
                    y: c,
                    width: d,
                    height: e,
                    r: f || 0,
                    rx: f || 0,
                    ry: f || 0,
                    fill: "none",
                    stroke: "#000"
                }, h.type = "rect", q(g, h.attrs), h
            }, c._engine.ellipse = function(a, b, c, d, e) {
                var f = q("ellipse");
                a.canvas && a.canvas.appendChild(f);
                var g = new z(f, a);
                return g.attrs = {
                    cx: b,
                    cy: c,
                    rx: d,
                    ry: e,
                    fill: "none",
                    stroke: "#000"
                }, g.type = "ellipse", q(f, g.attrs), g
            }, c._engine.image = function(a, b, c, d, e, f) {
                var g = q("image");
                q(g, {
                    x: c,
                    y: d,
                    width: e,
                    height: f,
                    preserveAspectRatio: "none"
                }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
                var h = new z(g, a);
                return h.attrs = {
                    x: c,
                    y: d,
                    width: e,
                    height: f,
                    src: b
                }, h.type = "image", h
            }, c._engine.text = function(a, b, d, e) {
                var f = q("text");
                a.canvas && a.canvas.appendChild(f);
                var g = new z(f, a);
                return g.attrs = {
                    x: b,
                    y: d,
                    "text-anchor": "middle",
                    text: e,
                    font: c._availableAttrs.font,
                    stroke: "none",
                    fill: "#000"
                }, g.type = "text", w(g, g.attrs), g
            }, c._engine.setSize = function(a, b) {
                return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
            }, c._engine.create = function() {
                var a = c._getContainer.apply(0, arguments),
                    b = a && a.container,
                    d = a.x,
                    e = a.y,
                    f = a.width,
                    g = a.height;
                if (!b) throw new Error("SVG container not found.");
                var h, i = q("svg"),
                    j = "overflow:hidden;";
                return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {
                    height: g,
                    version: 1.1,
                    width: f,
                    xmlns: "http://www.w3.org/2000/svg"
                }), 1 == b ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", c._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i)), b = new c._Paper, b.width = f, b.height = g, b.canvas = i, b.clear(), b._left = b._top = 0, h && (b.renderfix = function() {}), b.renderfix(), b
            }, c._engine.setViewBox = function(a, b, c, d, e) {
                k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
                var f, h, i = g(c / this.width, d / this.height),
                    j = this.top,
                    l = e ? "meet" : "xMinYMin";
                for (null == a ? (this._vbSize && (i = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = i, f = a + m + b + m + c + m + d), q(this.canvas, {
                    viewBox: f,
                    preserveAspectRatio: l
                }); i && j;) h = "stroke-width" in j.attrs ? j.attrs["stroke-width"] : 1, j.attr({
                    "stroke-width": h
                }), j._.dirty = 1, j._.dirtyT = 1, j = j.prev;
                return this._viewBox = [a, b, c, d, !! e], this
            }, c.prototype.renderfix = function() {
                var a, b = this.canvas,
                    c = b.style;
                try {
                    a = b.getScreenCTM() || b.createSVGMatrix()
                } catch (d) {
                    a = b.createSVGMatrix()
                }
                var e = -a.e % 1,
                    f = -a.f % 1;
                (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px"))
            }, c.prototype.clear = function() {
                c.eve("raphael.clear", this);
                for (var a = this.canvas; a.firstChild;) a.removeChild(a.firstChild);
                this.bottom = this.top = null, (this.desc = q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël " + c.version)), a.appendChild(this.desc), a.appendChild(this.defs = q("defs"))
            }, c.prototype.remove = function() {
                k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null
            };
            var B = c.st;
            for (var C in A) A[a](C) && !B[a](C) && (B[C] = function(a) {
                return function() {
                    var b = arguments;
                    return this.forEach(function(c) {
                        c[a].apply(c, b)
                    })
                }
            }(C))
        }
    }(),
    function() {
        if (c.vml) {
            var a = "hasOwnProperty",
                b = String,
                d = parseFloat,
                e = Math,
                f = e.round,
                g = e.max,
                h = e.min,
                i = e.abs,
                j = "fill",
                k = /[, ]+/,
                l = c.eve,
                m = " progid:DXImageTransform.Microsoft",
                n = " ",
                o = "",
                p = {
                    M: "m",
                    L: "l",
                    C: "c",
                    Z: "x",
                    m: "t",
                    l: "r",
                    c: "v",
                    z: "x"
                }, q = /([clmz]),?([^clmz]*)/gi,
                r = / progid:\S+Blur\([^\)]+\)/g,
                s = /-?[^,\s-]+/g,
                t = "position:absolute;left:0;top:0;width:1px;height:1px",
                u = 21600,
                v = {
                    path: 1,
                    rect: 1,
                    image: 1
                }, w = {
                    circle: 1,
                    ellipse: 1
                }, x = function(a) {
                    var d = /[ahqstv]/gi,
                        e = c._pathToAbsolute;
                    if (b(a).match(d) && (e = c._path2curve), d = /[clmz]/g, e == c._pathToAbsolute && !b(a).match(d)) {
                        var g = b(a).replace(q, function(a, b, c) {
                            var d = [],
                                e = "m" == b.toLowerCase(),
                                g = p[b];
                            return c.replace(s, function(a) {
                                e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u))
                            }), g + d
                        });
                        return g
                    }
                    var h, i, j = e(a);
                    g = [];
                    for (var k = 0, l = j.length; l > k; k++) {
                        h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x");
                        for (var m = 1, r = h.length; r > m; m++) i += f(h[m] * u) + (m != r - 1 ? "," : o);
                        g.push(i)
                    }
                    return g.join(n)
                }, y = function(a, b, d) {
                    var e = c.matrix();
                    return e.rotate(-a, .5, .5), {
                        dx: e.x(b, d),
                        dy: e.y(b, d)
                    }
                }, z = function(a, b, c, d, e, f) {
                    var g = a._,
                        h = a.matrix,
                        k = g.fillpos,
                        l = a.node,
                        m = l.style,
                        o = 1,
                        p = "",
                        q = u / b,
                        r = u / c;
                    if (m.visibility = "hidden", b && c) {
                        if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) {
                            var s = y(f, d, e);
                            d = s.dx, e = s.dy
                        }
                        if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
                            var t = l.getElementsByTagName(j);
                            t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t)
                        }
                        m.visibility = "visible"
                    }
                };
            c.toString = function() {
                return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
            };
            var A = function(a, c, d) {
                for (var e = b(c).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        h = e[g];
                        break;
                    case "wide":
                    case "narrow":
                        j = e[g];
                        break;
                    case "long":
                    case "short":
                        i = e[g]
                }
                var k = a.node.getElementsByTagName("stroke")[0];
                k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
            }, B = function(e, i) {
                e.attrs = e.attrs || {};
                var l = e.node,
                    m = e.attrs,
                    p = l.style,
                    q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
                    r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
                    s = e;
                for (var t in i) i[a](t) && (m[t] = i[t]);
                if (q && (m.path = c._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~b(m.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
                    var y = +m.cx,
                        B = +m.cy,
                        D = +m.rx || +m.r || 0,
                        E = +m.ry || +m.r || 0;
                    l.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u)), e._.dirty = 1
                }
                if ("clip-rect" in i) {
                    var G = b(i["clip-rect"]).split(k);
                    if (4 == G.length) {
                        G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
                        var H = l.clipRect || c._g.doc.createElement("div"),
                            I = H.style;
                        I.clip = c.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
                    }
                    i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
                }
                if (e.textpath) {
                    var J = e.textpath.style;
                    i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"])
                }
                if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
                    var K = l.getElementsByTagName(j),
                        L = !1;
                    if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
                        var M = b(i.fill).match(c._ISURL);
                        if (M) {
                            K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile";
                            var N = e.getBBox(1);
                            K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], c._preload(M[1], function() {
                                e._.fillsize = [this.offsetWidth, this.offsetHeight]
                            })
                        } else K.color = c.getRGB(i.fill).hex, K.src = o, K.type = "solid", c.getRGB(i.fill).error && (s.type in {
                            circle: 1,
                            ellipse: 1
                        } || "r" != b(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1)
                    }
                    if ("fill-opacity" in i || "opacity" in i) {
                        var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+c.getRGB(i.fill).o + 1 || 2) - 1);
                        O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none")
                    }
                    l.appendChild(K);
                    var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                        Q = !1;
                    !P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
                    var R = c.getRGB(i.stroke);
                    P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1);
                    var S = .75 * (d(i["stroke-width"]) || 1);
                    if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), i["stroke-dasharray"]) {
                        var T = {
                            "-": "shortdash",
                            ".": "shortdot",
                            "-.": "shortdashdot",
                            "-..": "shortdashdotdot",
                            ". ": "dot",
                            "- ": "dash",
                            "--": "longdash",
                            "- .": "dashdot",
                            "--.": "longdashdot",
                            "--..": "longdashdotdot"
                        };
                        P.dashstyle = T[a](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o
                    }
                    Q && l.appendChild(P)
                }
                if ("text" == s.type) {
                    s.paper.canvas.style.display = o;
                    var U = s.paper.span,
                        V = 100,
                        W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                    p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = b(s.textpath.string).replace(/</g, "<").replace(/&/g, "&").replace(/\n/g, "<br>"));
                    var X = U.getBoundingClientRect();
                    s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = c.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                    for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++) if (Y[Z] in i) {
                        s._.dirty = 1;
                        break
                    }
                    switch (m["text-anchor"]) {
                        case "start":
                            s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                            break;
                        case "end":
                            s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                            break;
                        default:
                            s.textpath.style["v-text-align"] = "center", s.bbx = 0
                    }
                    s.textpath.style["v-text-kern"] = !0
                }
            }, C = function(a, f, g) {
                a.attrs = a.attrs || {};
                var h = (a.attrs, Math.pow),
                    i = "linear",
                    j = ".5 .5";
                if (a.attrs.gradient = f, f = b(f).replace(c._radial_gradient, function(a, b, c) {
                    return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o
                }), f = f.split(/\s*\-\s*/), "linear" == i) {
                    var k = f.shift();
                    if (k = -d(k), isNaN(k)) return null
                }
                var l = c._parseDots(f);
                if (!l) return null;
                if (a = a.shape || a.node, l.length) {
                    a.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
                    for (var m = [], p = 0, q = l.length; q > p; p++) l[p].offset && m.push(l[p].offset + n + l[p].color);
                    g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), a.appendChild(g)
                }
                return 1
            }, D = function(a, b) {
                this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = b, this.matrix = c.matrix(), this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    dx: 0,
                    dy: 0,
                    deg: 0,
                    dirty: 1,
                    dirtyT: 1
                }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
            }, E = c.el;
            D.prototype = E, E.constructor = D, E.transform = function(a) {
                if (null == a) return this._.transform;
                var d, e = this.paper._viewBoxShift,
                    f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
                e && (d = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || o)), c._extractTransform(this, f + a);
                var g, h = this.matrix.clone(),
                    i = this.skew,
                    j = this.node,
                    k = ~b(this.attrs.fill).indexOf("-"),
                    l = !b(this.attrs.fill).indexOf("url(");
                if (h.translate(-.5, - .5), l || k || "image" == this.type) if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
                    j.style.filter = h.toFilter();
                    var m = this.getBBox(),
                        p = this.getBBox(1),
                        q = m.x - p.x,
                        r = m.y - p.y;
                    j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
                } else j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
                else j.style.filter = o, i.matrix = b(h), i.offset = h.offset();
                return d && (this._.transform = d), this
            }, E.rotate = function(a, c, e) {
                if (this.removed) return this;
                if (null != a) {
                    if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                        var f = this.getBBox(1);
                        c = f.x + f.width / 2, e = f.y + f.height / 2
                    }
                    return this._.dirtyT = 1, this.transform(this._.transform.concat([
                        ["r", a, c, e]
                    ])), this
                }
            }, E.translate = function(a, c) {
                return this.removed ? this : (a = b(a).split(k), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += c), this.transform(this._.transform.concat([
                    ["t", a, c]
                ])), this)
            }, E.scale = function(a, c, e, f) {
                if (this.removed) return this;
                if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                    ["s", a, c, e, f]
                ])), this._.dirtyT = 1, this
            }, E.hide = function() {
                return !this.removed && (this.node.style.display = "none"), this
            }, E.show = function() {
                return !this.removed && (this.node.style.display = o), this
            }, E._getBBox = function() {
                return this.removed ? {} : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H
                }
            }, E.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    this.paper.__set__ && this.paper.__set__.exclude(this), c.eve.unbind("raphael.*.*." + this.id), c._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                    for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                    this.removed = !0
                }
            }, E.attr = function(b, d) {
                if (this.removed) return this;
                if (null == b) {
                    var e = {};
                    for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                    return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                }
                if (null == d && c.is(b, "string")) {
                    if (b == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    for (var g = b.split(k), h = {}, i = 0, m = g.length; m > i; i++) b = g[i], b in this.attrs ? h[b] = this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? h[b] = this.paper.customAttributes[b].def : h[b] = c._availableAttrs[b];
                    return m - 1 ? h : h[g[0]]
                }
                if (this.attrs && null == d && c.is(b, "array")) {
                    for (h = {}, i = 0, m = b.length; m > i; i++) h[b[i]] = this.attr(b[i]);
                    return h
                }
                var n;
                null != d && (n = {}, n[b] = d), null == d && c.is(b, "object") && (n = b);
                for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
                if (n) {
                    for (o in this.paper.customAttributes) if (this.paper.customAttributes[a](o) && n[a](o) && c.is(this.paper.customAttributes[o], "function")) {
                        var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                        this.attrs[o] = n[o];
                        for (var q in p) p[a](q) && (n[q] = p[q])
                    }
                    n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n)
                }
                return this
            }, E.toFront = function() {
                return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && c._tofront(this, this.paper), this
            }, E.toBack = function() {
                return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper)), this)
            }, E.insertAfter = function(a) {
                return this.removed ? this : (a.constructor == c.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this)
            }, E.insertBefore = function(a) {
                return this.removed ? this : (a.constructor == c.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), c._insertbefore(this, a, this.paper), this)
            }, E.blur = function(a) {
                var b = this.node.runtimeStyle,
                    d = b.filter;
                return d = d.replace(r, o), 0 !== +a ? (this.attrs.blur = a, b.filter = d + n + m + ".Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))) : (b.filter = d, b.margin = 0, delete this.attrs.blur), this
            }, c._engine.path = function(a, b) {
                var c = F("shape");
                c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
                var d = new D(c, b),
                    e = {
                        fill: "none",
                        stroke: "#000"
                    };
                a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
                var f = F("skew");
                return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d
            }, c._engine.rect = function(a, b, d, e, f, g) {
                var h = c._rectPath(b, d, e, f, g),
                    i = a.path(h),
                    j = i.attrs;
                return i.X = j.x = b, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
            }, c._engine.ellipse = function(a, b, c, d, e) {
                var f = a.path();
                return f.attrs, f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
                    cx: b,
                    cy: c,
                    rx: d,
                    ry: e
                }), f
            }, c._engine.circle = function(a, b, c, d) {
                var e = a.path();
                return e.attrs, e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
                    cx: b,
                    cy: c,
                    r: d
                }), e
            }, c._engine.image = function(a, b, d, e, f, g) {
                var h = c._rectPath(d, e, f, g),
                    i = a.path(h).attr({
                        stroke: "none"
                    }),
                    k = i.attrs,
                    l = i.node,
                    m = l.getElementsByTagName(j)[0];
                return k.src = b, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = b, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i
            }, c._engine.text = function(a, d, e, g) {
                var h = F("shape"),
                    i = F("path"),
                    j = F("textpath");
                d = d || 0, e = e || 0, g = g || "", i.v = c.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = b(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
                var k = new D(h, a),
                    l = {
                        fill: "#000",
                        stroke: "none",
                        font: c._availableAttrs.font,
                        text: g
                    };
                k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = b(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), a.canvas.appendChild(h);
                var m = F("skew");
                return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k
            }, c._engine.setSize = function(a, b) {
                var d = this.canvas.style;
                return this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), d.width = a, d.height = b, d.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && c._engine.setViewBox.apply(this, this._viewBox), this
            }, c._engine.setViewBox = function(a, b, d, e, f) {
                c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f]);
                var h, i, j = this.width,
                    k = this.height,
                    l = 1 / g(d / j, e / k);
                return f && (h = k / e, i = j / d, j > d * h && (a -= (j - d * h) / 2 / h), k > e * i && (b -= (k - e * i) / 2 / i)), this._viewBox = [a, b, d, e, !! f], this._viewBoxShift = {
                    dx: -a,
                    dy: -b,
                    scale: l
                }, this.forEach(function(a) {
                    a.transform("...")
                }), this
            };
            var F;
            c._engine.initWin = function(a) {
                var b = a.document;
                b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                try {
                    !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
                        return b.createElement("<rvml:" + a + ' class="rvml">')
                    }
                } catch (c) {
                    F = function(a) {
                        return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                    }
                }
            }, c._engine.initWin(c._g.win), c._engine.create = function() {
                var a = c._getContainer.apply(0, arguments),
                    b = a.container,
                    d = a.height,
                    e = a.width,
                    f = a.x,
                    g = a.y;
                if (!b) throw new Error("VML container not found.");
                var h = new c._Paper,
                    i = h.canvas = c._g.doc.createElement("div"),
                    j = i.style;
                return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = c._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == b ? (c._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i), h.renderfix = function() {}, h
            }, c.prototype.clear = function() {
                c.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = c._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
            }, c.prototype.remove = function() {
                c.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                return !0
            };
            var G = c.st;
            for (var H in E) E[a](H) && !G[a](H) && (G[H] = function(a) {
                return function() {
                    var b = arguments;
                    return this.forEach(function(c) {
                        c[a].apply(c, b)
                    })
                }
            }(H))
        }
    }(), B.was ? A.win.Raphael = c : Raphael = c, c
}), window.DEBUG = !1, window.STUB = !0,
function() {
    "use strict";
    Date.now || (Date.now = function() {
        return +new Date
    }), window.console || (window.console = {
        log: $.noop,
        debug: $.noop,
        info: $.noop,
        warn: $.noop,
        error: $.noop,
        assert: $.noop,
        dir: $.noop,
        dirxml: $.noop,
        trace: $.noop,
        group: $.noop,
        groupEnd: $.noop,
        time: $.noop,
        timeEnd: $.noop,
        profile: $.noop,
        profileEnd: $.noop,
        count: $.noop
    }), window.Audio || (window.Audio = function() {
        this.loop = null, this.play = $.noop, this.stop = $.noop, this.pause = $.noop
    }), window.requestAnimationFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 31.25)
        }
    }(), window.cancelRequestAnimationFrame = function() {
        return window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || function(a) {
            window.clearTimeout(a)
        }
    }()
}(),
function(a) {
    "use strict";

    function b(a, b) {
        return a[b] = a[b] || {}
    }
    a.kayac = a.kayac || {}, a.kayac.utils = a.kayac.utils || {};
    var c = function(c, d) {
        for (var e = d || a, f = c.split("."), g = 0; g < f.length; g++) e = b(e, f[g])
    };
    a.kayac.utils.namespace = c
}(this),
function(a, b, c, d) {
    "use strict";
    b("kayac.util");
    var e = function() {
        throw new Error("Utility no instance")
    };
    kayac.util.Browser = function() {
        var b = {}, c = a.navigator.userAgent;
        switch (b.ua = c, !0) {
            case /MSIE/i.test(c):
                b.ie = !0;
                var d = c.match(/MSIE (\d+)/);
                if (d && (b.version = d[1]), b.prefix = "-ms-", !b.version) throw Error("IE version not found.");
                break;
            case /Trident/i.test(c):
                if (b.ie = !0, b.version = c.match(/rv:(\d+)/)[1], b.prefix = "-ms-", !b.version) throw Error("IE version not found.");
                break;
            case /Firefox/i.test(c):
                b.ff = !0, b.prefix = "-moz-";
                break;
            case /Chrome/i.test(c):
                b.ch = !0, b.webkit = !0, b.prefix = "-webkit-";
                break;
            case /Safari/i.test(c):
                b.sf = !0, b.webkit = !0, b.prefix = "-webkit-";
                break;
            case /Opera/i.test(c):
                b.op = !0, b.prefix = "-o-";
                break;
            default:
                throw b.prefix = "", Error("Browser name not found.")
        }
        if (/iPhone/.test(c)) {
            b.ipn = !0, c.match(/iPhone OS (\w+){1,3}/g);
            var e = (RegExp.$1.replace(/[\._]/g, "") + "00").slice(0, 3);
            e >= 500 && (b.ipn5 = !0)
        }
        if (/Android/.test(c)) {
            b.adr = !0, c.match(/Android (\w+){1,3}/g);
            var f = (RegExp.$1.replace(/_/g, "") + "00").slice(0, 3);
            300 >= +f ? b.adr2 = !0 : +f >= 400 && (b.adr4 = !0)
        }
        return b.file = !! (window.File && window.FileReader && window.FileList), b
    }, kayac.util.checkNoJS = function(a) {
        var b = document.getElementsByTagName("html")[0];
        b.className = b.className.replace(/(^|\s)no-js(\s|$)/, "")
    }, kayac.util.fetchEffectState = function(a) {
        if (a === d) {
            switch (c.cookie("kayac_effect")) {
                case "true":
                    a = !0;
                    break;
                case "false":
                    a = !1;
                    break;
                default:
                    a = d
            }
            return a
        }
        return c.cookie("kayac_effect", a, {
            path: "/"
        })
    }, kayac.util.pushState = function(a, b) {
        history.pushState && history.pushState(b, "", a)
    }, kayac.util.currentName = function() {
        return kayac.util.urlCanonical(document.location.pathname)
    }, kayac.util.urlCanonical = function(a) {
        return a.length > 1 && (a = a.split("#")[0], "/" === a.slice(-1) && (a = a.slice(0, - 1))), a
    }, kayac.util.urlToName = function(a) {
        return a.replace(/\//, "").replace(/\//g, "-").replace(/\&/g, "-").replace(/\?/g, ".").replace(/\=/g, ":").split("#")[0]
    }, kayac.util.toObject = function(a) {
        var b, c, d, e = 0,
            f = {};
        for (a = a.replace(/^\?/, ""), b = a.split("&"); c = b[e++];) d = c.split("="), decodeURIComponent(d[0]).match(/\[\]/) ? (f[d[0]] || (f[d[0]] = []), f[d[0]].push(decodeURIComponent(d[1]))) : f[d[0]] = decodeURIComponent(d[1]);
        return f
    }, kayac.util.toQuery = function(a) {
        var b = "";
        for (var c in a) b += decodeURIComponent(c).match(/\[\]/) ? "&" + c + "=" + a[c].join("&" + c + "=") : "&" + c + "=" + a[c];
        return b.replace("&", "")
    }, a.kayac.util.Utility = e
}(this, this.kayac.utils.namespace, jQuery),
function(a, b) {
    "use strict";
    b("kayac.svg");
    var c = '<pattern id="pattern-comic-line" width="80" height="10" patternUnits="userSpaceOnUse">\n  <path fill="none" stroke="#404040" stroke-width="3" transform="translate(0, -1)" stroke-miterlimit="10" d="M0,3.183c0.358,0,0.358-0.325,0.717-0.325c0.359,0,0.359,0.564,0.717,0.564c0.359,0,0.359-0.415,0.718-0.415c0.359,0,0.359,0.392,0.718,0.392s0.359-0.586,0.718-0.586s0.359,0.034,0.719,0.034c0.359,0,0.359,0.499,0.719,0.499c0.359,0,0.359-0.434,0.718-0.434s0.359-0.158,0.718-0.158S6.822,3.03,7.181,3.03S7.54,3.303,7.898,3.303S8.256,3.32,8.615,3.32s0.359,0.088,0.717,0.088s0.358-0.491,0.717-0.491s0.358-0.065,0.717-0.065s0.358-0.251,0.716-0.251s0.358,0.484,0.716,0.484s0.358,0.018,0.717,0.018s0.358-0.032,0.716-0.032s0.358-0.179,0.716-0.179s0.358,0.489,0.716,0.489s0.358-0.66,0.716-0.66s0.358,0.219,0.717,0.219s0.358-0.049,0.716-0.049c0.359,0,0.359,0.293,0.717,0.293s0.358-0.555,0.717-0.555s0.358,0.504,0.717,0.504s0.359,0.217,0.718,0.217s0.359-0.324,0.718-0.324s0.359,0.112,0.718,0.112s0.359-0.175,0.719-0.175s0.359,0.26,0.719,0.26c0.36,0,0.36-0.098,0.72-0.098c0.359,0,0.359,0.075,0.719,0.075c0.359,0,0.359-0.022,0.719-0.022c0.359,0,0.359-0.416,0.718-0.416s0.359,0.474,0.718,0.474s0.359-0.019,0.718-0.019s0.359,0.159,0.718,0.159s0.359-0.071,0.718-0.071s0.359,0,0.717,0c0.359,0,0.359-0.575,0.718-0.575c0.358,0,0.358,0.536,0.717,0.536s0.359-0.615,0.717-0.615c0.359,0,0.359-0.019,0.718-0.019c0.359,0,0.359,0.344,0.718,0.344s0.359-0.357,0.718-0.357c0.359,0,0.359,0.107,0.719,0.107s0.359-0.128,0.719-0.128c0.36,0,0.36,0.377,0.719,0.377c0.36,0,0.36,0.077,0.72,0.077s0.36,0.16,0.72,0.16c0.359,0,0.359-0.365,0.719-0.365c0.359,0,0.359-0.244,0.719-0.244c0.359,0,0.359,0.421,0.718,0.421s0.359,0.05,0.719,0.05c0.356,0,0.356-0.136,0.713-0.136s0.357,0.104,0.714,0.104s0.357,0.032,0.715,0.032c0.358,0,0.358-0.309,0.716-0.309c0.358,0,0.358,0.062,0.717,0.062c0.359,0,0.359,0.477,0.718,0.477c0.359,0,0.359-0.167,0.719-0.167c0.36,0,0.36-0.152,0.72-0.152c0.36,0,0.36-0.076,0.72-0.076c0.359,0,0.359,0.301,0.719,0.301c0.359,0,0.359-0.326,0.718-0.326c0.358,0,0.358,0.301,0.717,0.301c0.358,0,0.358-0.154,0.717-0.154c0.358,0,0.358-0.221,0.716-0.221s0.358,0.6,0.716,0.6S51.312,2.65,51.67,2.65s0.358,0.327,0.716,0.327s0.358,0.457,0.716,0.457s0.358-0.442,0.716-0.442c0.358,0,0.358,0.054,0.717,0.054s0.358-0.063,0.717-0.063c0.359,0,0.359-0.027,0.718-0.027c0.359,0,0.359-0.316,0.719-0.316c0.36,0,0.36,0.366,0.72,0.366c0.361,0,0.361,0.218,0.721,0.218s0.36-0.607,0.721-0.607c0.36,0,0.36,0.17,0.72,0.17c0.359,0,0.359,0.063,0.719,0.063c0.359,0,0.359-0.189,0.719-0.189c0.359,0,0.359,0.581,0.718,0.581s0.359-0.656,0.719-0.656s0.359,0.463,0.718,0.463c0.36,0,0.36,0.074,0.719,0.074c0.36,0,0.36-0.159,0.72-0.159c0.36,0,0.36,0.151,0.721,0.151c0.361,0,0.361,0.043,0.723,0.043c0.361,0,0.361,0.146,0.721,0.146s0.36-0.337,0.72-0.337s0.36,0.357,0.72,0.357s0.36-0.159,0.72-0.159c0.36,0,0.36,0.246,0.721,0.246c0.361,0,0.361-0.457,0.722-0.457c0.361,0,0.361,0.171,0.723,0.171c0.361,0,0.361-0.484,0.721-0.484s0.36,0.713,0.721,0.713s0.361-0.08,0.722-0.08c0.358,0,0.358,0.012,0.716,0.012c0.359,0,0.359-0.175,0.717-0.175c0.359,0,0.359-0.058,0.718-0.058c0.361,0,0.361,0.18,0.722,0.18c0.362,0,0.362-0.599,0.724-0.599c0.361,0,0.361,0.33,0.721,0.33s0.36,0.449,0.721,0.449c0.361,0,0.361-0.434,0.722-0.434c0.362,0,0.362,0.121,0.725,0.121c0.362,0,0.362,0.261,0.724,0.261c0.361,0,0.361-0.743,0.723-0.743c0.363,0,0.363,0.205,0.726,0.205c0.362,0,0.362,0.272,0.725,0.272C83,3.094,83,3.132,83.362,3.132c0.361,0,0.361-0.308,0.723-0.308c0.363,0,0.363,0.184,0.727,0.184c0.364,0,0.364-0.201,0.728-0.201c0.365,0,0.365,0.083,0.73,0.083c0.365,0,0.365-0.12,0.729-0.12"/>\n</pattern>\n<pattern id="pattern-fat-comic-line" width="80" height="10" patternUnits="userSpaceOnUse">\n  <path fill="none" stroke="#404040" stroke-width="5" stroke-miterlimit="10" d="M0,4.977c0.366,0,0.366-0.354,0.733-0.354S1.1,3.748,1.467,3.748c0.367,0,0.367,0.658,0.733,0.658c0.367,0,0.367-0.072,0.734-0.072s0.367-0.575,0.734-0.575s0.367,0.207,0.735,0.207s0.368,0.141,0.735,0.141s0.368-0.252,0.735-0.252s0.368,1.183,0.736,1.183c0.368,0,0.368-0.151,0.735-0.151c0.367,0,0.367,0.249,0.735,0.249c0.367,0,0.367-1.346,0.734-1.346S9.182,4.252,9.55,4.252c0.367,0,0.367,0.28,0.734,0.28s0.367,0.797,0.734,0.797s0.367-0.972,0.733-0.972s0.367,0.588,0.733,0.588s0.367,0.195,0.733,0.195s0.367-1.456,0.733-1.456s0.367,0.041,0.733,0.041c0.367,0,0.367,1.614,0.733,1.614c0.366,0,0.366-1.461,0.733-1.461s0.367-0.096,0.733-0.096c0.367,0,0.367,1.533,0.733,1.533S17.983,4.84,18.35,4.84s0.367-1.007,0.733-1.007s0.367,0.581,0.733,0.581c0.367,0,0.367-0.806,0.734-0.806s0.367,0.435,0.734,0.435s0.367,0.898,0.734,0.898s0.367,0.229,0.735,0.229s0.368-1.559,0.735-1.559c0.368,0,0.368,0.244,0.736,0.244s0.368,0.373,0.736,0.373s0.368,0.786,0.736,0.786s0.368,0.118,0.736,0.118s0.368-0.34,0.735-0.34s0.368,0.041,0.735,0.041s0.368,0.453,0.735,0.453s0.367-0.082,0.735-0.082c0.367,0,0.367-0.39,0.734-0.39s0.367,0.45,0.734,0.45s0.367-1.042,0.734-1.042c0.367,0,0.367-0.089,0.734-0.089s0.367-0.118,0.734-0.118s0.367,0.554,0.734,0.554s0.367,0.735,0.734,0.735S34.88,5.15,35.248,5.15s0.368-1.475,0.735-1.475c0.368,0,0.368,0.246,0.735,0.246s0.368,0.861,0.735,0.861c0.368,0,0.368-0.799,0.736-0.799s0.368,0.366,0.736,0.366s0.368-0.267,0.736-0.267s0.368,0.147,0.736,0.147c0.368,0,0.368-0.62,0.735-0.62s0.368,1.387,0.735,1.387s0.368-0.389,0.735-0.389c0.367,0,0.367-0.188,0.735-0.188c0.366,0,0.366,0.815,0.731,0.815c0.366,0,0.366-1.032,0.731-1.032c0.366,0,0.366,0.045,0.732,0.045c0.367,0,0.367,0.428,0.733,0.428c0.367,0,0.367,0.652,0.734,0.652c0.368,0,0.368-1.644,0.736-1.644c0.369,0,0.369,1.096,0.737,1.096s0.368-1.004,0.736-1.004s0.368,0.305,0.736,0.305s0.368,0.196,0.735,0.196s0.367,0.796,0.734,0.796S51.782,4.87,52.15,4.87c0.366,0,0.366-0.455,0.733-0.455c0.366,0,0.366-0.785,0.732-0.785c0.367,0,0.367,0.254,0.733,0.254s0.366,0.292,0.732,0.292s0.366,0.912,0.732,0.912s0.366-1.17,0.733-1.17s0.367-0.269,0.733-0.269c0.367,0,0.367,0.32,0.734,0.32c0.367,0,0.367,1.117,0.734,1.117c0.368,0,0.368-0.663,0.735-0.663c0.368,0,0.368,0.374,0.736,0.374c0.369,0,0.369-0.558,0.738-0.558s0.369,0.465,0.738,0.465s0.369,0.661,0.737,0.661c0.368,0,0.368-0.816,0.736-0.816s0.368-0.067,0.736-0.067s0.368-0.287,0.735-0.287c0.368,0,0.368,0.875,0.735,0.875s0.368-0.842,0.735-0.842c0.368,0,0.368,0.216,0.736,0.216c0.369,0,0.369,0.92,0.737,0.92c0.369,0,0.369-1.134,0.738-1.134c0.37,0,0.37,0.438,0.739,0.438c0.369,0,0.369-0.203,0.738-0.203c0.369,0,0.369-0.188,0.737-0.188c0.368,0,0.368,0.458,0.737,0.458s0.369-0.159,0.737-0.159c0.369,0,0.369,0.529,0.737,0.529c0.369,0,0.369-1.122,0.739-1.122s0.37,0.177,0.739,0.177c0.369,0,0.369,0.82,0.738,0.82c0.369,0,0.369-0.073,0.738-0.073s0.369-0.236,0.738-0.236c0.37,0,0.37-0.489,0.739-0.489c0.367,0,0.367-0.325,0.733-0.325c0.367,0,0.367,1.175,0.735,1.175c0.369,0,0.369-1.257,0.738-1.257c0.37,0,0.37,1.26,0.74,1.26c0.369,0,0.369-1.069,0.738-1.069s0.369,1.143,0.737,1.143c0.369,0,0.369-0.039,0.738-0.039c0.371,0,0.371-0.802,0.741-0.802c0.37,0,0.37,1.047,0.74,1.047s0.37-0.814,0.74-0.814c0.371,0,0.371-0.379,0.742-0.379c0.37,0,0.37,0.398,0.741,0.398S86.409,5.3,86.78,5.3c0.37,0,0.37-1.126,0.739-1.126c0.371,0,0.371,1.062,0.743,1.062c0.372,0,0.372-0.122,0.744-0.122c0.374,0,0.374-0.031,0.747-0.031s0.373,0.188,0.746,0.188"/>\n</pattern>\n',
        d = '<svg xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  width="100%" height="100%">\n  <defs>\n' + c + '    <mask id="Mask-{{ UID }}">\n      <rect width="100%" height="100%" fill="white"/>\n      <svg x="100%" overflow="visible">\n        <g transform="scale(-1, 1)">\n          <rect width="{{ maximum }}" height="{{ maximum }}"\n            fill="black" transform="rotate({{ angle }})"/>\n        </g>\n      </svg>\n    </mask>\n    <g mask="url(#Mask-{{ UID }})" id="Box-{{ UID }}">\n      <rect fill="url(#{{ patternID }})" class="comic-border-line"\n        width="100%" height="{{ strokeWidth }}" id="TopLine"/>\n      <svg x="100%" overflow="visible" id="RightLine">\n        <g transform="scale(-1, 1)">\n          <rect fill="url(#{{ patternID }})" class="comic-border-line"\n            width="{{ maximum }}" height="{{ strokeWidth }}" \n            transform="rotate({{ angle }}) translate({{ maximum }}, 0) scale(-1, -1)"/>\n        </g>\n      </svg>\n      <svg y="100%" overflow="visible" id="BottomLine">\n        <g transform="scale(1, -1)">\n          <rect fill="url(#{{ patternID }})" class="comic-border-line"\n            width="{{ maximum }}" height="{{ strokeWidth }}"/>\n        </g>\n      </svg>\n      <rect fill="url(#{{ patternID }})" class="comic-border-line"\n        width="{{ maximum }}" height="{{ strokeWidth }}"\n        id="LeftLine" transform="rotate(270) translate(-{{ maximum }}, 0)" />\n    </g>\n  </defs>\n  <svg id="OBox" display="none">\n    <use xlink:href="#Box-{{ UID }}"/>\n  </svg>\n  <svg y="100%" overflow="visible" id="VRBox" display="none">\n    <use xlink:href="#Box-{{ UID }}" transform="scale(1, -1)"/>\n  </svg>\n  <svg x="100%" overflow="visible" id="HRBox" display="none">\n    <use xlink:href="#Box-{{ UID }}" transform="scale(-1, 1)"/>\n  </svg>\n  <svg x="100%" y="100%" overflow="visible" id="ORBox" display="none">\n    <use xlink:href="#Box-{{ UID }}" transform="scale(-1, -1)"/>\n  </svg>\n</svg>',
        e = function() {
            this.drawCustomBox = function(a, b) {
                f(a);
                var c = g(b, a);
                return c = h(c, a), c = i(c)
            }, this.drawBox = function(a) {
                return f(a), this.drawCustomBox(a, d)
            }
        }, f = function(a) {
            return a.angle > 90 && (a.angle = 180 - a.angle, a.verticalReverse = !a.verticalReverse), a
        }, g = function(a, b) {
            var c = a;
            for (var d in b) {
                var e = new RegExp("\\{\\{\\s" + d + "\\s\\}\\}", "gi");
                c = c.replace(e, b[d])
            }
            return c
        }, h = function(a, b) {
            var c = document.createElement("div");
            c.innerHTML = a;
            var d = [c.querySelector("#OBox"), c.querySelector("#VRBox"), c.querySelector("#HRBox"), c.querySelector("#ORBox")],
                e = b.verticalReverse && b.horizontalReverse ? 3 : b.horizontalReverse && !b.verticalReverse ? 2 : b.verticalReverse && !b.horizontalReverse ? 1 : 0;
            return d[e].removeAttribute("display"), c.innerHTML
        }, i = function(a) {
            var b = Date.now();
            return g(a, {
                UID: b
            })
        };
    a.kayac.svg.FlexBoxDrawer = e
}(this, this.kayac.utils.namespace, jQuery),
function(a, b) {
    "use strict";
    b("kayac.event");
    var c = {
        LOAD: "load",
        CLICK: "click",
        KEYDOWN: "keydown",
        KEYUP: "keyup",
        KEYPRESS: "keypress",
        ADDED_TO_DOCUMENT: "addedToDocument"
    }, d = "ontouchstart" in window,
        e = {
            START: d ? "touchstart" : "mousedown",
            MOVE: d ? "touchmove" : "mousemove",
            END: d ? "touchend" : "mouseup"
        }, f = {
            PULL: "scroll_event_pull",
            PULL_DOWN: "scroll_event_pull_down",
            PULL_START: "scroll_event_pull_start",
            PULL_END: "scroll_event_pull_end",
            RAISE: "scroll_event_raise",
            RAISE_UP: "scroll_event_raise_up",
            RAISE_START: "scroll_event_raise_start",
            RAISE_END: "scroll_event_raise_end",
            TOP: "scroll_event_top",
            BOTTOM: "scroll_event_bottom",
            DOWN: "scroll_event_down",
            UP: "scroll_event_up"
        }, g = {
            CROSS: "linear_content_stride"
        };
    a.kayac.event.Event = c, a.kayac.event.PointerEvent = e, a.kayac.event.ScrollEvent = f, a.kayac.event.StrideEvent = g
}(this, this.kayac.utils.namespace),
function(a, b) {
    "use strict";
    b("kayac.event");
    var c = function(a, b, c) {
        this.target = a, this.type = b, this.data = c
    }, d = function() {
        var a = {};
        this.addEventListener = function(b, c) {
            (a[b] || (a[b] = [])).push(c)
        }, this.hasEventListener = function(b) {
            return !!a[b]
        }, this.removeEventListener = function(b, c) {
            var d = a[b];
            if (d) for (var e = d.length - 1; e >= 0; e--) d[e] === c && d.splice(e, 1)
        }, this.onesEventListener = function(a, b) {
            var c = this,
                d = function(e) {
                    c.removeEventListener(a, d), b.apply(c, [e]), d = null
                };
            this.addEventListener(a, d)
        }, this.dispatchEvent = function(b, d) {
            var e = a[b],
                f = new c(this, b, d);
            if (e) {
                e = e.concat();
                for (var g = 0, h = e.length; h > g; g++) e[g].apply(this, [f])
            }
        }
    };
    a.kayac.event.EventDispatcher = d
}(this, this.kayac.utils.namespace),
function(a, b, c) {
    "use strict";
    b("kayac.event");
    var d = kayac.event.ScrollEvent,
        e = "mousewheel.ScrollEventDispatcher",
        f = "scroll.ScrollEventDispatcher",
        g = 1e3 / 30,
        h = function() {
            function a(a, c, d) {
                j.trigger(a, l), k = setInterval(function() {
                    l += .8 * (0 - l), j.trigger(c, l), .1 > l && (b(), j.trigger(d, l))
                }, g)
            }
            function b() {
                clearInterval(k), k = null, l = 0
            }
            function h() {
                var b = j.scrollTop(),
                    c = 0 >= b,
                    g = b + i.height() >= j.height(),
                    h = b;
                j.on(e, function(e, f) {
                    b = j.scrollTop(), (c === !0 && f > 0 || g === !0 && 0 > f) && e.preventDefault(), l += Math.abs(10 * f), (c || g) && null === k && (c === !0 && f > 0 && (50 > l && j.trigger(d.PULL_DOWN), a(d.PULL_START, d.PULL, d.PULL_END)), g === !0 && 0 > f && (50 > l && j.trigger(d.RAISE_UP), a(d.RAISE_START, d.RAISE, d.RAISE_END)))
                }), j.on(f, function(a) {
                    b = j.scrollTop(), c = 0 >= b, g = b + i.height() >= j.height(), c ? j.trigger(d.TOP) : g && j.trigger(d.BOTTOM), j.trigger(b > h ? d.DOWN : d.UP, h - b), h = b
                })
            }
            var i = c(window),
                j = c(document),
                k = null,
                l = 0;
            h(), this.destroy = function() {
                j.off(e).off(f)
            }
        };
    a.kayac.event.ScrollEventDispatcher = h
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c, d) {
    "use strict";
    b("kayac.event");
    var e = kayac.event.StrideEvent,
        f = "resize.StrideEventDispatcher",
        g = "scroll.StrideEventDispatcher",
        h = 250,
        i = function(a) {
            function b() {
                r.on(g, d), q.on(f, d)
            }
            function d(a, b) {
                if (v = u(), b === !0 || v - w > h && s.$target) {
                    for (i = r.scrollTop(), j = i + q.height(), k = i + t, m = 0, n = s.$target.length; n > m; m++) {
                        if (l = s.$target.eq(m), o = l.offset().top, p = o + l.outerHeight(), k >= o && p >= k && l[0] !== x[0] && (r.trigger(e.CROSS, l), x = l), o > j + 300) {
                            l.remove(), s.$target.splice(m, 1), l = null;
                            break
                        }
                        if (i > p) {
                            r.scrollTop(i - l.outerHeight() - ~~c("#MainContents").css("top").replace("px", "")), l.remove(), s.$target.splice(m, 1), l = null;
                            break
                        }
                    }
                    w = v
                }
            }
            var i, j, k, l, m, n, o, p, q = c(window),
                r = c(document),
                s = this,
                t = a,
                u = Date.now,
                v = u(),
                w = v,
                x = [];
            b(), this.$target, this.destroy = function() {
                r.off(g)
            }
        };
    a.kayac.event.StrideEventDispatcher = i
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.net");
    var d = function(a, b, c, e, f) {
        this.type = a, this.dir = e, this.url = b, this.api = c, this.title = f || "", this.status = d.UNLOAD
    };
    d.CONTENT = "content", d.LIST = "list", d.LINK = "link", d.NULL = "null", d.ONLOAD = "onload", d.UNLOAD = "unload", d.PREV = "prev", d.NEXT = "next", d.START = "start", a.kayac.net.RequestData = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.net");
    var d = kayac.event.EventDispatcher,
        e = function() {
            d.apply(this);
            var a = this;
            this.request = null, this.load = function(b) {
                this.request = c.ajax({
                    url: b.api
                }).complete(function(c, d, f) {
                    a.request = null, a.dispatchEvent(e.COMPLETE, {
                        content: c,
                        request: b
                    })
                }).success(function(c, d, f) {
                    a.dispatchEvent(e.SUCCESS, {
                        content: c,
                        request: b
                    })
                }).error(function(c, d) {
                    a.dispatchEvent(e.ERROR, {
                        content: c,
                        request: b
                    })
                }), this.dispatchEvent(e.LOAD, b)
            }, this.abort = function() {
                this.request && (this.request.abort(), this.request = null, a.dispatchEvent(e.CANCEL))
            }
        };
    e.LOAD = "PageLoader_load", e.ERROR = "PageLoader_load_error", e.CANCEL = "PageLoader_load_cancel", e.SUCCESS = "PageLoader_load_success", e.COMPLETE = "PageLoader_load_complete", a.kayac.net.PageLoader = e
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.net");
    var d = kayac.event.EventDispatcher,
        e = "563583563665163",
        f = "ja" === kayac.lang ? "ja_JP" : "en_US",
        g = function(b, g) {
            d.apply(this);
            var h, i, j, k, l;
            this.init = function() {
                FB.init({
                    appid: e,
                    status: !1,
                    xfbml: !0
                })
            }, this.reset = function(a) {
                h = c(".share-button", a), i = c(".facebook", h), j = c(".twitter", h), k = c(".plusone", h), l = c("#fb-script", a)
            }, this.clear = function() {
                a.twttr && c("#twitter-wjs").remove(), a.twttr = null, a.FB && c("#facebook-jssdk").remove(), a.FB = null
            }, this.load = function() {
                this.clear(), c(".share-button .twitter").length >= 1 && ! function(a, b, c) {
                    var d, e = a.getElementsByTagName(b)[0],
                        f = /^http:/.test(a.location) ? "http" : "https";
                    a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = f + "://platform.twitter.com/widgets.js", e.parentNode.insertBefore(d, e))
                }(document, "script", "twitter-wjs"), c(".share-button .facebook").length >= 1 && ! function(a, b, c) {
                    var d, g = a.getElementsByTagName(b)[0];
                    a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = "//connect.facebook.net/" + f + "/all.js#xfbml=1&appId=" + e, g.parentNode.insertBefore(d, g))
                }(document, "script", "facebook-jssdk")
            }
        };
    a.kayac.net.ShareButtonLoader = g
}(this, this.kayac.utils.namespace, jQuery),
function(a, b) {
    "use strict";
    b("kayac.svg");
    var c = function() {
        this.loadContent = function(b) {
            var c = b.getAttribute("data-svg-url"),
                f = new XMLHttpRequest;
            f.open("GET", c, !0), f.onreadystatechange = function(g) {
                if (4 === f.readyState) {
                    if (200 !== f.status) throw new Error("Error happened when retrieving SVG content.");
                    var h = document.createElement("div");
                    h.innerHTML = f.responseText;
                    var i = h.children[0];
                    d(i, b), e(b), $(a).trigger("svgload", {
                        url: c
                    })
                }
            }, f.send(null)
        }, this.loadAsBackground = function(a, b) {
            var c = a.getAttribute("data-svg-url"),
                d = a.getAttribute("width"),
                e = a.getAttribute("height"),
                f = a.parentNode,
                g = a.className.baseVal || a.className;
            if (/svg-bg/i.test(g)) return f.removeChild(a), void(f.className += " svg-bg");
            var h = document.createElement("div");
            h.className = g.replace(/(^|\s)svg-loader(\s|$)/, ""), b || (h.style.backgroundImage = "url(" + c + ")"), /px$/i.test(d) && (h.style.width = d), /px$/i.test(e) && (h.style.height = e), f.replaceChild(h, a)
        }
    }, d = function(a, b) {
        for (var c = document.createDocumentFragment(), d = 0, e = a.childNodes.length; e > d; d++) 1 === a.childNodes[d].nodeType && c.appendChild(a.childNodes[d].cloneNode(!0));
        b.appendChild(c)
    }, e = function(a) {
        "object" == typeof a.className && (a.className.baseVal = a.className.baseVal.replace(/(^|\s)svg-loader(\s|$)/, ""))
    };
    a.kayac.svg.Loader = c
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.net");
    var d = "/api/recruit/valid_attributes",
        e = "/api/contact/valid_attributes";
    kayac.net.FormValidator = function(a, b) {
        var i = d,
            j = "recruit";
        b && "contact" === b.type && (i = e, j = "contact");
        var k = function(a, b) {
            l.process(a)
        }, l = {
            isErrAnimating: !1,
            process: function(b) {
                var d, e;
                for (d in b.errors) {
                    if (e = "recruit_entry[applicants_reason]" === d ? "recruit_entry[applicants_reason][]" : d, "contact[service_name]" === e) {
                        var f = c('input[name="contact[kind]"]:checked').val();
                        "4" != f && (b.errors[d] = [])
                    }
                    b.errors[d].length ? (a.setValid(e, !1), this.add(e, b.errors[d].join(" "))) : (a.setValid(e, !0), this.remove(e))
                }
                a.getValidSection()
            },
            add: function(a, b) {
                var d = c('.error-text[data-field="' + a + '"]'),
                    e = d.closest(".entry-sheet-item, .entry-photo-box, .contact-sheet-item"),
                    f = d.closest(".entry-sheet-item-content, .entry-photo-box, .contact-sheet-item-content");
                d.text(b);
                var g = e.offset().top,
                    h = this;
                this.isErrAnimating || (this.isErrAnimating = !0, f.addClass("blink"), c("body, html").animate({
                    scrollTop: g - 60
                }), setTimeout(function() {
                    h.isErrAnimating = !1, f.removeClass("blink")
                }, 1e3)), e.addClass("error")
            },
            remove: function(a) {
                var b = c('.error-text[data-field="' + a + '"]'),
                    d = b.closest(".entry-sheet-item, .entry-photo-box, .contact-sheet-item");
                b.text(""), f(d) || d.removeClass("error")
            }
        };
        this.validate = function(a) {
            a = {
                data: JSON.stringify(a),
                authenticity_token: c('input[name="authenticity_token"]').val()
            }, "contact" === j && (a.locale = kayac.lang), c.ajax({
                type: "POST",
                url: i,
                data: a,
                success: k
            })
        }, this.validateFile = function(a) {
            var b, d, e, f, i, j = {
                is_error: 0,
                errors: {}
            };
            for (b in a) d = b, e = c('input[name="' + d + '"]'), i = c('input[name="' + d.replace(/photo(\d)]/i, "tmp_photo$1") + '_url]"]'), j.errors[d] = [], kayac.browser.file && (e[0].files.length ? (f = e[0].files.item(0), "image/jpeg" !== f.type && "image/gif" !== f.type && "image/png" !== f.type && j.errors[d].push("JPG/GIF/PNG形式の画像を選択して下さい。"), f.size > 1e6 && (j.errors[d].push("1MB以内の画像を選択して下さい。"), e.val("")), i.length && i.remove()) : i.length || j.errors[d].push("画像が選択されていません。")), j.errors[d].length ? (j.is_error = 1, h(e)) : (i = c('input[name="' + d.replace(/photo/i, "tmp_photo") + '_url"]'), i.length || g(f, e));
            l.process(j)
        }, this.validateName = function(b) {
            var c = a.get(b),
                d = {}; - 1 !== b.indexOf("[]") && (b = b.slice(0, - 2)), "recruit_entry[photo1]" === b || "recruit_entry[photo2]" === b || "recruit_entry[photo3]" === b ? this.validateFileName(b) : (d[b] = c.content, this.validate(d))
        }, this.validateFileName = function(b) {
            var c = {};
            c[b] = a.get(b).content, this.validateFile(c)
        }, this.validateAll = function() {
            var b = a.getTotalValidationData();
            this.validateFile(b.file), this.validate(b.input)
        }, c(".melmag-register-form").show()
    };
    var f = function(a) {
        var b = !1;
        return c(".error-text", a).each(function() {
            c(this).text().length > 0 && (b = !0)
        }), b
    }, g = function(a, b) {
        var c, d = b.val().match(/[^\\]*\.(jpg|jpeg|png|gif)$/i)[0];
        kayac.browser.file && (c = new FileReader, c.onload = function(a) {
            var c = a.target.result;
            b.closest("section").find(".entry-photo-box").css({
                "background-image": "url(" + c + ")"
            })
        }, c.readAsDataURL(a)), b.closest("section").find(".photo-name").text(d)
    }, h = function(a) {
        a.closest("section").find(".entry-photo-box").css({
            "background-image": "none"
        }).end().find(".photo-name").text("画像が選択されていません")
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.net");
    var d = function(a, b, d) {
        function e(a) {
            var c;
            return b ? c = "project" === b ? a.projects : a : !1
        }
        var f = this,
            g = c.Deferred();
        this.loader = g.promise(), this.list = {}, this.loader.then(d), this.load = function() {
            c.ajax({
                url: a,
                type: "GET",
                dataType: "json",
                success: function(a, b, c) {
                    var d = a;
                    f.list = e(d), g.resolve()
                },
                error: function(a, b, c) {
                    console.error("kayac.net.CarouselLoader#load  error", b, c), g.reject([])
                }
            })
        }
    };
    a.kayac.net.CarouselLoader = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.net");
    var d = function(a) {
        var b = this,
            d = c.Deferred();
        this.adList = {}, this.load = function() {
            return c.ajax({
                url: a,
                type: "GET",
                dataType: "json",
                success: function(a, c, e) {
                    var f = a;
                    b.adList = f, d.resolve()
                },
                error: function(a, b, c) {
                    console.error("kayac.net.AdLoader#load  error", b, c), d.reject([])
                }
            }), d.promise()
        }
    };
    a.kayac.net.AdLoader = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.model");
    var d = {
        sections: ["entry-your-photos", "entry-sheet-box-1", "entry-sheet-box-2", "entry-sheet-box-3", "entry-sheet-box-4"],
        requiredFields: {
            "entry-your-photos": ["recruit_entry[photo1]", "recruit_entry[photo2]", "recruit_entry[photo3]"],
            "entry-sheet-box-1": ["recruit_entry[last_name_kana]", "recruit_entry[first_name_kana]", "recruit_entry[last_name]", "recruit_entry[first_name]", "recruit_entry[birthday]", "recruit_entry[gender]"],
            "entry-sheet-box-2": ["recruit_entry[zip_code]", "recruit_entry[prefecture]", "recruit_entry[address]", "recruit_entry[tel]", "recruit_entry[email_pc]", "recruit_entry[mail_magazine_flag]", "recruit_entry[email_mb]"],
            "entry-sheet-box-3": ["recruit_entry[recruit_job_category_id]", "recruit_entry[job_career]", "recruit_entry[qualifications]", "recruit_entry[applicants_reason][]"],
            "entry-sheet-box-4": ["recruit_entry[learn_about_by]"]
        }
    }, e = {
        sections: ["contact-sheet-box-1", "contact-sheet-box-2"],
        requiredFields: {
            "contact-sheet-box-1": ["contact[kind]", "contact[body]", "contact[service_name]"],
            "contact-sheet-box-2": ["contact[last_name_kana]", "contact[first_name_kana]", "contact[last_name]", "contact[first_name]", "contact[tel]", "contact[email]"]
        }
    };
    "ja" !== kayac.lang && (e.requiredFields["contact-sheet-box-2"] = ["contact[last_name]", "contact[first_name]", "contact[tel]", "contact[email]"]), kayac.model.FormModel = function(b) {
        var g = d,
            h = "recruit";
        b && "contact" === b.type && (g = e, h = "contact"), this.data = {}, this.cache = {
            validSections: []
        }, this.readyToSend = !1, this.init = function() {
            var a, b, c;
            for (a = 0; a < g.sections.length; a++) for (c = g.sections[a], b = 0; b < g.requiredFields[c].length; b++) "recruit_entry[mail_magazine_flag]" !== g.requiredFields[c][b] ? this.set(g.requiredFields[c][b], {
                isValid: !1,
                content: ""
            }) : this.set(g.requiredFields[c][b], {
                isValid: !0,
                content: "true"
            })
        }, this.get = function(a) {
            return this.data[a]
        }, this.set = function(a, b) {
            return this.data[a] = b, this.data[a]
        }, this.setContent = function(b, d, e) {
            return this.data[b].content = d, e || c(a).trigger("form.model.fieldchange", {
                name: b,
                data: this.data[b]
            }), this.data[b]
        }, this.setValid = function(b, d) {
            return this.data[b].isValid = d, c(a).trigger("form.model.fieldupdate", {
                name: b,
                data: this.data[b]
            }), this.data[b]
        }, this.getValidSection = function() {
            var b, d, e, h, i = [];
            for (b = 0; b < g.sections.length; b++) {
                for (h = g.sections[b], e = !0, d = 0; d < g.requiredFields[h].length; d++) if (!this.get(g.requiredFields[h][d]).isValid) {
                    e = !1;
                    break
                }
                e && i.push(h)
            }
            var j = f(i, this.cache.validSections);
            return j.isDifferent && c(a).trigger("form.model.sectionupdate", {
                validSections: i,
                diff: j
            }), this.cache.validSections = i, i
        }, this.getInvalidSection = function() {
            var a, b, c = [],
                d = this.getValidSection();
            for (a = 0; a < g.sections.length; a++) c.push(a);
            for (a = 0; a < d.length; a++) for (b = 0; b < c.length; b++) if (c[b] === d[a]) {
                c.splice(b, 1);
                break
            }
            return c
        }, this.getTotalValidationData = function() {
            var a, b, c, d, e, f = {}, i = {};
            for (a = 0; a < g.sections.length; a++) for (c = g.sections[a], b = 0; b < g.requiredFields[c].length; b++) d = g.requiredFields[c][b], e = this.get(d).content, - 1 !== d.indexOf("[]") && (d = d.slice(0, - 2)), 0 === a && "recruit" === h ? i[d] = e : f[d] = e;
            return {
                input: f,
                file: i
            }
        }
    };
    var f = function(a, b) {
        var c, d, e, f = {
            isDifferent: !1,
            inserted: [],
            removed: []
        };
        for (c = 0; c < a.length; c++) {
            for (e = !0, d = 0; d < b.length; d++) if (a[c] === b[d]) {
                e = !1;
                break
            }
            e && (f.isDifferent = !0, f.inserted.push(a[c]))
        }
        for (c = 0; c < b.length; c++) {
            for (e = !0, d = 0; d < a.length; d++) if (b[c] === a[d]) {
                e = !1;
                break
            }
            e && (f.isDifferent = !0, f.removed.push(b[c]))
        }
        return f
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view");
    var d = "modal",
        e = 728,
        f = 80,
        g = 40,
        h = function(a, b, h) {
            function i() {
                x.on("click", function(a) {
                    a.preventDefault(), w.open()
                })
            }
            function j() {
                z.on("click", w.close), A.on("click", w.next)
            }
            function k() {
                x.off("click"), x.on("click", function(a) {
                    a.preventDefault()
                })
            }
            function l() {
                A.off("click"), z.off("click")
            }
            function m(a) {
                F = 1, n(), o(function() {
                    F = 0
                })
            }
            function n() {
                var a = "non-active";
                w.current === w.pageLength - 1 ? A.hasClass(a) || A.addClass(a) : A.removeClass(a)
            }
            function o(a) {
                var b = w.current,
                    c = C.eq(b),
                    d = C.eq(b - 1),
                    e = r();
                b && d.css({
                    marginBottom: f
                }), B.animate({
                    height: e
                }, E, "swing", function() {
                    c.show(), "function" == typeof a && a()
                })
            }
            function p() {
                var a;
                x.css({
                    zIndex: 5400
                }), D.fadeOut(200), y.css({
                    display: "block"
                }), o(), a = r(), B.animate({
                    width: e,
                    height: a
                }, E, "swing")
            }
            function q() {
                B.animate({
                    width: 0,
                    height: 0
                }, E, "swing", function() {
                    C.attr("style", "").hide(), y.css({
                        display: "none"
                    }), t(), D.fadeIn(200), x.css({
                        zIndex: 100
                    })
                })
            }
            function r() {
                var a, b = 0,
                    c = w.current;
                for (a = 0; c + 1 > a; a++) b += C.eq(a).outerHeight(), a ? (b += f, !1) : (b += g, !1);
                return b
            }
            function s() {
                function a() {
                    var a, b;
                    a = document.innerWidth, b = document.innerHeight, v.width(a).height(b)
                }
                var b = '<div id="' + d + '"></div>',
                    e = c("body");
                e.append(b), v = c("#" + d), a()
            }
            function t() {
                c("#" + d).fadeOut(200).remove()
            }
            function u() {
                var a, b = c("html, body"),
                    d = x.height(),
                    e = x.offset().top,
                    f = window.innerHeight,
                    g = 800;
                a = e + d - f, a += 20, b.animate({
                    scrollTop: a
                }, g)
            }
            var v, w = this,
                x = c(a),
                y = c("#" + b),
                z = y.find(".close"),
                A = y.find(".next"),
                B = y.find(".modal-content-body"),
                C = B.find(".page"),
                D = x.find(".balloon"),
                E = 150,
                F = 0;
            this.init = function() {
                w.current = 0, w.id = b, w.current = 0, w.pageLength = C.length, i(), B.css({
                    width: 0,
                    height: 0,
                    paddingBottom: 0
                }), C.hide()
            }, this.open = function() {
                s(), j(), k(), n(), p(), u()
            }, this.close = function() {
                w.current = 0, l(), i(), q()
            }, this.move = function(a) {
                return w.current === a ? this : 0 > a || a > w.pageLength - 1 ? this : F ? this : (w.current = a, m(C.eq(a)), this)
            }, this.prev = function() {
                var a = w.current - 1;
                w.move(a)
            }, this.next = function() {
                var a = w.current + 1;
                w.move(a)
            }
        };
    a.kayac.view.Modal = h
}(this, this.kayac.utils.namespace, jQuery),

function(a, b, c) {
    "use strict";
    b("kayac.view");
    var d = kayac.event.EventDispatcher,
        e = kayac.event.ScrollEvent,
        f = "mouseenter.QuietMenu",
        g = "mouseleave.QuietMenu",
        h = 250,
        i = function() {
            d.apply(this), window.fetchEffectState = kayac.util.fetchEffectState;
            var a = c(document),
                b = c("body"),
                i = c("#SiteHeader"),
                j = c("#SiteFooter"),
                k = "scroll.headerWatcher",
                l = e.TOP + ".header";
            this.destroy = function() {
                i.off(f).off(g), j.off(f).off(g)
            }, this.init = function() {
                function d(c) {
                    c === !0 ? (b.addClass("effect"), a.on(k, e).on(l, function(a) {
                        e(a, !0)
                    }), e(null, !0)) : (b.removeClass("effect"), a.off(k).off(l)), kayac.globalEffect = c, n.attr("checked", c), m.attr("class", c ? "effect on" : "effect mute"), !1
                }
                function e(b, c) {
                    r = q(), (c === !0 || kayac.globalEffect && r - s > h) && (t = a.scrollTop(), p = !i.hasClass("quiet"), o > t && p === !1 ? i.attr("class", "effect") : t > o && p === !0 && i.attr("class", "effect quiet"), s = r)
                }
                var m = c(".site-header-content .effect"),
                    n = c("input", m),
                    o = i.height();
                n.on("change", function(a) {
                    var b = !fetchEffectState();
                    d(b), fetchEffectState(b)
                });
                var p, q = Date.now,
                    r = q(),
                    s = 0,
                    t = 0,
                    u = fetchEffectState();
                void 0 === u && (u = !0), fetchEffectState(u), d(u), m.show(), i.on(f, function() {
                    i.attr("class", "effect")
                }).on(g, function() {
                    a.scrollTop() > o && i.attr("class", "effect quiet")
                }), j.on(f, function() {
                    j.addClass("effect active")
                }).on(g, function() {
                    j.removeClass("active show-project")
                }), c(".button-kayac-projects", j).on("click", function() {
                    return j.toggleClass("show-project"), !1
                })
            }
        };
    a.kayac.view.QuietMenu = i
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view");
    var d = '<div class="loader-label {TYPE} hide"><img class="icon" src="../images/common/loading.gif" alt=""><span class="title" /></div>',
        e = "ja" === kayac.lang ? "つづきをよむ" : "Read more",
        f = '<div class="read-more"><a href="URL" class="label">' + e + '</a><img class="icon" src="../images/common/loading.gif" alt=""></div>',
        g = function() {
            function a(a, b, c, d, e) {
                a.addClass("show").removeClass("hide"), b.text(""), c.show().stop(!0, !0).animate({
                    width: 45 * (d / e)
                }, 300, function() {
                    c.stop(!0, !0).animate({
                        width: 0
                    }, 200, function() {
                        a.removeClass("show").addClass("hide")
                    })
                })
            }
            function b(a, b, c, d) {
                b.hide().text(d), a.addClass("show").removeClass("hide"), c.show().css({
                    width: 0,
                    left: 0
                }).stop(!0, !0).animate({
                    width: 45
                }, 300).delay(250).animate({
                    left: -b.width() / 2
                }, 350, function() {
                    c.css({
                        left: 0
                    }), b.show()
                })
            }
            function e(a, b, c) {
                c.fadeOut(400), b.fadeOut(400, function() {
                    b.text(""), a.removeClass("show")
                })
            }
            var g = c(d.replace("{TYPE}", "prev")),
                h = g.find(".icon"),
                i = g.find(".title");
            g.on("webkitTransitionEnd transitionend", function(a) {
                g.hasClass("show") === !1 && g.addClass("hide")
            });
            var j = c(d.replace("{TYPE}", "next")),
                k = j.find(".icon"),
                l = j.find(".title");
            j.on("webkitTransitionEnd transitionend", function(a) {
                j.hasClass("show") === !1 && j.addClass("hide")
            }), this.$prevPage = g, this.$nextPage = j, this.showPrevPage = function(b, c) {
                a(g, i, h, b, c)
            }, this.showNextPage = function(b, c) {
                a(j, l, k, b, c)
            }, this.startPrevPage = function(a) {
                b(g, i, h, a)
            }, this.startNextPage = function(a) {
                b(j, l, k, a)
            }, this.hidePrevPage = function() {
                e(g, i, h)
            }, this.hideNextPage = function() {
                e(j, l, k)
            }, this.newReadMore = function(a) {
                return c(f.replace("URL", a))
            }
        };
    a.kayac.view.LoadingIcon = g
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view");
    var d = kayac.event.EventDispatcher,
        e = "scroll.ScrollListAction",
        f = ".scroll-item",
        g = "show",
        h = "showed",
        i = 1e3 / 15,
        j = 50,
        k = function(a, b, k) {
            d.apply(this);
            var l = c(document),
                m = c(window),
                n = this,
                o = b || f,
                p = k || g,
                q = c(".article-summary");
            this.downMargin = -150, this.upMargin = 100, this.init = function() {
                n.updateTarget(), q = c(".news-item"), c(".dynamic-list").on(kayac.event.Event.ADDED_TO_DOCUMENT, function(a) {
                    n.updateTarget(), q = c(".news-item")
                });
                var a = 0,
                    b = 0,
                    d = 0;
                l.on(e, c.proxy(function(c) {
                    b = l.scrollTop(), a = b + m.height(), b > d && this.frameAddClass(a - this.downMargin, q), d = b
                }, this))
            }, this.updateTarget = function() {
                c(".news-item:not(.scroll-item-inited)").eq(0).addClass("scroll-item-inited"), c(".news-item:not(.scroll-item-inited)").addClass("scroll-item-inited").find(".article-summary-content-wrapper").addClass("scroll-item").end().find(".eye-catch-wrapper").addClass("scroll-item").end()
            }, this.destroy = function() {
                l.off(e)
            }, this.frameAddClass = function(a, b) {
                var c = [];
                if (b.each(function(d) {
                    var e = b.eq(d),
                        f = e.offset().top + e.outerHeight();
                    e.data(h) !== !0 && a > f && (e.data(h, !0), c.push(e))
                }), 0 === c.length) return !1;
                var d, e = 0,
                    f = c.length;
                d = setInterval(function() {
                    var a = c[e].find(o),
                        b = 0,
                        g = a.length,
                        h = setInterval(function() {
                            a.eq(b).addClass(p), g <= ++b && clearInterval(h)
                        }, i);
                    f <= ++e && clearInterval(d)
                }, j)
            }, this.removeAddClass = function(a, b) {
                var c = [];
                if (b.each(function(d) {
                    var e = b.eq(d),
                        f = e.offset().top + e.outerHeight();
                    e.data(h) === !0 && f > a && (e.data(h, !1), c.push(e))
                }), 0 === c.length) return !1;
                c.reverse();
                var d, e = 0,
                    f = c.length;
                d = setInterval(function() {
                    var a = c[e].find(o),
                        b = a.length,
                        g = setInterval(function() {
                            a.eq(b).removeClass(p), --b < 0 && clearInterval(g)
                        }, i);
                    f <= ++e && clearInterval(d)
                }, j)
            }
        };
    a.kayac.view.ScrollListAction = k
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view");
    var d = "";
    kayac.view.ScrollAnimation = function() {
        var a = [],
            b = function(b) {
                var d, g, h, i = window.scrollY || window.pageYOffset,
                    j = (window.scrollY || window.pageYOffset) + window.innerHeight,
                    k = function(a) {
                        d = a.elem.offset().top + a.delay, g = "bottom" === a.baseline ? j : i + a.duration, a.duration < g - d ? a._stopped || (setTimeout(function() {
                            f(a.attr, a.end, a.elem)
                        }, 0), a._stopped = !0) : d > g ? a._stopped || (setTimeout(function() {
                            f(a.attr, a.start, a.elem)
                        }, 0), a._stopped = !0) : (h = (g - d) / a.duration, a._stopped = !1, f(a.attr, a.start + (a.end - a.start) * e[a.easing](h), a.elem))
                    };
                if (c("body").hasClass("effect")) for (var l = 0; l < a.length; l++) k(a[l])
            }, f = function(a, b, c) {
                "string" == typeof a ? ("translateX" === a || "translateY" === a ? (a = d + "transform", b = a + "(" + b + "px)") : "scale" === a ? (a = d + "transform", b = a + "(" + b + ")") : ("rotate" === a || "skew" === a) && (a = d + "transform", b = a + "(" + b + "deg)"), c.css(a, b)) : a instanceof window.Function && a.call(c, b)
            };
        this.init = function() {
            d = kayac.browser.prefix, c(window).bind("scroll", b)
        }, this.add = function(b, d) {
            var e = {
                elem: "string" == typeof b ? c(b) : b,
                delay: d.delay || 0,
                duration: d.duration || 100,
                easing: d.easing || "linear",
                attr: d.attr || "",
                start: d.start || 0,
                end: d.end || 0,
                baseline: d.baseline || "bottom"
            };
            a.push(e)
        }
    };
    var e = {
        linear: function(a) {
            return a
        },
        "<": function(a) {
            return Math.pow(a, 1.7)
        },
        ">": function(a) {
            return Math.pow(a, .48)
        },
        "<>": function(a) {
            var b = .48 - a / 1.04,
                c = Math.sqrt(.1734 + b * b),
                d = c - b,
                e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                f = -c - b,
                g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function(a) {
            return a == !! a ? a : Math.pow(2, - 10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
        },
        bounce: function(a) {
            var b, c = 7.5625,
                d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }
    };
    e.easeIn = e["ease-in"] = e["<"], e.easeOut = e["ease-out"] = e[">"], e.easeInOut = e["ease-in-out"] = e["<>"], e["back-in"] = e.backIn, e["back-out"] = e.backOut
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c, d) {
    "use strict";
    b("kayac.view");
    var e = function(a, b) {
        var c = new d(a, 240, 240),
            e = 2e3,
            f = "pattern-dot-text",
            g = function() {
                var a, b, d = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="80" class="index-title-svg"><defs><pattern patternUnits="userSpaceOnUse" id="pattern-dot-text" width="8" height="4"><rect width="2" height="2" fill="black"/><rect x="4" y="2" width="2" height="2" fill="black"/></pattern></defs></svg>';
                a = document.createElement("div"), a.innerHTML = d, b = a.getElementsByTagName("pattern")[0], c.canvas.getElementsByTagName("defs")[0].appendChild(b)
            }, h = function() {
                c.circle(120, 120, 120).attr({
                    fill: "black"
                }), c.circle(120, 120, 116).attr({
                    fill: "white"
                }), c.circle(120, 120, 80).attr({
                    fill: "black"
                }), c.circle(120, 120, 76).attr({
                    fill: "white"
                }), g()
            }, i = function() {
                var a = c.path("M120,4A116,116,0,1,1,119.99,4ZM120,40A80,80,0,1,0,120.01,40Z");
                a.node.setAttribute("fill", "url(#" + f + ")")
            }, j = function(a, b, d) {
                var f = c.path().attr({
                    arc: [0, b],
                    stroke: d
                });
                f.animate({
                    arc: [a, b]
                }, e, "bounce")
            };
        this.init = function() {
            c.customAttributes.arc = function(a, b) {
                var c, d, e, f = 98,
                    g = a / b * 2 * Math.PI;
                return a / b >= 1 ? {
                    path: [
                        ["M", 120, 22],
                        ["A", 98, 98, 0, 1, 1, 119.99, 22]
                    ]
                } : (c = 120 + Math.sin(g) * f, d = 120 - Math.cos(g) * f, e = [
                    ["M", 120, 22],
                    ["A", 98, 98, 0, (a / b > .5) - 0, 1, c, d]
                ], {
                    path: e,
                    "stroke-width": 36
                })
            }, h(), i()
        }, this.animate = function() {
            var a, c, d, e = b.length;
            for (a = c = function() {
                var a = 0;
                for (d = 0; e > d; d++) a += b[d].value;
                return a
            }.call(this), d = e; d--;) j(a, c, b[d].color), a -= b[d].value;
            i()
        }
    };
    a.kayac.view.DonutGrapher = e
}(this, this.kayac.utils.namespace, jQuery, Raphael),
function(a, b, c) {
    "use strict";

    function d(a) {
        var b, d, e, f = c(a);
        return f.length ? (b = f.innerWidth(), d = f.css("marginLeft"), e = f.css("marginRight"), d = d.split("px")[0] >> 0, e = e.split("px")[0] >> 0, b = b + d + e) : !1
    }
    b("kayac.view");
    var e = a.kayac.net.CarouselLoader,
        f = "controller",
        g = "prev",
        h = "next",
        i = "viewer";
    kayac.view.Carousel = function(a, b, j, k) {
        function l(a, b) {
            function c() {
                g ? (f = d(y.eq(z - 1)), z = z ? z - 1 : 0) : (f = -d(y.eq(z + 1)), z += 1)
            }
            function e() {
                A += f, G.animate({
                    marginLeft: A
                }, B.duration, function() {
                    B.length < B.stackLength || m(g), "function" == typeof b && b()
                })
            }
            var f, g = a ? 1 : 0;
            B.length < B.stackLength ? n(g, function() {
                x(), g && m(g), s(y.eq(g ? 0 : -1)), c(), e()
            }) : (c(), e())
        }
        function m(a) {
            var b, c, e, f = a ? 1 : 0;
            f ? (c = y.eq(-1), b = c.clone(), e = d(c), c.remove(), G.prepend(b)) : (c = y.eq(0), b = c.clone(), e = d(c), c.remove(), G.append(b)), s(b), y = G.find("li"), A = G.css("margin-left").split("px")[0] << 0, f ? (A -= e, z += 1) : (A += e, z = z ? z - 1 : 0), G.css({
                marginLeft: A
            })
        }
        function n(a, b) {
            var c, d, e = a ? 1 : 0;
            return B.stackLength ? (d = e ? B.itemList[--B.stackLength] : B.itemList[B.length++], c = o(d), G.append(c), y = G.find("li"), void("function" == typeof b && y.eq(-1).find("img").on("load", function() {
                b()
            }))) : !1
        }
        function o(a) {
            var b;
            return a && "object" == typeof a ? (b = "<li>", a.url && (b += '<a href="' + a.url + '" title="' + a.name + '">'), b += '<img src="' + a.img_url + '" alt="' + a.name + '" height="' + B.height + '" oncontextmenu="return false;">', a.url && (b += "</a>"), b += "</li>") : !1
        }
        function p() {
            B.reverse ? B.prev() : B.next(), B.timer = setTimeout(p, B.delay)
        }
        function q(a) {
            var b = 400;
            return B.zoom ? void M.fadeOut(b, function() {
                M.attr("src", a).fadeIn(b)
            }) : !1
        }
        function r() {
            H.show(), I.length && I.on("click.prev", function() {
                B.loop && clearTimeout(B.timer), B.reverse = !0, B.prev(), B.loop && p()
            }), J.length && J.on("click.next", function() {
                B.loop && clearTimeout(B.timer), B.reverse = !1, B.next(), B.loop && p()
            })
        }
        function s(a) {
            var b = c(a);
            b.on("click", function(a) {
                var b = c(a.target),
                    d = b.is("img") ? b : b.find("img"),
                    e = d.attr("src");
                q(e)
            })
        }
        function t() {
            var a;
            H.length || (a = '<div class="' + f + '"><div class="' + h + '"></div><div class="' + g + '"></div></div>', H = c(a).appendTo(F), I = H.find(".prev"), J = H.find(".next"))
        }
        function u() {
            var a;
            L.length || (a = '<div class="' + i + '" id="' + K + '"><img class="pict"></div>', L = c(a).appendTo(F.parent()), M = L.find(".pict"))
        }
        function v() {
            I.off("click.prev"), J.off("click.next"), H.hide()
        }
        function w() {
            var a = F.width(),
                b = G.innerWidth();
            return a > b ? !1 : !0
        }
        function x(a) {
            var b, c;
            b = a ? 0 : -1, c = d(y.eq(b)), B.totalWidth += c, G.css({
                width: B.totalWidth
            })
        }
        var y, z, A, B = this,
            C = 3e3,
            D = 800,
            E = k || {}, F = c(a),
            G = F.find(b),
            H = F.find(j),
            I = H.find(".prev"),
            J = H.find(".next"),
            K = F.attr("data-id"),
            L = c("#" + K),
            M = L.find(".pict");
        this.init = function() {
            function a() {
                B.zoom && (u(), s(y), q(y.eq(0).find("img").attr("src")))
            }
            function b() {
                G.css({
                    marginLeft: B.distance
                }), t(), r(), B.loop && (B.timer = setTimeout(p, B.delay))
            }
            function c() {
                for (g = B.length; g > l; l++) B.totalWidth += d(y.eq(l));
                G.css({
                    width: B.totalWidth
                })
            }
            function f() {
                n(!1, function() {
                    x(), s(y.eq(-1)), !w() && B.length < B.stackLength && f()
                })
            }
            var g, h, i, j, k, l = 0;
            y = G.find("li"), h = d(y.eq(0)), B.length = y.length, B.totalWidth = 0, B.distance = E.noshift ? 0 : -(B.width / 3) << 0, B.loop = E.loop ? 1 : 0, B.zoom = E.zoom ? 1 : 0, B.height = E.height ? E.height : 0, B.delay = E.delay ? E.delay : C, B.duration = E.duration ? E.duration : D, B.reverse = !1, j = E.json ? E.json : null, k = E.listtype ? E.listtype : 0, z = 0, A = B.distance, j && B.length > 4 ? (i = new e(j, k, function() {
                B.itemList = i.list, B.stackLength = B.itemList.length, c(), a(), !w() && B.length < B.stackLength && f(), (w() || B.length < B.stackLength) && (B.length < B.stackLength && f(), b())
            }), i.load()) : (B.stackLength = 0, c(), a(), w() ? b() : v())
        }, this.moveflg = !1, this.prev = function() {
            var a = this;
            a.moveflg || (a.moveflg = !0, l(!0, function() {
                a.moveflg = !1
            }))
        }, this.next = function() {
            var a = this;
            a.moveflg || (a.moveflg = !0, l(void 0, function() {
                a.moveflg = !1
            }))
        }, this.destroy = function() {
            clearTimeout(B.timer), v()
        }
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view");
    var d = new kayac.view.ScrollAnimation,
        e = function() {
            var a = function(a) {
                var b = c(a.target),
                    e = c(".onoma-1, .onoma-2, .onoma-3, .onoma-4, .onoma-5, .onoma-6, .onoma-7, .onoma-8, .onoma-9, .onoma-10, .onoma-11, .onoma-12, .onoma-pachi, .onoma-doki, .onoma-kya, .onoma-ga, .onoma-goo, .onoma-dodo, .onoma-don, .onoma-buru, .onoma-siku, .onoma-pi, .onoma-aha, .onoma-wa", b);
                e.each(function(a) {
                    var b = c(this);
                    d.add(b, {
                        delay: 100,
                        duration: 1200,
                        attr: function(a) {
                            0 >= a || a >= 1 ? b.removeClass("animate") : b.hasClass("animate") || b.addClass("animate")
                        },
                        start: 0,
                        end: 1
                    })
                })
            };
            this.init = function() {
                d.init(), c(document).on("addedToDocument", "article", a)
            }, this.init()
        };
    a.kayac.view.Onoma = e
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view");
    var d = "mousewheel.thumb",
        e = "lightbox",
        f = "view",
        g = "image",
        h = "next",
        i = "prev",
        j = "close",
        k = function(a, b) {
            function k() {
                B.on("click", C.close), z.on("click", C.next), A.on("click", C.prev)
            }
            function l() {
                C.current === C.itemLength - 1 ? z.hide() : z.show(), 0 === C.current ? A.hide() : A.show()
            }
            function m(a) {
                var b = c(a),
                    d = b.find("img").attr("src"),
                    e = new Image;
                e.src = d, e.onload = function() {
                    var a = e.width,
                        c = e.height;
                    c > a ? (w.removeClass("horizontal"), w.hasClass("vertical") || w.addClass("vertical")) : (w.removeClass("vertical"), w.hasClass("horizontal") || w.addClass("horizontal")), u.addClass("non-active"), b.removeClass("non-active"), n(d)
                }
            }
            function n(a) {
                y.attr("src", a).fadeIn(D, function() {
                    s()
                })
            }
            function o(a) {
                y.fadeOut(D, function() {
                    "function" == typeof a && a()
                })
            }
            function p() {
                var a;
                w.length || (a = '<div class="' + e + '"><div class="' + f + '"><img class="' + g + '"></div><div class="' + h + '"></div><div class="' + i + '"></div><div class="' + j + '"></div></div>', w = c(a).appendTo(v), x = w.find("." + f), y = w.find("." + g), z = w.find("." + h), A = w.find("." + i), B = w.find("." + j), y.on("contextmenu", function(a) {
                    return a.preventDefault(), !1
                }), k())
            }
            function q() {
                w.length ? (w.fadeIn(D), B.fadeIn(D)) : (p(), w.fadeIn(D), B.fadeIn(D))
            }
            function r() {
                u.removeClass("non-active"), w.length && (B.fadeOut(D), w.fadeOut(D))
            }
            function s() {
                var a = x.offset().top,
                    b = (x.innerHeight(), c(document).scrollTop());
                a -= 50, b - a > 0 && (c("body, html").animate({
                    scrollTop: a
                }, 300, "swing"), c(document).on(d, function() {
                    c("body,html").stop(), c(document).off(d)
                }))
            }
            var t = c(a),
                u = t.find("li"),
                v = t.parents(".project-header"),
                w = v.find("." + e),
                x = w.find("." + f),
                y = w.find("." + g),
                z = w.find("." + h),
                A = w.find("." + i),
                B = w.find("." + j),
                C = this,
                D = 400,
                E = 0;
            C.current = null, this.init = function() {
                C.itemLength = u.length, v.hasClass("no-visual") ? C.noFlg = !0 : v = v.find(".project-visual"), p()
            }, this.open = function(a) {
                C.noFlg && v.addClass("opened"), q(), this.move(a)
            }, this.close = function() {
                r(), C.noFlg && v.removeClass("opened"), C.current = null
            }, this.move = function(a) {
                return C.current === a ? this : 0 > a || a > C.itemLength - 1 ? this : E ? this : (C.current = a, l(), o(function() {
                    m(u.eq(a))
                }), this)
            }, this.prev = function() {
                var a = C.current - 1;
                C.move(a)
            }, this.next = function() {
                var a = C.current + 1;
                C.move(a)
            }
        };
    a.kayac.view.ThumbView = k
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view");
    var d = a.kayac.net.AdLoader,
        e = function(a) {
            function b(a, b) {
                h = new d(a), h.load().then(function() {
                    "function" == typeof b && b()
                }, function() {})
            }
            function e(a) {
                return 1 === a ? j : 0 === a ? k : j
            }
            function f(a, b) {
                var c, d;
                return "object" == typeof b && "img" in b ? ("klass" in b && (a = a + " " + b.klass), d = "url" in b, c = '<li class="ad-cell">', d && (c += '<a href="' + b.url + '" target="_blank">'), c += '<div class="' + a + '"><img src="' + b.img + '" alt="' + b.alt + '"></div>', d && (c += "</a>"), c += "</li>") : !1
            }
            function g(a, b) {
                var d = c(a);
                d.after(b)
            }
            var h, i = this,
                j = "ad-copy",
                k = "ad-banner",
                l = {};
            i.len = {}, i.counter = {}, this.init = function(c) {
                i.counter[j] = 0, i.counter[k] = 0, i.seed = 0, b(a, function() {
                    l[k] = h.adList.banner, l[j] = h.adList.copy, i.len[j] = l[j].length, i.len[k] = l[k].length, "function" == typeof c && c()
                })
            }, this.append = function(a) {
                var b, c, d, h;
                d = e(i.seed), c = i.counter[d], h = l[d][c], b = f(d, h), g(a, b), ++c < i.len[d] ? i.counter[d] = c : i.counter[d] = 0
            }
        };
    a.kayac.view.GridAdvertise = e
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";

    function d(a, b, c) {
        return a.length >= 1 ? a.data("requestData") : b.attr("href") ? e(b, c) : f(c)
    }
    function e(a, b) {
        var c = a.attr("href").replace(/\/$/, ""),
            d = c.split("?"),
            e = c + ".content";
        return d.length >= 2 && (e = d[0] + ".content?" + d[1]), new h(h.CONTENT, c, e, b, a.find(".nav-info-ttl").text())
    }
    function f(a) {
        return new h(h.NULL, "", "", a, "")
    }
    b("kayac.view.pager");
    var g = (kayac.util.urlCanonical, kayac.event.EventDispatcher),
        h = kayac.net.RequestData,
        i = function() {
            g.apply(this), this.prevRequest = new h, this.nextRequest = new h, this.getPrevRequest = function(a) {
                var b = [],
                    e = c(".vertical-toolbar .toolbar-prev:not(.non-active) a", a);
                return this.prevRequest = d(b, e, h.PREV), this.prevRequest
            }, this.getNextRequest = function(a) {
                var b = c(".read-more", a),
                    e = c(".vertical-toolbar .toolbar-next:not(.non-active) a", a);
                return this.nextRequest = d(b, e, h.NEXT), this.nextRequest
            }
        };
    a.kayac.view.pager.LinearRequest = i
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view.pager");
    var d = kayac.view.pager.LinearRequest,
        e = kayac.net.PageLoader,
        f = kayac.net.RequestData,
        g = "page-content",
        h = "linear-content",
        i = 400,
        j = 1400,
        k = function(a) {
            d.apply(this, [a]);
            var b = this,
                l = new e,
                m = new e;
            l.addEventListener(e.SUCCESS, function(a) {
                var d, e = a.data,
                    h = e.content,
                    i = e.request,
                    j = c(document.createElement("div"));
                switch (h && "error" !== h ? (j = c(h), j.eq(0).addClass(g).data("pageData", i)) : !1, i.dir) {
                    case f.PREV:
                        d = k.PREV_LIST_COMPLETE;
                        break;
                    case f.NEXT:
                        d = k.NEXT_LIST_COMPLETE
                }
                setTimeout(function() {
                    i.status = f.UNLOAD, b.dispatchEvent(d, {
                        content: j,
                        request: i
                    })
                }, 200)
            }), m.addEventListener(e.SUCCESS, function(a) {
                var d, e = a.data,
                    g = e.content,
                    i = e.request,
                    j = c(g.replace('<main id="MainContents"', "<div").replace("</main>", "</div>"));
                switch (g && "error" !== g ? j.addClass(h).data("pageData", i) : !1, i.dir) {
                    case f.PREV:
                        d = k.PREV_PAGE_COMPLETE;
                        break;
                    case f.NEXT:
                        d = k.NEXT_PAGE_COMPLETE
                }
                setTimeout(function() {
                    i.status = f.UNLOAD, b.dispatchEvent(d, {
                        content: j,
                        request: i
                    })
                }, 850)
            }), this.listLoad = function(a) {
                var c, d = setTimeout(function() {
                    l.load(a)
                }, i);
                switch (a.dir) {
                    case f.PREV:
                        c = k.PREV_LIST_START;
                        break;
                    case f.NEXT:
                        c = k.NEXT_LIST_START
                }
                a.abort = function() {
                    l.abort(), clearTimeout(d), d = null, a.status = f.UNLOAD, !1
                }, a.status = f.ONLOAD, b.dispatchEvent(c, {
                    request: a
                })
            }, this.pageLoad = function(a) {
                var c, d = setTimeout(function() {
                    m.load(a)
                }, i);
                switch (a.dir) {
                    case f.PREV:
                        c = k.PREV_PAGE_START;
                        break;
                    case f.NEXT:
                        c = k.NEXT_PAGE_START
                }
                a.abort = function() {
                    l.abort(), clearTimeout(d), d = null, a.status = f.UNLOAD, !1
                }, a.status = f.ONLOAD, b.dispatchEvent(c, a)
            }, this.pageLink = function(a) {
                var c, d = setTimeout(function() {
                    document.location.href = a.url
                }, j);
                switch (a.dir) {
                    case f.PREV:
                        c = k.PREV_PAGE_START;
                        break;
                    case f.NEXT:
                        c = k.NEXT_PAGE_START
                }
                a.abort = function() {
                    clearTimeout(d), d = null, a.status = f.UNLOAD, !1
                }, a.status = f.ONLOAD, b.dispatchEvent(c, a)
            }
        };
    k.NEXT_PAGE_START = "next_page_start", k.NEXT_PAGE_COMPLETE = "next_page_complete", k.NEXT_LIST_START = "next_list_start", k.NEXT_LIST_COMPLETE = "next_list_complete", k.PREV_PAGE_START = "prev_page_start", k.PREV_PAGE_COMPLETE = "prev_page_complete", k.PREV_LIST_START = "prev_list_start", k.PREV_LIST_COMPLETE = "prev_list_complete", a.kayac.view.pager.LinearLoader = k
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view.pager");
    var d = kayac.util.pushState,
        e = kayac.event.Event,
        f = kayac.event.ScrollEvent,
        g = kayac.event.StrideEvent,
        h = kayac.event.StrideEventDispatcher,
        i = kayac.view.pager.LinearLoader,
        j = kayac.view.LoadingIcon,
        k = kayac.net.RequestData,
        l = kayac.net.ShareButtonLoader,
        m = "easeInCubic",
        n = "mousewheel.cancel",
        o = 100,
        p = 250,
        q = "linear-content",
        r = function(a, b) {
            function r(a, b) {
                var e = c(b).data("pageData");
                e && (d(e.url), document.title = e.title + "｜面白法人カヤック", c(".vertical-toolbar:visible", D).hide(), c(".vertical-toolbar", b).show(), ga("send", "pageview", e.url)), t = c(b)
            }
            function s(a, b, d) {
                a.css({
                    top: b
                }).delay(200).animate({
                    top: 0
                }, 400, m, function() {
                    C.off("mousewheel.cancel"), u.completePager(), w.$target = c("." + q)
                }), C.scrollTop(d), setTimeout(function() {
                    x.load(a)
                }, 600), a.trigger(e.ADDED_TO_DOCUMENT), a.find("article").trigger(e.ADDED_TO_DOCUMENT)
            }
            i.apply(this, [a, b]);
            var t, u = this,
                v = new j,
                w = new h(140, a),
                x = new l,
                y = parseInt(a.css("top")),
                z = o + y,
                A = -o + y,
                B = c("html, body"),
                C = c(document),
                D = a;
            this.requestStart = function(a) {
                switch (a.type) {
                    case k.LIST:
                        this.listLoad(a);
                        break;
                    case k.CONTENT:
                        this.pageLoad(a);
                        break;
                    case k.LINK:
                        this.pageLink(a)
                }
            }, this.pullHandler = function(a) {
                if (this.prevRequest.status === k.UNLOAD && kayac.globalEffect === !0) {
                    var b = this.getPrevRequest(c(".linear-content:first"));
                    this.requestStart(b)
                }
            }, this.raiseHandler = function(a) {
                if (this.nextRequest.status === k.UNLOAD && kayac.globalEffect === !0) {
                    var b = this.getNextRequest(c(".linear-content:last"));
                    this.requestStart(b)
                }
            }, this.onLoadPage = function(a) {
                var b, c, d, e = a.data;
                e.dir === k.PREV ? (b = f.DOWN, c = z, d = v.startPrevPage) : (b = f.UP, c = A, d = v.startNextPage), setTimeout(function() {
                    d(e.title)
                }, 200), D.stop(!0, !0).animate({
                    top: c
                }, 400, m, function() {
                    C.off(b).one(b, function() {
                        u.requestCancel(e)
                    })
                })
            }, this.onCompletePage = function(a) {
                var b, c = a.data.content,
                    d = c.data("pageData");
                c.find(".dynamic-list").length >= 1 && u.addMoreButton(c), C.off(f.DOWN).off(f.UP), c && (C.on(n, function() {
                    return !1
                }), d.dir === k.PREV && (v.hidePrevPage(), setTimeout(function() {
                    D.css({
                        top: y
                    }).prepend(c), b = c.outerHeight() - 30, s(c, - 300, b)
                }, p)), d.dir === k.NEXT && (v.hideNextPage(), setTimeout(function() {
                    D.css({
                        top: y
                    }).append(c), b = C.scrollTop() + o, s(c, 300, b)
                }, p)))
            }, this.startNextList = function(a) {
                a.data.request.$button && a.data.request.$button.addClass("loading")
            }, this.completeNextList = function(a) {
                a.data.request.$button && a.data.request.$button.remove(), c(".dynamic-list", t).append(a.data.content).trigger(e.ADDED_TO_DOCUMENT), this.addMoreButton(t), this.completePager();
            }, this.completePager = function() {
                C.trigger("scroll"), C.off(f.PULL_DOWN).off(f.RAISE_UP).one(f.PULL_DOWN, c.proxy(this.pullHandler, this)).one(f.RAISE_UP, c.proxy(this.raiseHandler, this)), !1
            }, this.requestCancel = function(a) {
                var b;
                b = a.dir === k.PREV ? v.hidePrevPage : v.hideNextPage, a.abort(), b(), D.stop(!0, !0).animate({
                    top: y
                }, 400, m), this.completePager()
            }, this.addMoreButton = function(a) {
                var b, d, e, f = c(".page-nav .next", a),
                    g = f.attr("href");
                void 0 !== g && (d = g.replace("?", ".content?") + "&list=1", e = new k(k.LIST, g, d, k.NEXT, ""), b = v.newReadMore(g), c(".dynamic-list", a).after(b), e.$button = b, b.data("requestData", e), b.one("click", function(a) {
                    return u.nextRequest.status === k.UNLOAD && u.listLoad(e), !1
                })), c(".page-nav", a).remove()
            }, this.init = function() {
                C.one(f.PULL_DOWN, c.proxy(this.pullHandler, this)), C.one(f.RAISE_UP, c.proxy(this.raiseHandler, this)), C.on("mousewheel", function(a) {
                    B.stop(!0, !0)
                }), this.addEventListener(i.NEXT_LIST_START, c.proxy(this.startNextList, this)), this.addEventListener(i.NEXT_LIST_COMPLETE, c.proxy(this.completeNextList, this)), this.addEventListener(i.NEXT_PAGE_START, c.proxy(this.onLoadPage, this)), this.addEventListener(i.NEXT_PAGE_COMPLETE, c.proxy(this.onCompletePage, this)), this.addEventListener(i.PREV_PAGE_START, c.proxy(this.onLoadPage, this)), this.addEventListener(i.PREV_PAGE_COMPLETE, c.proxy(this.onCompletePage, this));
                var a = new k("", document.location.href, "", k.START, document.title),
                    b = c(document.createElement("div")).addClass(D.attr("class") + " " + q).data("pageData", a).append(D.children());
                D.removeAttr("class").empty().append(b), t = b, C.on(g.CROSS, r), D.after(v.$prevPage), D.after(v.$nextPage), this.addMoreButton(D)
            }, this.destroy = function() {
                w.destroy(), C.off(g.CROSS).off(f.PULL).off(f.RAISE).off(f.DOWN).off(f.UP)
            }
        };
    a.kayac.view.pager.LinearPager = r
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.view.pager");
    var d = function(a, b) {
        kayac.view.pager.LinearPager.apply(this, [a, b]), this.pullHandler = c.noop
    };
    a.kayac.view.pager.LinearPagerTop = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.page");
    var d = kayac.event.EventDispatcher,
        e = function(a) {
            d.apply(this), this.currentURL = kayac.util.currentName(), this.$content = a, this.linearLoader = function() {
                new kayac.view.pager.LinearPager(a, c(".dynamic-list", a)).init()
            }
        };
    a.kayac.page.Page = e
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.page");
    var d = new kayac.svg.FlexBoxDrawer;
    kayac.page.Page.prototype.flexBoxDrawer = function() {
        c(".flex-box-drawer").html(d.drawBox({
            maximum: a.prompt("Maximum length?", 1e3),
            strokeWidth: a.prompt("Stroke-width?", 10),
            angle: a.prompt("Angle? 0 ~ 180", 90),
            patternID: a.prompt("Which pattern?", "pattern-fat-comic-line"),
            verticalReverse: !a.confirm("No VReversed?"),
            horizontalReverse: !a.confirm("No HReversed?")
        }))
    }
}(this, this.kayac.utils.namespace, jQuery),

function(a, b, c) {  
    "use strict";
    b("kayac.page");
    var d = kayac.view.ScrollListAction,
        e = ["oar p1", "oar p2", "oar p3", "oar p4", "oar p5", "oar p6", "oar p7", "oar p8", "oar p9", "oar p10", "oar p11", "oar p12", "oar p13", "oar p14", "oar p15", "oar p16", "oar p17", "oar p18", "oar p19", "oar p20", "oar p21", "oar p22"];
    console.log("どんst");
    console.log(kayac.page.Page);
    kayac.page.Page.prototype.top = function() {
        console.log("111");
        function a() {
            function a() {
                console.log("112");
                b(), l.fadeOut(600, function() {
                    l && l.remove(), l = null, j.show()
                }), g.show().attr("class", "effect"), h.fadeIn(), f.fadeOut(), c(".new-mark", i).remove(), d.show().addClass("animate"), i.removeClass("shake")
            }
            console.log("どん2s");
            var d = c("#KAYAC"),
                f = c("#SpeedLine"),
                j = c(".share-button"),
                k = c("#Oar"),
                l = c("#Do, #N"),
                m = 0,
                n = !1;
        console.log("113");
            i.addClass("intro"), kayac.browser.ie && kayac.browser.version <= 9 ? setTimeout(a, 700) : c("#Do").on("webkitAnimationEnd animationend", function(b) {
                n === !1 && (n = !0, i.addClass("shake"), f.fadeIn(200), setTimeout(a, 700))
            }), d.on("webkitAnimationEnd animationend", function(a) {
                e.length <= m && (m = 0), k.fadeIn(350).attr("class", e[m++]), d.addClass("two").removeClass("animate"), setTimeout(function() {
                    k.fadeOut(300), d.addClass("animate")
                }, 1400)
            })
        }
        function b() {
            if (f === !1) {
                var a = new d;
                a.init()
            }
            var b = c("#MainContents");
            new kayac.view.pager.LinearPagerTop(b, c(".dynamic-list", b)).init();
            var e, g;~~ (10 * Math.random()), e = '<div class="balloon" style="margin-left: 120px;"><a href="https://games.kayac.com/pf/" target="_blank"><img src="../images/top/balloon_11_off.png" alt="ポケットフットボーラー"></a></div>', i.append(e), g = i.find(".balloon a"), g.on("click", function() {
                ga("send", "event", "button_balloon", "click", g.attr("href"))
            }), c(document).on("mouseover", "#MainVisual .balloon img", function() {
                var a = c(this),
                    b = a.attr("src").replace("_off", "_on");
                a.attr("src", b)
            }).on("mouseout", "#MainVisual .balloon img", function() {
                var a = c(this),
                    b = a.attr("src").replace("_on", "_off");
                a.attr("src", b)
            })
        }
        console.log(), kayac.browser.ie && kayac.browser.version < 9 && c("img").each(function() {
            var a = c(this).attr("src");
            a = a.replace(/\.svg($|\?)/i, ".png"), c(this).attr("src", a)
        });
        var f = !! location.search.match(/pickup=[0-9]/);
        f === !1 && c("body").addClass("news");
        var g = c("#SiteHeader"),
            h = c("#MainContents"),
            i = c("#MainVisual"),
            j = c("body").hasClass("en") ? "_en" : c("body").hasClass("cn") ? "_cn" : "";
console.log("どん");  
        kayac.globalEffect === !0 && f === !1 ? (g.show().addClass("quiet"), h.hide(), c(".new-mark", i).delay(400).fadeIn(600), c(".new-logo", i).delay(400).fadeIn(600, function() {
            i.append('<div id="KAYAC" class="kayac"></div><div id="Oar" class="oar"></div><img id="Do" class="do" src="../images/top/do' + j + '.png" alt=""/><img id="N" class="n" src="../images/top/n' + j + '.png" alt=""/><img id="SpeedLine" class="line" src="../images/svg/speed_line.svg" alt="" />'), a()
        })) : (c(".new-mark, .new-logo", i).show(), b()), f === !0 && c("html,body").scrollTop(600)
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.page"), kayac.page.Page.prototype.news = function() {
        function a() {
            ga("send", "event", c(this).text(), "click", f)
        }
        var b, d, e, f;
        f = location.href, b = c(".sort-pickup a, .sort-item.pickup a"), d = c(".sort-hot a, .sort-item.hot a"), e = c(".item-category-link"), b.on("click", a), d.on("click", a), e.find("a").on("click", a)
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.page"), kayac.page.Page.prototype.melmag = function() {
        var a = c('input[name="authenticity_token"]').val();
        c(".melmag-register-check").on("change", function(a) {
            c(this).is(":checked") ? c(".melmag-register-btn").removeAttr("disabled") : c(".melmag-register-btn").attr("disabled", "disabled")
        }), c("#MelmagRegister").on("click", function(b) {
            var d = (c(this), c(this).closest("form"));
            b.preventDefault();
            var e = function(a) {
                return function(b) {
                    b.result ? a.val("登録完了").attr("disabled", "disabled").addClass("disabled").closest(".form-item").addClass("success").removeClass("error") : a.closest(".form-item").addClass("error").find(".melmag-register-input").removeAttr("disabled")
                }
            }(c(this));
            c(this).closest(".form-item").find(".melmag-register-input").attr("disabled", "disabled"), c.ajax({
                method: "POST",
                url: d.attr("action"),
                data: {
                    email: c(this).closest(".form-item").find(".melmag-register-input").val(),
                    authenticity_token: a
                },
                success: e
            })
        }), c(".melmag-register-input").on("change", function() {
            c(".form-item").removeClass("error")
        }), c("#MelmagResign").on("click", function(b) {
            var d = (c(this), c(this).closest("form"));
            b.preventDefault();
            var e = function(a) {
                return function(b) {
                    b.result ? a.val("解除完了").attr("disabled", "disabled").addClass("disabled").closest(".form-item").addClass("success").removeClass("error") : a.closest(".form-item").addClass("error").find(".melmag-resign-input").removeAttr("disabled")
                }
            }(c(this));
            c(".form-item").find(".melmag-resign-input").attr("disabled", "disabled"), c.ajax({
                method: "POST",
                url: d.attr("action"),
                data: {
                    email: c(this).closest(".form-item").find(".melmag-resign-input").val(),
                    authenticity_token: a
                },
                success: e
            })
        })
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.page");
    var d = kayac.view.Modal,
        e = (kayac.event.Event, new kayac.view.ScrollAnimation);
    kayac.page.Page.prototype.visionPages = function(b, f, g) {
        e.init();
        var h = function(a, b) {
            switch (!0) {
                case /message_b\.svg/i.test(b.url):
            }
        }, i = function(a) {
            var b = c(a.target);
            switch (!0) {
                case b.is(".article-vision-vision"):
                    e.add(".article-vision-vision .text", {
                        delay: 75,
                        duration: 225,
                        attr: function(a) {
                            this.css("opacity", a), this.css("transform", "translate(0," + Math.floor(-150 + 150 * a) + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-vision .bg", {
                        delay: 200,
                        duration: 240,
                        attr: function(a) {
                            this.css("opacity", a), this.css("transform", "scale(" + a + ")")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-vision .wa-right", {
                        delay: 200,
                        duration: 480,
                        attr: function(a) {
                            this.css("opacity", a), this.css("transform", "scale(" + a + ")")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-vision .wa-left", {
                        delay: 200,
                        duration: 120,
                        attr: function(a) {
                            this.css("opacity", a), this.css("transform", "scale(" + a + ")")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-vision .wa-right-s", {
                        delay: 300,
                        duration: 120,
                        attr: function(a) {
                            this.css("opacity", a), this.css("transform", "scale(" + a + ")")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-vision .wa-left-s", {
                        delay: 150,
                        duration: 360,
                        attr: function(a) {
                            this.css("opacity", a), this.css("transform", "scale(" + a + ")")
                        },
                        start: 0,
                        end: 1
                    });
                    break;
                case b.is(".article-vision-message"):
                    e.add(".article-vision-message .star-left", {
                        delay: 100,
                        easing: "ease-in",
                        duration: 500,
                        attr: function(a) {
                            var b = -200 + 200 * a,
                                c = -200 + 200 * a;
                            this.css("opacity", a), this.css("transform", "translate(" + Math.floor(b) + "px," + Math.floor(c) + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-message .star-right", {
                        delay: 100,
                        duration: 450,
                        easing: "ease-in",
                        attr: function(a) {
                            var b = 200 - 200 * a,
                                c = -200 + 200 * a;
                            this.css("opacity", a), this.css("transform", "translate(" + Math.floor(b) + "px," + Math.floor(c) + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-message .star-left-move", {
                        delay: 100,
                        easing: "ease-in",
                        duration: 800,
                        attr: function(a) {
                            var b = -400 + 400 * a,
                                c = -90 + 90 * a;
                            this.css("opacity", a), this.css("transform", "translate(" + Math.floor(b) + "px," + Math.floor(c) + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-message .star-right-move", {
                        delay: 100,
                        duration: 800,
                        easing: "ease-in",
                        attr: function(a) {
                            var b = 400 - 400 * a,
                                c = -90 + 90 * a;
                            this.css("opacity", a), this.css("transform", "translate(" + Math.floor(b) + "px," + Math.floor(c) + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-message .cloud-back", {
                        delay: 100,
                        duration: 1200,
                        attr: function(a) {
                            var b = 100 - 400 * a,
                                c = 0;
                            this.css("opacity", a > .1 ? .3 : 3 * a), this.css("transform", "translate(" + b + "px, " + c + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-message .cloud-front", {
                        delay: 100,
                        duration: 1200,
                        attr: function(a) {
                            var b = 600 - 1800 * a,
                                c = 0;
                            this.css("opacity", a > .25 ? 1 : 4 * a), this.css("transform", "translate(" + b + "px, " + c + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".article-vision-message .text-1", {
                        delay: 100,
                        duration: 200,
                        attr: function(a) {
                            var b = 80 - 80 * a;
                            this.css("opacity", a), this.css("transform", "translateY(" + b + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".star-bg", {
                        delay: 200,
                        duration: 200,
                        attr: function(a) {
                            var b = 0,
                                c = 10 - 10 * a,
                                d = a;
                            this.css("opacity", a), this.css("transform", "translate(" + b + "px, " + c + "px) scale(" + d + ")")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".pon-left", {
                        delay: 250,
                        duration: 200,
                        attr: function(a) {
                            var b = 80 - 80 * a,
                                c = 20 - 20 * a;
                            this.css("opacity", a), this.css("transform", "translate(" + b + "px, " + c + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".pon-right", {
                        delay: 250,
                        duration: 200,
                        attr: function(a) {
                            var b = -80 + 80 * a,
                                c = 20 - 20 * a;
                            this.css("opacity", a), this.css("transform", "translate(" + b + "px, " + c + "px)")
                        },
                        start: 0,
                        end: 1
                    }), e.add(".text-2", {
                        delay: 0,
                        duration: 250,
                        attr: function(a) {
                            var b = -200 + 200 * a;
                            this.css("opacity", a), this.css("transform", "translateY(" + b + "px)")
                        },
                        start: 0,
                        end: 1
                    });
                    break;
                case b.is(".article-vision-who"):
                    var d = c(".article-vision-who .left-dokis p, .article-vision-who .right-dokis p"),
                        f = function() {
                            d.each(function(a) {
                                var b = Math.random();.3 > b ? c(this).show() : c(this).hide()
                            })
                        };
                    e.add(".article-vision-who .intro", {
                        delay: 400,
                        duration: 3e3,
                        attr: function(a) {
                            500 > a ? c(".article-vision-who .top-svg").css("opacity", a / 500) : a > 2500 && c(".article-vision-who .top-svg").css("opacity", (3e3 - a) / 500)
                        },
                        start: 0,
                        end: 3e3
                    }), f(), setInterval(f, 4e3);
                    break;
                case b.is(".article-vision-strategy"):
                    e.add(".article-vision-strategy .intro", {
                        delay: 500,
                        duration: c(".article-vision-strategy .article-content").height(),
                        attr: function(a) {
                            500 > a ? c(".article-vision-strategy .top-svg").css("opacity", a / 500 - .3) : a > 2500 ? c(".article-vision-strategy .top-svg").css("opacity", (3e3 - a) / 500 - .3) : c(".article-vision-strategy .top-svg").css("opacity", .2 * Math.random() + .8 - .3)
                        },
                        start: 0,
                        end: 3e3
                    })
            }
        }, j = function(a) {
            var b, e = c(a.target),
                f = e.find(".yanasan-link"),
                g = f.data("id");
            b = new d(f, g), b.init()
        };
        c(document).on("addedToDocument", "article", function(a) {
            if (c(a.target).hasClass("article-vision-who")) {
                c("#jplayer-episode-nagayasu").remove();
                var b = c("#PlayEpisodeNagayasu"),
                    d = c('<div id="jplayer-episode-nagayasu"></div>').appendTo("body");
                d.jPlayer({
                    ready: function() {
                        d.jPlayer("setMedia", {
                            mp3: "/assets/sounds/kayac77_nare1.mp3"
                        }), b.on("click", function() {
                            b.hasClass("off") ? d.jPlayer("play", 0) : d.jPlayer("stop"), b.toggleClass("off")
                        }), c(document).on("click", "#modal-who .close", function(a) {
                            b.addClass("off"), d.jPlayer("stop")
                        })
                    },
                    swfPath: "/assets/scripts"
                })
            }
        }), c(a).bind("svgload", h), c(document).on("addedToDocument", "article", i), c(document).on("addedToDocument", "article", j), a.sa = e
    }, kayac.page.Page.prototype.visionStyle = function(a, b, f) {
        var g = function(a) {
            var b, e = c(a.target),
                f = e.find(".yanasan-link"),
                g = f.data("id");
            b = new d(f, g), b.init()
        }, h = function() {
            var a = e;
            a.init(), a.add(".hero-rule-1", {
                delay: 250,
                duration: 700,
                attr: function(a) {
                    if (.2 > a ? c(".hero-rule-1 .yanakonchi").css("transform", "rotate(" + a / .2 * -89 + "deg) translateY(" + 20 * (.2 - a) / .2 + "px)") : a > .2 && .4 > a ? c(".hero-rule-1 .yanakonchi").css("transform", "rotate(-89deg) translateY(" + 20 * (a - .2) / .2 + "px)") : a > .4 && c(".hero-rule-1 .yanakonchi").css("transform", "rotate(-89deg) translateY(" + (-1500 * (a - .4) / .6 + 20) + "px)"), a > .6) {
                        var b = 1 - (a - .6) / .2 * 1;
                        b = b > 0 ? b : 0, c(".hero-rule-1 .text-to-erase").css("opacity", b)
                    }
                },
                start: 0,
                end: 1,
                baseline: "top"
            }), a.add(".hero-rule-2", {
                delay: 450,
                duration: 300,
                attr: function(a) {
                    var b, d, e;
                    a > .2 ? (b = 1 + (a - .2) / .8 * 9, d = 1 - (a - .2) / .8, e = (a - .2) / .8 * -200, c(".hero-rule-2 .yanakonchi").addClass("changed").css({
                        transform: "scale(" + b + ") translateX(" + e + "px)",
                        opacity: d
                    })) : c(".hero-rule-2 .yanakonchi").removeClass("changed").css({
                        transform: "scale(1)"
                    })
                },
                start: 0,
                end: 1
            }), a.add(".hero-rule-3", {
                delay: 250,
                duration: 300,
                attr: function(a) {
                    var b, d;
                    if (.6 > a) {
                        for (var e = 0; 10 * a > e; e++) c(".hero-rule-3 .yanakonchi.copy").eq(e).addClass("show");
                        for (; 6 > e; e++) c(".hero-rule-3 .yanakonchi.copy").eq(e).removeClass("show");
                        c(".hero-rule-3 .yanakonchi").removeClass("changed")
                    } else b = (a - .6) / .4 * -150, d = 1 - (a - .6) / .4, c(".hero-rule-3 .yanakonchi").addClass("changed").css({
                        transform: "translateY(" + b + "px)",
                        opacity: d
                    })
                },
                start: 0,
                end: 1
            }), a.add(".hero-rule-4", {
                delay: 350,
                duration: 400,
                attr: function(a) {
                    var b, d, e, f;
                    b = .3 > a ? 200 * (1 - a / .3) : 0, e = a > .3 ? (a - .3) / .7 * -30 + 30 : 30, d = a > .3 ? (a - .3) / .7 : 0, f = .3 > a ? a / .3 : 1, c(".hero-rule-4 .yanakonchi").css({
                        transform: "translateX(" + b + "px)",
                        opacity: f
                    }), c(".hero-rule-4 .balloon").css({
                        transform: "translateY(" + e + "px)",
                        opacity: d
                    })
                },
                start: 0,
                end: 1
            }), a.add(".hero-rule-5", {
                delay: 350,
                duration: 300,
                attr: function(a) {
                    if ((.1 > a || a > .5) && (c(".hero-rule-5 .yanakonchi").removeClass("changed"), .1 > a || a > .9)) return c(".hero-rule-5 .yanakonchi").css({
                        transform: ""
                    }), void c(".hero-rule-5 .dash").css({
                        transform: "",
                        opacity: 0
                    });
                    a > .42 ? c(".hero-rule-5 .coin").hide() : c(".hero-rule-5 .coin").show();
                    var b, d, e;
                    b = .5 > a ? (a - .1) / .4 * -170 : (a - .5) / .4 * 170 - 170, d = .9 > a ? (a - .1) / .8 * 50 : 50, e = .5 > a ? (a - .1) / .4 : (a - .5) / -.4 + 1, c(".hero-rule-5 .yanakonchi").addClass("changed"), c(".hero-rule-5 .yanakonchi").css({
                        transform: "translateY(" + b + "px)"
                    }), c(".hero-rule-5 .dash").css({
                        transform: "translateY(" + d + "px)",
                        opacity: e
                    })
                },
                start: 0,
                end: 1
            }), a.add(".hero-rule-6", {
                delay: 250,
                duration: 300,
                attr: function(a) {
                    var b, d, e;
                    e = .7 > a ? a / .7 : 1, b = .7 > a ? a / .7 * 120 - 120 : 0, d = .7 > a ? 0 : .8 > a ? (a - .7) / .1 * -30 : (a - .8) / .2 * 30 - 30, c(".hero-rule-6 .kaichikonchi").css({
                        transform: "translateX(" + b + "px)",
                        opacity: e
                    }), c(".hero-rule-6 .kubakonchi").css({
                        transform: "translateX(" + -1 * b + "px)",
                        opacity: e
                    }), c(".hero-rule-6 .yanakonchi").css({
                        transform: "translateY(" + d + "px)"
                    }), a > .9 ? c(".hero-rule-6 .yanakonchi").addClass("changed") : c(".hero-rule-6 .yanakonchi").removeClass("changed")
                },
                start: 0,
                end: 1
            }), a.add(".hero-rule-7", {
                delay: 350,
                duration: 300,
                attr: function(a) {
                    var b, d, e;
                    b = .2 > a ? a / .2 : 1, d = .4 > a ? a / .4 * 80 - 80 : 0, e = a > .5 ? (a - .5) / .5 * 100 : 0, a > .5 ? c(".hero-rule-7 .yanakonchi").addClass("weak") : c(".hero-rule-7 .yanakonchi").removeClass("weak"), c(".hero-rule-7 .yanakonchi").css({
                        transform: "translateX(" + e + "px)"
                    }), c(".hero-rule-7 .stone").css({
                        transform: "translateY(" + d + "px)",
                        opacity: b
                    })
                },
                start: 0,
                end: 1
            })
        };
        c(document).on("addedToDocument", "article", g), c(document).on("addedToDocument", ".article-vision-style-manga", h)
    }, kayac.page.Page.prototype.visionWho = function(a, b, e) {
        var f = function(a) {
            var b, e = c(a.target),
                f = e.find(".yanasan-link"),
                g = f.data("id");
            b = new d(f, g), b.init()
        };
        c(document).on("addedToDocument", "article", f)
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.page");
    var d = new kayac.view.ScrollAnimation;
    kayac.page.Page.prototype.companyPages = function() {
        d.init(), c(document).on("addedToDocument", "article", function(a) {
            if (c(a.target).is(".article-company-finance")) {
                var b = !1;
                d.add(".x-axis li:eq(0)", {
                    duration: 200,
                    attr: function(a) {
                        a > 0 && !b && (c(".graph .data .bar").addClass("animate"), b = !0)
                    },
                    start: 0,
                    end: 1
                })
            }
        }), c(document).on("addedToDocument", "article", function(a) {
            c(a.target).is(".article-company-map") && (new kayac.page.Page).map()
        })
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.page");
    var d = "ja" === kayac.lang ? "" : "_en",
        e = {
            step1: "/assets/images/company/map/map_marker_1.png",
            step2: "/assets/images/company/map/map_marker_2.png",
            step3: "/assets/images/company/map/map_marker_3.png",
            yokohama: "/assets/images/company/map/map_marker_yokohama" + d + ".png",
            kamakura: "/assets/images/company/map/map_marker_kamakura" + d + ".png"
        }, f = "ja" === kayac.lang ? "送信完了" : "Succeeded";
    kayac.page.Page.prototype.map = function() {
        var a = [],
            b = c('input[name="authenticity_token"]').val();
        c.fn.get_gmap_param = function() {
            var a = c(this),
                b = a.data("get_gmap_param");
            if (b) return b;
            var d = a.find("a").attr("href"),
                f = d.match(/(?:\?|&)ll=(.+?)(?:&|$)/);
            console.assert(f, "require google map link(ll) " + d);
            var g = f.pop().split(/,/),
                h = d.match(/(?:\?|&)z=(.+?)(?:&|$)/);
            console.assert(h, "require google map link(z) " + d);
            var i = a.find("a").text(),
                j = a.find("a").data().icon;
            return j || (j = e["step" + (a.prevAll().length + 1)]), b = {
                lat: g[0],
                lng: g[1],
                latlng: new google.maps.LatLng(g[0], g[1]),
                zoom: 0 | h.pop(),
                text: i,
                icon: j
            }, a.data("get_gmap_param", b), b
        };
        var d = function() {
            var b = {
                zoom: 18,
                center: new google.maps.LatLng(35.320986, 139.55353),
                mapTypeControlOptions: {
                    mapTypeIds: ["KayacColor", google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
                },
                mapTypeId: "KayacColor"
            }, d = {
                zoom: 18,
                center: new google.maps.LatLng(35.463064, 139.624809),
                mapTypeControlOptions: {
                    mapTypeIds: ["KayacColor", google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
                },
                mapTypeId: "KayacColor"
            };
            a[0] = new google.maps.Map(c(".gmap-container.kamakura")[0], b), a[1] = new google.maps.Map(c(".gmap-container.yokohama")[0], d);
            var f = new google.maps.StyledMapType([{
                featureType: "all",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "on"
                }, {
                    gamma: .2
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    lightness: -22
                }]
            }, {
                featureType: "water",
                elementType: "all",
                stylers: [{
                    hue: "#00ffee"
                }, {
                    saturation: 56
                }, {
                    lightness: 44
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    lightness: 92
                }]
            }, {
                featureType: "landscape.man_made",
                elementType: "all",
                stylers: [{
                    lightness: -8
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    lightness: 53
                }]
            }], {
                name: "KayacColor"
            });
            a[0].mapTypes.set("KayacColor", f), a[1].mapTypes.set("KayacColor", f);
            var h = new google.maps.MarkerImage(e.kamakura, void 0, void 0, new google.maps.Point(190, 140)),
                i = new google.maps.MarkerImage(e.yokohama, void 0, void 0, new google.maps.Point(190, 127));
            g.add({
                position: new google.maps.LatLng(35.320986, 139.55353),
                map: a[0],
                title: "本社：鎌倉オフィス",
                icon: h
            }), g.add({
                position: new google.maps.LatLng(35.463064, 139.624809),
                map: a[1],
                title: "本社：鎌倉オフィス",
                icon: i
            });
            for (var j = 0, k = ["kamakura", "yokohama"]; j < k.length; j++) c(".map-" + k[j] + "-office .route-step").each(function() {
                var b = c(this).get_gmap_param(),
                    d = g.add({
                        position: b.latlng,
                        map: a[j],
                        title: b.text,
                        icon: b.icon
                    });
                c("a", c(this)).click(function(b, c) {
                    return function() {
                        return a[b].panTo(c.getPosition()), !1
                    }
                }.call(this, j, d))
            })
        };
        window.startMap = d,
        function() {
            var a = document.createElement("script");
            a.type = "text/javascript", a.async = "async", a.defer = "defer", a.src = "//maps.google.com/maps/api/js?sensor=false&callback=startMap";
            var b = document.getElementsByTagName("head")[0];
            b.appendChild(a)
        }(), c(".send-map-to-phone .send-btn").on("click", function(a) {
            var d = c(this).closest("form"),
                e = function(a) {
                    return function(b) {
                        "ok" == b.result ? a.attr("disabled", "disabled").val(f).addClass("disabled").closest(".form-item").addClass("success") : "ng" == b.result && a.closest(".form-item").addClass("error").find(".form-input").removeAttr("disabled")
                    }
                }(c(this)),
                g = /kamakura/i.test(c(this).data("location")) ? "kamakura" : /yokohama/i.test(c(this).data("location")) ? "yokohama" : "",
                h = c(this).closest(".form-item").find(".form-input").val();
            c(this).closest(".form-item").find(".form-input").attr("disabled", "disabled"), c.ajax({
                type: "post",
                url: d.attr("action"),
                data: {
                    location: g,
                    addressForMobile: h,
                    authenticity_token: b,
                    locale: kayac.lang
                },
                success: e
            }), a.preventDefault()
        }), c(".send-map-to-phone .input-mail-address").on("change", function() {
            c(this).closest(".form-item").removeClass("error")
        })
    };
    var g = {
        markers: [],
        add: function(a) {
            var b = new google.maps.Marker(a);
            return this.markers.push(b), google.maps.event.addListener(b, "click", function() {
                a.map.panTo(b.getPosition())
            }), b
        },
        clear: function() {
            _(this.markers).each(function(a) {
                a.setMap(null)
            }), this.markers = []
        }
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";

    function d(a) {
        if (c(a.target).is(".article-company-institution-777")) {
            var b = ".carousel",
                d = ".carousel-list",
                f = "",
                g = {
                    loop: !0,
                    delay: 3e3,
                    duration: 800,
                    noshift: !0
                }, h = new e(b, d, f, g);
            h.init()
        }
    }
    b("kayac.page");
    var e = kayac.view.Carousel;
    kayac.page.Page.prototype.event = function() {
        c(document).on("addedToDocument", "article", d)
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";

    function d(a) {
        var b = c(a),
            d = ".project-thumbnails-list",
            e = b.find(d),
            f = e.find("li"),
            h = new g(e);
        h.init(), f.on("click", function(a) {
            var b = a.target,
                d = c(b),
                e = d.parent("li").length ? d.parent("li") : d,
                g = f.index(e);
            h.open(g)
        })
    }
    b("kayac.page");
    var e = new kayac.view.ScrollAnimation,
        f = kayac.event.Event,
        g = a.kayac.view.ThumbView,
        h = a.kayac.view.Modal;
    kayac.page.Page.prototype.servicePages = function(a, b, g) {
        e.init(), c(document).on(f.ADDED_TO_DOCUMENT, "article", function(a) {
            var b = c(a.currentTarget);
            b.is(".article-service-strongpoint") ? e.add(".strongpoint-intro-bg", {
                delay: 100,
                duration: 600,
                attr: function(a) {
                    1 >= a ? this.css({
                        transform: "scale(" + a + ")"
                    }) : 2 >= a ? this.css({
                        transform: "scale(" + (.8 + .2 * a - .04 * Math.random()) + ")",
                        opacity: 1
                    }) : 3 >= a && this.css({
                        opacity: 3 - a,
                        transform: "scale(" + (.8 + .2 * a - .04 * Math.random()) + ")"
                    })
                },
                start: 0,
                end: 3
            }) : b.is(".article-project") && (new kayac.view.Onoma, d(b))
        })
    }, kayac.page.Page.prototype.serviceList = function() {
        j(), c(document).on(f.ADDED_TO_DOCUMENT, ".linear-content", function(a) {
            j()
        })
    };
    var i = !1,
        j = function() {
            var a, b, d, e = c(".page-game-list");
            e.length && i === !1 && (i = !0, a = e.find(".kaichi-link"), b = a.data("id"), d = new h(a, b), d.init())
        }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";

    function d(a) {
        var b, d, e, f = c(a),
            g = f.find(".member-works-view"),
            h = g.find(".member-works-list"),
            i = g.find(".controller");
        d = g.attr("data-account"), e = "/team/" + d + ".json", b = new k(g, h, i, {
            loop: !0,
            delay: 5e3,
            json: e,
            listtype: "project",
            height: 184
        }), b.init()
    }
    function e(a) {
        var b, d, e = c(a),
            f = e.find(".member-profile"),
            g = f.find(".member-profile-balloon"),
            h = f.find(".member-profile-confidence"),
            i = f.find(".confidence-btn"),
            j = "opened",
            k = 500;
        return h.length ? (b = i.attr("data-opn"), d = i.attr("data-cls"), void i.on("click", function() {
            i.hasClass(j) ? (i.removeClass(j).text(b), h.fadeOut(k), g.fadeIn(k)) : (i.addClass(j).text(d), h.fadeIn(k), g.fadeOut(k))
        })) : !1
    }
    function f(a) {
        var b = c(a),
            d = b.find(".member-profile-banners"),
            e = d.find("img");
        e.each(function(a, b) {
            var d = c(b),
                e = d.attr("src"),
                f = d.data("hover");
            f.length && d.hover(function() {
                d.attr("src", f)
            }, function() {
                d.attr("src", e)
            })
        })
    }
    function g() {
        var a, b, d = c(".member-list-jins"),
            e = c(".member-article-list"),
            f = e.find(".member-cell"),
            g = "/assets/json/jins.json";
        return d.length ? (a = f.length, b = new l(g), void b.init(function() {
            f.each(function(a, c) {
                a % 2 == 1 && (b.seed ? b.seed = 0 : b.seed = 1, b.append(c))
            })
        })) : !1
    }
    function h() {
        var a, b = c(".research-item"),
            d = c(".daily-seen-list"),
            e = c(".daily-seen-view"),
            f = e.find(".controller"),
            g = "/assets/json/report_daily.json";
        if (a = new k(e, d, f, {
            loop: !0,
            delay: 5e3,
            zoom: !0,
            json: g,
            height: 184,
            listtype: "report"
        }), a.init(), kayac.browser.ie && kayac.browser.version <= 8) return !1;
        for (var h = 0, i = b.length; i > h; h++) p.push(q(b[h])), p[h].init();
        r()
    }
    b("kayac.page");
    var i = kayac.view.DonutGrapher,
        j = kayac.event.Event,
        k = kayac.view.Carousel,
        l = kayac.view.GridAdvertise,
        m = kayac.util,
        n = new kayac.view.ScrollAnimation,
        o = 0,
        p = [];
    kayac.page.Page.prototype.teamReport = function() {}, kayac.page.Page.prototype.teamMemberlist = function() {
        var a, b = c(".member-list");
        b.length && (a = m.toObject(location.search), a.is_glass && "grid" === a.view && (b.addClass("member-list-jins"), g(), c(".member-list-jins").on(j.ADDED_TO_DOCUMENT, function() {
            c("#MainContents .ad-cell").remove(), g()
        })))
    }, kayac.page.Page.prototype.teamMember = function() {
        n.init(), c(document).on(j.ADDED_TO_DOCUMENT, "article", function(a) {
            var b = c(a.currentTarget);
            b.is(".article-team-member") ? (d(b), e(b), f(b), n.add(c(".member-basic-info-logo", b), {
                delay: 100,
                duration: 800,
                attr: function(a) {
                    var b;
                    b = 87 * a - 15, b = (b > 0 ? b : 0) + "%", this.css({
                        marginLeft: b
                    })
                },
                start: 0,
                end: 1
            })) : b.is(".article-team-report") && h()
        })
    }, kayac.page.Page.prototype.memberGame = function(a, b) {
        function d(a, b, c, d, e) {
            e = [];
            for (d in c) c[d] === !0 ? c[d] = "yes" : c[d] === !1 && (c[d] = "no"), e.push(d + "=" + c[d]);
            return window.open(a, b, e.join(","))
        }
        c(document).on("click", "#HorizontalToolbar .layout-tool-item.game a", function(e) {
            return d(c(this).attr("href"), "game", {
                width: a,
                height: b,
                left: ~~ (window.screen.width - a >> 1),
                top: ~~ (window.screen.height - b >> 1),
                menubar: !1,
                toolbar: !1,
                location: !1,
                status: !1,
                resizable: !1,
                scrollbars: !1
            }), !1
        })
    };
    var q = function(a) {
        var b, d, e = c(".raphael", c(a))[0],
            f = [];
        for (b = 0, d = c(".data li", c(a)).length; d > b; b++) f.push({
            name: c(".data li:eq(" + b + ") .name", c(a)).html(),
            value: c(".data li:eq(" + b + ") .value", c(a)).html() - 0,
            color: c(".data li:eq(" + b + ") .color", c(a)).css("background-color")
        });
        return new i(e, f)
    }, r = function() {
        o < p.length && (p[o].animate(), o++, setTimeout(function() {
            r()
        }, 500))
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";

    function d(a) {
        var b, d = c(a),
            e = c(".entry-sheet-wrapper"),
            f = 800;
        d.is(":checked") ? (e.slideDown(f), b = e.offset().top, c("body, html").animate({
            scrollTop: b - 50
        })) : (e.slideUp(f), c("body, html").animate({
            scrollTop: 0
        }))
    }
    function e() {
        window.onbeforeunload = function(a) {
            var b = "このページから移動しますか？\n入力したデータは保存されません。";
            return i ? void 0 : ((a || window.event).returnValue = "", b)
        }
    }
    function f() {
        function a(a, c) {
            b.css({
                transform: "rotate(" + a + "deg)"
            }), setTimeout(function() {
                b.text(c)
            }, e)
        }
        var b = c(".website-add-btn"),
            d = c(".additionalUrl"),
            e = 800;
        d.hide(), b.on("click", function() {
            d.hasClass("opened") ? (d.removeClass("opened").slideUp(e), a(0, "+")) : (d.addClass("opened").slideDown(e), a(180, "-"))
        })
    }
    b("kayac.page");
    var g = new kayac.model.FormModel,
        h = new kayac.net.FormValidator(g),
        i = !1,
        j = [!1, !1],
        k = [!1, !1, !1],
        l = function(a) {
            var b, e = c(this),
                f = e.attr("name"),
                h = c(this).val(),
                i = !0;
            if (e.is('input[type="radio"]')) b = c('input[name="' + f + '"]:checked'), h = b.length ? b.val() : "";
            else if (e.is('input[type="checkbox"]')) {
                var l = c('[name="' + e.attr("name") + '"]'),
                    m = [];
                l.each(function(a, b) {
                    var d = c(b);
                    d.is(":checked") && m.push(d.val())
                }), h = m
            } else if ("recruit_entry[zip_code1]" === f || "recruit_entry[zip_code2]" === f) {
                var n = /\d/.exec(f)[0] - 1;
                f = "recruit_entry[zip_code]", h = c('input[name="recruit_entry[zip_code1]"]').val() + c('input[name="recruit_entry[zip_code2]"]').val(), j[n] = !0;
                for (var o = 0; o < j.length; o++) if (!j[o]) {
                    i = !1;
                    break
                }
            } else if ("recruit_entry[tel1]" === f || "recruit_entry[tel2]" === f || "recruit_entry[tel3]" === f) {
                var n = /\d/.exec(f)[0] - 1;
                f = "recruit_entry[tel]", h = c('input[name="recruit_entry[tel1]"]').val() + c('input[name="recruit_entry[tel2]"]').val() + c('input[name="recruit_entry[tel3]"]').val(), k[n] = !0;
                for (var o = 0; o < k.length; o++) if (!k[o]) {
                    i = !1;
                    break
                }
            } else if ("recruit_entry[birthday(1i)]" === f || "recruit_entry[birthday(2i)]" === f || "recruit_entry[birthday(3i)]" === f) {
                for (var p = [c('input[name="recruit_entry[birthday(1i)]"]').val(), c('select[name="recruit_entry[birthday(2i)]"]').val(), c('select[name="recruit_entry[birthday(3i)]"]').val()], o = 1; 3 > o; o++)(p[o] + "").length < 2 && (p[o] = "0" + p[o]);
                f = "recruit_entry[birthday]", h = p.join("")
            } else if ("recruit_entry[tmp_photo1_url]" === f || "recruit_entry[tmp_photo2_url]" === f || "recruit_entry[tmp_photo3_url]" === f) return;
            "entry[terms]" === f ? d(e) : i && g.setContent(f, h, !a)
        }, m = function(a) {
            return g.readyToSend ? (i = !0, !0) : (c("input, textarea, select", ".required-item").not('[name="entry[terms]"]').each(function() {
                l.call(this)
            }), h.validateAll(), !1)
        }, n = function(a, b) {
            var d, e, f = 5e3;
            for (d = 0; d < b.diff.inserted.length; d++) e = c("." + b.diff.inserted[d]), e.addClass("on"), d === b.diff.inserted.length - 1 && (e.addClass("animate").siblings(".on").removeClass("animate"), function(a) {
                setTimeout(function() {
                    a.removeClass("animate")
                }, f)
            }(e));
            for (d = 0; d < b.diff.removed.length; d++) e = c("." + b.diff.removed[d]), e.removeClass("animate").removeClass("on");
            b.validSections.length >= 5 ? g.readyToSend = !0 : g.readyToSend = !1
        }, o = function(a) {
            c.ajax({
                method: "GET",
                url: "/api/recruit/zip_code",
                data: {
                    zipcode: a.content
                },
                success: function(a) {
                    console.debug("Fetch Address", a), a.is_error || (c('select[name="recruit_entry[prefecture]"]').val(a.prefecture).blur(), c('input[name="recruit_entry[address]"]').val(a.address).focus())
                }
            })
        };
    kayac.page.Page.prototype.entrysheet = function() {
        var b = c(".entry-sheet-wrapper");
        b.hasClass("confirm") || (b.hide(), f(), e()), g.init(), c('input[type="radio"], input[type="checkbox"], input[type="file"], select', ".required-item").on("change", l), c('input[type="text"], textarea, select', ".required-item").on("blur", l), c("form.new_recruit_entry").on("submit", m), c(a).on("form.model.fieldchange", function(a, b) {
            h.validateName(b.name), "recruit_entry[zip_code]" === b.name && o(b.data)
        }), c(a).on("form.model.sectionupdate", n), b.hasClass("retry") && c("input, textarea, select", ".required-item").each(function() {
            l.call(this)
        })
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";

    function d(a, b, c) {
        var d = !1,
            e = document.querySelector(a),
            f = document.createElement("script");
        f.src = b, e.appendChild(f), f.onload = f.onreadystatechange = function() {
            d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, c(), f.onload = f.onreadystatechange = null, e && f.parentNode && e.removeChild(f))
        }
    }
    b("kayac.page");
    var e = kayac.event.Event;
    kayac.util, Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        var b = this.length,
            c = Number(arguments[1]) || 0;
        for (c = 0 > c ? Math.ceil(c) : Math.floor(c), 0 > c && (c += b); b > c; c++) if (c in this && this[c] === a) return c;
        return -1
    });
    var f = {
        index: ".article-ir-index",
        news: ".article-ir-news",
        keiei: ".article-ir-keiei",
        zaisei: ".article-ir-zaisei",
        cashflow: ".article-ir-cashflow",
        notice: ".article-ir-notice",
        library: ".article-ir-library-index",
        tanshin: ".article-ir-library-tanshin",
        presentation: ".article-ir-library-presentation",
        yuho: ".article-ir-library-yuho",
        kabutsu: ".article-ir-library-kabutsu",
        soukai: ".article-ir-library-soukai",
        others: ".article-ir-library-others",
        kaiji: ".article-ir-library-kaiji"
    }, g = "//www.xj-storage.jp/ProvideImage/table/xj_table.js",
        h = "AS01527";
    kayac.page.Page.prototype.ir = function(a) {
        if (!kayac.browser.ie || kayac.browser.version >= 9) c(document).on(e.ADDED_TO_DOCUMENT, "article", function(a) {
            var b = c(a.currentTarget);
            if (b.is(f.index)) new kayac.ir.XjStorageLoaderIrTop;
            else if (b.is(f.news)) new kayac.ir.XjStorageLoaderNews;
            else if (b.is(f.notice)) new kayac.ir.XjStorageLoaderLibraryKoukoku;
            else if (b.is(f.keiei)) {
                var e = f.keiei,
                    i = ["getXJ_Table('xj_table1_9', '" + h + "', '1', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table2_9', '" + h + "', '2', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table3_9', '" + h + "', '3', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table4_9', '" + h + "', '4', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table7_9', '" + h + "', '7', '9', 'ja', null, null, false, false);", "getXJ_Table_EOY('xj_table27_2', '" + h + "', '27', '2', 'ja', null, null, false, true);", "getXJ_Table_EOY('xj_table28_2', '" + h + "', '28', '2', 'ja', null, null, false, true);", "getXJ_Table_EOY('xj_table29_2', '" + h + "', '29', '2', 'ja', null, null, false, true);"];
                d(e, g, function() {
                    for (var a = 0, b = i.length; b > a; a++) {
                        var d = document.createElement("script");
                        d.innerHTML = i[a], document.querySelector(e).appendChild(d)
                    }
                    setTimeout(function() {
                        c(e + " .heightLine-1").heightLine(), c(e + " .heightLine-2").heightLine(), c(e + " .heightLine-3").heightLine(), c(e + " .heightLine-4").heightLine()
                    }, 1e3)
                })
            } else if (b.is(f.zaisei)) {
                var e = f.zaisei,
                    i = ["getXJ_Table('xj_table5_9', '" + h + "', '5', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table6_9', '" + h + "', '6', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table8_9', '" + h + "', '8', '9', 'ja', null, null, false, false);", "getXJ_Table('xj_table9_9', '" + h + "', '9', '9', 'ja', null, null, false, false);"];
                d(e, g, function() {
                    for (var a = 0, b = i.length; b > a; a++) {
                        var d = document.createElement("script");
                        d.innerHTML = i[a], document.querySelector(e).appendChild(d)
                    }
                    setTimeout(function() {
                        c(e + " .heightLine-1").heightLine(), c(e + " .heightLine-2").heightLine(), c(e + " .heightLine-3").heightLine(), c(e + " .heightLine-4").heightLine()
                    }, 1e3)
                })
            } else if (b.is(f.cashflow)) {
                var e = f.cashflow,
                    i = ["getXJ_Table('xj_table10_9', '" + h + "', '10', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table11_9', '" + h + "', '11', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table12_9', '" + h + "', '12', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table13_9', '" + h + "', '13', '9', 'ja', '-6', null, false, false);"];
                d(e, g, function() {
                    for (var a = 0, b = i.length; b > a; a++) {
                        var d = document.createElement("script");
                        d.innerHTML = i[a], document.querySelector(e).appendChild(d)
                    }
                    setTimeout(function() {
                        c(e + " .heightLine-1").heightLine(), c(e + " .heightLine-2").heightLine(), c(e + " .heightLine-3").heightLine(), c(e + " .heightLine-4").heightLine()
                    }, 1e3)
                })
            } else b.is(f.library) ? new kayac.ir.XjStorageLoaderLibrary({
                display_id_Fresults: "xj-mainlist-Fresults-1"
            }) : b.is(f.tanshin) ? new kayac.ir.XjStorageLoaderLibraryTanshin : b.is(f.presentation) ? new kayac.ir.XjStorageLoaderLibrarySetumei : b.is(f.yuho) ? new kayac.ir.XjStorageLoaderLibraryYuka : b.is(f.kabutsu) ? new kayac.ir.XjStorageLoaderLibraryReport : b.is(f.soukai) ? new kayac.ir.XjStorageLoaderLibraryMeeting : b.is(f.others) ? new kayac.ir.XjStorageLoaderLibraryOther : b.is(f.kaiji) && new kayac.ir.XjStorageLoaderLibraryKaiji
        });
        else if (/^\/ir$/i.test(a)) new kayac.ir.XjStorageLoaderIrTop;
        else if (/^\/ir\/news/i.test(a)) new kayac.ir.XjStorageLoaderNews;
        else if (/^\/ir\/notice/i.test(a)) new kayac.ir.XjStorageLoaderLibraryKoukoku;
        else if (/^\/ir\/keiei/i.test(a)) {
            var b = f.keiei,
                i = ["getXJ_Table('xj_table1_9', '" + h + "', '1', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table2_9', '" + h + "', '2', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table3_9', '" + h + "', '3', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table4_9', '" + h + "', '4', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table7_9', '" + h + "', '7', '9', 'ja', null, null, false, false);", "getXJ_Table_EOY('xj_table27_2', '" + h + "', '27', '2', 'ja', null, null, false, true);", "getXJ_Table_EOY('xj_table28_2', '" + h + "', '28', '2', 'ja', null, null, false, true);", "getXJ_Table_EOY('xj_table29_2', '" + h + "', '29', '2', 'ja', null, null, false, true);"];
            d(b, g, function() {
                for (var a = 0, d = i.length; d > a; a++) {
                    var e = document.createElement("script");
                    e.text = i[a], document.querySelector(b).appendChild(e)
                }
                setTimeout(function() {
                    c(b + " .heightLine-1").heightLine(), c(b + " .heightLine-2").heightLine(), c(b + " .heightLine-3").heightLine(), c(b + " .heightLine-4").heightLine()
                }, 1e3)
            })
        } else if (/^\/ir\/zaisei/i.test(a)) {
            var b = f.zaisei,
                i = ["getXJ_Table('xj_table5_9', '" + h + "', '5', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table6_9', '" + h + "', '6', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table8_9', '" + h + "', '8', '9', 'ja', null, null, false, false);", "getXJ_Table('xj_table9_9', '" + h + "', '9', '9', 'ja', null, null, false, false);"];
            d(b, g, function() {
                for (var a = 0, d = i.length; d > a; a++) {
                    var e = document.createElement("script");
                    e.text = i[a], document.querySelector(b).appendChild(e)
                }
                setTimeout(function() {
                    c(b + " .heightLine-1").heightLine(), c(b + " .heightLine-2").heightLine(), c(b + " .heightLine-3").heightLine(), c(b + " .heightLine-4").heightLine()
                }, 1e3)
            })
        } else if (/^\/ir\/cashflow/i.test(a)) {
            var b = f.cashflow,
                i = ["getXJ_Table('xj_table10_9', '" + h + "', '10', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table11_9', '" + h + "', '11', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table12_9', '" + h + "', '12', '9', 'ja', '-6', null, false, false);", "getXJ_Table('xj_table13_9', '" + h + "', '13', '9', 'ja', '-6', null, false, false);"];
            d(b, g, function() {
                for (var a = 0, d = i.length; d > a; a++) {
                    var e = document.createElement("script");
                    e.text = i[a], document.querySelector(b).appendChild(e)
                }
                setTimeout(function() {
                    c(b + " .heightLine-1").heightLine(), c(b + " .heightLine-2").heightLine(), c(b + " .heightLine-3").heightLine(), c(b + " .heightLine-4").heightLine()
                }, 1e3)
            })
        } else /^\/ir\/library$/i.test(a) ? new kayac.ir.XjStorageLoaderLibrary({
            display_id_Fresults: "xj-mainlist-Fresults-1"
        }) : /^\/ir\/library\/tanshin/i.test(a) ? new kayac.ir.XjStorageLoaderLibraryTanshin : /^\/ir\/library\/presentation/i.test(a) ? new kayac.ir.XjStorageLoaderLibrarySetumei : /^\/ir\/library\/yuho/i.test(a) ? new kayac.ir.XjStorageLoaderLibraryYuka : /^\/ir\/library\/kabutsu/i.test(a) ? new kayac.ir.XjStorageLoaderLibraryReport : /^\/ir\/library\/soukai/i.test(a) ? new kayac.ir.XjStorageLoaderLibraryMeeting : /^\/ir\/library\/others/i.test(a) ? new kayac.ir.XjStorageLoaderLibraryOther : /^\/ir\/library\/kaiji/i.test(a) && new kayac.ir.XjStorageLoaderLibraryKaiji
    }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";

    function d(a) {
        var b = c(a),
            d = c(".contact-confirm-btn"),
            e = d.find("label"),
            f = "disabled";
        b.is(":checked") ? (d.removeClass(f), e.off("click")) : (d.addClass(f), e.on("click", function(a) {
            return !1
        }))
    }
    function e() {
        var a = c("#contact_kind_4"),
            b = c(".contact-type-service"),
            d = 400;
        a.is(":checked") ? b.slideDown(d) : b.slideUp(d)
    }
    b("kayac.page");
    var f = new kayac.model.FormModel({
        type: "contact"
    }),
        g = new kayac.net.FormValidator(f, {
            type: "contact"
        }),
        h = [!1, !1, !1],
        i = function(a) {
            var b, d = c(this),
                e = d.attr("name"),
                g = c(this).val(),
                i = !0;
            if (d.is('input[type="radio"]')) b = c('input[name="' + e + '"]:checked'), g = b.length ? b.val() : "";
            else if ("contact[tel1]" === e || "contact[tel2]" === e || "contact[tel3]" === e) {
                var j = /\d/.exec(e)[0] - 1;
                e = "contact[tel]", g = c('input[name="contact[tel1]"]').val() + c('input[name="contact[tel2]"]').val() + c('input[name="contact[tel3]"]').val(), h[j] = !0;
                for (var k = 0; k < h.length; k++) if (!h[k]) {
                    i = !1;
                    break
                }
            }
            "contact[term]" === e || i && f.setContent(e, g)
        }, j = function(a) {
            return f.readyToSend ? !0 : (g.validateAll(), !1)
        }, k = function(a, b) {
            var d, e, g = 5e3;
            for (d = 0; d < b.diff.inserted.length; d++) e = c("." + b.diff.inserted[d]), e.addClass("on"), d === b.diff.inserted.length - 1 && (e.addClass("animate").siblings(".on").removeClass("animate"), function(a) {
                setTimeout(function() {
                    a.removeClass("animate")
                }, g)
            }(e));
            for (d = 0; d < b.diff.removed.length; d++) e = c("." + b.diff.removed[d]), e.removeClass("animate").removeClass("on");
            b.validSections.length >= 2 ? f.readyToSend = !0 : f.readyToSend = !1
        };
    kayac.page.Page.prototype.contact = function() {
        var b = c(".contact-sheet-wrapper");
        if (!c(".contact-sheet-wrapper").hasClass("confirm")) {
            f.init();
            var h = c("#contact_term"),
                l = c(".contact-type").find("input");
            d(h), e(), h.on("change", function() {
                d(h)
            }), l.on("change", function() {
                e()
            }), c('input[type="radio"], input[type="checkbox"], input[type="file"], select', ".required-item").on("change", i), c('input[type="text"], textarea, select', ".required-item").on("blur", i), c("form.new_contact").on("submit", j), c(a).on("form.model.fieldchange", function(a, b) {
                g.validateName(b.name)
            }), c(a).on("form.model.sectionupdate", k), b.hasClass("retry") && c("input, textarea, select", ".required-item").each(function() {
                i.call(this)
            }), c('input[name="contact[kind]"]').on("change", function(a) {
                "4" === c(this).val() ? (c('input[name="contact[service_name]"]').length || f.setValid("contact[service_name]", !1), c('input[name="contact[service_name]"]').focus()) : i.call(c('input[name="contact[service_name]"]'))
            })
        }
    },
    function() {
        function a() {
            setTimeout(function() {
                b++, b > d && (b = 1), e.attr("src", e.data("anime" + b)), a()
            }, 1e3)
        }
        var b = 1,
            d = 2,
            e = c(".thanks-img img");
        e[0] && c("<img>").attr("src", e.data("anime" + d)).one("load", function() {
            a()
        })
    }()
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";

    function d() {
        function a(a, b) {
            function d(a) {
                i.push(e(j, a))
            }
            var f = c("<div>").html(b).text();
            if (c(".escapeQuery").text(f), !f) return c(".search-loading").hide(), void c(".search-no-result").show();
            var g = a ? a.SearchResponse.Web : {
                SearchResponse: {
                    Web: {
                        Results: []
                    }
                }
            };
            if (!g.Results || !g.Results.length) return c(".search-loading").hide(), void c(".search-no-result").show();
            var h, i = [],
                j = (c("#TemplateSearchResult").html(), c("#template-search-result").html());
            for (h in g.Results) d(g.Results[h]);
            c(".search-results").html(i.join("")), c(".search-loading").hide()
        }
        var b = function() {
            window.search_web_search_load.loadend = function() {
                a(search_web_search_load.json, c("#SiteSearchKeyword").val())
            }, a(search_web_search_load.json, g)
        };
        window.search_web_search_load.loadend ? c(b) : window.search_web_search_load.loadend = function() {
            c(b)
        }
    }
    function e(a, b, c, d) {
        return d = "__r+=", a.replace(h, function(b, e, f, g, h) {
            return d += "'" + a.slice(c, h).replace(i, function(a) {
                return "\\" + j[a]
            }) + "'+", e ? d += "((__t=" + e + ")==null?'':$('div').text(__t).text())+" : f ? d += "((__t=" + f + ")==null?'':__t)+" : g && (d += "'';" + g + ";__r+="), c = h + b.length, b
        }), new Function("a", "var __t,__r='';with(a){" + d + "''}return __r")(b || {})
    }
    function f() {
        window.search_web_search_load = function(a) {
            search_web_search_load.json = a, window.search_web_search_load.loadend ? window.search_web_search_load.loadend() : window.search_web_search_load.loadend = function() {}
        }, window.exec_search = function(a) {
            if (!a) return void search_web_search_load();
            c(exec_search.script).remove();
            var b = document.createElement("script");
            b.type = "text/javascript", b.async = "async", b.defer = "defer";
            var d = ({
                ja: "ja-JP",
                en: "en-US",
                kr: "ko-KR"
            }[window.site_lang] || "ja-JP", "site:www.kayac.com");
            "ja" !== window.site_lang && (d += "/" + window.site_lang);
            var e = encodeURIComponent(a);
            b.src = "http://" + location.host + "/api/search/?callback=search_web_search_load&query=" + e;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(b), exec_search.script = b
        }, window.exec_search(decodeURIComponent(location.search.replace(/^\?keyword=/, "")))
    }
    b("kayac.page");
    var g = decodeURIComponent(location.search.replace(/^\?keyword=/, ""));
    if (location.pathname.match(/^\/(en\/)?search/)) {
        if (!g) return c(".search-loading").hide(), void c(".search-no-input").show();
        c(".searchkeyword").val(g), c("#searchTargetKeyword").text(g), f(), d()
    }
    var h = /\[%-(.+?)%\]|\[%=(.+?)%\]|\[%(.+?)%\]|$/g,
        i = /\\|'|\r|\n|\t/g,
        j = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t"
        }
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            full: "1",
            icon: "1",
            pdf: "1",
            len: "5",
            documents_all: "",
            documents_Disclosure: "0,5,6,8,9,13,14,15,24,25,28",
            documents_Fresults: "1,2,3,4,16,17,18,19,20,21",
            documents_Sreport: "99,105,106,107,108,1030,1040,1080,1090,1100,1120,1130,1135,1136,1140,1150,1160,1170,1180,1190,1200,1210,1220,1230,1235,1236,1240,1250,1260,1270,1280,1290,1300,1310,1320,1350,1360",
            documents_Ir: "32,33,34,90,91,92,93,95,96,97,98,101,102,103,104,109,110,111,112,113,114,115,116,117,118,119,120"
        };
        this.settings = c.extend(b, a), this.fdate, this.pdate, this.documents, this.ary_doc_no, this.ary_doc_Disclosure, this.ary_doc_Fresults, this.ary_doc_Sreport, this.ary_doc_Ir, d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        }), this.ary_doc_Disclosure = this.settings.documents_Disclosure.split(","), this.ary_doc_Fresults = this.settings.documents_Fresults.split(","), this.ary_doc_Sreport = this.settings.documents_Sreport.split(","), this.ary_doc_Ir = this.settings.documents_Ir.split(","), "1" == this.settings.full ? this.settings.documents_all = this.settings.documents_Disclosure + "," + this.settings.documents_Fresults + "," + this.settings.documents_Sreport + "," + this.settings.documents_Ir : this.settings.documents_all = this.settings.documents_Sreport + "," + this.settings.documents_Disclosure, this.documents = this.settings.documents_all, this.ary_doc_no = this.settings.documents_all.split(","), this.show()
    }, d.prototype.show = function() {
        var a = this.settings.domain + "/public-list/GetList.aspx?company=",
            b = this;
        a += this.settings.company, this.fdate && this.fdate.length > 0 && (a += "&fdate=" + this.fdate), this.pdate && this.pdate.length > 0 && (a += "&pdate=" + this.pdate), this.documents && this.documents.length > 0 && (a += "&doctype=" + this.documents), a += b.settings.len && b.settings.len > 0 ? "&len=" + b.settings.len : this.pdate && this.pdate.length > 0 || this.fdate && this.fdate.length > 0 ? "&len=10000" : "&len=4", a += "&output=json&callback=?", c.getJSON(a, function(a) {
            var d = "";
            if (a.items) {
                var e = 0;
                c.each(a.items, function(a, f) {
                    if (-1 == b.ary_doc_no.indexOf(f.disclosureCode)) return !0;
                    if (e > 4) return !0;
                    var g = "",
                        h = "",
                        i = "";
                    f.files && c.each(f.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (g = b.url, h = parseInt(b.size), i = b.page)
                    }), h > 0 ? h > 1e3 ? h = parseInt(h / 1e3) + "k" : h > 1e6 && (h = parseInt(h / 1e6) + "m") : h = "－";
                    var j = "",
                        k = ""; - 1 != b.ary_doc_Disclosure.indexOf(f.disclosureCode) ? (j = "icon-discro", k = "適時開示") : -1 != b.ary_doc_Fresults.indexOf(f.disclosureCode) ? (j = "icon-result", k = "決算短信") : -1 != b.ary_doc_Sreport.indexOf(f.disclosureCode) ? (j = "icon-legal", k = "法定開示") : -1 != b.ary_doc_Ir.indexOf(f.disclosureCode) && (j = "icon-ir", k = "IR資料");
                    var l = f.publishDate.split(" ")[0].split("/"),
                        m = l[0] + "." + l[1] + "." + l[2];
                    d += '<dl><dt class="date">' + m + '</dt><dd class="text">', "" != g && "－" != h ? d += '<a href="' + g + '" class="icon-pdf" target="_blank">' : "" != g && (d += '<a href="' + g + '" target="_blank">'), d += f.title, "" != g && "－" != h && (d += "(" + h + "b/" + i + "p)"), "" != g && (d += "</a>"), d += "</dd></dl>"
                }), d += '<div class="clearfix"><div class="btn-more"><a href="/ir/news">続きを見る</a></div></div>'
            } else d += "<p>ただいま掲載すべき事項はございません。</p>";
            c("#xj-mainlist").empty().append(d), setTimeout(function() {
                c("#xj-mainlist").find("> *").addClass("show")
            }, 100)
        })
    }, kayac.ir.XjStorageLoaderIrTop = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            pdf: "1",
            len: "20",
            documents_all: "",
            documents_Disclosure: "0,5,6,8,9,13,14,15,24,25,28",
            documents_Fresults: "1,2,3,4,16,17,18,19,20,21",
            documents_Sreport: "99,105,106,107,108,1030,1040,1080,1090,1100,1120,1130,1135,1136,1140,1150,1160,1170,1180,1190,1200,1210,1220,1230,1235,1236,1240,1250,1260,1270,1280,1290,1300,1310,1320,1350,1360",
            documents_Ir: "32,33,34,90,91,92,93,95,96,97,98,101,102,103,104,109,110,111,112,113,114,115,116,117,118,119,120"
        };
        this.settings = c.extend(b, a), this.fdate, this.pdate, this.documents, this.select_latest = "", this.select_oldest = "", this.ary_doc_no, this.ary_doc_Disclosure, this.ary_doc_Fresults, this.ary_doc_Sreport, this.ary_doc_Ir, d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        }), this.ary_doc_Disclosure = this.settings.documents_Disclosure.split(","), this.ary_doc_Fresults = this.settings.documents_Fresults.split(","), this.ary_doc_Sreport = this.settings.documents_Sreport.split(","), this.ary_doc_Ir = this.settings.documents_Ir.split(","), this.settings.documents_all = this.settings.documents_Disclosure + "," + this.settings.documents_Fresults + "," + this.settings.documents_Sreport + "," + this.settings.documents_Ir, this.documents = this.settings.documents_all, this.ary_doc_no = this.documents.split(","), this.setMaxMinYear(this.documents)
    }, d.prototype.setMaxMinYear = function(a) {
        var b = this,
            d = "";
        d += b.settings.domain + "/public-list/GetList.aspx?company=", d += b.settings.company, d += "&len=10000", d += "&output=json&callback=?", c.ajax({
            url: d,
            dataType: "json",
            success: function(a) {
                void 0 != a.items && (c.each(a.items, function(a, c) {
                    if (-1 == b.ary_doc_no.indexOf(c.disclosureCode)) return !0;
                    var d = c.publishDate.split(" ")[0].split("/"),
                        e = d[0];
                    "" === b.select_latest && (b.select_latest = e), ("" === b.select_oldest || b.select_latest >= e) && (b.select_oldest = e)
                }), b.active_select = b.select_latest)
            },
            complete: function() {
                b.setDateButton(), b.setDocumentButton(), b.show()
            }
        })
    }, d.prototype.setDateButton = function() {
        function a(a, e) {
            a.append('<a href="#" class="item-text">' + e + "年</a>").click(function(a) {
                a.preventDefault(), a.stopPropagation(), c(".article-ir-news .xj-select-year .active").removeClass("active"), c(this).addClass("active"), b(c(this).text()), d.setDuration(e + "1231", e + "0101")
            })
        }
        function b(a) {
            c(".article-ir-news .ir-news-toolbar").find(".ir-year-select .select-title").text(a)
        }
        for (var d = this, e = c('<ul class="option-list"></ul>'), f = d.select_latest; f >= d.select_oldest; f--) {
            if (f == d.active_select) var g = c('<li class="option-item"></li>');
            else var g = c('<li class="option-item"></li>');
            e.append(g), a(g, f)
        }
        c(".article-ir-news .xj-select-year").append(e), b(c(".article-ir-news .xj-select-year").find(".option-item").eq(0).text())
    }, d.prototype.setDocumentButton = function() {
        function a(a) {
            c(".article-ir-news .ir-news-toolbar").find(".ir-category-select .select-title").text(a)
        }
        var b = this,
            d = c('<ul class="option-list"></ul>');
        d.append(c('<li class="option-item active"></li>').click(function() {
            b.setDocument(b.settings.documents_all)
        }).append('<a class="item-text active" href="#" >全て</a>')), d.append(c('<li class="option-item"></li>').click(function() {
            b.setDocument(b.settings.documents_Disclosure)
        }).append('<a href="#" class="item-text">適時開示</a>')), d.append(c('<li class="option-item"></li>').click(function() {
            b.setDocument(b.settings.documents_Fresults)
        }).append('<a href="#" class="item-text">決算短信</a>')), d.append(c('<li class="option-item"></li>').click(function() {
            b.setDocument(b.settings.documents_Sreport)
        }).append('<a href="#" class="item-text">法定開示</a>')), d.append(c('<li class="option-item"></li>').click(function() {
            b.setDocument(b.settings.documents_Ir)
        }).append('<a href="#" class="item-text">IR資料</a>')), c(".article-ir-news .xj-select-category").append(d), a(c(".article-ir-news .xj-select-category").find(".option-item").eq(0).text()), c(".article-ir-news .xj-select-category").on("click", "li a", function(b) {
            b.preventDefault(), c(".article-ir-news .xj-select-category li.active").removeClass("active"), c(this).addClass("active"), a(c(this).text())
        })
    }, d.prototype.setDuration = function(a, b) {
        this.fdate = a, this.pdate = b, this.show()
    }, d.prototype.setDocument = function(a) {
        this.documents = a, this.show()
    }, d.prototype.show = function() {
        var a = this,
            b = this.settings.domain + "/public-list/GetList.aspx?company=";
        b += this.settings.company, this.fdate && this.fdate.length > 0 && (b += "&fdate=" + this.fdate), this.pdate && this.pdate.length > 0 && (b += "&pdate=" + this.pdate), b += this.pdate && this.pdate.length > 0 || this.fdate && this.fdate.length > 0 ? "&len=10000" : "&len=" + a.settings.len, this.documents && this.documents.length > 0 && (b += "&doctype=" + this.documents), b += "&output=json&callback=?", c.getJSON(b, function(b) {
            var d = "";
            b.items ? c.each(b.items, function(b, e) {
                var f = "",
                    g = "",
                    h = "";
                e.files && c.each(e.files, function(a, b) {
                    "PDF-GENERAL" == b.type && (f = b.url, g = parseInt(b.size), h = b.page)
                }), g > 0 ? g > 1e3 ? g = parseInt(g / 1e3) + "k" : g > 1e6 && (g = parseInt(g / 1e6) + "m") : g = "－";
                var i = "",
                    j = ""; - 1 != a.ary_doc_Disclosure.indexOf(e.disclosureCode) ? (i = "icon-discro", j = "適時開示") : -1 != a.ary_doc_Fresults.indexOf(e.disclosureCode) ? (i = "icon-result", j = "決算短信") : -1 != a.ary_doc_Sreport.indexOf(e.disclosureCode) ? (i = "icon-legal", j = "法定開示") : -1 != a.ary_doc_Ir.indexOf(e.disclosureCode) && (i = "icon-ir", j = "IR資料");
                var k = e.publishDate.split(" ")[0].split("/"),
                    l = k[0] + "." + k[1] + "." + k[2];
                d += '<dl><dt class="date date-label">' + l, d += '<span class="label ' + i + '">' + j + "</span>", d += "</dt>", d += '<dd class="text">', "" != f && "－" != g ? d += '<a href="' + f + '" class="icon-pdf" target="_blank">' : "" != f && (d += '<a href="' + f + '" target="_blank">'), d += e.title, "" != f && "－" != g && (d += "(" + g + "b/" + h + "p)"), "" != f && (d += "</a>"), d += "</dd></dl>"
            }) : d += "<p>ただいま掲載すべき事項はございません。</p>", c("#xj-mainlist-news").html(d)
        })
    }, kayac.ir.XjStorageLoaderNews = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            documents_koukoku: "94,100",
            display_id_koukoku: "xj-mainlist-koukoku"
        };
        this.settings = c.extend(b, a), this.xjlist_koukoku = [], d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a, b = this;
        this.xjlist_koukoku.length = 0, a = this.createUrl(b.settings.documents_koukoku), this.prepareList(b.xjlist_koukoku, a, b.settings.display_id_koukoku)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&filetype=PDF-GENERAL", b += "&output=json&callback=?"
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b, d) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var e = {};
                    d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (e.url = b.url, e.size = parseInt(b.size), e.page = b.page)
                    }), e.size > 0 ? e.size > 1e3 ? e.size = parseInt(e.size / 1e3) + "k" : e.size > 1e6 && (e.size = parseInt(e.size / 1e6) + "m") : e.size = "－", e.page > 0 ? e.page = e.page : e.page = "－", e.title = d.title, e.date = d.publishDate.split(" ")[0].split("/"), e.date_format = e.date[0] + "." + e.date[1] + "." + e.date[2], a.push(e)
                })
            },
            complete: function(b, c) {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "",
            f = "";
        c("#" + b).empty();
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            d.active_select === h.fiscalyear && (f += "<dl>", f += '<dt class="date">' + h.date_format + "</dt>", f += '<dd class="text">', "" != h.url && "－" != h.size ? (f += '<img width="16" height="16" border="0" align="absmiddle" alt="' + h.title + '" src="../images/icon_pdf.gif">(' + h.page + "P/" + h.size + "B)", f += '<a href="' + h.url + '" class="icon-pdf" target="_blank">') : "" != h.url && (f += '<a href="' + h.url + '" target="_blank">'), f += h.title, "" != h.url && "－" != h.size && (f += "(" + h.size + "b/" + h.page + "p)"), "" != h.url && (f += "</a>"), f += "</dd>", f += "</dl>")
        }
        e += "" !== f ? f : '<p class="empty">ただいま掲載すべき公告事項はございません。</p>', c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibraryKoukoku = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            documents_Fresults: "1,2,3,4,16,17,18,19,20,21",
            documents_setumei: "13,98",
            documents_Sreport: "99,105,106,107,108,1030,1040,1080,1090,1100,1120,1130,1135,1136,1140,1150,1160,1170,1180,1190,1200,1210,1220,1230,1235,1236,1240,1250,1260,1270,1280,1290,1300,1310,1320,1350,1360",
            documents_Areport: "96,101,102,103,104",
            documents_Meeting: "34,91",
            documents_Other: "32,33,90,92,93,95,97,109,110,111,112,113,114,115,116,117,118,119,120",
            documents_Disclosure: "0,5,6,8,9,14,15,24,25,28",
            display_id_Fresults: "xj-mainlist-Fresults",
            display_id_setumei: "xj-mainlist-setumei",
            display_id_Sreport: "xj-mainlist-Sreport",
            display_id_Areport: "xj-mainlist-Areport",
            display_id_Meeting: "xj-mainlist-Meeting",
            display_id_Other: "xj-mainlist-Other",
            display_id_Disclosure: "xj-mainlist-Disclosure"
        };
        this.settings = c.extend(b, a), this.xjlist_Fresults = [], this.xjlist_setumei = [], this.xjlist_Sreport = [], this.xjlist_Areport = [], this.xjlist_Meeting = [], this.xjlist_Other = [], this.xjlist_Disclosure = [], d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a, b = this;
        this.xjlist_Fresults.length = 0, a = this.createUrl(b.settings.documents_Fresults), this.prepareList(b.xjlist_Fresults, a, b.settings.display_id_Fresults), this.xjlist_setumei.length = 0, a = this.createUrl(b.settings.documents_setumei), this.prepareList(b.xjlist_setumei, a, b.settings.display_id_setumei), this.xjlist_Sreport.length = 0, a = this.createUrl(b.settings.documents_Sreport), this.prepareList(b.xjlist_Sreport, a, b.settings.display_id_Sreport), this.xjlist_Areport.length = 0, a = this.createUrl(b.settings.documents_Areport), this.prepareList(b.xjlist_Areport, a, b.settings.display_id_Areport), this.xjlist_Meeting.length = 0, a = this.createUrl(b.settings.documents_Meeting), this.prepareList(b.xjlist_Meeting, a, b.settings.display_id_Meeting), this.xjlist_Other.length = 0, a = this.createUrl(b.settings.documents_Other), this.prepareList(b.xjlist_Other, a, b.settings.display_id_Other), this.xjlist_Disclosure.length = 0, a = this.createUrl(b.settings.documents_Disclosure), this.prepareList(b.xjlist_Disclosure, a, b.settings.display_id_Disclosure)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&filetype=PDF-GENERAL", b += "&output=json&callback=?"
    }, d.prototype.spaceTrim = function(a) {
        return a.replace(/[ 　\t\r\n]+/g, "")
    }, d.prototype.zen2han = function(a) {
        return a.replace(/[０-ｚ]/g, function(a) {
            return String.fromCharCode(parseInt(a.charCodeAt(0)) - 65248)
        })
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b, d) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var e = {};
                    d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (e.url = b.url, e.size = parseInt(b.size), e.page = b.page)
                    }), e.size > 0 ? e.size > 1e3 ? e.size = parseInt(e.size / 1e3) + "k" : e.size > 1e6 && (e.size = parseInt(e.size / 1e6) + "m") : e.size = "－", e.page > 0 ? e.page = e.page : e.page = "－", e.title = d.title, e.date = d.publishDate.split(" ")[0].split("/"), e.date_format = e.date[0] + "." + e.date[1] + "." + e.date[2], a.push(e)
                })
            },
            complete: function(b, c) {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "";
        c("#" + b).empty(), e += "";
        for (var f = 0; f < a.length && !(f > 3); f++) {
            var g = a[f];
            e += "<dl>", e += '<dt class="date">' + g.date_format + "</dt>", e += '<dd class="text">', "" != g.url && "－" != g.size ? e += '<a href="' + g.url + '" class="icon-pdf" target="_blank">' : "" != g.url && (e += '<a href="' + g.url + '" target="_blank">'), e += g.title, "" != g.url && "－" != g.size && (e += "(" + g.size + "b/" + g.page + "p)"), "" != g.url && (e += "</a>"), e += "</dd>", e += "</dl>"
        }
        if ("" == e) e += '<p class="no-data">ただいま掲載すべき事項はございません。</p>';
        else {
            var h;
            switch (b) {
                case d.settings.display_id_Fresults:
                    h = "tanshin";
                    break;
                case d.settings.display_id_setumei:
                    h = "presentation";
                    break;
                case d.settings.display_id_Sreport:
                    h = "yuho";
                    break;
                case d.settings.display_id_Areport:
                    h = "kabutsu";
                    break;
                case d.settings.display_id_Meeting:
                    h = "soukai";
                    break;
                case d.settings.display_id_Other:
                    h = "others";
                    break;
                case d.settings.display_id_Disclosure:
                    h = "kaiji";
                    break;
                default:
                    h = ""
            }
            e += '<div class="clearfix"><div class="btn-more"><a href="/ir/library/' + h + '">続きを見る</a></div></div>'
        }
        c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibrary = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            code_kessan: "1,2,3,4,16,17,18,19,20,21",
            display_id_kessan: "xj-mainlist-Fresults"
        };
        this.settings = c.extend(b, a), this.xjlist_kessan = [], this.select_latest = "", this.select_oldest = "", this.active_select = "", d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a = this,
            b = a.settings.code_kessan,
            d = a.createUrl(b);
        a.setMaxMinYear(d)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&output=json&callback=?"
    }, d.prototype.setMaxMinYear = function(a) {
        var b = this;
        c.ajax({
            url: a,
            dataType: "json",
            success: function(a) {
                a.items && c.each(a.items, function(a, c) {
                    var d = b.getFiscalYear(c.title);
                    if ("" == d) {
                        var e = c.publishDate.split(" ")[0].split("/");
                        d = parseInt(e[0])
                    }
                    "" === b.select_latest && (b.select_latest = d), ("" === b.select_oldest || b.select_oldest >= d) && (b.select_oldest = d)
                })
            },
            complete: function() {
                b.setDateButton()
            }
        })
    }, d.prototype.setDateButton = function() {
        function a(a, e) {
            a.append('<a href="#" class="item-text">' + e + "年12月期</a>").click(function(a) {
                a.preventDefault(), a.stopPropagation(), c(".article-ir-library-tanshin .xj-select-year .active").removeClass("active"), c(this).addClass("active"), d.setDuration(e), b(c(this).text())
            })
        }
        function b(a) {
            c(".article-ir-library-tanshin .ir-news-toolbar").find(".ir-year-select .select-title").text(a)
        }
        var d = this;
        d.active_select = d.select_latest;
        var e = c('<ul class="option-list"></ul>');
        if ("" != d.select_latest) for (var f = d.select_latest, g = 0; f >= d.select_oldest; f--, g++) {
            if (f == d.active_select) var h = c('<li class="option-item active" ></li>');
            else var h = c('<li class="option-item" ></li>');
            e.append(h), a(h, f)
        }
        c(".article-ir-library-tanshin .xj-select-year").append(e), b(e.find(".option-item .item-text").eq(0).text()), d.setDuration(d.active_select)
    }, d.prototype.getFiscalYear = function(a) {
        var b, c, d = this;
        a = d.spaceTrim(a);
        var e, f = /平成([0-9０-９]{2})年([1-2１-２]{2})月期/,
            g = /([0-9０-９]{4})年([1-2１-２]{2})月期/;
        return null !== (c = f.exec(a)) ? (e = Number(d.zen2han(c[1])), b = d.heiseiToSeireki(e)) : null !== (c = g.exec(a)) && (e = Number(d.zen2han(c[1])), b = e), b
    }, d.prototype.setDuration = function(a) {
        var b = this;
        b.active_select = a, this.xjlist_kessan.length = 0;
        var c = b.createUrl(b.settings.code_kessan);
        b.prepareList(b.xjlist_kessan, c, b.settings.display_id_kessan)
    }, d.prototype.spaceTrim = function(a) {
        return a.replace(/[ 　\t\r\n]+/g, "")
    }, d.prototype.zen2han = function(a) {
        return a.replace(/[０-ｚ]/g, function(a) {
            return String.fromCharCode(parseInt(a.charCodeAt(0)) - 65248)
        })
    }, d.prototype.heiseiToSeireki = function(a) {
        return a > 0 && 99 > a ? 1988 + a : void 0
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var f = {};
                    if (d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (f.url = b.url, f.size = parseInt(b.size), f.page = b.page)
                    }), f.size > 0 ? f.size > 1e3 ? f.size = parseInt(f.size / 1e3) + "k" : f.size > 1e6 && (f.size = parseInt(f.size / 1e6) + "m") : f.size = "－", f.page > 0 ? f.page = f.page : f.page = "－", f.title = d.title, f.fiscalyear = e.getFiscalYear(d.title), "" == f.fiscalyear) {
                        var g = d.publishDate.split(" ")[0].split("/");
                        f.fiscalyear = parseInt(g[0])
                    }
                    f.date = d.publishDate.split(" ")[0].split("/"), f.date_format = f.date[0] + "." + f.date[1] + "." + f.date[2], a.push(f)
                })
            },
            complete: function() {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "",
            f = "";
        c("#" + b).empty();
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            d.active_select === h.fiscalyear && (f += "<dl>", f += '<dt class="date">' + h.date_format + "</dt>", f += '<dd class="text">', "" != h.url && "－" != h.size ? f += '<a href="' + h.url + '" class="icon-pdf" target="_blank">' : "" != h.url && (f += '<a href="' + h.url + '" target="_blank">'), f += h.title, "" != h.url && "－" != h.size && (f += "(" + h.size + "b/" + h.page + "p)"), "" != h.url && (f += "</a>"), f += "</dd>", f += "</dl>")
        }
        e += "" !== f ? f : '<p class="empty">ただいま掲載すべき事項はございません。</p>', c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibraryTanshin = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            code_setumei: "13,98",
            display_id_kessan: "xj-mainlist-setumei"
        };
        this.settings = c.extend(b, a), this.xjlist_kessan = [], this.select_latest = "", this.select_oldest = "", this.active_select = "", d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a = this,
            b = a.settings.code_setumei,
            d = a.createUrl(b);
        a.setMaxMinYear(d)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&output=json&callback=?"
    }, d.prototype.setMaxMinYear = function(a) {
        var b = this;
        c.ajax({
            url: a,
            dataType: "json",
            success: function(a) {
                a.items && c.each(a.items, function(a, c) {
                    var d = b.getFiscalYear(c.title);
                    if ("" == d) {
                        var e = c.publishDate.split(" ")[0].split("/");
                        d = parseInt(e[0])
                    }
                    "" === b.select_latest && (b.select_latest = d), ("" === b.select_oldest || b.select_oldest >= d) && (b.select_oldest = d)
                })
            },
            complete: function() {
                b.setDateButton()
            }
        })
    }, d.prototype.setDateButton = function() {
        function a(a, e) {
            a.append('<a href="#" class="item-text">' + e + "年12月期</a>").click(function(a) {
                a.preventDefault(), a.stopPropagation(), c(".article-ir-library-presentation .xj-select-year .active").removeClass("active"), c(this).addClass("active"), d.setDuration(e), b(c(this).text())
            })
        }
        function b(a) {
            c(".article-ir-library-presentation .ir-news-toolbar").find(".ir-year-select .select-title").text(a)
        }
        var d = this;
        d.active_select = d.select_latest;
        var e = c('<ul class="option-list"></ul>');
        if ("" != d.select_latest) for (var f = d.select_latest, g = 0; f >= d.select_oldest; f--,
        g++) {
            if (f == d.active_select) var h = c('<li class="option-item active" ></li>');
            else var h = c('<li class="option-item" ></li>');
            e.append(h), a(h, f)
        }
        c(".article-ir-library-presentation .xj-select-year").append(e), b(e.find(".option-item .item-text").eq(0).text()), d.setDuration(d.active_select)
    }, d.prototype.getFiscalYear = function(a) {
        var b, c = this,
            d = "";
        a = c.spaceTrim(a);
        var e, f = /平成([0-9０-９]{2})年([1-2１-２]{2})月期/,
            g = /([0-9０-９]{4})年([1-2１-２]{2})月期/;
        return null !== (b = f.exec(a)) ? (e = Number(c.zen2han(b[1])), d = c.heiseiToSeireki(e)) : null !== (b = g.exec(a)) && (e = Number(c.zen2han(b[1])), d = e), d
    }, d.prototype.setDuration = function(a) {
        var b = this;
        b.active_select = a, this.xjlist_kessan.length = 0;
        var c = b.createUrl(b.settings.code_setumei);
        b.prepareList(b.xjlist_kessan, c, b.settings.display_id_kessan)
    }, d.prototype.spaceTrim = function(a) {
        return a.replace(/[ 　\t\r\n]+/g, "")
    }, d.prototype.zen2han = function(a) {
        return a.replace(/[０-ｚ]/g, function(a) {
            return String.fromCharCode(parseInt(a.charCodeAt(0)) - 65248)
        })
    }, d.prototype.heiseiToSeireki = function(a) {
        return a > 0 && 99 > a ? 1988 + a : void 0
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var f = {};
                    if (d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (f.url = b.url, f.size = parseInt(b.size), f.page = b.page)
                    }), f.size > 0 ? f.size > 1e3 ? f.size = parseInt(f.size / 1e3) + "k" : f.size > 1e6 && (f.size = parseInt(f.size / 1e6) + "m") : f.size = "－", f.page > 0 ? f.page = f.page : f.page = "－", f.title = d.title, f.fiscalyear = e.getFiscalYear(d.title), "" == f.fiscalyear) {
                        var g = d.publishDate.split(" ")[0].split("/");
                        f.fiscalyear = parseInt(g[0])
                    }
                    f.date = d.publishDate.split(" ")[0].split("/"), f.date_format = f.date[0] + "." + f.date[1] + "." + f.date[2], a.push(f)
                })
            },
            complete: function() {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "",
            f = "";
        c("#" + b).empty();
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            d.active_select === h.fiscalyear && (f += "<dl>", f += '<dt class="date">' + h.date_format + "</dt>", f += '<dd class="text">', "" != h.url && "－" != h.size ? f += '<a href="' + h.url + '" class="icon-pdf" target="_blank">' : "" != h.url && (f += '<a href="' + h.url + '" target="_blank">'), f += h.title, "" != h.url && "－" != h.size && (f += "(" + h.size + "b/" + h.page + "p)"), "" != h.url && (f += "</a>"), f += "</dd>", f += "</dl>")
        }
        e += "" !== f ? f : '<p class="empty">ただいま掲載すべき事項はございません。</p>', c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibrarySetumei = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            code_yuka: "99,105,106,107,108,1120,1130,1140,1150,1160,1170",
            code_other: "1030,1040,1080,1090,1100,1135,1136,1180,1190,1200,1210,1220,1230,1235,1236,1240,1250,1260,1270,1280,1290,1300,1310,1320,1350,1360",
            display_id_yuka: "xj-mainlist-yuka",
            display_id_other: "xj-mainlist-other"
        };
        this.settings = c.extend(b, a), this.xjlist_yuka = [], this.xjlist_other = [], this.select_latest = "", this.select_oldest = "", this.active_select = "", d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a = this,
            b = a.settings.code_yuka + "," + a.settings.code_other,
            d = a.createUrl(b);
        a.setMaxMinYear(d)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&output=json&callback=?"
    }, d.prototype.setMaxMinYear = function(a) {
        var b = this;
        c.ajax({
            url: a,
            dataType: "json",
            success: function(a) {
                c.each(a.items, function(a, c) {
                    var d = b.getFiscalYear(c.title);
                    if ("" == d) {
                        var e = c.publishDate.split(" ")[0].split("/");
                        d = parseInt(e[0])
                    }("" === b.select_latest || b.select_latest < d) && (b.select_latest = d), "" !== d && ("" === b.select_oldest || b.select_oldest >= d) && (b.select_oldest = d)
                })
            },
            complete: function() {
                b.setDateButton()
            }
        })
    }, d.prototype.setDateButton = function() {
        function a(a, e) {
            a.append('<a href="#" class="item-text">' + e + "年12月期</a>").click(function(a) {
                a.preventDefault(), a.stopPropagation(), c(".article-ir-library-yuho .xj-select-year .active").removeClass("active"), c(this).addClass("active"), d.setDuration(e), b(c(this).text())
            })
        }
        function b(a) {
            c(".article-ir-library-yuho .ir-news-toolbar").find(".ir-year-select .select-title").text(a)
        }
        var d = this;
        d.active_select = d.select_latest;
        for (var e = c('<ul class="option-list"></ul>'), f = d.select_latest; f >= d.select_oldest; f--) {
            if (f == d.active_select) var g = c('<li class="option-item active" ></li>');
            else var g = c('<li class="option-item" ></li>');
            e.append(g), a(g, f)
        }
        c(".article-ir-library-yuho .xj-select-year").append(e), b(e.find(".option-item .item-text").eq(0).text()), d.setDuration(d.active_select)
    }, d.prototype.getFiscalYear = function(a) {
        var b, c = this,
            d = "";
        a = c.spaceTrim(a);
        var e = /第([0-9０-９]{1,2})期/;
        return null !== (b = e.exec(a)) && (d = Number(c.zen2han(b[1])), d += 2004), d
    }, d.prototype.setDuration = function(a) {
        var b = this;
        b.active_select = a, this.xjlist_yuka.length = 0, this.xjlist_other.length = 0;
        var c = b.createUrl(b.settings.code_yuka);
        b.prepareList(b.xjlist_yuka, c, b.settings.display_id_yuka);
        var d = b.createUrl(b.settings.code_other);
        b.prepareList(b.xjlist_other, d, b.settings.display_id_other)
    }, d.prototype.spaceTrim = function(a) {
        return a.replace(/[ 　\t\r\n]+/g, "")
    }, d.prototype.zen2han = function(a) {
        return a.replace(/[０-ｚ]/g, function(a) {
            return String.fromCharCode(parseInt(a.charCodeAt(0)) - 65248)
        })
    }, d.prototype.heiseiToSeireki = function(a) {
        return a > 0 && 99 > a ? 1988 + a : void 0
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var f = {};
                    if (d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (f.url = b.url, f.size = parseInt(b.size), f.page = b.page)
                    }), f.size > 0 ? f.size > 1e3 ? f.size = parseInt(f.size / 1e3) + "k" : f.size > 1e6 && (f.size = parseInt(f.size / 1e6) + "m") : f.size = "－", f.page > 0 ? f.page = f.page : f.page = "－", f.title = d.title, f.fiscalyear = e.getFiscalYear(d.title), "" == f.fiscalyear) {
                        var g = d.publishDate.split(" ")[0].split("/");
                        f.fiscalyear = parseInt(g[0])
                    }
                    f.date = d.publishDate.split(" ")[0].split("/"), f.date_format = f.date[0] + "." + f.date[1] + "." + f.date[2], a.push(f)
                })
            },
            complete: function() {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "",
            f = "";
        c("#" + b).empty();
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            d.active_select === h.fiscalyear && (f += "<dl>", f += '<dt class="date">' + h.date_format + "</dt>", f += '<dd class="text">', "" != h.url && "－" != h.size ? f += '<a href="' + h.url + '" class="icon-pdf" target="_blank">' : "" != h.url && (f += '<a href="' + h.url + '" target="_blank">'), f += h.title, "" != h.url && "－" != h.size && (f += "(" + h.size + "b/" + h.page + "p)"), "" != h.url && (f += "</a>"), f += "</dd>", f += "</dl>")
        }
        e += "" !== f ? f : '<p class="empty">ただいま掲載すべき事項はございません。</p>', c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibraryYuka = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            code_Areport: "96,101,102,103,104",
            display_id_Areport: "xj-mainlist-Areport"
        };
        this.settings = c.extend(b, a), this.xjlist_Areport = [], this.select_latest = "", this.select_oldest = "", this.active_select = "", d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a = this,
            b = a.settings.code_Areport,
            d = a.createUrl(b);
        a.setMaxMinYear(d)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&output=json&callback=?"
    }, d.prototype.setMaxMinYear = function(a) {
        var b = this;
        c.ajax({
            url: a,
            dataType: "json",
            success: function(a) {
                a.items && c.each(a.items, function(a, c) {
                    var d = b.getFiscalYear(c.title);
                    if ("" == d) {
                        var e = c.publishDate.split(" ")[0].split("/");
                        d = 4 <= parseInt(e[1]) ? parseInt(e[0]) : parseInt(e[0]) - 1
                    }("" === b.select_latest || b.select_latest < d) && (b.select_latest = d), "" !== d && ("" === b.select_oldest || b.select_oldest >= d) && (b.select_oldest = d)
                })
            },
            complete: function() {
                b.setDateButton()
            }
        })
    }, d.prototype.setDateButton = function() {
        function a(a, e) {
            a.append('<a href="#" class="item-text">' + e + "年12月期</a>").click(function(a) {
                a.preventDefault(), a.stopPropagation(), c(".article-ir-library-kabutsu .xj-select-year .active").removeClass("active"), c(this).addClass("active"), d.setDuration(e), b(c(this).text())
            })
        }
        function b(a) {
            c(".article-ir-library-kabutsu .ir-news-toolbar").find(".ir-year-select .select-title").text(a)
        }
        var d = this;
        d.active_select = d.select_latest;
        for (var e = c('<ul class="option-list"></ul>'), f = d.select_latest; f >= d.select_oldest; f--) {
            if (f == d.active_select) var g = c('<li class="option-item active" ></li>');
            else var g = c('<li class="option-item" ></li>');
            e.append(g), a(g, f)
        }
        c(".article-ir-library-kabutsu .xj-select-year").append(e), b(e.find(".option-item .item-text").eq(0).text()), d.setDuration(d.active_select)
    }, d.prototype.getFiscalYear = function(a) {
        var b, c, d = this;
        a = d.spaceTrim(a);
        var e, f = /平成([0-9０-９]{2})年([1-2１-２]{2})月期/,
            g = /([0-9０-９]{4})年([1-2１-２]{2})月期/;
        if (null !== (c = f.exec(a))) e = Number(d.zen2han(c[1])), b = d.heiseiToSeireki(e);
        else if (null !== (c = g.exec(a))) e = Number(d.zen2han(c[1])), b = e;
        else {
            var f = /第([0-9０-９]{1,2})期/,
                g = /第([0-9０-９]{1,2})回/;
            null !== (c = f.exec(a)) ? (b = Number(d.zen2han(c[1])), b += 2004) : null !== (c = g.exec(a)) && (b = Number(d.zen2han(c[1])), b += 2004)
        }
        return b
    }, d.prototype.setDuration = function(a) {
        var b = this;
        b.active_select = a, this.xjlist_Areport.length = 0;
        var c = b.createUrl(b.settings.code_Areport);
        b.prepareList(b.xjlist_Areport, c, b.settings.display_id_Areport)
    }, d.prototype.spaceTrim = function(a) {
        return a.replace(/[ 　\t\r\n]+/g, "")
    }, d.prototype.zen2han = function(a) {
        return a.replace(/[０-ｚ]/g, function(a) {
            return String.fromCharCode(parseInt(a.charCodeAt(0)) - 65248)
        })
    }, d.prototype.heiseiToSeireki = function(a) {
        return a > 0 && 99 > a ? 1988 + a : void 0
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var f = {};
                    if (d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (f.url = b.url, f.size = parseInt(b.size), f.page = b.page)
                    }), f.size > 0 ? f.size > 1e3 ? f.size = parseInt(f.size / 1e3) + "k" : f.size > 1e6 && (f.size = parseInt(f.size / 1e6) + "m") : f.size = "－", f.page > 0 ? f.page = f.page : f.page = "－", f.title = d.title, f.fiscalyear = e.getFiscalYear(d.title), "" == f.fiscalyear) {
                        var g = d.publishDate.split(" ")[0].split("/");
                        4 <= parseInt(g[1]) ? f.fiscalyear = parseInt(g[0]) : f.fiscalyear = parseInt(g[0]) - 1
                    }
                    f.date = d.publishDate.split(" ")[0].split("/"), f.date_format = f.date[0] + "." + f.date[1] + "." + f.date[2], a.push(f)
                })
            },
            complete: function() {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "",
            f = "";
        c("#" + b).empty();
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            d.active_select === h.fiscalyear && (f += "<dl>", f += '<dt class="date">' + h.date_format + "</dt>", f += '<dd class="text">', "" != h.url && "－" != h.size ? f += '<a href="' + h.url + '" class="icon-pdf" target="_blank">' : "" != h.url && (f += '<a href="' + h.url + '" target="_blank">'), f += h.title, "" != h.url && "－" != h.size && (f += "(" + h.size + "b/" + h.page + "p)"), "" != h.url && (f += "</a>"), f += "</dd>", f += "</dl>")
        }
        e += "" !== f ? f : '<p class="empty">ただいま掲載すべき事項はございません。</p>', c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibraryReport = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            code_Meeting: "34,91",
            display_id_Meeting: "xj-mainlist-Meeting"
        };
        this.settings = c.extend(b, a), this.xjlist_Meeting = [], this.select_latest = "", this.select_oldest = "", this.active_select = "", d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a = this,
            b = a.settings.code_Meeting,
            d = a.createUrl(b);
        a.setMaxMinYear(d)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&output=json&callback=?"
    }, d.prototype.setMaxMinYear = function(a) {
        var b = this;
        c.ajax({
            url: a,
            dataType: "json",
            success: function(a) {
                c.each(a.items, function(a, c) {
                    var d = b.getFiscalYear(c.title);
                    if ("" == d) {
                        var e = c.publishDate.split(" ")[0].split("/");
                        d = 4 <= parseInt(e[1]) ? parseInt(e[0]) : parseInt(e[0]) - 1
                    }("" === b.select_latest || b.select_latest < d) && (b.select_latest = d), "" !== d && ("" === b.select_oldest || b.select_oldest >= d) && (b.select_oldest = d)
                })
            },
            complete: function() {
                b.setDateButton()
            }
        })
    }, d.prototype.setDateButton = function() {
        function a(a, e) {
            a.append('<a href="#" class="item-text">' + e + "年12月期</a>").click(function(a) {
                a.preventDefault(), a.stopPropagation(), c(".article-ir-library-soukai .xj-select-year .active").removeClass("active"), c(this).addClass("active"), d.setDuration(e), b(c(this).text())
            })
        }
        function b(a) {
            c(".article-ir-library-soukai .ir-news-toolbar").find(".ir-year-select .select-title").text(a)
        }
        var d = this;
        d.active_select = d.select_latest;
        for (var e = c('<ul class="option-list"></ul>'), f = d.select_latest; f >= d.select_oldest; f--) {
            if (f == d.active_select) var g = c('<li class="option-item active" ></li>');
            else var g = c('<li class="option-item" ></li>');
            e.append(g), a(g, f)
        }
        e.find("> li").length ? (c(".article-ir-library-soukai .xj-select-year").append(e), b(e.find(".option-item .item-text").eq(0).text())) : c("#HorizontalToolbar").hide(), d.setDuration(d.active_select)
    }, d.prototype.getFiscalYear = function(a) {
        var b, c = this,
            d = "";
        a = c.spaceTrim(a);
        var e, f = /平成([0-9０-９]{2})年([1-2１-２]{2})月期/,
            g = /([0-9０-９]{4})年([1-2１-２]{2})月期/;
        if (null !== (b = f.exec(a))) e = Number(c.zen2han(b[1])), d = c.heiseiToSeireki(e);
        else if (null !== (b = g.exec(a))) e = Number(c.zen2han(b[1])), d = e;
        else {
            var f = /第([0-9０-９]{1,2})期/,
                g = /第([0-9０-９]{1,2})回/;
            null !== (b = f.exec(a)) ? (d = Number(c.zen2han(b[1])), d += 2004) : null !== (b = g.exec(a)) && (d = Number(c.zen2han(b[1])), d += 2004)
        }
        return d
    }, d.prototype.setDuration = function(a) {
        var b = this;
        b.active_select = a, this.xjlist_Meeting.length = 0;
        var c = b.createUrl(b.settings.code_Meeting);
        b.prepareList(b.xjlist_Meeting, c, b.settings.display_id_Meeting)
    }, d.prototype.spaceTrim = function(a) {
        return a.replace(/[ 　\t\r\n]+/g, "")
    }, d.prototype.zen2han = function(a) {
        return a.replace(/[０-ｚ]/g, function(a) {
            return String.fromCharCode(parseInt(a.charCodeAt(0)) - 65248)
        })
    }, d.prototype.heiseiToSeireki = function(a) {
        return a > 0 && 99 > a ? 1988 + a : void 0
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var f = {};
                    if (d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (f.url = b.url, f.size = parseInt(b.size), f.page = b.page)
                    }), f.size > 0 ? f.size > 1e3 ? f.size = parseInt(f.size / 1e3) + "k" : f.size > 1e6 && (f.size = parseInt(f.size / 1e6) + "m") : f.size = "－", f.page > 0 ? f.page = f.page : f.page = "－", f.title = d.title, f.fiscalyear = e.getFiscalYear(d.title), "" == f.fiscalyear) {
                        var g = d.publishDate.split(" ")[0].split("/");
                        4 <= parseInt(g[1]) ? f.fiscalyear = parseInt(g[0]) : f.fiscalyear = parseInt(g[0]) - 1
                    }
                    f.date = d.publishDate.split(" ")[0].split("/"), f.date_format = f.date[0] + "." + f.date[1] + "." + f.date[2], a.push(f)
                })
            },
            complete: function() {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "",
            f = "";
        c("#" + b).empty();
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            d.active_select === h.fiscalyear && (f += "<dl>", f += '<dt class="date">' + h.date_format + "</dt>", f += '<dd class="text">', "" != h.url && "－" != h.size ? f += '<a href="' + h.url + '" class="icon-pdf" target="_blank">' : "" != h.url && (f += '<a href="' + h.url + '" target="_blank">'), f += h.title, "" != h.url && "－" != h.size && (f += "(" + h.size + "b/" + h.page + "p)"), "" != h.url && (f += "</a>"), f += "</dd>", f += "</dl>")
        }
        e += "" !== f ? f : '<p class="empty">ただいま掲載すべき事項はございません。</p>', c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibraryMeeting = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            code_kessan: "32,33,90,92,93,95,97,109,110,111,112,113,114,115,116,117,118,119,120",
            display_id_kessan: "xj-mainlist-Other"
        };
        this.settings = c.extend(b, a), this.xjlist_kessan = [], this.select_latest = "", this.select_oldest = "", this.active_select = "", d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a = this,
            b = a.settings.code_kessan,
            d = a.createUrl(b);
        a.setMaxMinYear(d)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&output=json&callback=?"
    }, d.prototype.setMaxMinYear = function(a) {
        var b = this;
        c.ajax({
            url: a,
            dataType: "json",
            success: function(a) {
                a.items && c.each(a.items, function(a, c) {
                    var d = c.publishDate.split(" ")[0].split("/"),
                        e = parseInt(d[0]);
                    "" === b.select_latest && (b.select_latest = e), ("" === b.select_oldest || b.select_oldest >= e) && (b.select_oldest = e)
                })
            },
            complete: function() {
                b.setDateButton()
            }
        })
    }, d.prototype.setDateButton = function() {
        function a(a, e) {
            a.append('<a href="#" class="item-text">' + e + "年</a>").click(function(a) {
                a.preventDefault(), a.stopPropagation(), c(".article-ir-library-others .xj-select-year .active").removeClass("active"), c(this).addClass("active"), d.setDuration(e), b(c(this).text())
            })
        }
        function b(a) {
            c(".article-ir-library-others .ir-news-toolbar").find(".ir-year-select .select-title").text(a)
        }
        var d = this;
        d.active_select = d.select_latest;
        var e = c('<ul class="option-list"></ul>');
        if ("" != d.select_latest) for (var f = d.select_latest, g = 0; f >= d.select_oldest; f--, g++) {
            if (f == d.active_select) var h = c('<li class="option-item active" ></li>');
            else var h = c('<li class="option-item" ></li>');
            e.append(h), a(h, f)
        }
        c(".article-ir-library-others .xj-select-year").append(e), b(e.find(".option-item .item-text").eq(0).text()), d.setDuration(d.active_select)
    }, d.prototype.getFiscalYear = function(a) {
        var b, c, d = this;
        a = d.spaceTrim(a);
        var e, f = /^平成([0-9０-９]{2})年([1-5１-５])月期/,
            g = /^([0-9０-９]{4})年([1-5１-５])月期/;
        return null !== (c = f.exec(a)) ? (e = Number(d.zen2han(c[1])), b = d.heiseiToSeireki(e)) : null !== (c = g.exec(a)) && (e = Number(d.zen2han(c[1])), b = e), b
    }, d.prototype.setDuration = function(a) {
        var b = this;
        b.active_select = a, this.xjlist_kessan.length = 0;
        var c = b.createUrl(b.settings.code_kessan);
        b.prepareList(b.xjlist_kessan, c, b.settings.display_id_kessan)
    }, d.prototype.spaceTrim = function(a) {
        return a.replace(/[ 　\t\r\n]+/g, "")
    }, d.prototype.zen2han = function(a) {
        return a.replace(/[０-ｚ]/g, function(a) {
            return String.fromCharCode(parseInt(a.charCodeAt(0)) - 65248)
        })
    }, d.prototype.heiseiToSeireki = function(a) {
        return a > 0 && 99 > a ? 1988 + a : void 0
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var e = {};
                    d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (e.url = b.url, e.size = parseInt(b.size), e.page = b.page)
                    }), e.size > 0 ? e.size > 1e3 ? e.size = parseInt(e.size / 1e3) + "k" : e.size > 1e6 && (e.size = parseInt(e.size / 1e6) + "m") : e.size = "－", e.page > 0 ? e.page = e.page : e.page = "－", e.title = d.title;
                    var f = d.publishDate.split(" ")[0].split("/");
                    e.fiscalyear = parseInt(f[0]), e.date = d.publishDate.split(" ")[0].split("/"), e.date_format = e.date[0] + "." + e.date[1] + "." + e.date[2], a.push(e)
                })
            },
            complete: function() {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "",
            f = "";
        c("#" + b).empty();
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            d.active_select === h.fiscalyear && (f += "<dl>", f += '<dt class="date">' + h.date_format + "</dt>", f += "</dd>", f += '<dd class="text">', "" != h.url && "－" != h.size ? f += '<a href="' + h.url + '" class="icon-pdf" target="_blank">' : "" != h.url && (f += '<a href="' + h.url + '" target="_blank">'), f += h.title, "" != h.url && "－" != h.size && (f += "(" + h.size + "b/" + h.page + "p)"), "" != h.url && (f += "</a>"), f += "</dd>", f += "</dl>")
        }
        e += "" !== f ? f : '<p class="empty">ただいま掲載すべき事項はございません。</p>', c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibraryOther = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c) {
    "use strict";
    b("kayac.ir");
    var d = function(a) {
        var b = {
            domain: "http://www.xj-storage.jp",
            company: "AS01527",
            code_kessan: "0,5,6,8,9,14,15,24,25,28",
            display_id_kessan: "xj-mainlist-Disclosure"
        };
        this.settings = c.extend(b, a), this.xjlist_kessan = [], this.select_latest = "", this.select_oldest = "", this.active_select = "", d.prototype.init.call(this)
    };
    d.prototype.init = function() {
        c.ajaxSetup({
            scriptCharset: "utf-8"
        });
        var a = this,
            b = a.settings.code_kessan,
            d = a.createUrl(b);
        a.setMaxMinYear(d)
    }, d.prototype.createUrl = function(a) {
        var b, c = this;
        return b = c.settings.domain + "/public-list/GetList.aspx?company=", b += c.settings.company, b += c.settings.len && c.settings.len > 0 ? "&len=" + c.settings.len : "&len=10000", a && a.length > 0 && (b += "&doctype=" + a), b += "&output=json&callback=?"
    }, d.prototype.setMaxMinYear = function(a) {
        var b = this;
        c.ajax({
            url: a,
            dataType: "json",
            success: function(a) {
                a.items && c.each(a.items, function(a, c) {
                    var d = c.publishDate.split(" ")[0].split("/"),
                        e = parseInt(d[0]);
                    "" === b.select_latest && (b.select_latest = e), ("" === b.select_oldest || b.select_oldest >= e) && (b.select_oldest = e)
                })
            },
            complete: function() {
                b.setDateButton()
            }
        })
    }, d.prototype.setDateButton = function() {
        function a(a, e) {
            a.append('<a href="#" class="item-text">' + e + "年</a>").click(function(a) {
                a.preventDefault(), a.stopPropagation(), c(".article-ir-library-kaiji .xj-select-year .active").removeClass("active"), c(this).addClass("active"), d.setDuration(e), b(c(this).text())
            })
        }
        function b(a) {
            c(".article-ir-library-kaiji .ir-news-toolbar").find(".ir-year-select .select-title").text(a)
        }
        var d = this;
        d.active_select = d.select_latest;
        var e = c('<ul class="option-list"></ul>');
        if ("" != d.select_latest) for (var f = d.select_latest, g = 0; f >= d.select_oldest; f--, g++) {
            if (f == d.active_select) var h = c('<li class="option-item active" ></li>');
            else var h = c('<li class="option-item" ></li>');
            e.append(h), a(h, f)
        }
        c(".article-ir-library-kaiji .xj-select-year").append(e), b(e.find(".option-item .item-text").eq(0).text()), d.setDuration(d.active_select)
    }, d.prototype.getFiscalYear = function(a) {
        var b, c, d = this;
        a = d.spaceTrim(a);
        var e, f = /^平成([0-9０-９]{2})年([1-5１-５])月期/,
            g = /^([0-9０-９]{4})年([1-5１-５])月期/;
        return null !== (c = f.exec(a)) ? (e = Number(d.zen2han(c[1])), b = d.heiseiToSeireki(e)) : null !== (c = g.exec(a)) && (e = Number(d.zen2han(c[1])), b = e), b
    }, d.prototype.setDuration = function(a) {
        var b = this;
        b.active_select = a, this.xjlist_kessan.length = 0;
        var c = b.createUrl(b.settings.code_kessan);
        b.prepareList(b.xjlist_kessan, c, b.settings.display_id_kessan)
    }, d.prototype.spaceTrim = function(a) {
        return a.replace(/[ 　\t\r\n]+/g, "")
    }, d.prototype.zen2han = function(a) {
        return a.replace(/[０-ｚ]/g, function(a) {
            return String.fromCharCode(parseInt(a.charCodeAt(0)) - 65248)
        })
    }, d.prototype.heiseiToSeireki = function(a) {
        return a > 0 && 99 > a ? 1988 + a : void 0
    }, d.prototype.prepareList = function(a, b, d) {
        var e = this;
        c.ajax({
            url: b,
            dataType: "json",
            success: function(b) {
                void 0 != b.items && c.each(b.items, function(b, d) {
                    var e = {};
                    d.files && c.each(d.files, function(a, b) {
                        "PDF-GENERAL" == b.type && (e.url = b.url, e.size = parseInt(b.size), e.page = b.page)
                    }), e.size > 0 ? e.size > 1e3 ? e.size = parseInt(e.size / 1e3) + "k" : e.size > 1e6 && (e.size = parseInt(e.size / 1e6) + "m") : e.size = "－", e.page > 0 ? e.page = e.page : e.page = "－", e.title = d.title;
                    var f = d.publishDate.split(" ")[0].split("/");
                    e.fiscalyear = parseInt(f[0]), e.date = d.publishDate.split(" ")[0].split("/"), e.date_format = e.date[0] + "." + e.date[1] + "." + e.date[2], a.push(e)
                })
            },
            complete: function() {
                e.show(a, d)
            }
        })
    }, d.prototype.show = function(a, b) {
        var d = this,
            e = "",
            f = "";
        c("#" + b).empty();
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            d.active_select === h.fiscalyear && (f += "<dl>", f += '<dt class="date">' + h.date_format + "</dt>", f += '<dd class="text">', "" != h.url && "－" != h.size ? f += '<a href="' + h.url + '" class="icon-pdf" target="_blank">' : "" != h.url && (f += '<a href="' + h.url + '" target="_blank">'), f += h.title, "" != h.url && "－" != h.size && (f += "(" + h.size + "b/" + h.page + "p)"), "" != h.url && (f += "</a>"), f += "</dd>", f += "</dl>")
        }
        e += "" !== f ? f : '<p class="empty">ただいま掲載すべき事項はございません。</p>', c("#" + b).html(e)
    }, kayac.ir.XjStorageLoaderLibraryKaiji = d
}(this, this.kayac.utils.namespace, jQuery),
function(a, b, c, d) {
    "use strict";
    ! function() {
        kayac.util.checkNoJS(), d.browser = new kayac.util.Browser, c(document).on("addedToDocument", "article", function() {
            d.browser.ie && d.browser.version < 9 || (d.browser.ie && d.browser.version >= 9 ? c(".svg-loader").each(function(a) {
                (new d.svg.Loader).loadContent(this)
            }) : c(".svg-loader").each(function(a) {
                /no-div/i.test(this.className.baseVal) || /no-div/i.test(this.className) ? (new d.svg.Loader).loadContent(this) : (new d.svg.Loader).loadAsBackground(this, !0)
            }))
        }), - 1 != navigator.userAgent.toLowerCase().indexOf("ipad") && c(window).bind("load orientationchange", function() {
            var a = 90 === Math.abs(window.orientation) ? 1 : .75;
            c("body").css({
                zoom: a
            }), c("html, body").animate({
                scrollTop: c(document).scrollTop()
            })
        });
        var a = 40,
            b = c("html,body"),
            e = c(document);
        e.on("click", "a[href*=#]", function(d) {
            var f = c(this.hash);
            return 0 !== f.length ? (b.animate({
                scrollTop: f.offset().top - a
            }, 500, "easeInCubic", function() {
                e.trigger("scroll", !0)
            }), !1) : void 0
        }), c(document).on("addedToDocument", "article", function(d) {
            var e, f, g = c(d.target),
                h = g.find(".pagetop-btn");
            h.length && h.on("click", function() {
                e = g.offset().top, f = c("body").scrollTop(), b.animate({
                    scrollTop: f + 20
                }, 350, "easeInCirc", function() {
                    b.animate({
                        scrollTop: e - a
                    }, 800, "easeOutCirc", function() {
                        c(document).off("mousewheel.backscroll")
                    })
                }), c(document).on("mousewheel.backscroll", function() {
                    b.stop().delay(50).stop()
                })
            })
        }), ! function() {
            function a(a) {
                a.stopPropagation(), d.removeClass(f)
            }
            var d = c(".select-box-wrapper"),
                e = d.find(".select-box"),
                f = "active";
            e.length && e.on(kayac.event.PointerEvent.START, function(d) {
                d.preventDefault(), d.stopPropagation();
                var e = c(this).parent(".select-box-wrapper");
                e.hasClass(f) ? (b.off(kayac.event.PointerEvent.START, a), e.removeClass(f)) : (b.on(kayac.event.PointerEvent.START, a), e.addClass(f))
            })
        }(), new kayac.event.ScrollEventDispatcher, (new kayac.view.QuietMenu).init();
        var f = c("#MainContents"),
            g = new kayac.page.Page(f),
            h = g.currentURL;
        h = h.replace(/^\/(cn|en)/i, "/"), h = h.replace(/^\/\//i, "/"), g.memberGame(970, 570), (/^\/(index|index\.html)?$/i.test(h) || "" === h) && (g.top(), g.news()), /^\/(guide|privacy|policy|contact|sitemap)/i.test(h) && (!kayac.browser.ie || kayac.browser.version >= 9) && g.linearLoader(), /^\/tool\/flexBoxDrawer\.html/i.test(h) && g.flexBoxDrawer(), /^\/tool\/onoma\.html/i.test(h) && new kayac.view.Onoma, /^\/admin\/news\/.*\/preview$/i.test(h) && new kayac.view.Onoma, /^\/news/i.test(h) && ((!kayac.browser.ie || kayac.browser.version >= 9) && g.linearLoader(), /^\/news\/[19|20][0-9][0-9]/i.test(h) && (new kayac.view.Onoma, g.news()), /^\/news\/list/i.test(h) && (g.serviceList(), g.news()), /^\/news\/mm$/i.test(h) && g.melmag()), /^\/vision/i.test(h) && ((!kayac.browser.ie || kayac.browser.version >= 9) && g.linearLoader(), /^\/vision\/./i.test(h) && /^\/vision\/style\//i.test(h) !== !0 ? g.visionPages() : /^\/vision\/style\//i.test(h) && g.visionStyle()), /^\/company/i.test(h) && ((!kayac.browser.ie || kayac.browser.version >= 9) && g.linearLoader(), /^\/company\/./i.test(h) && g.companyPages(), /event/i.test(h) && g.event()), /^\/service/i.test(h) && ((!kayac.browser.ie || kayac.browser.version >= 9) && g.linearLoader(), /^\/service\/(game|client|community|smartphone)$/i.test(h) ? g.serviceList() : g.servicePages()), /^\/team/i.test(h) && ((!kayac.browser.ie || kayac.browser.version >= 9) && g.linearLoader(), /^\/team\/member$/i.test(h) ? g.teamMemberlist() : g.teamMember()), /^\/recruit/i.test(h) && ((!kayac.browser.ie || kayac.browser.version >= 9) && g.linearLoader(), /^\/recruit\/(career|fresh|intern)\/entry/i.test(h) && g.entrysheet()), /^\/contact/i.test(h) && !/^\/contact\/enquete/i.test(h) && g.contact(), /^\/ir/i.test(h) && ((!kayac.browser.ie || kayac.browser.version >= 9) && g.linearLoader(), g.ir(h)), /^\/contact/i.test(h) && !/^\/contact\/enquete/i.test(h) && g.contact(), c(document).on("ready", function() {
            c("#MainContents article").trigger(kayac.event.Event.ADDED_TO_DOCUMENT)
        })
    }()
}.call(this, window, document, jQuery, window.kayac, window.DEBUG);