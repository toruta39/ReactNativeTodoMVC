import React, { PropTypes, Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import { View, Text, TouchableOpacity } from 'react-native'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <Text>
        <Text>{activeCount || 'No'}</Text> {itemWord} left
      </Text>
    )
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <TouchableOpacity onPress={() => onShow(filter)}>
        <Text>{title}</Text>
      </TouchableOpacity>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <TouchableOpacity onPress={onClearCompleted} >
          <Text>Clear completed</Text>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View>
        {this.renderTodoCount()}
        <View>
          {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
            <View key={filter}>
              {this.renderFilterLink(filter)}
            </View>
          )}
        </View>
        {this.renderClearButton()}
      </View>
    )
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Footer
