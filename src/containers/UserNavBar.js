import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class UserNavBar extends Component {

  render() {
    const { user } = this.props
    return (
      <nav>
        <NavLink className='nav-button' to={`/user/${user.id}/preferences`}>Preferences</NavLink>
        <NavLink className='nav-button' to={`/user/${user.id}/commutes`}>Commutes</NavLink>
        <NavLink className='nav-button' to={`/user/${user.id}/weather`}>Your Weather</NavLink>
      </nav>
    );
  }
}

UserNavBar.propTypes = {
  user: PropTypes.object,
};

export const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps)(UserNavBar);