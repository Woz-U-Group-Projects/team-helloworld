import React from 'react';
import '../App.css';

function CheckOut() {
  return(
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form>
            <div className="customerForm">
              <div className="row">
                <div className="col-50">
                  <h3>Customer/Billing Information</h3>
                  <label for="fname">Full Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="John Smith"></input>
                  <label for="email">Email</label>
                  <input type="text" id="email" name="email" placeholder="John@example.com"></input>
                  <label for="address">Address</label>
                  <input type="text" id="address" name="address" placeholder="542 W. 1st Street"></input>
                  <label for="city">City</label>
                  <input type="text" id="city" name="city" placeholder="New York"></input>

                  <div className="row">
                    <div className="col-50">
                      <label for="state">State</label>
                      <input type="text" id="state" name="state" placeholder="NY"></input>
                    </div>
                    <div className="col-50">
                      <label for="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="10001"></input>
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                      <img id="img1" src="https://dummyimage.com/30x30/0011ff/0011ff" alt="visa" />
                      <img id="img1" src="https://dummyimage.com/30x30/cf0000/cf0000" alt="mastercard" />
                      <img id="img1" src="https://dummyimage.com/30x30/cf7200/cf7200" alt="discover" />
                      <img id="img1" src="https://dummyimage.com/30x30/00098c/00098c" alt="amex" />
                  </div>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="John Smith"></input>
                  <label for="ccnum">Credit Card Number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="July"></input>
                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2021"></input>
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="123"></input>
                    </div>
                  </div>
                </div>
              </div>
              
                <input type="submit" value="Continue to Checkout" class="btn"></input>

            </div>
          </form>
        </div>
      </div>

      <div className="col-25">
        <div className="container">
          <h4>Cart <span className="price"> <b>4</b> </span> </h4>
          <p><img id="img1" src="https://dummyimage.com/50x100/0011ff/0011ff" alt="visa" /> Product 1 <span className="price">$15</span></p>
          <p><img id="img1" src="https://dummyimage.com/50x100/0011ff/0011ff" alt="visa" /> Product 2 <span className="price">$15</span></p>
          <p><img id="img1" src="https://dummyimage.com/50x100/0011ff/0011ff" alt="visa" /> Product 3 <span className="price">$8</span></p>
          <p><img id="img1" src="https://dummyimage.com/50x100/0011ff/0011ff" alt="visa" /> Product 4 <span className="price">$2</span></p>
          <hr></hr>
          <p>Total <span className="price"><b>$30</b></span></p>
        </div>
      </div>

    </div>

  );

}
export default CheckOut;