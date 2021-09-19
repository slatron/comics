import React from 'react'
import api from 'src/api/api'
import {useFormData} from '../useFormData'
import '../forms.scss'

const handleLogin = data => api.login(data.login_email, data.login_pass)

const LoginForm = () => {
  const {formData, handleSubmit, handleInputChange} = useFormData(handleLogin)

  return (
    <form className="basic-form" onSubmit={handleSubmit}>
      <h3>Login Here</h3>
      <div className="field-pair">
        <label htmlFor="login_email">Email </label>
        <div className="input-container">
          <input
            type="email"
            name="login_email"
            id="login_email"
            value={formData.login_email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="field-pair">
        <label htmlFor="login_pass">Password </label>
        <div className="input-container">
          <input
            id="login_pass"
            type="password"
            name="login_pass"
            value={formData.login_pass}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm
