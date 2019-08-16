import React from 'react';
import { render } from 'react-dom';
import App from './App';

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);
render(<App/>, appContainer);
