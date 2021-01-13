import React from 'react'
import PropTypes from 'prop-types'
import {characterData} from 'components/page_roots/HickmanPage/characterData'

import './LBHickman.scss'

const LBDetails = ({details}) => {
  const info = characterData[details.character]

  return (
    <div className="lb-hickman">
      <h3>{info.name}</h3>
      <h4>Identity: {info.identity}</h4>
      <h4>First Appearance: {info.first_appearance}</h4>
      <section>
        <span dangerouslySetInnerHTML={{ __html: info.description }}></span>
      </section>
    </div>
  )
}

LBDetails.propTypes = {
  details: PropTypes.object
}

export default LBDetails
