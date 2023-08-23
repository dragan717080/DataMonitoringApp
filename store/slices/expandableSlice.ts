import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExpandableState } from '@/app/interfaces/redux';

const initialState: ExpandableState = {
  expandedIndex: 0,
};

const expandableSlice = createSlice({
  name: 'expandable',
  initialState,
  reducers: {
    setExpandedIndex: (state, action: PayloadAction<number>) => {
      state.expandedIndex = action.payload;
    },
  },
});

export const { setExpandedIndex } = expandableSlice.actions;

export default expandableSlice.reducer;
