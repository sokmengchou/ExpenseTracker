import { call, put, takeEvery } from "redux-saga/effects";
import { FetchCategoryAction, FetchCurrencyAction, FetchDataApiAction, FetchTokenFbAction, SelectedCurrencyAction } from "../../interface/payload";
import { getCategory, getCurrency, getDataAPI, setCurrency } from "../Functions";
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

function* fetchCategory(action: FetchCategoryAction) {
    const param = action.payload
    try {

        const item = yield getCategory(param.refreshToken)

        if (item) {
            const categoryDocs = item.data.type
            // console.log('object :>> ', categoryDocs.type);
            yield put({ type: Types.ON_FETCH_CATEGORY_SUCCESS, categoryDocs })
        }

    } catch (err) {
        yield put({ type: Types.ON_FETCH_CATEGORY_ERROR })
    }
}

function* fetchCurrency(action: FetchCurrencyAction) {
 
    const param = action.payload
    try {

        const item = yield getCurrency(param.refreshToken)
        if (item) {
            const currencyDocs = item.data

            yield put({ type: Types.ON_FETCH_CURRENCY_SUCCESS, currencyDocs })
        }


    } catch (err) {
        yield put({ type: Types.ON_FETCH_CURRENCY_ERROR })
    }
}

function* selectedCurrency(action: SelectedCurrencyAction) {
    const param = action.payload

    try {
        const selectedCurrency = param.selectedCurrency
        yield put({ type: Types.ON_SELECTED_CURRENCY_SUCCESS, selectedCurrency })
        yield param.navigation.goBack()
    } catch (err) {
        yield put({ type: Types.ON_FETCH_CURRENCY_ERROR })
    }
}

export const DataSaga = [

    takeEvery(Types.ON_FETCH_DATA_API, fetchDataApi),
    takeEvery(Types.ON_FETCH_CATEGORY, fetchCategory),
    takeEvery(Types.ON_FETCH_CURRENCY, fetchCurrency),
    takeEvery(Types.ON_SELECTED_CURRENCY, selectedCurrency)

]