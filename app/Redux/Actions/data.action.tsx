import { PayloadFetchDataApi } from "../../interface/payload";
import Types from "../Types";

export function fetchDataApi(payload: PayloadFetchDataApi) {
  return {
    type: Types.ON_FETCH_DATA_API,
    payload: payload
  }
}