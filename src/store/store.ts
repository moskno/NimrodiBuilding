// FILL HERE 3.3
import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./floorreducer";
import roleReducer from "./rolereducer";

const store = configureStore({
  reducer: {
    floor: floorReducer,
    role: roleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export default store;
