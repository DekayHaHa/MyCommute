import React from 'react'
import { UserNavBar, mapStateToProps } from '../containers/UserNavBar'
import { shallow } from 'enzyme'

describe('UserNavBar', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  beforeEach(() => {
    wrapper = shallow(<UserNavBar user={mockUser} />)
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
        user: { id: 1, userName: 'mahk' }
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    })
  })
})