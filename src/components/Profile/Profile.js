import React from "react";

import RecentItem from "../RecentItem/RecentItem";

import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/3fea880f-2880-4b67-8ac4-1d97d18e07ab-profile_image-70x70.png"
          alt=""
        />

        <div className="profile__topLeftDetail">
          <h1>Digi-Angler</h1>
          <h3>364,168人のフォロワー</h3>
        </div>
        <div className="profile__topRight">
          <i className="fas fa-heart graybg"></i>
          <i className="fas fa-bell graybg"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="profile__menu">
        <h2 className="active">ホーム</h2>
        <h2>クリエーターについて</h2>
        <h2>スケジュール</h2>
        <h2>ビデオ</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>チャット</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem
            url={"https://www.twitch.tv/videos/817256036"}
            url2={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-90x120.jpg"}
            title={"WE WEREN'T MEANT TO TRYHARD BUT... FORTNITE"}
          />

          <RecentItem
            url={"https://www.twitch.tv/videos/815153403"}
            url2={
              "https://static-cdn.jtvnw.net/ttv-boxart/Among%20Us-285x380.jpg"
            }
            title={"THE BEST TRIO IN FALL GUYS?! - FALL GUYS SEASON 2"}
          />

          <RecentItem
            url={
              "https://www.twitch.tv/shimoyama0810/clip/ConsiderateCrackyHerdLeeroyJenkins"
            }
            url2={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-90x120.jpg"}
            title={"I CAN'T MISS A SHOT! - FORTNITE"}
          />

          <RecentItem
            url={
              "https://www.twitch.tv/shimoyama0810/clip/TastyUnsightlyRuffTheTarFu"
            }
            url2={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-90x120.jpg"}
            title={"I WASN'T EVEN TROLLING! - FORTNITE"}
          />
        </div>

        <div className="profile__categories">
          <h2>Ninja's recently stremed Catagories</h2>
          <div className="profile__categoriesRecently">
            <div style={{ margin: "0" }}>
              <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg"
                alt=""
              />
              <h3>VALORANT</h3>
            </div>
            <div>
              <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg"
                alt=""
              />
              <h3>Apex</h3>
            </div>
            <div>
              <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/Among%20Us-285x380.jpg"
                alt=""
              />
              <h3>Among US</h3>
            </div>
            <div>
              <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"
                alt=""
              />
              <h3>Legue of Legends</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
