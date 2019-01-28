import React, { Component } from 'react';
import s from './style.css';

const Button = ({children, ...rest})=> (
  <button {...rest} className={s.root}>
    {children}
  </button>
)

export default Button;