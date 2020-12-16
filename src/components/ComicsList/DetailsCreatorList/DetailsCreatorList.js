import React from 'react'
import PropTypes from 'prop-types'

const DetailsCreatorList = (props) => {
  const writers = props.creators?.items.filter((item) => item.role === 'writer')
  const pencilers = props.creators?.items.filter((item) => item.role === 'penciler')
  const inkers = props.creators?.items.filter((item) => item.role === 'inker')
  const colorists = props.creators?.items.filter((item) => item.role === 'colorist')
  const covers = props.creators?.items.filter((item) => item.role.includes('cover'))

  const writerNames = writers.map(writer => writer.name)
  const pencilerNames = pencilers.map(writer => writer.name)
  const inkerNames = inkers.map(writer => writer.name)
  const coloristNames = colorists.map(writer => writer.name)
  const coverNames = covers.map(writer => writer.name)

  return (
    <>
      {writerNames.length > 0 &&
        <>
          <h6>{`Writer${writerNames.length > 1 ? 's': ''}`}</h6>
          <p>{writerNames.join(', ')}</p>
        </>
      }

      {pencilerNames.length > 0 &&
        <>
          <h6>{`Penciler${pencilerNames.length > 1 ? 's': ''}`}</h6>
          <p>{pencilerNames.join(', ')}</p>
        </>
      }

      {coloristNames.length > 0 &&
        <>
          <h6>{`Colorist${coloristNames.length > 1 ? 's': ''}`}</h6>
          <p>{coloristNames.join(', ')}</p>
        </>
      }

      {inkerNames.length > 0 &&
        <>
          <h6>{`Inker${inkerNames.length > 1 ? 's': ''}`}</h6>
          <p>{inkerNames.join(', ')}</p>
        </>
      }

      {coverNames.length > 0 &&
        <>
          <h6>{`Cover${coverNames.length > 1 ? 's': ''}`}</h6>
          <p>{coverNames.join(', ')}</p>
        </>
      }
    </>
  )
}

DetailsCreatorList.propTypes = {
  creators: PropTypes.object
}

export default DetailsCreatorList
