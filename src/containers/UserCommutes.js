import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'
import moment from 'moment'

export class UserCommutes extends Component {

  checkPref = () => {
    const { pref } = this.props
    // const timeDiff = ( - Date.now())
    console.log(moment(pref.morning, "LT").format())
  }

  render() {

    return (
      <div>
        <h3>I'm Commutes</h3>
        <p>Moring commute {this.checkPref()}</p>
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
  pref: store.pref,
  commutes: store.commutes
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCommutes);