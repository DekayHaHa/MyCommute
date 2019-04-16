import React from 'react'
import { UserNavBar, mapDispatchToProps, mapStateToProps } from '../containers/UserNavBar'
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
    it.skip('should map state to props', () => {

    })

    it.skip('should map dispatch to props', () => {

    })
  })
})