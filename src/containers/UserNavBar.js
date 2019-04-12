import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'

export class UserNavBar extends Component {

  componentDidMount() {

  }

  render() {
    const { user } = this.props
    return (
      <nav>
        <Link to={`/user/${user.id}/preferences`}>Preferences</Link>
        <Link to={`/user/${user.id}/commutes`}>Commutes</Link>
        <Link to={`/user/${user.id}/weather`}>Your Weather</Link>
      </nav>
    );
  }
}

UserNavBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserNavBar);