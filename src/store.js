import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const intialState = {};

const middleWare = [thunk];

const store = createStore(
    rootReducer,
    intialState,
    compose(
        applyMiddleware(...middleWare),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export default store;