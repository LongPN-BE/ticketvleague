
import Home from "views/Home.js";
import Profile from "views/Profile.js";
import MangagerCLB from "views/MangagerCLB.js";
import Match from "views/Match.js";
import ListUser from "views/ListUser.js";
import Maps from "views/Maps.js";
import Login from "views/Login.js";
import Notifications from "views/Notifications.js";



const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-grid-45",
    component: Home,
    layout: "/admin",
  },

  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-badge",
    component: Profile,
    layout: "/admin",
  },

  {
    path: "/MangagerClub",
    name: "Club List",
    icon: "nc-icon nc-notes",
    component: MangagerCLB,
    layout: "/admin",
  },
  {
    path: "/Match",
    name: "MATCH SCHEDULE",
    icon: "nc-icon nc-paper-2",
    component: Match,
    layout: "/admin",
  },

  {
    path: "/ListUser",
    name: "List User",
    icon: "nc-icon nc-bullet-list-67",
    component: ListUser,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Stadium",
    icon: "nc-icon nc-single-02",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },

  {
    path: "/Login",
    name: "Login",
    icon: "nc-icon nc-circle-09",
    component: Login,
    layout: "/admin",
  },
];

export default dashboardRoutes;
