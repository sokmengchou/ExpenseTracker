import * as React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { _renderProductRightNavigation, _renderRightNavigation } from './function';
import LoginContainer from "../screens/auth/login/LoginContainer"
import RegisterContainer from '../screens/auth/register/RegisterContainer';
import ProfileDetailContainer from '../screens/ProfileDetail/ProfileDetailContainer';
import SettingContainer from '../screens/setting/SettingContainer';
import modules from '../modules';
import { useNavigationState } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
function SettingStack() {
    const param: any = useNavigationState(state => state?.routes[1]?.state?.routes[3]?.params);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                stackAnimation: 'flip'

            }}>
            <Stack.Screen name="SETTING" component={SettingContainer} />
            <Stack.Screen name="PROFILE_DETAIL" component={ProfileDetailContainer} 
                options={({ navigation }: any) => ({
                    headerTintColor: modules.BLACK,
                    headerShown: true,
                    headerTitle: ``,
                    headerBackTitle: 'Back',
                    headerTransparent: false,
                    headerRight: () => _renderRightNavigation(navigation, "OPTIONSTORE", param, "dashboard")
                })}
            />


        </Stack.Navigator>
    )
}

export default SettingStack