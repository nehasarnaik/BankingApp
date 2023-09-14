import React from 'react'
import './insurance.css'

const Insurance = () => {
  return (
    <div className="insurance-container">
      <div className="insurance-section">
        <h2>LIFE INSURANCE:</h2>
        <ul>
          <li>Life Insurance</li>
          <li>Term Life Insurance Plans</li>
          <li>Cancer Cover</li>
        </ul>
      </div>

      <div className="insurance-section">
        <h2>HEALTH INSURANCE:</h2>
        <ul>
          <li>Health Shield 360 Top-Up</li>
        </ul>
      </div>

      <div className="insurance-section">
        <h2>VEHICLE INSURANCE:</h2>
        <ul>
          <li>Car Insurance</li>
          <li>Two-wheeler Insurance</li>
        </ul>
      </div>

      <div className="insurance-section">
        <h2>TRAVEL INSURANCE:</h2>
        <ul>
          <li>Single Trip Travel Insurance</li>
          <li>Multi Trip Travel Insurance</li>
        </ul>
      </div>

      <div className="insurance-section">
        <h2>RETIREMENT PLANNING:</h2>
        <ul>
          <li>Guaranteed Pension Plan</li>
        </ul>
      </div>
      <div>
        <img src="data:image/jpeg;base64,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" />
      </div>
      <div className="tools-container">
      <h2>Explore our interactive tools & premium calculators to plan for your financial goals.</h2>
      <div className="tools">
        <div className="tool">
          <h3>EMI Calculator</h3>
        </div>
        <div className="tool">
          <h3>Income Tax Calculator</h3>
        </div>
        <div className="tool">
          <h3>Human Life Value Calculator</h3>
        </div>
        <div className="tool">
          <h3>House Rent Allowance Calculator</h3>
        </div>
        <div className="tool">
          <h3>Retirement Planning Calculator</h3>
        </div>
        <div className="tool">
          <h3>Child Education Plan Calculator</h3>
        </div>
        <div className="tool">
          <h3>Term Insurance Calculator</h3>
        </div>
        <div className="tool">
          <h3>Cancer Insurance Calculator</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Insurance