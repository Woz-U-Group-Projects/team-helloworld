import React from 'react';
import '../App.css';

function CustProf() {
    return (
        <div className="profilesContainer">
            <div className="profilesGrid">
                    <h1>Customer Profile View</h1>
                <table class="profiles">
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer firstName</th>
                        <th>Title</th>
                        <th>Email Address</th>
                        <th>CU</th>
                        <th>Billing Address</th>
                        <th>Shipping Address</th>
                        <th>Account Owner</th>
                        <th>Past Orders</th>
                        <th>Order Date</th>
                        <th>Service Details</th>
                        <th>Payment Status</th>
                        <th>Payment Method</th>
                        <th>$ Total</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default CustProf;