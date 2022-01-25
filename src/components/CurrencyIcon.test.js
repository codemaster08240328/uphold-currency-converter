import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import CurrencyIcon from './CurrencyIcon';

describe('Renders CurrencyIcon Correctly', () => {
  test('Currency Icon pass props', () => {
    render(<CurrencyIcon currency="USD" />);

    const currencyIcon = screen.getByTestId('currency-icon');
    expect(currencyIcon.src).toContain('USD');
  });
});
