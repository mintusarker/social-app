import React from "react";
import "./Rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWarper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others friends</b> have a birthday today
          </span>
        </div>

        <img className="rightBarAd" src="/assets/ad.png" alt="" />

        <h4 className="rightBarTitle">Online Friends</h4>

        <ul className="rightBarFriendList">
          <li className="rightBarFriend">

          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Rightbar;
