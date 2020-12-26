import AsyncStorage from '@react-native-community/async-storage';
import  storage from '@react-native-firebase/storage';

export async function setUserToAsyncStorage(user: any) {
    await AsyncStorage.setItem('access_key', JSON.stringify(user))
}
export async function getUserFromAsyncStorage() {
    let user
    user = await AsyncStorage.getItem('access_key').then((item: any) => {
        return JSON.parse(item)
    }).catch((err) => {
        return null
    })
    return user
}
export function storageRef() {
 return storage();
}