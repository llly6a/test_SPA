import React from 'react'
import { useAppDispatch } from '../../store/hooks'
import { setIsAuth } from '../../store/user'
import { Button } from '@mui/material'

const Logout = () => {
  const dispatch = useAppDispatch()

  function handleLogout() {
    dispatch(setIsAuth(false))
  }

  return (
    <Button onClick={() => handleLogout()} variant={'outlined'} disableRipple>
      Выход
    </Button>
  )
}

export default Logout
