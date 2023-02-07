import React from "react";
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return <div>
    <div className="sidebarmenu">
      <h3 className="tittel">Dushboard</h3>
      <ul className="sidebarlist">
        <NavLink to="/">
          <li className="sidebarlistitem"><HomeIcon /> Home</li>
        </NavLink>

        <li className="sidebarlistitem "><TimelineIcon /> analytics</li>
        <li className="sidebarlistitem "><TrendingUpIcon /> salse</li>
      </ul>
      <h3 className="tittel">Quick Menu</h3>
      <ul className="sidebarlist">
        <NavLink to="/Userlist" cla>
          <li className="sidebarlistitem "><PermIdentityIcon /> user</li>
        </NavLink>
        <NavLink to="/NewUser">
          <li className="sidebarlistitem "><PermIdentityIcon /> new user</li>
        </NavLink>

        <NavLink to="/Product">
          <li className="sidebarlistitem "><StorefrontIcon />products </li>
        </NavLink>

        <li className="sidebarlistitem "><AttachMoneyIcon />transaction </li>
        <li className="sidebarlistitem "><BarChartIcon /> report </li>
      </ul>
      <h3 className="tittel">notification</h3>
      <ul className="sidebarlist">
        <li className="sidebarlistitem "><MailOutlineIcon /> mail</li>
        <li className="sidebarlistitem "><DynamicFeedIcon /> feedback</li>
        <li className="sidebarlistitem "><ChatBubbleIcon /> messages</li>
      </ul>
      <h3 className="tittel">staff</h3>
      <ul className="sidebarlist">
        <li className="sidebarlistitem "><WorkOutlineIcon /> manage</li>
        <li className="sidebarlistitem "><TimelineIcon /> analytics</li>
        <li className="sidebarlistitem "><ReportIcon /> report</li>
      </ul>

    </div>


  </div>;
}
