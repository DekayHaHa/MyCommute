import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class UserWeather extends Component {
  render() {
    const { weather } = this.props
    return (
      <div className='card-object'>
        <h3>Today's Weather: {weather.today.summary}</h3>
        <p>Temperature range from {weather.today.tempLow} to {weather.today.tempHigh}</p>
        <p>Average wind speed of {weather.today.avgWind}MPH, with gusts up to {weather.today.gusts}MPH</p>
        <p>{weather.today.precipChance * 100}% of {weather.today.precipType}</p>
        <p>Humidity {weather.today.humidity * 100}%</p>
      </div>
    )
  }
}

UserWeather.propTypes = {
  user: PropTypes.object,
  weather: PropTypes.object
};

export const mapStateToProps = state => ({
  user: state.user,
  weather: state.weather
});

export default connect(mapStateToProps)(UserWeather);