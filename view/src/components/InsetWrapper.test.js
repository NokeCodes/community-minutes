import React from 'react';
import ReactDOM from 'react-dom';
import InsetWrapper from './InsetWrapper';

it('InsetWrapper renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InsetWrapper />, div);
});

it('InsetWrapper receives data', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InsetWrapper data={[{data:1},{data:2}]} title='title' />, div)
})
