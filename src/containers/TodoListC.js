import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { DelTodo, ToggleTodo,setTogglePopup } from '../actions'


//下面这个函数对列表进行过滤
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter((t) => {
                return t.completed
            })
        case 'SHOW_UNCOMPLETED':
            return todos.filter((t) => {
                return !t.completed
            })
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.toggleShowFILTER),
        isPopup: state.togglePopup
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        delTodo: function (id) {
            dispatch(DelTodo(id))
        },
        toggleTodo: function (id) {
            dispatch(ToggleTodo(id))
        },
        setTogglePopup: function (id) {
            dispatch(setTogglePopup(id))
         }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)