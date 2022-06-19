import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './index'

interface UserState {
  isAuthenticated: boolean
}

const initialState = { isAuthenticated: !!localStorage.getItem('isAuth') } as UserState

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      localStorage.setItem('isAuth', action.payload ? 'true' : '')
      state.isAuthenticated = action.payload
    },
  },
})

export const getIsAuth = (state: RootState) => state.userSlice.isAuthenticated

export const { setIsAuth } = userSlice.actions
export default userSlice
