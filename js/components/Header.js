import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'
import { View, Text, StyleSheet } from 'react-native'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <View style={style.container}>
          <TodoTextInput newTodo
                         style={style.input}
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 0,
    padding: 16,
  },
  input: {
    fontSize: 26,
  }
})

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
