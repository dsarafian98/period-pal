import React, {useContext} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Account from '../pages/Account';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GlobalService from '../GlobalContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="account" component={Account} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default Tabs;
