import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header'
// import NewUser from './NewUser'
import UserCommutes from './UserCommutes'
import UserWeather from './UserWeather'
import UserPreferences from './UserPreferences'
import { Home } from '../components/Home'
import { PageError } from '../components/PageError'
import '../styles/App.css'

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
  user: PropTypes.object
};

export const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps)(App);