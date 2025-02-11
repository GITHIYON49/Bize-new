export const menus = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "about",
    route: "/about",
  },
  {
    name: "programs",
    subMenu: [
      {
        name: "engagement",
        route: "/engagement",
      },
      {
        name: "enhancement",
        route: "/enhancement",
      },
      {
        name: "empowerment",
        route: "/empowerment",
      },
    ],
  },
  {
    name: "contact",
    route: "/contact",
  },
  {
    singin: "login",
    route: "/login",
  },
  {
    singin: "register",
    route: "/registration",
  },
];
