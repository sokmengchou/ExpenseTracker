import Types from '../Types'
const initialState = {
    loading: true,
    docs: []

}

const DataReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        case Types.ON_FETCH_DATA_API:
            return { ...state, loading: true }
        case Types.ON_FETCH_DATA_API_SUCCESS:
            return { ...state, loading: false, docs: action.docs }
        case Types.ON_FETCH_DATA_API_ERROR:
            return { ...state, loading: false }

        default:
            return { ...state }

    }


}

export default DataReducer