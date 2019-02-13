import React, { Component } from 'react';
import s from './style.css';
import Option from './components/Option';


const Select = ({ children, name, label, onChange, value, options, ...rest }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      {options ?
        options.map((option) => (<Option {...option}>{option.label}</Option>))
        :
        children
      }
    </select>
  </div>
)

export {
  Option
}

export default Select;