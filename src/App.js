import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from './thunks/getUser'
import './App.css';

export class App extends Component {

  fetchData = () => {
    this.props.getUser()
  }

  render() {
    const { user } = this.props
    return (
      <div className="App">
        {user.id && <h2>{user.userName}</h2>}
        <button onClick={this.fetchData}>get faux data</button>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  signinUser: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});

export const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps, mapDispatchToProps)(App);