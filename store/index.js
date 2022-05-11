import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/auth.reducer';
import CartReducer from './reducers/cart.reducer';
//reducers
import CategoryReducer from './reducers/category.reducer';
import DeviceReducer from './reducers/device.reducer';
import OrderReducer from './reducers/order.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    devices: DeviceReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer
})

export default createStore(RootReducer,applyMiddleware(thunk));