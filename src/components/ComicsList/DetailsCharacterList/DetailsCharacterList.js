import React from 'react'
import PropTypes from 'prop-types'
import DetailEntry from 'components/ComicsList/DetailEntry/DetailEntry'

const DetailsCharacterList = (props) => {
  const {items} = props.characters

  return (
    <div className="detail-area">
      <DetailEntry
        label="Main Character"
        names={items.map(item => item.name)}
        urls={items.map(item => item.resourceURI)} />
    </div>
  )
}

DetailsCharacterList.propTypes = {
  characters: PropTypes.object
}

export default DetailsCharacterList
