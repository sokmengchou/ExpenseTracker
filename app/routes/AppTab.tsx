import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import TabBarIcon from '../components/TabBarIcon'
import HomeContainer from '../screens/Home/HomeContainer';
import { styles } from './style';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import modules from '../modules';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import SettingContainer from '../screens/setting/SettingContainer';
import AddExpenseContainer from '../screens/expense/AddExpense/AddExpenseContainer';
import MenuStack from './SettingStack';
import SettingStack from './SettingStack';

interface Props {
  account: any,
  navigation: any
}
const MainTabBar = createBottomTabNavigator();
const AppTab = (props: Props) => {

  return (
    <MainTabBar.Navigator
      tabBarOptions={{
        showLabel: false,
        style:{
          backgroundColor:'transparent',
          borderTopWidth:0
        }
      }}
    >

      <MainTabBar.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          )
        }}
      />
      <MainTabBar.Screen
        name="Add"
        component={AddExpenseContainer}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <TabBarIcon resize={50} name="add-circle" color={color} />
          )
        }}
      />
      <MainTabBar.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings" color={color} />
          )
        }}
      />
    </MainTabBar.Navigator>

  );
};


const mapStateToProps = (state: any) => (
  {
    account: state.authReducer.account
  }
)

const mapDispatchToProps = (dispatch: any) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(AppTab)