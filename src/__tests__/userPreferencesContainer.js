import React from 'react'
import { UserPreferences, mapDispatchToProps, mapStateToProps } from '../containers/UserPreferences'
import { shallow } from 'enzyme'

describe('UserPreferences', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  beforeEach(() => {
    wrapper = shallow(<UserPreferences user={mockUser} />)
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