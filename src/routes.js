
import Home from "views/Home.js";
import Profile from "views/Profile.js";
import MangagerCLB from "views/MangagerCLB.js";
import Match from "views/Match.js";
import ListUser from "views/ListUser.js";

import Login from "views/Login.js";
import Notifications from "views/Notifications.js";
import MatchProfile from "views/ProfileMatch.js";
import ClubProfile from "views/ClubProfile.js";
import Ticket from "views/Ticket.js";
import Register from "views/Register.js";




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
    path: "/Match",
    name: "MATCH SCHEDULE",
    icon: "nc-icon nc-paper-2",
    component: Match,
    layout: "/admin",
  },

  {
    path: "/MatchProfile",
    name: "Match Profile",
    icon: "nc-icon nc-badge",
    component: MatchProfile,
    layout: "/admin",
  },

  {
    path: "/Ticket",
    name: "Ticket",
    icon: "nc-icon nc-align-center",
    component: Ticket,
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
    path: "/ClubProfile",
    name: "Club Profile",
    icon: "nc-icon nc-badge",
    component: ClubProfile,
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

  {
    path: "/Register",
    name: "Register",
    icon: "nc-icon nc-circle-09",
    component: Register,
    layout: "/admin",
  },
];

export default dashboardRoutes;
