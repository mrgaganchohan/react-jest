import React from 'react';
import  { shallow } from 'enzyme';
// don't need brackets around it as Footer is the default thing.
import  Footer  from './Footer';
import App from './App';

it('should render customer service phone number', () => {
    const wrapper = shallow(<Footer />);
    const span = wrapper.find('span');
    const result = span.text();

    expect(result).toBe('Customer Service: 1-800-555-444');
})