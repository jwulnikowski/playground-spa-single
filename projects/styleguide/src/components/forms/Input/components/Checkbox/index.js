import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './style.css';

const Checkbox = ({children, ...rest})=> (
  <input type="checkbox" {...rest} />
)

Checkbox.propTypes = {
  name: PropTypes.string
};

export default Checkbox;