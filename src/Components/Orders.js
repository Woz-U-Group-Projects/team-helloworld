import React from 'react';
import '../App.css';

function Orders() {
    return (
        <div className="ordersContainer">
            <div className="ordersGrid">
                <table class="orders">
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Service Date</th>
                        <th>Mow/Trim</th>
                        <th>CU</th>
                        <th>PW</th>
                        <th>R</th>
                        <th>LR</th>
                        <th>MISC</th>
                        <th>Total ($)</th>
                        <th>Payment Type</th>
                        <th>Payment Status</th>
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

export default Orders;