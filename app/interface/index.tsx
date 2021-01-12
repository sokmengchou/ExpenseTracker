

export interface UserCanActive {
    _auth: any,
    _user: any,
    displayName: string,
    email: string,
    emailVerified: any,
    isAnonymous: any,
    metadata: any,
    phoneNumber: string,
    photoURL: string,
    providerData: any,
    providerId: any,
    refreshToken: any,
    uid: string,
}
export interface UserInterface {
    key: string,
    email: string,
    lastName: string,
    firstName: string,
    selectedCurrency: any,
    gender: any,
    dateOfBirth: Date,
    createdDate: Date,
    pageKey: number,
    status: any,
    createdByKey: string
    fullName: string
}
export interface RoutesNavigationInterface {
    key: string,
    name: string
    params: any
}