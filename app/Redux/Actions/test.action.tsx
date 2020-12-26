import { PayloadFetchData } from "../../interface/payload";
import Types from "../Types";

export function fetchUser(payload:any) {
    console.log('objectfetchUser :>> ', );
    return {
        type: Types.FETCH_USER,
        payload: payload
    }
}