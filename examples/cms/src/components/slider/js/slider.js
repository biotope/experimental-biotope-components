/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
  };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
  };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/Slider/Slider.ts");
  /******/
})
/************************************************************************/
/******/({

/***/ "./node_modules/@biotope/element/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@biotope/element/lib/index.js + 2 modules ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

  // CONCATENATED MODULE: ./node_modules/hyperhtml/esm.js
  /*! (c) Andrea Giammarchi (ISC) */var hyperHTML = function (e) { "use strict"; var t = document.defaultView, r = /^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i, l = "ownerSVGElement", c = "http://www.w3.org/2000/svg", s = "connected", f = "dis" + s, d = /^style|textarea$/i, b = "_hyper: " + (Math.random() * new Date | 0) + ";", h = "\x3c!--" + b + "--\x3e", v = t.Event; try { new v("Event") } catch (e) { v = function (e) { var t = document.createEvent("Event"); return t.initEvent(e, !1, !1), t } } var n, i = t.Map || function () { var n = [], r = []; return { get: function (e) { return r[n.indexOf(e)] }, set: function (e, t) { r[n.push(e) - 1] = t } } }, o = 0, p = t.WeakMap || function () { var n = b + o++; return { get: function (e) { return e[n] }, set: function (e, t) { Object.defineProperty(e, n, { configurable: !0, value: t }) } } }, a = t.WeakSet || function () { var t = new p; return { add: function (e) { t.set(e, !0) }, has: function (e) { return !0 === t.get(e) } } }, m = Array.isArray || (n = {}.toString, function (e) { return "[object Array]" === n.call(e) }), g = b.trim || function () { return this.replace(/^\s+|\s+$/g, "") }; function w() { return this } var u = function (e, t) { var n = "_" + e + "$"; return { get: function () { return this[n] || y(this, n, t.call(this, e)) }, set: function (e) { y(this, n, e) } } }, y = function (e, t, n) { return Object.defineProperty(e, t, { configurable: !0, value: "function" == typeof n ? function () { return e._wire$ = n.apply(this, arguments) } : n })[t] }, N = {}, x = {}, E = [], C = x.hasOwnProperty, j = 0, A = { attributes: N, define: function (e, t) { e.indexOf("-") < 0 ? (e in x || (j = E.push(e)), x[e] = t) : N[e] = t }, invoke: function (e, t) { for (var n = 0; n < j; n++) { var r = E[n]; if (C.call(e, r)) return x[r](e[r], t) } } }, k = function (e, t) { return T(e).createElement(t) }, T = function (e) { return e.ownerDocument || e }, O = function (e) { return T(e).createDocumentFragment() }, S = function (e, t) { return T(e).createTextNode(t) }, L = " \\f\\n\\r\\t", M = "[^ " + L + "\\/>\"'=]+", $ = "[ " + L + "]+" + M, D = "<([A-Za-z]+[A-Za-z0-9:_-]*)((?:", P = "(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|" + M + "))?)", B = new RegExp(D + $ + P + "+)([ " + L + "]*/?>)", "g"), R = new RegExp(D + $ + P + "*)([ " + L + "]*/>)", "g"), _ = O(document), H = "append" in _, z = "content" in k(document, "template"); _.appendChild(S(_, "g")), _.appendChild(S(_, "")); var F = 1 === _.cloneNode(!0).childNodes.length, Z = "importNode" in document, I = H ? function (e, t) { e.append.apply(e, t) } : function (e, t) { for (var n = t.length, r = 0; r < n; r++)e.appendChild(t[r]) }, V = new RegExp("(" + $ + "=)(['\"]?)" + h + "\\2", "gi"), W = function (e, t, n, r) { return "<" + t + n.replace(V, q) + r }, q = function (e, t, n) { return t + (n || '"') + b + (n || '"') }, G = function (e, t) { return (l in e ? ee : Y)(e, t.replace(B, W)) }, J = F ? function (e) { for (var t = e.cloneNode(), n = e.childNodes || [], r = n.length, i = 0; i < r; i++)t.appendChild(J(n[i])); return t } : function (e) { return e.cloneNode(!0) }, K = Z ? function (e, t) { return e.importNode(t, !0) } : function (e, t) { return J(t) }, Q = [].slice, U = function (e) { return X(e) }, X = function (e) { if (e.propertyIsEnumerable("raw") || /Firefox\/(\d+)/.test((t.navigator || {}).userAgent) && parseFloat(RegExp.$1) < 55) { var n = {}; X = function (e) { var t = "^" + e.join("^"); return n[t] || (n[t] = e) } } else X = function (e) { return e }; return X(e) }, Y = z ? function (e, t) { var n = k(e, "template"); return n.innerHTML = t, n.content } : function (e, t) { var n = k(e, "template"), r = O(e); if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)) { var i = RegExp.$1; n.innerHTML = "<table>" + t + "</table>", I(r, Q.call(n.querySelectorAll(i))) } else n.innerHTML = t, I(r, Q.call(n.childNodes)); return r }, ee = z ? function (e, t) { var n = O(e), r = T(e).createElementNS(c, "svg"); return r.innerHTML = t, I(n, Q.call(r.childNodes)), n } : function (e, t) { var n = O(e), r = k(e, "div"); return r.innerHTML = '<svg xmlns="' + c + '">' + t + "</svg>", I(n, Q.call(r.firstChild.childNodes)), n }; function te(e) { this.childNodes = e, this.length = e.length, this.first = e[0], this.last = e[this.length - 1] } te.prototype.insert = function () { var e = O(this.first); return I(e, this.childNodes), e }, te.prototype.remove = function () { var e = this.first, t = this.last; if (2 === this.length) t.parentNode.removeChild(t); else { var n = T(e).createRange(); n.setStartBefore(this.childNodes[1]), n.setEndAfter(t), n.deleteContents() } return e }; var ne = function (e, t, n) { e.unshift(e.indexOf.call(t.childNodes, n)) }, re = function (e, t, n) { return { type: e, name: n, node: t, path: function (e) { var t = [], n = void 0; switch (e.nodeType) { case 1: case 11: n = e; break; case 8: n = e.parentNode, ne(t, n, e); break; default: n = e.ownerElement }for (e = n; n = n.parentNode; e = n)ne(t, n, e); return t }(t) } }, ie = function (e, t) { for (var n = t.length, r = 0; r < n; r++)e = e.childNodes[t[r]]; return e }, oe = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, ae = function (o, a) { var u = void 0, l = void 0; return function (e) { switch (typeof e) { case "object": if (e) { if ("object" === u) { if (!a && l !== e) for (var t in l) t in e || (o[t] = "") } else a ? o.value = "" : o.cssText = ""; var n = a ? {} : o; for (var r in e) { var i = e[r]; n[r] = "number" != typeof i || oe.test(r) ? i : i + "px" } u = "object", a ? o.value = ce(l = n) : l = e; break } default: l != e && (u = "string", l = e, a ? o.value = e || "" : o.cssText = e || "") } } }, ue = /([^A-Z])([A-Z]+)/g, le = function (e, t, n) { return t + "-" + n.toLowerCase() }, ce = function (e) { var t = []; for (var n in e) t.push(n.replace(ue, le), ":", e[n], ";"); return t.join("") }, se = function (e, t) { return e == t }, fe = function (e) { return e }, de = function (e, t, n, r) { if (null == r) t.removeChild(e(n, -1)); else { var i = t.ownerDocument.createRange(); i.setStartBefore(e(n, -1)), i.setEndAfter(e(r, -1)), i.deleteContents() } }, he = function (e, t, n, r) { r || (r = {}); for (var i = r.compare || se, o = r.node || fe, a = null == r.before ? null : o(r.before, 0), u = 0, l = 0, c = t.length - 1, s = t[0], f = t[c], d = n.length - 1, h = n[0], v = n[d]; u <= c && l <= d;)if (null == s) s = t[++u]; else if (null == f) f = t[--c]; else if (null == h) h = n[++l]; else if (null == v) v = n[--d]; else if (i(s, h)) s = t[++u], h = n[++l]; else if (i(f, v)) f = t[--c], v = n[--d]; else if (i(s, v)) e.insertBefore(o(s, 1), o(f, -0).nextSibling), s = t[++u], v = n[--d]; else if (i(f, h)) e.insertBefore(o(f, 1), o(s, 0)), f = t[--c], h = n[++l]; else { var p = t.indexOf(h); if (p < 0) e.insertBefore(o(h, 1), o(s, 0)), h = n[++l]; else { for (var m = p, g = l; m <= c && g <= d && t[m] === n[g];)m++ , g++; if (1 < m - p)--p === u ? e.removeChild(o(s, -1)) : de(o, e, s, t[p]), l = g, s = t[u = m], h = n[g]; else { var b = t[p]; t[p] = null, e.insertBefore(o(b, 1), o(s, 0)), h = n[++l] } } } if (u <= c || l <= d) if (c < u) { var w = n[d + 1], y = null == w ? a : o(w, 0); if (l === d) e.insertBefore(o(n[l], 1), y); else { for (var N = e.ownerDocument.createDocumentFragment(); l <= d;)N.appendChild(o(n[l++], 1)); e.insertBefore(N, y) } } else null == t[u] && u++ , u === c ? e.removeChild(o(t[u], -1)) : de(o, e, t[u], t[c]); return n }, ve = new a; function pe() { } pe.prototype = Object.create(null); var me = function (e) { return { html: e } }, ge = function e(t, n) { return "ELEMENT_NODE" in t ? t : t.constructor === te ? 1 / n < 0 ? n ? t.remove() : t.last : n ? t.insert() : t.first : e(t.render(), n) }, be = function (e, t, n) { for (var r = new pe, i = e.attributes, o = Q.call(i), a = [], u = o.length, l = 0; l < u; l++) { var c = o[l]; if (c.value === b) { var s = c.name; if (!(s in r)) { var f = n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/, "$1"); r[s] = i[f] || i[f.toLowerCase()], t.push(re("attr", r[s], f)) } a.push(c) } } for (var d = a.length, h = 0; h < d; h++) { var v = a[h]; /^id$/i.test(v.name) ? e.removeAttribute(v.name) : e.removeAttributeNode(a[h]) } var p = e.nodeName; if (/^script$/i.test(p)) { for (var m = document.createElement(p), g = 0; g < i.length; g++)m.setAttributeNode(i[g].cloneNode(!0)); m.textContent = e.textContent, e.parentNode.replaceChild(m, e) } }, we = function (e, t) { t(e.placeholder), "text" in e ? Promise.resolve(e.text).then(String).then(t) : "any" in e ? Promise.resolve(e.any).then(t) : "html" in e ? Promise.resolve(e.html).then(me).then(t) : Promise.resolve(A.invoke(e, t)).then(t) }, ye = function (e) { return null != e && "then" in e }, Ne = function (r, i) { var o = { node: ge, before: r }, a = !1, u = void 0; return function e(t) { switch (typeof t) { case "string": case "number": case "boolean": a ? u !== t && (u = t, i[0].textContent = t) : (a = !0, u = t, i = he(r.parentNode, i, [S(r, t)], o)); break; case "object": case "undefined": if (null == t) { a = !1, i = he(r.parentNode, i, [], o); break } default: if (a = !1, m(u = t)) if (0 === t.length) i.length && (i = he(r.parentNode, i, [], o)); else switch (typeof t[0]) { case "string": case "number": case "boolean": e({ html: t }); break; case "object": if (m(t[0]) && (t = t.concat.apply([], t)), ye(t[0])) { Promise.all(t).then(e); break } default: i = he(r.parentNode, i, t, o) } else "ELEMENT_NODE" in (n = t) || n instanceof te || n instanceof w ? i = he(r.parentNode, i, 11 === t.nodeType ? Q.call(t.childNodes) : [t], o) : ye(t) ? t.then(e) : "placeholder" in t ? we(t, e) : "text" in t ? e(String(t.text)) : "any" in t ? e(t.any) : "html" in t ? i = he(r.parentNode, i, Q.call(G(r, [].concat(t.html).join("")).childNodes), o) : e("length" in t ? Q.call(t) : A.invoke(t, e)) }var n } }, xe = function (t, n, e) { var r = l in t, i = void 0; if ("style" === n) return function (e, t, n) { if (n) { var r = t.cloneNode(!0); return r.value = "", e.setAttributeNode(r), ae(r, n) } return ae(e.style, n) }(t, e, r); if (/^on/.test(n)) { var o = n.slice(2); return o === s || o === f ? (je && (je = !1, function () { var i = function (e, t) { for (var n = new v(t), r = e.length, i = 0; i < r; i++) { var o = e[i]; 1 === o.nodeType && a(o, n) } }, a = function e(t, n) { ve.has(t) && t.dispatchEvent(n); for (var r = t.children || function (e) { for (var t = [], n = e.childNodes, r = n.length, i = 0; i < r; i++)1 === n[i].nodeType && t.push(n[i]); return t }(t), i = r.length, o = 0; o < i; o++)e(r[o], n) }; try { new MutationObserver(function (e) { for (var t = e.length, n = 0; n < t; n++) { var r = e[n]; i(r.removedNodes, f), i(r.addedNodes, s) } }).observe(document, { subtree: !0, childList: !0 }) } catch (e) { document.addEventListener("DOMNodeRemoved", function (e) { i([e.target], f) }, !1), document.addEventListener("DOMNodeInserted", function (e) { i([e.target], s) }, !1) } }()), ve.add(t)) : n.toLowerCase() in t && (o = o.toLowerCase()), function (e) { i !== e && (i && t.removeEventListener(o, i, !1), (i = e) && t.addEventListener(o, e, !1)) } } if ("data" === n || !r && n in t) return function (e) { i !== e && (i = e, t[n] !== e && null == (t[n] = e) && t.removeAttribute(n)) }; if (n in A.attributes) return function (e) { i = A.attributes[n](t, e), t.setAttribute(n, null == i ? "" : i) }; var a = !1, u = e.cloneNode(!0); return function (e) { i !== e && (i = e, u.value !== e && (null == e ? (a && (a = !1, t.removeAttributeNode(u)), u.value = e) : (u.value = e, a || (a = !0, t.setAttributeNode(u))))) } }, Ee = function (n) { var r = void 0; return function e(t) { r !== t && ("object" == typeof (r = t) && t ? ye(t) ? t.then(e) : "placeholder" in t ? we(t, e) : e("text" in t ? String(t.text) : "any" in t ? t.any : "html" in t ? [].concat(t.html).join("") : "length" in t ? Q.call(t).join("") : A.invoke(t, e)) : n.textContent = null == t ? "" : t) } }, Ce = { create: function (e, t) { for (var n = [], r = t.length, i = 0; i < r; i++) { var o = t[i], a = ie(e, o.path); switch (o.type) { case "any": n.push(Ne(a, [])); break; case "attr": n.push(xe(a, o.name, o.node)); break; case "text": n.push(Ee(a)), a.textContent = "" } } return n }, find: function e(t, n, r) { for (var i = t.childNodes, o = i.length, a = 0; a < o; a++) { var u = i[a]; switch (u.nodeType) { case 1: be(u, n, r), e(u, n, r); break; case 8: u.textContent === b && (r.shift(), n.push(d.test(t.nodeName) ? re("text", t) : re("any", u))); break; case 3: d.test(t.nodeName) && g.call(u.textContent) === h && (r.shift(), n.push(re("text", t))) } } } }, je = !0; var Ae = new p, ke = function () { try { var e = new p, t = Object.freeze([]); if (e.set(t, !0), !e.get(t)) throw t; return e } catch (t) { return new i } }(); function Te(e) { var t = Ae.get(this); return t && t.template === U(e) ? Oe.apply(t.updates, arguments) : function (e) { e = U(e); var t = ke.get(e) || function (e) { var t = [], n = e.join(h).replace(De, Pe), r = G(this, n); Ce.find(r, t, e.slice()); var i = { fragment: r, paths: t }; return ke.set(e, i), i }.call(this, e), n = K(this.ownerDocument, t.fragment), r = Ce.create(n, t.paths); Ae.set(this, { template: e, updates: r }), Oe.apply(r, arguments), this.textContent = "", this.appendChild(n) }.apply(this, arguments), this } function Oe() { for (var e = arguments.length, t = 1; t < e; t++)this[t - 1](arguments[t]) } var Se, Le, Me, $e, De = R, Pe = function (e, t, n) { return r.test(t) ? e : "<" + t + n + "></" + t + ">" }, Be = new p, Re = function (n) { var r = void 0, i = void 0, o = void 0, a = void 0, u = void 0; return function (e) { e = U(e); var t = a !== e; return t && (a = e, o = O(document), i = "svg" === n ? document.createElementNS(c, "svg") : o, u = Te.bind(i)), u.apply(null, arguments), t && ("svg" === n && I(o, Q.call(i.childNodes)), r = He(o)), r } }, _e = function (e, t) { var n = t.indexOf(":"), r = Be.get(e), i = t; return -1 < n && (i = t.slice(n + 1), t = t.slice(0, n) || "html"), r || Be.set(e, r = {}), r[i] || (r[i] = Re(t)) }, He = function (e) { for (var t = e.childNodes, n = t.length, r = [], i = 0; i < n; i++) { var o = t[i]; 1 !== o.nodeType && 0 === g.call(o.textContent).length || r.push(o) } return 1 === r.length ? r[0] : new te(r) }, ze = A.define; function Fe(e) { return arguments.length < 2 ? null == e ? Re("html") : "string" == typeof e ? Fe.wire(null, e) : "raw" in e ? Re("html")(e) : "nodeType" in e ? Fe.bind(e) : _e(e, "html") : ("raw" in e ? Re("html") : Fe.wire).apply(null, arguments) } return Fe.Component = w, Fe.bind = function (e) { return Te.bind(e) }, Fe.define = ze, Fe.diff = he, (Fe.hyper = Fe).wire = function (e, t) { return null == e ? Re(t || "html") : _e(e, t || "html") }, Se = Re, Le = new p, Me = Object.create, $e = function (e, t) { var n = { w: null, p: null }; return t.set(e, n), n }, Object.defineProperties(w, { for: { configurable: !0, value: function (e, t) { return function (e, t, n, r) { var i, o, a, u = t.get(e) || $e(e, t); switch (typeof r) { case "object": case "function": var l = u.w || (u.w = new p); return l.get(r) || (i = l, o = r, a = new e(n), i.set(o, a), a); default: var c = u.p || (u.p = Me(null)); return c[r] || (c[r] = new e(n)) } }(this, Le.get(e) || (n = e, r = new i, Le.set(n, r), r), e, null == t ? "default" : t); var n, r } } }), Object.defineProperties(w.prototype, { handleEvent: { value: function (e) { var t = e.currentTarget; this["getAttribute" in t && t.getAttribute("data-call") || "on" + e.type](e) } }, html: u("html", Se), svg: u("svg", Se), state: u("state", function () { return this.defaultState }), defaultState: { get: function () { return {} } }, dispatch: { value: function (e, t) { var n = this._wire$; if (n) { var r = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t }); return r.component = this, (n.dispatchEvent ? n : n.childNodes[0]).dispatchEvent(r) } return !1 } }, setState: { value: function (e, t) { var n = this.state, r = "function" == typeof e ? e.call(this, n) : e; for (var i in r) n[i] = r[i]; return !1 !== t && this.render(), this } } }), Fe }(window);
  /* harmony default export */ var esm = (hyperHTML);
        const { Component, bind, define, diff, hyper, wire } = hyperHTML;

        // CONCATENATED MODULE: ./node_modules/hyperhtml-element/esm/index.js
        /*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */



        // utils to deal with custom elements builtin extends
        const O = Object;
        const classes = [];
        const defineProperties = O.defineProperties;
        const defineProperty = O.defineProperty;
        const getOwnPropertyDescriptor = O.getOwnPropertyDescriptor;
        const getOwnPropertyNames = O.getOwnPropertyNames;
        const getOwnPropertySymbols = O.getOwnPropertySymbols || (() => []);
        const getPrototypeOf = O.getPrototypeOf || (o => o.__proto__);
        const ownKeys = typeof Reflect === 'object' && Reflect.ownKeys ||
          (o => getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
        const setPrototypeOf = O.setPrototypeOf ||
          ((o, p) => (o.__proto__ = p, o));

        class esm_HyperHTMLElement extends HTMLElement {

          // define a custom-element in the CustomElementsRegistry
          // class MyEl extends HyperHTMLElement {}
          // MyEl.define('my-el');
          static define(name, options) {
            const Class = this;
            const proto = Class.prototype;

            // if observedAttributes contains attributes to observe
            // HyperHTMLElement will directly reflect get/setAttribute
            // operation once these attributes are used, example:
            // el.observed = 123;
            // will automatically do
            // el.setAttribute('observed', 123);
            // triggering also the attributeChangedCallback
            (Class.observedAttributes || []).forEach(name => {
              if (!(name in proto)) defineProperty(
                proto,
                name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase()),
                {
                  configurable: true,
                  // it's impossible to understand if this property
                  // should be returned as boolean or not
                  // but you can always define
                  // get propName() { return !!this.getAttribute(name); }
                  // overwriting the default behavior
                  get() {
                    const value = this.getAttribute(name);
                    return value === '' ? true : value;
                  },
                  set(value) {
                    if (value === false || value == null)
                      this.removeAttribute(name, value);
                    else {
                      this.setAttribute(name, value);
                    }
                  }
                }
              );
            });

            const onChanged = proto.attributeChangedCallback;
            const hasChange = !!onChanged;

            // created() {} is an initializer method that grants
            // the node is fully known to the browser.
            // It is ensured to run either after DOMContentLoaded,
            // or once there is a next sibling (stream-friendly) so that
            // you have full access to element attributes and/or childNodes.
            const created = proto.created;
            if (created) {
              // used to ensure create() is called once and once only
              defineProperty(
                proto,
                '_init$',
                {
                  configurable: true,
                  writable: true,
                  value: true
                }
              );

              // ⚠️ if you need to overwrite/change attributeChangedCallback method
              //    at runtime after class definition, be sure you do so
              //    via Object.defineProperty to preserve its non-enumerable nature.
              defineProperty(
                proto,
                'attributeChangedCallback',
                {
                  configurable: true,
                  value: function aCC(name, prev, curr) {
                    if (this._init$) {
                      checkReady.call(this, created);
                      if (this._init$)
                        return this._init$$.push(aCC.bind(this, name, prev, curr));
                    }
                    // ensure setting same value twice
                    // won't trigger twice attributeChangedCallback
                    if (hasChange && prev !== curr) {
                      onChanged.apply(this, arguments);
                    }
                  }
                }
              );

              // ⚠️ if you need to overwrite/change connectedCallback method
              //    at runtime after class definition, be sure you do so
              //    via Object.defineProperty to preserve its non-enumerable nature.
              const onConnected = proto.connectedCallback;
              const hasConnect = !!onConnected;
              defineProperty(
                proto,
                'connectedCallback',
                {
                  configurable: true,
                  value: function cC() {
                    if (this._init$) {
                      checkReady.call(this, created);
                      if (this._init$)
                        return this._init$$.push(cC.bind(this));
                    }
                    if (hasConnect) {
                      onConnected.apply(this, arguments);
                    }
                  }
                }
              );
            } else if (hasChange) {
              // ⚠️ if you need to overwrite/change attributeChangedCallback method
              //    at runtime after class definition, be sure you do so
              //    via Object.defineProperty to preserve its non-enumerable nature.
              defineProperty(
                proto,
                'attributeChangedCallback',
                {
                  configurable: true,
                  value(name, prev, curr) {
                    // ensure setting same value twice
                    // won't trigger twice attributeChangedCallback
                    if (prev !== curr) {
                      onChanged.apply(this, arguments);
                    }
                  }
                }
              );
            }

            // define lazily all handlers
            // class { handleClick() { ... }
            // render() { `<a onclick=${this.handleClick}>` } }
            getOwnPropertyNames(proto).forEach(key => {
              if (/^handle[A-Z]/.test(key)) {
                const _key$ = '_' + key + '$';
                const method = proto[key];
                defineProperty(proto, key, {
                  configurable: true,
                  get() {
                    return this[_key$] ||
                      (this[_key$] = method.bind(this));
                  }
                });
              }
            });

            // whenever you want to directly use the component itself
            // as EventListener, you can pass it directly.
            // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
            //  class Reactive extends HyperHTMLElement {
            //    oninput(e) { console.log(this, 'changed', e.target.value); }
            //    render() { this.html`<input oninput="${this}">`; }
            //  }
            if (!('handleEvent' in proto)) {
              // ⚠️ if you need to overwrite/change handleEvent method
              //    at runtime after class definition, be sure you do so
              //    via Object.defineProperty to preserve its non-enumerable nature.
              defineProperty(
                proto,
                'handleEvent',
                {
                  configurable: true,
                  value(event) {
                    this[
                      (event.currentTarget.dataset || {}).call ||
                      ('on' + event.type)
                    ](event);
                  }
                }
              );
            }

            if (options && options.extends) {
              const Native = document.createElement(options.extends).constructor;
              const Intermediate = class extends Native { };
              const Super = getPrototypeOf(Class);
              ownKeys(Super)
                .filter(key => [
                  'length', 'name', 'arguments', 'caller', 'prototype'
                ].indexOf(key) < 0)
                .forEach(key => defineProperty(
                  Intermediate,
                  key,
                  getOwnPropertyDescriptor(Super, key)
                )
                );
              ownKeys(Super.prototype)
                .forEach(key => defineProperty(
                  Intermediate.prototype,
                  key,
                  getOwnPropertyDescriptor(Super.prototype, key)
                )
                );
              setPrototypeOf(Class, Intermediate);
              setPrototypeOf(proto, Intermediate.prototype);
              customElements.define(name, Class, options);
            } else {
              customElements.define(name, Class);
            }
            classes.push(Class);
            return Class;
          }

          // lazily bind once hyperHTML logic
          // to either the shadowRoot, if present and open,
          // the _shadowRoot property, if set due closed shadow root,
          // or the custom-element itself if no Shadow DOM is used.
          get html() {
            return this._html$ || (this.html = bind(
              // in case of Shadow DOM {mode: "open"}, use it
              this.shadowRoot ||
              // in case of Shadow DOM {mode: "close"}, use it
              // this needs the following reference created upfront
              // this._shadowRoot = this.attachShadow({mode: "close"});
              this._shadowRoot ||
              // if no Shadow DOM is used, simply use the component
              // as container for its own content (it just works too)
              this
            ));
          }

          // it can be set too if necessary, it won't invoke render()
          set html(value) {
            defineProperty(this, '_html$', { configurable: true, value: value });
          }

          // ---------------------//
          // Basic State Handling //
          // ---------------------//

          // overwrite this method with your own render
          render() { }

          // define the default state object
          // you could use observed properties too
          get defaultState() { return {}; }

          // the state with a default
          get state() {
            return this._state$ || (this.state = this.defaultState);
          }

          // it can be set too if necessary, it won't invoke render()
          set state(value) {
            defineProperty(this, '_state$', { configurable: true, value: value });
          }

          // currently a state is a shallow copy, like in Preact or other libraries.
          // after the state is updated, the render() method will be invoked.
          // ⚠️ do not ever call this.setState() inside this.render()
          setState(state, render) {
            const target = this.state;
            const source = typeof state === 'function' ? state.call(this, target) : state;
            for (const key in source) target[key] = source[key];
            if (render !== false) this.render();
            return this;
          }

        };

        // exposing hyperHTML utilities
        esm_HyperHTMLElement.Component = Component;
        esm_HyperHTMLElement.bind = bind;
        esm_HyperHTMLElement.intent = define;
        esm_HyperHTMLElement.wire = wire;
        esm_HyperHTMLElement.hyper = hyper;

        try {
          if (Symbol.hasInstance) classes.push(
            defineProperty(esm_HyperHTMLElement, Symbol.hasInstance, {
              enumerable: false,
              configurable: true,
              value(instance) {
                return classes.some(esm_isPrototypeOf, getPrototypeOf(instance));
              }
            }));
        } catch (meh) { }

  /* harmony default export */ var hyperhtml_element_esm = (esm_HyperHTMLElement);

        // ------------------------------//
        // DOMContentLoaded VS created() //
        // ------------------------------//
        const dom = {
          type: 'DOMContentLoaded',
          handleEvent() {
            if (dom.ready()) {
              document.removeEventListener(dom.type, dom, false);
              dom.list.splice(0).forEach(invoke);
            }
            else
              setTimeout(dom.handleEvent);
          },
          ready() {
            return document.readyState === 'complete';
          },
          list: []
        };

        if (!dom.ready()) {
          document.addEventListener(dom.type, dom, false);
        }

        function checkReady(created) {
          if (dom.ready() || isReady.call(this, created)) {
            if (this._init$) {
              const list = this._init$$;
              if (list) delete this._init$$;
              created.call(defineProperty(this, '_init$', { value: false }));
              if (list) list.forEach(invoke);
            }
          } else {
            if (!this.hasOwnProperty('_init$$'))
              defineProperty(this, '_init$$', { configurable: true, value: [] });
            dom.list.push(checkReady.bind(this, created));
          }
        }

        function invoke(fn) {
          fn();
        }

        function esm_isPrototypeOf(Class) {
          return this === Class.prototype;
        }

        function isReady(created) {
          let el = this;
          do { if (el.nextSibling) return true; }
          while (el = el.parentNode);
          setTimeout(checkReady.bind(this, created));
          return false;
        }

  // CONCATENATED MODULE: ./node_modules/@biotope/element/lib/index.js
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return lib_BioElement; });

        class lib_BioElement extends hyperhtml_element_esm {
          static get observedAttributes() {
            return [];
          }
          ;
          attributeChangedCallback() {
            this.render();
          }
          get props() {
            return Object.assign({}, this.defaultProps, this.propsFromAttributes, this._props);
          }
          set props(value) {
            this._props = value;
            this.onPropsChanged();
          }
          get propsFromAttributes() {
            return null;
          }
          get defaultProps() {
            return null;
          }
          // overwrite if you eg need to merge into your state
          onPropsChanged() {
            this.render();
          }
        }
        //# sourceMappingURL=index.js.map

        /***/
      }),

  /***/ "./src/components/Slider/Dots.ts":
  /*!***************************************!*\
    !*** ./src/components/Slider/Dots.ts ***!
    \***************************************/
  /*! exports provided: Dots */
  /*! ModuleConcatenation bailout: Module is an entry point */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dots", function () { return Dots; });
  /* harmony import */ var _biotope_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @biotope/element */ "./node_modules/@biotope/element/lib/index.js");

        class Dots extends _biotope_element__WEBPACK_IMPORTED_MODULE_0__["default"] {
          created() {
            this.render();
          }
          render() {
            const { selected, count } = this.props;
            const dots = new Array(count).fill(1);
            const dotElements = dots.map((_, idx) => selected === idx
              ? _biotope_element__WEBPACK_IMPORTED_MODULE_0__["default"].wire()`<li onclick=${() => this.onSelected(idx)} style="color: red">+</li>`
              : _biotope_element__WEBPACK_IMPORTED_MODULE_0__["default"].wire()`<li onclick=${() => this.onSelected(idx)}>+</li>`);
            this.html`
              <ul>${dotElements}</ul>
          `;
          }
          onSelected(index) {
            const selectEvent = new CustomEvent('selectSlide', {
              bubbles: true,
              cancelable: true,
              detail: index
            });
            this.dispatchEvent(selectEvent);
          }
        }
        Dots.define('x-dots');


        /***/
      }),

  /***/ "./src/components/Slider/Slide.ts":
  /*!****************************************!*\
    !*** ./src/components/Slider/Slide.ts ***!
    \****************************************/
  /*! exports provided: Slide */
  /*! ModuleConcatenation bailout: Module is an entry point */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function () { return Slide; });
  /* harmony import */ var _biotope_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @biotope/element */ "./node_modules/@biotope/element/lib/index.js");

        class Slide extends _biotope_element__WEBPACK_IMPORTED_MODULE_0__["default"] {
          constructor() {
            super();

          }
          get defaultProps() {
            return { isSelected: this.hasAttribute('selected') };
          }
          created() {
            this.render();
          }
          render() {
            const isSelected = this.props.isSelected;
            return isSelected
              ? this.html`<div class="slide">
  <slot></slot>
</div>`
              : this.html``;
          }
        }
        Slide.define('x-slide');


        /***/
      }),

  /***/ "./src/components/Slider/Slider.ts":
  /*!*****************************************!*\
    !*** ./src/components/Slider/Slider.ts ***!
    \*****************************************/
  /*! exports provided: Slider */
  /*! ModuleConcatenation bailout: Module is an entry point */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function () { return Slider; });
  /* harmony import */ var _Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dots */ "./src/components/Slider/Dots.ts");
  /* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slide */ "./src/components/Slider/Slide.ts");
  /* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stepper */ "./src/components/Slider/Stepper.ts");
  /* harmony import */ var _biotope_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @biotope/element */ "./node_modules/@biotope/element/lib/index.js");





        class Slider extends _biotope_element__WEBPACK_IMPORTED_MODULE_3__["default"] {
          constructor() {
            super();

            // re-render when children have changed. Note that childNodes is empty when connectedCallback is called
            // note also, that created() is called when initial childNodes are available. so maybe only re-render
            // on child note changes after created has been called
            const observer = new MutationObserver(changes => !this._init$ && this.render());
            observer.observe(this, { childList: true });
            this.onNextSlide = this.onNextSlide.bind(this);
            this.onPrevSlide = this.onPrevSlide.bind(this);
            this.onSelectSlide = this.onSelectSlide.bind(this);
          }
          get defaultState() {
            return { lastSelected: 0, selected: 0 };
          }
          onPropsChanged() {
            this.setState({ selected: this.props.selected });
          }
          created() {
            this.onPropsChanged();
            this.render();
          }
          get defaultProps() {
            var initiallySelectedSlide = this.hasAttribute('selected')
              ? parseInt(this.getAttribute('selected'), 10)
              : 0;
            return { selected: initiallySelectedSlide };
          }
          render() {
            const { selected } = this.state;
            const slidesCount = this.slides.length;
            this.slides.forEach((slide, idx) => slide.props = { isSelected: idx === selected });
            return this.html`
              <x-stepper direction="previous" onclick=${this.onPrevSlide}></x-stepper>
              <div class="slides">
                <slot></slot>
              </div>
              <x-stepper direction="next" onclick=${this.onNextSlide}></x-stepper>
              <x-dots props=${{ count: slidesCount, selected }} onselectSlide=${this.onSelectSlide}></x-dots>
          `;
          }
          onSelectSlide(e) {
            this.setSelectedSlide(e.detail);
          }
          setSelectedSlide(selected) {
            this.setState({ lastSelected: this.state.selected, selected });
            this.raiseSlideChange();
          }
          onPrevSlide() {
            const { selected } = this.state;
            const slidesCount = this.slidesCount;
            this.setSelectedSlide((selected - 1 + slidesCount) % slidesCount);
          }
          onNextSlide() {
            const { selected } = this.state;
            const slidesCount = this.slidesCount;
            this.setSelectedSlide((selected + 1) % slidesCount);
          }
          raiseSlideChange() {
            const changeEvent = new CustomEvent('slideChange', {
              bubbles: true,
              cancelable: true,
              detail: this.state.selected
            });
            this.dispatchEvent(changeEvent);
          }
          get slides() {
            return [...this.childNodes].filter((n) => n instanceof _Slide__WEBPACK_IMPORTED_MODULE_1__["Slide"]);
          }
          get slidesCount() {
            return this.slides.length;
          }
        }
        Slider.define('x-slider');


        /***/
      }),

  /***/ "./src/components/Slider/Stepper.ts":
  /*!******************************************!*\
    !*** ./src/components/Slider/Stepper.ts ***!
    \******************************************/
  /*! exports provided: Stepper */
  /*! ModuleConcatenation bailout: Module is an entry point */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stepper", function () { return Stepper; });
  /* harmony import */ var _biotope_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @biotope/element */ "./node_modules/@biotope/element/lib/index.js");

        class Stepper extends _biotope_element__WEBPACK_IMPORTED_MODULE_0__["default"] {
          static get observedAttributes() {
            return [
              ..._biotope_element__WEBPACK_IMPORTED_MODULE_0__["default"].observedAttributes,
              'direction'
            ];
          }
          created() {
            this.render();
          }
          get propsFromAttributes() {
            return { direction: this.getAttribute('direction') };
          }
          render() {
            const { direction } = this.props;
            this.html`
              <button>${direction}</button>
          `;
          }
        }
        Stepper.define('x-stepper');


        /***/
      })

    /******/
  });
  //# sourceMappingURL=Slider.js.map
