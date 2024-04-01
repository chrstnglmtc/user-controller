// rootSaga.js
import { all } from 'redux-saga/effects';
import { watchGetUsers } from './usersSaga';
import { watchFetchUserDetails } from './userDetails';

export default function* rootSaga() {
    yield all([
        watchGetUsers(),
        watchFetchUserDetails()
        // Add more sagas as needed
    ]);
}
