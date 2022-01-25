import { getCurrencyPlaceHolder, getFormattedValue, debounce } from './helper';

test('getCurrencyPlaceholder works correctly', () => {
  const formatting = {
    precision: 2,
    decimal: '.'
  };

  const expectedValue = '0.00';

  expect(getCurrencyPlaceHolder(formatting)).toEqual(expectedValue);
});

test('getFormattedValue works correctly', () => {
  const formatting = {
    precision: 2,
    decimal: '.',
    grouping: ','
  };
  const price = 45000;
  const expectedValue = '45,000.00';
  
  expect(getFormattedValue(price, formatting)).toEqual(expectedValue);
});

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func);
  });

  test('excute just once', () => {
    for(let i = 0; i < 10; i++) {
      debouncedFunc();
    }

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});

