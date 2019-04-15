import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserWeather } from '../thunks/getUserWeather'


export class UserWeather extends Component {
  render() {
    const { weather, getUserWeather, user } = this.props
    // if (!weather) getUserWeather(user.id)
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

export const mapDispatchToProps = dispatch => ({
  getUserWeather: (id) => dispatch(getUserWeather(id))
})

export const mapStateToProps = store => ({
  user: store.user,
  weather: store.weather
});

export default connect(mapStateToProps)(UserWeather);