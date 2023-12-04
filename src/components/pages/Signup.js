import React from "react";
import SignupImage from '../../assets/img/signup.svg';

import SignupStyle from "../../styles/Signup.module.css";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={SignupImage} alt="Signup" />
        <Form className={`${SignupStyle.signup} `}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="password"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
            text="I agree to the Terms &amp; Conditions"
          />
          <CheckBox text="I agree to the Terms & Conditions" />
          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
