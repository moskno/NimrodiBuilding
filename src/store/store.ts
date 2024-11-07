// FILL HERE 3.3
import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "../store/floorreducer";

const store = configureStore({
  reducer: {
    floor: floorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export default store;
