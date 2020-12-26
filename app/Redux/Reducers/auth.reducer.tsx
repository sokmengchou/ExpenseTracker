import Types from '../Types'
const initialState = {
    loading: true,
    progress: false,
    uploading: false,
    account: null,
    confirmation: 0,
    logo: ''

}
const AuthReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case Types.CAN_ACTIVE:
            return { ...state, loading: true }
        case Types.CAN_ACTIVE_SUCCESS:
            console.log('action.account :>> ', action.account);
            return { ...state, account: action.account, loading: false }
        case Types.CAN_ACTIVE_ERROR:
            return { ...state, loading: false }
            

        case Types.LOGIN_EMAIL_PASSWORD:
            return { ...state, progress: true }
        case Types.LOGIN_EMAIL_PASSWORD_SUCCESS:
            return { ...state, progress: false, account: action.account }
        case Types.LOGIN_EMAIL_PASSWORD_ERROR:
            return { ...state, progress: false }


        case Types.REGISTER_EMAIL_PASSWORD:
            return { ...state, progress: true }
        case Types.REGISTER_EMAIL_PASSWORD_SUCCESS:
            return { ...state, progress: false }
        case Types.REGISTER_EMAIL_PASSWORD_ERROR:
            return { ...state, progress: false }


        case Types.CREATE_USER:
            return { ...state, progress: true }
        case Types.CREATE_USER_SUCCESS:
            return { ...state, progress: false, account: action.account }
        case Types.CREATE_USER_ERROR:
            return { ...state, progress: false }


        case Types.LOG_OUT:
            return { ...state, progress: true }
        case Types.LOG_OUT_SUCCESS:
            return { ...state, progress: false }
        case Types.LOG_OUT_ERROR:
            return { ...state, progress: false }


        case Types.ON_FACEBOOK:
            return { ...state, progress: true }
        case Types.ON_FACEBOOK_SUCCESS:
            return { ...state, progress: false }
        case Types.ON_FACEBOOK_ERROR:
            return { ...state, progress: false }


        case Types.ON_GOOGLE:
            return { ...state, progress: true }
        case Types.ON_GOOGLE_SUCCESS:
            return { ...state, progress: false }
        case Types.ON_GOOGLE_ERROR:
            return { ...state, progress: false }

        default:
            return { ...state }

    }


}

export default AuthReducer