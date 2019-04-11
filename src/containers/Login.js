import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'

export class Login extends Component {

  fetchData = () => {
    this.props.getUser('David', 'twelve')
  }

  render() {
    const { user } = this.props
    return (
      <div>
        {user.id && <h2>{user.userName}</h2>}
        <button onClick={this.fetchData}>get faux data</button>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  signinUser: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});

export const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);