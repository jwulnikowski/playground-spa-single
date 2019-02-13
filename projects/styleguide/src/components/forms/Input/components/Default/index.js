import React, { Component } from 'react';
import s from './style.css';

const Input = ({children, ...rest})=> (
  <input {...rest}/>
)

export default Input;