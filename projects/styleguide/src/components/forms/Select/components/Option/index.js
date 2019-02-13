import React, { Component } from 'react';

const Option = ({ children, value, ...rest})=> (
  <option value={value}>{children}</option>
)

export default Option;