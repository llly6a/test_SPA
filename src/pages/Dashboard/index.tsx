import React from 'react'
import Logout from '../../components/Logout'
import Tabs from '../../components/Tabs'
import styles from '../Layout.module.scss'
import { Box, Container, Typography } from '@mui/material'

const Dashboard = () => {
  return (
    <Container maxWidth={'lg'} className={styles.wrapper}>
      <Box component={'header'} className={styles.header}>
        <Typography variant={'h1'} className={styles.italic}>
          TEST SPA app
        </Typography>
        <Logout />
      </Box>

      <Tabs />
    </Container>
  )
}

export default Dashboard
