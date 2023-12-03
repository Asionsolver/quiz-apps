import React from 'react'
import ButtonStyle from '../styles/ButtonStyle.module.css'

export default function Button({children}) {
  return (
    <div className={ButtonStyle.button}>
        <span>{ children}</span>
    </div>
  );
}
