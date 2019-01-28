import React from 'react'
import { Scoped } from 'kremling'
import styles from './root.krem.css'
import { links } from './root.helper.js'
import { navigateToUrl} from 'single-spa';


class Root extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
  }

  render () {
    return (
      <Scoped postcss={styles}>
        {
          this.state.hasError ? (
            <div className='root navBarHeight'>
              Error
            </div>
          ) : (
            <div className='root navBarHeight'>
              <img src={require('./image/pobrane.jpg')}/>
              {
                links.map((link) => {
                  return (
                    <a
                      key={link.href}
                      className='primary-navigation-link'
                      onClick={navigateToUrl}
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  )
                })
              }
            </div>
          )
        }
      </Scoped>
    )
  }
}

export default Root