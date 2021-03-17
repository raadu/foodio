import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';


const initialState = {};
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    composeEnchancer(applyMiddleware(thunk))
);

export default store;