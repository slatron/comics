// counter.js Actions
export const counterIncrement = (n=1) => {
  return {
    type: 'COUNTER_INCREMENT',
    payload: n
  }
}
export const counterDecrement = (n=1) => {
  return {
    type: 'COUNTER_DECREMENT',
    payload: n
  }
}

// lightbox.js Actions
export const lightboxShow = (content) => {
  return {
    type: 'LIGHTBOX_SHOW',
    payload: content
  }
}
export const lightboxHide = () => {
  return {
    type: 'LIGHTBOX_HIDE'
  }
}
