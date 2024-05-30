import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '#models/authorizationTypes';

type UserReducerType = {
  subscribeEmail: string | null;
  activeSignTab: '1' | '2';
  activeUser: UserType | null;
};

const userReducer = createSlice({
  name: 'user',
  initialState: {
    subscribeEmail: null,
    activeSignTab: '2',
    activeUser: null,
  } as UserReducerType,

  reducers: {
    setSubscribeEmailToStore: (state, action) => {
      state.subscribeEmail = action.payload;
    },
    setIsSignUpActive: (state, action) => {
      state.activeSignTab = action.payload;
    },
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
  },
});

export const { setSubscribeEmailToStore, setIsSignUpActive, setActiveUser } =
  userReducer.actions;

export default userReducer.reducer;
