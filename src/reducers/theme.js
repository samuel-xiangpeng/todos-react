const GlobalTheme = function (state = '', action) {
    switch (action.type) {
        case "SET_GLOBAL_THEME":
            return action.theme
        default:
            return state
    }
}

export default GlobalTheme