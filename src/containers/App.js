import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'
import Header from './Header'
// import NewUser from './NewUser'
import UserCommutes from './UserCommutes'
import UserWeather from './UserWeather'
import UserPreferences from './UserPreferences'
import { Home } from './Home'
import { PageError } from './PageError'

export class App extends Component {

  render() {
    const { user } = this.props
    return (
      <div className="App">
        {/* {user.id && this.getUserWeather()} */}
        <Route to='/' component={Header} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path={`/user/${user.id}/commutes`} component={UserCommutes} />
          <Route exact path={`/user/${user.id}/preferences`} component={UserPreferences} />
          <Route exact path={`/user/${user.id}/weather`} component={UserWeather} />
          {/* <Route exact path='/newUser' component={NewUser} /> */}
          <Route component={PageError} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  signinUser: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps, mapDispatchToProps)(App);