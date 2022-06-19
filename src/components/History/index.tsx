import React, { useEffect, useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import CardHeader from '../common/CardHeader'
import CardContent from '../common/CardContent'
import { useHistoryMutation } from '../../api/history'
import { commonActions } from '../../types/common'
import HistoryDeal from './HistoryDeal'
import { Deal } from '../../types/history'
import { ReactComponent as Arrow } from '../../assets/arrow_right.svg'

const History = () => {
  const [fetchHistory, { data }] = useHistoryMutation()
  const [page, setPage] = useState(0)

  const [deals, setDeals] = useState<Deal[]>([])

  function handlePage(increment: number) {
    let newPage = page + increment
    if (newPage < 0) {
      return
    }
    if (newPage >= 10) {
      return
    }
    setPage(newPage)
  }

  useEffect(() => {
    fetchHistory({ action: commonActions.history })
  }, [])

  useEffect(() => {
    if (data?.deals) {
      setDeals(data.deals.slice(page * 10, page * 10 + 10))
    }
  }, [data, page])

  return (
    <Box sx={{ maxWidth: '100rem', width: '100%' }}>
      <CardHeader sx={{ pl: '4rem' }}>
        <Typography>Актив </Typography>
        <Typography>Начало </Typography>
        <Typography>Котировка </Typography>
        <Typography>Конец </Typography>
        <Typography>Котировка </Typography>
        <Typography>Прибыль </Typography>
      </CardHeader>
      <CardContent sx={{ pl: '4rem' }}>
        <Box>
          {deals.map((deal) => (
            <HistoryDeal deal={deal} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', mt: '2rem' }}>
          <IconButton color={'primary'} onClick={() => handlePage(-1)}>
            <Arrow style={{ transform: 'rotateZ(180deg)' }} />
          </IconButton>
          <Typography>
            {page + 1}/{10}
          </Typography>
          <IconButton color={'primary'} onClick={() => handlePage(1)}>
            <Arrow />
          </IconButton>
        </Box>
      </CardContent>
    </Box>
  )
}

export default History
