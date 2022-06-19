import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getQuotes, setQuotes } from '../../store/quotes'
import { useQuotesMutation } from '../../api/quotes'
import { useEffect } from 'react'
import { commonActions } from '../../types/common'

export const useQuotes = () => {
  const dispatch = useAppDispatch()
  const quotes = useAppSelector(getQuotes)

  const [fetchQuotes, { data, isLoading, error }] = useQuotesMutation()

  useEffect(() => {
    if (quotes?.length) return

    fetchQuotes({ action: commonActions.quote })
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!data?.assets) return

    dispatch(setQuotes(data.assets))
    //eslint-disable-next-line
  }, [data])

  return { quotes, isLoading, error }
}
