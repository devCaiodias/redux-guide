export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.cartProduct.reduce(
        (acc, curr) => acc + curr.quantity,
        0
    )
}

export const selectTotalPriceProduct = (rootReducer) => {
     return rootReducer.cartReducer.cartProduct.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
     )
}