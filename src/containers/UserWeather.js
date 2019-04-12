import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class UserWeather extends Component {
  render() {
    return (
      <div>
        <h3>I'm Weather</h3>
      </div>
    )
  }
}

UserWeather.propTypes = {
  user: PropTypes.object,
  signinUser: PropTypes.func
};



export const mapStateToProps = store => ({
  user: store.user,
  weather: store.weather
});

export default connect(mapStateToProps)(UserWeather);