import React, { Component } from 'react'
import {
  Text,
  View,
  Alert
} from 'react-native'
import WebViewBridge from 'react-native-webview-bridge'

export default class WebAppShell extends Component {
  onBridgeMessage(message) {
    if (message === 'CLEAR_COMPLETED') {
      Alert.alert(
        'Heads Up!',
        'Do you really want to clear all completed items?', [
           {
             text: 'Yes, I\'m sure.',
             onPress: () => this.refs.webviewbridge.sendToBridge('CLEAR_COMPLETED_SUCCESS'),
             style: 'destructive'
           },
           {
             text: 'No, I don\'t think so.'
           }
        ])
    }
  }

  render() {
    return (
      <View style={{alignSelf: 'stretch', backgroundColor: '#fff', flex: 1}}>
        <WebViewBridge ref="webviewbridge"
                       onBridgeMessage={this.onBridgeMessage.bind(this)}
                       source={{uri: "http://localhost:3000"}} />
      </View>
    )
  }
}
