import React from 'react';
import { screen } from '@testing-library/react';

import CurrencyInput from './CurrencyInput';
import { render } from '../test-utils';


describe('CurrencyInput', () => {
  let onSelected;
  let onChangeAmount;
  beforeAll(() => {
    onSelected = jest.fn();
    onChangeAmount = jest.fn();
  });

  test('init render', async () => {
    render(
      <CurrencyInput
        selected="USD"
        amount={130}
        onChangeAmount={onChangeAmount}
        onSelected={() => onSelected()}
      />);

    const TextInput = screen.getByTestId('text-input');
    expect(TextInput).toBeInTheDocument();

    TextInput.focus();

    const NumberInput = screen.getByTestId('number-input');
    expect(NumberInput).toBeInTheDocument();

    const CurrencySelect = screen.getByTestId('currency-select');
    expect(CurrencySelect).toBeInTheDocument();
    expect(CurrencySelect).toHaveValue('USD');

    expect(onSelected).toHaveBeenCalledTimes(0);
  });
});
