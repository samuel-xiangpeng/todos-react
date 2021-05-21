import React from 'react'
import './styles/Slide.css'
const Slide = function (props) {
    const { setToggleShowFILTER, state } = props
    let t = state.toggleShowFILTER
    return (
        <div className='todos-slide'>
            <button data-tip='显示全部' disabled={ t === "SHOW_ALL" } onClick={ setToggleShowFILTER('SHOW_ALL') } className='btn show-all'><i className='iconfont icon-shituxianshiquanbujiedian'></i></button>
            <button data-tip='显示完成' disabled={ t === "SHOW_COMPLETED" } onClick={ setToggleShowFILTER('SHOW_COMPLETED') } className='btn show-complete'><i className='iconfont icon-lujing'></i></button>
            <button data-tip='显示未完成' disabled={ t === "SHOW_UNCOMPLETED" } onClick={ setToggleShowFILTER('SHOW_UNCOMPLETED') } className='btn show-uncomplete'><i className='iconfont icon-weiwancheng'></i></button>
        </div>
    )
}

export default Slide