import React from 'react'
import './styles/TodoList.css'
import Todo from './Todo'
const TodoList = function (props) {
    const { todos, toggleTodo, delTodo ,setTogglePopup} = props
    return (
        <div className='sam-todos-list'>
            <ul className='todos-list'>
                {
                    todos ? todos.map((todo) => {
                        let todoMessage = todo.todoMessage
                        if(todoMessage && todoMessage.length > 23){
                            todoMessage = todoMessage.split("").splice(0,23).join("") + '...'
                        }
                        
                        return <Todo key={ todo.id } setTogglePopup={()=>{setTogglePopup(todo.id)}} toggleTodo={ () => { toggleTodo(todo.id) } } onclick={ () => { delTodo(todo.id) } } { ...todo }></Todo>
                    }) : null
                }
            </ul>
        </div>
    )
}

export default TodoList