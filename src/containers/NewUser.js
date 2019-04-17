import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../thunks/createUser'

export class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      userName: '',
      password: '',
      verifyPassword: '',
      zip: 0,
      lat: 0,
      lng: 0,
      locCheck: false,
    }
  }

  componentDidMount() {
    let answer = window.confirm('Can we use your web browesr location?')
    if (answer) {
      this.setState({ locCheck: true })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    const { userName, password, zip, lat, lng, email } = this.state
    let user = {
      email,
      userName,
      password,
      zip,
      lat,
      lng
    }
    this.props.createUser(user)
    this.setState({ userName: '', password: '', verifyPassword: '', email: '', zip: 0, lat: 0, lng: 0 })
  }

  successCallback = (pos) => {
    this.setState({ lat: pos.coords.latitude, lng: pos.coords.longitude })
  }

  errorCallback = (err) => {
    console.log('in err', err)
    return err
  }

  getUserLocation = () => {
    const opt = { timeout: 10000 }
    navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback, opt);
    console.log(this.state)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { user, error } = this.props
    const { userName, password, verifyPassword, email, zip, lat, lng, locCheck } = this.state
    if (!lat && !lng && locCheck) this.getUserLocation()
    return (
      <div>
        {user.id && <Redirect to='/' />}
        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='text'
            value={email}
            placeholder='EMAIL...'
            onChange={this.handleChange}
          />
          <input
            name='userName'
            type='text'
            value={userName}
            placeholder='USERNAME...'
            onChange={this.handleChange}
          />
          <input
            name='zip'
            type='number'
            value={zip}
            placeholder='ZIP CODE...'
            onChange={this.handleChange}
          />
          {zip.length > 0 && zip.length !== 5 && <p>Please enter a 5 digit Zip Code.</p>}
          <input
            name='password'
            type='password'
            value={password}
            placeholder='PASSWORD...'
            onChange={this.handleChange}
          />
          <input
            name='verifyPassword'
            type='password'
            value={verifyPassword}
            placeholder='VERIFY PASSWORD...'
            onChange={this.handleChange}
          />
          {verifyPassword !== password && <p>Passwords Do Not Match</p>}
          {error && <p>{error}</p>}
          <button onClick={this.fetchData}>Sign Up</button>
        </form>
      </div>
    );
  }
}

NewUser.propTypes = {
  user: PropTypes.object,
  createUser: PropTypes.func,
  error: PropTypes.string
};

export const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user))
});

export const mapStateToProps = store => ({
  user: store.user,
  error: store.error
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);