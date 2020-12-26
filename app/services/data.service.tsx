import firestore from '@react-native-firebase/firestore'

const db = firestore()

export function userRef(){
    return db.collection('users')
}