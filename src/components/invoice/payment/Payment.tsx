import * as React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import { order, customer } from "store/models";
import { stripeAction } from "store/actions";
import "./Payment.scss";
import Form from "./form";

interface Props {
  currentorder: order;
  charge: typeof stripeAction.postChargeRequest;
  user: customer;
}

const Payment: React.SFC<Props> = ({ currentorder, charge, user }) => {
  return (
    <>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
        <Elements>
          <div className="payment_container">
            <Form currentorder={currentorder} charge={charge} user={user}/>
          </div>
        </Elements>
      </StripeProvider>
    </>
  );
};

export default Payment;
