import React, {useState, useEffect, useContext} from 'react';
import {GlobalContextConsumer, GlobalContextProvider} from './GlobalContext';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {GlobalContext} from './GlobalContext';
import {NavigationContainer} from '@react-navigation/native';
import {Drawer} from 'react-native-paper';
import Tabs from './navigation/TabNavigation';

const Index = props => {
  const [loading, setLoading] = useState(true);

  const {name, setName} = useContext(GlobalContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Tabs />
    </SafeAreaView>
  );
};
export default Index;

const styles = StyleSheet.create({});
