import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log('stripe',stripePromise);
const Payment = () => {
  const addCard = useLoaderData();
  
  return (
    <div>
      <h3 className="text-3xl">Pay Now</h3>
      <h3 className="text-xl">
        Payment For {addCard.product}
        {addCard.title}
      </h3>
      <h3 className="text-xl">Price: {addCard.price}</h3>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <Checkout addCard={addCard}></Checkout>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;