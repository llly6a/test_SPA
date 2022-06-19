import { commonActions, CommonResponse } from './common'

export interface HistoryRequest {
  action: commonActions.history
}

export interface HistoryResponse extends CommonResponse {
  deals?: Deal[]
}

export interface Deal {
  asset: string
  startDate: string
  startQuote: string
  finishDate: string
  finishQuote: string
  profit: string
}
