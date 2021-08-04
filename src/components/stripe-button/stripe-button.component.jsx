import React from "react";
import StripeCheckout from "react-stripe-checkout";

import './stripe-button.style.scss';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JKNOPSIraqv7mlBNzs5wre2ZFLqhxz9SeGqIhM8fZi9JVwBjjR1tBefoWOwBBHYq2HIauUTHw1OQ2ojxOByYPLb00TxnrwpHi';
   
    const onToken = token => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label="Pay Now"
        name = 'bluebuy'
        billingAddress
        shippingAddress
        image= 'https://svgshare.com/i/CUz.svg'
        description= {`Your total is $${price}`}
        amount= {priceForStripe}
        panelLabel= 'Pay Now'
        token= {onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;