import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUserOut } from '../thunks/signUserOut'
import UserNavBar from './UserNavBar'
import moment from 'moment';
import '../styles/header.css'

export class Header extends Component {

  render() {
    const { user, currentWeather, signUserOut } = this.props
    let time = currentWeather ? moment.unix(currentWeather.time).format('LT') : null;
    return (
      <div className='main-header'>
        <div className='header'>
          <h1 className='title'>MyCommute</h1>
          <div className='current-weather'>
            {!user.id && <Link to='/login'>LOGIN USER</Link>}
            {currentWeather &&
              <div>
                <h4>Hello, {user.userName} <Link to='/'><button className='signout-btn' onClick={() => signUserOut()}>SignOut</button></Link></h4>
                <p>Current as of {time}</p>
                <p>{currentWeather.summary}</p>
                <p>{currentWeather.temperature} F°</p>
              </div>}
          </div >
        </div>
        <Route path={`/user/${user.id}`} component={UserNavBar} />
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  signUserOut: PropTypes.func,
  currentWeather: PropTypes.object
};

export const mapDispatchToProps = (dispatch) => ({
  signUserOut: () => dispatch(signUserOut())
});

export const mapStateToProps = store => ({
  user: store.user,
  currentWeather: store.weather.current
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);