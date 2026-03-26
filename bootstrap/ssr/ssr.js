import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738" }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k = S2[T2], C = "object" == typeof k && void 0 !== k.value ? k.value : w2[k];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k) : r2 : r2 + (c2 ? "." + k : "[" + k + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/auth/confirm-password.tsx": () => import("./assets/confirm-password-CecbRZ38.js"), "./pages/auth/forgot-password.tsx": () => import("./assets/forgot-password-D0ETkxZe.js"), "./pages/auth/login.tsx": () => import("./assets/login-CC-2VjdJ.js"), "./pages/auth/register.tsx": () => import("./assets/register-fQFEU0RN.js"), "./pages/auth/reset-password.tsx": () => import("./assets/reset-password-CKnb6D0L.js"), "./pages/auth/verify-email.tsx": () => import("./assets/verify-email-BIsKS75i.js"), "./pages/blogs/index.tsx": () => import("./assets/index-Cd6u1rd8.js"), "./pages/blogs/partials/blog-comments.tsx": () => import("./assets/blog-comments-GA1XRYNU.js"), "./pages/blogs/partials/blog-filter.tsx": () => import("./assets/blog-filter-C0zBG-uz.js"), "./pages/blogs/partials/blog-like-dislike.tsx": () => import("./assets/blog-like-dislike-BnfnB3qL.js"), "./pages/blogs/partials/layout.tsx": () => import("./assets/layout-CrgnYND_.js"), "./pages/blogs/show.tsx": () => import("./assets/show-DxE8rxba.js"), "./pages/cart/index.tsx": () => import("./assets/index-ml97U07L.js"), "./pages/cart/partials/cart-summery.tsx": () => import("./assets/cart-summery-CTTMWPsQ.js"), "./pages/cart/partials/course-card.tsx": () => import("./assets/course-card-Cpwex7w_.js"), "./pages/course-player/forms/assignment-submission.tsx": () => import("./assets/assignment-submission-QO4u4Rgy.js"), "./pages/course-player/forms/forum-edit.tsx": () => import("./assets/forum-edit-C8UWY74J.js"), "./pages/course-player/forms/forum-reply.tsx": () => import("./assets/forum-reply-DjXsjdAz.js"), "./pages/course-player/forms/review-edit.tsx": () => import("./assets/review-edit-DiN0groi.js"), "./pages/course-player/forms/review.tsx": () => import("./assets/review-BnOkQIGs.js"), "./pages/course-player/index.tsx": () => import("./assets/index-auQDKtA8.js"), "./pages/course-player/live-class/zoom-live-class.tsx": () => import("./assets/zoom-live-class-DU2tBfII.js"), "./pages/course-player/partials/certificate.tsx": () => import("./assets/certificate-hh7thVZT.js"), "./pages/course-player/partials/content-list.tsx": () => import("./assets/content-list-2qlwqit9.js"), "./pages/course-player/partials/content-summery.tsx": () => import("./assets/content-summery-Cz5CD9T-.js"), "./pages/course-player/partials/document-viewer.tsx": () => import("./assets/document-viewer-Cu3KnL-a.js"), "./pages/course-player/partials/embed-viewer.tsx": () => import("./assets/embed-viewer-CRjXuKs5.js"), "./pages/course-player/partials/forum.tsx": () => import("./assets/forum-CpSyQVk9.js"), "./pages/course-player/partials/lesson-control.tsx": () => import("./assets/lesson-control-2pONF3aa.js"), "./pages/course-player/partials/lesson-viewer.tsx": () => import("./assets/lesson-viewer-DUjewlJL.js"), "./pages/course-player/partials/lesson.tsx": () => import("./assets/lesson-5TyQSzUm.js"), "./pages/course-player/partials/navbar.tsx": () => import("./assets/navbar-CAtYIG7e.js"), "./pages/course-player/partials/quiz-viewer.tsx": () => import("./assets/quiz-viewer-D4F0copr.js"), "./pages/course-player/partials/quiz.tsx": () => import("./assets/quiz-XhaYKC48.js"), "./pages/course-player/partials/resource.tsx": () => import("./assets/resource-DG0THxN3.js"), "./pages/course-player/partials/sidebar-toggle.tsx": () => import("./assets/sidebar-toggle-BaGex-DV.js"), "./pages/courses/index.tsx": () => import("./assets/index-D3RqIDP2.js"), "./pages/courses/layout.tsx": () => import("./assets/layout-UEVwaaRo.js"), "./pages/courses/partials/course-filter.tsx": () => import("./assets/course-filter-vpgLa_T_.js"), "./pages/courses/partials/course-header.tsx": () => import("./assets/course-header-O9FaLB9v.js"), "./pages/courses/partials/course-player-button.tsx": () => import("./assets/course-player-button-B3G_ImHb.js"), "./pages/courses/partials/course-preview.tsx": () => import("./assets/course-preview-C4AKSgcW.js"), "./pages/courses/partials/course-reviews.tsx": () => import("./assets/course-reviews-VRrsMehj.js"), "./pages/courses/partials/curriculum.tsx": () => import("./assets/curriculum-DNeVh2cQ.js"), "./pages/courses/partials/details.tsx": () => import("./assets/details-GkTmZFY3.js"), "./pages/courses/partials/instructor.tsx": () => import("./assets/instructor-BtUYKCtR.js"), "./pages/courses/partials/overview.tsx": () => import("./assets/overview-BXFPAy5q.js"), "./pages/courses/partials/table-footer.tsx": () => import("./assets/table-footer-CCgdhWGP.js"), "./pages/courses/show.tsx": () => import("./assets/show-BEGc0Ix3.js"), "./pages/dashboard/blogs/categories.tsx": () => import("./assets/categories-YCAhxgAb.js"), "./pages/dashboard/blogs/create-edit.tsx": () => import("./assets/create-edit-EbpNovSR.js"), "./pages/dashboard/blogs/index.tsx": () => import("./assets/index-BE6ElyIf.js"), "./pages/dashboard/blogs/partials/blog-form.tsx": () => import("./assets/blog-form-DMOp-IZF.js"), "./pages/dashboard/blogs/partials/category-form.tsx": () => import("./assets/category-form-D6LnY0HS.js"), "./pages/dashboard/blogs/partials/table-columns.tsx": () => import("./assets/table-columns-CMZRQ4d-.js"), "./pages/dashboard/blogs/preview.tsx": () => import("./assets/preview-BU6EDxHe.js"), "./pages/dashboard/categories/index.tsx": () => import("./assets/index-BNrKEAo9.js"), "./pages/dashboard/categories/partials/category-child-form.tsx": () => import("./assets/category-child-form-DEgXCY2l.js"), "./pages/dashboard/categories/partials/category-form.tsx": () => import("./assets/category-form-8J424SgD.js"), "./pages/dashboard/certificate/certificate-builder.tsx": () => import("./assets/certificate-builder-CHOJQaYS.js"), "./pages/dashboard/certificate/certificate.tsx": () => import("./assets/certificate-DDnBDVds.js"), "./pages/dashboard/certificate/marksheet-builder.tsx": () => import("./assets/marksheet-builder-DQi3wuGo.js"), "./pages/dashboard/certificate/marksheet.tsx": () => import("./assets/marksheet-D9grNLvw.js"), "./pages/dashboard/certificate/partials/certificate-builder-form.tsx": () => import("./assets/certificate-builder-form-CuLCicBK.js"), "./pages/dashboard/certificate/partials/certificate-preview.tsx": () => import("./assets/certificate-preview-qrVQ0C-Z.js"), "./pages/dashboard/certificate/partials/marksheet-builder-form.tsx": () => import("./assets/marksheet-builder-form-Ctiuezbd.js"), "./pages/dashboard/certificate/partials/marksheet-preview.tsx": () => import("./assets/marksheet-preview-DooqmHxo.js"), "./pages/dashboard/courses/create.tsx": () => import("./assets/create-CI7HNBAD.js"), "./pages/dashboard/courses/index.tsx": () => import("./assets/index-BmBKBvYv.js"), "./pages/dashboard/courses/partials/assignment-table-column.tsx": () => import("./assets/assignment-table-column-JNuRtEMA.js"), "./pages/dashboard/courses/partials/assignment.tsx": () => import("./assets/assignment-Nm1lUBas.js"), "./pages/dashboard/courses/partials/basic.tsx": () => import("./assets/basic-Dqq-QUIv.js"), "./pages/dashboard/courses/partials/course-status-filter.tsx": () => import("./assets/course-status-filter-xmcg3tQZ.js"), "./pages/dashboard/courses/partials/course-update-header.tsx": () => import("./assets/course-update-header-3bJco8SM.js"), "./pages/dashboard/courses/partials/curriculum.tsx": () => import("./assets/curriculum-D6t77ph1.js"), "./pages/dashboard/courses/partials/drip-content.tsx": () => import("./assets/drip-content-ECqBcsK3.js"), "./pages/dashboard/courses/partials/forms/assignment-form.tsx": () => import("./assets/assignment-form-BGWLhMK-.js"), "./pages/dashboard/courses/partials/forms/assignment-grade-form.tsx": () => import("./assets/assignment-grade-form-Dr4nrhG3.js"), "./pages/dashboard/courses/partials/forms/faq-form.tsx": () => import("./assets/faq-form-CBKzs-KY.js"), "./pages/dashboard/courses/partials/forms/lesson-form.tsx": () => import("./assets/lesson-form-5zRgiXKQ.js"), "./pages/dashboard/courses/partials/forms/live-class-form.tsx": () => import("./assets/live-class-form-B6pm29lG.js"), "./pages/dashboard/courses/partials/forms/outcome-form.tsx": () => import("./assets/outcome-form-VvRrePrq.js"), "./pages/dashboard/courses/partials/forms/question-form.tsx": () => import("./assets/question-form-CH0HGsWO.js"), "./pages/dashboard/courses/partials/forms/question-questions.tsx": () => import("./assets/question-questions-BvjW4gxT.js"), "./pages/dashboard/courses/partials/forms/quiz-form.tsx": () => import("./assets/quiz-form-X7dPDFVl.js"), "./pages/dashboard/courses/partials/forms/requirement-form.tsx": () => import("./assets/requirement-form-BArab6xl.js"), "./pages/dashboard/courses/partials/forms/resource-form.tsx": () => import("./assets/resource-form-DzQB08Jf.js"), "./pages/dashboard/courses/partials/forms/section-form.tsx": () => import("./assets/section-form-3uK8X9At.js"), "./pages/dashboard/courses/partials/grade-submission-dialog.tsx": () => import("./assets/grade-submission-dialog-BhpH7r-2.js"), "./pages/dashboard/courses/partials/info.tsx": () => import("./assets/info-CgUIm6cO.js"), "./pages/dashboard/courses/partials/live-class-status.tsx": () => import("./assets/live-class-status-gcGbh0Av.js"), "./pages/dashboard/courses/partials/live-class.tsx": () => import("./assets/live-class-C6tr-eQE.js"), "./pages/dashboard/courses/partials/media.tsx": () => import("./assets/media-DUlMcqmB.js"), "./pages/dashboard/courses/partials/pricing.tsx": () => import("./assets/pricing-CTRUUH-i.js"), "./pages/dashboard/courses/partials/resource-list.tsx": () => import("./assets/resource-list-CI4-EHCo.js"), "./pages/dashboard/courses/partials/resource-modal.tsx": () => import("./assets/resource-modal-BgClk7WV.js"), "./pages/dashboard/courses/partials/seo.tsx": () => import("./assets/seo-DWA9jpAs.js"), "./pages/dashboard/courses/partials/submissions-table-column.tsx": () => import("./assets/submissions-table-column-CuAA9en5.js"), "./pages/dashboard/courses/partials/submissions.tsx": () => import("./assets/submissions-DWRdYcIH.js"), "./pages/dashboard/courses/partials/table-columns.tsx": () => import("./assets/table-columns-S-soUdHF.js"), "./pages/dashboard/courses/update.tsx": () => import("./assets/update-CeUXfml6.js"), "./pages/dashboard/enrollments/create.tsx": () => import("./assets/create-BvSVLSdK.js"), "./pages/dashboard/enrollments/index.tsx": () => import("./assets/index-BuVmLlql.js"), "./pages/dashboard/enrollments/partials/admin-table-columns.tsx": () => import("./assets/admin-table-columns-utuoga6P.js"), "./pages/dashboard/enrollments/partials/instructor-table-columns.tsx": () => import("./assets/instructor-table-columns-BtkfWYao.js"), "./pages/dashboard/index.tsx": () => import("./assets/index-DxIdauxr.js"), "./pages/dashboard/instructors/Partials/application-approval.tsx": () => import("./assets/application-approval-C-vnrsI8.js"), "./pages/dashboard/instructors/Partials/applications-table-columns.tsx": () => import("./assets/applications-table-columns-BXGVrO7w.js"), "./pages/dashboard/instructors/Partials/instructors-table-columns.tsx": () => import("./assets/instructors-table-columns-Da8WOzGG.js"), "./pages/dashboard/instructors/applications.tsx": () => import("./assets/applications-CtGLwQhC.js"), "./pages/dashboard/instructors/create-update.tsx": () => import("./assets/create-update-DQTkW-fK.js"), "./pages/dashboard/instructors/index.tsx": () => import("./assets/index-DhMV_Gnl.js"), "./pages/dashboard/job-circulars/create.tsx": () => import("./assets/create-CB1z2aVf.js"), "./pages/dashboard/job-circulars/edit.tsx": () => import("./assets/edit-DWAR0mH2.js"), "./pages/dashboard/job-circulars/index.tsx": () => import("./assets/index-Cv9opQYs.js"), "./pages/dashboard/job-circulars/partials/job-circular-form.tsx": () => import("./assets/job-circular-form-CVktTD4r.js"), "./pages/dashboard/newsletters/index.tsx": () => import("./assets/index-D1F-EPPz.js"), "./pages/dashboard/newsletters/partials/newsletter-form.tsx": () => import("./assets/newsletter-form-BLRwMBnj.js"), "./pages/dashboard/newsletters/partials/newsletter-send.tsx": () => import("./assets/newsletter-send-Cc02uM0a.js"), "./pages/dashboard/partials/revenue-chart.tsx": () => import("./assets/revenue-chart-DhXDWj0C.js"), "./pages/dashboard/payouts/history.tsx": () => import("./assets/history-Dnfwwlqm.js"), "./pages/dashboard/payouts/index.tsx": () => import("./assets/index-Du539mKG.js"), "./pages/dashboard/payouts/partials/history-table-columns.tsx": () => import("./assets/history-table-columns-5NDSN-Xh.js"), "./pages/dashboard/payouts/partials/mollie.tsx": () => import("./assets/mollie-DXDdx4f2.js"), "./pages/dashboard/payouts/partials/payouts-table-columns.tsx": () => import("./assets/payouts-table-columns-Mof1_31v.js"), "./pages/dashboard/payouts/partials/paypal.tsx": () => import("./assets/paypal-DIDFY4YX.js"), "./pages/dashboard/payouts/partials/paystack.tsx": () => import("./assets/paystack-BoYiCtil.js"), "./pages/dashboard/payouts/partials/request-table-columns.tsx": () => import("./assets/request-table-columns-bKugiQrQ.js"), "./pages/dashboard/payouts/partials/stripe.tsx": () => import("./assets/stripe-BiKYG_AI.js"), "./pages/dashboard/payouts/partials/withdraw-form.tsx": () => import("./assets/withdraw-form-DxKELqqg.js"), "./pages/dashboard/payouts/request.tsx": () => import("./assets/request-D28pSlk5.js"), "./pages/dashboard/payouts/settings.tsx": () => import("./assets/settings-BD40MyzV.js"), "./pages/dashboard/settings/account.tsx": () => import("./assets/account-tQvNE7R5.js"), "./pages/dashboard/settings/auth.tsx": () => import("./assets/auth-C922ITFB.js"), "./pages/dashboard/settings/live-class.tsx": () => import("./assets/live-class-DL8vy-XN.js"), "./pages/dashboard/settings/pages/index.tsx": () => import("./assets/index-CaWdkR25.js"), "./pages/dashboard/settings/pages/partials/custom-page-create-form.tsx": () => import("./assets/custom-page-create-form-BA3WDWt0.js"), "./pages/dashboard/settings/pages/partials/custom-pages-table-columns.tsx": () => import("./assets/custom-pages-table-columns-C1A3FUTs.js"), "./pages/dashboard/settings/pages/partials/home-pages-table-columns.tsx": () => import("./assets/home-pages-table-columns-Ca0QNyv5.js"), "./pages/dashboard/settings/pages/update.tsx": () => import("./assets/update-FYOqfFJd.js"), "./pages/dashboard/settings/partials/google.tsx": () => import("./assets/google-B0JPCWZY.js"), "./pages/dashboard/settings/partials/mollie.tsx": () => import("./assets/mollie-CCeoB2v-.js"), "./pages/dashboard/settings/partials/paypal.tsx": () => import("./assets/paypal-YyHU2aHT.js"), "./pages/dashboard/settings/partials/paystack.tsx": () => import("./assets/paystack-BPxgjpXh.js"), "./pages/dashboard/settings/partials/paytm.tsx": () => import("./assets/paytm-uiVSCsYs.js"), "./pages/dashboard/settings/partials/profile.tsx": () => import("./assets/profile-BsH22nYT.js"), "./pages/dashboard/settings/partials/razorpay.tsx": () => import("./assets/razorpay-I2PhVA8T.js"), "./pages/dashboard/settings/partials/recaptcha.tsx": () => import("./assets/recaptcha-DLgTJPad.js"), "./pages/dashboard/settings/partials/sslcommerz.tsx": () => import("./assets/sslcommerz-CKYDeW4_.js"), "./pages/dashboard/settings/partials/stripe.tsx": () => import("./assets/stripe-CuoGfOWd.js"), "./pages/dashboard/settings/partials/update-profile.tsx": () => import("./assets/update-profile-DQgtstPw.js"), "./pages/dashboard/settings/payment.tsx": () => import("./assets/payment-DNCZHwVb.js"), "./pages/dashboard/settings/smtp.tsx": () => import("./assets/smtp-BSA3HqQA.js"), "./pages/dashboard/settings/storage.tsx": () => import("./assets/storage-BejV76t_.js"), "./pages/dashboard/settings/system/index.tsx": () => import("./assets/index-BNtSr4Ri.js"), "./pages/dashboard/settings/system/partials/footer.tsx": () => import("./assets/footer-BbO8VRu8.js"), "./pages/dashboard/settings/system/partials/navbar.tsx": () => import("./assets/navbar-nazYdC9l.js"), "./pages/dashboard/settings/system/partials/style.tsx": () => import("./assets/style-C1G69tGV.js"), "./pages/dashboard/settings/system/partials/website.tsx": () => import("./assets/website-b9aUGG4O.js"), "./pages/dashboard/settings/translation/index.tsx": () => import("./assets/index-C_GowZKw.js"), "./pages/dashboard/settings/translation/partials/add-language.tsx": () => import("./assets/add-language-Cpy9mzbu.js"), "./pages/dashboard/settings/translation/properties.tsx": () => import("./assets/properties-BUWS5Ahe.js"), "./pages/dashboard/settings/translation/update.tsx": () => import("./assets/update-Ch2dFHK9.js"), "./pages/dashboard/users/Partials/edit-form.tsx": () => import("./assets/edit-form-DZ6O6Tro.js"), "./pages/dashboard/users/Partials/table-columns.tsx": () => import("./assets/table-columns-utKNgIzK.js"), "./pages/dashboard/users/index.tsx": () => import("./assets/index-CnFNRaLk.js"), "./pages/inner/index.tsx": () => import("./assets/index-CCqtvZyt.js"), "./pages/inner/partials/hero.tsx": () => import("./assets/hero-DL-8otSj.js"), "./pages/inner/sections/call-to-action.tsx": () => import("./assets/call-to-action-CVZHM1nn.js"), "./pages/inner/sections/career.tsx": () => import("./assets/career-BZcUwL25.js"), "./pages/inner/sections/hero.tsx": () => import("./assets/hero-BHJHIYqL.js"), "./pages/inner/sections/index.tsx": () => import("./assets/index-DufW-D4O.js"), "./pages/inner/sections/success-statistics.tsx": () => import("./assets/success-statistics-CnCroqkn.js"), "./pages/inner/sections/team.tsx": () => import("./assets/team-BhumrqS-.js"), "./pages/inner/sections/top-instructors.tsx": () => import("./assets/top-instructors-DiyQFLIQ.js"), "./pages/installer/Finish.tsx": () => import("./assets/Finish-CYUhK5e2.js"), "./pages/installer/Install.tsx": () => import("./assets/Install-CNmPDe78.js"), "./pages/installer/Partials/Layout.tsx": () => import("./assets/Layout-BabR1Av6.js"), "./pages/installer/Partials/Message.tsx": () => import("./assets/Message-DFXOluuJ.js"), "./pages/installer/Partials/StepNavigator.tsx": () => import("./assets/StepNavigator-Ce2PCpaO.js"), "./pages/installer/Step1.tsx": () => import("./assets/Step1-qZk_9Ea4.js"), "./pages/installer/Step2.tsx": () => import("./assets/Step2-DGxAjyht.js"), "./pages/installer/Step3.tsx": () => import("./assets/Step3-1VxkUlDf.js"), "./pages/installer/Step4.tsx": () => import("./assets/Step4-RqnDMZNB.js"), "./pages/instructors/index.tsx": () => import("./assets/index-Dhkc2g44.js"), "./pages/instructors/show.tsx": () => import("./assets/show-Fww3bXfx.js"), "./pages/intro/home-1.tsx": () => import("./assets/home-1-B6Nr6XnC.js"), "./pages/intro/home-2.tsx": () => import("./assets/home-2-BX9SgBq-.js"), "./pages/intro/home-3.tsx": () => import("./assets/home-3-CVWKfdKH.js"), "./pages/intro/home-4.tsx": () => import("./assets/home-4-DXtOU--6.js"), "./pages/intro/home-5.tsx": () => import("./assets/home-5-Dn8XPdjr.js"), "./pages/intro/partials/contents/categories.tsx": () => import("./assets/categories-B-4BDvbm.js"), "./pages/intro/partials/contents/contents.tsx": () => import("./assets/contents-BFs5tLyM.js"), "./pages/intro/partials/contents/courses.tsx": () => import("./assets/courses-CstrDQgH.js"), "./pages/intro/partials/contents/instructors.tsx": () => import("./assets/instructors-BGnprC42.js"), "./pages/intro/partials/contents/partials/categories-table-columns.tsx": () => import("./assets/categories-table-columns-DDy_goyc.js"), "./pages/intro/partials/contents/partials/courses-table-columns.tsx": () => import("./assets/courses-table-columns-ukTwrhMl.js"), "./pages/intro/partials/contents/partials/instructors-table-columns.tsx": () => import("./assets/instructors-table-columns-DAEVgN3X.js"), "./pages/intro/partials/contents/partials/table-filter.tsx": () => import("./assets/table-filter-CqFAGjch.js"), "./pages/intro/partials/contents/partials/table-footer.tsx": () => import("./assets/table-footer-DvbT0AGV.js"), "./pages/intro/partials/home-1/blogs.tsx": () => import("./assets/blogs-DogqVLkG.js"), "./pages/intro/partials/home-1/call-to-action.tsx": () => import("./assets/call-to-action-BOKjgxDz.js"), "./pages/intro/partials/home-1/cta-prev.tsx": () => import("./assets/cta-prev-Ds1V0oz6.js"), "./pages/intro/partials/home-1/faqs.tsx": () => import("./assets/faqs-BZl4jk8d.js"), "./pages/intro/partials/home-1/hero.tsx": () => import("./assets/hero-ChAJSi6M.js"), "./pages/intro/partials/home-1/new-courses.tsx": () => import("./assets/new-courses-DaLknRyh.js"), "./pages/intro/partials/home-1/overview.tsx": () => import("./assets/overview-e_i16mtv.js"), "./pages/intro/partials/home-1/partners.tsx": () => import("./assets/partners-tDVTCSh6.js"), "./pages/intro/partials/home-1/top-categories.tsx": () => import("./assets/top-categories-DS-Jq3tP.js"), "./pages/intro/partials/home-1/top-courses.tsx": () => import("./assets/top-courses-Ck8o1wSF.js"), "./pages/intro/partials/home-1/top-instructors.tsx": () => import("./assets/top-instructors-t4p4dYmx.js"), "./pages/intro/partials/home-2/blogs.tsx": () => import("./assets/blogs-Cc5Au_7p.js"), "./pages/intro/partials/home-2/call-to-action.tsx": () => import("./assets/call-to-action-65Tq5Y2r.js"), "./pages/intro/partials/home-2/cta-prev.tsx": () => import("./assets/cta-prev-lEF3Vka8.js"), "./pages/intro/partials/home-2/hero.tsx": () => import("./assets/hero-BspOJD3R.js"), "./pages/intro/partials/home-2/new-courses.tsx": () => import("./assets/new-courses-D6TB4DcK.js"), "./pages/intro/partials/home-2/overview.tsx": () => import("./assets/overview-D6Sdk_sB.js"), "./pages/intro/partials/home-2/partners.tsx": () => import("./assets/partners-CHMhKE54.js"), "./pages/intro/partials/home-2/testimonials.tsx": () => import("./assets/testimonials-BKfoOgX0.js"), "./pages/intro/partials/home-2/top-categories.tsx": () => import("./assets/top-categories-C5Ky1hes.js"), "./pages/intro/partials/home-2/top-courses.tsx": () => import("./assets/top-courses-Ct_uBdV7.js"), "./pages/intro/partials/home-2/top-instructors.tsx": () => import("./assets/top-instructors-B8Tf4SN8.js"), "./pages/intro/partials/home-3/blogs.tsx": () => import("./assets/blogs-Hls0xUw6.js"), "./pages/intro/partials/home-3/call-to-action.tsx": () => import("./assets/call-to-action-BXbeGSil.js"), "./pages/intro/partials/home-3/category-courses.tsx": () => import("./assets/category-courses-C178zWw3.js"), "./pages/intro/partials/home-3/features.tsx": () => import("./assets/features-UvAbV0BZ.js"), "./pages/intro/partials/home-3/hero.tsx": () => import("./assets/hero-DgcRMYv-.js"), "./pages/intro/partials/home-3/new-courses.tsx": () => import("./assets/new-courses-rnB4W6Rs.js"), "./pages/intro/partials/home-3/overview.tsx": () => import("./assets/overview-B3zc86qh.js"), "./pages/intro/partials/home-3/partners.tsx": () => import("./assets/partners-umsfWFNt.js"), "./pages/intro/partials/home-3/testimonials.tsx": () => import("./assets/testimonials-BFmyOyx4.js"), "./pages/intro/partials/home-3/top-categories.tsx": () => import("./assets/top-categories-SGLpIA3T.js"), "./pages/intro/partials/home-3/top-instructors.tsx": () => import("./assets/top-instructors-r-LRzl1m.js"), "./pages/intro/partials/home-4/blogs.tsx": () => import("./assets/blogs-D5AzBLq8.js"), "./pages/intro/partials/home-4/call-to-action.tsx": () => import("./assets/call-to-action-BOC4A6mq.js"), "./pages/intro/partials/home-4/faqs.tsx": () => import("./assets/faqs-9VVE-rnQ.js"), "./pages/intro/partials/home-4/hero.tsx": () => import("./assets/hero-DZN04z_E.js"), "./pages/intro/partials/home-4/instructor.tsx": () => import("./assets/instructor-C_kkd6g8.js"), "./pages/intro/partials/home-4/overview.tsx": () => import("./assets/overview-BC5r2KD7.js"), "./pages/intro/partials/home-4/partners.tsx": () => import("./assets/partners-Bwd1iFUe.js"), "./pages/intro/partials/home-4/statistics.tsx": () => import("./assets/statistics-CXB0Isyj.js"), "./pages/intro/partials/home-4/testimonials.tsx": () => import("./assets/testimonials-6_LL6WJP.js"), "./pages/intro/partials/home-4/top-categories.tsx": () => import("./assets/top-categories-sZTx-tHh.js"), "./pages/intro/partials/home-4/top-course.tsx": () => import("./assets/top-course-B7hgfCWn.js"), "./pages/intro/partials/home-4/top-courses.tsx": () => import("./assets/top-courses-JCPM6l75.js"), "./pages/intro/partials/home-5/blogs.tsx": () => import("./assets/blogs-xEm3oA4n.js"), "./pages/intro/partials/home-5/call-to-action.tsx": () => import("./assets/call-to-action-DoHAygx7.js"), "./pages/intro/partials/home-5/faqs.tsx": () => import("./assets/faqs-DDSYbFYX.js"), "./pages/intro/partials/home-5/hero.tsx": () => import("./assets/hero-DOLMGlrE.js"), "./pages/intro/partials/home-5/instructor.tsx": () => import("./assets/instructor-BmNHi2zS.js"), "./pages/intro/partials/home-5/statistics.tsx": () => import("./assets/statistics-CRsO5RNb.js"), "./pages/intro/partials/home-5/testimonials.tsx": () => import("./assets/testimonials-8JlI6xW8.js"), "./pages/intro/partials/home-5/top-categories.tsx": () => import("./assets/top-categories-C63xziNM.js"), "./pages/intro/partials/home-5/top-course.tsx": () => import("./assets/top-course-DiSXDq2Y.js"), "./pages/intro/partials/home-5/top-courses.tsx": () => import("./assets/top-courses-DiYLgkUk.js"), "./pages/intro/partials/instructor-socials.tsx": () => import("./assets/instructor-socials-Dio3oqYc.js"), "./pages/intro/partials/layout.tsx": () => import("./assets/layout-BOXNcdFo.js"), "./pages/intro/partials/section.tsx": () => import("./assets/section-7thyMMDM.js"), "./pages/job-circulars/show.tsx": () => import("./assets/show-CdttE4KI.js"), "./pages/notification/index.tsx": () => import("./assets/index-BAD2CQ5J.js"), "./pages/notification/show.tsx": () => import("./assets/show-BFMAqh6E.js"), "./pages/student/course.tsx": () => import("./assets/course-DwS-Yr_C.js"), "./pages/student/index.tsx": () => import("./assets/index-BiTm77TA.js"), "./pages/student/partials/assignment-columns.tsx": () => import("./assets/assignment-columns-CiuuLSWz.js"), "./pages/student/partials/assignment-dialog.tsx": () => import("./assets/assignment-dialog-Di2nG0gO.js"), "./pages/student/partials/assignment-submission-form.tsx": () => import("./assets/assignment-submission-form-CbF_d9Rg.js"), "./pages/student/partials/layout.tsx": () => import("./assets/layout-k39VoUq1.js"), "./pages/student/partials/lesson.tsx": () => import("./assets/lesson-CJOS5rxx.js"), "./pages/student/partials/quiz-result-dialog.tsx": () => import("./assets/quiz-result-dialog-CSPFFEM9.js"), "./pages/student/partials/quiz-status.tsx": () => import("./assets/quiz-status-D8lbUiq3.js"), "./pages/student/partials/quiz.tsx": () => import("./assets/quiz-Dd_nsC5a.js"), "./pages/student/partials/tab-lists.tsx": () => import("./assets/tab-lists-x6p3WmGt.js"), "./pages/student/tabs-content/assignment-details.tsx": () => import("./assets/assignment-details-v4A17tNN.js"), "./pages/student/tabs-content/assignment-submission.tsx": () => import("./assets/assignment-submission-2iL5cT9C.js"), "./pages/student/tabs-content/assignments.tsx": () => import("./assets/assignments-Bs6VrJBQ.js"), "./pages/student/tabs-content/become-instructor.tsx": () => import("./assets/become-instructor-C8WcFnrC.js"), "./pages/student/tabs-content/certificate.tsx": () => import("./assets/certificate-BZ6iNkZm.js"), "./pages/student/tabs-content/live_classes.tsx": () => import("./assets/live_classes-DFdaQTZo.js"), "./pages/student/tabs-content/modules.tsx": () => import("./assets/modules-BCKBof0K.js"), "./pages/student/tabs-content/my-courses.tsx": () => import("./assets/my-courses-Bg5_ojxa.js"), "./pages/student/tabs-content/my-profile.tsx": () => import("./assets/my-profile-3gGCar68.js"), "./pages/student/tabs-content/quizzes.tsx": () => import("./assets/quizzes-UQUoLtGp.js"), "./pages/student/tabs-content/resources.tsx": () => import("./assets/resources-zCsmKzyb.js"), "./pages/student/tabs-content/settings.tsx": () => import("./assets/settings-DkPVGUJS.js"), "./pages/student/tabs-content/wishlist.tsx": () => import("./assets/wishlist-B9X9n1c-.js"), "./pages/system/login.tsx": () => import("./assets/login-ARbvoE-b.js"), "./pages/system/maintenance.tsx": () => import("./assets/maintenance-DP-iWrA0.js"), "./pages/system/partials/application-backup-list.tsx": () => import("./assets/application-backup-list-CDxoiTGM.js"), "./pages/system/partials/application-backup.tsx": () => import("./assets/application-backup-tCxHqXQl.js"), "./pages/system/partials/application-reboot.tsx": () => import("./assets/application-reboot-BJwoDrMZ.js"), "./pages/system/partials/application-update.tsx": () => import("./assets/application-update-BMLaTlbi.js"), "./pages/system/partials/backgup-downloader.tsx": () => import("./assets/backgup-downloader-DoQq-N2t.js") })),
    setup: ({ App, props }) => {
      global.route = (name, params, absolute) => T(name, params, absolute, {
        // @ts-expect-error
        ...page.props.ziggy,
        // @ts-expect-error
        location: new URL(page.props.ziggy.location)
      });
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
