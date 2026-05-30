import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GuestInfo, RSVPSliceState } from "./types";

const initialState: RSVPSliceState = {
  guestInfo: {
    name: "",
    email: "",
    phone: "",
    attending: null,
    guestsCount: 1,
    message: "",
  },
  submitted: false,
  loading: false,
  error: null,
};

const rsvpSlice = createSlice({
  name: "rsvp",
  initialState,
  reducers: {
    setGuestInfo(state, action: PayloadAction<Partial<GuestInfo>>) {
      state.guestInfo = { ...state.guestInfo, ...action.payload };
    },
    submitRSVPStart(state) {
      state.loading = true;
      state.error = null;
    },
    submitRSVPFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    submitRSVPSuccess(state) {
      state.loading = false;
      state.submitted = true;
    },
    resetRSVP(state) {
      state.guestInfo = initialState.guestInfo;
      state.submitted = false;
    },
  },
});

export const {
  setGuestInfo,
  submitRSVPStart,
  submitRSVPFailure,
  submitRSVPSuccess,
  resetRSVP,
} = rsvpSlice.actions;

export default rsvpSlice.reducer;
