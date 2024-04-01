import { call, put, takeEvery } from "redux-saga/effects";
import { getUserDetailsFailure, getUserDetailsStart, getUserDetailsSuccess } from "../state/userDetailState";

function* fetchUserDetails() {
    try {
        const response = yield call(fetch, 'http://localhost:3001/personal-info/all');
        const userDetails = yield response.json();
        console.log('User Details Response:', userDetails); // Log the response
        yield put(getUserDetailsSuccess(userDetails));
    } catch (error) {
        console.error('Error fetching user details:', error); // Log the error
        yield put(getUserDetailsFailure(error.message));
    }
}

export function* watchFetchUserDetails () {
    yield takeEvery(getUserDetailsStart.type, fetchUserDetails);
}

