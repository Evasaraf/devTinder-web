import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userslice';
import feedReducer from './feedSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
    },
});
export default appStore;