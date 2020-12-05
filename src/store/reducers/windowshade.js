const windowshadeReducer = (state=false, action) => {
  switch(action.type) {
    case 'WINDOWSHADE_SHOW':
      return true;
    case 'WINDOWSHADE_HIDE':
      return false;
    default:
      return state;
  }
};

export default windowshadeReducer;
