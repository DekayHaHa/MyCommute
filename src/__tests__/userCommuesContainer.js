import React from 'react'
import { userCommutes, mapDispatchToProps, mapStateToProps } from '../containers/userCommutes'
import { shallow } from 'enzyme'

describe('userCommutes', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  beforeEach(() => {
    wrapper = shallow(<userCommutes user={mockUser} />)
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