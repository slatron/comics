import React from 'react'
import PropTypes from 'prop-types'
import {useFetchAuth} from '../useFetchAuth'
import api from 'src/api'

import LoginForm from 'components/forms/LoginForm/LoginForm'
import CommonTemplate from 'components/Layout/CommonTemplate'
import AdminTiers from './AdminTiers/AdminTiers'

const AdminPage = () => {
  const [loadingUser, user] = useFetchAuth()
  const logoutUser = () => api.logout()

  const AdminSection = ({user}) => {
    return user.logged_in
      ? (
      <>
        <p>
          {`${user.name} is Logged In`} | <span className="hand" onClick={() => logoutUser()}>logout</span>
        </p>
        <AdminTiers />
      </>
      )
      : (
        <LoginForm />
      )
  }
  
  AdminSection.propTypes = {
    user: PropTypes.object
  }
  
  return (
    <CommonTemplate
      drawerChildren={null}
      pageName="admin"
    >
      {loadingUser && <div className="loading">loading...</div>}
      {!loadingUser && <AdminSection user={user} />}
    </CommonTemplate>
  )
}

export default AdminPage
