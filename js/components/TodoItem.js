import React, { Component, PropTypes } from 'react'
import TodoTextInput from './TodoTextInput'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

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
        <View style={style.innerContainer}>
          <TodoTextInput style={[style.text, style.input]}
                         text={todo.text}
                         editing={this.state.editing}
                         onSave={(text) => this.handleSave(todo.id, text)} />
        </View>
      )
    } else {
      element = (
        <View style={style.innerContainer}>
          <TouchableOpacity style={style.left} onPress={() => completeTodo(todo.id)} >
            <View style={[style.status, todo.completed && style.completedStatus]}>
              {todo.completed && <Image source={require('./assets/tick.png')} style={style.tickImage}/>}
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={style.center} onPress={this.handleDoubleClick.bind(this)}>
            <Text numberOfLines={1} style={[style.text]}>{todo.text}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.right} onPress={() => deleteTodo(todo.id)} >
            <Image source={require('./assets/cross.png')} style={style.crossImage}/>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={[style.container, this.props.first && style.firstContainer]}>
        {element}
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    padding: 16,
    borderColor: '#ededed',
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  firstContainer: {
    borderTopWidth: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 0,
    marginRight: 12,
  },
  center: {
    flex: 1,
  },
  right: {
    marginLeft: 12,
    flex: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    height: 24,
  },
  input: {
    width: null,
    marginLeft: 36,
  },
  status: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 12,
  },
  tickImage: {
    margin: 4
  },
  completedStatus: {
    borderColor: '#5dc2af',
  },
  corssImage: {
    width: 24,
    height: 24,
  }
})

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  first: PropTypes.bool
}

export default TodoItem
