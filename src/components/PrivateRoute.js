import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = React.useContext(UserContext)

  return (
    <Route
      {...rest}
      render={() => {
        return user.token
          ? children
          : <Redirect to="/login">Login</Redirect>
      }}
    ></Route>
  )
}

export default PrivateRoute
