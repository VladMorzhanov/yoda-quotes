/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import '../../styles/css/index.css'
import reducer from './reducer'
import injectReducer from 'utils/injectReducer'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import Home from '../HomePage/Loadable'
import NotFound from '../NotFoundPage/Loadable'

export class App extends React.PureComponent {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' exact component={NotFound} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'global', reducer})

export default withRouter(compose(
  withReducer,
  withConnect
)(App))
