import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

describe('Renders App Correctly', () => {
  test('header element renders', () => {
    render(<Provider store={store}><App /></Provider>);
    const headerElement = screen.getByText(/Currency Converter/i);
    expect(headerElement).toBeInTheDocument();
  });
});
