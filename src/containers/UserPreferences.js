import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


export class UserPreferences extends Component {
  render() {
    return (
      <div>
        <h3>I'm Preferences</h3>
      </div>
    )
  }
}

UserPreferences.propTypes = {
  user: PropTypes.object,
  signinUser: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
});

export const mapStateToProps = store => ({
  user: store.user,
  error: store.error,
  pref: store.pref,
  commutes: store.commutes
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPreferences);