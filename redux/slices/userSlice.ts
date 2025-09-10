import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  username: "",
  uid: "",
  email: "",

}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.name = action.payload.name
      state.username = action.payload.username
      state.uid = action.payload.uid
      state.email = action.payload.email
    },
    signOutUser: (state) => {
      state.name = ""
      state.username = ""
      state.uid = ""
      state.email = ""
    }
  }
});

export const {
  signInUser,
  signOutUser
  
} = userSlice.actions

export default userSlice.reducer








// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     name: "",
//     username: "",
//     email: "",
//     uid: "",

// }

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     signInUser: (state, action) => {
//         state.name = action.payload.name
//         state.username = action.payload.username
//         state.email = action.payload.email
//         state.uid = action.payload.uid
//     },
//     signOutUser: (state) => {
//         state.name = ""
//         state.username = ""
//         state.email = ""
//         state.uid = ""
//     }
//   }
// });

// export const {
//     signInUser,
//     signOutUser
// } = userSlice.actions

// export default userSlice.reducer