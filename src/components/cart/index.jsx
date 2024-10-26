import { useSelector } from "react-redux";

// Styles
import * as Styles from "./styles";

import CartItem from '../cart-item/index.jsx'

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { cartProduct } = useSelector((rootReducer) => rootReducer.cartReducer)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

          {cartProduct.map((product) => (
            <CartItem product={product}/>
            ))}

      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
