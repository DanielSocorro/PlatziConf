import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from "../context/AppContext";
import useinitialState from "../hooks/useInitialState";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const App = () => {
  const initialState = useinitialState();
    return (
      <PayPalScriptProvider options={{"client-id": "AQ348XIPD92Fd586HLuYrTc1tqaYZHEpZIeT3rlMH04KUQBjZSZ0G2H4m4vsIhXs2-j3tSjtBbpcW-Ma"}}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
         <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/information" element={<Information />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/checkout/success" element={<Success />} />
          <Route path='*' element={<NotFound />} />
          </Routes>
          </Layout>
          </BrowserRouter>
          </AppContext.Provider>
          </PayPalScriptProvider>
    );
  }
  
  export default App;