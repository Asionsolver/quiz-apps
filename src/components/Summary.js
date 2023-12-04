import React from "react";
import SummaryImage from '../assets/img/success.png'
import SummaryStyle from '../styles/Summary.module.css'

export default function Summary() {
  return (
    <div className={SummaryStyle.summary}>
      <div className={SummaryStyle.point}>
        {/* progress bar will be placed here  */}
        <p className={SummaryStyle.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={SummaryStyle.badge}>
        <img src={SummaryImage} alt="Success" />
      </div>
    </div>
  );
}
