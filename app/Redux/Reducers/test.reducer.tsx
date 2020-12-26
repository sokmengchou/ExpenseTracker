import Types from '../Types'
const initialState = {
    loading: true,
    progress: false,
    uploading: false,
    user: []
}
const TestReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case Types.FETCH_USER:
            return { ...state, loading: true }
        case Types.FETCH_USER_SUCCESS:
            console.log('action.user :>> ', action.user);
            return { ...state, user: action.user, loading: false }
        case Types.FETCH_USER_ERROR:
            return { ...state, loading: false }

        default:
            return { ...state }

    }


}

export default TestReducer