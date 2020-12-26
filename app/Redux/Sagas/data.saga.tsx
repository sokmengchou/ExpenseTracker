import { put, takeEvery } from "redux-saga/effects";
import { FetchDataApiAction } from "../../interface/payload";
import { getDataAPI } from "../Functions";
import Types from "../Types";

function* fetchDataApi(action: FetchDataApiAction) {
    try {
        const item = yield getDataAPI()
        if (item) {
            const docs = item.data
            yield put({ type: Types.ON_FETCH_DATA_API_SUCCESS, docs })
        }

    } catch (err) {
        yield put({ type: Types.ON_FETCH_DATA_API_ERROR })
    }
}

export const DataSaga = [

    takeEvery(Types.ON_FETCH_DATA_API, fetchDataApi),

]