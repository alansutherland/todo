import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import AddTodo from '../containers/AddTodo'
import styled from "styled-components";

const TodoList = ({ todos, onTodoClick }) => (
   <List>
    <div className="pad-header">
      <h1>To Do</h1>
    </div>
    <div className="pad">
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
        <AddTodo />
      </ul>
    </div>   
   </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList

const List = styled.div`
  .pad-header, .pad { width: 500px; }
  .pad-header {
    height: 70px;
    margin: 10px auto 0;
    background-color: #00BCD4;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  h1{
    text-align: center;
    color: #fff;
    margin-bottom: 0;
    padding: 15px;
  }
  .pad { 
    margin: 0 auto 50px;
  }

  ul { 
    list-style: none;
    padding: 32px 50px;
    min-height: 500px;
    margin-top: 0;
    background: linear-gradient(#00BCD4, #f2f2f2 2px);
    background-size: 90px 30px;
  }
`