const counterReducer = (state=0, action) => {
  switch(action.type) {
    case 'COUNTER_INCREMENT':
      return state = state + action.payload;
    case 'COUNTER_DECREMENT':
      return state = state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
