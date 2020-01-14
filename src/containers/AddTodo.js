import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import styled, { createGlobalStyle } from "styled-components";

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <Add>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input 
          ref={node => { input = node}} 
          placeholder="What do you want to do today?"
        />
        <button type="submit">
          <span>+</span>
        </button>
      </form>
    </Add>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo


const Add = styled.div`
  line-height: 30px;
  margin-top: 30px;
  input{
    width: 250px;
    border: 0;
    line-height: 23px;
    background: transparent;
    font-family: 'Caveat', cursive;
    font-size: 22px;
    outline: none;
  }
  button{
    border: 0;
    background: #00BCD4;
    padding: 0 4px;
    border-radius: 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    outline: none;
    span{
      color: #fff;
      line-height: 20px;
      margin-top: -2px;
    }
  }
`