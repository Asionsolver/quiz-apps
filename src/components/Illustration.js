import React from 'react';
import SignupImage from '../assets/img/signup.svg'

import IllustrationStyle from '../styles/Illustration.module.css'

export default function Illustration() {
  return (
    <div className={IllustrationStyle.illustration}>
      <img src={SignupImage} alt="Signup" />
    </div>
  );
}
