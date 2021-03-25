export const sendItem = (param) => {
    return {
        type: "send",
        payload: param
    }
}
export const addToOrderBag = (param) => {
    return {
        type: "add",
        payload: param
    }
}
export const DeleteFromBag = (param) => {
    return {
        type: "delete",
        payload: param
    }
}
export const removeFromOrderBag = (param) => {
    return {
        type: "remove",
        payload: param
    }
}