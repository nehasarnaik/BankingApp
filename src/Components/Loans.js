import React from 'react';
import './Loans.css'; // Import your CSS file for styling

const Loans = () => {
  return (
    <><h1 style={{ color: 'rgb(31, 219, 37)' }}>Loans</h1>
      <div className="loan-container">

        <div className="loan-section">
          <h2>PERSONAL LOAN</h2>
          <ul>
            <li>Personal Loan Calculator</li>
            <li>Personal Loan on Credit Card</li>
            <li>Flexicash (Overdraft Against Salary)</li>
            <li>Business Loan</li>
          </ul>
        </div>

        <div className="loan-section">
          <h2>HOME LOANS</h2>
          <ul>
            <li>New Home loan</li>
            <li>Home Loan - Existing Customer</li>
            <li>Home Loan Calculator</li>
            <li>Loan Against Property</li>
            <li>Home Loan Balance Transfer</li>
            <li>Home Buyers Smartbook</li>
          </ul>
        </div>

        <div className="loan-section">
          <h2>CAR / TWO-WHEELER LOANS</h2>
          <ul>
            <li>New Car Loan</li>
            <li>Two-Wheeler Loan</li>
            <li>Pre Owned Used Car Loan</li>
            <li>Loan against Car</li>
            <li>Dream Car Search</li>
          </ul>
        </div>

        <div className="loan-section">
          <h2>EDUCATION LOAN</h2>
          <ul>
            <li>Benefits & Features</li>
            <li>Pre-Approved Education Loan</li>
            <li>Education Loan Calculator</li>
            <li>Apply for an Education Loan</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Loans;
