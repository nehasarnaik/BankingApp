import React from 'react';
import './Exchange.css'; // Import your CSS file for styling

const Exchange = () => {
  return (
    <div className="exchange-container">
      <section className="section">
        <img src="data:image/jpeg;base64,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" />
        <h2>Forex Services</h2>
        <p>
          Managing your foreign exchange fluctuations risk effectively is essential for cross-border business.
        </p>
        <p>
          Natwest brings you numerous advantages without any hidden charges and a dedicated Relationship Manager to guide you on all your cross-border transactions, including spot foreign exchange, forward contracts, and derivatives solutions.
        </p>
        <p>
          Natwest provides access to a wide range of unique benefits, services, business intelligence, advisory services, and concessional charges typically enjoyed by large corporations.
        </p>
      </section>

      <section className="section">
        <h2>Natwest offers:</h2>
        <ul>
          <li>Active dealings in the inter-bank market for major currencies, spot, and forwards</li>
          <li>Quick and competitive dealing in prices in major currencies</li>
          <li>Customized solutions for specific client exposures</li>
          <li>Online platform for Forex rates</li>
          <li>Early credits to your account</li>
          <li>Established correspondent banking relationships</li>
        </ul>
      </section>

      <section className="section">
        <h2>BUY FOREX PREPAID CARD</h2>
        <img
          src="https://www.icicibank.com/content/dam/icicibank/india/onlineservice/travel-card.jpg"
          alt="Forex Prepaid Card"
          className="card-image"
        />
        <p>Forex Prepaid Card:</p>
        <ul>
          <li>One card can be loaded with 15 major global currencies - USD, EUR, GBP, CAD, AUD, CHF, JPY, SGD, AED, SEK, ZAR, SAR, THB, NZD, and HKD</li>
          <li>Facility of remote reload through Natwest Bank Internet Banking or iMobile app</li>
          <li>Chip and Pin enabled Card for enhanced security</li>
          <li>Real-time SMS and e-mail alerts for every transaction</li>
        </ul>
        <button className="buy-now-button">KNOW MORE BUY NOW</button>
        <p>Don’t have a Natwest Bank Savings Account? Please click here to Buy a Forex Prepaid Card Now</p>
      </section>

      <section className="section">
        <h2>Currency Notes:</h2>
        <img
          src="https://www.icicibank.com/content/dam/icicibank/india/onlineservice/currency-notes.jpg"
          alt="Currency Notes"
          className="currency-image"
        />
        <p>
          Currency notes in various denominations can be carried by customers traveling overseas to meet small expenses
        </p>
        <p>
          Offered in 14 currencies: USD, EUR, GBP, AUD, CAD, CHF, JPY, AED, SGD, HKD, QAR, SAR, THB, and KWD
        </p>
      </section>
    </div>
  );
}

export default Exchange;
