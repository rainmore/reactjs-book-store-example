import { createContext } from 'react'
import { authService } from './auth-service.ts'
import { AuthContext } from './types'

export const CurrentUserContext = createContext<AuthContext | null>(authService.getAuthContext())
