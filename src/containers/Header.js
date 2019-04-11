import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'

export class Login extends Component {


  render() {
    const { user, error } = this.props
    const { userName, password } = this.state
    return (
      <div>

      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  signinUser: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  getUser: (name, pass) => dispatch(getUser(name, pass))
});

export const mapStateToProps = store => ({
  user: store.user,
  error: store.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);