import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_DEPARTMENT,
  GET_REVIEWS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_SEARCH,
  SET_PAGE,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import {
  products,
  products_detail,
  product_lists,
  review,
  error
} from "store/models";

// GET_PRODUCT_SEARCH

const searchRequest = (
  query_string: string,
  all_word?: string,
  page?: number,
  limit?: number,
  description_length?: number
) => ({
  type: GET_PRODUCT_SEARCH[REQUEST],
  query_string,
  all_word,
  page,
  limit,
  description_length
});

const searchSuccess = (products: product_lists) => ({
  type: GET_PRODUCT_SEARCH[SUCCESS],
  payload: products
});

const searchFailure = (err: error) => ({
  type: GET_PRODUCT_SEARCH[FAILURE],
  err: err.message
});

interface searchRequestAction {
  type: typeof GET_PRODUCT_SEARCH["REQUEST"];
  query_string: string;
  all_word?: string;
  page?: number;
  limit?: number;
  description_length?: number;
}

interface searchSuccessAction {
  type: typeof GET_PRODUCT_SEARCH["SUCCESS"];
  payload: product_lists;
}

interface searchFailureAction {
  type: typeof GET_PRODUCT_SEARCH["FAILURE"];
  err: error;
}

// GET_PRODUCT_DETATILS
const detailRequest = (id: string) => ({
  type: GET_PRODUCT_DETAIL[REQUEST],
  id
});

const detailSuccess = (details: products_detail) => ({
  type: GET_PRODUCT_DETAIL[SUCCESS],
  payload: details
});

const detailFailure = (err: error) => ({
  type: GET_PRODUCT_DETAIL[FAILURE],
  err: err.message
});

interface detailRequestAction {
  type: typeof GET_REVIEWS["REQUEST"];
  id: string;
}

interface detailSuccessAction {
  type: typeof GET_REVIEWS["SUCCESS"];
  payload: products_detail;
}

interface detailFailureAction {
  type: typeof GET_REVIEWS["FAILURE"];
  err: error;
}
// GET_REVIEWS
const reviewRequest = (id: string) => ({
  type: GET_REVIEWS[REQUEST],
  id
});

const reviewSuccess = (reviews: review[]) => ({
  type: GET_REVIEWS[SUCCESS],
  payload: reviews
});

const reviewFailure = (err: error) => ({
  type: GET_REVIEWS[FAILURE],
  err
});

interface reviewRequestAction {
  type: typeof GET_REVIEWS["REQUEST"];
  id: string;
}

interface reviewSuccessAction {
  type: typeof GET_REVIEWS["SUCCESS"];
  payload: review[];
}

interface reviewFailureAction {
  type: typeof GET_REVIEWS["FAILURE"];
  err: error;
}

// GET_PRODUCTS
const productRequest = (id?: string, page?: number) => ({
  type: GET_PRODUCTS[REQUEST],
  id,
  page
});

const productSuccess = (data: product_lists) => ({
  type: GET_PRODUCTS[SUCCESS],
  payload: data
});

const productFailure = (err: error) => ({
  type: GET_PRODUCTS[FAILURE],
  err
});

interface productRequestAction {
  type: typeof GET_PRODUCTS["REQUEST"];
  id?: string;
  page?: number;
}

interface productSuccessAction {
  type: typeof GET_PRODUCTS["SUCCESS"];
  payload: products | products_detail;
}

interface productFailureAction {
  type: typeof GET_PRODUCTS["FAILURE"];
  err: error;
}

// GET_PRODUCTS_BY_CATEGORY
const productByCategoryRequest = (id?: string, page?: number) => ({
  type: GET_PRODUCTS_BY_CATEGORY[REQUEST],
  id,
  page
});

const productByCategorySuccess = (data: product_lists) => ({
  type: GET_PRODUCTS_BY_CATEGORY[SUCCESS],
  payload: data
});

const productByCategoryFailure = (err: error) => ({
  type: GET_PRODUCTS_BY_CATEGORY[FAILURE],
  err
});

interface productByCategoryRequestAction {
  type: typeof GET_PRODUCTS_BY_CATEGORY["REQUEST"];
  id?: string;
  page?: number;
}

interface productByCategorySuccessAction {
  type: typeof GET_PRODUCTS_BY_CATEGORY["SUCCESS"];
  payload: products | products_detail;
}

interface productByCategoryFailureAction {
  type: typeof GET_PRODUCTS_BY_CATEGORY["FAILURE"];
  err: error;
}
// GET_PRODUCTS_BY_DEPARTMENT
const productByDepartmentRequest = (id?: string, page?: number) => ({
  type: GET_PRODUCTS_BY_DEPARTMENT[REQUEST],
  id,
  page
});

const productByDepartmentSuccess = (data: product_lists) => ({
  type: GET_PRODUCTS_BY_DEPARTMENT[SUCCESS],
  payload: data
});

const productByDepartmentFailure = (err: error) => ({
  type: GET_PRODUCTS_BY_DEPARTMENT[FAILURE],
  err
});

interface productByDepartmentRequestAction {
  type: typeof GET_PRODUCTS_BY_DEPARTMENT["REQUEST"];
  id: string | undefined;
  page?: number;
}

interface productByDepartmentSuccessAction {
  type: typeof GET_PRODUCTS_BY_DEPARTMENT["SUCCESS"];
  payload: products | products_detail;
}

interface productByDepartmentFailureAction {
  type: typeof GET_PRODUCTS_BY_DEPARTMENT["FAILURE"];
  err: error;
}

export const setPage = (currentpage: number) => ({
  type: SET_PAGE,
  currentpage
});

interface setPageAction {
  type: typeof SET_PAGE;
  currentpage: number;
}

export type ProductActionTypes =
  | productRequestAction
  | productSuccessAction
  | productFailureAction
  | productByCategoryRequestAction
  | productByCategorySuccessAction
  | productByCategoryFailureAction
  | productByDepartmentRequestAction
  | productByDepartmentSuccessAction
  | productByDepartmentFailureAction
  | setPageAction;

export default {
  searchRequest,
  searchSuccess,
  searchFailure,
  productRequest,
  productSuccess,
  productFailure,
  productByCategoryRequest,
  productByCategorySuccess,
  productByCategoryFailure,
  productByDepartmentRequest,
  productByDepartmentSuccess,
  productByDepartmentFailure,
  reviewRequest,
  reviewSuccess,
  reviewFailure,
  detailRequest,
  detailSuccess,
  detailFailure,
  setPage
};
