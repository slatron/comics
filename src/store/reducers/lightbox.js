const lightboxReducer = (state=null, action) => {
  switch(action.type) {
    case 'LIGHTBOX_SHOW':
      return state = {...state, ...action.payload};
    case 'LIGHTBOX_HIDE':
      return state = null;
    default:
      return state;
  }
};

export default lightboxReducer;
