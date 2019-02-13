import React, { Component } from 'react';
import Label from '../Label'
import Checkbox from './components/Checkbox'
import Default from './components/Default'
import Textarea from './components/Textarea'
import s from './style.css';

const Input = ({type, label, name, ...rest})=> (
  <div className="form-group">
    <Label htmlFor={name}>{label}</Label>
    {
      {
        checkbox: <Checkbox id={name} name={name} {...rest} />,
        textarea: <Textarea id={name} name={name} {...rest} />,
      }[type] || <Default id={name} name={name} type={type} {...rest}/>
    }
  </div>

)

export default Input;