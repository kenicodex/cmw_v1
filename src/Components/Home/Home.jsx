import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Style.css'

function Home(props) {
    const card = [
        { Name: " Queues", extra: "Avoid queue in the cafeteria", img: "../images/download (1).jpeg" },
        { Name: "Save you money ", extra: "Our delivery for just NGN100 a pack ", img: "../images/download (1).png" },
        { Name: "Caleb students ", extra: "Avaliable to students in your at your door steps", img: "../images/download.jpeg" },
        { Name: "Fast Delivery ", extra: "Delivery to your hostel in less than 30mins", img: "../images/download (2).jpeg" },
    ]
    return (
        <React.Fragment>
            <header>
                <Navbar  />
                <div className="p-3 h3 text-white mt-3 ">Welcome to Caleb Mobile Waiter CWM</div>
            </header>
           <div className="w-100 h-auto" style={{height:"100vh"}}>
           <div className="body container position-relative border-left border-right h-auto" >
                <div className="p-3 ">
                    Make orders with us and get your order under 1 hour <br />
                   Note : No refunds
               </div>
                <button className="ml-4 btn border-info text-info w-25 btn-outline  btn-info-outline" onClick={() => {
                    window.location.assign('/order')
                }}>
                    Order
               </button>
                {card.map(({ Name, extra, img }) => {
                    return (
                        <div className="card col-lg-6 col-sm-9 mx-auto shadow rounded my-5" style={{ backgroundColor: "url('../images/download (1).jpeg')" }}>
                            <img src={img} width="100%" alt="" className="border-bottom" height="200px" />
                            <div className="p-3">
                                    <span className="h4">{Name}</span>  <br/> 
                                    <span className="h6">{extra}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
           </div>
            <div style={{width:"100%",height:"200px"}} className="position-relative bg-info text-white p-2 ">
                    <div className="h4 pl-3 "> CMW</div> <hr className="bg-light"/>
                    contact us on <br/>

            </div>
        </React.Fragment>
    );
}
export default Home;