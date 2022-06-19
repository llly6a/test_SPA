export enum commonActions {
  login = 'login',
  quote = 'quote',
  history = 'history',
}

export enum commonResponseResults {
  error = 'error',
  ok = 'ok',
}

export interface CommonResponse {
  result: commonResponseResults
  error?: string
}
