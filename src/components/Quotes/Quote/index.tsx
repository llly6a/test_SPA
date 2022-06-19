import React from 'react'
import { QuotesAsset } from '../../../types/quotes'
import { Box, IconButton, Typography } from '@mui/material'
import { ReactComponent as StarFilled } from '../../../assets/star_filled.svg'
import { ReactComponent as StarOutlined } from '../../../assets/star_outlined.svg'

interface QuoteProps {
  quote: QuotesAsset
  handleFavorite: () => void
}

const Quote = ({ quote, handleFavorite }: QuoteProps) => {
  function setIsFavorite() {
    handleFavorite()
  }

  return (
    <Box
      sx={{
        pt: '1rem',
        pb: '1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '1px solid',
        borderBottomColor: 'background.default',
      }}
    >
      <IconButton sx={{ ml: '1.5rem', mr: '3rem' }} onClick={() => setIsFavorite()}>
        {quote.isFavorite ? <StarFilled /> : <StarOutlined />}
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          '& .MuiTypography-root': { flex: '1' },
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography variant={'h2'}>{quote.asset}</Typography>
        <Typography variant={'h2'}>{quote.quote}</Typography>
        <Typography variant={'h2'}>{quote.startDate}</Typography>
      </Box>
    </Box>
  )
}

export default Quote
