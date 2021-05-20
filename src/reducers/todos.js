
/*
    todos列表专栏功能设计 
        1. 增加事项
        2. 删除事项

*/

const defaultState = []

const Todos = function (state = defaultState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    todoMessage: action.todoMessage,
                    id: action.id,
                    completed: false
                }
            ]
        case "DEL_TODO":
            return state.filter((item) => {
                return item.id !== action.id
            })
        case "TOGGLE_TODO":
            return state.map(todo => action.id === todo.id ? { ...todo, completed : !todo.completed } : todo)
        default:
            return state
    }
}

export default Todos