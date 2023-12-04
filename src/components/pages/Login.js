import React from 'react';
import LoginImage from '../../assets/img/signup.svg';
import LoginStyle from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';


export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={LoginImage} alt={Login} />
        <Form className={`${LoginStyle.login} `}>
          <TextInput
            type="password"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button><span>Login Now</span></Button>
          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
