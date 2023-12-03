import React from 'react'
import TextInputStyle from '../styles/TextInput.module.css'

export default function TextInput({icon, ...rest}) {
  return (
    <div className={TextInputStyle.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
