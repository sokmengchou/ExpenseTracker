import * as React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import LoginContainer from "../screens/auth/login/LoginContainer"
import RegisterContainer from '../screens/auth/register/RegisterContainer';

const Stack = createNativeStackNavigator();
function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                stackAnimation: 'fade'
            }}>
            <Stack.Screen name="LOGIN" component={LoginContainer} />
            <Stack.Screen name="REGISTER" component={RegisterContainer} />

        </Stack.Navigator>
    )
}

export default AuthStack