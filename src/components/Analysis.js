import React from "react";
import Question from "./Question";
import AnalysisStyle from '../styles/Analysis.module.css'

export default function Analysis() {
  return (
    <div className={AnalysisStyle.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answered 5 out of 10 questions correctly</h4>
      <Question />
    </div>
  );
}
