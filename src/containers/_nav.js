import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Booking"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Booking",
    to: "/theme/booking",
    icon: "cil-calculator",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Add Booking",
    to: "/addBooking",
    icon: "cil-cursor",
    badge: {
      color: "success",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Truck Details"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Add Trucks",
    to: "/addTruck",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["Invoice"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Invoice",
    to: "/invoice",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
];

export default _nav;
