import React from 'react'
import { UserCommutes, mapStateToProps } from '../containers/UserCommutes'
import { shallow } from 'enzyme'

describe('userCommutes', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  const mockWeather = {
    today: {},
    current: {}
  }
  const mockCommutes = { id: 1, tram: {} }
  const mockPref = { id: 1, morning: '0800' }
  beforeEach(() => {
    wrapper = shallow(<UserCommutes pref={mockPref} commutes={mockCommutes} weather={mockWeather} user={mockUser} />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('map props', () => {
    it('should map state to props', () => {
      const mockState = {
        user: { id: 1, userName: 'mahk' },
        error: 'im wrong',
        pref: { id: 1 },
        commutes: { id: 1 },
        weather: { current: {} },
        notMe: 'shouldnt show'
      }
      const expectedState = {
        user: { id: 1, userName: 'mahk' },
        error: 'im wrong',
        pref: { id: 1 },
        commutes: { id: 1 },
        weather: { current: {} },
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    })
  })
})