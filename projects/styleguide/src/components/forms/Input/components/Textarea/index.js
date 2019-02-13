import React, { Component } from 'react';
import s from './style.css';

const Textarea = ({children, ...rest})=> (
  <textarea {...rest} >
    {children}
  </textarea>
)

export default Textarea;