import CartActionTypes from "./action-types"

export const cartAdd = (payload) => ({
    type: CartActionTypes.ADDPRODUCT,
    payload
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const imcrementProject = (payload) =>  ({
    type: CartActionTypes.INCREMENTPRODUCT,
    payload
})

export const decrementeProduct = (payload) =>  ({
    type: CartActionTypes.DECREMENTEPRODUCT,
    payload
})