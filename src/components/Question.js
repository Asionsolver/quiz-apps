import React from "react";
import QuestionStyle from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Question() {
  return (
    <div className={QuestionStyle.question}>
      <div className={QuestionStyle.qtitle}>
        <span class="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}
