import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { User, JWT } from "../../common/types/user";

//Guest User
const GuestUser: User = {
  id: 0,
  username: "Guest",
  email: "guest@localhost",
  name: "Guest",
  verified: false,
};

const initialState = {
  user: GuestUser,
  access_token: "",
  refresh_token: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      const decoded: JWT = jwtDecode(action.payload.access);
      state.user = {
        id: decoded.user_id,
        username: decoded.username,
        email: decoded.email,
        name: decoded.name,
        verified: decoded.verified,
      };
      state.access_token = action.payload.access;
      state.refresh_token = action.payload.refresh;
      state.isLoggedIn = true;
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload.access;
    },
    logout: () => initialState,
  },
});

export const { setUser, setAccessToken, logout } = userSlice.actions;

export default userSlice.reducer;
