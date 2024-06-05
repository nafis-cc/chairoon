"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [342],
  {
    83535: (e, n, t) => {
      t.d(n, { A: () => o });
      var r = t(72221);
      const o = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          width: "100%",
          height: "35px",
          "& .MuiSelect-select": {
            padding: "3px",
            fontSize: "14px",
            border: "2px solid #858585",
          },
          "& .MuiInputBase-input": { padding: "6px" },
        };
      });
    },
    68342: (e, n, t) => {
      t.r(n), t.d(n, { default: () => q });
      var r = t(65043),
        o = t(96446),
        i = t(85865),
        a = t(66176),
        s = t(67254),
        l = t(88911),
        c = t(88446),
        d = t(32143),
        u = t(51787),
        h = t(17392),
        m = t(80899),
        g = t(83003),
        p = t(53563),
        x = t(56497),
        f = t(29672),
        v = t(72812),
        A = t(35475),
        y = t(18594),
        b = t(24858),
        w = t(18403),
        S = t(30064),
        j = t.n(S),
        k = t(83535),
        I = t(32005),
        P = t(63326),
        L = t(70579);
      const C = m
          .Ik()
          .shape({
            email: m
              .Yj()
              .required("Email is required")
              .email("Email must be a valid email address"),
            password: m.Yj().required("Password is required"),
          }),
        M = { email: "", password: "" },
        N = m
          .Ik()
          .shape({
            firstName: m.Yj().required("First name required"),
            lastName: m.Yj().required("Last name required"),
            email: m
              .Yj()
              .required("Email is required")
              .email("Email must be a valid email address"),
            password: m.Yj().required("Password is required"),
            role: m.Yj().required("Role is required"),
          }),
        R = { firstName: "", lastName: "", email: "", password: "", role: "user" },
        E = (e) => {
          let { setPageType: n, isLogin: t, isRegister: o } = e;
          const a = (0, g.wA)(),
            [m, S] = (0, r.useState)(!1),
            E = (0, b.mN)({
              resolver: (0, w.t)(C) || (0, w.t)(N),
              defaultValues: M || R,
            }),
            {
              reset: q,
              setError: D,
              control: F,
              handleSubmit: B,
              formState: { errors: W },
            } = E;
          return (0, L.jsxs)(y.Ay, {
            methods: E,
            onSubmit: B(async (e) => {
              try {
                t
                  ? (a((0, p.Hn)(e)), a((0, P.WZ)()))
                  : (a((0, p.Jj)(e)),
                    j().fire({
                      title: "Good job!",
                      text: "Check your email from inbox or spam to verify OTP!",
                      icon: "success",
                    })),
                  q();
              } catch (n) {
                console.error(n), q(), D("afterSubmit", { ...n, message: n.message });
              }
            }),
            children: [
              !!W.afterSubmit &&
                (0, L.jsx)(s.A, { severity: "error", children: W.afterSubmit.message }),
              (0, L.jsxs)(l.A, {
                direction: "row",
                spacing: 0.5,
                children: [
                  (0, L.jsxs)(i.A, {
                    variant: "body2",
                    color: "#fff",
                    children: [" ", t ? "New user? " : "Already have an account? ", " "],
                  }),
                  (0, L.jsx)(c.A, {
                    variant: "subtitle2",
                    onClick: () => {
                      n(t ? "register" : "login");
                    },
                    children: t ? "Create an account" : "Login",
                  }),
                ],
              }),
              (0, L.jsxs)(l.A, {
                spacing: 2,
                sx: { marginY: 2 },
                children: [
                  o &&
                    (0, L.jsxs)(L.Fragment, {
                      children: [
                        (0, L.jsxs)(l.A, {
                          direction: { xs: "column", sm: "row" },
                          spacing: 2,
                          children: [
                            (0, L.jsx)(y.o3, { name: "firstName", label: "First Name" }),
                            (0, L.jsx)(y.o3, { name: "lastName", label: "last Name" }),
                          ],
                        }),
                        (0, L.jsx)(b.xI, {
                          name: "role",
                          control: F,
                          render: (e) => {
                            let {
                              field: n,
                              fieldState: { error: t },
                            } = e;
                            return (0, L.jsxs)(k.A, {
                              ...n,
                              fullWidth: !0,
                              value: n.value,
                              defaultValue: 0,
                              error: !!t,
                              sx: {
                                bgcolor: "white",
                                "& .MuiInputBase-input": { padding: "15px 20px" },
                                height: "56px",
                                "& .MuiSelect-select": { fontSize: "16px" },
                              },
                              children: [
                                (0, L.jsx)(d.A, {
                                  value: 0,
                                  disabled: !0,
                                  sx: { display: "none" },
                                  children: "Select your Role",
                                }),
                                I.up.map((e, n) =>
                                  (0, L.jsx)(d.A, { value: e, children: e }, n)
                                ),
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                  (0, L.jsx)(y.o3, { type: "email", name: "email", label: "Email" }),
                  (0, L.jsx)(y.o3, {
                    type: m ? "text" : "password",
                    name: "password",
                    label: "Password",
                    InputProps: {
                      endAdornment: (0, L.jsx)(u.A, {
                        position: "end",
                        children: (0, L.jsx)(h.A, {
                          onClick: () => S(!m),
                          edge: "end",
                          children: m ? (0, L.jsx)(x.k, {}) : (0, L.jsx)(f.L, {}),
                        }),
                      }),
                    },
                  }),
                ],
              }),
              t
                ? (0, L.jsx)(l.A, {
                    alignItems: "flex-end",
                    sx: { mb: 2 },
                    children: (0, L.jsx)(c.A, {
                      component: A.N_,
                      to: "./auth/reset-password",
                      variant: "body2",
                      underline: "always",
                      children: "Forgot password?",
                    }),
                  })
                : (0, L.jsx)(l.A, {
                    alignItems: "flex-end",
                    sx: { mb: 2 },
                    children: (0, L.jsxs)(i.A, {
                      component: "div",
                      sx: { color: "#fff", typography: "caption", textAlign: "center" },
                      children: [
                        "By signing up, I agree to ",
                        (0, L.jsx)(c.A, {
                          underline: "always",
                          color: "#fff",
                          children: "Terms of Service",
                        }),
                        " and ",
                        (0, L.jsx)(c.A, {
                          underline: "always",
                          color: "#fff",
                          children: "Privacy Policy",
                        }),
                        ".",
                      ],
                    }),
                  }),
              (0, L.jsx)(v.A, {
                fullWidth: !0,
                color: "inherit",
                size: "large",
                type: "submit",
                variant: "contained",
                sx: {
                  bgcolor: "#f7bd00",
                  color: "#252525",
                  "&:hover": { bgcolor: "#CECECF" },
                },
                children: t ? "LOGIN" : "REGISTER",
              }),
            ],
          });
        },
        q = () => {
          const [e, n] = (0, r.useState)("login"),
            t = "login" === e,
            s = "register" === e;
          return (0, L.jsxs)(o.A, {
            sx: {
              flexGrow: 1,
              height: "90dvh",
              width: "100%",
              display: { xs: "initial", md: "flex" },
            },
            children: [
              (0, L.jsx)(o.A, {
                sx: {
                  width: { xs: "100%", md: "60%" },
                  display: { xs: "none", md: "flex" },
                },
                children: (0, L.jsx)(a.P.div, {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0, amount: 0.5 },
                  transition: { duration: 0.5 },
                  variants: {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  },
                  children: (0, L.jsxs)(o.A, {
                    sx: {
                      ml: { xs: 5, md: 5, lg: 10 },
                      mt: "23%",
                      backdropFilter: "blur(5px)",
                    },
                    children: [
                      (0, L.jsx)(i.A, {
                        variant: "h1",
                        sx: { color: "white", fontWeight: 900, mb: "20px" },
                        children: "Get Happiness In Life",
                      }),
                      (0, L.jsx)(i.A, {
                        variant: "h6",
                        sx: { color: "white", fontWeight: 900 },
                        children:
                          "By assembling the best teammates, you can produce work with a high level quality",
                      }),
                    ],
                  }),
                }),
              }),
              (0, L.jsx)(o.A, {
                sx: {
                  width: { xs: "100%", md: "40%" },
                  mt: { xs: "15%", md: "inherit" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: (0, L.jsx)(a.P.div, {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0, amount: 0.5 },
                  transition: { delay: 0.2, duration: 0.5 },
                  variants: {
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  },
                  children: (0, L.jsxs)(o.A, {
                    sx: {
                      width: "400px",
                      padding: "20px",
                      backdropFilter: "brightness(60%)",
                      borderRadius: "25px",
                    },
                    children: [
                      (0, L.jsx)(i.A, {
                        fontWeight: "900",
                        variant: "h4",
                        sx: { mb: "1.5rem", color: "#fff" },
                        children: "Welcome to Chairoon",
                      }),
                      (0, L.jsx)(E, { setPageType: n, isLogin: t, isRegister: s }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
    },
    32005: (e, n, t) => {
      t.d(n, {
        Df: () => r,
        E2: () => c,
        Gq: () => u,
        Ih: () => s,
        gJ: () => a,
        jp: () => o,
        up: () => d,
        wV: () => l,
        yf: () => i,
      });
      const r = ["pending", "processed", "accepted", "rejected"],
        o = ["full-time", "part-time", "internship", "freelance"],
        i = [
          "highschool-diploma",
          "bachelor-degree",
          "master-degree",
          "doctor-degree",
          "course-bootcamp",
        ],
        a = ["work-from-office", "work-from-home", "work-from-anywhere"],
        s = ["text", "file"],
        l = ["once", "hourly", "daily", "weekly", "monthly"],
        c = ["male", "female", "secret"],
        d = ["user", "recruiter"],
        u = ["islam", "protestan", "katolik", "hindu", "budha", "konghucu", "secret"];
    },
    72812: (e, n, t) => {
      t.d(n, { A: () => w });
      var r = t(98587),
        o = t(58168),
        i = t(65043),
        a = t(6803),
        s = t(45879),
        l = t(68606),
        c = t(34535),
        d = t(72876),
        u = t(78977),
        h = t(74221),
        m = t(81637),
        g = t(22018),
        p = t(32400);
      function x(e) {
        return (0, p.Ay)("MuiLoadingButton", e);
      }
      const f = (0, t(57056).A)("MuiLoadingButton", [
        "root",
        "loading",
        "loadingIndicator",
        "loadingIndicatorCenter",
        "loadingIndicatorStart",
        "loadingIndicatorEnd",
        "endIconLoadingEnd",
        "startIconLoadingStart",
      ]);
      var v = t(70579);
      const A = [
          "children",
          "disabled",
          "id",
          "loading",
          "loadingIndicator",
          "loadingPosition",
          "variant",
        ],
        y = (0, c.Ay)(u.A, {
          shouldForwardProp: (e) =>
            ((e) =>
              "ownerState" !== e &&
              "theme" !== e &&
              "sx" !== e &&
              "as" !== e &&
              "classes" !== e)(e) || "classes" === e,
          name: "MuiLoadingButton",
          slot: "Root",
          overridesResolver: (e, n) => [
            n.root,
            n.startIconLoadingStart && {
              ["& .".concat(f.startIconLoadingStart)]: n.startIconLoadingStart,
            },
            n.endIconLoadingEnd && {
              ["& .".concat(f.endIconLoadingEnd)]: n.endIconLoadingEnd,
            },
          ],
        })((e) => {
          let { ownerState: n, theme: t } = e;
          return (0, o.A)(
            {
              ["& ."
                .concat(f.startIconLoadingStart, ", & .")
                .concat(f.endIconLoadingEnd)]: {
                transition: t.transitions.create(["opacity"], {
                  duration: t.transitions.duration.short,
                }),
                opacity: 0,
              },
            },
            "center" === n.loadingPosition && {
              transition: t.transitions.create(
                ["background-color", "box-shadow", "border-color"],
                { duration: t.transitions.duration.short }
              ),
              ["&.".concat(f.loading)]: { color: "transparent" },
            },
            "start" === n.loadingPosition &&
              n.fullWidth && {
                ["& ."
                  .concat(f.startIconLoadingStart, ", & .")
                  .concat(f.endIconLoadingEnd)]: {
                  transition: t.transitions.create(["opacity"], {
                    duration: t.transitions.duration.short,
                  }),
                  opacity: 0,
                  marginRight: -8,
                },
              },
            "end" === n.loadingPosition &&
              n.fullWidth && {
                ["& ."
                  .concat(f.startIconLoadingStart, ", & .")
                  .concat(f.endIconLoadingEnd)]: {
                  transition: t.transitions.create(["opacity"], {
                    duration: t.transitions.duration.short,
                  }),
                  opacity: 0,
                  marginLeft: -8,
                },
              }
          );
        }),
        b = (0, c.Ay)("span", {
          name: "MuiLoadingButton",
          slot: "LoadingIndicator",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [
              n.loadingIndicator,
              n["loadingIndicator".concat((0, a.A)(t.loadingPosition))],
            ];
          },
        })((e) => {
          let { theme: n, ownerState: t } = e;
          return (0, o.A)(
            { position: "absolute", visibility: "visible", display: "flex" },
            "start" === t.loadingPosition &&
              ("outlined" === t.variant || "contained" === t.variant) && {
                left: "small" === t.size ? 10 : 14,
              },
            "start" === t.loadingPosition && "text" === t.variant && { left: 6 },
            "center" === t.loadingPosition && {
              left: "50%",
              transform: "translate(-50%)",
              color: (n.vars || n).palette.action.disabled,
            },
            "end" === t.loadingPosition &&
              ("outlined" === t.variant || "contained" === t.variant) && {
                right: "small" === t.size ? 10 : 14,
              },
            "end" === t.loadingPosition && "text" === t.variant && { right: 6 },
            "start" === t.loadingPosition &&
              t.fullWidth && { position: "relative", left: -10 },
            "end" === t.loadingPosition &&
              t.fullWidth && { position: "relative", right: -10 }
          );
        }),
        w = i.forwardRef(function (e, n) {
          const t = i.useContext(h.A),
            c = (0, g.A)(t, e),
            u = (0, d.A)({ props: c, name: "MuiLoadingButton" }),
            {
              children: p,
              disabled: f = !1,
              id: w,
              loading: S = !1,
              loadingIndicator: j,
              loadingPosition: k = "center",
              variant: I = "text",
            } = u,
            P = (0, r.A)(u, A),
            L = (0, s.A)(w),
            C =
              null != j
                ? j
                : (0, v.jsx)(m.A, { "aria-labelledby": L, color: "inherit", size: 16 }),
            M = (0, o.A)({}, u, {
              disabled: f,
              loading: S,
              loadingIndicator: C,
              loadingPosition: k,
              variant: I,
            }),
            N = ((e) => {
              const { loading: n, loadingPosition: t, classes: r } = e,
                i = {
                  root: ["root", n && "loading"],
                  startIcon: [n && "startIconLoading".concat((0, a.A)(t))],
                  endIcon: [n && "endIconLoading".concat((0, a.A)(t))],
                  loadingIndicator: [
                    "loadingIndicator",
                    n && "loadingIndicator".concat((0, a.A)(t)),
                  ],
                },
                s = (0, l.A)(i, x, r);
              return (0, o.A)({}, r, s);
            })(M),
            R = S
              ? (0, v.jsx)(b, {
                  className: N.loadingIndicator,
                  ownerState: M,
                  children: C,
                })
              : null;
          return (0,
          v.jsxs)(y, (0, o.A)({ disabled: f || S, id: L, ref: n }, P, { variant: I, classes: N, ownerState: M, children: ["end" === M.loadingPosition ? p : R, "end" === M.loadingPosition ? R : p] }));
        });
    },
    81637: (e, n, t) => {
      t.d(n, { A: () => R });
      var r = t(57528),
        o = t(98587),
        i = t(58168),
        a = t(65043),
        s = t(58387),
        l = t(68606),
        c = t(83290),
        d = t(6803),
        u = t(72876),
        h = t(34535),
        m = t(57056),
        g = t(32400);
      function p(e) {
        return (0, g.Ay)("MuiCircularProgress", e);
      }
      (0, m.A)("MuiCircularProgress", [
        "root",
        "determinate",
        "indeterminate",
        "colorPrimary",
        "colorSecondary",
        "svg",
        "circle",
        "circleDeterminate",
        "circleIndeterminate",
        "circleDisableShrink",
      ]);
      var x,
        f,
        v,
        A,
        y = t(70579);
      const b = [
        "className",
        "color",
        "disableShrink",
        "size",
        "style",
        "thickness",
        "value",
        "variant",
      ];
      let w, S, j, k;
      const I = 44,
        P = (0, c.i7)(
          w ||
            (w =
              x ||
              (x = (0, r.A)([
                "\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n",
              ])))
        ),
        L = (0, c.i7)(
          S ||
            (S =
              f ||
              (f = (0, r.A)([
                "\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n",
              ])))
        ),
        C = (0, h.Ay)("span", {
          name: "MuiCircularProgress",
          slot: "Root",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [n.root, n[t.variant], n["color".concat((0, d.A)(t.color))]];
          },
        })(
          (e) => {
            let { ownerState: n, theme: t } = e;
            return (0, i.A)(
              { display: "inline-block" },
              "determinate" === n.variant && {
                transition: t.transitions.create("transform"),
              },
              "inherit" !== n.color && { color: (t.vars || t).palette[n.color].main }
            );
          },
          (e) => {
            let { ownerState: n } = e;
            return (
              "indeterminate" === n.variant &&
              (0, c.AH)(
                j ||
                  (j =
                    v ||
                    (v = (0, r.A)([
                      "\n      animation: ",
                      " 1.4s linear infinite;\n    ",
                    ]))),
                P
              )
            );
          }
        ),
        M = (0, h.Ay)("svg", {
          name: "MuiCircularProgress",
          slot: "Svg",
          overridesResolver: (e, n) => n.svg,
        })({ display: "block" }),
        N = (0, h.Ay)("circle", {
          name: "MuiCircularProgress",
          slot: "Circle",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [
              n.circle,
              n["circle".concat((0, d.A)(t.variant))],
              t.disableShrink && n.circleDisableShrink,
            ];
          },
        })(
          (e) => {
            let { ownerState: n, theme: t } = e;
            return (0, i.A)(
              { stroke: "currentColor" },
              "determinate" === n.variant && {
                transition: t.transitions.create("stroke-dashoffset"),
              },
              "indeterminate" === n.variant && {
                strokeDasharray: "80px, 200px",
                strokeDashoffset: 0,
              }
            );
          },
          (e) => {
            let { ownerState: n } = e;
            return (
              "indeterminate" === n.variant &&
              !n.disableShrink &&
              (0, c.AH)(
                k ||
                  (k =
                    A ||
                    (A = (0, r.A)([
                      "\n      animation: ",
                      " 1.4s ease-in-out infinite;\n    ",
                    ]))),
                L
              )
            );
          }
        ),
        R = a.forwardRef(function (e, n) {
          const t = (0, u.A)({ props: e, name: "MuiCircularProgress" }),
            {
              className: r,
              color: a = "primary",
              disableShrink: c = !1,
              size: h = 40,
              style: m,
              thickness: g = 3.6,
              value: x = 0,
              variant: f = "indeterminate",
            } = t,
            v = (0, o.A)(t, b),
            A = (0, i.A)({}, t, {
              color: a,
              disableShrink: c,
              size: h,
              thickness: g,
              value: x,
              variant: f,
            }),
            w = ((e) => {
              const { classes: n, variant: t, color: r, disableShrink: o } = e,
                i = {
                  root: ["root", t, "color".concat((0, d.A)(r))],
                  svg: ["svg"],
                  circle: [
                    "circle",
                    "circle".concat((0, d.A)(t)),
                    o && "circleDisableShrink",
                  ],
                };
              return (0, l.A)(i, p, n);
            })(A),
            S = {},
            j = {},
            k = {};
          if ("determinate" === f) {
            const e = 2 * Math.PI * ((I - g) / 2);
            (S.strokeDasharray = e.toFixed(3)),
              (k["aria-valuenow"] = Math.round(x)),
              (S.strokeDashoffset = "".concat((((100 - x) / 100) * e).toFixed(3), "px")),
              (j.transform = "rotate(-90deg)");
          }
          return (0,
          y.jsx)(C, (0, i.A)({ className: (0, s.A)(w.root, r), style: (0, i.A)({ width: h, height: h }, j, m), ownerState: A, ref: n, role: "progressbar" }, k, v, { children: (0, y.jsx)(M, { className: w.svg, ownerState: A, viewBox: "".concat(22, " ").concat(22, " ").concat(I, " ").concat(I), children: (0, y.jsx)(N, { className: w.circle, style: S, ownerState: A, cx: I, cy: I, r: (I - g) / 2, fill: "none", strokeWidth: g }) }) }));
        });
    },
    88446: (e, n, t) => {
      t.d(n, { A: () => k });
      var r = t(98587),
        o = t(58168),
        i = t(65043),
        a = t(58387),
        s = t(68606),
        l = t(6803),
        c = t(34535),
        d = t(72876),
        u = t(82191),
        h = t(95849),
        m = t(85865),
        g = t(57056),
        p = t(32400);
      function x(e) {
        return (0, p.Ay)("MuiLink", e);
      }
      const f = (0, g.A)("MuiLink", [
        "root",
        "underlineNone",
        "underlineHover",
        "underlineAlways",
        "button",
        "focusVisible",
      ]);
      var v = t(17162),
        A = t(67266);
      const y = {
          primary: "primary.main",
          textPrimary: "text.primary",
          secondary: "secondary.main",
          textSecondary: "text.secondary",
          error: "error.main",
        },
        b = (e) => {
          let { theme: n, ownerState: t } = e;
          const r = ((e) => y[e] || e)(t.color),
            o = (0, v.Yn)(n, "palette.".concat(r), !1) || t.color,
            i = (0, v.Yn)(n, "palette.".concat(r, "Channel"));
          return "vars" in n && i ? "rgba(".concat(i, " / 0.4)") : (0, A.X4)(o, 0.4);
        };
      var w = t(70579);
      const S = [
          "className",
          "color",
          "component",
          "onBlur",
          "onFocus",
          "TypographyClasses",
          "underline",
          "variant",
          "sx",
        ],
        j = (0, c.Ay)(m.A, {
          name: "MuiLink",
          slot: "Root",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [
              n.root,
              n["underline".concat((0, l.A)(t.underline))],
              "button" === t.component && n.button,
            ];
          },
        })((e) => {
          let { theme: n, ownerState: t } = e;
          return (0, o.A)(
            {},
            "none" === t.underline && { textDecoration: "none" },
            "hover" === t.underline && {
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            },
            "always" === t.underline &&
              (0, o.A)(
                { textDecoration: "underline" },
                "inherit" !== t.color && {
                  textDecorationColor: b({ theme: n, ownerState: t }),
                },
                { "&:hover": { textDecorationColor: "inherit" } }
              ),
            "button" === t.component && {
              position: "relative",
              WebkitTapHighlightColor: "transparent",
              backgroundColor: "transparent",
              outline: 0,
              border: 0,
              margin: 0,
              borderRadius: 0,
              padding: 0,
              cursor: "pointer",
              userSelect: "none",
              verticalAlign: "middle",
              MozAppearance: "none",
              WebkitAppearance: "none",
              "&::-moz-focus-inner": { borderStyle: "none" },
              ["&.".concat(f.focusVisible)]: { outline: "auto" },
            }
          );
        }),
        k = i.forwardRef(function (e, n) {
          const t = (0, d.A)({ props: e, name: "MuiLink" }),
            {
              className: c,
              color: m = "primary",
              component: g = "a",
              onBlur: p,
              onFocus: f,
              TypographyClasses: v,
              underline: A = "always",
              variant: b = "inherit",
              sx: k,
            } = t,
            I = (0, r.A)(t, S),
            { isFocusVisibleRef: P, onBlur: L, onFocus: C, ref: M } = (0, u.A)(),
            [N, R] = i.useState(!1),
            E = (0, h.A)(n, M),
            q = (0, o.A)({}, t, {
              color: m,
              component: g,
              focusVisible: N,
              underline: A,
              variant: b,
            }),
            D = ((e) => {
              const { classes: n, component: t, focusVisible: r, underline: o } = e,
                i = {
                  root: [
                    "root",
                    "underline".concat((0, l.A)(o)),
                    "button" === t && "button",
                    r && "focusVisible",
                  ],
                };
              return (0, s.A)(i, x, n);
            })(q);
          return (0, w.jsx)(
            j,
            (0, o.A)(
              {
                color: m,
                className: (0, a.A)(D.root, c),
                classes: v,
                component: g,
                onBlur: (e) => {
                  L(e), !1 === P.current && R(!1), p && p(e);
                },
                onFocus: (e) => {
                  C(e), !0 === P.current && R(!0), f && f(e);
                },
                ref: E,
                ownerState: q,
                variant: b,
                sx: [
                  ...(Object.keys(y).includes(m) ? [] : [{ color: m }]),
                  ...(Array.isArray(k) ? k : [k]),
                ],
              },
              I
            )
          );
        });
    },
  },
]);
//# sourceMappingURL=342.7684dd3e.chunk.js.map
