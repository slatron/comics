import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useFormData} from '../useFormData'
import api from 'src/api/api'
import '../forms.scss'

const TiersNameForm = (props) => {
    const updateTiers = () => {
      let updateData = [...props.tiers]
      updateData.forEach((tier) => {
        tier.desc = (inputs[tier.title] === 0 || inputs[tier.title])
          ? inputs[tier.title]
          : tier.desc
      })
      api.updateRemTiersFB(updateData)
    }
    const {inputs, handleInitData, handleSubmit, handleInputChange} = useFormData(updateTiers)

    useEffect(() => {
      const initFormData = (tiers) => {
        let formData = {}
        tiers.forEach(tier => {
          formData[tier.title] = tier.desc
        })
        return formData
      }

      handleInitData(initFormData(props.tiers))
    }, [props]) // eslint-disable-line react-hooks/exhaustive-deps

    const TierInputs = props.tiers.map((tier) => {
      return (
        <div key={tier.title} className="field-pair">
          <label>{tier.title.toUpperCase()}</label>
          <div className="input-container">
            <input
              value={inputs[`${tier.title}`]}
              onChange={handleInputChange}
              name={`${tier.title}`} />
          </div>
        </div>
      )
    })

    return (
      <form className="basic-form" onSubmit={handleSubmit}>
        {TierInputs}
        <button type="submit">Update Tiers</button>
      </form>
    )
}

TiersNameForm.propTypes = {
  tiers: PropTypes.array
}

export default TiersNameForm
