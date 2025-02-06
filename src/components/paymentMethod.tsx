"use client";

import React, { useState } from "react";
import { MdOutlineSecurity } from "react-icons/md";

const PaymentMethod: React.FC = () => {
  const [paymentOption, setPaymentOption] = useState<string>("Credit Card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cardHolder: "",
    cvc: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = () => {
    if (!termsAgreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log("Payment Details:", { paymentOption, cardDetails });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

      {/* Payment Options */}
      <div className="mb-6 p-4 border rounded bg-[#F6F7F9]">
        {["Credit Card", "PayPal", "Bitcoin"].map((option) => (
          <label key={option} className="flex items-center space-x-2 mb-2 cursor-pointer">
            <input
              type="radio"
              name="paymentOption"
              value={option}
              checked={paymentOption === option}
              onChange={() => setPaymentOption(option)}
              className="form-radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {/* Credit Card Details */}
      {paymentOption === "Credit Card" && (
        <div className="space-y-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            className="w-full p-3 border rounded text-[#90A3BF] bg-gray-50"
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="expirationDate"
              placeholder="MM/YY"
              value={cardDetails.expirationDate}
              onChange={handleInputChange}
              className="flex-1 p-3 border rounded bg-gray-50"
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={cardDetails.cvc}
              onChange={handleInputChange}
              className="w-24 p-3 border rounded bg-gray-50"
            />
          </div>
          <input
            type="text"
            name="cardHolder"
            placeholder="Card Holder"
            value={cardDetails.cardHolder}
            onChange={handleInputChange}
            className="w-full p-3 border rounded bg-gray-50"
          />
        </div>
      )}

      {/* Confirmation Section */}
      <div className="mt-6">
        <h1 className="font-semibold">Confirmation</h1>
        <p className="text-[#90A3BF] text-sm font-thin">
          We are getting to the end. Just a few clicks and your rental is ready!
        </p>
        <div className="mt-3 space-y-2">
          <label className="flex items-center space-x-2 text-[#1F2544] cursor-pointer">
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
              className="form-checkbox"
            />
            <span>I agree to the terms and conditions and privacy policy.</span>
          </label>
          <label className="flex items-center space-x-2 text-[#1F2544] cursor-pointer">
            <input
              type="checkbox"
              checked={marketingAgreed}
              onChange={() => setMarketingAgreed(!marketingAgreed)}
              className="form-checkbox"
            />
            <span>I agree to receive marketing and newsletter emails. No spam, promised!</span>
          </label>
        </div>
        <button
          onClick={handlePaymentSubmit}
          className="w-full sm:w-40 h-14 py-2 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition"
        >
          Rent Now
        </button>
      </div>

      {/* Security Notice */}
      <div className="mt-6 flex flex-col items-center text-center sm:text-left sm:items-start">
        <MdOutlineSecurity className="text-3xl text-blue-600" />
        <h1 className="font-semibold text-[#1A202C] mt-2">All your data is safe</h1>
        <p className="text-sm text-[#90A3BF]">
          We use the most advanced security to provide you with the best experience ever.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethod;
