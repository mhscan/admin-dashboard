import React from "react";
import "./Topbar.css"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export default function Topbar() {
  return <div className="topbar">

    <div className="top-left">
      <img className="logo" src="images/logo.png" alt="logo" />
    </div>

    <div className="top-right">
      <div className="topbar-icon-container">
        <NotificationsActiveIcon></NotificationsActiveIcon>
        <span className="topbar-icon-badge ">2</span>
      </div>
      <div className="topbar-icon-container">
        <SettingsIcon></SettingsIcon>
        <span className="topbar-icon-badge ">2</span>
      </div>
      <div className="topbar-icon-container">
        <LanguageIcon></LanguageIcon>
      </div>
      <img className="top-avatar" src="images/admin.jpg" alt="admin.png" />

    </div>



  </div>;
}
