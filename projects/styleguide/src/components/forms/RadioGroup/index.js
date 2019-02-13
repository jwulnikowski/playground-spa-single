import React, { Component } from 'react';
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
          checked={value ? value == option.value : null}
          {...option}>
          {option.label}
        </Radio>
      ))
      :
      React.Children.map(children, (single) =>
        React.cloneElement(
          single, { name, onChange, checked: value ? value == single.props.value : null }
        )
      )
    }
  </div>
)

export {
  Radio
}

export default RadioGroup;