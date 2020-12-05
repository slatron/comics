import React from 'react'
import ReactDOM from 'react-dom'
import CommonTemplate from 'components/Layout/CommonTemplate'

const AdminPage = () => {
  return (
    <>
      <CommonTemplate
        drawerChildren={
          <div>After the Drawer Links</div>
        }
        pageName="test"
      >
        Admin here
      </CommonTemplate>
    </>
  )
}

export default AdminPage
