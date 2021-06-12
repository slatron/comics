import React from 'react'
import PropTypes from 'prop-types'
import CreatorLinks from './CreatorLinks/CreatorLinks'

const DetailsCreatorList = ({creators}) => {
  const {items} = creators

  const writers = items.filter((item) => item.role === 'writer')
  const pencilers = items.filter((item) => item.role === 'penciler')
  const inkers = items.filter((item) => item.role === 'inker')
  const colorists = items.filter((item) => item.role === 'colorist')
  const covers = items.filter((item) => item.role.includes('cover'))

  const detailAreas = [
    {
      label: 'Writer',
      names: writers.map(writer => writer.name),
      urls: writers.map(writer => writer.resourceURI)
    },
    {
      label: 'Penciler',
      names: pencilers.map(writer => writer.name),
      urls: pencilers.map(writer => writer.resourceURI)
    },
    {
      label: 'Inker',
      names: inkers.map(writer => writer.name),
      urls: inkers.map(writer => writer.resourceURI)
    },
    {
      label: 'Colorist',
      names: colorists.map(writer => writer.name),
      urls: colorists.map(writer => writer.resourceURI)
    },
    {
      label: 'Cover',
      names: covers.map(writer => writer.name),
      urls: covers.map(writer => writer.resourceURI)
    }
  ]

  const detailEntries = detailAreas.map((area) => {
    return (
      <CreatorLinks
        key={area.label}
        label={area.label}
        names={area.names}
        type="creator"
        urls={area.urls}
      />
    )
  })

  return (
    <div className="detail-area">
      {detailEntries}
    </div>
  )
}

DetailsCreatorList.propTypes = {
  creators: PropTypes.object
}

export default DetailsCreatorList
