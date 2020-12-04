import { createStore } from 'redux'
import { Provider } from 'react-redux';

let store = createStore(countReducer)

export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const App = () => (
  <Provider store={store}>
    <h1>Helloworld React & Redux!</h1>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));
