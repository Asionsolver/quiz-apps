import React from "react";
import MiniPlayerImage from "../assets/img/3.jpg";
import MiniPlayerStyle from "../styles/MiniPlayer.module.css";

export default function MiniPlayer() {
  return (
    <div
      className={`${MiniPlayerStyle.miniPlayer} ${MiniPlayerStyle.floatingBtn}`}
    >
      <span className={`material-icons-outlined ${MiniPlayerStyle.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${MiniPlayerStyle.close}`}>
        
        close
      </span>
      <img src={MiniPlayerImage} alt="MiniPlayerImage" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
