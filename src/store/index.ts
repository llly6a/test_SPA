import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import userSlice from './user'
import { loginApi } from '../api/login'
import { quotesApi } from '../api/quotes'
import quotesSlice from './quotes'
import { historyApi } from '../api/history'

export const store = configureStore({
  reducer: {
    //api
    [loginApi.reducerPath]: loginApi.reducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
    //slices
    [userSlice.name]: userSlice.reducer,
    [quotesSlice.name]: quotesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware, quotesApi.middleware, historyApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
