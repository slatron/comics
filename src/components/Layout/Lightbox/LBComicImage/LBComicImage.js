import React from 'react'
import PropTypes from 'prop-types'

const LBComicImage = ({url, title}) => <img src={url} alt={title} />

LBComicImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

export default LBComicImage
