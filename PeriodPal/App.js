import React, {useEffect} from 'react';
import Index from './src/index';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import GlobalService from './src/GlobalContext';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GlobalService>
        <Index />
      </GlobalService>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
