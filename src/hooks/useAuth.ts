import { useContext } from 'react'
import type { AuthContextType } from '@/components/AuthProvider'
import { AuthContext } from '@/components/AuthProvider'

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType
}
