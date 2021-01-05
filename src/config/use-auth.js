import React, { useContext, createContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

const authContext = createContext()

export function ProvideAuth({ children }) {
  const auth = { user: localStorage.username }
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

export function PrivateRoute({ children, ...rest }) {
  let auth = useAuth()
  return auth.user ? <Route {...rest} /> : <Redirect to="/login" />
}
