import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    addUser: (_, action) => action.payload,
    removeUser: () => null,
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
