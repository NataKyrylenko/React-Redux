import { createAppSlice } from "store/createAppSlice"
import { UserData, UsersSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const usersInitialState: UsersSliceState = {
  users: [],
}

export const usersSlice = createAppSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: create => ({
    addUser: create.reducer(
      (state: UsersSliceState, action: PayloadAction<UserData>) => {
        state.users = [...state.users, action.payload]
      },
    ),
    deleteUsers: create.reducer((state: UsersSliceState) => {
      state.users = []
    }),
  }),
  selectors: {
    users: (state: UsersSliceState) => state.users,
  },
})

export const usersSliseActions = usersSlice.actions
export const usersSliseSelectors = usersSlice.selectors
