import React from 'react'
import { connect } from 'react-redux'
import './styles/App.css'
import HeaderC from '../containers/HeaderC'
import TodoListC from '../containers/TodoListC'
import SlideC from '../containers/SlideC'
function App() {
  return (
    <div className="App">
      <div className='sam-header'>
        <h1>Todos</h1>
      </div>
      <div className='sam-todos'>
        <HeaderC />
        <TodoListC />
        <SlideC />
      </div>
    </div>
  );
}


export default connect()(App);
