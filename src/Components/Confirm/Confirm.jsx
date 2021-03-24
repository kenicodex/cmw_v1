import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import './style.css'

function Confirm(props) {
    // const [Total, setTotal] = useState("")
    const [Adds, setAdds] = useState([])

    // let x  ;
    const sendItem = useSelector(state => state.sendItem)
    const orderBag = useSelector(state => state.orderBag)
    useEffect(() => {
        setAdds(sendItem.addons.filter(x => x.number !== 0))
    }, [sendItem.addons,orderBag])
    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <div className="h2 text-center w-100 my-3">Order List</div>
                {orderBag.map(({Name,Phone,Room,Hall,Food,Date,Time,Price,addons},i)=>{
                    let dis = addons.filter(x => x.number !== 0)
                    return(
                        <div key={i} className="border col-lg-4 p-3 mx-auto position-relative my-1">
                            <div className="p-2 position-absolute" style={{right:"2%"}}>
                                {i+1}
                            </div>
                        <div className="">Buyer : {Name}</div>
                        <div className="">Phone : {Phone}</div>
                        <div className="">Room : {Room}</div>
                        <div className="">Hall : {Hall}</div>
                        <div className="">Food : {Food} &#x20A6;{Price}</div>
                        <div className="">Date : {Date || ""}</div>
                        <div className="">Time : {Time || ""}</div>
    
                        <div className="">Things on top : {dis !== undefined ? dis.map(({ top, price, number, newprice }, i) => {
                            //  x  = x + parseInt(newprice);
                            return (
                                <React.Fragment key={i}>
                                    <span>{number}</span>  <span>{top}</span> <span>{newprice}  </span> {dis.length - 1 === i ? "." : ","}
                                </React.Fragment>
                            )
                        }) : "You didn't add anything on top"}</div>

                        </div>
                    )
                })}
                {/* <div className="border col-lg-4 p-3 mx-auto">
                    <div className="">Buyer : {sendItem.Name}</div>
                    <div className="">Phone : {sendItem.Phone}</div>
                    <div className="">Room : {sendItem.Room}</div>
                    <div className="">Hall : {sendItem.Hall}</div>
                    <div className="">Food : {sendItem.Food} &#x20A6;{sendItem.Price}</div>
                    <div className="">Date : {sendItem.Date || ""}</div>
                    <div className="">Time : {sendItem.Time || ""}</div>

                    <div className="">Things on top : {Adds !== undefined ? Adds.map(({ top, price, number, newprice }, i) => {
                        //  x  = x + parseInt(newprice);
                        return (
                            <React.Fragment key={i}>
                                <span>{number}</span>  <span>{top}</span> <span>{newprice}  </span> {Adds.length - 1 === i ? "." : ","}
                            </React.Fragment>
                        )
                    }) : "You didn't add anything on top"}</div>

                </div> */}
                <div className="w-100 my-2 text-center">
                    <button className="btn-success btn ">Complete Order</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Confirm;