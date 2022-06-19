import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    htmlFontSize: 10,
    h1: {
      fontSize: 24,
      fontWeight: 700,
    },
    h2: {
      fontSize: 20,
      fontWeight: 400,
    },
    button: {
      fontSize: 20,
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#E1E1E1',
          scrollbarColor: '#BCC2C7 #FFF0',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#FFF0',
            width: 8,
            paddingRight: '1rem',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#BCC2C7',
            minHeight: 24,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#BCC2C7',
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#BCC2C7',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#BCC2C7',
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#BCC2C7',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: '2rem',
          color: 'white',
          textAlign: 'center',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 16,
          borderColor: '#111755',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
        root: {
          height: '4rem',
          minHeight: '4rem',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
          fontSize: '1.4rem',
          fontWeight: 400,
          height: '4rem',
          minHeight: '4rem',
          minWidth: '18rem',
          backgroundColor: '#FFF',
          color: '#1A237E',
          '&.Mui-selected': {
            backgroundColor: '#1A237E',
            color: '#FFF',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:active': {
            backgroundColor: 'transparent',
          },
        },
        sizeMedium: {
          fontSize: 16,
          lineHeight: '2.2rem',
          fontWeight: 400,
          height: 40,

          maxHeight: 40,
          borderRadius: '2rem',
        },
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#232FA9',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#111755',
          },
          textTransform: 'unset',
        },
      },
    },
  },
  palette: {
    primary: { dark: '#111755', main: '#1A237E', light: '#232FA9' },
    error: { main: '#D32F2F' },
    background: {
      default: '#E1E1E1',
    },
  },
})
