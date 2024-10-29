import { useSelector } from "react-redux";

// Styles
import * as Styles from "./styles";

import CartItem from '../cart-item/index.jsx'

import { selectTotalPriceProduct } from "../../redux/cart/cart.selectors.js";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { cartProduct } = useSelector((rootReducer) => rootReducer.cartReducer)

  const productsTotalPrice = useSelector(selectTotalPriceProduct)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

          {cartProduct.map((product) => (
            <CartItem product={product}/>
            ))}

      <Styles.CartTotal>
        Total: R${productsTotalPrice}
      </Styles.CartTotal>

      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
