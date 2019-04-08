import { GET_ATTRIBUTES_WITH_PRODUCTID, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { attributeState } from 'store/models';

const attributeRequest = (id: string) => ({
  type: GET_ATTRIBUTES_WITH_PRODUCTID[REQUEST],
  id,
});

const attributeSuccess = (detail: attributeState) => ({
  type: GET_ATTRIBUTES_WITH_PRODUCTID[SUCCESS],
  payload: detail,
});

const attributefailure = (err: Error) => ({
  type: GET_ATTRIBUTES_WITH_PRODUCTID[FAILURE],
  err: err.message,
});

interface attributeRequestAction {
  type: typeof GET_ATTRIBUTES_WITH_PRODUCTID['REQUEST'];
  id: string;
}

interface attributeSuccessAction {
  type: typeof GET_ATTRIBUTES_WITH_PRODUCTID['SUCCESS'];
  payload: attributeState;
}

interface attributeFailureAction {
  type: typeof GET_ATTRIBUTES_WITH_PRODUCTID['FAILURE'];
  err: string;
}

export type AttributeActionTypes = attributeRequestAction | attributeSuccessAction | attributeFailureAction;

export default {
  attributeRequest,
  attributeSuccess,
  attributefailure,
}