import { takeLatest, put } from 'redux-saga/effects';
import { setUsername, setPassword } from '../store/loginSlice'; // Import your login slice actions

export function* loginWorker(action) {
  try {
    // Make API request or perform any async operation here
    // Example:
    // const response = yield call(api.login, action.payload);
    // Dispatch actions to update state
    yield put(setUsername(action.payload.username));
    yield put(setPassword(action.payload.password));
  } catch (error) {
    // Handle error
  }
}

export default function* loginSaga() {
  yield takeLatest('login/loginRequested', loginWorker); // Adjust action type as needed
}
