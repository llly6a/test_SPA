import { Box, Typography } from '@mui/material'
import React from 'react'

interface ResultProps {
  result: number
}

const Result = ({ result }: ResultProps) => {
  return (
    <Box sx={{ mt: '2.5rem', height: '5rem', alignSelf: 'flex-start', ml: '10rem' }}>
      {!!result && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: '1.2rem', mb: '.2rem' }}>Итого</Typography>
          <Typography variant={'h2'}>{result}</Typography>
        </Box>
      )}
    </Box>
  )
}

export default Result
