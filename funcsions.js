function plus(){
    return {
        type:"INCREMENT"
    }
}
function minus(){
    return {
        type:"DECREMENT"
    }
}
const actions ={plus,minus}
export default actions