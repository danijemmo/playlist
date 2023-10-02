import { configureStore } from '@reduxjs/toolkit'
import songsReducer from './songSlice'
import createSagaMiddleware from 'redux-saga'
import SongsSaga from './songsSaga';

const saga = createSagaMiddleware();
export const store = configureStore({
    reducer:{
        songs: songsReducer
    },
    middleware:[saga]
});

saga.run(SongsSaga)

