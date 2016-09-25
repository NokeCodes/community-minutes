import React from 'react';
import ReactDOM from 'react-dom';
import Meetings from './Meetings';

it('Meetings renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Meetings />, div);
});
