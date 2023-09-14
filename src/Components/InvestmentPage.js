import React from 'react';
import './InvestmentPage.css';

const InvestmentPage = () => {
  return (
    <>
    <h1>Investments</h1>
    <div className="investment-page">
      <div className="investment-service-container">
        <div className="left-column">
          <h2>Investment Products</h2>
          <ul>
            <li>Mutual Funds</li>
            <li>Alternate Investment Products</li>
            <li>Demat account &amp; Trading Account</li>
          </ul>
        </div>
        <div className="right-column">
          <h2>Govt. Deposit Schemes/Bonds</h2>
          <ul>
            <li>E-Kisan Vikas Patra Scheme, 2014</li>
            <li>Sovereign Gold Bonds</li>
            <li>Senior Citizen Savings Deposit Scheme</li>
            <li>Mahila Samman Savings Certificate (MSSC), 2023</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default InvestmentPage;
