import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './style.css';
import Radio from './components/Radio';


const RadioGroup = ({ children, name, label, options, onChange, value, ...rest }) => (
  <div className="form-group">
    <label htmlFor="exampleFormControlFile1">{label}</label>
    {options ?
      options.map((option) => (
        <Radio
          name={name}
          onChange={onChange}
          checked={value ? value == option.value : ''}
          {...option}>
          {option.label}
        </Radio>
      ))
      :
      React.Children.map(children, (single) =>
        React.cloneElement(
          single, { name, onChange, checked: value ? value == single.props.value : '' }
        )
      )
    }
  </div>
)
RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.node,
  children: function(props, propName, componentName) {
    if (!props.children && !props.options) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
  onChange: PropTypes.func
}

export {
  Radio
}

export default RadioGroup;