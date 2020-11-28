import React from "react";

import "./Stream.css";

function Stream() {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__containerIndicator">オフライン</div>
              <h2>
                Digi-Anglerさんが最近のApex
                Legendsの配信のダイジェストを作成しました
              </h2>
            </div>
            <div className="stream__StatueInfo">
              <i className="fas fa-bell"></i>
              <p>Digi-Anglerさんのライブ配信時に通知が届きます</p>
            </div>
          </div>
        </div>
        <div className="stream__videoEmbed">
          <iframe
            width="500"
            height="295"
            src="https://www.youtube.com/watch?v=AwPCMhyQHFk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Stream;
