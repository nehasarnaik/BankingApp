import React from 'react'
import './Fintech.css'
const Fintech = () => {
  return (
    <div className="fintech-container">
      <section className="section">
        <h2>Natwest STACK for Fintech</h2>
        <ul>
          <li>Start relationship instantly: Accounts Layer</li>
          <li>Transact digitally: Payments Layer</li>
          <li>Avail credit: Credit Layer</li>
          <li>Care for self and business: Care Layer</li>
          <li>Keep Growing: Growth Layer</li>
        </ul>
      </section>
      <img src="https://www.icicidirect.com/images//Fintech-202207151527521148125.png" />
      <section className="section">
        <br></br>
        <h2>Our Perspective</h2>
        <p>
          We believe fintechs can promote financial inclusion, broaden the offering of financial products and services, increase efficiency in the delivery of financial services, and improve affordability.
        </p>
        <p>
          However, as exposure of consumer data to various entities increases and considering the complexity of inter-linkages within various stakeholders, concerns over issues like cyber security and consumer protection are increasing.
        </p>
        <p>
          Introduction of central bank digital currency (CBDC), plans to set up digital banking units, initiatives like regulatory sandbox, and establishment of Innovation Hub are all part of RBI’s various steps towards facilitating and promoting the growth of technology in the financial services sector with adequate checks and balances.
        </p>
        <p>
          Steps towards having some regulatory framework are necessary for risk mitigation while scaling up and ensuring sustained growth of all participants. The path involves a balancing act between being strict from a risk management perspective and at the same time being innovation-friendly.
        </p>
      </section>
    </div>
  )
}

export default Fintech