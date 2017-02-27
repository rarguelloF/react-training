import { takeLatest } from 'redux-saga';
import { apply, put } from 'redux-saga/effects';

import ApiClient from 'src/helpers/apiClient';


function* fetchProducts(action) {
  const cl = new ApiClient({
    host: 'http://localhost:8000',
  });

  const res = yield apply(cl, cl.getProducts, [action.page]);

  if (!res.error) {
    yield put({ type: 'FETCH_PRODUCTS_SUCCEEDED', response: res.data });
  } else {
    yield put({ type: 'FETCH_PRODUCTS_FAILED', response: res.data });
  }
}

function* changePage(action) {
  yield put({
    type: 'CHANGE_PAGE',
    page: action.page,
  });

  yield put({
    type: 'FETCH_PRODUCTS_REQUESTED',
    page: action.page,
  });
}

function* watchFetchProducts() {
  yield* takeLatest('FETCH_PRODUCTS_REQUESTED', fetchProducts);
}

function* watchChangePage() {
  yield* takeLatest('CHANGE_PAGE_REQUESTED', changePage);
}

export default function* gallery() {
  yield [
    watchFetchProducts(),
    watchChangePage(),
  ];
}
