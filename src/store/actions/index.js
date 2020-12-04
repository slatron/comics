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

// windowshade.js actions
export const windowshadeShow = () => {
  return {
    type: 'WINDOWSHADE_SHOW'
  }
}
export const windowshadeHide = () => {
  return {
    type: 'WINDOWSHADE_HIDE'
  }
}

// drawer.js actions
export const drawerShow = () => {
  return {
    type: 'DRAWER_SHOW'
  }
}
export const drawerHide = () => {
  return {
    type: 'DRAWER_HIDE'
  }
}
