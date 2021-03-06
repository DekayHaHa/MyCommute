import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Pref } from '../components/Pref'


export class UserPreferences extends Component {

  renderPrefs = (prefs) => {
    const prefsToRender = [];
    Object.keys(prefs).forEach(pref => {
      if (pref === 'id') return
      prefsToRender.push({
        title: pref,
        temp: prefs[pref].temp,
        estimatedTime: prefs[pref].estimatedTime,
        priority: prefs[pref].priority,
        price: prefs[pref].price,
      })
    })
    return prefsToRender.map(pref => <Pref key={pref.title} {...pref} />)
  }

  render() {
    const { pref } = this.props
    return (
      <div className='container'>
        {pref.id && this.renderPrefs(pref)}
      </div>
    )
  }
}

UserPreferences.propTypes = {
  user: PropTypes.object,
  error: PropTypes.string,
  pref: PropTypes.object,
  commutes: PropTypes.object
};

export const mapStateToProps = store => ({
  user: store.user,
  error: store.error,
  pref: store.pref,
  commutes: store.commutes
});

export default connect(mapStateToProps)(UserPreferences);