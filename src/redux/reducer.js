import { combineReducers } from "redux";

const sendItem = (state = {}, action) => {
    switch (action.type) {
        case 'send':
            return action.payload
        default:
            return state
    }
}
const orderBag = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state,action.payload]
        case 'delete':
            state[action.payload] = "removed"
            alert(action.payload)
            return state.filter(x => x !== "removed")
        default:
            return state
    }
}
export default combineReducers({
    sendItem: sendItem,
    orderBag: orderBag
});
