import Types from '../Types'
const initialState = {
    loading: true,
    docs: [],
    categoryDocs: [],
    currencyDocs: [],
    selectedCurrency: {}
}

const DataReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        case Types.ON_FETCH_DATA_API:
            return { ...state, loading: true }
        case Types.ON_FETCH_DATA_API_SUCCESS:
            return { ...state, loading: false, docs: action.docs }
        case Types.ON_FETCH_DATA_API_ERROR:
            return { ...state, loading: false }

        case Types.ON_FETCH_CATEGORY:
            return { ...state, loading: true }
        case Types.ON_FETCH_CATEGORY_SUCCESS:
            return { ...state, loading: false, categoryDocs: action.categoryDocs }
        case Types.ON_FETCH_CATEGORY_ERROR:
            return { ...state, loading: false }

        case Types.ON_FETCH_CURRENCY:
            return { ...state, loading: true }
        case Types.ON_FETCH_CURRENCY_SUCCESS:
            return { ...state, loading: false, currencyDocs: action.currencyDocs }
        case Types.ON_FETCH_CURRENCY_ERROR:
            return { ...state, loading: false }

        case Types.ON_SELECTED_CURRENCY:
            return { ...state, loading: true }
        case Types.ON_SELECTED_CURRENCY_SUCCESS:
            return { ...state, loading: false, selectedCurrency: action.selectedCurrency }

        default:
            return { ...state }

    }


}

export default DataReducer