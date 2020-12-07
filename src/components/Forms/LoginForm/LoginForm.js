import React from 'react'
import ReactDOM from 'react-dom'
import api from 'src/api/api'
import {useFormData} from '../useFormData'

const LoginForm = () => {

  const signup = () => {
    api.login(inputs.login_email, inputs.login_pass)
  }

  const {inputs, handleSubmit, handleInputChange} = useFormData(signup)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label for="login_email">Email </label>
        <input
          type="email"
          name="login_email"
          id="login_email"
          value={inputs.login_email}
          onChange={handleInputChange}/>
        <br />
        <label for="login_pass">Password </label>
        <input
          id="login_pass"
          type="password" 
          name="login_pass"
          value={inputs.login_pass}
          onChange={handleInputChange}/>
        <button type="submit">login</button>
      </form>
    </>
  )
}

export default LoginForm
