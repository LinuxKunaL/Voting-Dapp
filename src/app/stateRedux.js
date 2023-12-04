import { createSlice } from "@reduxjs/toolkit";

const stateRedux = createSlice({
  initialState: "0x000000",
  name: "EthAccount",
  reducers: {
    setAddress: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setAddress } = stateRedux.actions;
export default stateRedux.reducer;
