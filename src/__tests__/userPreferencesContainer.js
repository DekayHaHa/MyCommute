import React from 'react'
import { UserPreferences, mapStateToProps } from '../containers/UserPreferences'
import { shallow } from 'enzyme'

describe('UserPreferences', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  const mockPref = { id: 1, tram: { temp: 80 } }
  beforeEach(() => {
    wrapper = shallow(<UserPreferences pref={mockPref} user={mockUser} />)
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
        notMe: 'shouldnt show'
      }
      const expectedState = {
        user: { id: 1, userName: 'mahk' },
        error: 'im wrong',
        pref: { id: 1 },
        commutes: { id: 1 },
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    })
  })
})