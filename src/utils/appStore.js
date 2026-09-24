import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userslice';
const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
    },
});
export default appStore;