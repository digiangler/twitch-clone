import { Avatar } from "@material-ui/core";

import React from "react";

import "./Header.css";
import Pic from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
          alt="twitch logo"
        />
        <h2>フォロー中</h2>
        <h2>コンテンツを探す</h2>
        <div className="header__verticalLine"></div>
        <i className="fas fa-ellipsis-h"></i>
      </div>

      <div style={{ marginTop: "10px" }} className="header__center">
        <input type="text" placeholder="Search" />
        <div className="header__centerLogoContainer">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>

          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h4>ビッツの購入</h4>
          </div>

          <Avatar src={Pic} />
        </div>
      </div>
    </div>
  );
};

export default Header;
