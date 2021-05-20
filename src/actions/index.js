/*
    actionCreator创建
*/
let item = 0

export const addTodo = function (message) {
    return {
        id: item++,
        type: "ADD_TODO",
        todoMessage: message
    }
}

export const DelTodo = function (id) {
    return {
        id: id,
        type: "DEL_TODO"
    }
}

export const ToggleTodo = function (id) {
    return {
        id: id,
        type: "TOGGLE_TODO"
    }
}

export const setToggleShowFILTER = function (filter) {
    return {
        type: "SET_SHOW_FILTER",
        filter
    }
}
