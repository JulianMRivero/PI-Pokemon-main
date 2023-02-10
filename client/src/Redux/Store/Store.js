import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../Reducer/Reducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) || compose
);

export default store;