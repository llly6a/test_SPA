import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQuery } from '../utils/api'
import { underlineToCamelDeep } from '../utils/caseConverter'
import { HistoryRequest, HistoryResponse } from '../types/history'

export const historyApi = createApi({
  reducerPath: 'historyApi',
  baseQuery: baseQuery,
  tagTypes: ['quotes-api'],
  endpoints: (builder) => ({
    history: builder.mutation<HistoryResponse, HistoryRequest>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      transformResponse: (r: any) => underlineToCamelDeep(r),
    }),
  }),
})

export const { useHistoryMutation } = historyApi
