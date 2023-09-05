import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="left">
        <span className="logo">Social Media</span>
      </div>

      <div className="center">
        <div className="searchbar">
          <Search className="searchIcon"></Search>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="right">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIcon">
            <Person></Person>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIcon">
            <Chat></Chat>
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIcon">
            <Notifications></Notifications>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <img src="/assets/people/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
