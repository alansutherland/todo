import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const Todo = ({ onClick, completed, text, id }) => (
  <Item
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input type="checkbox" id={id} onClick={onClick}/>
    <label for={id}><span>{text}</span></label>
  </Item>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

const Item = styled.li`
  line-height: 30px;
  input[type=checkbox] { 
    display:none; 
    position: relative;
  } 
  input[type=checkbox] + label:before, input[type=checkbox]:checked + label:before {
    font-family: FontAwesome;
    display: inline-block;
    vertical-align: middle;
  }
  input[type=checkbox] + label:before { content: "\f096"; width: 28px } 
  input[type=checkbox]:checked + label:before { content: "\f046"; color: #00BCD4; } 
  input[type=checkbox] + label:before { letter-spacing: 10px; margin-top: -3px; } 
  input[type=checkbox]:checked + label:before { letter-spacing: 8px; } 
  label { 
    font-size: 22px; 
    line-height: 20px;
  }
`