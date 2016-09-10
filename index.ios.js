/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './js/store/configureStore'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './js/containers/App'

class ReactNativeTodoMVC extends Component {
  constructor() {
    super()
    this.state = {
      store: configureStore()
    }
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTodoMVC', () => ReactNativeTodoMVC);
