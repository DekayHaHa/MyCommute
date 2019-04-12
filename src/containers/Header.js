import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'
import UserNavBar from './UserNavBar'

export class Login extends Component {


  render() {
    const { user } = this.props
    return (
      <div className='header'>
        <h1 className='title' >MyCommute</h1>
        <Link to='/login'>LOGIN USER</Link>
        <Route path={`/user/${user.id}`} component={UserNavBar} />
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