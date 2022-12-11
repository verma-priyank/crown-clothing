import React, { Fragment, useContext } from "react";
import {  Outlet } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import Cartdropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer , NavLink , NavLinks , Logocontainer } from "./navigation.styles";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

function Navigation() {
  const { currentUser, setcurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleclick = async () => {
    await signOutUser();
    setcurrentUser("");
  };

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
