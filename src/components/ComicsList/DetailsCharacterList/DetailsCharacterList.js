import React from 'react'
import PropTypes from 'prop-types'

const DetailsCharacterList = (props) => {
   return (
     <>
      {props.characters.returned > 0 &&
        <div></div>
      }
    </>
  )
}

DetailsCharacterList.propTypes = {
  characters: PropTypes.object
}

export default DetailsCharacterList
