import type { ReactNode } from 'react'
import { createContext, useState } from 'react'
import type { LoginRes } from '@/types/user'

export interface AuthContextType {
  user: LoginRes
  login: (user: LoginRes) => void
  logout: () => void
  setToken: (token: string) => void
}
const emptyUser: LoginRes = {
  _id: '',
  email: '',
  token: '',
}
export const AuthContext = createContext<AuthContextType | null>(null)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<LoginRes>(emptyUser)
  const login = (newUser: LoginRes) => {
    setUser(newUser)
  }
  const logout = () => {
    setUser(emptyUser)
  }
  const setToken = (token: string) => {
    setUser({ ...user, token })
  }
  return (
    // 共享的函数和数据（状态）
    <AuthContext.Provider value={{ login, logout, setToken, user }}>
      {children}
    </AuthContext.Provider>
  )
}
