import React from 'react'
import { Box, styled, SxProps, Typography } from '@mui/material'
import { FormikProps } from 'formik'

const AppInput = styled('input')(({ theme }) => ({
  outline: 'none',
  border: 'solid 1px',
  borderRadius: '.5rem',
  height: '4rem',
  fontSize: 14,
  transition: 'all 100ms ease-in-out',
  width: ' 100%',
  '&:focus': {
    borderColor: theme.palette.primary.main,
  },
  padding: '9px 10px',
}))

interface InputProps {
  title: string
  type?: string
  formik: FormikProps<any>
  id: string
  placeholder?: string
  sx?: SxProps
}

const Input = ({ title, type, id, formik, placeholder, sx }: InputProps) => {
  const isError = !!(formik.touched[id] && formik.errors[id])

  return (
    <Box sx={{ mb: '1.5rem', ...sx }}>
      <Typography sx={{ mb: '.4rem' }}>{title}</Typography>
      <AppInput
        id={id}
        name={id}
        type={type ?? 'text'}
        onChange={formik.handleChange}
        value={formik.values[id]}
        onBlur={(e) => {
          formik.handleBlur(e)
        }}
        placeholder={placeholder}
        sx={{ borderColor: isError ? 'red' : 'primary.main' }}
      />
    </Box>
  )
}

export default Input
