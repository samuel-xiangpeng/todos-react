import { connect } from 'react-redux'
import Popup from '../components/Popup'
import { togglePopupStatus } from '../actions'

// 获取popup数据
const getPopupData = function (state) {
    //获取当前点击的id以及返回当前id的数据
    return {
        data: Object.assign({}, state.todos[state.togglePopup.id])
    }
}

const mapStateToProps = function (state) {
    console.log(state)
    return {
        PopupData: getPopupData(state)
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        togglePopupStatus: function () {
            dispatch(togglePopupStatus())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Popup)