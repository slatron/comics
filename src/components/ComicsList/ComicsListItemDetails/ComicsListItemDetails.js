import React from 'react'
import PropTypes from 'prop-types'

import DetailsCharacterList from 'components/ComicsList/DetailsCharacterList/DetailsCharacterList'
import DetailsCreatorList from 'components/ComicsList/DetailsCreatorList/DetailsCreatorList'

const ComicsListItemDetails = (props) => {

  const {characters, creators, title} = props.comic

  return (
    <div key={props.comic.id.toString()}>
      <DetailsCharacterList characters={characters} />
      <DetailsCreatorList creators={creators} />
      <div className="detail-entry">
        <h6>Full Title</h6>
        <p>{title}</p>
      </div>
    </div>
  )
}

ComicsListItemDetails.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicsListItemDetails
