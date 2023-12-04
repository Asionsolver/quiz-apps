import React from 'react';
import ButtonStyle from '../styles/ButtonStyle.module.css';

export default function Button({className,children}) {
  return (
    <div className={`${ButtonStyle.button} ${className}`}>
        { children}
    </div>
  );
}
