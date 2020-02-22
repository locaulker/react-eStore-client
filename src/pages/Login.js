import React from 'react'

// Strapi functions
import loginUser from '../strapi/loginUser'
import registerUser from '../strapi/registerUser'

// Handle user
import { useHistory } from 'react-router-dom'


const Login = () => {
  const history = useHistory()

  // Setup userContext

  // State values
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('default')
  const [isMember, setIsMember] = React.useState(true)

  let isEmpty = !email || !password || !username

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember
      isMember ? setUsername('default') : setUsername('')
      return isMember
    })
  }

  const handleSubmit = async (e) => {
    // alert
    e.preventDefault()

    let response
    if (isMember) {
      response = await loginUser({ email, password })
    } else {
      response = await registerUser({ email, password, username })
    }
    if (response) {
      // 
      console.log('success')
      console.log(response)
    } else {
      //  Show alert
    }
  }

  return (
    <section className="form section">
      <h2 className="section-title">
        {isMember ? "Sign In" : "Register"}
      </h2>
      <form className="login-form">
        {/* text input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        {/* password input */}
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {/* Show/Hide username input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        )}

        {/* Show/Hide empty form input */}
        {isEmpty && (
          <p className="form-empty">Please complete form fields</p>
        )}

        {/* Submit btn */}
        {!isEmpty &&
          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>}
        {/* End Submit btn */}

        {/* Register link */}
        <p className="register-link">
          {isMember ? "Need to register" : "already registered?"}
          <button
            type="button"
            onClick={toggleMember}
          >Click here</button>
        </p>
      </form>
    </section>
  )
}

export default Login
