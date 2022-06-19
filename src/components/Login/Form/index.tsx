import React from 'react'
import { useFormik } from 'formik'
import { LoginRequest } from '../../../types/login'
import * as Yup from 'yup'
import { commonActions } from '../../../types/common'
import { Button } from '@mui/material'
import { ReactComponent as ArrowRight } from '../../../assets/arrow_right.svg'
import Input from '../../common/Input'
import styles from './Form.module.scss'

interface FormProps {
  submit: (args: LoginRequest) => void
  isLoading: boolean
  setError: (errorMessage: string) => void
}

const LoginFormSchema = Yup.object().shape({
  login: Yup.string().email('Некорректный email').required('Email обязателен'),
  password: Yup.string()
    .required('Пароль не введен')
    .matches(
      /^[A-Za-z\d_]{7,}$/,
      'Пароль должен содержать не менее 7 символов, только латинские буквы верхнего и нижнего регистров и цифры, но без спец. символов, кроме "_"'
    ),
})

const Form = ({ submit, isLoading }: FormProps) => {
  const formik = useFormik({
    initialValues: { login: '', password: '' },
    validationSchema: LoginFormSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      submit({ action: commonActions.login, ...values })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.root}>
      <Input title={'Логин'} formik={formik} id={'login'} placeholder={'user@mail.ru'} />
      <Input title={'Пароль'} formik={formik} id={'password'} placeholder={'*********'} type={'password'} />
      <Button sx={{ mt: '5rem' }} variant={'contained'} type={'submit'} disabled={isLoading} disableRipple fullWidth>
        Вход
        <ArrowRight style={{ marginLeft: '.6rem' }} />
      </Button>
    </form>
  )
}

export default Form
