import React from 'react';


import IllustrationStyle from '../styles/Illustration.module.css';

export default function Illustration({alt,...rest}) {
  return (
    <div className={IllustrationStyle.illustration}>
      <img {...rest} alt={ alt}/>
    </div>
  );
}
