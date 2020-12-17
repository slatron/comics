import React from 'react'
import PropTypes from 'prop-types'
import DetailEntry from 'components/ComicsList/DetailEntry/DetailEntry'

const DetailsCreatorList = (props) => {
  const {items} = props.creators

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
      <DetailEntry key={area.label} {...area} />
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
