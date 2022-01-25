import reducer,  { set, reset, fetching } from './currencySlice.js';

describe('currencySlice', () => {
  test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currencies: [],
      fetching: false
    });
  });

  test('fetching action works correctly', () => {
    expect(reducer(undefined, fetching())).toEqual({
      fetching: true,
      currencies: [],
    });
  });

  test('set action works correctly', () => {
    const payloads = [
      'test is being processed'
    ];

    expect(reducer(undefined, set(payloads))).toEqual({
      fetching: false,
      currencies: ['test is being processed'],
    });
  });

  test('reset action works correctly', () => {
    expect(reducer(undefined, reset)).toEqual({
      fetching: false,
      currencies: [],
    });
  });
});
