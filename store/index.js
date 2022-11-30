import { configureStore } from '@reduxjs/toolkit';
import { deviceReducer } from './deviceSlice';

export const store = configureStore({ reducer: { device: deviceReducer } });

