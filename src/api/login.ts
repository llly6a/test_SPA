import { createApi } from '@reduxjs/toolkit/query/react'
import { underlineToCamelDeep } from '../utils/caseConverter'
import { LoginRequest } from '../types/login'
import { baseQuery } from '../utils/api'
import { CommonResponse } from '../types/common'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: baseQuery,
  tagTypes: ['login-api'],
  endpoints: (builder) => ({
    login: builder.mutation<CommonResponse, LoginRequest>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      transformResponse: (r: any) => underlineToCamelDeep(r),
    }),
  }),
})

export const { useLoginMutation } = loginApi
