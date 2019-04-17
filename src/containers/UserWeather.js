import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserWeather } from '../thunks/getUserWeather'


export class UserWeather extends Component {
  render() {
    const { weather } = this.props
    return (
      <div className='card-object'>
        <h3>Today's Weather: {weather.summary}</h3>
        <p>Temperature range from {weather.tempLow} to {weather.tempHigh}</p>
        <p>Average wind speed of {weather.avgWind}MPH, with gusts up to {weather.gusts}MPH</p>
        <p>{weather.precipChance}% of {weather.precipType}</p>
        <p>Humidity Index of {weather.humidity} (0 to 1)</p>
      </div>
    )
  }
}

UserWeather.propTypes = {
  user: PropTypes.object,
  signinUser: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  getUserWeather: (id) => dispatch(getUserWeather(id))
})

export const mapStateToProps = state => ({
  user: state.user,
  weather: state.weather.today
});

export default connect(mapStateToProps, mapDispatchToProps)(UserWeather);