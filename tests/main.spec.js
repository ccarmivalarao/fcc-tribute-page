import React from 'react';
import {render} from 'react-dom'
import { mount, shallow } from 'enzyme';

import App from '../src/modules/main';

jest.mock('react-dom');

describe('App', () => {
  const component = mount(<App debug />);
  it('should render the App component correctly', () => {
    const app = shallow(<App debug />);
    expect(app).toMatchSnapshot();
  });

  it('should have an element with a corresponding id="main"', () => {
    expect(component.find("#main")).toHaveLength(1);
  });

  it('should have an element with a corresponding with an id of title, which contains the subject of the tribute page', () => {
    expect(component.contains([<h1 id="title">Wes Anderson</h1>])).toEqual(true);
  });

  it('should have a div element with a corresponding id="img-div"', () => {
    expect(component.exists("#img-div")).toEqual(true);
  });

  it('should have an img element with a corresponding id="image" within #img-div', () => {
    expect(component.exists("#img-div img#image")).toEqual(true);
  });

  it('should have an element with a corresponding id="img-caption" withing #img-div', () => {
    expect(component.exists("#img-div #img-caption")).toEqual(true);
  });

  it('should have an element with a corresponding id="tribute-info"', () => {
    expect(component.find("#tribute-info")).toHaveLength(1);
  });

  it('should have an anchor element with an id "tribute-link', () => {
    expect(component.exists("#tribute-link")).toEqual(true);
  });


});
