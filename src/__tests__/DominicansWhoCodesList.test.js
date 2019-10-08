import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { DominicansWhoCodesList } from '../containers/DominicansWhoCodesList'

describe('DominicansWhoCodesList', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<DominicansWhoCodesList />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render correctly with no props', () => {
    const component = shallow(<DominicansWhoCodesList />);
    expect(component).toMatchSnapshot();
  })
  
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<DominicansWhoCodesList debug />);
    expect(component).toMatchSnapshot();
  })

})

