import React from 'react';
import VideoImage from '../assets/img/3.jpg';
import VideoStyle from '../styles/Video.module.css';

export default function Video() {
  return (
    <>
      <a href="quiz.html">
        <div className={VideoStyle.video}>
          <img src={VideoImage} alt='ContentImage' />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={VideoStyle.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>

     
    </>
  );
}
