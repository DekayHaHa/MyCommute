import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path='/' component={Login} />
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