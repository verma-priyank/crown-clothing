import React, { Fragment, useContext } from "react";
import {  Outlet } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import Cartdropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer , NavLink , NavLinks , Logocontainer } from "./navigation.styles";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
// import { CartContext } from "../../context/cart.context";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
import { signOutStart } from "../../store/user/user.action";

function Navigation() {
  const dispatch = useDispatch();
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen)
  const currentUser = useSelector(state=> state.user.currentUser)
  const handleclick = async () => {
      dispatch(signOutStart())
    // await signOutUser();
    
  };
  console.log(currentUser)
  return (
    <Fragment>
      <NavigationContainer>
        <Logocontainer to="/">
          <div>
            <Crwnlogo className="logo" />
          </div>
        </Logocontainer>

        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink  to="/auth" onClick={handleclick}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink  to="/auth">
              SignIn
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <Cartdropdown />}
      </NavigationContainer>

      <div>
        <Outlet />
      </div>
    </Fragment>
  );
}
export default Navigation;
