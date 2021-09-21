import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useFormData} from 'src/components/forms/useFormData'

const TiersNameForm = ({tiers, updateTierData}) => {
  const updateTiers = () => {
    const updateData = [...tiers]
    updateData.forEach(tier => {
      tier.desc = (formData[tier.title] === 0 || formData[tier.title])
        ? formData[tier.title]
        : tier.desc

      if (tier.lowest) {
        tier.lowest = (formData[`${tier.title}_lowest`] === 0 || formData[`${tier.title}_lowest`])
          ? parseInt(formData[`${tier.title}_lowest`])
          : tier.lowest
      }
    })
    updateTierData(updateData)
  }
  const {formData, handleSubmit, handleInputChange, handleSetFormData} = useFormData(updateTiers)

  useEffect(() => {
    const initFormData = tiers => {
      const formData = {}
      tiers.forEach(tier => {
        formData[tier.title] = tier.desc
        formData[`${tier.title}_lowest`] = tier.lowest
      })
      return formData
    }

    handleSetFormData(initFormData(tiers))
  }, [])

  const TierInputs = tiers.map((tier, idx) => (
      <div key={tier.title} className="field-pair">
        <label>{tier.title.toUpperCase()}</label>
        <div className="input-container">
          <input
            value={formData[tier.title]}
            onChange={handleInputChange}
            name={tier.title}
          />
          {(idx + 1 < tiers.length) &&
            <input
              value={formData[`${tier.title}_lowest`]}
              onChange={handleInputChange}
              name={`${tier.title}_lowest`}
            />
          }
        </div>
      </div>
    )
  )

  return (
    <form className="basic-form" onSubmit={handleSubmit}>
      {TierInputs}
      <button type="submit">Update Tiers</button>
    </form>
  )
}

TiersNameForm.propTypes = {
  tiers: PropTypes.array,
  updateTierData: PropTypes.func
}

export default TiersNameForm
