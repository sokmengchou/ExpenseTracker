import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import HomeContainer from "../screens/Home/HomeContainer";
import LoginContainer from "../screens/auth/login/LoginContainer";
import RegisterContainer from "../screens/auth/register/RegisterContainer";
import CreateUserContainer from "../screens/auth/create-user/CreateUserContainer";
import WelcomeContainer from "../screens/auth/welcome/WelcomeContainer";
import AuthStack from "./AuthStack";
import { enableScreens } from 'react-native-screens';
import AppTab from "./AppTab";
import ProfileDetailContainer from "../screens/ProfileDetail/ProfileDetailContainer";
import TransactionContainer from "../screens/Transaction/TransactionContainer";
import WalletsContainer from "../screens/Wallets/WalletsContainer";
import BudgetContainer from "../screens/Budgets/BudgetContainer";
import CategoryContainer from "../screens/expense/AddExpense/Category/CategoryContainer";
import CurrencyContainer from "../screens/auth/create-user/Currency/CurrencyContainer";


enableScreens();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WELCOME"
        screenOptions={{
          headerShown: false,
          stackAnimation: 'fade'
        }}>

        <Stack.Screen name="WELCOME" component={WelcomeContainer} />
        <Stack.Screen name="LOGIN" component={LoginContainer} />
        <Stack.Screen name="REGISTER" component={RegisterContainer} />
        <Stack.Screen name="AUTH" component={AuthStack} />
        <Stack.Screen name="APP_TAB" component={AppTab} />
        <Stack.Screen name="CREATE_USER" component={CreateUserContainer} />
        <Stack.Screen name="PROFILE_DETAIL" component={ProfileDetailContainer} />
        <Stack.Screen name="TRANSACTION" component={TransactionContainer} />
        <Stack.Screen name="WALLETS" component={WalletsContainer} />
        <Stack.Screen name="BUDGETS" component={BudgetContainer} />
        <Stack.Screen name="CATEGORY" component={CategoryContainer} />
        <Stack.Screen name="CURRENCY" component={CurrencyContainer} />

        





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App