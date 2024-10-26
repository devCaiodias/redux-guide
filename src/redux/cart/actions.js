import CartActionTypes from "./action-types"

export const cartAdd = (payload) => ({
    type: CartActionTypes.ADDPRODUCT,
    payload
})