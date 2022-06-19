import React, { lazy } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { getIsAuth } from '../store/user'
import Quotes from '../components/Quotes'
import Converter from '../components/Converter'
import History from '../components/History'
const Dashboard = lazy(() => import('../pages/Dashboard'))
const LoginPage = lazy(() => import('../pages/Login'))

const AppRoutes = () => {
  const isAuth = useAppSelector(getIsAuth)

  return (
    <BrowserRouter basename='/'>
      <Routes>
        {isAuth ? (
          <>
            <Route path='auth/*' element={<Navigate to='/dashboard/quotes' />} />
            <Route path='dashboard/*' element={<Dashboard />}>
              <Route path='quotes' element={<Quotes />} />
              <Route path='converter' element={<Converter />} />
              <Route path='history' element={<History />} />
              <Route path='*' element={<Navigate to='/dashboard/quotes' />} />
            </Route>
            <Route path='*' element={<Navigate to='/dashboard/quotes' />} />
          </>
        ) : (
          <>
            <Route path='auth/*' element={<LoginPage />} />
            <Route path='*' element={<Navigate to='/auth' />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
