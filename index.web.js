/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
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
AppRegistry.runApplication('ReactNativeTodoMVC', {
  rootTag: document.getElementById('react-root')
})
