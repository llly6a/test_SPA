import React, { ReactChild } from 'react'
import { Box, SxProps } from '@mui/material'

interface CardHeaderProps {
  children: ReactChild | ReactChild[]
  sx?: SxProps
}

const CardHeader = ({ children, sx }: CardHeaderProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        height: '6rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        '& .MuiTypography-root': { flex: '1' },
        borderTopRightRadius: '2rem',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default CardHeader
