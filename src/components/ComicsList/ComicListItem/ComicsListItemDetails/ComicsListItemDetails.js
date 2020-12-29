import React from 'react'
import PropTypes from 'prop-types'

import DetailsCharacterList from './DetailsCharacterList/DetailsCharacterList'
import DetailsCreatorList from './DetailsCreatorList/DetailsCreatorList'

const ComicsListItemDetails = ({comic}) => {
  const {characters, creators} = comic

  return (
    <div key={comic.id.toString()}>
      <DetailsCharacterList characters={characters} />
      <DetailsCreatorList creators={creators} />
    </div>
  )
}

ComicsListItemDetails.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicsListItemDetails
