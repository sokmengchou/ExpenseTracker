import { types } from "@babel/core";
import { UserCanActive, UserInterface } from ".";
import { NavigationInterface } from "./package";
//payload Canactive Interface
export interface PayloadCanActive {
    navigation: NavigationInterface,
    user: any
}
//Payload CanActive action interface
export interface CanActiveAction {
    type: any,
    payload: PayloadCanActive
}
//Paload FetchData interface
export interface PayloadFetchData {
    user: UserInterface
}
//Payload FetchData action interface
export interface FetchDataAction {
    type: any,
    payload: PayloadFetchData
}

export interface PayloadLoginEmailPassword {
    email: string,
    password: string
}

export interface LoginEmailPasswordAction {
    type: any,
    payload: PayloadLoginEmailPassword
}

export interface PayloadRegisterEmailPassword {
    email: string,
    password: string
}

export interface RegisterEmailPasswordAction {
    type: any,
    payload: PayloadRegisterEmailPassword
}
export interface LogOutAction {
    type: any,
    payload: PayloadLogOut
}
export interface PayloadLogOut {
}

export interface PayloadCreateUser {
    firstName: string,
    lastName: string,
    selectedCurrency: any,
    gender: any,
    dateOfBirth: any,
    account: UserCanActive,
    navigation: NavigationInterface
}

export interface CreateUserAction {
    type: any,
    payload: PayloadCreateUser
}

export interface PayloadOnFacebook {
}

export interface OnFacebookAction {
    type: any,
    payload: PayloadOnFacebook
}

export interface PayloadOnGoogle {
}

export interface OnGoogleAction {
    type: any,
    payload: PayloadOnGoogle
}

export interface FetchDataApiAction {
    type: any,
    payload: PayloadFetchDataApi
}
export interface PayloadFetchDataApi {

}

export interface EditProfileAction {
    type: any,
    payload: PayloadEditProfile
}
export interface PayloadEditProfile {
    account: UserInterface,
    navigation: NavigationInterface,
    firstName: string,
    lastName: string,
    email: string,
    gender: any,
    dateOfBirth: Date
}

export interface FetchCategoryAction {
    type: any,
    payload: PayloadFetchCategory
}
export interface PayloadFetchCategory {
    refreshToken: string
}

export interface FetchCurrencyAction {
    type: any,
    payload: PayloadFetchCurrency
}
export interface PayloadFetchCurrency {
    refreshToken: string
}
export interface SelectedCurrencyAction {
    type: any,
    payload: PayloadSelectedCurrency
}
export interface PayloadSelectedCurrency {
    navigation: NavigationInterface,
    selectedCurrency: any
}