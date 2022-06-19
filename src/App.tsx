import React, { Suspense } from 'react'
import './App.scss'
import AppRoutes from './routes'
import { store } from './store'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Загрузка...</div>}>
          <AppRoutes />
        </Suspense>
      </ThemeProvider>
    </Provider>
  )
}

export default App
