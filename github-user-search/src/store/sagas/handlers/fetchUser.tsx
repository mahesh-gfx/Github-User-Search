import { call, put, takeEvery } from "redux-saga/effects";
import fetchUser from "../requests/fetchuser";

function* handleGetUser() {
  try {
    const users = yield call(fetchUser);
    yield put({ type: "GET_USER_SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "GET_USER_FAIL", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeEvery("GET_USER_DETAILS", handleGetUser);
}

export default watcherUserSaga;
