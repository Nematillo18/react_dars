import {createStore} from 'redux'
function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            state.count++
            break;
        case "DECREMENT":
            state.count--
            break;
        default:
            break
    }
    return {...state}
}
const store =createStore(reducer,{
    count:0
})

console.log(store.getState());
export default store