import React from 'react'
import PropTypes from 'prop-types'
import CharacterLinks from './CharacterLinks/CharacterLinks'

const DetailsCharacterList = ({characters}) => {
  const {items} = characters

  return (
    <div className="detail-area">
      <CharacterLinks
        label="Main Character"
        names={items.map(item => item.name)}
        type="character"
        urls={items.map(item => item.resourceURI)}
      />
    </div>
  )
}

DetailsCharacterList.propTypes = {
  characters: PropTypes.object
}

export default DetailsCharacterList
