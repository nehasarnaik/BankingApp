import React from 'react';
import './BankingPage.css'; // Import your CSS file for styling

const BankingPage = () => {
    return (
        <div className="banking-table">
            <h1>Ways To Bank</h1>
            <img src="https://maveric-systems.com/wp-content/uploads/2021/10/digital-banking-only-way.jpg" />
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h4>Mobile Banking</h4></td>
                        <td>Enjoy 100+ transactions on a variety of phones and tablets.</td>
                    </tr>
                    <tr>
                        <td><h4>WhatsApp Banking</h4></td>
                        <td>Access 90+ Banking Services that are just a chat away. Say Hi on 7070022222.</td>
                    </tr>
                    <tr>
                        <td><h4>Online Banking</h4></td>
                        <td>Make over 200 transactions from the comfort of your home or office.</td>
                    </tr>
                    <tr>
                        <td><h4>In Person Banking</h4></td>
                        <td>Experience seamless banking across 7000+ branches and 18000+ ATMs.</td>
                    </tr>
                    <tr>
                        <td><h4>SMS & Toll-Free Banking</h4></td>
                        <td>Banking services are now just a text away!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BankingPage;
