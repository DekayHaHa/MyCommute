import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'

export class UserCommutes extends Component {

  render() {

    return (
      <div>
        <h3>I'm Commutes</h3>
      </div>
    );
  }
}

UserCommutes.propTypes = {
  user: PropTypes.object,
  signinUser: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  getUser: (name, pass) => dispatch(getUser(name, pass))
});

export const mapStateToProps = store => ({
  user: store.user,
  error: store.error,
  pref: store.pref
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCommutes);