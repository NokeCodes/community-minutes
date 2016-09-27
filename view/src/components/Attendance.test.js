import React from 'react';
import ReactDOM from 'react-dom';
import Attendance from './Attendance';

it('Attendance renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Attendance />, div);
});
