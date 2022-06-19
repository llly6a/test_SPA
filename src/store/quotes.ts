import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './index'
import { QuotesAsset } from '../types/quotes'

interface QuotesState {
  quotes: QuotesAsset[]
}

const initialState = { quotes: [] } as QuotesState

const quotesSlice = createSlice({
  name: 'quotesSlice',
  initialState,
  reducers: {
    setFavorite(state, action: PayloadAction<string>) {
      let favoriteIndex = state.quotes.findIndex((quote) => quote.asset === action.payload)

      if (favoriteIndex >= 0) {
        let newQuotes = state.quotes
        let isFavorite = !!newQuotes[favoriteIndex].isFavorite
        newQuotes[favoriteIndex].isFavorite = !isFavorite
        if (state.quotes) {
          state.quotes = newQuotes.sort((a, b) => (a.isFavorite ? -1 : b.isFavorite ? 1 : 0))
        }
      }
    },

    setQuotes(state, action: PayloadAction<QuotesAsset[]>) {
      state.quotes = action.payload
    },
  },
})

export const getQuotes = (state: RootState) => state.quotesSlice.quotes

export const { setFavorite, setQuotes } = quotesSlice.actions
export default quotesSlice
