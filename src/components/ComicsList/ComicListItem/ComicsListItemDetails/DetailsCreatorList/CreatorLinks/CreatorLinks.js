import React from 'react'
import PropTypes from 'prop-types'

const getId = (url) => {
  const segs = url.split('/')
  return segs[segs.length - 1]
}

const DetailEntry = ({label, names, urls}) => {
  const simplePlural = (string, n) => n > 1 ? `${string}s`: string
  const urlLinks = urls.map((url, idx) => {
    return `https://www.marvel.com/comics/creators/${getId(url)}/${names[idx].split(' ').join('_')}`
  })
  const nameLinks = names.map((creator, idx) => {
    return (
      <a href={urlLinks[idx]} target="_blank" rel="noreferrer">
        {creator}
        {idx !== (names.length - 1) ? ',' : ''}
      </a>
    )
  })

  return (
    <>
      {names.length > 0 &&
        <div className="detail-entry detail-creator">
          <h6>{simplePlural(label, names.length)}</h6>
          <p>{nameLinks}</p>
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