import { all } from 'redux-saga/effects';

import HomeSaga from '../components/Home/Home.sagas';


export default function* rootSaga() {
  yield all([
    HomeSaga(),
  ]);
}
