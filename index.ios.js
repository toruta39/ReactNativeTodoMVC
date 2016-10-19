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
      <View style={{
              backgroundColor: '#f5f5f5',
              paddingTop: 20,
              flex: 1,
            }}>
        <Provider store={this.state.store}>
          <App />
        </Provider>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTodoMVC', () => ReactNativeTodoMVC);
