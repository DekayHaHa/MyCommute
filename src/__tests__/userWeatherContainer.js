import React from 'react'
import { UserWeather, mapStateToProps } from '../containers/UserWeather'
import { shallow } from 'enzyme'

describe('UserWeather', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  const mockWeather = {
    today: {
      summary: 'im weather'
    }
  }
  beforeEach(() => {
    wrapper = shallow(<UserWeather weather={mockWeather} user={mockUser} />)
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
        weather: { id: 1 },
        notMe: 'shouldnt show'
      }
      const expectedState = {
        user: { id: 1, userName: 'mahk' },
        weather: { id: 1 },
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    })
  })
})