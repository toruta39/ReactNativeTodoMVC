import React, { PropTypes, Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

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
      <Text style={style.count}>
        {activeCount || 'No'} {itemWord} left
      </Text>
    )
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <TouchableOpacity onPress={() => onShow(filter)}>
        <Text style={[
            style.filter,
            selectedFilter === filter && style.activeFilter
          ]} >{title}</Text>
      </TouchableOpacity>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <TouchableOpacity onPress={onClearCompleted} style={style.clearContainer}>
          <Text style={style.clear}>Clear completed</Text>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View style={style.container}>
        {this.renderTodoCount()}
        <View style={style.filterContainer}>
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  count: {
    position: 'absolute',
    left: 0,
    top: 4,
    padding: 3,
    color: '#777',
    fontSize: 10,
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filter: {
    color: '#777',
    fontSize: 10,
    margin: 3,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'transparent',
  },
  activeFilter: {
    borderColor: 'rgba(175, 47, 47, 0.2)',
  },
  clearContainer: {
    position: 'absolute',
    right: 0,
    top: 4,
  },
  clear: {
    padding: 3,
    color: '#777',
    fontSize: 10,
  }
})

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Footer
