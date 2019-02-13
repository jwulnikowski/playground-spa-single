import React, { Component } from 'react';
import s from './style.css';


class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeProxy(singleProps, ...rest) {
    this.onChange(...rest)
    this.props.onChange && this.props.onChange(...rest)
    singleProps.onChange && singleProps.onChange(...rest)
  }

  getValue({ name, value }) {
    const { values } = this.props;
    if (values && values[name]) {
      return values[name];
    } else if (value) {
      return value;
    } else {
      return this.state[name]
    }
  }

  onSubmit(e, ...rest) {
    e.preventDefault();
    let state = {};
    React.Children.forEach(this.props.children, (single) =>
      state[single.props.name] = this.getValue(single.props)
    )
    this.props.onSubmit && this.props.onSubmit(e, state, ...rest);
  }

  render() {
    const { children } = this.props;

    return (<form className={s.root} onSubmit={this.onSubmit.bind(this)}>
      {React.Children.map(children, (single) =>
        React.cloneElement(
          single, {
            onChange: this.onChangeProxy.bind(this, single.props),
            value: this.getValue(single.props) || ''
          }
        )
      )}
    </form>)
  }
}

export default Form;