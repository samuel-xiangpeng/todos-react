import React from 'react'
import classNames from 'classnames'
const Todo = function (props) {
    const { onclick, completed,toggleTodo } = props
    return (
        <li>
            <i className='iconfont icon-001-man' />
            <span className='btn-controls'>
                <i className={ classNames({
                    "btn iconfont": true,
                    "icon-lujing": completed,
                    "icon-weiwancheng": !completed
                }) } onClick={toggleTodo}/>
                <i onClick={ onclick } className='btn iconfont icon-shanchu' />
            </span>
            { props.children }
        </li>)
}
export default Todo