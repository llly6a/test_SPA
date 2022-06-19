import React from 'react'
import Quote from '../Quote'
import { QuotesAsset } from '../../../types/quotes'
import { Box, Typography } from '@mui/material'
import CardHeader from '../../common/CardHeader'
import CardContent from '../../common/CardContent'

interface TableProps {
  quotes: QuotesAsset[]
  handleFavorite: (asset: string) => void
}

const Table = ({ quotes, handleFavorite }: TableProps) => {
  return (
    <Box sx={{ width: '75rem' }}>
      <CardHeader>
        <Typography sx={{ ml: '10rem' }}>Валютная пара </Typography>
        <Typography>Котировка </Typography>
        <Typography sx={{ mr: '2.5rem' }}>Дата получения</Typography>
      </CardHeader>
      <CardContent sx={{ '& > div:last-of-type': { borderBottom: 'none' } }}>
        {quotes.map((quoteAsset) => (
          <Quote key={quoteAsset.asset} quote={quoteAsset} handleFavorite={() => handleFavorite(quoteAsset.asset)} />
        ))}
      </CardContent>
    </Box>
  )
}

export default Table
