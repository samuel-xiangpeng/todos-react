import React from 'react'
import { connect } from 'react-redux'
import './styles/App.css'
import HeaderC from '../containers/HeaderC'
import TodoListC from '../containers/TodoListC'
import SlideC from '../containers/SlideC'
import PopupC from '../containers/PopupC'


function App(props) {
  const { togglePopup } = props
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
      {togglePopup ? <PopupC /> : '' }
      {/* <button className='randomTheme-btn' data-tip='更改背景颜色'>
        <i className='iconfont icon-zhuti'></i>
      </button> */}
    </div>
  );
}
const mapStateToProps = function (state) {
  return {
    togglePopup: state.togglePopup.togglePopup,
    theme: state.theme
  }
}

export default connect(mapStateToProps)(App);
