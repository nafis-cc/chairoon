"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [876],
  {
    16876: (t, e, s) => {
      s.r(e), s.d(e, { default: () => h });
      s(65043);
      var n = s(83003),
        a = s(73216),
        c = s(70579);
      const h = () => {
        const { isLoggedIn: t } = (0, n.d4)((t) => t.auth);
        return t
          ? t
            ? (0, c.jsx)(a.C5, { to: "./home" })
            : (0, c.jsx)(c.Fragment, { children: "App" })
          : (0, c.jsx)(a.C5, { to: "./login" });
      };
    },
  },
]);
//# sourceMappingURL=876.18e75e2a.chunk.js.map
