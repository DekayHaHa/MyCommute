import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../thunks/getUser'
import UserNavBar from './UserNavBar'
import moment from 'moment';

export class Login extends Component {


  render() {
    const { user, currentWeather } = this.props
    let time = currentWeather ? moment.unix(currentWeather.time).format('LT') : null;
    console.log(time)
    return (
      <div className='header'>
        <h1 className='title' >MyCommute</h1>
        <div>
          {!user.id && <Link to='/login'>LOGIN USER</Link>}
          {currentWeather &&
            <div>
              <h4>Hello, {user.userName}</h4>
              <p>Current as of {time}</p>
              <p>{currentWeather.summary}</p>
              <p>{currentWeather.temperature} F°</p>
            </div>}
        </div>
        <nav>
          <Route path={`/user/${user.id}`} component={UserNavBar} />
        </nav>
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
  error: store.error,
  currentWeather: store.weather.current
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);