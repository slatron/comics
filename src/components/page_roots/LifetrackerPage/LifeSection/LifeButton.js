import React from 'react'
import PropTypes from 'prop-types'

const LifeButton = ({change, cls, dispatch, id}) => {
  return (
    <button
      className={cls + ' life-button'}
      onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, change: change}})}
      type="button"
    >
      {change}
    </button>
  )
}

LifeButton.propTypes = {
  change: PropTypes.number.isRequired,
  cls: PropTypes.string,
  dispatch: PropTypes.func,
  id: PropTypes.number
}

export default LifeButton