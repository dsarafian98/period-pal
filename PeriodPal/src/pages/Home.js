import React, {useContext} from 'react';
import GlobalService from '../GlobalContext';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const Home = props => {
  const name = useContext(GlobalService);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({});
