import { createAction, createReducer } from '@reduxjs/toolkit';

// action
export const filterList = createAction('filterList');

// selector
export const getFilterName = state => state.filter.input;

// reducer
const initialState = {
  input: '',
};

const filterReducer = createReducer(initialState, builder => {
  builder.addCase(filterList, (state, action) => {
    state.input = action.payload;
  });
});

export default filterReducer;
