import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth:false
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    LoginUser:(state) => {
      state.isAuth = true;
      
    },
    LogoutUser:(state) => {
      state.isAuth = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { LoginUser, LogoutUser } = authSlice.actions

export default authSlice.reducer