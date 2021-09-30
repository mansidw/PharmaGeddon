//import React from 'react'
//import Myheader from '../Basics/Myheader'
////import { Footer } from '../Basics/Footer'

//const History = () => {

//    return (
//        <div>
//            <Myheader/>
            
            
//        </div>
//    )
//}

//export default History

import React from 'react';
import { PaystackButton } from 'react-paystack';


const config = {
  reference: (new Date()).getTime().toString(),
  email: "manshi02dwivedi@gmail.com",
  amount: 20000,
  currency: 'USD',
  publicKey: 'pk_test_dcb34940ae613ffa1caccf7d869dd74f536059bf',
};

function History() {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Paystack Button Implementation',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

  return (
    <div className="App">
      <header className="App-header">
       
       <h1>mansi</h1>
       <PaystackButton {...componentProps} />
      </header>
      
    </div>
  );
}

export default History;