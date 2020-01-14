import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos) => {
  return todos
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
})

const ActiveTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ActiveTodoList
