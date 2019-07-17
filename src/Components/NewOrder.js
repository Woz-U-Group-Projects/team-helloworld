
import React from 'react';
import '../App.css';

function NewOrder() {
  return(
    <div className="row">
        <div className="col-75">
            <div className="row">
            <div className="container">
                <div className="col-25">
                    <div className="planOne">
                        <h3>Plan One</h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
        <div className="col-25">
            <div className="container">
                <div className="addon">
                    <div className="col-25">
                        <h3>Additional Items</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>

  );

}
export default NewOrder;