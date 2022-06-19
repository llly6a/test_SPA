import React, { useCallback } from 'react'
import Table from './Table'
import { useAppDispatch } from '../../store/hooks'
import { setFavorite } from '../../store/quotes'
import { useQuotes } from '../hooks/useQuotes'

const Quotes = () => {
  const dispatch = useAppDispatch()
  const { quotes } = useQuotes()

  const handleFavorite = useCallback(
    (asset: string) => {
      dispatch(setFavorite(asset))
    },
    //eslint-disable-next-line
    []
  )

  return <Table quotes={quotes} handleFavorite={handleFavorite} />
}

export default Quotes
