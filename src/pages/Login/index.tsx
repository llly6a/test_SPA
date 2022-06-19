import React from 'react'
import Login from '../../components/Login'
import styles from '../Layout.module.scss'
import { Container, Typography } from '@mui/material'

const LoginPage = () => {
  return (
    <Container maxWidth={'lg'} className={styles.wrapper}>
      <Typography variant={'h1'} className={styles.italic}>
        TEST SPA app
      </Typography>
      <Login />
    </Container>
  )
}

export default LoginPage
