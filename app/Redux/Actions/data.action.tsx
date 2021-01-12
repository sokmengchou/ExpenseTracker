import { PayloadFetchCurrency, PayloadFetchDataApi, PayloadSelectedCurrency } from "../../interface/payload";
import Types from "../Types";

export function fetchDataApi(payload: PayloadFetchDataApi) {
  return {
    type: Types.ON_FETCH_DATA_API,
    payload: payload
  }
}

export function onFetchCurrency(payload: PayloadFetchCurrency) {
  return {
    type: Types.ON_FETCH_CURRENCY,
    payload: payload
  }
}

export function onSelectedCurrency(payload: PayloadSelectedCurrency) {
  return {
    type: Types.ON_SELECTED_CURRENCY,
    payload: payload
  }
}