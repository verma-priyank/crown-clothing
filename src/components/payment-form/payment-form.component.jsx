import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import {  selectCartprice } from "../../store/cart/cart.selector";
import { paymentCompleted } from "../../store/cart/cart.action";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../buttons/buttons.components";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const billingAmount = useSelector(selectCartprice)
  const {displayName} = useSelector(state=>state.user.currentUser)
  console.log(displayName)
  const [processingPayment , setisprocessingPayment] = useState(false)
  const dispatch = useDispatch();
  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    
     setisprocessingPayment(true)
    const response = await fetch(
      "/.netlify/functions/create-payment-intent",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: billingAmount*100*85}),
      }
    ).then((res) => res.json());
    const {paymentIntent : {client_secret}} = response ;
    console.log(client_secret)
    const paymentResult = await stripe.confirmCardPayment(client_secret ,{
      payment_method :{
        card : elements.getElement(CardElement) ,
        billing_details :{
          name : displayName ? displayName:'Guest' ,
          
          
        }
      }
    })
    setisprocessingPayment(false)
    if(paymentResult.error){
      return alert("Payment Failed")
    } else if(paymentResult.paymentIntent.status==="succeeded"){
      alert("Payment Successful")
      dispatch(paymentCompleted());
    }
  };
  
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment :</h2>
        <CardElement />
        <Button buttontype="inverted" children="PayNow" isloading={processingPayment} />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
