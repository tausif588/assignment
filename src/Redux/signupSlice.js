import { createSlice } from '@reduxjs/toolkit'

let initialState = [
    { useremail:"tausif123@gmail.com",
    pass:"123456"}
]

export const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    signupuser: (state, action) => {
        console.log(action.payload);
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { signupuser, } = signupSlice.actions

export default signupSlice.reducer