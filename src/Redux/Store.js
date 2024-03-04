import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './authSlice'
import SignupSlice from './signupSlice'
export const store = configureStore({
  reducer: {
    authSlice:AuthSlice,
    signupSlice:SignupSlice
  },
})