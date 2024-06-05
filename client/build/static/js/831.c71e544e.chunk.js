"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [831],
  {
    18986: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(96446);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return { flexGrow: 1, height: "90dvh", width: "100%" };
      });
    },
    88780: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(19252);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return {
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        };
      });
    },
    87476: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(39336);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return { marginBottom: "20px", width: "100%", border: "1px solid #f7bd00" };
      });
    },
    29539: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(67784);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return {
          height: "35px",
          "& .MuiInputBase-root": {
            padding: "2px",
            backgroundColor: "white",
            fontSize: "14px",
            border: "2px solid #858585",
          },
          "& .MuiInputBase-input": { padding: "5px" },
          "& .MuiFormLabel-root": {
            fontSize: "14px",
            backgroundColor: "white",
            color: "black",
            padding: "2px 10px",
            borderRadius: "25px",
          },
        };
      });
    },
    55174: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(96446);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return {
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        };
      });
    },
    56861: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(96446);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return { overflowY: "scroll", height: "100%", width: "100%" };
      });
    },
    23613: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(78977);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return {
          width: "100%",
          backgroundColor: "#f7bd00",
          color: "#252525",
          "&:hover": { backgroundColor: "#d3d4de" },
          gridColumn: "span 4",
          height: "40px",
        };
      });
    },
    97069: (e, t, r) => {
      r.d(t, { A: () => l });
      var a = r(24858),
        n = r(70579);
      function l(e) {
        let { children: t, onSubmit: r, methods: l } = e;
        return (0, n.jsx)(a.Op, {
          ...l,
          children: (0, n.jsx)("form", {
            onSubmit: r,
            style: { height: "100%" },
            children: t,
          }),
        });
      }
    },
    48824: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(88911);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return {
          height: "95%",
          width: "inherit",
          justifyContent: "center",
          flexDirection: "row",
        };
      });
    },
    73576: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(88911);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return { width: "100%", height: "100%", flexDirection: "column" };
      });
    },
    47122: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(88911);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return { width: "100%", flexDirection: "row" };
      });
    },
    72360: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(85865);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return {
          fontSize: "20px",
          fontWeight: 600,
          "&:first-letter": { textTransform: "capitalize" },
        };
      });
    },
    69263: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(96446);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return {
          backgroundColor: "#fff",
          borderRadius: "25px",
          aspectRatio: "9/16",
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          padding: "20px",
          height: "100%",
        };
      });
    },
    46359: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(96446);
      const n = (0, r(34535).Ay)(a.A)((e) => {
        let { theme: t } = e;
        return {
          backgroundColor: "#fff",
          borderRadius: "25px",
          aspectRatio: "3/5",
          padding: "20px",
          height: "50%",
          overflow: "hidden",
        };
      });
    },
    88831: (e, t, r) => {
      r.r(t), r.d(t, { default: () => Ue });
      var a = r(65043),
        n = r(88780),
        l = r(46359),
        o = r(69263),
        i = r(96446),
        s = r(34535);
      const c = (0, s.Ay)(i.A)((e) => {
        let { theme: t } = e;
        return {
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
        };
      });
      var d = r(18986),
        p = r(48824),
        h = r(73576),
        m = r(83003),
        A = r(63326),
        u = r(47122),
        g = r(81045),
        x = r(60984),
        f = r(55174),
        v = r(87476),
        j = r(72360),
        b = r(60446),
        y = r.n(b),
        w = r(83760),
        E = r(34268),
        L = r(28004),
        M = r(65959),
        Z = r(38985),
        C = r(87624);
      const O = new Map([
        [
          "bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M178,36c-20.09,0-37.92,7.93-50,21.56C115.92,43.93,98.09,36,78,36a66.08,66.08,0,0,0-66,66c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,69.4,160.2,60,178,60a42,42,0,0,1,42,42C220,131.42,194.18,159.77,172.51,178.36Z",
            })
          ),
        ],
        [
          "duotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",
              opacity: "0.2",
            }),
            a.createElement("path", {
              d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z",
            })
          ),
        ],
        [
          "fill",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z",
            })
          ),
        ],
        [
          "light",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z",
            })
          ),
        ],
        [
          "regular",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z",
            })
          ),
        ],
        [
          "thin",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50C228,160,142,211.46,128,219.42Z",
            })
          ),
        ],
      ]);
      var P = Object.defineProperty,
        F = Object.defineProperties,
        S = Object.getOwnPropertyDescriptors,
        V = Object.getOwnPropertySymbols,
        H = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        D = (e, t, r) =>
          t in e
            ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r);
      const I = (0, a.forwardRef)((e, t) =>
        a.createElement(
          C.A,
          ((e, t) => F(e, S(t)))(
            ((e, t) => {
              for (var r in t || (t = {})) H.call(t, r) && D(e, r, t[r]);
              if (V) for (var r of V(t)) k.call(t, r) && D(e, r, t[r]);
              return e;
            })({ ref: t }, e),
            { weights: O }
          )
        )
      );
      I.displayName = "Heart";
      const R = new Map([
        [
          "bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z",
            })
          ),
        ],
        [
          "duotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
              opacity: "0.2",
            }),
            a.createElement("path", {
              d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
            })
          ),
        ],
        [
          "fill",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z",
            })
          ),
        ],
        [
          "light",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z",
            })
          ),
        ],
        [
          "regular",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
            })
          ),
        ],
        [
          "thin",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z",
            })
          ),
        ],
      ]);
      var z = Object.defineProperty,
        N = Object.defineProperties,
        Y = Object.getOwnPropertyDescriptors,
        q = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        G = (e, t, r) =>
          t in e
            ? z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r);
      const W = (0, a.forwardRef)((e, t) =>
        a.createElement(
          C.A,
          ((e, t) => N(e, Y(t)))(
            ((e, t) => {
              for (var r in t || (t = {})) T.call(t, r) && G(e, r, t[r]);
              if (q) for (var r of q(t)) B.call(t, r) && G(e, r, t[r]);
              return e;
            })({ ref: t }, e),
            { weights: R }
          )
        )
      );
      W.displayName = "ChatCircle";
      const _ = new Map([
        [
          "bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z",
            })
          ),
        ],
        [
          "duotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",
              opacity: "0.2",
            }),
            a.createElement("path", {
              d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
            })
          ),
        ],
        [
          "fill",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
            })
          ),
        ],
        [
          "light",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z",
            })
          ),
        ],
        [
          "regular",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
            })
          ),
        ],
        [
          "thin",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z",
            })
          ),
        ],
      ]);
      var J = Object.defineProperty,
        K = Object.defineProperties,
        X = Object.getOwnPropertyDescriptors,
        Q = Object.getOwnPropertySymbols,
        U = Object.prototype.hasOwnProperty,
        $ = Object.prototype.propertyIsEnumerable,
        ee = (e, t, r) =>
          t in e
            ? J(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r);
      const te = (0, a.forwardRef)((e, t) =>
        a.createElement(
          C.A,
          ((e, t) => K(e, X(t)))(
            ((e, t) => {
              for (var r in t || (t = {})) U.call(t, r) && ee(e, r, t[r]);
              if (Q) for (var r of Q(t)) $.call(t, r) && ee(e, r, t[r]);
              return e;
            })({ ref: t }, e),
            { weights: _ }
          )
        )
      );
      te.displayName = "ArrowsClockwise";
      var re = r(16013);
      const ae = new Map([
        [
          "bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M184,28H72A20,20,0,0,0,52,48V224a12,12,0,0,0,18.36,10.18l57.63-36,57.65,36A12,12,0,0,0,204,224V48A20,20,0,0,0,184,28Zm-4,174.35-45.65-28.53a12,12,0,0,0-12.72,0L76,202.35V52H180Z",
            })
          ),
        ],
        [
          "duotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M192,48V224l-64-40L64,224V48a8,8,0,0,1,8-8H184A8,8,0,0,1,192,48Z",
              opacity: "0.2",
            }),
            a.createElement("path", {
              d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z",
            })
          ),
        ],
        [
          "fill",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z",
            })
          ),
        ],
        [
          "light",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34Zm2,179.17-54.83-34.26a6,6,0,0,0-6.36,0L70,213.17V48a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z",
            })
          ),
        ],
        [
          "regular",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z",
            })
          ),
        ],
        [
          "thin",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M184,36H72A12,12,0,0,0,60,48V224a4,4,0,0,0,6.12,3.39L128,188.72l61.89,38.67A4,4,0,0,0,192,228a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,196,224V48A12,12,0,0,0,184,36Zm4,180.78-57.89-36.17a4,4,0,0,0-4.24,0L68,216.78V48a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z",
            })
          ),
        ],
      ]);
      var ne = Object.defineProperty,
        le = Object.defineProperties,
        oe = Object.getOwnPropertyDescriptors,
        ie = Object.getOwnPropertySymbols,
        se = Object.prototype.hasOwnProperty,
        ce = Object.prototype.propertyIsEnumerable,
        de = (e, t, r) =>
          t in e
            ? ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r);
      const pe = (0, a.forwardRef)((e, t) =>
        a.createElement(
          C.A,
          ((e, t) => le(e, oe(t)))(
            ((e, t) => {
              for (var r in t || (t = {})) se.call(t, r) && de(e, r, t[r]);
              if (ie) for (var r of ie(t)) ce.call(t, r) && de(e, r, t[r]);
              return e;
            })({ ref: t }, e),
            { weights: ae }
          )
        )
      );
      pe.displayName = "BookmarkSimple";
      var he = r(73338),
        me = r(23613),
        Ae = r(73216),
        ue = r(83462),
        ge = r(58168),
        xe = r(98587),
        fe = r(58387),
        ve = r(68606),
        je = r(85865),
        be = r(72876),
        ye = r(87034),
        we = r(2563),
        Ee = r(70579);
      const Le = ["className", "id"],
        Me = (0, s.Ay)(je.A, {
          name: "MuiDialogTitle",
          slot: "Root",
          overridesResolver: (e, t) => t.root,
        })({ padding: "16px 24px", flex: "0 0 auto" }),
        Ze = a.forwardRef(function (e, t) {
          const r = (0, be.A)({ props: e, name: "MuiDialogTitle" }),
            { className: n, id: l } = r,
            o = (0, xe.A)(r, Le),
            i = r,
            s = ((e) => {
              const { classes: t } = e;
              return (0, ve.A)({ root: ["root"] }, ye.t, t);
            })(i),
            { titleId: c = l } = a.useContext(we.A);
          return (0,
          Ee.jsx)(Me, (0, ge.A)({ component: "h2", className: (0, fe.A)(s.root, n), ownerState: i, ref: t, variant: "h6", id: null != l ? l : c }, o));
        });
      var Ce = r(17392),
        Oe = r(35316),
        Pe = r(81673),
        Fe = r(29347);
      const Se = new Map([
        [
          "bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
            })
          ),
        ],
        [
          "duotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
              opacity: "0.2",
            }),
            a.createElement("path", {
              d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
            })
          ),
        ],
        [
          "fill",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
            })
          ),
        ],
        [
          "light",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
            })
          ),
        ],
        [
          "regular",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
            })
          ),
        ],
        [
          "thin",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
            })
          ),
        ],
      ]);
      var Ve = Object.defineProperty,
        He = Object.defineProperties,
        ke = Object.getOwnPropertyDescriptors,
        De = Object.getOwnPropertySymbols,
        Ie = Object.prototype.hasOwnProperty,
        Re = Object.prototype.propertyIsEnumerable,
        ze = (e, t, r) =>
          t in e
            ? Ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r);
      const Ne = (0, a.forwardRef)((e, t) =>
        a.createElement(
          C.A,
          ((e, t) => He(e, ke(t)))(
            ((e, t) => {
              for (var r in t || (t = {})) Ie.call(t, r) && ze(e, r, t[r]);
              if (De) for (var r of De(t)) Re.call(t, r) && ze(e, r, t[r]);
              return e;
            })({ ref: t }, e),
            { weights: Se }
          )
        )
      );
      Ne.displayName = "X";
      var Ye = r(24858),
        qe = r(80688),
        Te = r(30064),
        Be = r.n(Te),
        Ge = r(56861),
        We = r(29539),
        _e = r(72812),
        Je = r(97069);
      const Ke = (0, s.Ay)(ue.A)((e) => {
          let { theme: t } = e;
          return {
            "& .MuiDialogContent-root": {
              padding: t.spacing(2),
              width: "350px",
              height: "200px",
            },
            "& .MuiDialogActions-root": { padding: t.spacing(1) },
          };
        }),
        Xe = (e) => {
          let { handleClose: t, open: r, job: a } = e;
          const { currentUser: n } = (0, m.d4)((e) => e.app),
            l = (0, m.wA)(),
            o = {
              applicantId: n._id,
              recruiterId: a.createdBy,
              jobId: a._id,
              applicantResume: "".concat(qe.ET, "./ch/").concat(n.username, "./resume"),
              dateOfApplication: new Date(),
              answerList: [].map((e) => ({ questionGiven: "", answerGiven: "" })),
            },
            s = (0, Ye.mN)({ defaultValues: o }),
            { control: c, reset: d, resetField: p, handleSubmit: h } = s;
          return (0, Ee.jsx)(Ke, {
            onClose: t,
            open: r,
            children: (0, Ee.jsxs)(Je.A, {
              methods: s,
              onSubmit: h(async (e) => {
                try {
                  console.log("DATA", e),
                    await l(
                      (0, A.rS)({
                        applicantId: e.applicantId,
                        recruiterId: e.recruiterId,
                        jobId: e.jobId,
                        applicantResume: e.applicantResume,
                        dateOfApplication: y()(e.dateOfApplication),
                        answerList: e.answerList
                          .filter((e) => e.questionGiven && e.answerGiven)
                          .map((e) => ({
                            questionGiven: e.questionGiven,
                            answerType: e.answerGiven,
                          })),
                      })
                    ),
                    t(),
                    Be()
                      .fire({
                        title: "Are you sure?",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Yes, Save it!",
                      })
                      .then((e) => {
                        e.isConfirmed && (d(), p("answerList[]"));
                      });
                } catch (r) {
                  console.error(r),
                    Be().fire({
                      title: "Error!",
                      text: "An error occurred while updating!",
                      icon: "error",
                    }),
                    d();
                }
              }),
              children: [
                (0, Ee.jsx)(Ze, {
                  sx: { m: 0, p: 2 },
                  id: "customized-dialog-title",
                  children: "Apply Quest",
                }),
                (0, Ee.jsx)(Ce.A, {
                  "aria-label": "close",
                  onClick: t,
                  sx: {
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (e) => e.palette.grey[500],
                  },
                  children: (0, Ee.jsx)(Ne, { size: 20, weight: "bold" }),
                }),
                (0, Ee.jsx)(Oe.A, {
                  dividers: !0,
                  children: (0, Ee.jsx)(Ge.A, {
                    children: (0, Ee.jsx)(f.A, {
                      gap: 2,
                      children:
                        a.questionList.length > 0
                          ? a.questionList.map((e, t) =>
                              (0, Ee.jsxs)(
                                i.A,
                                {
                                  sx: { gridColumn: "span 12" },
                                  children: [
                                    (0, Ee.jsx)(Ye.xI, {
                                      name: "answerList[".concat(t, "].questionGiven"),
                                      control: c,
                                      render: (r) => {
                                        let {
                                          field: { onChange: a, value: n },
                                          fieldState: { error: l },
                                        } = r;
                                        return (0, Ee.jsxs)(Ee.Fragment, {
                                          children: [
                                            (0, Ee.jsx)(x.A, {
                                              sx: { fontSize: "16px" },
                                              children: ""
                                                .concat(t + 1, ". ")
                                                .concat(e.questionGiven),
                                            }),
                                            (0, Ee.jsx)("input", {
                                              value: n,
                                              style: { display: "none" },
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                    (0, Ee.jsx)(Ye.xI, {
                                      name: "answerList[".concat(t, "].answerGiven"),
                                      control: c,
                                      render: (t) => {
                                        let {
                                          field: { onChange: r, value: a },
                                          fieldState: { error: n },
                                        } = t;
                                        return (0, Ee.jsxs)(Ee.Fragment, {
                                          children: [
                                            (0, Ee.jsx)(We.A, {
                                              fullWidth: !0,
                                              value: a,
                                              onChange: (e) => {
                                                r(e);
                                              },
                                              error: !!n,
                                              type: "".concat(e.answerType),
                                            }),
                                            !!n &&
                                              (0, Ee.jsx)(Pe.A, {
                                                error: !0,
                                                sx: { px: 2, textAlign: "start" },
                                                children: "required!!",
                                              }),
                                          ],
                                        });
                                      },
                                    }),
                                  ],
                                },
                                t
                              )
                            )
                          : (0, Ee.jsx)(i.A, {
                              sx: { gridColumn: "span 12" },
                              children: (0, Ee.jsx)(j.A, {
                                variant: "h3",
                                children: "Are you sure to apply for this job vacancy?",
                              }),
                            }),
                    }),
                  }),
                }),
                (0, Ee.jsx)(Fe.A, {
                  children: (0, Ee.jsx)(_e.A, {
                    color: "primary",
                    size: "large",
                    type: "submit",
                    variant: "contained",
                    fullWidth: !0,
                    children: "Save",
                  }),
                }),
              ],
            }),
          });
        },
        Qe = (e) => {
          let { job: t, createdBy: r } = e;
          const n = (0, m.wA)(),
            l = (0, Ae.Zp)(),
            [s, c] = (0, a.useState)(!1);
          return (0, Ee.jsx)(o.A, {
            sx: { mb: "50px", padding: "0px" },
            children: (0, Ee.jsxs)(h.A, {
              gap: 3,
              children: [
                (0, Ee.jsxs)(i.A, {
                  sx: { height: "10%" },
                  children: [
                    (0, Ee.jsxs)(u.A, {
                      gap: 2,
                      sx: { alignItems: "center", height: "100%", px: "20px" },
                      children: [
                        (0, Ee.jsx)(g.A, {
                          alt: null === r || void 0 === r ? void 0 : r.username,
                          src: null === r || void 0 === r ? void 0 : r.avatar,
                          sx: {
                            width: "40px",
                            height: "40px",
                            gridColumn: "span 2",
                            gridRow: "span 2",
                          },
                        }),
                        (0, Ee.jsx)(x.A, {
                          children: null === r || void 0 === r ? void 0 : r.username,
                        }),
                        (0, Ee.jsx)(i.A, { sx: { flexGrow: 1 } }),
                      ],
                    }),
                    (0, Ee.jsx)(v.A, { sx: { mb: 0 } }),
                  ],
                }),
                (0, Ee.jsx)(i.A, {
                  sx: { height: "80%", overflow: "hidden" },
                  children: (0, Ee.jsxs)(h.A, {
                    sx: {
                      height: "100%",
                      px: "20px",
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                    },
                    children: [
                      (0, Ee.jsxs)(f.A, {
                        gap: 2,
                        children: [
                          (0, Ee.jsx)(i.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, Ee.jsx)(j.A, {
                              variant: "h3",
                              children:
                                null === t || void 0 === t ? void 0 : t.jobPosition,
                            }),
                          }),
                          (0, Ee.jsx)(i.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, Ee.jsxs)(u.A, {
                              gap: 2,
                              sx: { alignItems: "center" },
                              children: [
                                (0, Ee.jsx)(g.A, {
                                  src:
                                    null === t || void 0 === t ? void 0 : t.companyLogo,
                                  sx: {
                                    width: "40px",
                                    height: "40px",
                                    gridColumn: "span 2",
                                    gridRow: "span 2",
                                  },
                                }),
                                (0, Ee.jsx)(j.A, {
                                  children: "By ".concat(
                                    null === t || void 0 === t ? void 0 : t.companyName
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, Ee.jsx)(i.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, Ee.jsxs)(u.A, {
                              gap: 1,
                              children: [
                                (0, Ee.jsx)(x.A, {
                                  children: "".concat(
                                    null === t || void 0 === t ? void 0 : t.jobType
                                  ),
                                }),
                                (0, Ee.jsx)(x.A, { children: " | " }),
                                (0, Ee.jsx)(x.A, {
                                  children: "Expire on ".concat(
                                    y()(
                                      null === t || void 0 === t ? void 0 : t.jobDeadline
                                    ).format("ddd, DD MMM YYYY")
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, Ee.jsx)(i.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, Ee.jsxs)(u.A, {
                              gap: 1,
                              children: [
                                (0, Ee.jsx)(w.y, { size: 20, weight: "bold" }),
                                (0, Ee.jsx)(x.A, {
                                  children: "Rp "
                                    .concat(
                                      (0, he.KZ)(
                                        null === t || void 0 === t ? void 0 : t.jobSalary
                                      ),
                                      " / "
                                    )
                                    .concat(
                                      null === t || void 0 === t ? void 0 : t.payPeriods
                                    ),
                                }),
                              ],
                            }),
                          }),
                          (0, Ee.jsx)(i.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, Ee.jsxs)(u.A, {
                              gap: 1,
                              children: [
                                (0, Ee.jsx)(E.r, { size: 20, weight: "bold" }),
                                (0, Ee.jsx)(x.A, {
                                  children: "".concat(
                                    null === t || void 0 === t ? void 0 : t.workPlacement
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, Ee.jsx)(i.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, Ee.jsxs)(u.A, {
                              gap: 1,
                              children: [
                                (0, Ee.jsx)(L.J, { size: 20, weight: "bold" }),
                                (0, Ee.jsx)(x.A, {
                                  children: ""
                                    .concat(
                                      y()(
                                        null === t || void 0 === t
                                          ? void 0
                                          : t.jobStartDate
                                      ).format("DD MMM YYYY"),
                                      " - "
                                    )
                                    .concat(
                                      y()(
                                        null === t || void 0 === t ? void 0 : t.jobEndDate
                                      ).format("DD MMM YYYY")
                                    ),
                                }),
                              ],
                            }),
                          }),
                          (0, Ee.jsx)(i.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, Ee.jsxs)(u.A, {
                              gap: 1,
                              children: [
                                (0, Ee.jsx)(M.v, { size: 20, weight: "bold" }),
                                (0, Ee.jsx)(x.A, {
                                  children: "".concat(
                                    null === t || void 0 === t ? void 0 : t.contactMail
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, Ee.jsx)(i.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, Ee.jsxs)(u.A, {
                              gap: 1,
                              children: [
                                (0, Ee.jsx)(Z.s, { size: 20, weight: "bold" }),
                                (0, Ee.jsx)(x.A, {
                                  children: "".concat(
                                    null === t || void 0 === t ? void 0 : t.jobLocation
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Ee.jsx)(i.A, { sx: { flexGrow: 1 } }),
                      (0, Ee.jsxs)(u.A, {
                        gap: 2,
                        children: [
                          (0, Ee.jsx)(me.A, {
                            onClick: () => {
                              n((0, A.O7)({ questId: t._id })),
                                l("./quest/".concat(t._id, "./poster"));
                            },
                            children: "View",
                          }),
                          (0, Ee.jsx)(me.A, {
                            onClick: () => {
                              c(!0);
                            },
                            children: "Apply",
                          }),
                          (0, Ee.jsx)(Xe, {
                            open: s,
                            handleClose: () => {
                              c(!1);
                            },
                            job: t,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, Ee.jsxs)(i.A, {
                  sx: { height: "10%" },
                  children: [
                    (0, Ee.jsx)(v.A, { sx: { mb: 0 } }),
                    (0, Ee.jsxs)(u.A, {
                      gap: 4,
                      sx: {
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        px: "20px",
                      },
                      children: [
                        (0, Ee.jsx)(I, { size: 30, weight: "bold" }),
                        (0, Ee.jsx)(W, { size: 30, weight: "bold" }),
                        (0, Ee.jsx)(te, { size: 30, weight: "bold" }),
                        (0, Ee.jsx)(re.M, { size: 30, weight: "bold" }),
                        (0, Ee.jsx)(pe, { size: 30, weight: "bold" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ue = () => {
          const e = (0, m.wA)();
          (0, a.useEffect)(() => {
            e((0, A.iV)());
          }, []);
          const { allJobs: t } = (0, m.d4)((e) => e.app);
          return (
            console.log("\ud83d\ude80 ~ PageHome ~ allJobs:", t),
            (0, Ee.jsx)(d.A, {
              children: (0, Ee.jsx)(n.A, {
                maxWidth: "md",
                children: (0, Ee.jsxs)(p.A, {
                  gap: 3,
                  children: [
                    (0, Ee.jsxs)(h.A, {
                      gap: 3,
                      sx: { width: "230px" },
                      children: [(0, Ee.jsx)(l.A, {}), (0, Ee.jsx)(l.A, {})],
                    }),
                    (0, Ee.jsx)(o.A, {
                      sx: {
                        backgroundColor: "transparent",
                        padding: "0",
                        overflow: "hidden",
                      },
                      children:
                        t.length > 0
                          ? (0, Ee.jsx)(c, {
                              children: t
                                .slice()
                                .reverse()
                                .map((e, t) =>
                                  (0, Ee.jsx)(Qe, { job: e, createdBy: e.createdBy }, t)
                                ),
                            })
                          : (0, Ee.jsx)(o.A, {
                              children: (0, Ee.jsx)(h.A, {
                                sx: { alignItems: "center", justifyContent: "center" },
                                children: (0, Ee.jsx)(j.A, {
                                  children: "No one has created the job vacancy yet",
                                }),
                              }),
                            }),
                    }),
                    (0, Ee.jsxs)(h.A, {
                      gap: 3,
                      sx: { width: "230px" },
                      children: [(0, Ee.jsx)(l.A, {}), (0, Ee.jsx)(l.A, {})],
                    }),
                  ],
                }),
              }),
            })
          );
        };
    },
    73338: (e, t, r) => {
      r.d(t, { KZ: () => l });
      var a = r(79328),
        n = r.n(a);
      function l(e) {
        return n()(e).format(Number.isInteger(e) ? "0,0" : "0,0.00");
      }
    },
    81045: (e, t, r) => {
      r.d(t, { A: () => y });
      var a = r(98587),
        n = r(58168),
        l = r(65043),
        o = r(58387),
        i = r(68606),
        s = r(44350),
        c = r(34535),
        d = r(66734),
        p = r(70579);
      const h = (0, d.A)(
        (0, p.jsx)("path", {
          d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
        }),
        "Person"
      );
      var m = r(57056),
        A = r(32400);
      function u(e) {
        return (0, A.Ay)("MuiAvatar", e);
      }
      (0, m.A)("MuiAvatar", [
        "root",
        "colorDefault",
        "circular",
        "rounded",
        "square",
        "img",
        "fallback",
      ]);
      var g = r(4162);
      const x = [
          "alt",
          "children",
          "className",
          "component",
          "slots",
          "slotProps",
          "imgProps",
          "sizes",
          "src",
          "srcSet",
          "variant",
        ],
        f = (0, s.h)("MuiAvatar"),
        v = (0, c.Ay)("div", {
          name: "MuiAvatar",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
          },
        })((e) => {
          let { theme: t } = e;
          return {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: 40,
            height: 40,
            fontFamily: t.typography.fontFamily,
            fontSize: t.typography.pxToRem(20),
            lineHeight: 1,
            borderRadius: "50%",
            overflow: "hidden",
            userSelect: "none",
            variants: [
              {
                props: { variant: "rounded" },
                style: { borderRadius: (t.vars || t).shape.borderRadius },
              },
              { props: { variant: "square" }, style: { borderRadius: 0 } },
              {
                props: { colorDefault: !0 },
                style: (0, n.A)(
                  { color: (t.vars || t).palette.background.default },
                  t.vars
                    ? { backgroundColor: t.vars.palette.Avatar.defaultBg }
                    : (0, n.A)(
                        { backgroundColor: t.palette.grey[400] },
                        t.applyStyles("dark", { backgroundColor: t.palette.grey[600] })
                      )
                ),
              },
            ],
          };
        }),
        j = (0, c.Ay)("img", {
          name: "MuiAvatar",
          slot: "Img",
          overridesResolver: (e, t) => t.img,
        })({
          width: "100%",
          height: "100%",
          textAlign: "center",
          objectFit: "cover",
          color: "transparent",
          textIndent: 1e4,
        }),
        b = (0, c.Ay)(h, {
          name: "MuiAvatar",
          slot: "Fallback",
          overridesResolver: (e, t) => t.fallback,
        })({ width: "75%", height: "75%" });
      const y = l.forwardRef(function (e, t) {
        const r = f({ props: e, name: "MuiAvatar" }),
          {
            alt: s,
            children: c,
            className: d,
            component: h = "div",
            slots: m = {},
            slotProps: A = {},
            imgProps: y,
            sizes: w,
            src: E,
            srcSet: L,
            variant: M = "circular",
          } = r,
          Z = (0, a.A)(r, x);
        let C = null;
        const O = (function (e) {
            let { crossOrigin: t, referrerPolicy: r, src: a, srcSet: n } = e;
            const [o, i] = l.useState(!1);
            return (
              l.useEffect(() => {
                if (!a && !n) return;
                i(!1);
                let e = !0;
                const l = new Image();
                return (
                  (l.onload = () => {
                    e && i("loaded");
                  }),
                  (l.onerror = () => {
                    e && i("error");
                  }),
                  (l.crossOrigin = t),
                  (l.referrerPolicy = r),
                  (l.src = a),
                  n && (l.srcset = n),
                  () => {
                    e = !1;
                  }
                );
              }, [t, r, a, n]),
              o
            );
          })((0, n.A)({}, y, { src: E, srcSet: L })),
          P = E || L,
          F = P && "error" !== O,
          S = (0, n.A)({}, r, { colorDefault: !F, component: h, variant: M }),
          V = ((e) => {
            const { classes: t, variant: r, colorDefault: a } = e,
              n = {
                root: ["root", r, a && "colorDefault"],
                img: ["img"],
                fallback: ["fallback"],
              };
            return (0, i.A)(n, u, t);
          })(S),
          [H, k] = (0, g.A)("img", {
            className: V.img,
            elementType: j,
            externalForwardedProps: {
              slots: m,
              slotProps: { img: (0, n.A)({}, y, A.img) },
            },
            additionalProps: { alt: s, src: E, srcSet: L, sizes: w },
            ownerState: S,
          });
        return (
          (C = F
            ? (0, p.jsx)(H, (0, n.A)({}, k))
            : c || 0 === c
            ? c
            : P && s
            ? s[0]
            : (0, p.jsx)(b, { ownerState: S, className: V.fallback })),
          (0, p.jsx)(
            v,
            (0, n.A)(
              { as: h, ownerState: S, className: (0, o.A)(V.root, d), ref: t },
              Z,
              { children: C }
            )
          )
        );
      });
    },
    4162: (e, t, r) => {
      r.d(t, { A: () => h });
      var a = r(58168),
        n = r(98587),
        l = r(47042),
        o = r(4430),
        i = r(18413),
        s = r(62205);
      const c = [
          "className",
          "elementType",
          "ownerState",
          "externalForwardedProps",
          "getSlotOwnerState",
          "internalForwardedProps",
        ],
        d = ["component", "slots", "slotProps"],
        p = ["component"];
      function h(e, t) {
        const {
            className: r,
            elementType: h,
            ownerState: m,
            externalForwardedProps: A,
            getSlotOwnerState: u,
            internalForwardedProps: g,
          } = t,
          x = (0, n.A)(t, c),
          {
            component: f,
            slots: v = { [e]: void 0 },
            slotProps: j = { [e]: void 0 },
          } = A,
          b = (0, n.A)(A, d),
          y = v[e] || h,
          w = (0, o.Y)(j[e], m),
          E = (0, i.p)(
            (0, a.A)({ className: r }, x, {
              externalForwardedProps: "root" === e ? b : void 0,
              externalSlotProps: w,
            })
          ),
          {
            props: { component: L },
            internalRef: M,
          } = E,
          Z = (0, n.A)(E.props, p),
          C = (0, l.A)(M, null == w ? void 0 : w.ref, t.ref),
          O = u ? u(Z) : {},
          P = (0, a.A)({}, m, O),
          F = "root" === e ? L || f : L,
          S = (0, s.X)(
            y,
            (0, a.A)(
              {},
              "root" === e && !f && !v[e] && g,
              "root" !== e && !v[e] && g,
              Z,
              F && { as: F },
              { ref: C }
            ),
            P
          );
        return (
          Object.keys(O).forEach((e) => {
            delete S[e];
          }),
          [y, S]
        );
      }
    },
    44350: (e, t, r) => {
      r.d(t, { h: () => n });
      var a = r(72876);
      function n(e) {
        return a.A;
      }
    },
    16013: (e, t, r) => {
      r.d(t, { M: () => m });
      var a = r(65043),
        n = r(87624);
      const l = new Map([
        [
          "bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z",
            })
          ),
        ],
        [
          "duotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L108,148,20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z",
              opacity: "0.2",
            }),
            a.createElement("path", {
              d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z",
            })
          ),
        ],
        [
          "fill",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z",
            })
          ),
        ],
        [
          "light",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M225.88,30.12a13.83,13.83,0,0,0-13.7-3.58l-.11,0L20.14,84.77A14,14,0,0,0,18,110.85l85.56,41.64L145.12,238a13.87,13.87,0,0,0,12.61,8c.4,0,.81,0,1.21-.05a13.9,13.9,0,0,0,12.29-10.09l58.2-191.93,0-.11A13.83,13.83,0,0,0,225.88,30.12Zm-8,10.4L159.73,232.43l0,.11a2,2,0,0,1-3.76.26l-40.68-83.58,49-49a6,6,0,1,0-8.49-8.49l-49,49L23.15,100a2,2,0,0,1,.31-3.74l.11,0L215.48,38.08a1.94,1.94,0,0,1,1.92.52A2,2,0,0,1,217.92,40.52Z",
            })
          ),
        ],
        [
          "regular",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z",
            })
          ),
        ],
        [
          "thin",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M224.47,31.52a11.87,11.87,0,0,0-11.82-3L20.74,86.67a12,12,0,0,0-1.91,22.38L105,151l41.92,86.15A11.88,11.88,0,0,0,157.74,244c.34,0,.69,0,1,0a11.89,11.89,0,0,0,10.52-8.63l58.21-192,0-.08A11.85,11.85,0,0,0,224.47,31.52Zm-4.62,9.54-58.23,192a4,4,0,0,1-7.48.59l-41.3-84.86,50-50a4,4,0,1,0-5.66-5.66l-50,50-84.9-41.31a3.88,3.88,0,0,1-2.27-4,3.93,3.93,0,0,1,3-3.54L214.9,36.16A3.93,3.93,0,0,1,216,36a4,4,0,0,1,2.79,1.19A3.93,3.93,0,0,1,219.85,41.06Z",
            })
          ),
        ],
      ]);
      var o = Object.defineProperty,
        i = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        h = (e, t, r) =>
          t in e
            ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r);
      const m = (0, a.forwardRef)((e, t) =>
        a.createElement(
          n.A,
          ((e, t) => i(e, s(t)))(
            ((e, t) => {
              for (var r in t || (t = {})) d.call(t, r) && h(e, r, t[r]);
              if (c) for (var r of c(t)) p.call(t, r) && h(e, r, t[r]);
              return e;
            })({ ref: t }, e),
            { weights: l }
          )
        )
      );
      m.displayName = "PaperPlaneTilt";
    },
  },
]);
//# sourceMappingURL=831.c71e544e.chunk.js.map
