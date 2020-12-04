const lightboxReducer = (state={}, action) => {
  switch(action.type) {
    case 'LIGHTBOX_SHOW':
      return {...state, ...action.payload};
    case 'LIGHTBOX_HIDE':
      return {};
    default:
      return state;
  }
};

export default lightboxReducer;
