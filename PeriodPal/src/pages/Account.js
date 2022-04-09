import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../GlobalContext';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {
  PINK,
  YELLOW,
  SALMONPINK,
  GREEN,
  BLUE,
  selectedColorScheme,
} from '../../ColorSchemes';

const Account = props => {
  const {name, color, setColor, getColor} = useContext(GlobalContext);

  useEffect(() => {});

  return (
    <SafeAreaView style={{backgroundColor: color.colors.background, flex: 1}}>
      <Button
        style={{backgroundColor: PINK.colors.primary}}
        labelStyle={{color: PINK.colors.text}}
        onPress={() => setColor(PINK)}>
        PINK
      </Button>

      <Button
        style={{backgroundColor: YELLOW.colors.primary}}
        labelStyle={{color: YELLOW.colors.text}}
        onPress={() => setColor(YELLOW)}>
        YELLOW
      </Button>

      {/*<Button
        style={{backgroundColor: SALMONPINK.colors.primary}}
        onPress={() => setColor(SALMONPINK)}>
        SALMON PINK
  </Button>*/}

      <Button
        style={{backgroundColor: GREEN.colors.primary}}
        labelStyle={{color: GREEN.colors.text}}
        onPress={() => setColor(GREEN)}>
        GREEN
      </Button>

      <Button
        style={{backgroundColor: BLUE.colors.primary}}
        labelStyle={{color: BLUE.colors.text}}
        onPress={() => setColor(BLUE)}>
        BLUE
      </Button>
    </SafeAreaView>
  );
};
export default Account;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  /*pinkButton: {
    backgroundColor: 'pink',
    color: 'lightpink',
  },
  salmonPinkButton: {
    backgroundColor: SALMONPINK.dark,
    color: SALMONPINK.light,
  },
  greenButton: {
    backgroundColor: GREEN.dark,
    color: GREEN.light,
  },
  blueButton: {
    backgroundColor: BLUE.dark,
    color: BLUE.light,
  },
  yellowButton: {
    backgroundColor: YELLOW.dark,
    color: YELLOW.light,
  },*/
});
