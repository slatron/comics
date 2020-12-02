// Experimenting with component-level hook to manage content
//
// import React, { useState, useEffect, useReducer } from 'react'
//
// export const useLightboxContent = (content) => {
//   const [ lightboxContent, setLightboxContent ] = useReducer(lightboxReducer, null)
//
//   useEffect(() => {
//     if (content) setLightboxContent(content)
//   }, [content])
//
//   console.log('lightboxContent: ', lightboxContent)
//   console.log('setLightboxContent: ', setLightboxContent)
//
//   return [lightboxContent, setLightboxContent]
// }
