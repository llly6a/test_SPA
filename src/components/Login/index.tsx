import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useLoginMutation } from '../../api/login'
import { useAppDispatch } from '../../store/hooks'
import { setIsAuth } from '../../store/user'
import { LoginRequest } from '../../types/login'
import { commonResponseResults } from '../../types/common'
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import styles from './Login.module.scss'

const Login = () => {
  const dispatch = useAppDispatch()
  const [login, { data, isLoading, error }] = useLoginMutation()
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  function handleError(errorMessage?: string) {
    setErrorMessage(errorMessage)
  }

  useEffect(() => {
    if (!data) return
    switch (data.result) {
      case commonResponseResults.ok: {
        dispatch(setIsAuth(true))
        return
      }
      case commonResponseResults.error: {
        handleError(data.error)
      }
    }
    //eslint-disable-next-line
  }, [data])

  useEffect(() => {
    //common errors
    if (!error) return
    if ('error' in error) {
      handleError(error.error)
    }
  }, [error])

  function handleSubmit(values: LoginRequest) {
    if (errorMessage) {
      handleError('')
    }
    login(values)
  }

  return (
    <Card elevation={0} className={styles.card}>
      <CardHeader sx={{ bgcolor: 'primary.main' }} className={styles.card_header} title={'Вход в личный кабинет'} />
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '7rem', '&:last-child': { pb: 0 } }}
      >
        <Form submit={handleSubmit} isLoading={isLoading} setError={handleError} />
        <Box sx={{ height: '10rem', width: '25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <Typography color={'error'} sx={{ textAlign: 'center', fontSize: '1.2rem', mt: '.7rem', maxWidth: '25rem' }}>
            {errorMessage}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Login
