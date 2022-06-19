import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQuery } from '../utils/api'
import { underlineToCamelDeep } from '../utils/caseConverter'
import { QuotesRequest, QuotesResponse } from '../types/quotes'

export const quotesApi = createApi({
  reducerPath: 'quotesApi',
  baseQuery: baseQuery,
  tagTypes: ['quotes-api'],
  endpoints: (builder) => ({
    quotes: builder.mutation<QuotesResponse, QuotesRequest>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      transformResponse: (r: any) => underlineToCamelDeep(r),
    }),
  }),
})

export const { useQuotesMutation } = quotesApi
