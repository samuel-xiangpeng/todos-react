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


export const setTogglePopup = function (id) {
    return {
        type: "SET_POPUP",
        id
    }
}

export const togglePopupStatus = function (id) {
    return {
        type: "TOGGLE_POPUP_STATUS",
    }
}


//产生随机数字，对应主题数组
export const randomThemeNumber = function(){
    return {
        type:"SET_GLOBAL_THEME",
        themeNumber: Math.floor(Math.random()*100)
    }
}