/**
 *
 * App.js
 *
 */

import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
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
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='*' exact component={NotFound}/>
      </Switch>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({})

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
