/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WebAppShell from './js/components/WebAppShell';

class ReactNativeTodoMVC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebAppShell />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactNativeTodoMVC', () => ReactNativeTodoMVC);
