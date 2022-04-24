export const SELECT_DEVICE = 'SELECT_DEVICE';
export const FILTERED_DEVICE = 'FILTERED_DEVICE';

export const selectDevice = (id) => ({
    type: SELECT_DEVICE,
    deviceID: id,
}) 

export const filteredDevice = (id) => ({
    type: FILTERED_DEVICE,
    categoryID: id,
})