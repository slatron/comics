import React, {useState, useEffect} from 'react'
import './lifeSection.scss'

const LifeSection = ({flip, startingLife, name}) => {
  const [life, setLife] = useState(startingLife)

  useEffect(() => {
    setLife(startingLife)
  }, [startingLife])

  return (
    <div className={`full-height-layout life-section ${flip ? 'flip' : ''}`}>
      <div className="header-row align-row align-header">
        <section>
          <span>{name}</span>
        </section>
      </div>
      <div
        className="align-content centered align-row align-footer"
        onClick={() => setLife(life => (life - 1))}
      >
        {life}
      </div>
      <div className="double-col-row">
        <section className="centered">
          <button
            className="down"
            onClick={() => setLife(life => (life - 1))}
          >
            -1
          </button>
          <button
            className="down-big"
            onClick={() => setLife(life => (life - 5))}
          >
            -5
          </button>
        </section>
        <section className="centered">
          <button
            className="up-big"
            onClick={() => setLife(life => (life + 5))}
          >
            +5
          </button>
          <button
            className="up"
            onClick={() => setLife(life => (life + 1))}
          >
            +1
          </button>
        </section>
      </div>
    </div>
  )
}

export default LifeSection
