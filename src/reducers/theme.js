const GlobalTheme = function (state = 0, action) {
    switch (action.type) {
        case "SET_GLOBAL_THEME":
            return action.themeNumber
        default:
            return state
    }
}

export default GlobalTheme