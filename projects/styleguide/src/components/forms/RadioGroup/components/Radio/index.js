import React, { Component } from 'react';
import s from './style.css';

const Radio = ({ name, children, value, onChange, checked, ...rest})=> (
  <div className="form-check">
    <label className="form-check-label">
      <input type="radio" name={name} value={value} onChange={onChange} checked={checked} />
      {children}
    </label>
  </div>
)

export default Radio;