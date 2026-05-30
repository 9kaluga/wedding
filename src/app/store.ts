import { configureStore } from "@reduxjs/toolkit";
import rsvpReducer from "../features/rsvp/rsvpSlice";

export const store = configureStore({
  reducer: {
    rsvp: rsvpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
