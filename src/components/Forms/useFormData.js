// This hook handles input changes on a form
//   and returns them as an inputs object
import React, {useState} from 'react'

export const useFormData = (callback, initData) => {
  console.log('initData: ', initData)
  const [inputs, setInputs] = useState({})
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }
    callback()
  }
  const handleInputChange = (e) => {
    e.persist()
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]:e.target.value
    }))
  }
  return {
    inputs,
    handleSubmit,
    handleInputChange,
  }
}