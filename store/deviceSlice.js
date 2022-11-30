import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    devices: [],
    device: {},
};

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setDevices: (state, { payload }) => {
            console.log('setDevices');
            state.devices = payload.rows;
        },
        setDevice: (state, { payload }) => {
            console.log('setDevice');
            state.device = payload;
        },
        resetDevice: (state) => {
            console.log('resetDevice');
            state.device = {};
        },
    },
});

export const deviceReducer = deviceSlice.reducer;

export const { setDevices, setDevice, resetDevice } = deviceSlice.actions;
