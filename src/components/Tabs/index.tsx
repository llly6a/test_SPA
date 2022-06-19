import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Box, Tab, Tabs as MuiTabs } from '@mui/material'

const Tabs = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const activeTab = location.pathname.split('/')[2]

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    navigate(newValue)
  }

  return (
    <Box sx={{ margin: '0 auto', width: '100%' }}>
      <MuiTabs
        value={activeTab}
        onChange={handleChange}
        aria-label='app tabs'
        sx={{
          maxWidth: '54rem',
          '& .MuiTab-root': {
            border: '1px solid',
            borderColor: '#1A237E',
          },
          '& .MuiTab-root:first-of-type': {
            borderRightWidth: 0,
            borderTopLeftRadius: '2rem',
          },
          '& .MuiTab-root:last-of-type': {
            borderTopRightRadius: '2rem',
            borderLeftWidth: 0,
          },
        }}
      >
        <Tab label='Курсы валют' value={'quotes'} disableRipple />
        <Tab label='Конвертор' value={'converter'} disableRipple />
        <Tab label='История' value={'history'} disableRipple />
      </MuiTabs>
      <Outlet />
    </Box>
  )
}

export default Tabs
