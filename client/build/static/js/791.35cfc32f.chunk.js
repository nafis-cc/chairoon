"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [791],
  {
    72212: (e, r, t) => {
      t.d(r, { A: () => o });
      var i = t(67784);
      const o = (0, t(34535).Ay)(i.A)((e) => {
        let { theme: r } = e;
        return {
          marginY: "5px",
          "& .MuiInputBase-root": {
            backgroundColor: "white",
            fontSize: "16px",
            border: "2px solid #858585",
          },
          "& .MuiInputBase-input": { margin: "0px" },
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
    97069: (e, r, t) => {
      t.d(r, { A: () => n });
      var i = t(24858),
        o = t(70579);
      function n(e) {
        let { children: r, onSubmit: t, methods: n } = e;
        return (0, o.jsx)(i.Op, {
          ...n,
          children: (0, o.jsx)("form", {
            onSubmit: t,
            style: { height: "100%" },
            children: r,
          }),
        });
      }
    },
    4350: (e, r, t) => {
      t.d(r, { B: () => v });
      var i = t(24858),
        o = t(81673),
        n = t(65043),
        a = t(9634),
        l = t(96446),
        s = t(70579);
      const d = (0, n.forwardRef)((e, r) => {
        let { disabledEffect: t = !1, effect: i = "blur", sx: o, ...n } = e;
        const d = (0, s.jsx)(l.A, {
          component: a.LazyLoadImage,
          wrapperClassName: "wrapper",
          effect: t ? void 0 : i,
          placeholderSrc: t ? "./assets/transparent.png" : "./assets/placeholder.svg",
          sx: { width: 1, height: 1, objectFit: "cover" },
          ...n,
        });
        return (0, s.jsx)(l.A, {
          ref: r,
          component: "span",
          sx: {
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            position: "relative",
            "& .wrapper": { width: 1, height: 1, backgroundSize: "cover !important" },
            ...o,
          },
          children: d,
        });
      });
      function c(e) {
        let { file: r } = e;
        if (!r) return null;
        const t = "string" === typeof r ? r : r.preview;
        return (0, s.jsx)(d, {
          alt: "avatar",
          src: t,
          sx: {
            zIndex: 8,
            overflow: "hidden",
            borderRadius: "50%",
            position: "absolute",
            width: "calc(100% - 16px)",
            height: "calc(100% - 16px)",
          },
        });
      }
      var p = t(19337),
        h = t(85865),
        x = t(34535),
        u = t(90310),
        m = t(83340);
      const f = (0, x.Ay)("div")((e) => {
          let { theme: r } = e;
          return {
            width: 144,
            height: 144,
            margin: "auto",
            display: "flex",
            cursor: "pointer",
            overflow: "hidden",
            borderRadius: "50%",
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
            border: "1px dashed ".concat((0, u.X4)(r.palette.grey[500], 0.32)),
          };
        }),
        g = (0, x.Ay)("div")((e) => {
          let { theme: r } = e;
          return {
            zIndex: 7,
            display: "flex",
            borderRadius: "50%",
            position: "absolute",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: "calc(100% - 16px)",
            height: "calc(100% - 16px)",
            color: r.palette.text.disabled,
            backgroundColor: r.palette.background.neutral,
            transition: r.transitions.create("opacity", {
              easing: r.transitions.easing.easeInOut,
              duration: r.transitions.duration.shorter,
            }),
          };
        });
      function b(e) {
        let { error: r, file: t, disabled: i, helperText: o, sx: n, ...a } = e;
        const {
            getRootProps: l,
            getInputProps: d,
            isDragActive: x,
            isDragReject: b,
          } = (0, p.VB)({ multiple: !1, disabled: i, ...a }),
          v = !!t,
          y = b || !!r;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(f, {
              ...l(),
              sx: {
                ...(x && { opacity: 0.72 }),
                ...(y && {
                  borderColor: "error.light",
                  ...(v && { bgcolor: "error.lighter" }),
                }),
                ...(i && { opacity: 0.48, pointerEvents: "none" }),
                ...(v && { "&:hover": { "& .placeholder": { opacity: 1 } } }),
                ...n,
              },
              children: [
                (0, s.jsx)("input", { ...d() }),
                v && (0, s.jsx)(c, { file: t }),
                (0, s.jsxs)(g, {
                  className: "placeholder",
                  sx: {
                    border: "2px solid #858585",
                    "&:hover": { opacity: 0.72 },
                    ...(v && {
                      zIndex: 9,
                      opacity: 0,
                      color: "common.white",
                      bgcolor: (e) => (0, u.X4)(e.palette.grey[900], 0.64),
                    }),
                    ...(y && { color: "error.main", bgcolor: "error.lighter" }),
                  },
                  children: [
                    (0, s.jsx)(m._, {}),
                    (0, s.jsx)(h.A, {
                      variant: "caption",
                      children: t ? "Update photo" : "Upload photo",
                    }),
                  ],
                }),
              ],
            }),
            o && o,
          ],
        });
      }
      function v(e) {
        let { name: r, ...t } = e;
        const { control: n } = (0, i.xW)();
        return (0, s.jsx)(i.xI, {
          name: r,
          control: n,
          render: (e) => {
            let {
              field: i,
              fieldState: { error: n },
            } = e;
            return (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)(b, {
                  name: r,
                  accept: { "image/*": [] },
                  error: !!n,
                  file: i.value,
                  ...t,
                }),
                !!n &&
                  (0, s.jsx)(o.A, {
                    error: !0,
                    sx: { px: 2, textAlign: "center" },
                    children: n.message,
                  }),
              ],
            });
          },
        });
      }
    },
    18594: (e, r, t) => {
      t.d(r, { o3: () => l, Ay: () => i.A });
      t(4350);
      var i = t(97069),
        o = t(24858),
        n = t(72212),
        a = t(70579);
      function l(e) {
        let { name: r, helperText: t, ...i } = e;
        const { control: l } = (0, o.xW)();
        return (0, a.jsx)(o.xI, {
          name: r,
          control: l,
          render: (e) => {
            let {
              field: r,
              fieldState: { error: o },
            } = e;
            return (0, a.jsx)(n.A, {
              ...r,
              fullWidth: !0,
              value: "number" === typeof r.value && 0 === r.value ? "" : r.value,
              error: !!o,
              helperText: o ? (null === o || void 0 === o ? void 0 : o.message) : t,
              ...i,
            });
          },
        });
      }
    },
    2791: (e, r, t) => {
      t.r(r), t.d(r, { default: () => b });
      t(65043);
      var i = t(96446),
        o = t(85865),
        n = t(66176),
        a = t(97069),
        l = t(67254),
        s = t(88911),
        d = t(78977),
        c = t(18594),
        p = t(53563),
        h = t(18403),
        x = t(24858),
        u = t(83003),
        m = t(80899),
        f = t(70579);
      const g = () => {
          const { isLoading: e } = (0, u.d4)((e) => e.auth),
            r = (0, u.wA)(),
            t = m
              .Ik()
              .shape({
                email: m
                  .Yj()
                  .required("Email is required")
                  .email("Email must be a valid email address"),
              }),
            i = (0, x.mN)({ resolver: (0, h.t)(t), defaultValues: { email: "" } }),
            {
              reset: n,
              handleSubmit: g,
              formState: { errors: b },
            } = i;
          return (0, f.jsxs)(a.A, {
            methods: i,
            onSubmit: g(async (e) => {
              try {
                r((0, p.XC)(e)), n();
              } catch (t) {
                console.error(t);
              }
            }),
            children: [
              !!b.afterSubmit &&
                (0, f.jsx)(l.A, { severity: "error", children: b.afterSubmit.message }),
              (0, f.jsx)(s.A, {
                direction: "row",
                spacing: 0.5,
                children: (0, f.jsx)(o.A, {
                  variant: "body2",
                  color: "#fff",
                  children: "Input your Email Account",
                }),
              }),
              (0, f.jsx)(s.A, {
                spacing: 2,
                sx: { marginY: 2 },
                children: (0, f.jsx)(c.o3, {
                  type: "email",
                  name: "email",
                  label: "Email",
                }),
              }),
              (0, f.jsx)(s.A, {
                alignItems: "center",
                sx: { mb: 2 },
                children: (0, f.jsx)(o.A, {
                  component: "div",
                  sx: {
                    color: "#fff",
                    typography: "caption",
                    textAlign: "center",
                    fontSize: "13px",
                  },
                  children: "Check your email from inbox or spam after you submit!",
                }),
              }),
              (0, f.jsx)(d.A, {
                fullWidth: !0,
                color: "inherit",
                size: "large",
                type: "submit",
                variant: "contained",
                loading: e,
                sx: {
                  bgcolor: "#f7bd00",
                  color: "#252525",
                  "&:hover": { bgcolor: "#CECECF", color: "#252525" },
                },
                children: "SUBMIT",
              }),
            ],
          });
        },
        b = () =>
          (0, f.jsx)(i.A, {
            sx: {
              flexGrow: 1,
              height: "90dvh",
              width: "100%",
              display: { xs: "initial", md: "flex" },
            },
            children: (0, f.jsx)(i.A, {
              sx: {
                width: "100%",
                mt: { xs: "15%", md: "inherit" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              children: (0, f.jsx)(n.P.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, amount: 0.5 },
                transition: { delay: 0.2, duration: 0.5 },
                variants: {
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                },
                children: (0, f.jsxs)(i.A, {
                  sx: {
                    width: "400px",
                    padding: "20px",
                    backdropFilter: "brightness(60%)",
                    borderRadius: "25px",
                  },
                  children: [
                    (0, f.jsx)(o.A, {
                      fontWeight: "900",
                      variant: "h4",
                      sx: { mb: "1.5rem", color: "#fff" },
                      children: "Reset your Password?",
                    }),
                    (0, f.jsx)(g, {}),
                  ],
                }),
              }),
            }),
          });
    },
  },
]);
//# sourceMappingURL=791.35cfc32f.chunk.js.map
