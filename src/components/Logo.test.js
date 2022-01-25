import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import { Logo } from './Logo';

describe('Renders CurrencyIcon Correctly', () => {
  test('Currency Icon pass props', () => {
    render(<Logo />);

    const logoIcon = screen.getByTestId('logo-icon');
    expect(logoIcon.src).toContain('logo');
  });
});
