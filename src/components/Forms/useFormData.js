// This hook handles input changes on a form
//   and returns them as an inputs object
import {useState} from 'react'

export const useFormData = (callback) => {
  const [inputs, setInputs] = useState({})
  const handleInitData = (data) => {
    setInputs(inputs => ({
      ...inputs,
      ...data
    }))
  }
  const handleInputChange = (e) => {
    e.persist()
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }
    callback()
  }
  return {
    inputs,
    handleInitData,
    handleInputChange,
    handleSubmit
  }
}
