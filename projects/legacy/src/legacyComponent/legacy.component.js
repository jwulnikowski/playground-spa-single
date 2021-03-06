import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router'

const URL = 'http://flightdeck.cloudbet.test:3000/';

class Legacy extends React.Component {
  constructor(props) {
    super(props)
    var pathName = this.props.location.pathname
    this.state = {
      url:  URL +pathName.replace("/legacy/", "")
    }
    this.iframe = React.createRef();

  }

  onLoad(el){
    console.log(el);
    console.log(this.iframe.current.contentWindow.location.href)
  }

  changeUrl(){
    this.setState({
      url: URL + location.pathname.replace("/legacy/", "")
    })
  }
  componentDidMount(){
    window.addEventListener('single-spa:routing-event', this.changeUrl.bind(this))
    this.iframe.current.addEventListener('load', this.onLoad.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('single-spa:routing-event', this.changeUrl.bind(this));
    this.iframe.current.removeEventListener('load', this.onLoad.bind(this));
  }

  render() {
    return (
      <iframe ref={this.iframe} style={{ position: "absolute", width: "100%", height: "100%" }} src={this.state.url} />
    )
  }
}

export default withRouter(Legacy)