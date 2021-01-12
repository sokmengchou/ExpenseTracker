import { call, put, takeEvery, takeLatest, take } from "redux-saga/effects";
import { CanActiveAction, CreateUserAction, EditProfileAction, FetchDataAction, LoginEmailPasswordAction, LogOutAction, OnFacebookAction, OnGoogleAction, RegisterEmailPasswordAction } from "../../interface/payload";
import { userRef } from "../../services/data.service";
import { pushToArray, pushToObject, StatusObject } from "../../services/mapping.service";
import { getUserFromAsyncStorage, setUserToAsyncStorage } from "../../services/storage.service";
import { getAuthChannel, onFacebook, onGoogle, onLogin, onRegister } from "../Functions";
import Types from "../Types";
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";
import { UserInterface } from "../../interface/index";


function* canActive(action: CanActiveAction) {
    const param = action.payload
    const channel = yield call(getAuthChannel)
    try {
        while (true) {



            const result = yield take(channel)

            if (!result.user) {
                yield param.navigation.reset({
                    index: 0,
                    routes: [{ name: "LOGIN" }]
                })
            } else {
                const refresh = yield auth().currentUser
                const refreshToken = yield refresh?.getIdToken().then((refreshToken: any) => { return refreshToken })
                const hasUser = yield userRef().doc(result.user.uid).get().then((item) => { return item }).catch(() => { return null })
                if (hasUser.exists) {
                    const account = pushToObject(hasUser)
                    yield put({ type: Types.CAN_ACTIVE_SUCCESS, account, refreshToken })
                    yield param.navigation.reset({
                        index: 0,
                        routes: [{ name: "APP_TAB" }]
                    })

                } else {
                    const account = result.user
                    yield put({ type: Types.CAN_ACTIVE_SUCCESS, account, refreshToken })
                    yield param.navigation.reset({
                        index: 0,
                        routes: [{ name: "CREATE_USER" }]
                    })
                }
            }
        }


    } catch (error) {
        yield put({ type: Types.CAN_ACTIVE_ERROR, error })
    }
}

function* loginEmailPassword(action: LoginEmailPasswordAction) {

    try {
        const res = yield onLogin(action)
        if (!res) {
            Alert.alert('Invalid Account!', "Your Email or Password is not correct")
            yield put({ type: Types.LOGIN_EMAIL_PASSWORD_ERROR })
        } else {
            yield put({ type: Types.LOGIN_EMAIL_PASSWORD_SUCCESS })
        }
    } catch (err) {
        yield put({ type: Types.LOGIN_EMAIL_PASSWORD_ERROR })
    }
}

function* loginFacebook(action: OnFacebookAction) {

    try {
        const res = yield onFacebook(action)
        if (!res) {
            Alert.alert('Invalid Account!', "Your Email or Password is not correct")
            yield put({ type: Types.ON_FACEBOOK_ERROR })
        } else {
            yield put({ type: Types.ON_FACEBOOK_SUCCESS })
        }
    } catch (err) {
        yield put({ type: Types.ON_FACEBOOK_ERROR })
    }
}

function* loginGoogle(action: OnGoogleAction) {

    try {
        const res = yield onGoogle(action)
        if (!res) {
            Alert.alert('Invalid Account!', "Your Email or Password is not correct")
            yield put({ type: Types.ON_GOOGLE_ERROR })
        } else {
            yield put({ type: Types.ON_GOOGLE_SUCCESS })
        }
    } catch (err) {
        yield put({ type: Types.ON_GOOGLE_ERROR })
    }
}



function* registerEmailPassword(action: RegisterEmailPasswordAction) {

    try {
        const res = yield onRegister(action)
        if (!res) {
            Alert.alert('Email already exist!', "Please register with other email address")
            yield put({ type: Types.REGISTER_EMAIL_PASSWORD_ERROR })
        }
    } catch (err) {
        yield put({ type: Types.REGISTER_EMAIL_PASSWORD_ERROR })
    }
}

function* logOut(action: LogOutAction) {

    try {
        const res = yield auth().signOut()
        if (!res) {
            // Alert.alert('Email already exist!', "Please register with other email address")
            yield put({ type: Types.LOGIN_EMAIL_PASSWORD_ERROR })
        }
    } catch (err) {
        yield put({ type: Types.LOG_OUT_ERROR })
    }
}

function* createUser(action: CreateUserAction) {
    const param = action.payload
    try {
        const doc: UserInterface = {
            key: param.account.uid,
            email: param.account.email,
            lastName: param.lastName,
            firstName: param.firstName,
            selectedCurrency: param.selectedCurrency,
            fullName: param.lastName + ' ' + param.firstName,
            gender: param.gender,
            dateOfBirth: param.dateOfBirth,
            createdDate: new Date,
            pageKey: Number(new Date),
            status: StatusObject().ACTIVE,
            createdByKey: param.account.uid,
        }
        console.log('doc :>> ', doc);
        const res = yield userRef().doc(doc.key).set(doc).then(() => { return true }).catch(() => { return false })
        if (res) {
            yield put({ type: Types.CREATE_USER_SUCCESS, account: doc })
            yield param.navigation.reset({
                index: 0,
                routes: [{ name: "APP_TAB" }]
            })
        }
    } catch (err) {
        yield put({ type: Types.CREATE_USER_ERROR })
    }
}

function* onEditProfile(action: EditProfileAction) {
    const param = action.payload
    try {
        const doc: UserInterface = {
            key: param.account.key,
            email: param.account.email,
            lastName: param.lastName,
            firstName: param.firstName,
            fullName: param.lastName + ' ' + param.firstName,
            gender: param.gender,
            dateOfBirth: param.dateOfBirth,
            createdDate: new Date,
            pageKey: Number(new Date),
            status: StatusObject().ACTIVE,
            createdByKey: param.account.key,
        }
        const res = yield userRef()
            .doc(doc.key)
            .update(doc)
            .then(() => { return true })
            .catch((err) => { return false })
        if (res) {
            yield put({ type: Types.ON_EDIT_PROFILE_SUCCESS, account: doc })
            yield param.navigation.reset({
                index: 0,
                routes: [{ name: "SETTING" }]
            })
        }
    } catch (err) {
        yield put({ type: Types.ON_EDIT_PROFILE_ERROR })
    }
}

export const AuthSaga = [
    takeLatest(Types.CAN_ACTIVE, canActive),
    takeLatest(Types.LOGIN_EMAIL_PASSWORD, loginEmailPassword),
    takeLatest(Types.REGISTER_EMAIL_PASSWORD, registerEmailPassword),
    takeLatest(Types.CREATE_USER, createUser),
    takeLatest(Types.LOG_OUT, logOut),
    takeLatest(Types.ON_FACEBOOK, loginFacebook),
    takeLatest(Types.ON_GOOGLE, loginGoogle),
    takeLatest(Types.ON_EDIT_PROFILE, onEditProfile)

]