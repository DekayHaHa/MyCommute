import React from 'react'
import { Login, mapDispatchToProps, mapStateToProps } from '../containers/Login'
import { shallow } from 'enzyme'
import { getUser } from '../thunks/getUser'

jest.mock('../thunks/getUser')

describe('Login', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  beforeEach(() => {
    wrapper = shallow(<Login user={mockUser} />)
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
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    })

    it('should map dispatch to props', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getUser()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getUser()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})