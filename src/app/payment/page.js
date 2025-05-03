'use client';
import { useState } from 'react';
import AppHeader from '../../components/layout/AppHeader';
import BottomNav from '../../components/layout/BottomNav';

export default function Payment() {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const notificationCount = 1;

  const handleSubmit = async () => {
    if (!accountNumber || !amount) {
      setMessage("Please fill in all fields.");
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');

  try {
    const result = await makePayment(accountNumber, amount);
    setMessage('Payment successful!');
    console.log('Payment successful:', JSON.stringify(result, null, 2));
    setAccountNumber('');
    setAmount('');
  } catch (error) {
    setMessage(`Payment failed: ${error.message}`);
  } finally {
    setIsSubmitting(false);
  }
};

  makePayment(accountNumber, amount);
  return (
    <div className="bg-black text-white h-screen flex flex-col font-sans">
      <div className="max-w-sm mx-auto flex flex-col flex-grow w-full">
        <AppHeader notificationCount={notificationCount} />

        <main className="flex-grow overflow-y-auto px-4 py-5 space-y-6">
          <h1 className="text-xl font-medium text-center mt-2 mb-6">Make a Payment</h1>
          
          {message && (
            <div className="mb-4 p-3 bg-green-900 text-green-100 rounded-md text-center">
              {message}
            </div>
          )}
          
          <div className="bg-zinc-900 rounded-xl p-5 space-y-5">
            <div className="flex flex-col space-y-2">
              <label htmlFor="account" className="text-gray-300 text-sm font-medium">
                Bank Account Number
              </label>
              <input
                id="account"
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="px-4 py-3 border border-zinc-700 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Enter account number"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="amount" className="text-gray-300 text-sm font-medium">
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-400">€</span>
                </div>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-7 px-4 py-3 border border-zinc-700 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                  placeholder="0.00"
                  min="0.01"
                  step="0.01"
                />
              </div>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out flex justify-center mt-4"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Send Payment"
              )}
            </button>
          </div>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

async function makePayment(iban, amount) {
    try {
      const response = await fetch('https://bunq-api.onrender.com/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          iban, // IBAN used for matching backend format
          amount 
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Payment failed: ${errorData.message || response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error making payment:', error);
      throw error; // Re-throw to allow handling by the caller
    }
  }