import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { CoderCard } from '../components/CoderCard'

describe('CoderCard', () => {
  let wrapper
  
  const coder1 = {
    name: "bob",
    initials: "BOB",
    summary: "dev",
    image: "",
    skills: "d,e,v",
    links: [],
  }
  const coder2 = {
    name: "bill",
    initials: "BILL",
    summary: "evl",
    image: "",
    skills: "e,v,l",
    links: [],
  }
  const coder3 = {
    name: "bobby",
    initials: "BOBBY",
    summary: "oper",
    image: "",
    skills: "o,p,e,r",
    links: [],
  }
  const coders = [coder1, coder2, coder3]

  beforeEach(() => {
    wrapper = coders.map(coder => shallow(<CoderCard {...coder} />).dive())
  })

  describe('on start', () => {

    it('load the images', () => {
      for (let w of wrapper) {
        const image = w.find('Card').getElement().props.children[0].props.children
        expect(image === (coders[wrapper.indexOf(w)].image))
      }
    })

    it('load the links', () => {
      for (let w of wrapper) {
        const _links = w.find('CardBody').getElement().props.children[0]
        for (let _link of _links) {
          expect(coders[wrapper.indexOf(w)].links.includes(_link))
        }
      }
    })

    it('load the names', () => {
      for (let w of wrapper) {
        const name = w.find('CardBody').getElement().props.children[1].props.children
        expect(name === (coders[wrapper.indexOf(w)].name))
      }
    })

    it('load the initials', () => {
      for (let w of wrapper) {
        const initials = w.find('CardBody').getElement().props.children[2].props.children
        expect(initials === (coders[wrapper.indexOf(w)].initials))
      }
    })

    it('load the summaries', () => {
      for (let w of wrapper) {
        const summary = w.find('CardBody').getElement().props.children[3].props.children
        expect(summary === (coders[wrapper.indexOf(w)].summary))
      }
    })

    it('load the skills', () => {
      for (let w of wrapper) {
        const skills = w.find('CardBody').getElement().props.children[4].props.children
        expect(skills === (coders[wrapper.indexOf(w)].skills))
      }
    })

    it('should render 3 coders', () => {
      expect(wrapper).toHaveLength(3)
    })
  
    it('should render correctly one coder', () => {
      const component = shallow(<CoderCard {...coder1} />)
      expect(component).toMatchSnapshot()
    })

    it('renders without crashing', () => {
      const div = document.createElement("div");
      ReactDOM.render(<CoderCard {...coder1} />, div);
      ReactDOM.unmountComponentAtNode(div);
    })

  })

})
