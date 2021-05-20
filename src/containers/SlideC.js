import Slide from '../components/Slide'
import { connect } from 'react-redux'
import { setToggleShowFILTER } from '../actions'
const mapStateToProps = function (state) {
    console.log(state)
    return {
        state
    }
}
const mapDispatchToProps = function (dispatch) {
    return {
        setToggleShowFILTER: function (filter) {
            return function () {
                dispatch(setToggleShowFILTER(filter))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide)