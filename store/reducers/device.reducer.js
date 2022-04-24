import { DEVICES } from '../../data/devices';
import { SELECT_DEVICE, FILTERED_DEVICE } from '../actions/device.action';

const initialState = {
    devices: DEVICES,
    filteredDevice:[],
    selected: null
}

const DeviceReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SELECT_DEVICE:
            console.log("SELECT_DEVICE " + action.deviceID );
            return {
                ...state,
                selected: state.devices.find( device => device.id === action.deviceID )
            }
        case FILTERED_DEVICE:
            console.log("FILTERED_DEVICE " + action.categoryID);
            return {
                ...state,
                filteredDevice: state.devices.filter( device => device.category === action.categoryID )
            }
        default: 
            return state;
    }
}

export default DeviceReducer;