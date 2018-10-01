import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../src/modules/main';

describe('App', () => {
  it('should render the App component correctly', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });

  it('should have an element with a corresponding id="main"', () => {
    const component = shallow(<App />);
    expect(component.find("#main")).toHaveLength(1);
  });

  it('should have an element with a corresponding with an id of title, which contains the subject of the tribute page', () => {
    const component = mount(<App />);
    expect(component.contains([<h1 id="title">Wes Anderson</h1>])).toEqual(true);
  });

  it('should have a div element with a corresponding id="img-div"', () => {
    const component = mount(<App />);
    expect(component.exists("#img-div")).toEqual(true);
  });

  it('should have an img element with a corresponding id="image" within #img-div', () => {
    const component = mount(<App />);
    expect(component.exists("#img-div img#image")).toEqual(true);
  });

  it('should have an element with a corresponding id="img-caption" withing #img-div', () => {
    const component = mount(<App />);
    expect(component.exists("#img-div #img-caption")).toEqual(true);
  });

  it('should have an element with a corresponding id="tribute-info"', () => {
    const component = mount(<App />);
    expect(component.find("#tribute-info")).toHaveLength(1);
  });

  it('should have an anchor element with an id "tribute-link', () => {
    const component = mount(<App />);
    expect(component.exists("#tribute-link")).toEqual(true);
  });


});
