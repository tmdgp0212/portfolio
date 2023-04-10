import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refs: {
    introEl: null,
    projectEl: null,
    contactEl: null,
  },
};

const refSlice = createSlice({
  name: "ref",
  initialState,
  reducers: {
    regRef: (state, action) => {
      return {
        refs: {
          ...state.refs,
          [action.payload.name]: action.payload.ref.current,
        },
      };
    },
  },
});

export const { regRef } = refSlice.actions;
export default refSlice.reducer;
