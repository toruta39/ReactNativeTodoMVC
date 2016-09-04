import React, { Component, PropTypes } from 'react'
import { TextInput } from 'react-native'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    const text = e.nativeEvent.text.trim()

    this.props.onSave(text)
    if (this.props.newTodo) {
      this.setState({ text: '' })
    }
  }

  handleChange(e) {
    this.setState({ text: e.nativeEvent.text })
  }

  render() {
    return (
      <TextInput style={[{
                   flex: 1,
                   height: 40
                 }, this.props.style]}
                 autoFocus={this.props.editing}
                 returnKeyType="done"
                 placeholder={this.props.placeholder}
                 value={this.state.text}
                 onChange={this.handleChange.bind(this)}
                 onSubmitEditing={this.handleSubmit.bind(this)} />
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput
