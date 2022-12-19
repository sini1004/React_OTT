import { legacy_createStore, applyMiddleware } from 'redux';
// createStore 가로줄 redux toolkit사용 유도
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

let store = legacy_createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;