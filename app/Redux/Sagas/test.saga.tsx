import { put, takeEvery } from "redux-saga/effects";
import { FetchDataAction } from "../../interface/payload";
import { userRef } from "../../services/data.service";
import { pushToArray } from "../../services/mapping.service";
import Types from "../Types";

function* fetchUser(action:any){
    console.log('action :>> ', action);
}

export const TestSaga = [
    takeEvery(Types.LOGIN_EMAIL_PASSWORD,fetchUser)
]