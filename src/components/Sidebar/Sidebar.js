import React from "react";

import Channel from "../Channel/Channel";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>フォローしているチャンネル</h5>
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/3fea880f-2880-4b67-8ac4-1d97d18e07ab-profile_image-70x70.png"
          name="Digi-Angler"
          followers="7,777"
        />

        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/875afc55-c493-4422-a939-240c85774c34-profile_image-300x300.png"
          name="yamatonjp"
          followers="2,687"
        />

        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/61f568bf-884b-4126-b17c-fc525c6d3bd4-profile_image-300x300.png"
          name="fps_shaka"
          followers="4,168"
        />

        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/stylishnoob4-profile_image-08271f11296c16df-300x300.png"
          name="stylishnoob4"
          followers="1,593"
        />

        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/d6a875a2-2b57-4581-ba19-771da145f491-profile_image-300x300.png"
          name="SPYGEA"
          followers="9,313"
        />

        <p className="sidebar__topShowMore">さらに表示</p>

        <h5>おすすめのチャンネル</h5>
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/9e851f28-b373-426d-9e85-47bbc6bd5bdf-profile_image-300x300.png"
          name="BorasLegend"
          followers="5,324"
        />

        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/7e95ca6e-45b0-4403-ab57-98d1ef45d9d6-profile_image-300x300.png"
          name="Robfortes"
          followers="1,952"
        />

        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/8ad7f5f8-6ce5-4573-9b96-b68b52e7ece8-profile_image-300x300.png"
          name="GreekFreakFIFA"
          followers="402"
        />

        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/039ed94b-800f-4ccd-bae8-8ebdb0938cf4-profile_image-300x300.png"
          name="HashtagTom_"
          followers="1,870"
        />

        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/36b0e56f-316e-45f2-9df7-40cb9cad3f4a-profile_image-300x300.png"
          name="wlpsks"
          followers="9,971"
        />

        <p className="sidebar__topShowMore">さらに表示</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="フレンドに追加" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
