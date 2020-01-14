import React from 'react'
import ActiveTodoList from '../containers/ActiveTodoList'
import { createGlobalStyle } from "styled-components"

const App = () => (
  <div>
    <ActiveTodoList />
    <GlobalStyle />
  </div>
)

export default App

const GlobalStyle = createGlobalStyle`
  @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
  @import url('https://fonts.googleapis.com/css?family=Caveat&display=swap');
  body {
    height: 100vh;
    background: #354648;
    font-family: 'Caveat', cursive;
    padding-top: 50px;
  }
`