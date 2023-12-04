import React from "react";
import AnswersStyle from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";

export default function Answers() {
  return (
    <div className={AnswersStyle.answers}>
      <CheckBox className={AnswersStyle.answer} text="Text answer" />
    </div>
  );
}
