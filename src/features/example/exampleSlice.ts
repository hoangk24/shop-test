/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  isLoading: boolean;
}

const example = createSlice({
  name: "example",
  initialState: {} as State,
  reducers: {
    setLoading(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = example.actions;
export default example.reducer;
