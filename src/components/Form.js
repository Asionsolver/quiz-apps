import React from 'react';
import FormStyle from '../styles/Form.module.css';

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${FormStyle.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}
