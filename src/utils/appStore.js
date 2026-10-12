import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userslice';
import feedReducer from './feedSlice';
import connectionReducer from './connectionSlice';
import requestReducer from './requestSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        requests: requestReducer,
        connections: connectionReducer,
    },
});
export default appStore;