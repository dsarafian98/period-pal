import React, {useState, useEffect, useContext} from 'react';
import {GlobalContextConsumer, GlobalContextProvider} from './GlobalContext';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {GlobalContext} from './GlobalContext';

const Index = props => {
  const [loading, setLoading] = useState(true);

  const {name, setName} = useContext(GlobalContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};
export default Index;

const styles = StyleSheet.create({});
