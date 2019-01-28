import React from 'react'
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom'
import LegacyPage from './legacyComponent/legacy.component'

class Root extends React.Component {

  state = {
    hasError: false,
    key: 1
  }
  constructor(props){
    super(props)
  }


  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    console.log('aaaaa', this.props)
    return (
      this.state.hasError ? (
        <div>
          Error
        </div>
      ) : (
        // <div key={this.state.key}>
          <BrowserRouter>
            <Route
              path='/legacy'
              component={LegacyPage}
            />
          </BrowserRouter>
          // </div>
        )
    )
  }
}

export default Root;