import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import productsReducer from './reducer/products_reducer'
import categoriesReducer from './reducer/category_reducer'
import authenticationReducer from './reducer/authentication_reducer'
import cartReducer from "./reducer/cart_reducer"
import userReducer from "./reducer/user_reducer"
import orderReducer from "./reducer/order_reducer"
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const reducers = combineReducers({
    categoriesReducer,
    productsReducer,
    authenticationReducer,
    cartReducer,
    userReducer,
    orderReducer
})

const persistConfig = {
    key:"root",
    storage,
    whitelist: ["cartReducer"]
}

const persistConfiguracion=persistReducer(persistConfig,reducers)

const store = createStore(
    persistConfiguracion,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

const persistor = persistStore(store)

export  {store,persistor};
