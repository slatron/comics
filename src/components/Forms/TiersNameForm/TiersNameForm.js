import React, {useEffect} from 'react'
import {useFormData} from '../useFormData'
import api from 'src/api/api'
import '../forms.scss'

const initFormData = (tiers) => {
  let formData = {}
  tiers.forEach(tier => {
    formData[tier.title] = tier.desc
  })
  return formData
}

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
      handleInitData(initFormData(props.tiers))
    }, []);

    const TierInputs = props.tiers.map((tier) => {
      return (
        <div className="field-pair">
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

export default TiersNameForm