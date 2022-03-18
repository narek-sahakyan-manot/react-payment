import React from 'react';
// Components
import HomePage from './components/HomePage';
// Styles
import './index.css';
// Stripe Imports
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// the key is located in the .env file
const stripePromise = loadStripe("pk_live_51JPNDnL1qENZFgB9f3eiGevN9E6JzPNr5xmUGLqZrCmknnuh6ubmVNtSvcazN8dnvY7q0LnLRTApmFxPH2baIhcV00RyCiYmMH");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  );
}

export default App;
