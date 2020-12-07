import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import {useFetchAuth} from '../useFetchAuth'
import api from 'src/api/api'

import LoginForm from 'components/Forms/LoginForm/LoginForm'
import CommonTemplate from 'components/Layout/CommonTemplate'
import AdminTiers from 'components/Admin/AdminTiers/AdminTiers'

const AdminPage = () => {
  const [loadingUser, user] = useFetchAuth()

  const logoutUser = () => {
    api.logout()
  }
  
  const AdminSection = (props) => {
    return props.user.logged_in
      ? (
      <>
        <p>
          {`${props.user.name} is Logged In`} | <span className="hand" onClick={() => logoutUser()}>logout</span>
        </p>
        <AdminTiers />
      </>
      )
      : (
      <>
        <p>{`Hello, ${props.user.name}`}</p>
        <LoginForm />
      </>
      )
  }

  return (
    <>
      <CommonTemplate
        drawerChildren={
          <div>After the Drawer Links</div>
        }
        pageName="admin"
      >
        {loadingUser && <div className="loading">loading...</div>}
        {!loadingUser && <AdminSection user={user} />}
      </CommonTemplate>
    </>
  )
}

export default AdminPage
