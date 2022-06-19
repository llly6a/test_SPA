import React, { ChangeEvent, useState } from 'react'
import { useFormik } from 'formik'
import { ConverterPairs } from '../../../types/converter'
import Input from '../../common/Input'
import styles from './Form.module.scss'
import { Button } from '@mui/material'
import { AppSelect } from '../../common/Select'

interface FormProps {
  pairs: ConverterPairs
  setResult: (r: number) => void
}

const Form = ({ pairs, setResult }: FormProps) => {
  const [leftCurrency, setLeftCurrency] = useState(Object.keys(pairs)[0])
  const [rightCurrency, setRightCurrency] = useState(pairs[leftCurrency][0])

  const formik = useFormik({
    initialValues: { count: 0 },
    onSubmit: (values) => {
      let result = values.count * rightCurrency.multiplayer
      setResult(result)
    },
  })

  function handleLeftCurrency(e: ChangeEvent<HTMLSelectElement>) {
    setLeftCurrency(e.target.value)
    setRightCurrency(pairs[e.target.value][0])
  }

  function handleRightCurrency(e: ChangeEvent<HTMLSelectElement>) {
    const newRightPair = pairs[leftCurrency].find((pair) => pair.asset === e.target.value)
    if (newRightPair) {
      setRightCurrency(newRightPair)
    }
  }

  return (
    <form onSubmit={formik.handleSubmit} className={styles.root}>
      <Input
        title={'Сумма'}
        type={'number'}
        formik={formik}
        id={'count'}
        placeholder={'100'}
        sx={{ maxWidth: '8rem', '& .MuiTypography-root': { fontSize: '1.2rem' }, mr: '2rem', mb: 0 }}
      />
      <AppSelect defaultValue={leftCurrency} onChange={handleLeftCurrency}>
        {Object.keys(pairs).map((pair) => (
          <option key={pair} value={pair}>
            {pair}
          </option>
        ))}
      </AppSelect>
      <AppSelect defaultValue={rightCurrency.asset} onChange={handleRightCurrency} sx={{ ml: '.5rem' }}>
        {pairs[leftCurrency].map((pair) => (
          <option key={pair.asset} value={pair.asset}>
            {pair.asset}
          </option>
        ))}
      </AppSelect>
      <Button variant={'contained'} type={'submit'} disableRipple sx={{ ml: '2rem' }}>
        Рассчитать
      </Button>
    </form>
  )
}

export default Form
