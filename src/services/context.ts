import { Context, createContext } from 'react';

type Theme = "light" | "dark";

interface CurrentUser {
  username: string;
  firstName: string,
  lastName: string
}

interface AppContextType {
  theme: Theme,
  currentUser?: CurrentUser
}

const DefaultAppContext: AppContextType = {
  theme: "light"
}

const AppContext: Context<AppContextType>  = createContext<AppContextType>(DefaultAppContext);

export { AppContext, DefaultAppContext };
export type { CurrentUser, Theme };
