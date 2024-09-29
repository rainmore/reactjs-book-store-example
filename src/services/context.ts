import {
  Context,
  createContext
} from 'react';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

enum AccountStatus {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLEd',
  SUSPENDED = 'SUSPENDED'
}

interface Account {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  status: AccountStatus,
  lastLoginAt?: Date
}

interface CurrentUser {
  account: Account;
  firstName: string,
  lastName: string
}

interface AppContextType {
  theme: Theme,
  currentUser?: CurrentUser,
  jwtToken?: string
}

const DefaultAppContext: AppContextType = {
  theme: Theme.LIGHT
};

const AppContext: Context<AppContextType> = createContext<AppContextType>(DefaultAppContext);

export {
  AppContext,
  DefaultAppContext
};
export type {
  Theme,
  AccountStatus,
  Account,
  CurrentUser,
  AppContextType
};
