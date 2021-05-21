import { combineReducers } from 'redux'
import Todos from './todos'
import ToggleShowFILTER from './toggleShowFILTER'
import Theme from './theme'
import TogglePopup from './togglePopup'

export default combineReducers({
    todos: Todos,
    toggleShowFILTER: ToggleShowFILTER,
    theme: Theme,
    togglePopup:TogglePopup,
})