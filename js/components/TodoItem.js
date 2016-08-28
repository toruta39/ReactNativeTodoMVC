import React, { Component, PropTypes } from 'react'
import TodoTextInput from './TodoTextInput'
import { View, Text, TouchableOpacity } from 'react-native'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <View>
          <TouchableOpacity onPress={() => completeTodo(todo.id)} >
            <Text>{todo.completed ? 'Completed' : 'Active'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleDoubleClick.bind(this)}>
            <Text>{todo.text}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTodo(todo.id)} >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View>
        {element}
      </View>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem
