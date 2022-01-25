import React from 'react';
import { screen } from '@testing-library/react';
import { getFormattedValue } from '../utility/helper';
import supportedCurrencies from '../mock/data';
import { render } from '../test-utils';
import CurrencyList from './CurrencyList';

describe('Renders Currency List Correctly', () => {
  test('Currency List Correct Amount', () => {
    const mockList = [
      {
        code: 'USD',
        price: 123123.456
      },
      {
        code: 'BTC',
        price: 1.123123123
      }
    ];

    render(<CurrencyList list={mockList} />);

    const listItems = screen.getAllByTestId('currency-list-item');
    
    expect(listItems).toHaveLength(mockList.length);
  });

  test('Currency List Correct Values', () => {
    const mockList = [
      {
        code: 'USD',
        price: 123123.456
      }
    ];

    render(<CurrencyList list={mockList} />);

    const valueText = screen.getByTestId('currency-value-text');
    const codeText = screen.getByTestId('currency-code-text');
  
    const formatting = supportedCurrencies.find(cur => cur.code === mockList[0].code).formatting;
    
    expect(valueText).toHaveTextContent(getFormattedValue(mockList[0].price, formatting));
    expect(codeText).toHaveTextContent(mockList[0].code);
  });
});
