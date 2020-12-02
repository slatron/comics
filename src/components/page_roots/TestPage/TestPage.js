import React from 'react'
import ReactDOM from 'react-dom'
import CommonTemplate from 'components/Layout/CommonTemplate'
import Product from 'components/Product/Product'
const TestPage = () => {
  return (
    <>
      <CommonTemplate
        drawerChildren={
          <div>After the Drawer Links</div>
        }
        pageName="test"
      >
        <Product />
      </CommonTemplate>
    </>
  )
}

export default TestPage
