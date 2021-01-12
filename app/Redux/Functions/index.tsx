import { eventChannel } from "redux-saga";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { CreateUserAction, FetchDataAction, LoginEmailPasswordAction, OnFacebookAction, OnGoogleAction, PayloadFetchDataApi, RegisterEmailPasswordAction } from "../../interface/payload";
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Alert } from "react-native";
import { GoogleSignin } from '@react-native-community/google-signin';
import Axios from 'axios'
GoogleSignin.configure();

const db = firestore()
export function getAuthChannel() {
    const authChannel = eventChannel(emit => {
        const unsubscribe = auth().onAuthStateChanged(user => emit({ user }));
        return unsubscribe;
    });
    return authChannel;
}

export async function onLogin(action: LoginEmailPasswordAction) {
    const param = action.payload
    const res = await auth()
        .signInWithEmailAndPassword(param.email, param.password)
        .then((res) => {
            return true
        })
        .catch(error => {
            return false

        });
    return res
}



export async function onFacebook(action: OnFacebookAction) {
    // Attempt login with permissions
    console.log('onFacebook :>> ');
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
        throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    console.log('data :>> ', data);
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // Sign-in the user with the credential
    const res = auth().signInWithCredential(facebookCredential)
        .then((res) => {
            return true
        })
        .catch(error => {
            Alert.alert('error :>> ', error)
            return false
        });
    return res
}

export async function onGoogle(action: OnGoogleAction) {
    console.log('onGoogle :>> ');
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const res = auth().signInWithCredential(googleCredential)
        .then((res) => {
            return true
        })
        .catch(error => {
            Alert.alert('error :>> ', error)
            return false
        });
    return res
}

export async function onRegister(action: RegisterEmailPasswordAction) {
    const param = action.payload
    const res = await auth()
        .createUserWithEmailAndPassword(param.email, param.password)
        .then((res) => {
            return true
        })
        .catch(error => {
            return false

        });
    return res
}

export async function onCreateUser(action: CreateUserAction) {
    // const param = action.payload
    // const res = await auth()
    //     .createUserWithEmailAndPassword(param.email, param.password)
    //     .then((res) => {
    //         return true
    //     })
    //     .catch(error => {
    //         return false

    //     });
    //    return res
}


export async function getDataAPI() {
    const doc = await Axios.get('https://jsonplaceholder.typicode.com/posts').then((item) => {
        return item
    }).catch(() => {
        return null
    })
    return doc
}

// export async function getTokenFb() {
//     const doc = await Axios.get('https://jsonplaceholder.typicode.com/posts').then((item) => {
//         return item
//     }).catch(() => {
//         return null
//     })
//     return doc
// }

export async function fectDataApi(token: string) {
    const baseUrl = 'https://itstep-expense-tracker.herokuapp.com/api/transaction_types/2'
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const res = await Axios.get(baseUrl, config).then((item) => { return item }).catch((err) => { return null })
    return res

}

export async function getCategory(token: string) {
    const baseUrl = 'https://itstep-expense-tracker.herokuapp.com/api/transaction_types/2'
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const res = await Axios.get(baseUrl, config).then((item) => { return item }).catch((err) => { return null })
    return res
}

export async function getCurrency(token: string) {
    const baseUrl = 'https://itstep-expense-tracker.herokuapp.com/api/currencies'
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const res = await Axios.get(baseUrl, config).then((item) => { return item }).catch((err) => { return null })
    return res
}

export async function setCurrency() {
      
  }