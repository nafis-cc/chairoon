(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [455],
  {
    57588: function (t) {
      (function () {
        var e, r, i, s, n, a;
        "undefined" !== typeof performance && null !== performance && performance.now
          ? (t.exports = function () {
              return performance.now();
            })
          : "undefined" !== typeof process && null !== process && process.hrtime
          ? ((t.exports = function () {
              return (e() - n) / 1e6;
            }),
            (r = process.hrtime),
            (s = (e = function () {
              var t;
              return 1e9 * (t = r())[0] + t[1];
            })()),
            (a = 1e9 * process.uptime()),
            (n = s - a))
          : Date.now
          ? ((t.exports = function () {
              return Date.now() - i;
            }),
            (i = Date.now()))
          : ((t.exports = function () {
              return new Date().getTime() - i;
            }),
            (i = new Date().getTime()));
      }).call(this);
    },
    8073: (t, e, r) => {
      for (
        var i = r(57588),
          s = "undefined" === typeof window ? r.g : window,
          n = ["moz", "webkit"],
          a = "AnimationFrame",
          o = s["request" + a],
          h = s["cancel" + a] || s["cancelRequest" + a],
          l = 0;
        !o && l < n.length;
        l++
      )
        (o = s[n[l] + "Request" + a]),
          (h = s[n[l] + "Cancel" + a] || s[n[l] + "CancelRequest" + a]);
      if (!o || !h) {
        var u = 0,
          c = 0,
          g = [],
          d = 1e3 / 60;
        (o = function (t) {
          if (0 === g.length) {
            var e = i(),
              r = Math.max(0, d - (e - u));
            (u = r + e),
              setTimeout(function () {
                var t = g.slice(0);
                g.length = 0;
                for (var e = 0; e < t.length; e++)
                  if (!t[e].cancelled)
                    try {
                      t[e].callback(u);
                    } catch (r) {
                      setTimeout(function () {
                        throw r;
                      }, 0);
                    }
              }, Math.round(r));
          }
          return g.push({ handle: ++c, callback: t, cancelled: !1 }), c;
        }),
          (h = function (t) {
            for (var e = 0; e < g.length; e++) g[e].handle === t && (g[e].cancelled = !0);
          });
      }
      (t.exports = function (t) {
        return o.call(s, t);
      }),
        (t.exports.cancel = function () {
          h.apply(s, arguments);
        }),
        (t.exports.polyfill = function (t) {
          t || (t = s), (t.requestAnimationFrame = o), (t.cancelAnimationFrame = h);
        });
    },
    34566: (t) => {
      t.exports = function (t) {
        (this.ok = !1),
          (this.alpha = 1),
          "#" == t.charAt(0) && (t = t.substr(1, 6)),
          (t = (t = t.replace(/ /g, "")).toLowerCase());
        var e = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "00ffff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000000",
          blanchedalmond: "ffebcd",
          blue: "0000ff",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "00ffff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dodgerblue: "1e90ff",
          feldspar: "d19275",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "ff00ff",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgrey: "d3d3d3",
          lightgreen: "90ee90",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslateblue: "8470ff",
          lightslategray: "778899",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "00ff00",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "ff00ff",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370d8",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "d87093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "ff0000",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          violetred: "d02090",
          wheat: "f5deb3",
          white: "ffffff",
          whitesmoke: "f5f5f5",
          yellow: "ffff00",
          yellowgreen: "9acd32",
        };
        t = e[t] || t;
        for (
          var r = [
              {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
                process: function (t) {
                  return [
                    parseInt(t[1]),
                    parseInt(t[2]),
                    parseInt(t[3]),
                    parseFloat(t[4]),
                  ];
                },
              },
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function (t) {
                  return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
                },
              },
              {
                re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                example: ["#00ff00", "336699"],
                process: function (t) {
                  return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
                },
              },
              {
                re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                example: ["#fb0", "f0f"],
                process: function (t) {
                  return [
                    parseInt(t[1] + t[1], 16),
                    parseInt(t[2] + t[2], 16),
                    parseInt(t[3] + t[3], 16),
                  ];
                },
              },
            ],
            i = 0;
          i < r.length;
          i++
        ) {
          var s = r[i].re,
            n = r[i].process,
            a = s.exec(t);
          if (a) {
            var o = n(a);
            (this.r = o[0]),
              (this.g = o[1]),
              (this.b = o[2]),
              o.length > 3 && (this.alpha = o[3]),
              (this.ok = !0);
          }
        }
        (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.alpha =
            this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha),
          (this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
          }),
          (this.toRGBA = function () {
            return (
              "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")"
            );
          }),
          (this.toHex = function () {
            var t = this.r.toString(16),
              e = this.g.toString(16),
              r = this.b.toString(16);
            return (
              1 == t.length && (t = "0" + t),
              1 == e.length && (e = "0" + e),
              1 == r.length && (r = "0" + r),
              "#" + t + e + r
            );
          }),
          (this.getHelpXML = function () {
            for (var t = new Array(), i = 0; i < r.length; i++)
              for (var s = r[i].example, n = 0; n < s.length; n++) t[t.length] = s[n];
            for (var a in e) t[t.length] = a;
            var o = document.createElement("ul");
            o.setAttribute("id", "rgbcolor-examples");
            for (i = 0; i < t.length; i++)
              try {
                var h = document.createElement("li"),
                  l = new RGBColor(t[i]),
                  u = document.createElement("div");
                (u.style.cssText =
                  "margin: 3px; border: 1px solid black; background:" +
                  l.toHex() +
                  "; color:" +
                  l.toHex()),
                  u.appendChild(document.createTextNode("test"));
                var c = document.createTextNode(
                  " " + t[i] + " -> " + l.toRGB() + " -> " + l.toHex()
                );
                h.appendChild(u), h.appendChild(c), o.appendChild(h);
              } catch (g) {}
            return o;
          });
      };
    },
    68455: (t, e, r) => {
      "use strict";
      function i(t, e, r, i, s, n, a) {
        try {
          var o = t[n](a),
            h = o.value;
        } catch (t) {
          return void r(t);
        }
        o.done ? e(h) : Promise.resolve(h).then(i, s);
      }
      function s(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (s, n) {
            var a = t.apply(e, r);
            function o(t) {
              i(a, s, n, o, h, "next", t);
            }
            function h(t) {
              i(a, s, n, o, h, "throw", t);
            }
            o(void 0);
          });
        };
      }
      r.r(e),
        r.d(e, {
          AElement: () => le,
          AnimateColorElement: () => ie,
          AnimateElement: () => re,
          AnimateTransformElement: () => se,
          BoundingBox: () => kt,
          CB1: () => rt,
          CB2: () => it,
          CB3: () => st,
          CB4: () => nt,
          Canvg: () => He,
          CircleElement: () => Xt,
          ClipPathElement: () => Pe,
          DefsElement: () => $t,
          DescElement: () => ke,
          Document: () => De,
          Element: () => Ot,
          EllipseElement: () => Yt,
          FeColorMatrixElement: () => Te,
          FeCompositeElement: () => Ne,
          FeDropShadowElement: () => Ee,
          FeGaussianBlurElement: () => Ve,
          FeMorphologyElement: () => Me,
          FilterElement: () => Oe,
          Font: () => _t,
          FontElement: () => ne,
          FontFaceElement: () => ae,
          GElement: () => Zt,
          GlyphElement: () => Dt,
          GradientElement: () => Kt,
          ImageElement: () => pe,
          LineElement: () => jt,
          LinearGradientElement: () => Jt,
          MarkerElement: () => Gt,
          MaskElement: () => Ae,
          Matrix: () => wt,
          MissingGlyphElement: () => oe,
          Mouse: () => gt,
          PSEUDO_ZERO: () => K,
          Parser: () => vt,
          PathElement: () => Lt,
          PathParser: () => Rt,
          PatternElement: () => Wt,
          Point: () => ct,
          PolygonElement: () => Qt,
          PolylineElement: () => qt,
          Property: () => lt,
          QB1: () => at,
          QB2: () => ot,
          QB3: () => ht,
          RadialGradientElement: () => te,
          RectElement: () => Ut,
          RenderedElement: () => It,
          Rotate: () => bt,
          SVGElement: () => Ft,
          SVGFontLoader: () => ye,
          Scale: () => St,
          Screen: () => ft,
          Skew: () => Tt,
          SkewX: () => At,
          SkewY: () => Ct,
          StopElement: () => ee,
          StyleElement: () => me,
          SymbolElement: () => fe,
          TRefElement: () => he,
          TSpanElement: () => zt,
          TextElement: () => Bt,
          TextPathElement: () => ge,
          TitleElement: () => _e,
          Transform: () => Pt,
          Translate: () => xt,
          UnknownElement: () => Et,
          UseElement: () => ve,
          ViewPort: () => ut,
          compressSpaces: () => I,
          default: () => He,
          getSelectorSpecificity: () => Z,
          normalizeAttributeName: () => H,
          normalizeColor: () => U,
          parseExternalUrl: () => F,
          presets: () => R,
          toNumbers: () => B,
          trimLeft: () => L,
          trimRight: () => D,
          vectorMagnitude: () => J,
          vectorsAngle: () => et,
          vectorsRatio: () => tt,
        });
      r(30483), r(12200);
      var n = r(64467),
        a = r(8073),
        o = r(34566),
        h = function (t, e) {
          return (h =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            })(t, e);
        };
      function l(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function r() {
          this.constructor = t;
        }
        h(t, e),
          (t.prototype =
            null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
      }
      function u(t, e) {
        var r = t[0],
          i = t[1];
        return [r * Math.cos(e) - i * Math.sin(e), r * Math.sin(e) + i * Math.cos(e)];
      }
      function c() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var r = 0; r < t.length; r++)
          if ("number" != typeof t[r])
            throw new Error(
              "assertNumbers arguments[" +
                r +
                "] is not a number. " +
                typeof t[r] +
                " == typeof " +
                t[r]
            );
        return !0;
      }
      var g = Math.PI;
      function d(t, e, r) {
        (t.lArcFlag = 0 === t.lArcFlag ? 0 : 1),
          (t.sweepFlag = 0 === t.sweepFlag ? 0 : 1);
        var i = t.rX,
          s = t.rY,
          n = t.x,
          a = t.y;
        (i = Math.abs(t.rX)), (s = Math.abs(t.rY));
        var o = u([(e - n) / 2, (r - a) / 2], (-t.xRot / 180) * g),
          h = o[0],
          l = o[1],
          c = Math.pow(h, 2) / Math.pow(i, 2) + Math.pow(l, 2) / Math.pow(s, 2);
        1 < c && ((i *= Math.sqrt(c)), (s *= Math.sqrt(c))), (t.rX = i), (t.rY = s);
        var d = Math.pow(i, 2) * Math.pow(l, 2) + Math.pow(s, 2) * Math.pow(h, 2),
          p =
            (t.lArcFlag !== t.sweepFlag ? 1 : -1) *
            Math.sqrt(Math.max(0, (Math.pow(i, 2) * Math.pow(s, 2) - d) / d)),
          f = ((i * l) / s) * p,
          y = ((-s * h) / i) * p,
          m = u([f, y], (t.xRot / 180) * g);
        (t.cX = m[0] + (e + n) / 2),
          (t.cY = m[1] + (r + a) / 2),
          (t.phi1 = Math.atan2((l - y) / s, (h - f) / i)),
          (t.phi2 = Math.atan2((-l - y) / s, (-h - f) / i)),
          0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * g),
          1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * g),
          (t.phi1 *= 180 / g),
          (t.phi2 *= 180 / g);
      }
      function p(t, e, r) {
        c(t, e, r);
        var i = t * t + e * e - r * r;
        if (0 > i) return [];
        if (0 === i) return [[(t * r) / (t * t + e * e), (e * r) / (t * t + e * e)]];
        var s = Math.sqrt(i);
        return [
          [(t * r + e * s) / (t * t + e * e), (e * r - t * s) / (t * t + e * e)],
          [(t * r - e * s) / (t * t + e * e), (e * r + t * s) / (t * t + e * e)],
        ];
      }
      var f,
        y = Math.PI / 180;
      function m(t, e, r) {
        return (1 - r) * t + r * e;
      }
      function v(t, e, r, i) {
        return t + Math.cos((i / 180) * g) * e + Math.sin((i / 180) * g) * r;
      }
      function x(t, e, r, i) {
        var s = 1e-6,
          n = e - t,
          a = r - e,
          o = 3 * n + 3 * (i - r) - 6 * a,
          h = 6 * (a - n),
          l = 3 * n;
        return Math.abs(o) < s
          ? [-l / h]
          : (function (t, e, r) {
              void 0 === r && (r = 1e-6);
              var i = (t * t) / 4 - e;
              if (i < -r) return [];
              if (i <= r) return [-t / 2];
              var s = Math.sqrt(i);
              return [-t / 2 - s, -t / 2 + s];
            })(h / o, l / o, s);
      }
      function b(t, e, r, i, s) {
        var n = 1 - s;
        return (
          t * (n * n * n) + e * (3 * n * n * s) + r * (3 * n * s * s) + i * (s * s * s)
        );
      }
      !(function (t) {
        function e() {
          return s(function (t, e, r) {
            return (
              t.relative &&
                (void 0 !== t.x1 && (t.x1 += e),
                void 0 !== t.y1 && (t.y1 += r),
                void 0 !== t.x2 && (t.x2 += e),
                void 0 !== t.y2 && (t.y2 += r),
                void 0 !== t.x && (t.x += e),
                void 0 !== t.y && (t.y += r),
                (t.relative = !1)),
              t
            );
          });
        }
        function r() {
          var t = NaN,
            e = NaN,
            r = NaN,
            i = NaN;
          return s(function (s, n, a) {
            return (
              s.type & P.SMOOTH_CURVE_TO &&
                ((s.type = P.CURVE_TO),
                (t = isNaN(t) ? n : t),
                (e = isNaN(e) ? a : e),
                (s.x1 = s.relative ? n - t : 2 * n - t),
                (s.y1 = s.relative ? a - e : 2 * a - e)),
              s.type & P.CURVE_TO
                ? ((t = s.relative ? n + s.x2 : s.x2), (e = s.relative ? a + s.y2 : s.y2))
                : ((t = NaN), (e = NaN)),
              s.type & P.SMOOTH_QUAD_TO &&
                ((s.type = P.QUAD_TO),
                (r = isNaN(r) ? n : r),
                (i = isNaN(i) ? a : i),
                (s.x1 = s.relative ? n - r : 2 * n - r),
                (s.y1 = s.relative ? a - i : 2 * a - i)),
              s.type & P.QUAD_TO
                ? ((r = s.relative ? n + s.x1 : s.x1), (i = s.relative ? a + s.y1 : s.y1))
                : ((r = NaN), (i = NaN)),
              s
            );
          });
        }
        function i() {
          var t = NaN,
            e = NaN;
          return s(function (r, i, s) {
            if (
              (r.type & P.SMOOTH_QUAD_TO &&
                ((r.type = P.QUAD_TO),
                (t = isNaN(t) ? i : t),
                (e = isNaN(e) ? s : e),
                (r.x1 = r.relative ? i - t : 2 * i - t),
                (r.y1 = r.relative ? s - e : 2 * s - e)),
              r.type & P.QUAD_TO)
            ) {
              (t = r.relative ? i + r.x1 : r.x1), (e = r.relative ? s + r.y1 : r.y1);
              var n = r.x1,
                a = r.y1;
              (r.type = P.CURVE_TO),
                (r.x1 = ((r.relative ? 0 : i) + 2 * n) / 3),
                (r.y1 = ((r.relative ? 0 : s) + 2 * a) / 3),
                (r.x2 = (r.x + 2 * n) / 3),
                (r.y2 = (r.y + 2 * a) / 3);
            } else (t = NaN), (e = NaN);
            return r;
          });
        }
        function s(t) {
          var e = 0,
            r = 0,
            i = NaN,
            s = NaN;
          return function (n) {
            if (isNaN(i) && !(n.type & P.MOVE_TO))
              throw new Error("path must start with moveto");
            var a = t(n, e, r, i, s);
            return (
              n.type & P.CLOSE_PATH && ((e = i), (r = s)),
              void 0 !== n.x && (e = n.relative ? e + n.x : n.x),
              void 0 !== n.y && (r = n.relative ? r + n.y : n.y),
              n.type & P.MOVE_TO && ((i = e), (s = r)),
              a
            );
          };
        }
        function n(t, e, r, i, n, a) {
          return (
            c(t, e, r, i, n, a),
            s(function (s, o, h, l) {
              var u = s.x1,
                c = s.x2,
                g = s.relative && !isNaN(l),
                d = void 0 !== s.x ? s.x : g ? 0 : o,
                p = void 0 !== s.y ? s.y : g ? 0 : h;
              function f(t) {
                return t * t;
              }
              s.type & P.HORIZ_LINE_TO &&
                0 !== e &&
                ((s.type = P.LINE_TO), (s.y = s.relative ? 0 : h)),
                s.type & P.VERT_LINE_TO &&
                  0 !== r &&
                  ((s.type = P.LINE_TO), (s.x = s.relative ? 0 : o)),
                void 0 !== s.x && (s.x = s.x * t + p * r + (g ? 0 : n)),
                void 0 !== s.y && (s.y = d * e + s.y * i + (g ? 0 : a)),
                void 0 !== s.x1 && (s.x1 = s.x1 * t + s.y1 * r + (g ? 0 : n)),
                void 0 !== s.y1 && (s.y1 = u * e + s.y1 * i + (g ? 0 : a)),
                void 0 !== s.x2 && (s.x2 = s.x2 * t + s.y2 * r + (g ? 0 : n)),
                void 0 !== s.y2 && (s.y2 = c * e + s.y2 * i + (g ? 0 : a));
              var y = t * i - e * r;
              if (void 0 !== s.xRot && (1 !== t || 0 !== e || 0 !== r || 1 !== i))
                if (0 === y)
                  delete s.rX,
                    delete s.rY,
                    delete s.xRot,
                    delete s.lArcFlag,
                    delete s.sweepFlag,
                    (s.type = P.LINE_TO);
                else {
                  var m = (s.xRot * Math.PI) / 180,
                    v = Math.sin(m),
                    x = Math.cos(m),
                    b = 1 / f(s.rX),
                    S = 1 / f(s.rY),
                    w = f(x) * b + f(v) * S,
                    T = 2 * v * x * (b - S),
                    A = f(v) * b + f(x) * S,
                    C = w * i * i - T * e * i + A * e * e,
                    O = T * (t * i + e * r) - 2 * (w * r * i + A * t * e),
                    E = w * r * r - T * t * r + A * t * t,
                    M = ((Math.atan2(O, C - E) + Math.PI) % Math.PI) / 2,
                    N = Math.sin(M),
                    V = Math.cos(M);
                  (s.rX = Math.abs(y) / Math.sqrt(C * f(V) + O * N * V + E * f(N))),
                    (s.rY = Math.abs(y) / Math.sqrt(C * f(N) - O * N * V + E * f(V))),
                    (s.xRot = (180 * M) / Math.PI);
                }
              return void 0 !== s.sweepFlag && 0 > y && (s.sweepFlag = +!s.sweepFlag), s;
            })
          );
        }
        (t.ROUND = function (t) {
          function e(e) {
            return Math.round(e * t) / t;
          }
          return (
            void 0 === t && (t = 1e13),
            c(t),
            function (t) {
              return (
                void 0 !== t.x1 && (t.x1 = e(t.x1)),
                void 0 !== t.y1 && (t.y1 = e(t.y1)),
                void 0 !== t.x2 && (t.x2 = e(t.x2)),
                void 0 !== t.y2 && (t.y2 = e(t.y2)),
                void 0 !== t.x && (t.x = e(t.x)),
                void 0 !== t.y && (t.y = e(t.y)),
                void 0 !== t.rX && (t.rX = e(t.rX)),
                void 0 !== t.rY && (t.rY = e(t.rY)),
                t
              );
            }
          );
        }),
          (t.TO_ABS = e),
          (t.TO_REL = function () {
            return s(function (t, e, r) {
              return (
                t.relative ||
                  (void 0 !== t.x1 && (t.x1 -= e),
                  void 0 !== t.y1 && (t.y1 -= r),
                  void 0 !== t.x2 && (t.x2 -= e),
                  void 0 !== t.y2 && (t.y2 -= r),
                  void 0 !== t.x && (t.x -= e),
                  void 0 !== t.y && (t.y -= r),
                  (t.relative = !0)),
                t
              );
            });
          }),
          (t.NORMALIZE_HVZ = function (t, e, r) {
            return (
              void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              s(function (i, s, n, a, o) {
                if (isNaN(a) && !(i.type & P.MOVE_TO))
                  throw new Error("path must start with moveto");
                return (
                  e &&
                    i.type & P.HORIZ_LINE_TO &&
                    ((i.type = P.LINE_TO), (i.y = i.relative ? 0 : n)),
                  r &&
                    i.type & P.VERT_LINE_TO &&
                    ((i.type = P.LINE_TO), (i.x = i.relative ? 0 : s)),
                  t &&
                    i.type & P.CLOSE_PATH &&
                    ((i.type = P.LINE_TO),
                    (i.x = i.relative ? a - s : a),
                    (i.y = i.relative ? o - n : o)),
                  i.type & P.ARC &&
                    (0 === i.rX || 0 === i.rY) &&
                    ((i.type = P.LINE_TO),
                    delete i.rX,
                    delete i.rY,
                    delete i.xRot,
                    delete i.lArcFlag,
                    delete i.sweepFlag),
                  i
                );
              })
            );
          }),
          (t.NORMALIZE_ST = r),
          (t.QT_TO_C = i),
          (t.INFO = s),
          (t.SANITIZE = function (t) {
            void 0 === t && (t = 0), c(t);
            var e = NaN,
              r = NaN,
              i = NaN,
              n = NaN;
            return s(function (s, a, o, h, l) {
              var u = Math.abs,
                c = !1,
                g = 0,
                d = 0;
              if (
                (s.type & P.SMOOTH_CURVE_TO &&
                  ((g = isNaN(e) ? 0 : a - e), (d = isNaN(r) ? 0 : o - r)),
                s.type & (P.CURVE_TO | P.SMOOTH_CURVE_TO)
                  ? ((e = s.relative ? a + s.x2 : s.x2),
                    (r = s.relative ? o + s.y2 : s.y2))
                  : ((e = NaN), (r = NaN)),
                s.type & P.SMOOTH_QUAD_TO
                  ? ((i = isNaN(i) ? a : 2 * a - i), (n = isNaN(n) ? o : 2 * o - n))
                  : s.type & P.QUAD_TO
                  ? ((i = s.relative ? a + s.x1 : s.x1),
                    (n = s.relative ? o + s.y1 : s.y2))
                  : ((i = NaN), (n = NaN)),
                s.type & P.LINE_COMMANDS ||
                  (s.type & P.ARC && (0 === s.rX || 0 === s.rY || !s.lArcFlag)) ||
                  s.type & P.CURVE_TO ||
                  s.type & P.SMOOTH_CURVE_TO ||
                  s.type & P.QUAD_TO ||
                  s.type & P.SMOOTH_QUAD_TO)
              ) {
                var p = void 0 === s.x ? 0 : s.relative ? s.x : s.x - a,
                  f = void 0 === s.y ? 0 : s.relative ? s.y : s.y - o;
                (g = isNaN(i)
                  ? void 0 === s.x1
                    ? g
                    : s.relative
                    ? s.x
                    : s.x1 - a
                  : i - a),
                  (d = isNaN(n)
                    ? void 0 === s.y1
                      ? d
                      : s.relative
                      ? s.y
                      : s.y1 - o
                    : n - o);
                var y = void 0 === s.x2 ? 0 : s.relative ? s.x : s.x2 - a,
                  m = void 0 === s.y2 ? 0 : s.relative ? s.y : s.y2 - o;
                u(p) <= t &&
                  u(f) <= t &&
                  u(g) <= t &&
                  u(d) <= t &&
                  u(y) <= t &&
                  u(m) <= t &&
                  (c = !0);
              }
              return (
                s.type & P.CLOSE_PATH && u(a - h) <= t && u(o - l) <= t && (c = !0),
                c ? [] : s
              );
            });
          }),
          (t.MATRIX = n),
          (t.ROTATE = function (t, e, r) {
            void 0 === e && (e = 0), void 0 === r && (r = 0), c(t, e, r);
            var i = Math.sin(t),
              s = Math.cos(t);
            return n(s, i, -i, s, e - e * s + r * i, r - e * i - r * s);
          }),
          (t.TRANSLATE = function (t, e) {
            return void 0 === e && (e = 0), c(t, e), n(1, 0, 0, 1, t, e);
          }),
          (t.SCALE = function (t, e) {
            return void 0 === e && (e = t), c(t, e), n(t, 0, 0, e, 0, 0);
          }),
          (t.SKEW_X = function (t) {
            return c(t), n(1, 0, Math.atan(t), 1, 0, 0);
          }),
          (t.SKEW_Y = function (t) {
            return c(t), n(1, Math.atan(t), 0, 1, 0, 0);
          }),
          (t.X_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), c(t), n(-1, 0, 0, 1, t, 0);
          }),
          (t.Y_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), c(t), n(1, 0, 0, -1, 0, t);
          }),
          (t.A_TO_C = function () {
            return s(function (t, e, r) {
              return P.ARC === t.type
                ? (function (t, e, r) {
                    var i, s, n, a;
                    t.cX || d(t, e, r);
                    for (
                      var o = Math.min(t.phi1, t.phi2),
                        h = Math.max(t.phi1, t.phi2) - o,
                        l = Math.ceil(h / 90),
                        c = new Array(l),
                        g = e,
                        p = r,
                        f = 0;
                      f < l;
                      f++
                    ) {
                      var v = m(t.phi1, t.phi2, f / l),
                        x = m(t.phi1, t.phi2, (f + 1) / l),
                        b = x - v,
                        S = (4 / 3) * Math.tan((b * y) / 4),
                        w = [
                          Math.cos(v * y) - S * Math.sin(v * y),
                          Math.sin(v * y) + S * Math.cos(v * y),
                        ],
                        T = w[0],
                        A = w[1],
                        C = [Math.cos(x * y), Math.sin(x * y)],
                        O = C[0],
                        E = C[1],
                        M = [O + S * Math.sin(x * y), E - S * Math.cos(x * y)],
                        N = M[0],
                        V = M[1];
                      c[f] = { relative: t.relative, type: P.CURVE_TO };
                      var _ = function (e, r) {
                        var i = u([e * t.rX, r * t.rY], t.xRot),
                          s = i[0],
                          n = i[1];
                        return [t.cX + s, t.cY + n];
                      };
                      (i = _(T, A)),
                        (c[f].x1 = i[0]),
                        (c[f].y1 = i[1]),
                        (s = _(N, V)),
                        (c[f].x2 = s[0]),
                        (c[f].y2 = s[1]),
                        (n = _(O, E)),
                        (c[f].x = n[0]),
                        (c[f].y = n[1]),
                        t.relative &&
                          ((c[f].x1 -= g),
                          (c[f].y1 -= p),
                          (c[f].x2 -= g),
                          (c[f].y2 -= p),
                          (c[f].x -= g),
                          (c[f].y -= p)),
                        (g = (a = [c[f].x, c[f].y])[0]),
                        (p = a[1]);
                    }
                    return c;
                  })(t, t.relative ? 0 : e, t.relative ? 0 : r)
                : t;
            });
          }),
          (t.ANNOTATE_ARCS = function () {
            return s(function (t, e, r) {
              return t.relative && ((e = 0), (r = 0)), P.ARC === t.type && d(t, e, r), t;
            });
          }),
          (t.CLONE = function () {
            return function (t) {
              var e = {};
              for (var r in t) e[r] = t[r];
              return e;
            };
          }),
          (t.CALCULATE_BOUNDS = function () {
            var t = e(),
              n = i(),
              a = r(),
              o = s(function (e, r, i) {
                var s = a(
                  n(
                    t(
                      (function (t) {
                        var e = {};
                        for (var r in t) e[r] = t[r];
                        return e;
                      })(e)
                    )
                  )
                );
                function h(t) {
                  t > o.maxX && (o.maxX = t), t < o.minX && (o.minX = t);
                }
                function l(t) {
                  t > o.maxY && (o.maxY = t), t < o.minY && (o.minY = t);
                }
                if (
                  (s.type & P.DRAWING_COMMANDS && (h(r), l(i)),
                  s.type & P.HORIZ_LINE_TO && h(s.x),
                  s.type & P.VERT_LINE_TO && l(s.y),
                  s.type & P.LINE_TO && (h(s.x), l(s.y)),
                  s.type & P.CURVE_TO)
                ) {
                  h(s.x), l(s.y);
                  for (var u = 0, c = x(r, s.x1, s.x2, s.x); u < c.length; u++)
                    0 < (k = c[u]) && 1 > k && h(b(r, s.x1, s.x2, s.x, k));
                  for (var g = 0, f = x(i, s.y1, s.y2, s.y); g < f.length; g++)
                    0 < (k = f[g]) && 1 > k && l(b(i, s.y1, s.y2, s.y, k));
                }
                if (s.type & P.ARC) {
                  h(s.x), l(s.y), d(s, r, i);
                  for (
                    var y = (s.xRot / 180) * Math.PI,
                      m = Math.cos(y) * s.rX,
                      S = Math.sin(y) * s.rX,
                      w = -Math.sin(y) * s.rY,
                      T = Math.cos(y) * s.rY,
                      A =
                        s.phi1 < s.phi2
                          ? [s.phi1, s.phi2]
                          : -180 > s.phi2
                          ? [s.phi2 + 360, s.phi1 + 360]
                          : [s.phi2, s.phi1],
                      C = A[0],
                      O = A[1],
                      E = function (t) {
                        var e = t[0],
                          r = t[1],
                          i = (180 * Math.atan2(r, e)) / Math.PI;
                        return i < C ? i + 360 : i;
                      },
                      M = 0,
                      N = p(w, -m, 0).map(E);
                    M < N.length;
                    M++
                  )
                    (k = N[M]) > C && k < O && h(v(s.cX, m, w, k));
                  for (var V = 0, _ = p(T, -S, 0).map(E); V < _.length; V++) {
                    var k;
                    (k = _[V]) > C && k < O && l(v(s.cY, S, T, k));
                  }
                }
                return e;
              });
            return (
              (o.minX = 1 / 0), (o.maxX = -1 / 0), (o.minY = 1 / 0), (o.maxY = -1 / 0), o
            );
          });
      })(f || (f = {}));
      var S,
        w = (function () {
          function t() {}
          return (
            (t.prototype.round = function (t) {
              return this.transform(f.ROUND(t));
            }),
            (t.prototype.toAbs = function () {
              return this.transform(f.TO_ABS());
            }),
            (t.prototype.toRel = function () {
              return this.transform(f.TO_REL());
            }),
            (t.prototype.normalizeHVZ = function (t, e, r) {
              return this.transform(f.NORMALIZE_HVZ(t, e, r));
            }),
            (t.prototype.normalizeST = function () {
              return this.transform(f.NORMALIZE_ST());
            }),
            (t.prototype.qtToC = function () {
              return this.transform(f.QT_TO_C());
            }),
            (t.prototype.aToC = function () {
              return this.transform(f.A_TO_C());
            }),
            (t.prototype.sanitize = function (t) {
              return this.transform(f.SANITIZE(t));
            }),
            (t.prototype.translate = function (t, e) {
              return this.transform(f.TRANSLATE(t, e));
            }),
            (t.prototype.scale = function (t, e) {
              return this.transform(f.SCALE(t, e));
            }),
            (t.prototype.rotate = function (t, e, r) {
              return this.transform(f.ROTATE(t, e, r));
            }),
            (t.prototype.matrix = function (t, e, r, i, s, n) {
              return this.transform(f.MATRIX(t, e, r, i, s, n));
            }),
            (t.prototype.skewX = function (t) {
              return this.transform(f.SKEW_X(t));
            }),
            (t.prototype.skewY = function (t) {
              return this.transform(f.SKEW_Y(t));
            }),
            (t.prototype.xSymmetry = function (t) {
              return this.transform(f.X_AXIS_SYMMETRY(t));
            }),
            (t.prototype.ySymmetry = function (t) {
              return this.transform(f.Y_AXIS_SYMMETRY(t));
            }),
            (t.prototype.annotateArcs = function () {
              return this.transform(f.ANNOTATE_ARCS());
            }),
            t
          );
        })(),
        T = function (t) {
          return " " === t || "\t" === t || "\r" === t || "\n" === t;
        },
        A = function (t) {
          return (
            "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0)
          );
        },
        C = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.curNumber = ""),
              (e.curCommandType = -1),
              (e.curCommandRelative = !1),
              (e.canParseCommandOrComma = !0),
              (e.curNumberHasExp = !1),
              (e.curNumberHasExpDigits = !1),
              (e.curNumberHasDecimal = !1),
              (e.curArgs = []),
              e
            );
          }
          return (
            l(e, t),
            (e.prototype.finish = function (t) {
              if (
                (void 0 === t && (t = []),
                this.parse(" ", t),
                0 !== this.curArgs.length || !this.canParseCommandOrComma)
              )
                throw new SyntaxError("Unterminated command at the path end.");
              return t;
            }),
            (e.prototype.parse = function (t, e) {
              var r = this;
              void 0 === e && (e = []);
              for (
                var i = function (t) {
                    e.push(t), (r.curArgs.length = 0), (r.canParseCommandOrComma = !0);
                  },
                  s = 0;
                s < t.length;
                s++
              ) {
                var n = t[s],
                  a = !(
                    this.curCommandType !== P.ARC ||
                    (3 !== this.curArgs.length && 4 !== this.curArgs.length) ||
                    1 !== this.curNumber.length ||
                    ("0" !== this.curNumber && "1" !== this.curNumber)
                  ),
                  o = A(n) && (("0" === this.curNumber && "0" === n) || a);
                if (!A(n) || o)
                  if ("e" !== n && "E" !== n)
                    if (
                      ("-" !== n && "+" !== n) ||
                      !this.curNumberHasExp ||
                      this.curNumberHasExpDigits
                    )
                      if (
                        "." !== n ||
                        this.curNumberHasExp ||
                        this.curNumberHasDecimal ||
                        a
                      ) {
                        if (this.curNumber && -1 !== this.curCommandType) {
                          var h = Number(this.curNumber);
                          if (isNaN(h))
                            throw new SyntaxError("Invalid number ending at " + s);
                          if (this.curCommandType === P.ARC)
                            if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                              if (0 > h)
                                throw new SyntaxError(
                                  'Expected positive number, got "' +
                                    h +
                                    '" at index "' +
                                    s +
                                    '"'
                                );
                            } else if (
                              (3 === this.curArgs.length || 4 === this.curArgs.length) &&
                              "0" !== this.curNumber &&
                              "1" !== this.curNumber
                            )
                              throw new SyntaxError(
                                'Expected a flag, got "' +
                                  this.curNumber +
                                  '" at index "' +
                                  s +
                                  '"'
                              );
                          this.curArgs.push(h),
                            this.curArgs.length === O[this.curCommandType] &&
                              (P.HORIZ_LINE_TO === this.curCommandType
                                ? i({
                                    type: P.HORIZ_LINE_TO,
                                    relative: this.curCommandRelative,
                                    x: h,
                                  })
                                : P.VERT_LINE_TO === this.curCommandType
                                ? i({
                                    type: P.VERT_LINE_TO,
                                    relative: this.curCommandRelative,
                                    y: h,
                                  })
                                : this.curCommandType === P.MOVE_TO ||
                                  this.curCommandType === P.LINE_TO ||
                                  this.curCommandType === P.SMOOTH_QUAD_TO
                                ? (i({
                                    type: this.curCommandType,
                                    relative: this.curCommandRelative,
                                    x: this.curArgs[0],
                                    y: this.curArgs[1],
                                  }),
                                  P.MOVE_TO === this.curCommandType &&
                                    (this.curCommandType = P.LINE_TO))
                                : this.curCommandType === P.CURVE_TO
                                ? i({
                                    type: P.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5],
                                  })
                                : this.curCommandType === P.SMOOTH_CURVE_TO
                                ? i({
                                    type: P.SMOOTH_CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x2: this.curArgs[0],
                                    y2: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === P.QUAD_TO
                                ? i({
                                    type: P.QUAD_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === P.ARC &&
                                  i({
                                    type: P.ARC,
                                    relative: this.curCommandRelative,
                                    rX: this.curArgs[0],
                                    rY: this.curArgs[1],
                                    xRot: this.curArgs[2],
                                    lArcFlag: this.curArgs[3],
                                    sweepFlag: this.curArgs[4],
                                    x: this.curArgs[5],
                                    y: this.curArgs[6],
                                  })),
                            (this.curNumber = ""),
                            (this.curNumberHasExpDigits = !1),
                            (this.curNumberHasExp = !1),
                            (this.curNumberHasDecimal = !1),
                            (this.canParseCommandOrComma = !0);
                        }
                        if (!T(n))
                          if ("," === n && this.canParseCommandOrComma)
                            this.canParseCommandOrComma = !1;
                          else if ("+" !== n && "-" !== n && "." !== n)
                            if (o) (this.curNumber = n), (this.curNumberHasDecimal = !1);
                            else {
                              if (0 !== this.curArgs.length)
                                throw new SyntaxError(
                                  "Unterminated command at index " + s + "."
                                );
                              if (!this.canParseCommandOrComma)
                                throw new SyntaxError(
                                  'Unexpected character "' +
                                    n +
                                    '" at index ' +
                                    s +
                                    ". Command cannot follow comma"
                                );
                              if (
                                ((this.canParseCommandOrComma = !1),
                                "z" !== n && "Z" !== n)
                              )
                                if ("h" === n || "H" === n)
                                  (this.curCommandType = P.HORIZ_LINE_TO),
                                    (this.curCommandRelative = "h" === n);
                                else if ("v" === n || "V" === n)
                                  (this.curCommandType = P.VERT_LINE_TO),
                                    (this.curCommandRelative = "v" === n);
                                else if ("m" === n || "M" === n)
                                  (this.curCommandType = P.MOVE_TO),
                                    (this.curCommandRelative = "m" === n);
                                else if ("l" === n || "L" === n)
                                  (this.curCommandType = P.LINE_TO),
                                    (this.curCommandRelative = "l" === n);
                                else if ("c" === n || "C" === n)
                                  (this.curCommandType = P.CURVE_TO),
                                    (this.curCommandRelative = "c" === n);
                                else if ("s" === n || "S" === n)
                                  (this.curCommandType = P.SMOOTH_CURVE_TO),
                                    (this.curCommandRelative = "s" === n);
                                else if ("q" === n || "Q" === n)
                                  (this.curCommandType = P.QUAD_TO),
                                    (this.curCommandRelative = "q" === n);
                                else if ("t" === n || "T" === n)
                                  (this.curCommandType = P.SMOOTH_QUAD_TO),
                                    (this.curCommandRelative = "t" === n);
                                else {
                                  if ("a" !== n && "A" !== n)
                                    throw new SyntaxError(
                                      'Unexpected character "' +
                                        n +
                                        '" at index ' +
                                        s +
                                        "."
                                    );
                                  (this.curCommandType = P.ARC),
                                    (this.curCommandRelative = "a" === n);
                                }
                              else
                                e.push({ type: P.CLOSE_PATH }),
                                  (this.canParseCommandOrComma = !0),
                                  (this.curCommandType = -1);
                            }
                          else
                            (this.curNumber = n), (this.curNumberHasDecimal = "." === n);
                      } else (this.curNumber += n), (this.curNumberHasDecimal = !0);
                    else this.curNumber += n;
                  else (this.curNumber += n), (this.curNumberHasExp = !0);
                else
                  (this.curNumber += n),
                    (this.curNumberHasExpDigits = this.curNumberHasExp);
              }
              return e;
            }),
            (e.prototype.transform = function (t) {
              return Object.create(this, {
                parse: {
                  value: function (e, r) {
                    void 0 === r && (r = []);
                    for (
                      var i = 0, s = Object.getPrototypeOf(this).parse.call(this, e);
                      i < s.length;
                      i++
                    ) {
                      var n = s[i],
                        a = t(n);
                      Array.isArray(a) ? r.push.apply(r, a) : r.push(a);
                    }
                    return r;
                  },
                },
              });
            }),
            e
          );
        })(w),
        P = (function (t) {
          function e(r) {
            var i = t.call(this) || this;
            return (i.commands = "string" == typeof r ? e.parse(r) : r), i;
          }
          return (
            l(e, t),
            (e.prototype.encode = function () {
              return e.encode(this.commands);
            }),
            (e.prototype.getBounds = function () {
              var t = f.CALCULATE_BOUNDS();
              return this.transform(t), t;
            }),
            (e.prototype.transform = function (t) {
              for (var e = [], r = 0, i = this.commands; r < i.length; r++) {
                var s = t(i[r]);
                Array.isArray(s) ? e.push.apply(e, s) : e.push(s);
              }
              return (this.commands = e), this;
            }),
            (e.encode = function (t) {
              return (function (t) {
                var e = "";
                Array.isArray(t) || (t = [t]);
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  if (i.type === P.CLOSE_PATH) e += "z";
                  else if (i.type === P.HORIZ_LINE_TO)
                    e += (i.relative ? "h" : "H") + i.x;
                  else if (i.type === P.VERT_LINE_TO) e += (i.relative ? "v" : "V") + i.y;
                  else if (i.type === P.MOVE_TO)
                    e += (i.relative ? "m" : "M") + i.x + " " + i.y;
                  else if (i.type === P.LINE_TO)
                    e += (i.relative ? "l" : "L") + i.x + " " + i.y;
                  else if (i.type === P.CURVE_TO)
                    e +=
                      (i.relative ? "c" : "C") +
                      i.x1 +
                      " " +
                      i.y1 +
                      " " +
                      i.x2 +
                      " " +
                      i.y2 +
                      " " +
                      i.x +
                      " " +
                      i.y;
                  else if (i.type === P.SMOOTH_CURVE_TO)
                    e +=
                      (i.relative ? "s" : "S") +
                      i.x2 +
                      " " +
                      i.y2 +
                      " " +
                      i.x +
                      " " +
                      i.y;
                  else if (i.type === P.QUAD_TO)
                    e +=
                      (i.relative ? "q" : "Q") +
                      i.x1 +
                      " " +
                      i.y1 +
                      " " +
                      i.x +
                      " " +
                      i.y;
                  else if (i.type === P.SMOOTH_QUAD_TO)
                    e += (i.relative ? "t" : "T") + i.x + " " + i.y;
                  else {
                    if (i.type !== P.ARC)
                      throw new Error(
                        'Unexpected command type "' + i.type + '" at index ' + r + "."
                      );
                    e +=
                      (i.relative ? "a" : "A") +
                      i.rX +
                      " " +
                      i.rY +
                      " " +
                      i.xRot +
                      " " +
                      +i.lArcFlag +
                      " " +
                      +i.sweepFlag +
                      " " +
                      i.x +
                      " " +
                      i.y;
                  }
                }
                return e;
              })(t);
            }),
            (e.parse = function (t) {
              var e = new C(),
                r = [];
              return e.parse(t, r), e.finish(r), r;
            }),
            (e.CLOSE_PATH = 1),
            (e.MOVE_TO = 2),
            (e.HORIZ_LINE_TO = 4),
            (e.VERT_LINE_TO = 8),
            (e.LINE_TO = 16),
            (e.CURVE_TO = 32),
            (e.SMOOTH_CURVE_TO = 64),
            (e.QUAD_TO = 128),
            (e.SMOOTH_QUAD_TO = 256),
            (e.ARC = 512),
            (e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO),
            (e.DRAWING_COMMANDS =
              e.HORIZ_LINE_TO |
              e.VERT_LINE_TO |
              e.LINE_TO |
              e.CURVE_TO |
              e.SMOOTH_CURVE_TO |
              e.QUAD_TO |
              e.SMOOTH_QUAD_TO |
              e.ARC),
            e
          );
        })(w),
        O =
          (((S = {})[P.MOVE_TO] = 2),
          (S[P.LINE_TO] = 2),
          (S[P.HORIZ_LINE_TO] = 1),
          (S[P.VERT_LINE_TO] = 1),
          (S[P.CLOSE_PATH] = 0),
          (S[P.QUAD_TO] = 4),
          (S[P.SMOOTH_QUAD_TO] = 2),
          (S[P.CURVE_TO] = 6),
          (S[P.SMOOTH_CURVE_TO] = 4),
          (S[P.ARC] = 7),
          S);
      function E(t) {
        return (
          (E =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          E(t)
        );
      }
      var M = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512,
          454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512,
          482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456,
          437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512,
          497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328,
          320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456,
          446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512,
          505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405,
          399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328,
          324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271,
          268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456,
          451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388,
          385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
          289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
        ],
        N = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17,
          17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function V(t, e, r, i, s) {
        if (
          ("string" === typeof t && (t = document.getElementById(t)),
          !t || "object" !== E(t) || !("getContext" in t))
        )
          throw new TypeError(
            "Expecting canvas with `getContext` method in processCanvasRGB(A) calls!"
          );
        var n = t.getContext("2d");
        try {
          return n.getImageData(e, r, i, s);
        } catch (a) {
          throw new Error("unable to access image data: " + a);
        }
      }
      function _(t, e, r, i, s, n) {
        if (!(isNaN(n) || n < 1)) {
          n |= 0;
          var a = V(t, e, r, i, s);
          (a = (function (t, e, r, i, s, n) {
            for (
              var a,
                o = t.data,
                h = 2 * n + 1,
                l = i - 1,
                u = s - 1,
                c = n + 1,
                g = (c * (c + 1)) / 2,
                d = new k(),
                p = d,
                f = 1;
              f < h;
              f++
            )
              (p = p.next = new k()), f === c && (a = p);
            p.next = d;
            for (
              var y = null, m = null, v = 0, x = 0, b = M[n], S = N[n], w = 0;
              w < s;
              w++
            ) {
              p = d;
              for (
                var T = o[x], A = o[x + 1], C = o[x + 2], P = o[x + 3], O = 0;
                O < c;
                O++
              )
                (p.r = T), (p.g = A), (p.b = C), (p.a = P), (p = p.next);
              for (
                var E = 0,
                  V = 0,
                  _ = 0,
                  R = 0,
                  I = c * T,
                  L = c * A,
                  D = c * C,
                  B = c * P,
                  z = g * T,
                  H = g * A,
                  F = g * C,
                  U = g * P,
                  X = 1;
                X < c;
                X++
              ) {
                var Y = x + ((l < X ? l : X) << 2),
                  j = o[Y],
                  q = o[Y + 1],
                  Q = o[Y + 2],
                  W = o[Y + 3],
                  G = c - X;
                (z += (p.r = j) * G),
                  (H += (p.g = q) * G),
                  (F += (p.b = Q) * G),
                  (U += (p.a = W) * G),
                  (E += j),
                  (V += q),
                  (_ += Q),
                  (R += W),
                  (p = p.next);
              }
              (y = d), (m = a);
              for (var $ = 0; $ < i; $++) {
                var Z = (U * b) >>> S;
                if (((o[x + 3] = Z), 0 !== Z)) {
                  var K = 255 / Z;
                  (o[x] = ((z * b) >>> S) * K),
                    (o[x + 1] = ((H * b) >>> S) * K),
                    (o[x + 2] = ((F * b) >>> S) * K);
                } else o[x] = o[x + 1] = o[x + 2] = 0;
                (z -= I),
                  (H -= L),
                  (F -= D),
                  (U -= B),
                  (I -= y.r),
                  (L -= y.g),
                  (D -= y.b),
                  (B -= y.a);
                var J = $ + n + 1;
                (J = (v + (J < l ? J : l)) << 2),
                  (z += E += y.r = o[J]),
                  (H += V += y.g = o[J + 1]),
                  (F += _ += y.b = o[J + 2]),
                  (U += R += y.a = o[J + 3]),
                  (y = y.next);
                var tt = m,
                  et = tt.r,
                  rt = tt.g,
                  it = tt.b,
                  st = tt.a;
                (I += et),
                  (L += rt),
                  (D += it),
                  (B += st),
                  (E -= et),
                  (V -= rt),
                  (_ -= it),
                  (R -= st),
                  (m = m.next),
                  (x += 4);
              }
              v += i;
            }
            for (var nt = 0; nt < i; nt++) {
              var at = o[(x = nt << 2)],
                ot = o[x + 1],
                ht = o[x + 2],
                lt = o[x + 3],
                ut = c * at,
                ct = c * ot,
                gt = c * ht,
                dt = c * lt,
                pt = g * at,
                ft = g * ot,
                yt = g * ht,
                mt = g * lt;
              p = d;
              for (var vt = 0; vt < c; vt++)
                (p.r = at), (p.g = ot), (p.b = ht), (p.a = lt), (p = p.next);
              for (var xt = i, bt = 0, St = 0, wt = 0, Tt = 0, At = 1; At <= n; At++) {
                x = (xt + nt) << 2;
                var Ct = c - At;
                (pt += (p.r = at = o[x]) * Ct),
                  (ft += (p.g = ot = o[x + 1]) * Ct),
                  (yt += (p.b = ht = o[x + 2]) * Ct),
                  (mt += (p.a = lt = o[x + 3]) * Ct),
                  (Tt += at),
                  (bt += ot),
                  (St += ht),
                  (wt += lt),
                  (p = p.next),
                  At < u && (xt += i);
              }
              (x = nt), (y = d), (m = a);
              for (var Pt = 0; Pt < s; Pt++) {
                var Ot = x << 2;
                (o[Ot + 3] = lt = (mt * b) >>> S),
                  lt > 0
                    ? ((lt = 255 / lt),
                      (o[Ot] = ((pt * b) >>> S) * lt),
                      (o[Ot + 1] = ((ft * b) >>> S) * lt),
                      (o[Ot + 2] = ((yt * b) >>> S) * lt))
                    : (o[Ot] = o[Ot + 1] = o[Ot + 2] = 0),
                  (pt -= ut),
                  (ft -= ct),
                  (yt -= gt),
                  (mt -= dt),
                  (ut -= y.r),
                  (ct -= y.g),
                  (gt -= y.b),
                  (dt -= y.a),
                  (Ot = (nt + ((Ot = Pt + c) < u ? Ot : u) * i) << 2),
                  (pt += Tt += y.r = o[Ot]),
                  (ft += bt += y.g = o[Ot + 1]),
                  (yt += St += y.b = o[Ot + 2]),
                  (mt += wt += y.a = o[Ot + 3]),
                  (y = y.next),
                  (ut += at = m.r),
                  (ct += ot = m.g),
                  (gt += ht = m.b),
                  (dt += lt = m.a),
                  (Tt -= at),
                  (bt -= ot),
                  (St -= ht),
                  (wt -= lt),
                  (m = m.next),
                  (x += i);
              }
            }
            return t;
          })(a, 0, 0, i, s, n)),
            t.getContext("2d").putImageData(a, e, r);
        }
      }
      var k = function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null);
      };
      var R = Object.freeze({
        __proto__: null,
        offscreen: function () {
          var { DOMParser: t } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = {
              window: null,
              ignoreAnimation: !0,
              ignoreMouse: !0,
              DOMParser: t,
              createCanvas: (t, e) => new OffscreenCanvas(t, e),
              createImage: (t) =>
                s(function* () {
                  var e = yield fetch(t),
                    r = yield e.blob();
                  return yield createImageBitmap(r);
                })(),
            };
          return (
            ("undefined" === typeof DOMParser && "undefined" !== typeof t) ||
              Reflect.deleteProperty(e, "DOMParser"),
            e
          );
        },
        node: function (t) {
          var { DOMParser: e, canvas: r, fetch: i } = t;
          return {
            window: null,
            ignoreAnimation: !0,
            ignoreMouse: !0,
            DOMParser: e,
            fetch: i,
            createCanvas: r.createCanvas,
            createImage: r.loadImage,
          };
        },
      });
      function I(t) {
        return t.replace(/(?!\u3000)\s+/gm, " ");
      }
      function L(t) {
        return t.replace(/^[\n \t]+/, "");
      }
      function D(t) {
        return t.replace(/[\n \t]+$/, "");
      }
      function B(t) {
        return (
          (t || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || []
        ).map(parseFloat);
      }
      var z = /^[A-Z-]+$/;
      function H(t) {
        return z.test(t) ? t.toLowerCase() : t;
      }
      function F(t) {
        var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(t) || [];
        return e[2] || e[3] || e[4];
      }
      function U(t) {
        if (!t.startsWith("rgb")) return t;
        var e = 3;
        return t.replace(/\d+(\.\d+)?/g, (t, r) =>
          e-- && r ? String(Math.round(parseFloat(t))) : t
        );
      }
      var X = /(\[[^\]]+\])/g,
        Y = /(#[^\s+>~.[:]+)/g,
        j = /(\.[^\s+>~.[:]+)/g,
        q = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
        Q = /(:[\w-]+\([^)]*\))/gi,
        W = /(:[^\s+>~.[:]+)/g,
        G = /([^\s+>~.[:]+)/g;
      function $(t, e) {
        var r = e.exec(t);
        return r ? [t.replace(e, " "), r.length] : [t, 0];
      }
      function Z(t) {
        var e = [0, 0, 0],
          r = t.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "),
          i = 0;
        return (
          ([r, i] = $(r, X)),
          (e[1] += i),
          ([r, i] = $(r, Y)),
          (e[0] += i),
          ([r, i] = $(r, j)),
          (e[1] += i),
          ([r, i] = $(r, q)),
          (e[2] += i),
          ([r, i] = $(r, Q)),
          (e[1] += i),
          ([r, i] = $(r, W)),
          (e[1] += i),
          (r = r.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ")),
          ([r, i] = $(r, G)),
          (e[2] += i),
          e.join("")
        );
      }
      var K = 1e-8;
      function J(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
      }
      function tt(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (J(t) * J(e));
      }
      function et(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(tt(t, e));
      }
      function rt(t) {
        return t * t * t;
      }
      function it(t) {
        return 3 * t * t * (1 - t);
      }
      function st(t) {
        return 3 * t * (1 - t) * (1 - t);
      }
      function nt(t) {
        return (1 - t) * (1 - t) * (1 - t);
      }
      function at(t) {
        return t * t;
      }
      function ot(t) {
        return 2 * t * (1 - t);
      }
      function ht(t) {
        return (1 - t) * (1 - t);
      }
      class lt {
        constructor(t, e, r) {
          (this.document = t),
            (this.name = e),
            (this.value = r),
            (this.isNormalizedColor = !1);
        }
        static empty(t) {
          return new lt(t, "EMPTY", "");
        }
        split() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ",
            { document: e, name: r } = this;
          return I(this.getString())
            .trim()
            .split(t)
            .map((t) => new lt(e, r, t));
        }
        hasValue(t) {
          var { value: e } = this;
          return null !== e && "" !== e && (t || 0 !== e) && "undefined" !== typeof e;
        }
        isString(t) {
          var { value: e } = this,
            r = "string" === typeof e;
          return r && t ? t.test(e) : r;
        }
        isUrlDefinition() {
          return this.isString(/^url\(/);
        }
        isPixels() {
          if (!this.hasValue()) return !1;
          var t = this.getString();
          switch (!0) {
            case t.endsWith("px"):
            case /^[0-9]+$/.test(t):
              return !0;
            default:
              return !1;
          }
        }
        setValue(t) {
          return (this.value = t), this;
        }
        getValue(t) {
          return "undefined" === typeof t || this.hasValue() ? this.value : t;
        }
        getNumber(t) {
          if (!this.hasValue()) return "undefined" === typeof t ? 0 : parseFloat(t);
          var { value: e } = this,
            r = parseFloat(e);
          return this.isString(/%$/) && (r /= 100), r;
        }
        getString(t) {
          return "undefined" === typeof t || this.hasValue()
            ? "undefined" === typeof this.value
              ? ""
              : String(this.value)
            : String(t);
        }
        getColor(t) {
          var e = this.getString(t);
          return (
            this.isNormalizedColor ||
              ((this.isNormalizedColor = !0), (e = U(e)), (this.value = e)),
            e
          );
        }
        getDpi() {
          return 96;
        }
        getRem() {
          return this.document.rootEmSize;
        }
        getEm() {
          return this.document.emSize;
        }
        getUnits() {
          return this.getString().replace(/[0-9.-]/g, "");
        }
        getPixels(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!this.hasValue()) return 0;
          var [r, i] = "boolean" === typeof t ? [void 0, t] : [t],
            { viewPort: s } = this.document.screen;
          switch (!0) {
            case this.isString(/vmin$/):
              return (
                (this.getNumber() / 100) *
                Math.min(s.computeSize("x"), s.computeSize("y"))
              );
            case this.isString(/vmax$/):
              return (
                (this.getNumber() / 100) *
                Math.max(s.computeSize("x"), s.computeSize("y"))
              );
            case this.isString(/vw$/):
              return (this.getNumber() / 100) * s.computeSize("x");
            case this.isString(/vh$/):
              return (this.getNumber() / 100) * s.computeSize("y");
            case this.isString(/rem$/):
              return this.getNumber() * this.getRem();
            case this.isString(/em$/):
              return this.getNumber() * this.getEm();
            case this.isString(/ex$/):
              return (this.getNumber() * this.getEm()) / 2;
            case this.isString(/px$/):
              return this.getNumber();
            case this.isString(/pt$/):
              return this.getNumber() * this.getDpi() * (1 / 72);
            case this.isString(/pc$/):
              return 15 * this.getNumber();
            case this.isString(/cm$/):
              return (this.getNumber() * this.getDpi()) / 2.54;
            case this.isString(/mm$/):
              return (this.getNumber() * this.getDpi()) / 25.4;
            case this.isString(/in$/):
              return this.getNumber() * this.getDpi();
            case this.isString(/%$/) && i:
              return this.getNumber() * this.getEm();
            case this.isString(/%$/):
              return this.getNumber() * s.computeSize(r);
            default:
              var n = this.getNumber();
              return e && n < 1 ? n * s.computeSize(r) : n;
          }
        }
        getMilliseconds() {
          return this.hasValue()
            ? this.isString(/ms$/)
              ? this.getNumber()
              : 1e3 * this.getNumber()
            : 0;
        }
        getRadians() {
          if (!this.hasValue()) return 0;
          switch (!0) {
            case this.isString(/deg$/):
              return this.getNumber() * (Math.PI / 180);
            case this.isString(/grad$/):
              return this.getNumber() * (Math.PI / 200);
            case this.isString(/rad$/):
              return this.getNumber();
            default:
              return this.getNumber() * (Math.PI / 180);
          }
        }
        getDefinition() {
          var t = this.getString(),
            e = /#([^)'"]+)/.exec(t);
          return e && (e = e[1]), e || (e = t), this.document.definitions[e];
        }
        getFillStyleDefinition(t, e) {
          var r = this.getDefinition();
          if (!r) return null;
          if ("function" === typeof r.createGradient)
            return r.createGradient(this.document.ctx, t, e);
          if ("function" === typeof r.createPattern) {
            if (r.getHrefAttribute().hasValue()) {
              var i = r.getAttribute("patternTransform");
              (r = r.getHrefAttribute().getDefinition()),
                i.hasValue() && r.getAttribute("patternTransform", !0).setValue(i.value);
            }
            return r.createPattern(this.document.ctx, t, e);
          }
          return null;
        }
        getTextBaseline() {
          return this.hasValue() ? lt.textBaselineMapping[this.getString()] : null;
        }
        addOpacity(t) {
          for (
            var e = this.getColor(), r = e.length, i = 0, s = 0;
            s < r && ("," === e[s] && i++, 3 !== i);
            s++
          );
          if (t.hasValue() && this.isString() && 3 !== i) {
            var n = new o(e);
            n.ok && ((n.alpha = t.getNumber()), (e = n.toRGBA()));
          }
          return new lt(this.document, this.name, e);
        }
      }
      lt.textBaselineMapping = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic",
      };
      class ut {
        constructor() {
          this.viewPorts = [];
        }
        clear() {
          this.viewPorts = [];
        }
        setCurrent(t, e) {
          this.viewPorts.push({ width: t, height: e });
        }
        removeCurrent() {
          this.viewPorts.pop();
        }
        getCurrent() {
          var { viewPorts: t } = this;
          return t[t.length - 1];
        }
        get width() {
          return this.getCurrent().width;
        }
        get height() {
          return this.getCurrent().height;
        }
        computeSize(t) {
          return "number" === typeof t
            ? t
            : "x" === t
            ? this.width
            : "y" === t
            ? this.height
            : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) /
              Math.sqrt(2);
        }
      }
      class ct {
        constructor(t, e) {
          (this.x = t), (this.y = e);
        }
        static parse(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            [r = e, i = e] = B(t);
          return new ct(r, i);
        }
        static parseScale(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            [r = e, i = r] = B(t);
          return new ct(r, i);
        }
        static parsePath(t) {
          for (var e = B(t), r = e.length, i = [], s = 0; s < r; s += 2)
            i.push(new ct(e[s], e[s + 1]));
          return i;
        }
        angleTo(t) {
          return Math.atan2(t.y - this.y, t.x - this.x);
        }
        applyTransform(t) {
          var { x: e, y: r } = this,
            i = e * t[0] + r * t[2] + t[4],
            s = e * t[1] + r * t[3] + t[5];
          (this.x = i), (this.y = s);
        }
      }
      class gt {
        constructor(t) {
          (this.screen = t),
            (this.working = !1),
            (this.events = []),
            (this.eventElements = []),
            (this.onClick = this.onClick.bind(this)),
            (this.onMouseMove = this.onMouseMove.bind(this));
        }
        isWorking() {
          return this.working;
        }
        start() {
          if (!this.working) {
            var { screen: t, onClick: e, onMouseMove: r } = this,
              i = t.ctx.canvas;
            (i.onclick = e), (i.onmousemove = r), (this.working = !0);
          }
        }
        stop() {
          if (this.working) {
            var t = this.screen.ctx.canvas;
            (this.working = !1), (t.onclick = null), (t.onmousemove = null);
          }
        }
        hasEvents() {
          return this.working && this.events.length > 0;
        }
        runEvents() {
          if (this.working) {
            var { screen: t, events: e, eventElements: r } = this,
              { style: i } = t.ctx.canvas;
            i && (i.cursor = ""),
              e.forEach((t, e) => {
                for (var { run: i } = t, s = r[e]; s; ) i(s), (s = s.parent);
              }),
              (this.events = []),
              (this.eventElements = []);
          }
        }
        checkPath(t, e) {
          if (this.working && e) {
            var { events: r, eventElements: i } = this;
            r.forEach((r, s) => {
              var { x: n, y: a } = r;
              !i[s] && e.isPointInPath && e.isPointInPath(n, a) && (i[s] = t);
            });
          }
        }
        checkBoundingBox(t, e) {
          if (this.working && e) {
            var { events: r, eventElements: i } = this;
            r.forEach((r, s) => {
              var { x: n, y: a } = r;
              !i[s] && e.isPointInBox(n, a) && (i[s] = t);
            });
          }
        }
        mapXY(t, e) {
          for (
            var { window: r, ctx: i } = this.screen, s = new ct(t, e), n = i.canvas;
            n;

          )
            (s.x -= n.offsetLeft), (s.y -= n.offsetTop), (n = n.offsetParent);
          return r.scrollX && (s.x += r.scrollX), r.scrollY && (s.y += r.scrollY), s;
        }
        onClick(t) {
          var { x: e, y: r } = this.mapXY(t.clientX, t.clientY);
          this.events.push({
            type: "onclick",
            x: e,
            y: r,
            run(t) {
              t.onClick && t.onClick();
            },
          });
        }
        onMouseMove(t) {
          var { x: e, y: r } = this.mapXY(t.clientX, t.clientY);
          this.events.push({
            type: "onmousemove",
            x: e,
            y: r,
            run(t) {
              t.onMouseMove && t.onMouseMove();
            },
          });
        }
      }
      var dt = "undefined" !== typeof window ? window : null,
        pt = "undefined" !== typeof fetch ? fetch.bind(void 0) : null;
      class ft {
        constructor(t) {
          var { fetch: e = pt, window: r = dt } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.ctx = t),
            (this.FRAMERATE = 30),
            (this.MAX_VIRTUAL_PIXELS = 3e4),
            (this.CLIENT_WIDTH = 800),
            (this.CLIENT_HEIGHT = 600),
            (this.viewPort = new ut()),
            (this.mouse = new gt(this)),
            (this.animations = []),
            (this.waits = []),
            (this.frameDuration = 0),
            (this.isReadyLock = !1),
            (this.isFirstRender = !0),
            (this.intervalId = null),
            (this.window = r),
            (this.fetch = e);
        }
        wait(t) {
          this.waits.push(t);
        }
        ready() {
          return this.readyPromise ? this.readyPromise : Promise.resolve();
        }
        isReady() {
          if (this.isReadyLock) return !0;
          var t = this.waits.every((t) => t());
          return (
            t && ((this.waits = []), this.resolveReady && this.resolveReady()),
            (this.isReadyLock = t),
            t
          );
        }
        setDefaults(t) {
          (t.strokeStyle = "rgba(0,0,0,0)"),
            (t.lineCap = "butt"),
            (t.lineJoin = "miter"),
            (t.miterLimit = 4);
        }
        setViewBox(t) {
          var {
              document: e,
              ctx: r,
              aspectRatio: i,
              width: s,
              desiredWidth: n,
              height: a,
              desiredHeight: o,
              minX: h = 0,
              minY: l = 0,
              refX: u,
              refY: c,
              clip: g = !1,
              clipX: d = 0,
              clipY: p = 0,
            } = t,
            f = I(i).replace(/^defer\s/, ""),
            [y, m] = f.split(" "),
            v = y || "xMidYMid",
            x = m || "meet",
            b = s / n,
            S = a / o,
            w = Math.min(b, S),
            T = Math.max(b, S),
            A = n,
            C = o;
          "meet" === x && ((A *= w), (C *= w)), "slice" === x && ((A *= T), (C *= T));
          var P = new lt(e, "refX", u),
            O = new lt(e, "refY", c),
            E = P.hasValue() && O.hasValue();
          if ((E && r.translate(-w * P.getPixels("x"), -w * O.getPixels("y")), g)) {
            var M = w * d,
              N = w * p;
            r.beginPath(),
              r.moveTo(M, N),
              r.lineTo(s, N),
              r.lineTo(s, a),
              r.lineTo(M, a),
              r.closePath(),
              r.clip();
          }
          if (!E) {
            var V = "meet" === x && w === S,
              _ = "slice" === x && T === S,
              k = "meet" === x && w === b,
              R = "slice" === x && T === b;
            v.startsWith("xMid") && (V || _) && r.translate(s / 2 - A / 2, 0),
              v.endsWith("YMid") && (k || R) && r.translate(0, a / 2 - C / 2),
              v.startsWith("xMax") && (V || _) && r.translate(s - A, 0),
              v.endsWith("YMax") && (k || R) && r.translate(0, a - C);
          }
          switch (!0) {
            case "none" === v:
              r.scale(b, S);
              break;
            case "meet" === x:
              r.scale(w, w);
              break;
            case "slice" === x:
              r.scale(T, T);
          }
          r.translate(-h, -l);
        }
        start(t) {
          var {
              enableRedraw: e = !1,
              ignoreMouse: r = !1,
              ignoreAnimation: i = !1,
              ignoreDimensions: s = !1,
              ignoreClear: n = !1,
              forceRedraw: o,
              scaleWidth: h,
              scaleHeight: l,
              offsetX: u,
              offsetY: c,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { FRAMERATE: g, mouse: d } = this,
            p = 1e3 / g;
          if (
            ((this.frameDuration = p),
            (this.readyPromise = new Promise((t) => {
              this.resolveReady = t;
            })),
            this.isReady() && this.render(t, s, n, h, l, u, c),
            e)
          ) {
            var f = Date.now(),
              y = f,
              m = 0,
              v = () => {
                (f = Date.now()),
                  (m = f - y) >= p &&
                    ((y = f - (m % p)),
                    this.shouldUpdate(i, o) &&
                      (this.render(t, s, n, h, l, u, c), d.runEvents())),
                  (this.intervalId = a(v));
              };
            r || d.start(), (this.intervalId = a(v));
          }
        }
        stop() {
          this.intervalId && (a.cancel(this.intervalId), (this.intervalId = null)),
            this.mouse.stop();
        }
        shouldUpdate(t, e) {
          if (!t) {
            var { frameDuration: r } = this;
            if (this.animations.reduce((t, e) => e.update(r) || t, !1)) return !0;
          }
          return (
            !("function" !== typeof e || !e()) ||
            !(this.isReadyLock || !this.isReady()) ||
            !!this.mouse.hasEvents()
          );
        }
        render(t, e, r, i, s, n, a) {
          var {
              CLIENT_WIDTH: o,
              CLIENT_HEIGHT: h,
              viewPort: l,
              ctx: u,
              isFirstRender: c,
            } = this,
            g = u.canvas;
          l.clear(),
            g.width && g.height ? l.setCurrent(g.width, g.height) : l.setCurrent(o, h);
          var d = t.getStyle("width"),
            p = t.getStyle("height");
          !e &&
            (c || ("number" !== typeof i && "number" !== typeof s)) &&
            (d.hasValue() &&
              ((g.width = d.getPixels("x")),
              g.style && (g.style.width = "".concat(g.width, "px"))),
            p.hasValue() &&
              ((g.height = p.getPixels("y")),
              g.style && (g.style.height = "".concat(g.height, "px"))));
          var f = g.clientWidth || g.width,
            y = g.clientHeight || g.height;
          if (
            (e &&
              d.hasValue() &&
              p.hasValue() &&
              ((f = d.getPixels("x")), (y = p.getPixels("y"))),
            l.setCurrent(f, y),
            "number" === typeof n && t.getAttribute("x", !0).setValue(n),
            "number" === typeof a && t.getAttribute("y", !0).setValue(a),
            "number" === typeof i || "number" === typeof s)
          ) {
            var m = B(t.getAttribute("viewBox").getString()),
              v = 0,
              x = 0;
            if ("number" === typeof i) {
              var b = t.getStyle("width");
              b.hasValue() ? (v = b.getPixels("x") / i) : isNaN(m[2]) || (v = m[2] / i);
            }
            if ("number" === typeof s) {
              var S = t.getStyle("height");
              S.hasValue() ? (x = S.getPixels("y") / s) : isNaN(m[3]) || (x = m[3] / s);
            }
            v || (v = x),
              x || (x = v),
              t.getAttribute("width", !0).setValue(i),
              t.getAttribute("height", !0).setValue(s);
            var w = t.getStyle("transform", !0, !0);
            w.setValue(
              ""
                .concat(w.getString(), " scale(")
                .concat(1 / v, ", ")
                .concat(1 / x, ")")
            );
          }
          r || u.clearRect(0, 0, f, y), t.render(u), c && (this.isFirstRender = !1);
        }
      }
      (ft.defaultWindow = dt), (ft.defaultFetch = pt);
      var { defaultFetch: yt } = ft,
        mt = "undefined" !== typeof DOMParser ? DOMParser : null;
      class vt {
        constructor() {
          var { fetch: t = yt, DOMParser: e = mt } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.fetch = t), (this.DOMParser = e);
        }
        parse(t) {
          var e = this;
          return s(function* () {
            return t.startsWith("<") ? e.parseFromString(t) : e.load(t);
          })();
        }
        parseFromString(t) {
          var e = new this.DOMParser();
          try {
            return this.checkDocument(e.parseFromString(t, "image/svg+xml"));
          } catch (r) {
            return this.checkDocument(e.parseFromString(t, "text/xml"));
          }
        }
        checkDocument(t) {
          var e = t.getElementsByTagName("parsererror")[0];
          if (e) throw new Error(e.textContent);
          return t;
        }
        load(t) {
          var e = this;
          return s(function* () {
            var r = yield e.fetch(t),
              i = yield r.text();
            return e.parseFromString(i);
          })();
        }
      }
      class xt {
        constructor(t, e) {
          (this.type = "translate"), (this.point = null), (this.point = ct.parse(e));
        }
        apply(t) {
          var { x: e, y: r } = this.point;
          t.translate(e || 0, r || 0);
        }
        unapply(t) {
          var { x: e, y: r } = this.point;
          t.translate(-1 * e || 0, -1 * r || 0);
        }
        applyToPoint(t) {
          var { x: e, y: r } = this.point;
          t.applyTransform([1, 0, 0, 1, e || 0, r || 0]);
        }
      }
      class bt {
        constructor(t, e, r) {
          (this.type = "rotate"),
            (this.angle = null),
            (this.originX = null),
            (this.originY = null),
            (this.cx = 0),
            (this.cy = 0);
          var i = B(e);
          (this.angle = new lt(t, "angle", i[0])),
            (this.originX = r[0]),
            (this.originY = r[1]),
            (this.cx = i[1] || 0),
            (this.cy = i[2] || 0);
        }
        apply(t) {
          var { cx: e, cy: r, originX: i, originY: s, angle: n } = this,
            a = e + i.getPixels("x"),
            o = r + s.getPixels("y");
          t.translate(a, o), t.rotate(n.getRadians()), t.translate(-a, -o);
        }
        unapply(t) {
          var { cx: e, cy: r, originX: i, originY: s, angle: n } = this,
            a = e + i.getPixels("x"),
            o = r + s.getPixels("y");
          t.translate(a, o), t.rotate(-1 * n.getRadians()), t.translate(-a, -o);
        }
        applyToPoint(t) {
          var { cx: e, cy: r, angle: i } = this,
            s = i.getRadians();
          t.applyTransform([1, 0, 0, 1, e || 0, r || 0]),
            t.applyTransform([Math.cos(s), Math.sin(s), -Math.sin(s), Math.cos(s), 0, 0]),
            t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0]);
        }
      }
      class St {
        constructor(t, e, r) {
          (this.type = "scale"),
            (this.scale = null),
            (this.originX = null),
            (this.originY = null);
          var i = ct.parseScale(e);
          (0 !== i.x && 0 !== i.y) || ((i.x = K), (i.y = K)),
            (this.scale = i),
            (this.originX = r[0]),
            (this.originY = r[1]);
        }
        apply(t) {
          var {
              scale: { x: e, y: r },
              originX: i,
              originY: s,
            } = this,
            n = i.getPixels("x"),
            a = s.getPixels("y");
          t.translate(n, a), t.scale(e, r || e), t.translate(-n, -a);
        }
        unapply(t) {
          var {
              scale: { x: e, y: r },
              originX: i,
              originY: s,
            } = this,
            n = i.getPixels("x"),
            a = s.getPixels("y");
          t.translate(n, a), t.scale(1 / e, 1 / r || e), t.translate(-n, -a);
        }
        applyToPoint(t) {
          var { x: e, y: r } = this.scale;
          t.applyTransform([e || 0, 0, 0, r || 0, 0, 0]);
        }
      }
      class wt {
        constructor(t, e, r) {
          (this.type = "matrix"),
            (this.matrix = []),
            (this.originX = null),
            (this.originY = null),
            (this.matrix = B(e)),
            (this.originX = r[0]),
            (this.originY = r[1]);
        }
        apply(t) {
          var { originX: e, originY: r, matrix: i } = this,
            s = e.getPixels("x"),
            n = r.getPixels("y");
          t.translate(s, n),
            t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
            t.translate(-s, -n);
        }
        unapply(t) {
          var { originX: e, originY: r, matrix: i } = this,
            s = i[0],
            n = i[2],
            a = i[4],
            o = i[1],
            h = i[3],
            l = i[5],
            u = 1 / (s * (1 * h - 0 * l) - n * (1 * o - 0 * l) + a * (0 * o - 0 * h)),
            c = e.getPixels("x"),
            g = r.getPixels("y");
          t.translate(c, g),
            t.transform(
              u * (1 * h - 0 * l),
              u * (0 * l - 1 * o),
              u * (0 * a - 1 * n),
              u * (1 * s - 0 * a),
              u * (n * l - a * h),
              u * (a * o - s * l)
            ),
            t.translate(-c, -g);
        }
        applyToPoint(t) {
          t.applyTransform(this.matrix);
        }
      }
      class Tt extends wt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "skew"),
            (this.angle = null),
            (this.angle = new lt(t, "angle", e));
        }
      }
      class At extends Tt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "skewX"),
            (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0]);
        }
      }
      class Ct extends Tt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "skewY"),
            (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0]);
        }
      }
      class Pt {
        constructor(t, e, r) {
          (this.document = t), (this.transforms = []);
          var i = (function (t) {
            return I(t)
              .trim()
              .replace(/\)([a-zA-Z])/g, ") $1")
              .replace(/\)(\s?,\s?)/g, ") ")
              .split(/\s(?=[a-z])/);
          })(e);
          i.forEach((t) => {
            if ("none" !== t) {
              var [e, i] = (function (t) {
                  var [e, r] = t.split("(");
                  return [e.trim(), r.trim().replace(")", "")];
                })(t),
                s = Pt.transformTypes[e];
              "undefined" !== typeof s &&
                this.transforms.push(new s(this.document, i, r));
            }
          });
        }
        static fromElement(t, e) {
          var r = e.getStyle("transform", !1, !0),
            [i, s = i] = e.getStyle("transform-origin", !1, !0).split(),
            n = [i, s];
          return r.hasValue() ? new Pt(t, r.getString(), n) : null;
        }
        apply(t) {
          for (var { transforms: e } = this, r = e.length, i = 0; i < r; i++)
            e[i].apply(t);
        }
        unapply(t) {
          for (var { transforms: e } = this, r = e.length - 1; r >= 0; r--)
            e[r].unapply(t);
        }
        applyToPoint(t) {
          for (var { transforms: e } = this, r = e.length, i = 0; i < r; i++)
            e[i].applyToPoint(t);
        }
      }
      Pt.transformTypes = {
        translate: xt,
        rotate: bt,
        scale: St,
        matrix: wt,
        skewX: At,
        skewY: Ct,
      };
      class Ot {
        constructor(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (
            ((this.document = t),
            (this.node = e),
            (this.captureTextNodes = r),
            (this.attributes = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.animationFrozen = !1),
            (this.animationFrozenValue = ""),
            (this.parent = null),
            (this.children = []),
            e && 1 === e.nodeType)
          ) {
            if (
              (Array.from(e.attributes).forEach((e) => {
                var r = H(e.nodeName);
                this.attributes[r] = new lt(t, r, e.value);
              }),
              this.addStylesFromStyleDefinition(),
              this.getAttribute("style").hasValue())
            ) {
              var i = this.getAttribute("style")
                .getString()
                .split(";")
                .map((t) => t.trim());
              i.forEach((e) => {
                if (e) {
                  var [r, i] = e.split(":").map((t) => t.trim());
                  this.styles[r] = new lt(t, r, i);
                }
              });
            }
            var { definitions: s } = t,
              n = this.getAttribute("id");
            n.hasValue() && (s[n.getString()] || (s[n.getString()] = this)),
              Array.from(e.childNodes).forEach((e) => {
                if (1 === e.nodeType) this.addChild(e);
                else if (r && (3 === e.nodeType || 4 === e.nodeType)) {
                  var i = t.createTextNode(e);
                  i.getText().length > 0 && this.addChild(i);
                }
              });
          }
        }
        getAttribute(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = this.attributes[t];
          if (!r && e) {
            var i = new lt(this.document, t, "");
            return (this.attributes[t] = i), i;
          }
          return r || lt.empty(this.document);
        }
        getHrefAttribute() {
          for (var t in this.attributes)
            if ("href" === t || t.endsWith(":href")) return this.attributes[t];
          return lt.empty(this.document);
        }
        getStyle(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.styles[t];
          if (i) return i;
          var s = this.getAttribute(t);
          if (null !== s && void 0 !== s && s.hasValue()) return (this.styles[t] = s), s;
          if (!r) {
            var { parent: n } = this;
            if (n) {
              var a = n.getStyle(t);
              if (null !== a && void 0 !== a && a.hasValue()) return a;
            }
          }
          if (e) {
            var o = new lt(this.document, t, "");
            return (this.styles[t] = o), o;
          }
          return i || lt.empty(this.document);
        }
        render(t) {
          if (
            "none" !== this.getStyle("display").getString() &&
            "hidden" !== this.getStyle("visibility").getString()
          ) {
            if ((t.save(), this.getStyle("mask").hasValue())) {
              var e = this.getStyle("mask").getDefinition();
              e && (this.applyEffects(t), e.apply(t, this));
            } else if ("none" !== this.getStyle("filter").getValue("none")) {
              var r = this.getStyle("filter").getDefinition();
              r && (this.applyEffects(t), r.apply(t, this));
            } else this.setContext(t), this.renderChildren(t), this.clearContext(t);
            t.restore();
          }
        }
        setContext(t) {}
        applyEffects(t) {
          var e = Pt.fromElement(this.document, this);
          e && e.apply(t);
          var r = this.getStyle("clip-path", !1, !0);
          if (r.hasValue()) {
            var i = r.getDefinition();
            i && i.apply(t);
          }
        }
        clearContext(t) {}
        renderChildren(t) {
          this.children.forEach((e) => {
            e.render(t);
          });
        }
        addChild(t) {
          var e = t instanceof Ot ? t : this.document.createElement(t);
          (e.parent = this),
            Ot.ignoreChildTypes.includes(e.type) || this.children.push(e);
        }
        matchesSelector(t) {
          var e,
            { node: r } = this;
          if ("function" === typeof r.matches) return r.matches(t);
          var i =
            null === (e = r.getAttribute) || void 0 === e ? void 0 : e.call(r, "class");
          return !(!i || "" === i) && i.split(" ").some((e) => ".".concat(e) === t);
        }
        addStylesFromStyleDefinition() {
          var { styles: t, stylesSpecificity: e } = this.document;
          for (var r in t)
            if (!r.startsWith("@") && this.matchesSelector(r)) {
              var i = t[r],
                s = e[r];
              if (i)
                for (var n in i) {
                  var a = this.stylesSpecificity[n];
                  "undefined" === typeof a && (a = "000"),
                    s >= a && ((this.styles[n] = i[n]), (this.stylesSpecificity[n] = s));
                }
            }
        }
        removeStyles(t, e) {
          return e.reduce((e, r) => {
            var i = t.getStyle(r);
            if (!i.hasValue()) return e;
            var s = i.getString();
            return i.setValue(""), [...e, [r, s]];
          }, []);
        }
        restoreStyles(t, e) {
          e.forEach((e) => {
            var [r, i] = e;
            t.getStyle(r, !0).setValue(i);
          });
        }
        isFirstChild() {
          var t;
          return (
            0 ===
            (null === (t = this.parent) || void 0 === t
              ? void 0
              : t.children.indexOf(this))
          );
        }
      }
      Ot.ignoreChildTypes = ["title"];
      class Et extends Ot {
        constructor(t, e, r) {
          super(t, e, r);
        }
      }
      function Mt(t) {
        var e = t.trim();
        return /^('|")/.test(e) ? e : '"'.concat(e, '"');
      }
      function Nt(t) {
        if (!t) return "";
        var e = t.trim().toLowerCase();
        switch (e) {
          case "normal":
          case "italic":
          case "oblique":
          case "inherit":
          case "initial":
          case "unset":
            return e;
          default:
            return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
        }
      }
      function Vt(t) {
        if (!t) return "";
        var e = t.trim().toLowerCase();
        switch (e) {
          case "normal":
          case "bold":
          case "lighter":
          case "bolder":
          case "inherit":
          case "initial":
          case "unset":
            return e;
          default:
            return /^[\d.]+$/.test(e) ? e : "";
        }
      }
      class _t {
        constructor(t, e, r, i, s, n) {
          var a = n ? ("string" === typeof n ? _t.parse(n) : n) : {};
          (this.fontFamily = s || a.fontFamily),
            (this.fontSize = i || a.fontSize),
            (this.fontStyle = t || a.fontStyle),
            (this.fontWeight = r || a.fontWeight),
            (this.fontVariant = e || a.fontVariant);
        }
        static parse() {
          var t = arguments.length > 1 ? arguments[1] : void 0,
            e = "",
            r = "",
            i = "",
            s = "",
            n = "",
            a = I(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")
              .trim()
              .split(" "),
            o = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 };
          return (
            a.forEach((t) => {
              switch (!0) {
                case !o.fontStyle && _t.styles.includes(t):
                  "inherit" !== t && (e = t), (o.fontStyle = !0);
                  break;
                case !o.fontVariant && _t.variants.includes(t):
                  "inherit" !== t && (r = t), (o.fontStyle = !0), (o.fontVariant = !0);
                  break;
                case !o.fontWeight && _t.weights.includes(t):
                  "inherit" !== t && (i = t),
                    (o.fontStyle = !0),
                    (o.fontVariant = !0),
                    (o.fontWeight = !0);
                  break;
                case !o.fontSize:
                  "inherit" !== t && ([s] = t.split("./")),
                    (o.fontStyle = !0),
                    (o.fontVariant = !0),
                    (o.fontWeight = !0),
                    (o.fontSize = !0);
                  break;
                default:
                  "inherit" !== t && (n += t);
              }
            }),
            new _t(e, r, i, s, n, t)
          );
        }
        toString() {
          return [
            Nt(this.fontStyle),
            this.fontVariant,
            Vt(this.fontWeight),
            this.fontSize,
            ((t = this.fontFamily),
            "undefined" === typeof process ? t : t.trim().split(",").map(Mt).join(",")),
          ]
            .join(" ")
            .trim();
          var t;
        }
      }
      (_t.styles = "normal|italic|oblique|inherit"),
        (_t.variants = "normal|small-caps|inherit"),
        (_t.weights =
          "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit");
      class kt {
        constructor() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.NaN,
            e =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.NaN,
            r =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.NaN,
            i =
              arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Number.NaN;
          (this.x1 = t),
            (this.y1 = e),
            (this.x2 = r),
            (this.y2 = i),
            this.addPoint(t, e),
            this.addPoint(r, i);
        }
        get x() {
          return this.x1;
        }
        get y() {
          return this.y1;
        }
        get width() {
          return this.x2 - this.x1;
        }
        get height() {
          return this.y2 - this.y1;
        }
        addPoint(t, e) {
          "undefined" !== typeof t &&
            ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = t), (this.x2 = t)),
            t < this.x1 && (this.x1 = t),
            t > this.x2 && (this.x2 = t)),
            "undefined" !== typeof e &&
              ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = e), (this.y2 = e)),
              e < this.y1 && (this.y1 = e),
              e > this.y2 && (this.y2 = e));
        }
        addX(t) {
          this.addPoint(t, null);
        }
        addY(t) {
          this.addPoint(null, t);
        }
        addBoundingBox(t) {
          if (t) {
            var { x1: e, y1: r, x2: i, y2: s } = t;
            this.addPoint(e, r), this.addPoint(i, s);
          }
        }
        sumCubic(t, e, r, i, s) {
          return (
            Math.pow(1 - t, 3) * e +
            3 * Math.pow(1 - t, 2) * t * r +
            3 * (1 - t) * Math.pow(t, 2) * i +
            Math.pow(t, 3) * s
          );
        }
        bezierCurveAdd(t, e, r, i, s) {
          var n = 6 * e - 12 * r + 6 * i,
            a = -3 * e + 9 * r - 9 * i + 3 * s,
            o = 3 * r - 3 * e;
          if (0 !== a) {
            var h = Math.pow(n, 2) - 4 * o * a;
            if (!(h < 0)) {
              var l = (-n + Math.sqrt(h)) / (2 * a);
              0 < l &&
                l < 1 &&
                (t
                  ? this.addX(this.sumCubic(l, e, r, i, s))
                  : this.addY(this.sumCubic(l, e, r, i, s)));
              var u = (-n - Math.sqrt(h)) / (2 * a);
              0 < u &&
                u < 1 &&
                (t
                  ? this.addX(this.sumCubic(u, e, r, i, s))
                  : this.addY(this.sumCubic(u, e, r, i, s)));
            }
          } else {
            if (0 === n) return;
            var c = -o / n;
            0 < c &&
              c < 1 &&
              (t
                ? this.addX(this.sumCubic(c, e, r, i, s))
                : this.addY(this.sumCubic(c, e, r, i, s)));
          }
        }
        addBezierCurve(t, e, r, i, s, n, a, o) {
          this.addPoint(t, e),
            this.addPoint(a, o),
            this.bezierCurveAdd(!0, t, r, s, a),
            this.bezierCurveAdd(!1, e, i, n, o);
        }
        addQuadraticCurve(t, e, r, i, s, n) {
          var a = t + (2 / 3) * (r - t),
            o = e + (2 / 3) * (i - e),
            h = a + (1 / 3) * (s - t),
            l = o + (1 / 3) * (n - e);
          this.addBezierCurve(t, e, a, h, o, l, s, n);
        }
        isPointInBox(t, e) {
          var { x1: r, y1: i, x2: s, y2: n } = this;
          return r <= t && t <= s && i <= e && e <= n;
        }
      }
      class Rt extends P {
        constructor(t) {
          super(
            t
              .replace(/([+\-.])\s+/gm, "$1")
              .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")
          ),
            (this.control = null),
            (this.start = null),
            (this.current = null),
            (this.command = null),
            (this.commands = this.commands),
            (this.i = -1),
            (this.previousCommand = null),
            (this.points = []),
            (this.angles = []);
        }
        reset() {
          (this.i = -1),
            (this.command = null),
            (this.previousCommand = null),
            (this.start = new ct(0, 0)),
            (this.control = new ct(0, 0)),
            (this.current = new ct(0, 0)),
            (this.points = []),
            (this.angles = []);
        }
        isEnd() {
          var { i: t, commands: e } = this;
          return t >= e.length - 1;
        }
        next() {
          var t = this.commands[++this.i];
          return (this.previousCommand = this.command), (this.command = t), t;
        }
        getPoint() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "x",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
            r = new ct(this.command[t], this.command[e]);
          return this.makeAbsolute(r);
        }
        getAsControlPoint(t, e) {
          var r = this.getPoint(t, e);
          return (this.control = r), r;
        }
        getAsCurrentPoint(t, e) {
          var r = this.getPoint(t, e);
          return (this.current = r), r;
        }
        getReflectedControlPoint() {
          var t = this.previousCommand.type;
          if (
            t !== P.CURVE_TO &&
            t !== P.SMOOTH_CURVE_TO &&
            t !== P.QUAD_TO &&
            t !== P.SMOOTH_QUAD_TO
          )
            return this.current;
          var {
            current: { x: e, y: r },
            control: { x: i, y: s },
          } = this;
          return new ct(2 * e - i, 2 * r - s);
        }
        makeAbsolute(t) {
          if (this.command.relative) {
            var { x: e, y: r } = this.current;
            (t.x += e), (t.y += r);
          }
          return t;
        }
        addMarker(t, e, r) {
          var { points: i, angles: s } = this;
          r &&
            s.length > 0 &&
            !s[s.length - 1] &&
            (s[s.length - 1] = i[i.length - 1].angleTo(r)),
            this.addMarkerAngle(t, e ? e.angleTo(t) : null);
        }
        addMarkerAngle(t, e) {
          this.points.push(t), this.angles.push(e);
        }
        getMarkerPoints() {
          return this.points;
        }
        getMarkerAngles() {
          for (var { angles: t } = this, e = t.length, r = 0; r < e; r++)
            if (!t[r])
              for (var i = r + 1; i < e; i++)
                if (t[i]) {
                  t[r] = t[i];
                  break;
                }
          return t;
        }
      }
      class It extends Ot {
        constructor() {
          super(...arguments), (this.modifiedEmSizeStack = !1);
        }
        calculateOpacity() {
          for (var t = 1, e = this; e; ) {
            var r = e.getStyle("opacity", !1, !0);
            r.hasValue(!0) && (t *= r.getNumber()), (e = e.parent);
          }
          return t;
        }
        setContext(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!e) {
            var r = this.getStyle("fill"),
              i = this.getStyle("fill-opacity"),
              s = this.getStyle("stroke"),
              n = this.getStyle("stroke-opacity");
            if (r.isUrlDefinition()) {
              var a = r.getFillStyleDefinition(this, i);
              a && (t.fillStyle = a);
            } else if (r.hasValue()) {
              "currentColor" === r.getString() &&
                r.setValue(this.getStyle("color").getColor());
              var o = r.getColor();
              "inherit" !== o && (t.fillStyle = "none" === o ? "rgba(0,0,0,0)" : o);
            }
            if (i.hasValue()) {
              var h = new lt(this.document, "fill", t.fillStyle).addOpacity(i).getColor();
              t.fillStyle = h;
            }
            if (s.isUrlDefinition()) {
              var l = s.getFillStyleDefinition(this, n);
              l && (t.strokeStyle = l);
            } else if (s.hasValue()) {
              "currentColor" === s.getString() &&
                s.setValue(this.getStyle("color").getColor());
              var u = s.getString();
              "inherit" !== u && (t.strokeStyle = "none" === u ? "rgba(0,0,0,0)" : u);
            }
            if (n.hasValue()) {
              var c = new lt(this.document, "stroke", t.strokeStyle)
                .addOpacity(n)
                .getString();
              t.strokeStyle = c;
            }
            var g = this.getStyle("stroke-width");
            if (g.hasValue()) {
              var d = g.getPixels();
              t.lineWidth = d || K;
            }
            var p = this.getStyle("stroke-linecap"),
              f = this.getStyle("stroke-linejoin"),
              y = this.getStyle("stroke-miterlimit"),
              m = this.getStyle("stroke-dasharray"),
              v = this.getStyle("stroke-dashoffset");
            if (
              (p.hasValue() && (t.lineCap = p.getString()),
              f.hasValue() && (t.lineJoin = f.getString()),
              y.hasValue() && (t.miterLimit = y.getNumber()),
              m.hasValue() && "none" !== m.getString())
            ) {
              var x = B(m.getString());
              "undefined" !== typeof t.setLineDash
                ? t.setLineDash(x)
                : "undefined" !== typeof t.webkitLineDash
                ? (t.webkitLineDash = x)
                : "undefined" === typeof t.mozDash ||
                  (1 === x.length && 0 === x[0]) ||
                  (t.mozDash = x);
              var b = v.getPixels();
              "undefined" !== typeof t.lineDashOffset
                ? (t.lineDashOffset = b)
                : "undefined" !== typeof t.webkitLineDashOffset
                ? (t.webkitLineDashOffset = b)
                : "undefined" !== typeof t.mozDashOffset && (t.mozDashOffset = b);
            }
          }
          if (((this.modifiedEmSizeStack = !1), "undefined" !== typeof t.font)) {
            var S = this.getStyle("font"),
              w = this.getStyle("font-style"),
              T = this.getStyle("font-variant"),
              A = this.getStyle("font-weight"),
              C = this.getStyle("font-size"),
              P = this.getStyle("font-family"),
              O = new _t(
                w.getString(),
                T.getString(),
                A.getString(),
                C.hasValue() ? "".concat(C.getPixels(!0), "px") : "",
                P.getString(),
                _t.parse(S.getString(), t.font)
              );
            w.setValue(O.fontStyle),
              T.setValue(O.fontVariant),
              A.setValue(O.fontWeight),
              C.setValue(O.fontSize),
              P.setValue(O.fontFamily),
              (t.font = O.toString()),
              C.isPixels() &&
                ((this.document.emSize = C.getPixels()), (this.modifiedEmSizeStack = !0));
          }
          e || (this.applyEffects(t), (t.globalAlpha = this.calculateOpacity()));
        }
        clearContext(t) {
          super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize();
        }
      }
      class Lt extends It {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "path"),
            (this.pathParser = null),
            (this.pathParser = new Rt(this.getAttribute("d").getString()));
        }
        path(t) {
          var { pathParser: e } = this,
            r = new kt();
          for (e.reset(), t && t.beginPath(); !e.isEnd(); )
            switch (e.next().type) {
              case Rt.MOVE_TO:
                this.pathM(t, r);
                break;
              case Rt.LINE_TO:
                this.pathL(t, r);
                break;
              case Rt.HORIZ_LINE_TO:
                this.pathH(t, r);
                break;
              case Rt.VERT_LINE_TO:
                this.pathV(t, r);
                break;
              case Rt.CURVE_TO:
                this.pathC(t, r);
                break;
              case Rt.SMOOTH_CURVE_TO:
                this.pathS(t, r);
                break;
              case Rt.QUAD_TO:
                this.pathQ(t, r);
                break;
              case Rt.SMOOTH_QUAD_TO:
                this.pathT(t, r);
                break;
              case Rt.ARC:
                this.pathA(t, r);
                break;
              case Rt.CLOSE_PATH:
                this.pathZ(t, r);
            }
          return r;
        }
        getBoundingBox(t) {
          return this.path();
        }
        getMarkers() {
          var { pathParser: t } = this,
            e = t.getMarkerPoints(),
            r = t.getMarkerAngles(),
            i = e.map((t, e) => [t, r[e]]);
          return i;
        }
        renderChildren(t) {
          this.path(t), this.document.screen.mouse.checkPath(this, t);
          var e = this.getStyle("fill-rule");
          "" !== t.fillStyle &&
            ("inherit" !== e.getString("inherit") ? t.fill(e.getString()) : t.fill()),
            "" !== t.strokeStyle &&
              ("non-scaling-stroke" === this.getAttribute("vector-effect").getString()
                ? (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore())
                : t.stroke());
          var r = this.getMarkers();
          if (r) {
            var i = r.length - 1,
              s = this.getStyle("marker-start"),
              n = this.getStyle("marker-mid"),
              a = this.getStyle("marker-end");
            if (s.isUrlDefinition()) {
              var o = s.getDefinition(),
                [h, l] = r[0];
              o.render(t, h, l);
            }
            if (n.isUrlDefinition())
              for (var u = n.getDefinition(), c = 1; c < i; c++) {
                var [g, d] = r[c];
                u.render(t, g, d);
              }
            if (a.isUrlDefinition()) {
              var p = a.getDefinition(),
                [f, y] = r[i];
              p.render(t, f, y);
            }
          }
        }
        static pathM(t) {
          var e = t.getAsCurrentPoint();
          return (t.start = t.current), { point: e };
        }
        pathM(t, e) {
          var { pathParser: r } = this,
            { point: i } = Lt.pathM(r),
            { x: s, y: n } = i;
          r.addMarker(i), e.addPoint(s, n), t && t.moveTo(s, n);
        }
        static pathL(t) {
          var { current: e } = t;
          return { current: e, point: t.getAsCurrentPoint() };
        }
        pathL(t, e) {
          var { pathParser: r } = this,
            { current: i, point: s } = Lt.pathL(r),
            { x: n, y: a } = s;
          r.addMarker(s, i), e.addPoint(n, a), t && t.lineTo(n, a);
        }
        static pathH(t) {
          var { current: e, command: r } = t,
            i = new ct((r.relative ? e.x : 0) + r.x, e.y);
          return (t.current = i), { current: e, point: i };
        }
        pathH(t, e) {
          var { pathParser: r } = this,
            { current: i, point: s } = Lt.pathH(r),
            { x: n, y: a } = s;
          r.addMarker(s, i), e.addPoint(n, a), t && t.lineTo(n, a);
        }
        static pathV(t) {
          var { current: e, command: r } = t,
            i = new ct(e.x, (r.relative ? e.y : 0) + r.y);
          return (t.current = i), { current: e, point: i };
        }
        pathV(t, e) {
          var { pathParser: r } = this,
            { current: i, point: s } = Lt.pathV(r),
            { x: n, y: a } = s;
          r.addMarker(s, i), e.addPoint(n, a), t && t.lineTo(n, a);
        }
        static pathC(t) {
          var { current: e } = t;
          return {
            current: e,
            point: t.getPoint("x1", "y1"),
            controlPoint: t.getAsControlPoint("x2", "y2"),
            currentPoint: t.getAsCurrentPoint(),
          };
        }
        pathC(t, e) {
          var { pathParser: r } = this,
            { current: i, point: s, controlPoint: n, currentPoint: a } = Lt.pathC(r);
          r.addMarker(a, n, s),
            e.addBezierCurve(i.x, i.y, s.x, s.y, n.x, n.y, a.x, a.y),
            t && t.bezierCurveTo(s.x, s.y, n.x, n.y, a.x, a.y);
        }
        static pathS(t) {
          var { current: e } = t;
          return {
            current: e,
            point: t.getReflectedControlPoint(),
            controlPoint: t.getAsControlPoint("x2", "y2"),
            currentPoint: t.getAsCurrentPoint(),
          };
        }
        pathS(t, e) {
          var { pathParser: r } = this,
            { current: i, point: s, controlPoint: n, currentPoint: a } = Lt.pathS(r);
          r.addMarker(a, n, s),
            e.addBezierCurve(i.x, i.y, s.x, s.y, n.x, n.y, a.x, a.y),
            t && t.bezierCurveTo(s.x, s.y, n.x, n.y, a.x, a.y);
        }
        static pathQ(t) {
          var { current: e } = t;
          return {
            current: e,
            controlPoint: t.getAsControlPoint("x1", "y1"),
            currentPoint: t.getAsCurrentPoint(),
          };
        }
        pathQ(t, e) {
          var { pathParser: r } = this,
            { current: i, controlPoint: s, currentPoint: n } = Lt.pathQ(r);
          r.addMarker(n, s, s),
            e.addQuadraticCurve(i.x, i.y, s.x, s.y, n.x, n.y),
            t && t.quadraticCurveTo(s.x, s.y, n.x, n.y);
        }
        static pathT(t) {
          var { current: e } = t,
            r = t.getReflectedControlPoint();
          return (
            (t.control = r),
            { current: e, controlPoint: r, currentPoint: t.getAsCurrentPoint() }
          );
        }
        pathT(t, e) {
          var { pathParser: r } = this,
            { current: i, controlPoint: s, currentPoint: n } = Lt.pathT(r);
          r.addMarker(n, s, s),
            e.addQuadraticCurve(i.x, i.y, s.x, s.y, n.x, n.y),
            t && t.quadraticCurveTo(s.x, s.y, n.x, n.y);
        }
        static pathA(t) {
          var { current: e, command: r } = t,
            { rX: i, rY: s, xRot: n, lArcFlag: a, sweepFlag: o } = r,
            h = n * (Math.PI / 180),
            l = t.getAsCurrentPoint(),
            u = new ct(
              (Math.cos(h) * (e.x - l.x)) / 2 + (Math.sin(h) * (e.y - l.y)) / 2,
              (-Math.sin(h) * (e.x - l.x)) / 2 + (Math.cos(h) * (e.y - l.y)) / 2
            ),
            c = Math.pow(u.x, 2) / Math.pow(i, 2) + Math.pow(u.y, 2) / Math.pow(s, 2);
          c > 1 && ((i *= Math.sqrt(c)), (s *= Math.sqrt(c)));
          var g =
            (a === o ? -1 : 1) *
            Math.sqrt(
              (Math.pow(i, 2) * Math.pow(s, 2) -
                Math.pow(i, 2) * Math.pow(u.y, 2) -
                Math.pow(s, 2) * Math.pow(u.x, 2)) /
                (Math.pow(i, 2) * Math.pow(u.y, 2) + Math.pow(s, 2) * Math.pow(u.x, 2))
            );
          isNaN(g) && (g = 0);
          var d = new ct((g * i * u.y) / s, (g * -s * u.x) / i),
            p = new ct(
              (e.x + l.x) / 2 + Math.cos(h) * d.x - Math.sin(h) * d.y,
              (e.y + l.y) / 2 + Math.sin(h) * d.x + Math.cos(h) * d.y
            ),
            f = et([1, 0], [(u.x - d.x) / i, (u.y - d.y) / s]),
            y = [(u.x - d.x) / i, (u.y - d.y) / s],
            m = [(-u.x - d.x) / i, (-u.y - d.y) / s],
            v = et(y, m);
          return (
            tt(y, m) <= -1 && (v = Math.PI),
            tt(y, m) >= 1 && (v = 0),
            {
              currentPoint: l,
              rX: i,
              rY: s,
              sweepFlag: o,
              xAxisRotation: h,
              centp: p,
              a1: f,
              ad: v,
            }
          );
        }
        pathA(t, e) {
          var { pathParser: r } = this,
            {
              currentPoint: i,
              rX: s,
              rY: n,
              sweepFlag: a,
              xAxisRotation: o,
              centp: h,
              a1: l,
              ad: u,
            } = Lt.pathA(r),
            c = 1 - a ? 1 : -1,
            g = l + c * (u / 2),
            d = new ct(h.x + s * Math.cos(g), h.y + n * Math.sin(g));
          if (
            (r.addMarkerAngle(d, g - (c * Math.PI) / 2),
            r.addMarkerAngle(i, g - c * Math.PI),
            e.addPoint(i.x, i.y),
            t && !isNaN(l) && !isNaN(u))
          ) {
            var p = s > n ? s : n,
              f = s > n ? 1 : s / n,
              y = s > n ? n / s : 1;
            t.translate(h.x, h.y),
              t.rotate(o),
              t.scale(f, y),
              t.arc(0, 0, p, l, l + u, Boolean(1 - a)),
              t.scale(1 / f, 1 / y),
              t.rotate(-o),
              t.translate(-h.x, -h.y);
          }
        }
        static pathZ(t) {
          t.current = t.start;
        }
        pathZ(t, e) {
          Lt.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
        }
      }
      class Dt extends Lt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "glyph"),
            (this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber()),
            (this.unicode = this.getAttribute("unicode").getString()),
            (this.arabicForm = this.getAttribute("arabic-form").getString());
        }
      }
      class Bt extends It {
        constructor(t, e, r) {
          super(t, e, new.target === Bt || r),
            (this.type = "text"),
            (this.x = 0),
            (this.y = 0),
            (this.measureCache = -1);
        }
        setContext(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          super.setContext(t, e);
          var r =
            this.getStyle("dominant-baseline").getTextBaseline() ||
            this.getStyle("alignment-baseline").getTextBaseline();
          r && (t.textBaseline = r);
        }
        initializeCoordinates() {
          (this.x = 0),
            (this.y = 0),
            (this.leafTexts = []),
            (this.textChunkStart = 0),
            (this.minX = Number.POSITIVE_INFINITY),
            (this.maxX = Number.NEGATIVE_INFINITY);
        }
        getBoundingBox(t) {
          if ("text" !== this.type) return this.getTElementBoundingBox(t);
          this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t);
          var e = null;
          return (
            this.children.forEach((r, i) => {
              var s = this.getChildBoundingBox(t, this, this, i);
              e ? e.addBoundingBox(s) : (e = s);
            }),
            e
          );
        }
        getFontSize() {
          var { document: t, parent: e } = this,
            r = _t.parse(t.ctx.font).fontSize;
          return e.getStyle("font-size").getNumber(r);
        }
        getTElementBoundingBox(t) {
          var e = this.getFontSize();
          return new kt(this.x, this.y - e, this.x + this.measureText(t), this.y);
        }
        getGlyph(t, e, r) {
          var i = e[r],
            s = null;
          if (t.isArabic) {
            var n = e.length,
              a = e[r - 1],
              o = e[r + 1],
              h = "isolated";
            if (
              ((0 === r || " " === a) && r < n - 1 && " " !== o && (h = "terminal"),
              r > 0 && " " !== a && r < n - 1 && " " !== o && (h = "medial"),
              r > 0 && " " !== a && (r === n - 1 || " " === o) && (h = "initial"),
              "undefined" !== typeof t.glyphs[i])
            ) {
              var l = t.glyphs[i];
              s = l instanceof Dt ? l : l[h];
            }
          } else s = t.glyphs[i];
          return s || (s = t.missingGlyph), s;
        }
        getText() {
          return "";
        }
        getTextFromNode(t) {
          var e = t || this.node,
            r = Array.from(e.parentNode.childNodes),
            i = r.indexOf(e),
            s = r.length - 1,
            n = I(e.textContent || "");
          return 0 === i && (n = L(n)), i === s && (n = D(n)), n;
        }
        renderChildren(t) {
          if ("text" === this.type) {
            this.initializeCoordinates(),
              this.adjustChildCoordinatesRecursive(t),
              this.children.forEach((e, r) => {
                this.renderChild(t, this, this, r);
              });
            var { mouse: e } = this.document.screen;
            e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t));
          } else this.renderTElementChildren(t);
        }
        renderTElementChildren(t) {
          var { document: e, parent: r } = this,
            i = this.getText(),
            s = r.getStyle("font-family").getDefinition();
          if (s)
            for (
              var { unitsPerEm: n } = s.fontFace,
                a = _t.parse(e.ctx.font),
                o = r.getStyle("font-size").getNumber(a.fontSize),
                h = r.getStyle("font-style").getString(a.fontStyle),
                l = o / n,
                u = s.isRTL ? i.split("").reverse().join("") : i,
                c = B(r.getAttribute("dx").getString()),
                g = u.length,
                d = 0;
              d < g;
              d++
            ) {
              var p = this.getGlyph(s, u, d);
              t.translate(this.x, this.y), t.scale(l, -l);
              var f = t.lineWidth;
              (t.lineWidth = (t.lineWidth * n) / o),
                "italic" === h && t.transform(1, 0, 0.4, 1, 0, 0),
                p.render(t),
                "italic" === h && t.transform(1, 0, -0.4, 1, 0, 0),
                (t.lineWidth = f),
                t.scale(1 / l, -1 / l),
                t.translate(-this.x, -this.y),
                (this.x += (o * (p.horizAdvX || s.horizAdvX)) / n),
                "undefined" === typeof c[d] || isNaN(c[d]) || (this.x += c[d]);
            }
          else {
            var { x: y, y: m } = this;
            t.fillStyle && t.fillText(i, y, m), t.strokeStyle && t.strokeText(i, y, m);
          }
        }
        applyAnchoring() {
          if (!(this.textChunkStart >= this.leafTexts.length)) {
            var t = this.leafTexts[this.textChunkStart],
              e = t.getStyle("text-anchor").getString("start"),
              r = 0;
            r =
              "start" === e
                ? t.x - this.minX
                : "end" === e
                ? t.x - this.maxX
                : t.x - (this.minX + this.maxX) / 2;
            for (var i = this.textChunkStart; i < this.leafTexts.length; i++)
              this.leafTexts[i].x += r;
            (this.minX = Number.POSITIVE_INFINITY),
              (this.maxX = Number.NEGATIVE_INFINITY),
              (this.textChunkStart = this.leafTexts.length);
          }
        }
        adjustChildCoordinatesRecursive(t) {
          this.children.forEach((e, r) => {
            this.adjustChildCoordinatesRecursiveCore(t, this, this, r);
          }),
            this.applyAnchoring();
        }
        adjustChildCoordinatesRecursiveCore(t, e, r, i) {
          var s = r.children[i];
          s.children.length > 0
            ? s.children.forEach((r, i) => {
                e.adjustChildCoordinatesRecursiveCore(t, e, s, i);
              })
            : this.adjustChildCoordinates(t, e, r, i);
        }
        adjustChildCoordinates(t, e, r, i) {
          var s = r.children[i];
          if ("function" !== typeof s.measureText) return s;
          t.save(), s.setContext(t, !0);
          var n = s.getAttribute("x"),
            a = s.getAttribute("y"),
            o = s.getAttribute("dx"),
            h = s.getAttribute("dy"),
            l = s.getStyle("font-family").getDefinition(),
            u = Boolean(l) && l.isRTL;
          0 === i &&
            (n.hasValue() || n.setValue(s.getInheritedAttribute("x")),
            a.hasValue() || a.setValue(s.getInheritedAttribute("y")),
            o.hasValue() || o.setValue(s.getInheritedAttribute("dx")),
            h.hasValue() || h.setValue(s.getInheritedAttribute("dy")));
          var c = s.measureText(t);
          return (
            u && (e.x -= c),
            n.hasValue()
              ? (e.applyAnchoring(),
                (s.x = n.getPixels("x")),
                o.hasValue() && (s.x += o.getPixels("x")))
              : (o.hasValue() && (e.x += o.getPixels("x")), (s.x = e.x)),
            (e.x = s.x),
            u || (e.x += c),
            a.hasValue()
              ? ((s.y = a.getPixels("y")), h.hasValue() && (s.y += h.getPixels("y")))
              : (h.hasValue() && (e.y += h.getPixels("y")), (s.y = e.y)),
            (e.y = s.y),
            e.leafTexts.push(s),
            (e.minX = Math.min(e.minX, s.x, s.x + c)),
            (e.maxX = Math.max(e.maxX, s.x, s.x + c)),
            s.clearContext(t),
            t.restore(),
            s
          );
        }
        getChildBoundingBox(t, e, r, i) {
          var s = r.children[i];
          if ("function" !== typeof s.getBoundingBox) return null;
          var n = s.getBoundingBox(t);
          return n
            ? (s.children.forEach((r, i) => {
                var a = e.getChildBoundingBox(t, e, s, i);
                n.addBoundingBox(a);
              }),
              n)
            : null;
        }
        renderChild(t, e, r, i) {
          var s = r.children[i];
          s.render(t),
            s.children.forEach((r, i) => {
              e.renderChild(t, e, s, i);
            });
        }
        measureText(t) {
          var { measureCache: e } = this;
          if (~e) return e;
          var r = this.getText(),
            i = this.measureTargetText(t, r);
          return (this.measureCache = i), i;
        }
        measureTargetText(t, e) {
          if (!e.length) return 0;
          var { parent: r } = this,
            i = r.getStyle("font-family").getDefinition();
          if (i) {
            for (
              var s = this.getFontSize(),
                n = i.isRTL ? e.split("").reverse().join("") : e,
                a = B(r.getAttribute("dx").getString()),
                o = n.length,
                h = 0,
                l = 0;
              l < o;
              l++
            ) {
              (h +=
                ((this.getGlyph(i, n, l).horizAdvX || i.horizAdvX) * s) /
                i.fontFace.unitsPerEm),
                "undefined" === typeof a[l] || isNaN(a[l]) || (h += a[l]);
            }
            return h;
          }
          if (!t.measureText) return 10 * e.length;
          t.save(), this.setContext(t, !0);
          var { width: u } = t.measureText(e);
          return this.clearContext(t), t.restore(), u;
        }
        getInheritedAttribute(t) {
          for (var e = this; e instanceof Bt && e.isFirstChild(); ) {
            var r = e.parent.getAttribute(t);
            if (r.hasValue(!0)) return r.getValue("0");
            e = e.parent;
          }
          return null;
        }
      }
      class zt extends Bt {
        constructor(t, e, r) {
          super(t, e, new.target === zt || r),
            (this.type = "tspan"),
            (this.text = this.children.length > 0 ? "" : this.getTextFromNode());
        }
        getText() {
          return this.text;
        }
      }
      class Ht extends zt {
        constructor() {
          super(...arguments), (this.type = "textNode");
        }
      }
      class Ft extends It {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.root = !1);
        }
        setContext(t) {
          var e,
            { document: r } = this,
            { screen: i, window: s } = r,
            n = t.canvas;
          if (
            (i.setDefaults(t),
            n.style &&
              "undefined" !== typeof t.font &&
              s &&
              "undefined" !== typeof s.getComputedStyle)
          ) {
            t.font = s.getComputedStyle(n).getPropertyValue("font");
            var a = new lt(r, "fontSize", _t.parse(t.font).fontSize);
            a.hasValue() &&
              ((r.rootEmSize = a.getPixels("y")), (r.emSize = r.rootEmSize));
          }
          this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0),
            this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
          var { width: o, height: h } = i.viewPort;
          this.getStyle("width").hasValue() ||
            this.getStyle("width", !0).setValue("100%"),
            this.getStyle("height").hasValue() ||
              this.getStyle("height", !0).setValue("100%"),
            this.getStyle("color").hasValue() ||
              this.getStyle("color", !0).setValue("black");
          var l = this.getAttribute("refX"),
            u = this.getAttribute("refY"),
            c = this.getAttribute("viewBox"),
            g = c.hasValue() ? B(c.getString()) : null,
            d = !this.root && "visible" !== this.getStyle("overflow").getValue("hidden"),
            p = 0,
            f = 0,
            y = 0,
            m = 0;
          g && ((p = g[0]), (f = g[1])),
            this.root ||
              ((o = this.getStyle("width").getPixels("x")),
              (h = this.getStyle("height").getPixels("y")),
              "marker" === this.type && ((y = p), (m = f), (p = 0), (f = 0))),
            i.viewPort.setCurrent(o, h),
            !this.node ||
              (this.parent &&
                "foreignObject" !==
                  (null === (e = this.node.parentNode) || void 0 === e
                    ? void 0
                    : e.nodeName)) ||
              !this.getStyle("transform", !1, !0).hasValue() ||
              this.getStyle("transform-origin", !1, !0).hasValue() ||
              this.getStyle("transform-origin", !0, !0).setValue("50% 50%"),
            super.setContext(t),
            t.translate(
              this.getAttribute("x").getPixels("x"),
              this.getAttribute("y").getPixels("y")
            ),
            g && ((o = g[2]), (h = g[3])),
            r.setViewBox({
              ctx: t,
              aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
              width: i.viewPort.width,
              desiredWidth: o,
              height: i.viewPort.height,
              desiredHeight: h,
              minX: p,
              minY: f,
              refX: l.getValue(),
              refY: u.getValue(),
              clip: d,
              clipX: y,
              clipY: m,
            }),
            g && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(o, h));
        }
        clearContext(t) {
          super.clearContext(t), this.document.screen.viewPort.removeCurrent();
        }
        resize(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.getAttribute("width", !0),
            s = this.getAttribute("height", !0),
            n = this.getAttribute("viewBox"),
            a = this.getAttribute("style"),
            o = i.getNumber(0),
            h = s.getNumber(0);
          if (r)
            if ("string" === typeof r)
              this.getAttribute("preserveAspectRatio", !0).setValue(r);
            else {
              var l = this.getAttribute("preserveAspectRatio");
              l.hasValue() && l.setValue(l.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
            }
          if (
            (i.setValue(t),
            s.setValue(e),
            n.hasValue() || n.setValue("0 0 ".concat(o || t, " ").concat(h || e)),
            a.hasValue())
          ) {
            var u = this.getStyle("width"),
              c = this.getStyle("height");
            u.hasValue() && u.setValue("".concat(t, "px")),
              c.hasValue() && c.setValue("".concat(e, "px"));
          }
        }
      }
      class Ut extends Lt {
        constructor() {
          super(...arguments), (this.type = "rect");
        }
        path(t) {
          var e = this.getAttribute("x").getPixels("x"),
            r = this.getAttribute("y").getPixels("y"),
            i = this.getStyle("width", !1, !0).getPixels("x"),
            s = this.getStyle("height", !1, !0).getPixels("y"),
            n = this.getAttribute("rx"),
            a = this.getAttribute("ry"),
            o = n.getPixels("x"),
            h = a.getPixels("y");
          if (
            (n.hasValue() && !a.hasValue() && (h = o),
            a.hasValue() && !n.hasValue() && (o = h),
            (o = Math.min(o, i / 2)),
            (h = Math.min(h, s / 2)),
            t)
          ) {
            var l = ((Math.sqrt(2) - 1) / 3) * 4;
            t.beginPath(),
              s > 0 &&
                i > 0 &&
                (t.moveTo(e + o, r),
                t.lineTo(e + i - o, r),
                t.bezierCurveTo(e + i - o + l * o, r, e + i, r + h - l * h, e + i, r + h),
                t.lineTo(e + i, r + s - h),
                t.bezierCurveTo(
                  e + i,
                  r + s - h + l * h,
                  e + i - o + l * o,
                  r + s,
                  e + i - o,
                  r + s
                ),
                t.lineTo(e + o, r + s),
                t.bezierCurveTo(e + o - l * o, r + s, e, r + s - h + l * h, e, r + s - h),
                t.lineTo(e, r + h),
                t.bezierCurveTo(e, r + h - l * h, e + o - l * o, r, e + o, r),
                t.closePath());
          }
          return new kt(e, r, e + i, r + s);
        }
        getMarkers() {
          return null;
        }
      }
      class Xt extends Lt {
        constructor() {
          super(...arguments), (this.type = "circle");
        }
        path(t) {
          var e = this.getAttribute("cx").getPixels("x"),
            r = this.getAttribute("cy").getPixels("y"),
            i = this.getAttribute("r").getPixels();
          return (
            t &&
              i > 0 &&
              (t.beginPath(), t.arc(e, r, i, 0, 2 * Math.PI, !1), t.closePath()),
            new kt(e - i, r - i, e + i, r + i)
          );
        }
        getMarkers() {
          return null;
        }
      }
      class Yt extends Lt {
        constructor() {
          super(...arguments), (this.type = "ellipse");
        }
        path(t) {
          var e = ((Math.sqrt(2) - 1) / 3) * 4,
            r = this.getAttribute("rx").getPixels("x"),
            i = this.getAttribute("ry").getPixels("y"),
            s = this.getAttribute("cx").getPixels("x"),
            n = this.getAttribute("cy").getPixels("y");
          return (
            t &&
              r > 0 &&
              i > 0 &&
              (t.beginPath(),
              t.moveTo(s + r, n),
              t.bezierCurveTo(s + r, n + e * i, s + e * r, n + i, s, n + i),
              t.bezierCurveTo(s - e * r, n + i, s - r, n + e * i, s - r, n),
              t.bezierCurveTo(s - r, n - e * i, s - e * r, n - i, s, n - i),
              t.bezierCurveTo(s + e * r, n - i, s + r, n - e * i, s + r, n),
              t.closePath()),
            new kt(s - r, n - i, s + r, n + i)
          );
        }
        getMarkers() {
          return null;
        }
      }
      class jt extends Lt {
        constructor() {
          super(...arguments), (this.type = "line");
        }
        getPoints() {
          return [
            new ct(
              this.getAttribute("x1").getPixels("x"),
              this.getAttribute("y1").getPixels("y")
            ),
            new ct(
              this.getAttribute("x2").getPixels("x"),
              this.getAttribute("y2").getPixels("y")
            ),
          ];
        }
        path(t) {
          var [{ x: e, y: r }, { x: i, y: s }] = this.getPoints();
          return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(i, s)), new kt(e, r, i, s);
        }
        getMarkers() {
          var [t, e] = this.getPoints(),
            r = t.angleTo(e);
          return [
            [t, r],
            [e, r],
          ];
        }
      }
      class qt extends Lt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "polyline"),
            (this.points = []),
            (this.points = ct.parsePath(this.getAttribute("points").getString()));
        }
        path(t) {
          var { points: e } = this,
            [{ x: r, y: i }] = e,
            s = new kt(r, i);
          return (
            t && (t.beginPath(), t.moveTo(r, i)),
            e.forEach((e) => {
              var { x: r, y: i } = e;
              s.addPoint(r, i), t && t.lineTo(r, i);
            }),
            s
          );
        }
        getMarkers() {
          var { points: t } = this,
            e = t.length - 1,
            r = [];
          return (
            t.forEach((i, s) => {
              s !== e && r.push([i, i.angleTo(t[s + 1])]);
            }),
            r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]),
            r
          );
        }
      }
      class Qt extends qt {
        constructor() {
          super(...arguments), (this.type = "polygon");
        }
        path(t) {
          var e = super.path(t),
            [{ x: r, y: i }] = this.points;
          return t && (t.lineTo(r, i), t.closePath()), e;
        }
      }
      class Wt extends Ot {
        constructor() {
          super(...arguments), (this.type = "pattern");
        }
        createPattern(t, e, r) {
          var i = this.getStyle("width").getPixels("x", !0),
            s = this.getStyle("height").getPixels("y", !0),
            n = new Ft(this.document, null);
          (n.attributes.viewBox = new lt(
            this.document,
            "viewBox",
            this.getAttribute("viewBox").getValue()
          )),
            (n.attributes.width = new lt(this.document, "width", "".concat(i, "px"))),
            (n.attributes.height = new lt(this.document, "height", "".concat(s, "px"))),
            (n.attributes.transform = new lt(
              this.document,
              "transform",
              this.getAttribute("patternTransform").getValue()
            )),
            (n.children = this.children);
          var a = this.document.createCanvas(i, s),
            o = a.getContext("2d"),
            h = this.getAttribute("x"),
            l = this.getAttribute("y");
          h.hasValue() &&
            l.hasValue() &&
            o.translate(h.getPixels("x", !0), l.getPixels("y", !0)),
            r.hasValue()
              ? (this.styles["fill-opacity"] = r)
              : Reflect.deleteProperty(this.styles, "fill-opacity");
          for (var u = -1; u <= 1; u++)
            for (var c = -1; c <= 1; c++)
              o.save(),
                (n.attributes.x = new lt(this.document, "x", u * a.width)),
                (n.attributes.y = new lt(this.document, "y", c * a.height)),
                n.render(o),
                o.restore();
          return t.createPattern(a, "repeat");
        }
      }
      class Gt extends Ot {
        constructor() {
          super(...arguments), (this.type = "marker");
        }
        render(t, e, r) {
          if (e) {
            var { x: i, y: s } = e,
              n = this.getAttribute("orient").getString("auto"),
              a = this.getAttribute("markerUnits").getString("strokeWidth");
            t.translate(i, s),
              "auto" === n && t.rotate(r),
              "strokeWidth" === a && t.scale(t.lineWidth, t.lineWidth),
              t.save();
            var o = new Ft(this.document, null);
            (o.type = this.type),
              (o.attributes.viewBox = new lt(
                this.document,
                "viewBox",
                this.getAttribute("viewBox").getValue()
              )),
              (o.attributes.refX = new lt(
                this.document,
                "refX",
                this.getAttribute("refX").getValue()
              )),
              (o.attributes.refY = new lt(
                this.document,
                "refY",
                this.getAttribute("refY").getValue()
              )),
              (o.attributes.width = new lt(
                this.document,
                "width",
                this.getAttribute("markerWidth").getValue()
              )),
              (o.attributes.height = new lt(
                this.document,
                "height",
                this.getAttribute("markerHeight").getValue()
              )),
              (o.attributes.overflow = new lt(
                this.document,
                "overflow",
                this.getAttribute("overflow").getValue()
              )),
              (o.attributes.fill = new lt(
                this.document,
                "fill",
                this.getAttribute("fill").getColor("black")
              )),
              (o.attributes.stroke = new lt(
                this.document,
                "stroke",
                this.getAttribute("stroke").getValue("none")
              )),
              (o.children = this.children),
              o.render(t),
              t.restore(),
              "strokeWidth" === a && t.scale(1 / t.lineWidth, 1 / t.lineWidth),
              "auto" === n && t.rotate(-r),
              t.translate(-i, -s);
          }
        }
      }
      class $t extends Ot {
        constructor() {
          super(...arguments), (this.type = "defs");
        }
        render() {}
      }
      class Zt extends It {
        constructor() {
          super(...arguments), (this.type = "g");
        }
        getBoundingBox(t) {
          var e = new kt();
          return (
            this.children.forEach((r) => {
              e.addBoundingBox(r.getBoundingBox(t));
            }),
            e
          );
        }
      }
      class Kt extends Ot {
        constructor(t, e, r) {
          super(t, e, r),
            (this.attributesToInherit = ["gradientUnits"]),
            (this.stops = []);
          var { stops: i, children: s } = this;
          s.forEach((t) => {
            "stop" === t.type && i.push(t);
          });
        }
        getGradientUnits() {
          return this.getAttribute("gradientUnits").getString("objectBoundingBox");
        }
        createGradient(t, e, r) {
          var i = this;
          this.getHrefAttribute().hasValue() &&
            ((i = this.getHrefAttribute().getDefinition()), this.inheritStopContainer(i));
          var { stops: s } = i,
            n = this.getGradient(t, e);
          if (!n) return this.addParentOpacity(r, s[s.length - 1].color);
          if (
            (s.forEach((t) => {
              n.addColorStop(t.offset, this.addParentOpacity(r, t.color));
            }),
            this.getAttribute("gradientTransform").hasValue())
          ) {
            var { document: a } = this,
              { MAX_VIRTUAL_PIXELS: o, viewPort: h } = a.screen,
              [l] = h.viewPorts,
              u = new Ut(a, null);
            (u.attributes.x = new lt(a, "x", -o / 3)),
              (u.attributes.y = new lt(a, "y", -o / 3)),
              (u.attributes.width = new lt(a, "width", o)),
              (u.attributes.height = new lt(a, "height", o));
            var c = new Zt(a, null);
            (c.attributes.transform = new lt(
              a,
              "transform",
              this.getAttribute("gradientTransform").getValue()
            )),
              (c.children = [u]);
            var g = new Ft(a, null);
            (g.attributes.x = new lt(a, "x", 0)),
              (g.attributes.y = new lt(a, "y", 0)),
              (g.attributes.width = new lt(a, "width", l.width)),
              (g.attributes.height = new lt(a, "height", l.height)),
              (g.children = [c]);
            var d = a.createCanvas(l.width, l.height),
              p = d.getContext("2d");
            return (p.fillStyle = n), g.render(p), p.createPattern(d, "no-repeat");
          }
          return n;
        }
        inheritStopContainer(t) {
          this.attributesToInherit.forEach((e) => {
            !this.getAttribute(e).hasValue() &&
              t.getAttribute(e).hasValue() &&
              this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
          });
        }
        addParentOpacity(t, e) {
          return t.hasValue()
            ? new lt(this.document, "color", e).addOpacity(t).getColor()
            : e;
        }
      }
      class Jt extends Kt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "linearGradient"),
            this.attributesToInherit.push("x1", "y1", "x2", "y2");
        }
        getGradient(t, e) {
          var r = "objectBoundingBox" === this.getGradientUnits(),
            i = r ? e.getBoundingBox(t) : null;
          if (r && !i) return null;
          this.getAttribute("x1").hasValue() ||
            this.getAttribute("y1").hasValue() ||
            this.getAttribute("x2").hasValue() ||
            this.getAttribute("y2").hasValue() ||
            (this.getAttribute("x1", !0).setValue(0),
            this.getAttribute("y1", !0).setValue(0),
            this.getAttribute("x2", !0).setValue(1),
            this.getAttribute("y2", !0).setValue(0));
          var s = r
              ? i.x + i.width * this.getAttribute("x1").getNumber()
              : this.getAttribute("x1").getPixels("x"),
            n = r
              ? i.y + i.height * this.getAttribute("y1").getNumber()
              : this.getAttribute("y1").getPixels("y"),
            a = r
              ? i.x + i.width * this.getAttribute("x2").getNumber()
              : this.getAttribute("x2").getPixels("x"),
            o = r
              ? i.y + i.height * this.getAttribute("y2").getNumber()
              : this.getAttribute("y2").getPixels("y");
          return s === a && n === o ? null : t.createLinearGradient(s, n, a, o);
        }
      }
      class te extends Kt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "radialGradient"),
            this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
        }
        getGradient(t, e) {
          var r = "objectBoundingBox" === this.getGradientUnits(),
            i = e.getBoundingBox(t);
          if (r && !i) return null;
          this.getAttribute("cx").hasValue() ||
            this.getAttribute("cx", !0).setValue("50%"),
            this.getAttribute("cy").hasValue() ||
              this.getAttribute("cy", !0).setValue("50%"),
            this.getAttribute("r").hasValue() ||
              this.getAttribute("r", !0).setValue("50%");
          var s = r
              ? i.x + i.width * this.getAttribute("cx").getNumber()
              : this.getAttribute("cx").getPixels("x"),
            n = r
              ? i.y + i.height * this.getAttribute("cy").getNumber()
              : this.getAttribute("cy").getPixels("y"),
            a = s,
            o = n;
          this.getAttribute("fx").hasValue() &&
            (a = r
              ? i.x + i.width * this.getAttribute("fx").getNumber()
              : this.getAttribute("fx").getPixels("x")),
            this.getAttribute("fy").hasValue() &&
              (o = r
                ? i.y + i.height * this.getAttribute("fy").getNumber()
                : this.getAttribute("fy").getPixels("y"));
          var h = r
              ? ((i.width + i.height) / 2) * this.getAttribute("r").getNumber()
              : this.getAttribute("r").getPixels(),
            l = this.getAttribute("fr").getPixels();
          return t.createRadialGradient(a, o, l, s, n, h);
        }
      }
      class ee extends Ot {
        constructor(t, e, r) {
          super(t, e, r), (this.type = "stop");
          var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())),
            s = this.getStyle("stop-opacity"),
            n = this.getStyle("stop-color", !0);
          "" === n.getString() && n.setValue("#000"),
            s.hasValue() && (n = n.addOpacity(s)),
            (this.offset = i),
            (this.color = n.getColor());
        }
      }
      class re extends Ot {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "animate"),
            (this.duration = 0),
            (this.initialValue = null),
            (this.initialUnits = ""),
            (this.removed = !1),
            (this.frozen = !1),
            t.screen.animations.push(this),
            (this.begin = this.getAttribute("begin").getMilliseconds()),
            (this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds()),
            (this.from = this.getAttribute("from")),
            (this.to = this.getAttribute("to")),
            (this.values = new lt(t, "values", null));
          var i = this.getAttribute("values");
          i.hasValue() && this.values.setValue(i.getString().split(";"));
        }
        getProperty() {
          var t = this.getAttribute("attributeType").getString(),
            e = this.getAttribute("attributeName").getString();
          return "CSS" === t
            ? this.parent.getStyle(e, !0)
            : this.parent.getAttribute(e, !0);
        }
        calcValue() {
          var { initialUnits: t } = this,
            { progress: e, from: r, to: i } = this.getProgress(),
            s = r.getNumber() + (i.getNumber() - r.getNumber()) * e;
          return "%" === t && (s *= 100), "".concat(s).concat(t);
        }
        update(t) {
          var { parent: e } = this,
            r = this.getProperty();
          if (
            (this.initialValue ||
              ((this.initialValue = r.getString()), (this.initialUnits = r.getUnits())),
            this.duration > this.maxDuration)
          ) {
            var i = this.getAttribute("fill").getString("remove");
            if (
              "indefinite" === this.getAttribute("repeatCount").getString() ||
              "indefinite" === this.getAttribute("repeatDur").getString()
            )
              this.duration = 0;
            else if ("freeze" !== i || this.frozen) {
              if ("remove" === i && !this.removed)
                return (
                  (this.removed = !0),
                  r.setValue(
                    e.animationFrozen ? e.animationFrozenValue : this.initialValue
                  ),
                  !0
                );
            } else
              (this.frozen = !0),
                (e.animationFrozen = !0),
                (e.animationFrozenValue = r.getString());
            return !1;
          }
          this.duration += t;
          var s = !1;
          if (this.begin < this.duration) {
            var n = this.calcValue(),
              a = this.getAttribute("type");
            if (a.hasValue()) {
              var o = a.getString();
              n = "".concat(o, "(").concat(n, ")");
            }
            r.setValue(n), (s = !0);
          }
          return s;
        }
        getProgress() {
          var { document: t, values: e } = this,
            r = {
              progress: (this.duration - this.begin) / (this.maxDuration - this.begin),
            };
          if (e.hasValue()) {
            var i = r.progress * (e.getValue().length - 1),
              s = Math.floor(i),
              n = Math.ceil(i);
            (r.from = new lt(t, "from", parseFloat(e.getValue()[s]))),
              (r.to = new lt(t, "to", parseFloat(e.getValue()[n]))),
              (r.progress = (i - s) / (n - s));
          } else (r.from = this.from), (r.to = this.to);
          return r;
        }
      }
      class ie extends re {
        constructor() {
          super(...arguments), (this.type = "animateColor");
        }
        calcValue() {
          var { progress: t, from: e, to: r } = this.getProgress(),
            i = new o(e.getColor()),
            s = new o(r.getColor());
          if (i.ok && s.ok) {
            var n = i.r + (s.r - i.r) * t,
              a = i.g + (s.g - i.g) * t,
              h = i.b + (s.b - i.b) * t;
            return "rgb("
              .concat(Math.floor(n), ", ")
              .concat(Math.floor(a), ", ")
              .concat(Math.floor(h), ")");
          }
          return this.getAttribute("from").getColor();
        }
      }
      class se extends re {
        constructor() {
          super(...arguments), (this.type = "animateTransform");
        }
        calcValue() {
          var { progress: t, from: e, to: r } = this.getProgress(),
            i = B(e.getString()),
            s = B(r.getString()),
            n = i.map((e, r) => e + (s[r] - e) * t).join(" ");
          return n;
        }
      }
      class ne extends Ot {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "font"),
            (this.glyphs = {}),
            (this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber());
          var { definitions: i } = t,
            { children: s } = this;
          for (var n of s)
            switch (n.type) {
              case "font-face":
                this.fontFace = n;
                var a = n.getStyle("font-family");
                a.hasValue() && (i[a.getString()] = this);
                break;
              case "missing-glyph":
                this.missingGlyph = n;
                break;
              case "glyph":
                var o = n;
                o.arabicForm
                  ? ((this.isRTL = !0),
                    (this.isArabic = !0),
                    "undefined" === typeof this.glyphs[o.unicode] &&
                      (this.glyphs[o.unicode] = {}),
                    (this.glyphs[o.unicode][o.arabicForm] = o))
                  : (this.glyphs[o.unicode] = o);
            }
        }
        render() {}
      }
      class ae extends Ot {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "font-face"),
            (this.ascent = this.getAttribute("ascent").getNumber()),
            (this.descent = this.getAttribute("descent").getNumber()),
            (this.unitsPerEm = this.getAttribute("units-per-em").getNumber());
        }
      }
      class oe extends Lt {
        constructor() {
          super(...arguments), (this.type = "missing-glyph"), (this.horizAdvX = 0);
        }
      }
      class he extends Bt {
        constructor() {
          super(...arguments), (this.type = "tref");
        }
        getText() {
          var t = this.getHrefAttribute().getDefinition();
          if (t) {
            var e = t.children[0];
            if (e) return e.getText();
          }
          return "";
        }
      }
      class le extends Bt {
        constructor(t, e, r) {
          super(t, e, r), (this.type = "a");
          var { childNodes: i } = e,
            s = i[0],
            n = i.length > 0 && Array.from(i).every((t) => 3 === t.nodeType);
          (this.hasText = n), (this.text = n ? this.getTextFromNode(s) : "");
        }
        getText() {
          return this.text;
        }
        renderChildren(t) {
          if (this.hasText) {
            super.renderChildren(t);
            var { document: e, x: r, y: i } = this,
              { mouse: s } = e.screen,
              n = new lt(e, "fontSize", _t.parse(e.ctx.font).fontSize);
            s.isWorking() &&
              s.checkBoundingBox(
                this,
                new kt(r, i - n.getPixels("y"), r + this.measureText(t), i)
              );
          } else if (this.children.length > 0) {
            var a = new Zt(this.document, null);
            (a.children = this.children), (a.parent = this), a.render(t);
          }
        }
        onClick() {
          var { window: t } = this.document;
          t && t.open(this.getHrefAttribute().getString());
        }
        onMouseMove() {
          this.document.ctx.canvas.style.cursor = "pointer";
        }
      }
      function ue(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function ce(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ue(Object(r), !0).forEach(function (e) {
                (0, n.A)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ue(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      class ge extends Bt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "textPath"),
            (this.textWidth = 0),
            (this.textHeight = 0),
            (this.pathLength = -1),
            (this.glyphInfo = null),
            (this.letterSpacingCache = []),
            (this.measuresCache = new Map([["", 0]]));
          var i = this.getHrefAttribute().getDefinition();
          (this.text = this.getTextFromNode()), (this.dataArray = this.parsePathData(i));
        }
        getText() {
          return this.text;
        }
        path(t) {
          var { dataArray: e } = this;
          t && t.beginPath(),
            e.forEach((e) => {
              var { type: r, points: i } = e;
              switch (r) {
                case Rt.LINE_TO:
                  t && t.lineTo(i[0], i[1]);
                  break;
                case Rt.MOVE_TO:
                  t && t.moveTo(i[0], i[1]);
                  break;
                case Rt.CURVE_TO:
                  t && t.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                  break;
                case Rt.QUAD_TO:
                  t && t.quadraticCurveTo(i[0], i[1], i[2], i[3]);
                  break;
                case Rt.ARC:
                  var [s, n, a, o, h, l, u, c] = i,
                    g = a > o ? a : o,
                    d = a > o ? 1 : a / o,
                    p = a > o ? o / a : 1;
                  t &&
                    (t.translate(s, n),
                    t.rotate(u),
                    t.scale(d, p),
                    t.arc(0, 0, g, h, h + l, Boolean(1 - c)),
                    t.scale(1 / d, 1 / p),
                    t.rotate(-u),
                    t.translate(-s, -n));
                  break;
                case Rt.CLOSE_PATH:
                  t && t.closePath();
              }
            });
        }
        renderChildren(t) {
          this.setTextData(t), t.save();
          var e = this.parent.getStyle("text-decoration").getString(),
            r = this.getFontSize(),
            { glyphInfo: i } = this,
            s = t.fillStyle;
          "underline" === e && t.beginPath(),
            i.forEach((i, s) => {
              var { p0: n, p1: a, rotation: o, text: h } = i;
              t.save(),
                t.translate(n.x, n.y),
                t.rotate(o),
                t.fillStyle && t.fillText(h, 0, 0),
                t.strokeStyle && t.strokeText(h, 0, 0),
                t.restore(),
                "underline" === e &&
                  (0 === s && t.moveTo(n.x, n.y + r / 8), t.lineTo(a.x, a.y + r / 5));
            }),
            "underline" === e &&
              ((t.lineWidth = r / 20), (t.strokeStyle = s), t.stroke(), t.closePath()),
            t.restore();
        }
        getLetterSpacingAt() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return this.letterSpacingCache[t] || 0;
        }
        findSegmentToFitChar(t, e, r, i, s, n, a, o, h) {
          var l = n,
            u = this.measureText(t, o);
          " " === o && "justify" === e && r < i && (u += (i - r) / s),
            h > -1 && (l += this.getLetterSpacingAt(h));
          var c = this.textHeight / 20,
            g = this.getEquidistantPointOnPath(l, c, 0),
            d = this.getEquidistantPointOnPath(l + u, c, 0),
            p = { p0: g, p1: d },
            f = g && d ? Math.atan2(d.y - g.y, d.x - g.x) : 0;
          if (a) {
            var y = Math.cos(Math.PI / 2 + f) * a,
              m = Math.cos(-f) * a;
            (p.p0 = ce(ce({}, g), {}, { x: g.x + y, y: g.y + m })),
              (p.p1 = ce(ce({}, d), {}, { x: d.x + y, y: d.y + m }));
          }
          return { offset: (l += u), segment: p, rotation: f };
        }
        measureText(t, e) {
          var { measuresCache: r } = this,
            i = e || this.getText();
          if (r.has(i)) return r.get(i);
          var s = this.measureTargetText(t, i);
          return r.set(i, s), s;
        }
        setTextData(t) {
          if (!this.glyphInfo) {
            var e = this.getText(),
              r = e.split(""),
              i = e.split(" ").length - 1,
              s = this.parent
                .getAttribute("dx")
                .split()
                .map((t) => t.getPixels("x")),
              n = this.parent.getAttribute("dy").getPixels("y"),
              a = this.parent.getStyle("text-anchor").getString("start"),
              o = this.getStyle("letter-spacing"),
              h = this.parent.getStyle("letter-spacing"),
              l = 0;
            o.hasValue() && "inherit" !== o.getValue()
              ? o.hasValue() &&
                "initial" !== o.getValue() &&
                "unset" !== o.getValue() &&
                (l = o.getPixels())
              : (l = h.getPixels());
            var u = [],
              c = e.length;
            this.letterSpacingCache = u;
            for (var g = 0; g < c; g++) u.push("undefined" !== typeof s[g] ? s[g] : l);
            var d = u.reduce((t, e, r) => (0 === r ? 0 : t + e || 0), 0),
              p = this.measureText(t),
              f = Math.max(p + d, 0);
            (this.textWidth = p),
              (this.textHeight = this.getFontSize()),
              (this.glyphInfo = []);
            var y = this.getPathLength(),
              m = this.getStyle("startOffset").getNumber(0) * y,
              v = 0;
            ("middle" !== a && "center" !== a) || (v = -f / 2),
              ("end" !== a && "right" !== a) || (v = -f),
              (v += m),
              r.forEach((e, s) => {
                var {
                  offset: o,
                  segment: h,
                  rotation: l,
                } = this.findSegmentToFitChar(t, a, f, y, i, v, n, e, s);
                (v = o),
                  h.p0 &&
                    h.p1 &&
                    this.glyphInfo.push({ text: r[s], p0: h.p0, p1: h.p1, rotation: l });
              });
          }
        }
        parsePathData(t) {
          if (((this.pathLength = -1), !t)) return [];
          var e = [],
            { pathParser: r } = t;
          for (r.reset(); !r.isEnd(); ) {
            var { current: i } = r,
              s = i ? i.x : 0,
              n = i ? i.y : 0,
              a = r.next(),
              o = a.type,
              h = [];
            switch (a.type) {
              case Rt.MOVE_TO:
                this.pathM(r, h);
                break;
              case Rt.LINE_TO:
                o = this.pathL(r, h);
                break;
              case Rt.HORIZ_LINE_TO:
                o = this.pathH(r, h);
                break;
              case Rt.VERT_LINE_TO:
                o = this.pathV(r, h);
                break;
              case Rt.CURVE_TO:
                this.pathC(r, h);
                break;
              case Rt.SMOOTH_CURVE_TO:
                o = this.pathS(r, h);
                break;
              case Rt.QUAD_TO:
                this.pathQ(r, h);
                break;
              case Rt.SMOOTH_QUAD_TO:
                o = this.pathT(r, h);
                break;
              case Rt.ARC:
                h = this.pathA(r);
                break;
              case Rt.CLOSE_PATH:
                Lt.pathZ(r);
            }
            a.type !== Rt.CLOSE_PATH
              ? e.push({
                  type: o,
                  points: h,
                  start: { x: s, y: n },
                  pathLength: this.calcLength(s, n, o, h),
                })
              : e.push({ type: Rt.CLOSE_PATH, points: [], pathLength: 0 });
          }
          return e;
        }
        pathM(t, e) {
          var { x: r, y: i } = Lt.pathM(t).point;
          e.push(r, i);
        }
        pathL(t, e) {
          var { x: r, y: i } = Lt.pathL(t).point;
          return e.push(r, i), Rt.LINE_TO;
        }
        pathH(t, e) {
          var { x: r, y: i } = Lt.pathH(t).point;
          return e.push(r, i), Rt.LINE_TO;
        }
        pathV(t, e) {
          var { x: r, y: i } = Lt.pathV(t).point;
          return e.push(r, i), Rt.LINE_TO;
        }
        pathC(t, e) {
          var { point: r, controlPoint: i, currentPoint: s } = Lt.pathC(t);
          e.push(r.x, r.y, i.x, i.y, s.x, s.y);
        }
        pathS(t, e) {
          var { point: r, controlPoint: i, currentPoint: s } = Lt.pathS(t);
          return e.push(r.x, r.y, i.x, i.y, s.x, s.y), Rt.CURVE_TO;
        }
        pathQ(t, e) {
          var { controlPoint: r, currentPoint: i } = Lt.pathQ(t);
          e.push(r.x, r.y, i.x, i.y);
        }
        pathT(t, e) {
          var { controlPoint: r, currentPoint: i } = Lt.pathT(t);
          return e.push(r.x, r.y, i.x, i.y), Rt.QUAD_TO;
        }
        pathA(t) {
          var {
            rX: e,
            rY: r,
            sweepFlag: i,
            xAxisRotation: s,
            centp: n,
            a1: a,
            ad: o,
          } = Lt.pathA(t);
          return (
            0 === i && o > 0 && (o -= 2 * Math.PI),
            1 === i && o < 0 && (o += 2 * Math.PI),
            [n.x, n.y, e, r, a, o, s, i]
          );
        }
        calcLength(t, e, r, i) {
          var s = 0,
            n = null,
            a = null,
            o = 0;
          switch (r) {
            case Rt.LINE_TO:
              return this.getLineLength(t, e, i[0], i[1]);
            case Rt.CURVE_TO:
              for (
                s = 0,
                  n = this.getPointOnCubicBezier(
                    0,
                    t,
                    e,
                    i[0],
                    i[1],
                    i[2],
                    i[3],
                    i[4],
                    i[5]
                  ),
                  o = 0.01;
                o <= 1;
                o += 0.01
              )
                (a = this.getPointOnCubicBezier(
                  o,
                  t,
                  e,
                  i[0],
                  i[1],
                  i[2],
                  i[3],
                  i[4],
                  i[5]
                )),
                  (s += this.getLineLength(n.x, n.y, a.x, a.y)),
                  (n = a);
              return s;
            case Rt.QUAD_TO:
              for (
                s = 0,
                  n = this.getPointOnQuadraticBezier(0, t, e, i[0], i[1], i[2], i[3]),
                  o = 0.01;
                o <= 1;
                o += 0.01
              )
                (a = this.getPointOnQuadraticBezier(o, t, e, i[0], i[1], i[2], i[3])),
                  (s += this.getLineLength(n.x, n.y, a.x, a.y)),
                  (n = a);
              return s;
            case Rt.ARC:
              s = 0;
              var h = i[4],
                l = i[5],
                u = i[4] + l,
                c = Math.PI / 180;
              if (
                (Math.abs(h - u) < c && (c = Math.abs(h - u)),
                (n = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], h, 0)),
                l < 0)
              )
                for (o = h - c; o > u; o -= c)
                  (a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], o, 0)),
                    (s += this.getLineLength(n.x, n.y, a.x, a.y)),
                    (n = a);
              else
                for (o = h + c; o < u; o += c)
                  (a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], o, 0)),
                    (s += this.getLineLength(n.x, n.y, a.x, a.y)),
                    (n = a);
              return (
                (a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
                (s += this.getLineLength(n.x, n.y, a.x, a.y))
              );
          }
          return 0;
        }
        getPointOnLine(t, e, r, i, s) {
          var n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : r,
            o = (s - r) / (i - e + K),
            h = Math.sqrt((t * t) / (1 + o * o));
          i < e && (h *= -1);
          var l = o * h,
            u = null;
          if (i === e) u = { x: n, y: a + l };
          else if ((a - r) / (n - e + K) === o) u = { x: n + h, y: a + l };
          else {
            var c,
              g,
              d = this.getLineLength(e, r, i, s);
            if (d < K) return null;
            var p = (n - e) * (i - e) + (a - r) * (s - r);
            (c = e + (p /= d * d) * (i - e)), (g = r + p * (s - r));
            var f = this.getLineLength(n, a, c, g),
              y = Math.sqrt(t * t - f * f);
            (h = Math.sqrt((y * y) / (1 + o * o))),
              i < e && (h *= -1),
              (u = { x: c + h, y: g + (l = o * h) });
          }
          return u;
        }
        getPointOnPath(t) {
          var e = this.getPathLength(),
            r = 0,
            i = null;
          if (t < -5e-5 || t - 5e-5 > e) return null;
          var { dataArray: s } = this;
          for (var n of s) {
            if (!n || !(n.pathLength < 5e-5 || r + n.pathLength + 5e-5 < t)) {
              var a = t - r,
                o = 0;
              switch (n.type) {
                case Rt.LINE_TO:
                  i = this.getPointOnLine(
                    a,
                    n.start.x,
                    n.start.y,
                    n.points[0],
                    n.points[1],
                    n.start.x,
                    n.start.y
                  );
                  break;
                case Rt.ARC:
                  var h = n.points[4],
                    l = n.points[5],
                    u = n.points[4] + l;
                  if (
                    ((o = h + (a / n.pathLength) * l),
                    (l < 0 && o < u) || (l >= 0 && o > u))
                  )
                    break;
                  i = this.getPointOnEllipticalArc(
                    n.points[0],
                    n.points[1],
                    n.points[2],
                    n.points[3],
                    o,
                    n.points[6]
                  );
                  break;
                case Rt.CURVE_TO:
                  (o = a / n.pathLength) > 1 && (o = 1),
                    (i = this.getPointOnCubicBezier(
                      o,
                      n.start.x,
                      n.start.y,
                      n.points[0],
                      n.points[1],
                      n.points[2],
                      n.points[3],
                      n.points[4],
                      n.points[5]
                    ));
                  break;
                case Rt.QUAD_TO:
                  (o = a / n.pathLength) > 1 && (o = 1),
                    (i = this.getPointOnQuadraticBezier(
                      o,
                      n.start.x,
                      n.start.y,
                      n.points[0],
                      n.points[1],
                      n.points[2],
                      n.points[3]
                    ));
              }
              if (i) return i;
              break;
            }
            r += n.pathLength;
          }
          return null;
        }
        getLineLength(t, e, r, i) {
          return Math.sqrt((r - t) * (r - t) + (i - e) * (i - e));
        }
        getPathLength() {
          return (
            -1 === this.pathLength &&
              (this.pathLength = this.dataArray.reduce(
                (t, e) => (e.pathLength > 0 ? t + e.pathLength : t),
                0
              )),
            this.pathLength
          );
        }
        getPointOnCubicBezier(t, e, r, i, s, n, a, o, h) {
          return {
            x: o * rt(t) + n * it(t) + i * st(t) + e * nt(t),
            y: h * rt(t) + a * it(t) + s * st(t) + r * nt(t),
          };
        }
        getPointOnQuadraticBezier(t, e, r, i, s, n, a) {
          return {
            x: n * at(t) + i * ot(t) + e * ht(t),
            y: a * at(t) + s * ot(t) + r * ht(t),
          };
        }
        getPointOnEllipticalArc(t, e, r, i, s, n) {
          var a = Math.cos(n),
            o = Math.sin(n),
            h = r * Math.cos(s),
            l = i * Math.sin(s);
          return { x: t + (h * a - l * o), y: e + (h * o + l * a) };
        }
        buildEquidistantCache(t, e) {
          var r = this.getPathLength(),
            i = e || 0.25,
            s = t || r / 100;
          if (
            !this.equidistantCache ||
            this.equidistantCache.step !== s ||
            this.equidistantCache.precision !== i
          ) {
            this.equidistantCache = { step: s, precision: i, points: [] };
            for (var n = 0, a = 0; a <= r; a += i) {
              var o = this.getPointOnPath(a),
                h = this.getPointOnPath(a + i);
              o &&
                h &&
                (n += this.getLineLength(o.x, o.y, h.x, h.y)) >= s &&
                (this.equidistantCache.points.push({ x: o.x, y: o.y, distance: a }),
                (n -= s));
            }
          }
        }
        getEquidistantPointOnPath(t, e, r) {
          if (
            (this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5)
          )
            return null;
          var i = Math.round(
            (t / this.getPathLength()) * (this.equidistantCache.points.length - 1)
          );
          return this.equidistantCache.points[i] || null;
        }
      }
      var de =
        /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
      class pe extends It {
        constructor(t, e, r) {
          super(t, e, r), (this.type = "image"), (this.loaded = !1);
          var i = this.getHrefAttribute().getString();
          if (i) {
            var s = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
            t.images.push(this),
              s ? this.loadSvg(i) : this.loadImage(i),
              (this.isSvg = s);
          }
        }
        loadImage(t) {
          var e = this;
          return s(function* () {
            try {
              var r = yield e.document.createImage(t);
              e.image = r;
            } catch (i) {
              console.error('Error while loading image "'.concat(t, '":'), i);
            }
            e.loaded = !0;
          })();
        }
        loadSvg(t) {
          var e = this;
          return s(function* () {
            var r = de.exec(t);
            if (r) {
              var i = r[5];
              "base64" === r[4] ? (e.image = atob(i)) : (e.image = decodeURIComponent(i));
            } else
              try {
                var s = yield e.document.fetch(t),
                  n = yield s.text();
                e.image = n;
              } catch (a) {
                console.error('Error while loading image "'.concat(t, '":'), a);
              }
            e.loaded = !0;
          })();
        }
        renderChildren(t) {
          var { document: e, image: r, loaded: i } = this,
            s = this.getAttribute("x").getPixels("x"),
            n = this.getAttribute("y").getPixels("y"),
            a = this.getStyle("width").getPixels("x"),
            o = this.getStyle("height").getPixels("y");
          if (i && r && a && o) {
            if ((t.save(), t.translate(s, n), this.isSvg)) {
              var h = e.canvg.forkString(t, this.image, {
                ignoreMouse: !0,
                ignoreAnimation: !0,
                ignoreDimensions: !0,
                ignoreClear: !0,
                offsetX: 0,
                offsetY: 0,
                scaleWidth: a,
                scaleHeight: o,
              });
              (h.document.documentElement.parent = this), h.render();
            } else {
              var l = this.image;
              e.setViewBox({
                ctx: t,
                aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                width: a,
                desiredWidth: l.width,
                height: o,
                desiredHeight: l.height,
              }),
                this.loaded &&
                  ("undefined" === typeof l.complete || l.complete) &&
                  t.drawImage(l, 0, 0);
            }
            t.restore();
          }
        }
        getBoundingBox() {
          var t = this.getAttribute("x").getPixels("x"),
            e = this.getAttribute("y").getPixels("y"),
            r = this.getStyle("width").getPixels("x"),
            i = this.getStyle("height").getPixels("y");
          return new kt(t, e, t + r, e + i);
        }
      }
      class fe extends It {
        constructor() {
          super(...arguments), (this.type = "symbol");
        }
        render(t) {}
      }
      class ye {
        constructor(t) {
          (this.document = t), (this.loaded = !1), t.fonts.push(this);
        }
        load(t, e) {
          var r = this;
          return s(function* () {
            try {
              var { document: i } = r,
                s = (yield i.canvg.parser.load(e)).getElementsByTagName("font");
              Array.from(s).forEach((e) => {
                var r = i.createElement(e);
                i.definitions[t] = r;
              });
            } catch (n) {
              console.error('Error while loading font "'.concat(e, '":'), n);
            }
            r.loaded = !0;
          })();
        }
      }
      class me extends Ot {
        constructor(t, e, r) {
          super(t, e, r), (this.type = "style");
          var i = I(
            Array.from(e.childNodes)
              .map((t) => t.textContent)
              .join("")
              .replace(
                /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
                ""
              )
              .replace(/@import.*;/g, "")
          );
          i.split("}").forEach((e) => {
            var r = e.trim();
            if (r) {
              var i = r.split("{"),
                s = i[0].split(","),
                n = i[1].split(";");
              s.forEach((e) => {
                var r = e.trim();
                if (r) {
                  var i = t.styles[r] || {};
                  if (
                    (n.forEach((e) => {
                      var r = e.indexOf(":"),
                        s = e.substr(0, r).trim(),
                        n = e.substr(r + 1, e.length - r).trim();
                      s && n && (i[s] = new lt(t, s, n));
                    }),
                    (t.styles[r] = i),
                    (t.stylesSpecificity[r] = Z(r)),
                    "@font-face" === r)
                  ) {
                    var s = i["font-family"].getString().replace(/"|'/g, "");
                    i.src
                      .getString()
                      .split(",")
                      .forEach((e) => {
                        if (e.indexOf('format("svg")') > 0) {
                          var r = F(e);
                          r && new ye(t).load(s, r);
                        }
                      });
                  }
                }
              });
            }
          });
        }
      }
      me.parseExternalUrl = F;
      class ve extends It {
        constructor() {
          super(...arguments), (this.type = "use");
        }
        setContext(t) {
          super.setContext(t);
          var e = this.getAttribute("x"),
            r = this.getAttribute("y");
          e.hasValue() && t.translate(e.getPixels("x"), 0),
            r.hasValue() && t.translate(0, r.getPixels("y"));
        }
        path(t) {
          var { element: e } = this;
          e && e.path(t);
        }
        renderChildren(t) {
          var { document: e, element: r } = this;
          if (r) {
            var i = r;
            if (
              ("symbol" === r.type &&
                (((i = new Ft(e, null)).attributes.viewBox = new lt(
                  e,
                  "viewBox",
                  r.getAttribute("viewBox").getString()
                )),
                (i.attributes.preserveAspectRatio = new lt(
                  e,
                  "preserveAspectRatio",
                  r.getAttribute("preserveAspectRatio").getString()
                )),
                (i.attributes.overflow = new lt(
                  e,
                  "overflow",
                  r.getAttribute("overflow").getString()
                )),
                (i.children = r.children),
                (r.styles.opacity = new lt(e, "opacity", this.calculateOpacity()))),
              "svg" === i.type)
            ) {
              var s = this.getStyle("width", !1, !0),
                n = this.getStyle("height", !1, !0);
              s.hasValue() && (i.attributes.width = new lt(e, "width", s.getString())),
                n.hasValue() &&
                  (i.attributes.height = new lt(e, "height", n.getString()));
            }
            var a = i.parent;
            (i.parent = this), i.render(t), (i.parent = a);
          }
        }
        getBoundingBox(t) {
          var { element: e } = this;
          return e ? e.getBoundingBox(t) : null;
        }
        elementTransform() {
          var { document: t, element: e } = this;
          return Pt.fromElement(t, e);
        }
        get element() {
          return (
            this.cachedElement ||
              (this.cachedElement = this.getHrefAttribute().getDefinition()),
            this.cachedElement
          );
        }
      }
      function xe(t, e, r, i, s, n) {
        return t[r * i * 4 + 4 * e + n];
      }
      function be(t, e, r, i, s, n, a) {
        t[r * i * 4 + 4 * e + n] = a;
      }
      function Se(t, e, r) {
        return t[e] * r;
      }
      function we(t, e, r, i) {
        return e + Math.cos(t) * r + Math.sin(t) * i;
      }
      class Te extends Ot {
        constructor(t, e, r) {
          super(t, e, r), (this.type = "feColorMatrix");
          var i = B(this.getAttribute("values").getString());
          switch (this.getAttribute("type").getString("matrix")) {
            case "saturate":
              var s = i[0];
              i = [
                0.213 + 0.787 * s,
                0.715 - 0.715 * s,
                0.072 - 0.072 * s,
                0,
                0,
                0.213 - 0.213 * s,
                0.715 + 0.285 * s,
                0.072 - 0.072 * s,
                0,
                0,
                0.213 - 0.213 * s,
                0.715 - 0.715 * s,
                0.072 + 0.928 * s,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
              break;
            case "hueRotate":
              var n = (i[0] * Math.PI) / 180;
              i = [
                we(n, 0.213, 0.787, -0.213),
                we(n, 0.715, -0.715, -0.715),
                we(n, 0.072, -0.072, 0.928),
                0,
                0,
                we(n, 0.213, -0.213, 0.143),
                we(n, 0.715, 0.285, 0.14),
                we(n, 0.072, -0.072, -0.283),
                0,
                0,
                we(n, 0.213, -0.213, -0.787),
                we(n, 0.715, -0.715, 0.715),
                we(n, 0.072, 0.928, 0.072),
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
              break;
            case "luminanceToAlpha":
              i = [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0,
                0, 0, 0, 0, 1,
              ];
          }
          (this.matrix = i),
            (this.includeOpacity = this.getAttribute("includeOpacity").hasValue());
        }
        apply(t, e, r, i, s) {
          for (
            var { includeOpacity: n, matrix: a } = this,
              o = t.getImageData(0, 0, i, s),
              h = 0;
            h < s;
            h++
          )
            for (var l = 0; l < i; l++) {
              var u = xe(o.data, l, h, i, 0, 0),
                c = xe(o.data, l, h, i, 0, 1),
                g = xe(o.data, l, h, i, 0, 2),
                d = xe(o.data, l, h, i, 0, 3),
                p = Se(a, 0, u) + Se(a, 1, c) + Se(a, 2, g) + Se(a, 3, d) + Se(a, 4, 1),
                f = Se(a, 5, u) + Se(a, 6, c) + Se(a, 7, g) + Se(a, 8, d) + Se(a, 9, 1),
                y =
                  Se(a, 10, u) +
                  Se(a, 11, c) +
                  Se(a, 12, g) +
                  Se(a, 13, d) +
                  Se(a, 14, 1),
                m =
                  Se(a, 15, u) +
                  Se(a, 16, c) +
                  Se(a, 17, g) +
                  Se(a, 18, d) +
                  Se(a, 19, 1);
              n && ((p = 0), (f = 0), (y = 0), (m *= d / 255)),
                be(o.data, l, h, i, 0, 0, p),
                be(o.data, l, h, i, 0, 1, f),
                be(o.data, l, h, i, 0, 2, y),
                be(o.data, l, h, i, 0, 3, m);
            }
          t.clearRect(0, 0, i, s), t.putImageData(o, 0, 0);
        }
      }
      class Ae extends Ot {
        constructor() {
          super(...arguments), (this.type = "mask");
        }
        apply(t, e) {
          var { document: r } = this,
            i = this.getAttribute("x").getPixels("x"),
            s = this.getAttribute("y").getPixels("y"),
            n = this.getStyle("width").getPixels("x"),
            a = this.getStyle("height").getPixels("y");
          if (!n && !a) {
            var o = new kt();
            this.children.forEach((e) => {
              o.addBoundingBox(e.getBoundingBox(t));
            }),
              (i = Math.floor(o.x1)),
              (s = Math.floor(o.y1)),
              (n = Math.floor(o.width)),
              (a = Math.floor(o.height));
          }
          var h = this.removeStyles(e, Ae.ignoreStyles),
            l = r.createCanvas(i + n, s + a),
            u = l.getContext("2d");
          r.screen.setDefaults(u),
            this.renderChildren(u),
            new Te(r, {
              nodeType: 1,
              childNodes: [],
              attributes: [
                { nodeName: "type", value: "luminanceToAlpha" },
                { nodeName: "includeOpacity", value: "true" },
              ],
            }).apply(u, 0, 0, i + n, s + a);
          var c = r.createCanvas(i + n, s + a),
            g = c.getContext("2d");
          r.screen.setDefaults(g),
            e.render(g),
            (g.globalCompositeOperation = "destination-in"),
            (g.fillStyle = u.createPattern(l, "no-repeat")),
            g.fillRect(0, 0, i + n, s + a),
            (t.fillStyle = g.createPattern(c, "no-repeat")),
            t.fillRect(0, 0, i + n, s + a),
            this.restoreStyles(e, h);
        }
        render(t) {}
      }
      Ae.ignoreStyles = ["mask", "transform", "clip-path"];
      var Ce = () => {};
      class Pe extends Ot {
        constructor() {
          super(...arguments), (this.type = "clipPath");
        }
        apply(t) {
          var { document: e } = this,
            r = Reflect.getPrototypeOf(t),
            { beginPath: i, closePath: s } = t;
          r && ((r.beginPath = Ce), (r.closePath = Ce)),
            Reflect.apply(i, t, []),
            this.children.forEach((i) => {
              if ("undefined" !== typeof i.path) {
                var n =
                  "undefined" !== typeof i.elementTransform ? i.elementTransform() : null;
                n || (n = Pt.fromElement(e, i)),
                  n && n.apply(t),
                  i.path(t),
                  r && (r.closePath = s),
                  n && n.unapply(t);
              }
            }),
            Reflect.apply(s, t, []),
            t.clip(),
            r && ((r.beginPath = i), (r.closePath = s));
        }
        render(t) {}
      }
      class Oe extends Ot {
        constructor() {
          super(...arguments), (this.type = "filter");
        }
        apply(t, e) {
          var { document: r, children: i } = this,
            s = e.getBoundingBox(t);
          if (s) {
            var n = 0,
              a = 0;
            i.forEach((t) => {
              var e = t.extraFilterDistance || 0;
              (n = Math.max(n, e)), (a = Math.max(a, e));
            });
            var o = Math.floor(s.width),
              h = Math.floor(s.height),
              l = o + 2 * n,
              u = h + 2 * a;
            if (!(l < 1 || u < 1)) {
              var c = Math.floor(s.x),
                g = Math.floor(s.y),
                d = this.removeStyles(e, Oe.ignoreStyles),
                p = r.createCanvas(l, u),
                f = p.getContext("2d");
              r.screen.setDefaults(f),
                f.translate(-c + n, -g + a),
                e.render(f),
                i.forEach((t) => {
                  "function" === typeof t.apply && t.apply(f, 0, 0, l, u);
                }),
                t.drawImage(p, 0, 0, l, u, c - n, g - a, l, u),
                this.restoreStyles(e, d);
            }
          }
        }
        render(t) {}
      }
      Oe.ignoreStyles = ["filter", "transform", "clip-path"];
      class Ee extends Ot {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "feDropShadow"),
            this.addStylesFromStyleDefinition();
        }
        apply(t, e, r, i, s) {}
      }
      class Me extends Ot {
        constructor() {
          super(...arguments), (this.type = "feMorphology");
        }
        apply(t, e, r, i, s) {}
      }
      class Ne extends Ot {
        constructor() {
          super(...arguments), (this.type = "feComposite");
        }
        apply(t, e, r, i, s) {}
      }
      class Ve extends Ot {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = "feGaussianBlur"),
            (this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber())),
            (this.extraFilterDistance = this.blurRadius);
        }
        apply(t, e, r, i, s) {
          var { document: n, blurRadius: a } = this,
            o = n.window ? n.window.document.body : null,
            h = t.canvas;
          (h.id = n.getUniqueId()),
            o && ((h.style.display = "none"), o.appendChild(h)),
            _(h, e, r, i, s, a),
            o && o.removeChild(h);
        }
      }
      class _e extends Ot {
        constructor() {
          super(...arguments), (this.type = "title");
        }
      }
      class ke extends Ot {
        constructor() {
          super(...arguments), (this.type = "desc");
        }
      }
      var Re = {
        svg: Ft,
        rect: Ut,
        circle: Xt,
        ellipse: Yt,
        line: jt,
        polyline: qt,
        polygon: Qt,
        path: Lt,
        pattern: Wt,
        marker: Gt,
        defs: $t,
        linearGradient: Jt,
        radialGradient: te,
        stop: ee,
        animate: re,
        animateColor: ie,
        animateTransform: se,
        font: ne,
        "font-face": ae,
        "missing-glyph": oe,
        glyph: Dt,
        text: Bt,
        tspan: zt,
        tref: he,
        a: le,
        textPath: ge,
        image: pe,
        g: Zt,
        symbol: fe,
        style: me,
        use: ve,
        mask: Ae,
        clipPath: Pe,
        filter: Oe,
        feDropShadow: Ee,
        feMorphology: Me,
        feComposite: Ne,
        feColorMatrix: Te,
        feGaussianBlur: Ve,
        title: _e,
        desc: ke,
      };
      function Ie(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function Le() {
        return (
          (Le = s(function* (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = document.createElement("img");
            return (
              e && (r.crossOrigin = "Anonymous"),
              new Promise((e, i) => {
                (r.onload = () => {
                  e(r);
                }),
                  (r.onerror = (t, e, r, s, n) => {
                    i(n);
                  }),
                  (r.src = t);
              })
            );
          })),
          Le.apply(this, arguments)
        );
      }
      class De {
        constructor(t) {
          var {
            rootEmSize: e = 12,
            emSize: r = 12,
            createCanvas: i = De.createCanvas,
            createImage: s = De.createImage,
            anonymousCrossOrigin: n,
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.canvg = t),
            (this.definitions = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.images = []),
            (this.fonts = []),
            (this.emSizeStack = []),
            (this.uniqueId = 0),
            (this.screen = t.screen),
            (this.rootEmSize = e),
            (this.emSize = r),
            (this.createCanvas = i),
            (this.createImage = this.bindCreateImage(s, n)),
            this.screen.wait(this.isImagesLoaded.bind(this)),
            this.screen.wait(this.isFontsLoaded.bind(this));
        }
        bindCreateImage(t, e) {
          return "boolean" === typeof e
            ? (r, i) => t(r, "boolean" === typeof i ? i : e)
            : t;
        }
        get window() {
          return this.screen.window;
        }
        get fetch() {
          return this.screen.fetch;
        }
        get ctx() {
          return this.screen.ctx;
        }
        get emSize() {
          var { emSizeStack: t } = this;
          return t[t.length - 1];
        }
        set emSize(t) {
          var { emSizeStack: e } = this;
          e.push(t);
        }
        popEmSize() {
          var { emSizeStack: t } = this;
          t.pop();
        }
        getUniqueId() {
          return "canvg".concat(++this.uniqueId);
        }
        isImagesLoaded() {
          return this.images.every((t) => t.loaded);
        }
        isFontsLoaded() {
          return this.fonts.every((t) => t.loaded);
        }
        createDocumentElement(t) {
          var e = this.createElement(t.documentElement);
          return (
            (e.root = !0), e.addStylesFromStyleDefinition(), (this.documentElement = e), e
          );
        }
        createElement(t) {
          var e = t.nodeName.replace(/^[^:]+:/, ""),
            r = De.elementTypes[e];
          return "undefined" !== typeof r ? new r(this, t) : new Et(this, t);
        }
        createTextNode(t) {
          return new Ht(this, t);
        }
        setViewBox(t) {
          this.screen.setViewBox(
            (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Ie(Object(r), !0).forEach(function (e) {
                      (0, n.A)(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : Ie(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    });
              }
              return t;
            })({ document: this }, t)
          );
        }
      }
      function Be(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function ze(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Be(Object(r), !0).forEach(function (e) {
                (0, n.A)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Be(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      (De.createCanvas = function (t, e) {
        var r = document.createElement("canvas");
        return (r.width = t), (r.height = e), r;
      }),
        (De.createImage = function (t) {
          return Le.apply(this, arguments);
        }),
        (De.elementTypes = Re);
      class He {
        constructor(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          (this.parser = new vt(r)), (this.screen = new ft(t, r)), (this.options = r);
          var i = new De(this, r),
            s = i.createDocumentElement(e);
          (this.document = i), (this.documentElement = s);
        }
        static from(t, e) {
          var r = arguments;
          return s(function* () {
            var i = r.length > 2 && void 0 !== r[2] ? r[2] : {},
              s = new vt(i),
              n = yield s.parse(e);
            return new He(t, n, i);
          })();
        }
        static fromString(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = new vt(r).parseFromString(e);
          return new He(t, i, r);
        }
        fork(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return He.from(t, e, ze(ze({}, this.options), r));
        }
        forkString(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return He.fromString(t, e, ze(ze({}, this.options), r));
        }
        ready() {
          return this.screen.ready();
        }
        isReady() {
          return this.screen.isReady();
        }
        render() {
          var t = arguments,
            e = this;
          return s(function* () {
            var r = t.length > 0 && void 0 !== t[0] ? t[0] : {};
            e.start(ze({ enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 }, r)),
              yield e.ready(),
              e.stop();
          })();
        }
        start() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { documentElement: e, screen: r, options: i } = this;
          r.start(e, ze(ze({ enableRedraw: !0 }, i), t));
        }
        stop() {
          this.screen.stop();
        }
        resize(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          this.documentElement.resize(t, e, r);
        }
      }
    },
  },
]);
//# sourceMappingURL=455.ef3d5a40.chunk.js.map
