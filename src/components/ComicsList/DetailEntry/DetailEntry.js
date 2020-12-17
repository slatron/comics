import React from 'react'
import PropTypes from 'prop-types'

const DetailEntry = (props) => {
  const simplePlural = (string, n) => n > 1 ? `${string}s`: string

  return (
    <>
      {props.names.length > 0 &&
        <div className="detail-entry">
          <h6>{simplePlural(props.label, props.names.length)}</h6>
          <p>{props.names.join(', ')}</p>
        </div>
      }
    </>
  )
}

DetailEntry.propTypes = {
  label: PropTypes.string,
  names: PropTypes.array
}

export default DetailEntry