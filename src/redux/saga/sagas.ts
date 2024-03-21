import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga'; // Import your login saga

export default function* rootSaga() {
  yield all([
    loginSaga(),
    // Add more sagas as needed
  ]);
}
