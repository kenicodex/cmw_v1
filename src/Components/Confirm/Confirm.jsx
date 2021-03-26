import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFromBag } from '../../redux/action';
import Navbar from '../Navbar/Navbar';
import './style.css'
import Pay from './paystack';

function Confirm(props) {
    const sendItem = useSelector(state => state.sendItem)
    const orderBag = useSelector(state => state.orderBag)
    const [Tot, setTot] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        let x = 0;
        orderBag.forEach(element => {
            x = x + element.Total
        });
        setTot(x)
    },[orderBag])
    return (
        <div className="bg-light position-fixed w-100" style={{ height: '100vh' }} >
            <Navbar color="bg-info" />
            <div className="bg-light w-100 px-auto"  >

                <div className="container" >
                    {sendItem.length !== 0 ?
                        <React.Fragment  >
                            {/* <img src={image} width="100%" height="1000px" className="position-absolute" onContextMenu="return false;" style={{ top: "50px",  zIndex: "100" }} alt="" /> */}
                            <div className="h2 text-center bg-light w-100 py-4 h-auto">Order List <br />
                                <span className="h4">{orderBag.length} packs for &#x20A6;{Tot}</span></div>

                            <div className="w-100" >
                                {orderBag.map(({ Name, Phone, Room, Hall, Food, Date, Time, Price, addons, Total }, i) => {

                                    let dis = addons.filter(x => x.number !== 0)
                                    return (
                                        <div key={i}  className="border-info card shadow col-lg-4 p-3 mx-auto position-relative my-1" style={{ fontFamily: "open sans" }}>
                                            <div className="p-2 position-absolute h6" style={{ right: "7%", top: "3.5px" }}>
                                                {i + 1}
                                            </div>
                                            <button className="btn-danger border rounded position-absolute border m-1" style={{ right: "1px", top: "4px" }}
                                                onClick={() => { dispatch(DeleteFromBag(i)) }}>
                                                x</button>
                                            <div className="border-bottom h4 pb-2"> {Name}</div>
                                            <div className="">Phone : {Phone}</div>
                                            <div className="">Hostel info : {Hall} room {Room}</div>
                                            <div className="pt-2">Order : {Food} &#x20A6;{Price}

                                                <span className=""> {dis !== undefined ? dis.map(({ top, price, number, newprice }, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <span>{number}</span>  <span>{top}</span> <span>&#x20A6;{newprice} </span> {dis.length - 1 === i ? "." : ","}
                                                        </React.Fragment>
                                                    )
                                                }) : "You didn't add anything on top"}</span> at {Time} {Date}
                                            </div>
                                            <div className="h5">Total :&#x20A6;{Total || ""}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="w-100 my-4 text-center">
                                <button className="btn-success btn mx-1 my-2" onClick={() => { window.location.assign("/order") }}> {"<"} Add Pack</button> <br />
                                <Pay a={Tot} bag={orderBag} />
                            </div>
                        </React.Fragment>
                        : <div className="h3 text-center mt-4">You have not Made any order</div>}
                </div>
            </div>
        </div>
    );
}

export default Confirm;