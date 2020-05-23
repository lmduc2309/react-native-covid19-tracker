import {takeLatest, put, fork, all} from 'redux-saga/effects';
import {getTotalAllService} from '../../services/Home';
import {Error, Success} from '../../helpers/notify';
import actions from './Home.actions';

function* getTotalsSaga() {
  yield takeLatest(actions.GET_TOTAL_REQUEST, function*(params) {
    try {
      const res = yield getTotalAllService();
      if (res.status === 200) {
        yield put({type: actions.GET_TOTAL_RESPONSE, data: res.data});
      } else {
        yield Error(res.message);
      }
    } catch (error) {
      yield Error('Không thể kết nối đến server');
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getTotalsSaga)]);
}
