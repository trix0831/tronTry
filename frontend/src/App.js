import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExclamationCircleIcon, CheckCircleIcon, KeyIcon, UserIcon, CurrencyDollarIcon } from '@heroicons/react/solid';
import axios from 'axios';

const Input = ({ label, type, value, onChange, icon: Icon }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-blue-300 mb-1">{label}</label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-blue-900 block w-full pl-10 pr-3 py-2 border border-blue-700 rounded-md leading-5 text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  </div>
);

function App() {
  const [privateKey, setPrivateKey] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:3001/api/transfer', {
        privateKey,
        toAddress,
        amount: parseInt(amount),
      });

      setResult({ success: true, txid: response.data.txid });
    } catch (error) {
      setResult({ success: false, error: error.response?.data?.error || 'An error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-extrabold text-blue-100 mb-6"
        >
          TRX Transfer
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md bg-blue-800 bg-opacity-50 py-8 px-4 shadow sm:rounded-lg sm:px-10 backdrop-filter backdrop-blur-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Private Key"
            type="password"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            icon={KeyIcon}
          />
          <Input
            label="To Address"
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            icon={UserIcon}
          />
          <Input
            label="Amount (in SUN)"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            icon={CurrencyDollarIcon}
          />
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Transfer TRX'}
            </motion.button>
          </div>
        </form>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-6 p-4 rounded-md ${
              result.success ? 'bg-green-900 bg-opacity-50' : 'bg-red-900 bg-opacity-50'
            }`}
          >
            {result.success ? (
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <p className="text-sm text-green-200">Transaction successful! TXID: {result.txid}</p>
              </div>
            ) : (
              <div className="flex items-center">
                <ExclamationCircleIcon className="h-5 w-5 text-red-400 mr-2" />
                <p className="text-sm text-red-200">Error: {result.error}</p>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;