import { configureStore } from "@reduxjs/toolkit";
import stateRedux from "./stateRedux";

const store = configureStore({
  reducer: {
    EthAccount: stateRedux,
  },
});

export default store;
