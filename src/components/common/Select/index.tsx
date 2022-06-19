import { styled } from '@mui/material'

export const AppSelect = styled('select')(({ theme }) => ({
  outline: 'none',
  border: 'solid 1px',
  borderRadius: '.5rem',
  height: '4rem',
  fontSize: 16,
  lineHeight: 28,
  transition: 'all 100ms ease-in-out',
  width: '8rem',
  '&:focus': {
    borderColor: theme.palette.primary.main,
  },
  padding: '9px 10px',
  '& option': {
    fontSize: 16,
    lineHeight: 28,
  },
}))
