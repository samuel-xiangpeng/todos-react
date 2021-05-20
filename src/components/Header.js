import React, { useRef, useCallback } from 'react'
import './styles/Header.css'
import { connect } from 'react-redux'
import { addTodo } from '../actions/'
const Header = (props) => {
    const { dispatch } = props
    const inputRef = useRef()

    const onSubmit = useCallback(() => {
        let value = inputRef.current.value
        if (value === '') {
            return
        }
        dispatch(addTodo(value))
        inputRef.current.value = ''
    }, [dispatch])

    const onKeyUp = function (e) {
        // console.log(e.keyCode)
        if(e.keyCode === 13){
            onSubmit()
        }
    }

    return (
        <div className='todos-header'>
            <input ref={ inputRef } onKeyUp={ onKeyUp } className='todos-input' placeholder='请输入你的待办事项' />
            <button className='todos-input-btn' onClick={ onSubmit }>Add</button>
        </div>
    )
}

export default connect()(Header)