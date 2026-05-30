export interface GuestInfo {
  name: string;
  email: string;
  phone: string;
  attending: boolean | null;
  guestsCount: number;
  message: string;
}

export interface RSVPSliceState {
  guestInfo: GuestInfo;
  submitted: boolean;
  loading: boolean;
  error: string | null;
}
