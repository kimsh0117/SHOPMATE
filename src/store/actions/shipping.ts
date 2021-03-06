import {
  GET_SHIPPING_REGION,
  GET_SHIPPING_REGION_BY_ID,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { shipping, error, region } from "store/models";
import { ActionsUnion } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  getShippingRequest: () => createAction(GET_SHIPPING_REGION[REQUEST]),
  getShippingSuccess: (shipping: shipping) =>
    createAction(GET_SHIPPING_REGION[SUCCESS], shipping),
  getShippingFailure: (err: error) =>
    createAction(GET_SHIPPING_REGION[FAILURE], err),
  getShippingByIdRequest: (id: number) => createAction(GET_SHIPPING_REGION_BY_ID[REQUEST], id),
  getShippingByIdSuccess: (data: region) => createAction(GET_SHIPPING_REGION_BY_ID[SUCCESS], data),
  getShippingByIdFailure: (err: error) => createAction(GET_SHIPPING_REGION_BY_ID[FAILURE], err)
};

export type Actions = ActionsUnion<typeof Actions>;
