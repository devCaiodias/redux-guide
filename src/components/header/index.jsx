import {  useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import { loginUser, logoutUser } from "../../redux/user/action";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);


  const { currentUser } = useSelector(rootReducer =>  rootReducer.userReducer)
  // const { cartProduct } = useSelector(rootReducer =>  rootReducer.cartReducer)
  
  const cartproductsCouunt = useSelector(selectProductsCount) 
  
  const dispatch = useDispatch()
  

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({name: "Caio Dias", email: "Caio@caio.com"}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ): (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({cartproductsCouunt})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
