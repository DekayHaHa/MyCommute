import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Commute } from '../components/Commute'

export class UserCommutes extends Component {

  checkPref = () => {
    const { commutes, pref, weather } = this.props
    const commutesToRender = []
    let recommendation = { pri: 10 }
    Object.keys(commutes).forEach(commKey => {
      if (commKey === 'id') return
      Object.keys(pref).forEach(prefKey => {
        if (prefKey === 'id') return
        if (pref[prefKey].temp < weather.current.temperature && recommendation.pri > pref[prefKey].priority) {
          recommendation.pri = pref[prefKey].priority
          recommendation['recom'] = prefKey
          recommendation['price'] = pref[prefKey].price
          recommendation['estTravel'] = pref[prefKey].estimatedTime
        }
      }, {})
      commutesToRender.push({
        ...recommendation,
        title: commKey
      })
    })
    // const currentTime = moment().format('LT')
    // const timeLeft = moment.duration(moment(currentTime, 'HHmm').diff(moment('1800', 'HH:mm'))).humanize()
    // console.log(currentTime, timeLeft)
    return commutesToRender.map(commute => <Commute key={commute.title} {...commute} />)
  }

  render() {
    const { weather } = this.props
    return (
      <div className='container'>
        {weather.today && this.checkPref()}
      </div>
    );
  }
}

UserCommutes.propTypes = {
  user: PropTypes.object,
  error: PropTypes.string,
  pref: PropTypes.object,
  commutes: PropTypes.object,
  weather: PropTypes.object
};

export const mapStateToProps = store => ({
  user: store.user,
  error: store.error,
  pref: store.pref,
  commutes: store.commutes,
  weather: store.weather
});

export default connect(mapStateToProps)(UserCommutes);