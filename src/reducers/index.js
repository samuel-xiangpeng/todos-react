import { combineReducers } from 'redux'
import Todos from './todos'
import ToggleShowFILTER from './toggleShowFILTER'
import Theme from './theme'

export default combineReducers({
    todos: Todos,
    toggleShowFILTER: ToggleShowFILTER,
    theme: Theme
})