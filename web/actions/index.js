import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return (dispatch) => {
    if (global.WebViewBridge) {
      WebViewBridge.send('CLEAR_COMPLETED')
      WebViewBridge.onMessage = (message) => {
        if (message === 'CLEAR_COMPLETED_SUCCESS') {
          dispatch({ type: types.CLEAR_COMPLETED })
        }

        WebViewBridge.onMessage = null
      }
    } else {
      if (confirm('Do you really want to clear all completed items?')) {
        dispatch({ type: types.CLEAR_COMPLETED })
      }
    }
  }
}
