import React from "react";
import ProgressBarStyle from "../styles/ProgressBar.module.css";
import Button from "./Button";

export default function ProgressBar() {
  return (
    <div className={ProgressBarStyle.progressBar}>
      {" "}
      <div className={ProgressBarStyle.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={ProgressBarStyle.rangeArea}>
        <div className={ProgressBarStyle.tooltip}>24% Complete!</div>
        <div className={ProgressBarStyle.rangeBody}>
          <div
            className={ProgressBarStyle.progress}
            style={{ width: "20%" }}
          ></div>
        </div>
      </div>
      <a href="result.html">
        <Button className={` ${ProgressBarStyle.next}`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
}
