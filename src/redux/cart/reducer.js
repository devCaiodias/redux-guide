import CartActionTypes from "./action-types";

const inicialState = { 
    cartProduct: [],
    cartProductTotalPrice: 0
}

const cartReducer = (state = inicialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADDPRODUCT:
            return {
                ...state,
                cartProduct: [...state.cartProduct, action.payload]
            }
    
        default:
            return state
    }
}

export default cartReducer