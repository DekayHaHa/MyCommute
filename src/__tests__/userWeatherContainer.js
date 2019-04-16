import React from 'react'
import { UserWeather, mapDispatchToProps, mapStateToProps } from '../containers/UserWeather'
import { shallow } from 'enzyme'

describe('UserWeather', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  const mockWeather = {
    summary: 'im weather'
  }
  beforeEach(() => {
    wrapper = shallow(<UserWeather weather={mockWeather} user={mockUser} />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('map props', () => {
    it.skip('should map state to props', () => {

    })

    it.skip('should map dispatch to props', () => {

    })
  })
})