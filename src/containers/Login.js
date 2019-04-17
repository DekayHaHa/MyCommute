import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { userName, password } = this.state
    this.props.getUser(userName, password)
    this.setState({ userName: '', password: '' })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { user, error } = this.props
    const { userName, password } = this.state
    return (
      <div>
        {user.id && <Redirect to={`/user/${user.id}/commutes`} />}
        <form onSubmit={this.handleSubmit}>
          <input className='input-button'
            name='userName'
            type='text'
            value={userName}
            placeholder='USERNAME...'
            onChange={this.handleChange}
          />
          <input className='input-button'
            name='password'
            type='password'
            value={password}
            placeholder='PASSWORD...'
            onChange={this.handleChange}
          />
          <button className='form-button' onClick={this.fetchData}>Sign In</button>
          {error && <p className='input-error' >{error}</p>}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  getUser: PropTypes.func,
  error: PropTypes.string
};

export const mapDispatchToProps = (dispatch) => ({
  getUser: (name, pass) => dispatch(getUser(name, pass))
});

export const mapStateToProps = store => ({
  user: store.user,
  error: store.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);