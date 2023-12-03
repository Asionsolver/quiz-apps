import React from "react";
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
      <div className="colum">
        <Illustration />
        <Form className={`${SignupStyle.signup} form`}>
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
          <CheckBox text='I agree to the Terms & Conditions'/>
          <Button>Submit now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}