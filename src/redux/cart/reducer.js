import CartActionTypes from "./action-types";

const inicialState = { 
    cartProduct: [],
    cartProductTotalPrice: 0
}

const cartReducer = (state = inicialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADDPRODUCT:
            //  verificar se o produto já está no carrinho 
            const productIsAlreadyInCart = state.cartProduct.some(
                (product) => product.id === action.payload.id
            )

            // se ele tiver no carrinho, aumentar sua quantidade em 1
            if (productIsAlreadyInCart) {
                return {
                    ...state,
                    cartProduct: state.cartProduct.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1}: product),
                }
            }

            //  se ele n tiver adicionar ele no carrinho

            return {
                ...state,
                cartProduct: [...state.cartProduct, {...action.payload, quantity: 1}]
            }
            
            case CartActionTypes.REMOVE_PRODUCT:
                return {
                    ...state, 
                    cartProduct: state.cartProduct.filter(product => product.id !== action.payload)
                }

            case CartActionTypes.INCREMENTPRODUCT:
                return {
                    ...state,
                    cartProduct: state.cartProduct.map(product =>  product.id === action.payload ? {...product, quantity: product.quantity + 1}: product)
                }

            case CartActionTypes.DECREMENTEPRODUCT:
                return {
                    ...state,
                    cartProduct: state.cartProduct.map(product =>  product.id === action.payload ? {...product, quantity: product.quantity - 1}: product ).filter(product => product.quantity > 0)
                }
        default:
            return state
    }
}

export default cartReducer