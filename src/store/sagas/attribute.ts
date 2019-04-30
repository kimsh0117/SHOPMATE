import { call, put, takeLatest } from "redux-saga/effects";
import { Attributes } from "lib/api";
import { attributeAction } from "store/actions";
import * as types from "store/constants";

export function* fetchAttribute(action: any) {
  const { data, error } = yield call(Attributes.getAttributeByProductId, action.payload);
  if (data) yield put(attributeAction.attributeSuccess(data));
  else yield put(attributeAction.attributeFailure(error));
}

export default function* watchFetchAttribues() {
  yield takeLatest(
    [types.GET_ATTRIBUTES_WITH_PRODUCTID[types.REQUEST]],
    fetchAttribute
  );
}
