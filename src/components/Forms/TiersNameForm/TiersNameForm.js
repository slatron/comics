import React from 'react'
import {useFormData} from '../useFormData'

const TiersNameForm = (props) => {
    const signup = () => {
        console.log(inputs)
    }
    const {inputs, handleSubmit, handleInputChange} = useFormData(signup)

    const TierInputs = props.tiers.map((tier) => {
        return <div>
            <input
              value={inputs[`${tier.title}`]}
              onChange={handleInputChange}
              name={`${tier.title}`} />
        </div>
    })

    return (
        <form onSubmit={handleSubmit}>
            {TierInputs}
            <button type="submit">submit</button>
        </form>
    )
}

export default TiersNameForm