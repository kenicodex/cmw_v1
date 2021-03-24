import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Style.css'

function Home(props) {
    return (
        <React.Fragment>
           <Navbar />
           <div className="body container">
               <div className="txt">Welcome to Caleb Mobile Waiter CWM</div>
               <div className="txt2">
                   Make orders with us and get your order under 1 hour <br/>
                   Note : No refunds
               </div>
               <button className="ord-btn btn" onClick={()=>{
                   window.location.assign('/order')
               }}>
                    Order
               </button>
           </div>
        </React.Fragment>
    );
}
export default Home;