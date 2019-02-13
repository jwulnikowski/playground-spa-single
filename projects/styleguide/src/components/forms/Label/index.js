import React, { Component } from 'react';
import s from './style.css';

const Label = ({children, htmlFor, ...rest})=> (
  <label htmlFor={htmlFor} {...rest}>{children}</label>
)

export default Label;