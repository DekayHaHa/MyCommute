import React from 'react'
import { Header, mapStateToProps, mapDispatchToProps } from '../containers/Header'
import { shallow } from 'enzyme'
import { signUserOut } from '../thunks/signUserOut';

jest.mock('../thunks/signUserOut')

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
        currentWeather: {},
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    })

    it('should map dispatch to props', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = signUserOut()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.signUserOut()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})