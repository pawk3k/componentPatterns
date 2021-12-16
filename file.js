function wrapper(callback){
    const innerState = 3
    callback(innerState)
    return callback(innerState)

}

function add1(state){
    return state + 1
}

wrapper(add1)
// console.log(wrapper(add1))


