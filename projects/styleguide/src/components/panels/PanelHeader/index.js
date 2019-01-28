import React, { Component } from 'react';
import s from './style.css';

const PanelHeader = ({children, ...rest})=> (
  <div className={s.root}>
    <img src={require('./images/white_logo.png')}/>
    <h2>{children}</h2>
  </div>
)

export default PanelHeader;