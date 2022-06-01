
import Home from "views/Home.js";
import Profile from "views/Profile.js";
import MangagerCLB from "views/MangagerCLB.js";
import Match from "views/Match.js";
import ListUser from "views/ListUser.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";


const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-chart-pie-35",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-circle-09",
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
    icon: "nc-icon nc-atom",
    component: ListUser,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Stadium",
    icon: "nc-icon nc-pin-3",
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
];

export default dashboardRoutes;
