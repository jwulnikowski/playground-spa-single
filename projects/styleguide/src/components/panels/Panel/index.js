import React, { Component } from 'react';
import s from './style.css';

const Panel = ({children, ...rest})=> (
  <div>
    {children}
  </div>
)

export default Panel;