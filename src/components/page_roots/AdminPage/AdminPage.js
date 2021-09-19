import React from 'react'
import PropTypes from 'prop-types'
import {useFetchAuth} from '../useFetchAuth'
import api from 'src/api'

import LoginForm from 'components/forms/LoginForm/LoginForm'
import CommonTemplate from 'components/Layout/CommonTemplate'
import AdminRankings from './AdminRankings'
const noop = () => {}

const AdminPage = () => {
  const [loadingUser, user] = useFetchAuth()
  const logoutUser = () => api.logout()

  const allRankings = () => (
    <>
      <h2>MCU Rankings</h2>
      <AdminRankings
        itemsAPI={api.getMoviesFB}
        saveRankings={api.updateMoviesFB}
        tiersAPI={api.getTiersFB}
        updateTierData={api.updateTiersFB}/>
      <hr/>
      <h2>REM Album Rankings</h2>
      <AdminRankings
        itemsAPI={api.getRemAlbumsFB}
        saveRankings={api.updateRemAlbumsFB}
        tiersAPI={api.getRemTiersFB}
        updateTierData={api.updateRemTiersFB}/>
    </>
  )

  const AdminSection = ({user}) => {
    return user.logged_in
      ? (
      <>
        <p>
          {`${user.name} is Logged In`} | <span className="hand" onClick={() => logoutUser()}>logout</span>
        </p>
        {allRankings()}
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
