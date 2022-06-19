import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_HOST,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json;charset=UTF-8')
    headers.set('Authorization', 'anonymous')
    return headers
  },
})
