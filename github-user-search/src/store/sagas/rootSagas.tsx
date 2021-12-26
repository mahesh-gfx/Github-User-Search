import { all } from "redux-saga/effects";
import watcherUserSaga from "./handlers/fetchUser";

export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}
