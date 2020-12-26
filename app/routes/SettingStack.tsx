import * as React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import LoginContainer from "../screens/auth/login/LoginContainer"
import RegisterContainer from '../screens/auth/register/RegisterContainer';
import ProfileDetailContainer from '../screens/ProfileDetail/ProfileDetailContainer';
import SettingContainer from '../screens/setting/SettingContainer';

const Stack = createNativeStackNavigator();
function SettingStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                stackAnimation: 'flip'
            }}>
            <Stack.Screen name="SETTING" component={SettingContainer} />
            <Stack.Screen name="PROFILE_DETAIL" component={ProfileDetailContainer} />


        </Stack.Navigator>
    )
}

export default SettingStack