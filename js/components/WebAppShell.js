import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import WebViewBridge from 'react-native-webview-bridge'

export default class WebAppShell extends Component {
  render() {
    return (
      <View style={{alignSelf: 'stretch', backgroundColor: '#fff', flex: 1}}>
        <WebViewBridge source={{uri: "http://www.google.com"}} />
      </View>
    )
  }
}
