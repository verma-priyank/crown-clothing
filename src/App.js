import React from "react";
import { useEffect } from "react";
import { onAuthStateChangedListener  ,signOutUser ,createUserDocumentfromAuth} from "./utils/firebase/firebase.utils";
import Home from "./routes/home/home.component"
import { useDispatch } from "react-redux";
import {Routes , Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component"
import SignIn from "./routes/authentication/authentication.component";
import Shop from "./shop/shop.component"
import Checkout from "./routes/checkout/checkout.component";
import { setcurrentUser } from "./store/user/user.action";


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener(user=>{
      console.log(user)
      if(user){
        createUserDocumentfromAuth(user)
      }
      console.log('dispatched worked')
      dispatch(setcurrentUser(user));
    });
    return unsubscribe;

},[])
 
 
  return (
    <Routes>
    <Route path="/" element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path="/shop/*" element={<Shop />} />
    <Route path="/auth" element={<SignIn />} />
    <Route path="/checkout" element={<Checkout />} />
    </Route>
    
    </Routes>
  );
}

export default App;
