

const TogglePopup = function (state = { id: 0, togglePopup: false }, action) {
    switch (action.type) {
        case "TOGGLE_POPUP_STATUS":
            return Object.assign({},state,{togglePopup:!state.togglePopup})
        case "SET_POPUP":
            return {
                ...state,
                id: action.id,
                togglePopup:!state.togglePopup
            }
        default:
            return state
    }
}

export default TogglePopup