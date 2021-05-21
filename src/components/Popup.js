/*
    弹出框
*/
import './styles/Popup.css'
const Popup = function (props) {
    const { togglePopupStatus, PopupData } = props
    console.log(PopupData)
    const message = PopupData.data.todoMessage
    return (
        <div className='todos-popup'>
            <div className='popup-header'>
                <h3>todos-详情</h3>
                <button onClick={ togglePopupStatus } className='popup-close'><i className='iconfont icon-guanbi'></i></button>
            </div>
            <div className='popup-body'>
                <div className='popup-content'>
                    { message }
                </div>
            </div>
            {/* <div className='popup-footer'>
                <button className='btn show-all'><i className='iconfont icon-shituxianshiquanbujiedian'></i></button>
                <button className='btn show-complete'><i className='iconfont icon-lujing'></i></button>
            </div> */}
        </div>
    )
}

export default Popup