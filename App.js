/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style = {styles.contains}>
      <Text>커밋 테스트~</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contains: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
