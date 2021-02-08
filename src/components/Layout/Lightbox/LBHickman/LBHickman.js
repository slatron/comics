import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {characterData} from 'components/page_roots/HickmanPage/characterData'

import './LBHickman.scss'

const LBDetails = ({details}) => {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const info = characterData[details.character]

  return (
    <div className="lb-hickman" onClick={e => e.stopPropagation()}>
      <h3>{info.name}</h3>
      {info.identity &&
        <h4>Identity: {info.identity}</h4>
      }
      {info.first_appearance &&
        <h5>First Appearance: {info.first_appearance}</h5>
      }
      {info.description &&
        <>
          <h5>Full Story & Review</h5>
          <section className={`${detailsOpen ? 'active' : ''}`}>
            <span dangerouslySetInnerHTML={{ __html: info.description }}></span>
          </section>
        </>
      }
    </div>
  )
}

LBDetails.propTypes = {
  details: PropTypes.object
}

export default LBDetails
