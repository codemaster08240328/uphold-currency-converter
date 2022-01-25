import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencies: [],
  fetching: false
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    fetching: (state) => {
      state.fetching = true;
    },
    set: (state, { payload }) => {
      state.currencies = payload;
      state.fetching = false;
    },
    reset: (state) => {
      state.currencies = initialState.currencies;
    }
  }
});

export const { set, reset, fetching } = currencySlice.actions;

export default currencySlice.reducer;
