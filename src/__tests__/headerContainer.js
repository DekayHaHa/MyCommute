import React from 'react'
import { Header, mapDispatchToProps, mapStateToProps } from '../containers/Header'
import { shallow } from 'enzyme'

describe('Header', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  beforeEach(() => {
    wrapper = shallow(<Header user={mockUser} />)
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