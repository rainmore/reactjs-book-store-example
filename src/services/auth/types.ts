export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLEd',
  SUSPENDED = 'SUSPENDED'
}

export interface Account {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  status: AccountStatus,
  lastLoginAt?: Date
}

export interface CurrentUser {
  account: Account,
  username: string,
  isEnabled: boolean,
  authorities: string[]
}

export interface AuthContext {
  currentUser: CurrentUser,
  jwtToken: string
}
