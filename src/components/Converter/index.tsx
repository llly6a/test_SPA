import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useQuotes } from '../hooks/useQuotes'
import { ConverterPairs } from '../../types/converter'
import { QuotesAsset } from '../../types/quotes'
import Result from './Result'
import { Box, Typography } from '@mui/material'
import CardHeader from '../common/CardHeader'
import CardContent from '../common/CardContent'

const Converter = () => {
  const { quotes } = useQuotes()

  const [pairs, setPairs] = useState<{} | null>(null)
  const [result, setResult] = useState(0)

  function handleResult(r: number) {
    setResult(r)
  }

  function collectPairs(quotes: QuotesAsset[]) {
    return quotes.reduce((acc: ConverterPairs, curr) => {
      let pair = curr.asset.split('/')
      let newAcc = acc

      // collect direct quotes
      if (newAcc[pair[0]]) {
        newAcc[pair[0]].push({ asset: pair[1], multiplayer: Number(curr.quote) })
      } else {
        newAcc[pair[0]] = [{ asset: pair[1], multiplayer: Number(curr.quote) }]
      }

      //collect reverse quotes
      if (newAcc[pair[1]]) {
        newAcc[pair[1]].push({ asset: pair[0], multiplayer: 1 / Number(curr.quote) })
      } else {
        newAcc[pair[1]] = [{ asset: pair[0], multiplayer: 1 / Number(curr.quote) }]
      }

      return newAcc
    }, {})
  }

  useEffect(() => {
    if (!quotes?.length) return

    setPairs(collectPairs(quotes))
  }, [quotes])

  return (
    <Box sx={{ maxWidth: '75rem', width: '100%' }}>
      <CardHeader>
        <Typography sx={{ textAlign: 'center', minWidth: '60rem' }}>Конвертация валют</Typography>
      </CardHeader>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {pairs && <Form pairs={pairs} setResult={handleResult} />}
          <Box sx={{ height: '1px', width: '100%', bgcolor: 'background.default' }} />
          <Result result={result} />
        </Box>
      </CardContent>
    </Box>
  )
}

export default Converter
