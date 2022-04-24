import { createStore, combineReducers } from 'redux';

//reducers
import CategoryReducer from './reducers/category.reducer';
import DeviceReducer from './reducers/device.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    devices: DeviceReducer
})

export default createStore(RootReducer);