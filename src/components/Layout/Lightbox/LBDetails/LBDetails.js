import React from 'react'
import PropTypes from 'prop-types'

const LBDetails = ({details}) => {
  let url = null
  const wikilink = details?.urls.find(url => url.type === 'wiki')
  if (wikilink) {
    // Replace Given URL with desired charater page
    url = decodeURI(wikilink.url.split('?')[0])
    url = url.replace(/_/g, '-')
    url = url.replace(/[()]/g, '')
    url = url.replace('/universe/', '/characters/')
    url = url.toLowerCase()
    url = `${url}/in-comics`
  }
  
  return (
    <div className="lb-details">
      <h3>{details.name}</h3>
      <p>{details.description}</p>
      {url &&
        <a href={url} target="_blank" rel="noreferrer">wiki</a>
      }
    </div>
  )
}

LBDetails.propTypes = {
  details: PropTypes.object
}

export default LBDetails
