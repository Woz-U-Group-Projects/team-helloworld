
import React from 'react';
import '../App.css';
import Grass from '../Images/grass1.png'
import Mower from '../Images/mower1.png'
import Ultimate from '../Images/ultimate1.png'
import CTE from '../Images/mower2.png'

function NewOrder() {
  return(
     
    <div className="margin">
    <div className="row">
        <div className="col-25">         
            <div className="container">
                <div class="card">
                    <img src={Grass} alt="Green Grass"></img>
                    <h1>QC Package</h1>
                    <p class="price">$49.99</p>
                    <p>A quick cut to to refresh the look of your lawn. This package includes the cutting of the grass.</p>
                    <p><button>Add to Cart</button></p>
                </div>              
            </div>
        </div>

        <div className="col-25">         
            <div className="container">
                <div class="card">
                    <img src={Mower} alt="Green Grass"></img>
                    <h1>CT Package</h1>
                    <p class="price">$79.99</p>
                    <p>Need a quick touchup on your yard? This package will have your yard looking fresh with a quick Cut and Trim.</p>
                    <p><button>Add to Cart</button></p>
                </div>              
            </div>
        </div>

        <div className="col-25">         
            <div className="container">
                <div class="card">
                    <img src={CTE} alt="Green Grass"></img>
                    <h1>CTE Package</h1>
                    <p class="price">$99.99</p>
                    <p>Get that professional look with this package. Including the cutting, trimming, and edging for your lawn</p>
                    <p><button>Add to Cart</button></p>
                </div>              
            </div>
        </div>

        <div className="col-25">         
            <div className="container">
                <div class="card">
                    <img src={Ultimate} alt="Green Grass"></img>
                    <h1>CTEF Package</h1>
                    <p class="price">$149.99</p>
                    <p>The complete lawn care package. Including the cutting, trimming, edging, and fertilizer for you lawn.</p>
                    <p><button>Add to Cart</button></p>
                </div>              
            </div>
        </div>

    </div>
    </div>

  );

}
export default NewOrder;