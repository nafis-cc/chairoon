"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [295],
  {
    18986: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(96446);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { flexGrow: 1, height: "90dvh", width: "100%" };
      });
    },
    88780: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(19252);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        };
      });
    },
    55174: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(96446);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        };
      });
    },
    5875: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(17392);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          width: "40px",
          height: "40px",
          color: "#252525",
          "&:hover": { color: "#858585" },
          border: "2px solid #252525",
        };
      });
    },
    23613: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(78977);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
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
    48824: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(88911);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          height: "95%",
          width: "inherit",
          justifyContent: "center",
          flexDirection: "row",
        };
      });
    },
    73576: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(88911);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { width: "100%", height: "100%", flexDirection: "column" };
      });
    },
    47122: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(88911);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { width: "100%", flexDirection: "row" };
      });
    },
    75595: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(85865);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { fontSize: "14px", "&:first-letter": { textTransform: "capitalize" } };
      });
    },
    72360: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(85865);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          fontSize: "20px",
          fontWeight: 600,
          "&:first-letter": { textTransform: "capitalize" },
        };
      });
    },
    66317: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(96446);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          backgroundColor: "#fff",
          borderRadius: "25px",
          aspectRatio: "3/2",
          width: "100%",
          padding: "20px",
          overflow: "hidden",
        };
      });
    },
    46359: (e, r, i) => {
      i.d(r, { A: () => t });
      var n = i(96446);
      const t = (0, i(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
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
    84295: (e, r, i) => {
      i.r(r), i.d(r, { default: () => $ });
      var n = i(65043),
        t = i(18986),
        l = i(88780),
        s = i(48824),
        d = i(66317),
        o = i(73576),
        a = i(46359),
        c = i(72360),
        h = i(83003),
        x = i(47122),
        u = i(26240),
        A = i(81045),
        j = i(96446),
        g = i(92314),
        p = i(69869),
        b = i(24056),
        f = i(60984),
        m = i(55174),
        v = i(23613),
        w = i(73216),
        y = i(35475),
        C = i(63326),
        k = i(5875),
        T = i(39964),
        z = i(16705),
        S = i(16013),
        M = i(8522),
        D = i(30064),
        N = i.n(D);
      const P = [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ],
        _ = (e) => {
          const r = new Date(e),
            i = String(r.getDate()).padStart(2, "0"),
            n = String(P[r.getMonth()]),
            t = String(r.getFullYear());
          return "".concat(i, " ").concat(n, " ").concat(t);
        };
      var R = i(24332),
        W = i(32216),
        F = i(84717),
        J = i(33029),
        U = i(1935),
        B = i(38985),
        E = i(70579);
      const I = (e) => {
        let { user: r } = e;
        return (
          console.log(r.birthday),
          (0, E.jsxs)(o.A, {
            gap: 2,
            sx: { width: "100%" },
            children: [
              (0, E.jsx)(c.A, { children: "More Info" }),
              void 0 !== r.birthday
                ? (0, E.jsxs)(x.A, {
                    gap: 1,
                    children: [
                      (0, E.jsx)(R.T, { size: 20, weight: "bold" }),
                      (0, E.jsx)(f.A, { children: _("".concat(r.birthday)) }),
                    ],
                  })
                : null,
              "secret" !== r.gender
                ? (0, E.jsxs)(x.A, {
                    gap: 1,
                    children: [
                      "female" === r.gender &&
                        (0, E.jsx)(W.i, { size: 20, weight: "bold" }),
                      "male" === r.gender &&
                        (0, E.jsx)(F.V, { size: 20, weight: "bold" }),
                      (0, E.jsx)(f.A, { children: r.gender }),
                    ],
                  })
                : null,
              null !== r.religion
                ? (0, E.jsxs)(x.A, {
                    gap: 1,
                    children: [
                      (0, E.jsx)(J.D, { size: 20, weight: "bold" }),
                      (0, E.jsx)(f.A, { children: r.religion }),
                    ],
                  })
                : null,
              null !== r.phoneNumber
                ? (0, E.jsxs)(x.A, {
                    gap: 1,
                    children: [
                      (0, E.jsx)(U.b, { size: 20, weight: "bold" }),
                      (0, E.jsx)(f.A, { children: r.phoneNumber }),
                    ],
                  })
                : null,
              null !== r.city || null !== r.country
                ? (0, E.jsxs)(x.A, {
                    gap: 1,
                    children: [
                      (0, E.jsx)(B.s, { size: 20, weight: "bold" }),
                      (0, E.jsx)(f.A, {
                        children: "".concat(r.city, ", ").concat(r.country),
                      }),
                    ],
                  })
                : null,
            ],
          })
        );
      };
      var L = i(88446);
      const Y = (e) => {
        let { user: r } = e;
        return (0, E.jsxs)(o.A, {
          gap: 2,
          sx: { width: "100%" },
          children: [
            (0, E.jsx)(c.A, { children: "Social Link" }),
            (0, E.jsx)(j.A, {
              sx: { overflowY: "scroll", height: "100%", scrollbarWidth: "none" },
              children: (0, E.jsx)(o.A, {
                gap: 1,
                children: r.socialmedias.map((e, r) =>
                  (0, E.jsxs)(
                    x.A,
                    {
                      gap: 1,
                      children: [
                        (0, E.jsx)(f.A, { children: "".concat(e.mediaName, ":") }),
                        (0, E.jsx)(L.A, {
                          to: e.mediaLink,
                          children: (0, E.jsx)(f.A, { children: e.mediaUsername }),
                        }),
                      ],
                    },
                    r
                  )
                ),
              }),
            }),
          ],
        });
      };
      var G = i(85865),
        H = i(34535);
      const O = (0, H.Ay)(G.A)((e) => {
        let { theme: r } = e;
        return {
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "underline",
          color: "blue",
        };
      });
      var V = i(75595);
      const X = (0, H.Ay)(j.A)((e) => {
          let { theme: r } = e;
          return {
            width: "100%",
            height: "100%",
            backgroundColor: "#f1f3f4",
            border: "2px solid #858585",
            borderRadius: "15px",
            padding: "10px",
          };
        }),
        Z = (e) => {
          let { user: r, activeTab: i, index: n } = e;
          return (0, E.jsx)("div", {
            role: "tabpanel",
            hidden: i !== n,
            children:
              i === n &&
              (0, E.jsx)(o.A, {
                gap: 3,
                children:
                  void 0 !== r.about &&
                  (0, E.jsx)(X, {
                    children: (0, E.jsxs)(o.A, {
                      gap: 1,
                      children: [
                        (0, E.jsx)(c.A, { children: "About Me" }),
                        (0, E.jsx)(V.A, { children: r.about }),
                      ],
                    }),
                  }),
              }),
          });
        },
        q = (e) => {
          let { user: r, activeTab: i, index: n } = e;
          return (0, E.jsx)("div", {
            role: "tabpanel",
            hidden: i !== n,
            children:
              i === n &&
              (0, E.jsx)(o.A, {
                gap: 2,
                children: (0, E.jsx)(c.A, { children: "Post" }),
              }),
          });
        },
        K = (e) => {
          const { activeTab: r, index: i } = e;
          return (0, E.jsx)("div", {
            role: "tabpanel",
            hidden: r !== i,
            children:
              r === i &&
              (0, E.jsx)(o.A, {
                gap: 2,
                children: (0, E.jsx)(c.A, { children: "Jobs" }),
              }),
          });
        },
        Q = (e) => {
          let { user: r, activeTab: i, index: n } = e;
          return (0, E.jsx)("div", {
            role: "tabpanel",
            hidden: i !== n,
            children:
              i === n &&
              (0, E.jsx)(o.A, {
                gap: 2,
                children: (0, E.jsx)(c.A, { children: "Saved" }),
              }),
          });
        },
        $ = () => {
          const { username: e } = (0, w.g)(),
            r = (0, h.wA)(),
            i = (0, w.Zp)(),
            D = (0, u.A)();
          (0, n.useEffect)(() => {
            r((0, C.x0)(e));
          }, []);
          const P = (0, h.d4)((e) => e.app.currentUser),
            _ = (0, h.d4)((e) => e.app.user);
          console.log("\ud83d\ude80 ~ PageProfile ~ user:", _);
          const [R, W] = n.useState(0);
          return (0, E.jsx)(t.A, {
            children: (0, E.jsx)(l.A, {
              maxWidth: "md",
              children: (0, E.jsxs)(s.A, {
                gap: 3,
                children: [
                  (0, E.jsxs)(o.A, {
                    gap: 3,
                    sx: { width: "30%" },
                    children: [
                      (0, E.jsx)(a.A, { children: (0, E.jsx)(I, { user: _ }) }),
                      (0, E.jsx)(a.A, { children: (0, E.jsx)(Y, { user: _ }) }),
                    ],
                  }),
                  (0, E.jsx)(d.A, {
                    sx: { width: "70%" },
                    children: (0, E.jsxs)(o.A, {
                      gap: 2,
                      children: [
                        (0, E.jsx)(c.A, {
                          sx: { "&:first-letter": { textTransform: "lowercase" } },
                          children: null === _ || void 0 === _ ? void 0 : _.username,
                        }),
                        (0, E.jsxs)(m.A, {
                          gap: 2,
                          children: [
                            (0, E.jsx)(A.A, {
                              alt: null === _ || void 0 === _ ? void 0 : _.username,
                              src: null === _ || void 0 === _ ? void 0 : _.avatar,
                              sx: {
                                width: 100,
                                height: 100,
                                gridColumn: "span 2",
                                gridRow: "span 2",
                              },
                            }),
                            (0, E.jsxs)(o.A, {
                              sx: {
                                gridColumn: "span 6",
                                gridRow: "span 2",
                                justifyContent: "center",
                                height: "inherit",
                                pl: "20px",
                              },
                              children: [
                                (0, E.jsx)(c.A, {
                                  children: ""
                                    .concat(
                                      null === _ || void 0 === _ ? void 0 : _.firstName,
                                      " "
                                    )
                                    .concat(
                                      null === _ || void 0 === _ ? void 0 : _.lastName
                                    ),
                                }),
                                (0, E.jsxs)(x.A, {
                                  gap: 2,
                                  children: [
                                    (0, E.jsx)(f.A, {
                                      children: "".concat(
                                        _.followers.length,
                                        " Followers"
                                      ),
                                    }),
                                    (0, E.jsx)(f.A, {
                                      children: "".concat(
                                        _.following.length,
                                        " Following"
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            P._id === _._id
                              ? (0, E.jsx)(v.A, {
                                  onClick: () =>
                                    i("./ch/".concat(_.username, "./update")),
                                  children: "Edit Profile",
                                })
                              : (0, E.jsx)(v.A, { children: "Follow" }),
                            P._id === _._id
                              ? (0, E.jsx)(v.A, { children: "Add Post" })
                              : (0, E.jsx)(v.A, { children: "Message" }),
                            (0, E.jsxs)(o.A, {
                              sx: { gridColumn: "span 8" },
                              gap: 0.5,
                              children: [
                                (0, E.jsx)(f.A, { children: _.headline }),
                                0 !== _.profileWeb.length &&
                                  _.profileWeb.map((e, r) =>
                                    (0, E.jsxs)(
                                      x.A,
                                      {
                                        gap: 0.5,
                                        children: [
                                          (0, E.jsx)(T.X, { size: 18, weight: "bold" }),
                                          (0, E.jsx)(y.N_, {
                                            to: "".concat(e.linkUrl),
                                            children: (0, E.jsx)(O, {
                                              children: e.linkName,
                                            }),
                                          }),
                                        ],
                                      },
                                      r
                                    )
                                  ),
                              ],
                            }),
                            (0, E.jsxs)(j.A, {
                              sx: {
                                gridColumn: "span 4",
                                display: "flex",
                                justifyContent: "space-between",
                              },
                              children: [
                                (0, E.jsx)(k.A, {
                                  onClick: () =>
                                    i("./ch/".concat(_.username, "./resume")),
                                  children: (0, E.jsx)(z.T, { size: 32, weight: "bold" }),
                                }),
                                (0, E.jsx)(k.A, {
                                  onClick: () => {
                                    const e = window.location.href;
                                    navigator.clipboard.writeText(e).then(() => {
                                      N().fire({
                                        icon: "success",
                                        title: "Hurray...",
                                        text: "Profile link copied.",
                                        duration: 3e3,
                                      });
                                    });
                                  },
                                  children: (0, E.jsx)(S.M, { size: 32, weight: "bold" }),
                                }),
                                (0, E.jsx)(k.A, {
                                  children: (0, E.jsx)(M._, { size: 32, weight: "bold" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, E.jsx)(g.A, {
                          position: "static",
                          sx: { bgcolor: "#f0f0f0", mb: "10px" },
                          children: (0, E.jsxs)(p.A, {
                            value: R,
                            onChange: (e, r) => {
                              W(r);
                            },
                            indicatorColor: "primary",
                            variant: "scrollable",
                            scrollButtons: !0,
                            allowScrollButtonsMobile: !0,
                            sx: {
                              "& .MuiTabs-flexContainer": { justifyContent: "center" },
                            },
                            children: [
                              (0, E.jsx)(b.A, { label: "Profile", ...ee(0) }),
                              (0, E.jsx)(b.A, { label: "Post", ...ee(1) }),
                              (0, E.jsx)(b.A, { label: "Jobs", ...ee(2) }),
                              P._id === _._id
                                ? (0, E.jsx)(b.A, { label: "Saved", ...ee(3) })
                                : null,
                            ],
                          }),
                        }),
                        (0, E.jsxs)(j.A, {
                          sx: { height: "100%", overflow: "hidden" },
                          children: [
                            0 === R &&
                              (0, E.jsx)(Z, {
                                user: _,
                                activeTab: R,
                                index: 0,
                                dir: D.direction,
                              }),
                            1 === R &&
                              (0, E.jsx)(q, {
                                user: _,
                                activeTab: R,
                                index: 1,
                                dir: D.direction,
                              }),
                            2 === R &&
                              (0, E.jsx)(K, {
                                user: _,
                                activeTab: R,
                                index: 2,
                                dir: D.direction,
                              }),
                            3 === R &&
                              (0, E.jsx)(Q, {
                                user: _,
                                activeTab: R,
                                index: 3,
                                dir: D.direction,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      function ee(e) {
        return {
          id: "full-width-tab-".concat(e),
          "aria-controls": "full-width-tabpanel-".concat(e),
        };
      }
    },
  },
]);
//# sourceMappingURL=295.458c8eaa.chunk.js.map
