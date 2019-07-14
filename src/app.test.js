'use strict';

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';

import App from './app.js';

describe('The amazing React App', () => {
    it('works', () => {
        let app = mount(<App />);
        expect(app.find('h4').text()).toBe('0');
    });
});

