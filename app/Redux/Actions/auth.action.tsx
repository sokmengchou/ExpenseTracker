import { PayloadCanActive, PayloadCreateUser, PayloadLoginEmailPassword, PayloadOnFacebook, PayloadOnGoogle, PayloadRegisterEmailPassword, PayloadLogOut, PayloadEditProfile, PayloadFetchCategory } from "../../interface/payload";
import Types from "../Types";

export function canActive(payload: PayloadCanActive) {
  return {
    type: Types.CAN_ACTIVE,
    payload: payload
  }
}

export function onLoginEmailPassword(payload: PayloadLoginEmailPassword) {
  return {
    type: Types.LOGIN_EMAIL_PASSWORD,
    payload: payload
  }
}

export function onRegisterEmailPassword(payload: PayloadRegisterEmailPassword) {
  return {
    type: Types.REGISTER_EMAIL_PASSWORD,
    payload: payload
  }
}

export function onLogOut(payload: PayloadLogOut) {
  return {
    type: Types.LOG_OUT,
    payload: payload
  }
}

export function onFacebook(payload: PayloadOnFacebook) {
  return {
    type: Types.ON_FACEBOOK,
    payload: payload
  }
}

export function onGoogle(payload: PayloadOnGoogle) {
  return {
    type: Types.ON_GOOGLE,
    payload: payload
  }
}

export function onCreateUser(payload: PayloadCreateUser) {
  return {
    type: Types.CREATE_USER,
    payload: payload
  }
}

export function onEditProfile(payload: PayloadEditProfile) {
  return {
    type: Types.ON_EDIT_PROFILE,
    payload: payload
  }
}

export function onFetchCategory(payload: PayloadFetchCategory) {
  return {
    type: Types.ON_FETCH_CATEGORY,
    payload: payload
  }
}