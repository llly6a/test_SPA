import { commonActions, CommonResponse } from './common'

export interface QuotesRequest {
  action: commonActions.quote
}

export interface QuotesAsset {
  asset: string
  startDate: string
  quote: string
  isFavorite?: boolean
}

export interface QuotesResponse extends CommonResponse {
  assets?: QuotesAsset[]
}
