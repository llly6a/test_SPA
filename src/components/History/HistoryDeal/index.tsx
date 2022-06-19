import React from 'react'
import { Deal } from '../../../types/history'
import { Box, Typography } from '@mui/material'

interface DealProps {
  deal: Deal
}

const HistoryDeal = ({ deal }: DealProps) => {
  const startDate = deal.startDate.split(' ')
  const finishDate = deal.finishDate.split(' ')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& .MuiTypography-root': { flex: '1', fontSize: '1.8rem', pt: '1rem', pb: '1rem' },
      }}
    >
      <Typography>{deal.asset}</Typography>
      <Typography>{startDate[1].slice(0, 5) + ' ' + startDate[0].slice(2).replaceAll('-', '.')}</Typography>
      <Typography>{deal.startQuote}</Typography>
      <Typography>{finishDate[1].slice(0, 5) + ' ' + finishDate[0].slice(2).replaceAll('-', '.')}</Typography>
      <Typography>{deal.finishQuote}</Typography>
      <Typography>{deal.profit}</Typography>
    </Box>
  )
}

export default HistoryDeal
