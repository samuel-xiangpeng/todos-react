
/*
    这个reducer控制todo上的显示
        1. 显示全部 SHOW_ALL

*/
const toggleShowFILTER = function (state = "SHOW_ALL", action) {
    switch (action.type) {
        case "SET_SHOW_FILTER":
            return action.filter //修改了state
        default:
            return state
    }
}

export default toggleShowFILTER