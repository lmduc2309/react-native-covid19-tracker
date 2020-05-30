import { takeLatest, put, fork, all } from "redux-saga/effects";
import { getToTalCovidService } from "../../services/Home";
import { Error, Success } from "../../helpers/notify";
import actions from "./Home.actions";

function* getTotalCovidSaga() {
  yield takeLatest(actions.GET_COVID_REQUEST, function*(params) {
    try {
      console.log('asdsad')
      const res = yield getToTalCovidService();
      if (res.status === 200) {
        console.log(res.data)
        yield put({ type: actions.GET_COVID_RESPONSE, data: res.data });
      } else {
        yield Error(res.message);
      }
    } catch (error) {
      yield Error("Không thể kết nối đến server");
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getTotalCovidSaga)]);
}
