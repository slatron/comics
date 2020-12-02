import React from 'react'
import ReactDOM from 'react-dom'
import CommonTemplate from 'components/Layout/CommonTemplate'

const TestPage = () => {
  return (
    <>
      <CommonTemplate
        drawerChildren={
          <div>After the Drawer Links</div>
        }
        pageName="test"
      >
        <p>I Should be inside the main-body</p>
      </CommonTemplate>
    </>
  )
}

export default TestPage
