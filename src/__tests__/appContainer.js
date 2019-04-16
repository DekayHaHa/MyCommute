import React from 'react'
import { App, mapDispatchToProps, mapStateToProps } from '../containers/App'
import { shallow } from 'enzyme'
import { getUser } from '../thunks/getUser'

jest.mock('../thunks/getUser')

describe('App', () => {
  let wrapper;
  const mockUser = { id: 1, userName: 'mahk' }
  beforeEach(() => {
    wrapper = shallow(<App user={mockUser} />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('map props', () => {
    it('should map user to props', () => {
      const mockState = {
        user: { id: 1, userName: 'mahk' },
        notMe: 'shouldnt show'
      }
      const expectedState = {
        user: { id: 1, userName: 'mahk' }
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    })

    it('should map getUser to props', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getUser();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getUser();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})