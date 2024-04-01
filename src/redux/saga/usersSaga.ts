// usersSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersStart, getUsersSuccess, getUsersFailure } from "../state/userState";
import { getUserDetailsFailure, getUserDetailsSuccess } from "../state/userDetailState";

function* fetchUsers() {
    try {
        const response = yield call(fetch, 'http://localhost:3001/user/all');
        const users = yield response.json();
        yield put(getUsersSuccess(users));
    } catch (error) {
        yield put(getUsersFailure(error.message));
    }
}

export function* watchGetUsers() {
    yield takeEvery(getUsersStart.type, fetchUsers);
}


