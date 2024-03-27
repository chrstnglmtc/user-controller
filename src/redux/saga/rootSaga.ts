// rootSaga.js
import { all } from 'redux-saga/effects';
import { watchGetUsers } from './usersSaga';

export default function* rootSaga() {
    yield all([
        watchGetUsers(),
        // Add more sagas as needed
    ]);
}
