import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { App } from '../containers/App'

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render correctly with no props', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  })

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  })
})
