import React, { ReactChild } from 'react'
import { Box, SxProps } from '@mui/material'

interface CardContentProps {
  children: ReactChild | ReactChild[]
  sx?: SxProps
}

const CardContent = ({ children, sx }: CardContentProps) => {
  return (
    <Box
      sx={{
        pt: '2rem',
        pl: '.5rem',
        pr: '.5rem',
        pb: '3rem',
        bgcolor: 'background.paper',
        borderRadius: '0 0 2rem 2rem',
        overflowY: 'auto',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default CardContent
