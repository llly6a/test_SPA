import { commonActions } from './common'

export interface LoginRequest {
  action: commonActions.login
  login: string
  password: string
}
