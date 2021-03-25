import React, { useEffect, useState } from 'react';
import './style.css'
import Navbar from '../Navbar/Navbar';
import { food, Halls, } from '../Extras/check';
import { useDispatch } from 'react-redux';
import { addToOrderBag, sendItem } from '../../redux/action';
import Message from '../Extras/Message';

function Order(props) {
    const [state, setstate] = useState({
    })
    const [tops, settops] = useState([
        { top: "Meat", price: 100, number: 0, newprice: 0 },
        { top: "Rounded fish", price: 200, number: 0, newprice: 0 },
        { top: "Titus Fish", price: 200, number: 0, newprice: 0 },
        { top: "Egg", price: 70, number: 0, newprice: 0 },
        { top: "Kpomo", price: 50, number: 0, newprice: 0 },
        { top: "Turkey", price: 1000, number: 0, newprice: 0 },
        { top: "Plantain", price: 50, number: 0, newprice: 0 },
        { top: "Coles'law", price: 100, number: 0, newprice: 0 },
        { top: "whte beans", price: 100, number: 0, newprice : 0 }
    ])
    const dispatch = useDispatch()
    const [msg, setmsg] = useState("")
    const [Hall, setHall] = useState("--Select Hall--")
    const [quantity, setquantity] = useState(250)
    const [Food, setFood] = useState('--Select Food Item--')
    const [Total, setTotal] = useState(250)
    // const [Things, setThings] = useState([])
    var current = new Date();
    useEffect(() => {
        if (quantity < 250 || quantity > 500) {
            setquantity(quantity)
        }
        if (state.Room < 0) {
            setstate(state => ({ ...state, Room: 0 }))
        }
    }, [quantity,state.Room ])
    const writ = (e) => {
        setstate(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    const in_ds = (sign, i) => {
        let newArr = [...tops]
        if (sign === "+" && newArr[i].number < 10) {
            newArr[i].number = newArr[i].number + 1
            newArr[i].newprice = newArr[i].price * newArr[i].number;
            setTotal(Total + newArr[i].price )
        } else if (sign === "-" && newArr[i].number > 0) {
            newArr[i].number = newArr[i].number - 1
            newArr[i].newprice = newArr[i].price * newArr[i].number;
            setTotal(Total - newArr[i].price )
        }
        // if (newArr[i].number > 9) {
        //     newArr[i].number = newArr[i].number -1;
        //     settops(newArr)
        // }else if (newArr[i].number === -1){
        //     newArr[i].number = newArr[i].number +1;
            settops(newArr)
        // }
    }
    const submit = () => {
        setstate(state => ({ ...state, Food: Food }))
        const { Name, Room, Phone } = state
        let condition = (Name === undefined || Phone === undefined || Room === undefined || Name.trim() === '' || Phone.trim() === '' || Room.trim() === '');
        if (condition) {
            setmsg(<Message message="Please fill in the fields" status="error" />)
        } else {
            setmsg(<Message message="Order added to bag" status="success" />)
            settops(tops.filter(x => (x.number !== 0))) 
            let value = {
                Name: Name,
                Phone: Phone,
                Price : quantity,
                Room: Room,
                Hall:Hall,
                Food : Food,
                Date : current.toLocaleDateString(),
                Time :current.toLocaleTimeString(),
                addons : tops,
                Total : Total + 100
            }
            dispatch(sendItem(value))
            dispatch(addToOrderBag(value))
            window.location.assign("/confirm")
        }
    }
    return (
        <div className="bg-light"  style={{fontFamily:"-moz-initial"}}>
            <Navbar color="bg-info"/>
            <div className="container position-relative">
                <div action="" className="col-lg-6 m-auto p-2 border position-relative bg-white">
                    <div className="h3 text-center" style={{fontFamily:"-moz-initial"}}>Complete this form to place your order {state.Date}  {state.Time} </div>
                    <div className="">
                        Make orders with us and get your order under 1 hour <br/>
                       <span className="h5"> Total :&#x20A6;{Total}</span> +  &#x20A6;100 delivery
                    </div>
                    <div className="">{msg}</div>
                    <div className="">
                        <input type="text" className="input my-2 rounded py-1 px-2 border" placeholder="Name" value={state.Name} name="Name" onChange={(e) => { writ(e) }} />
                    </div>
                    <div className="">
                        <input type="tel" className="input my-2 rounded py-1 px-2 border" placeholder="Phone" value={state.Phone} name="Phone" onChange={(e) => { writ(e) }} />
                    </div>

                    <div className="w-shk mt-4 shadow border text-center mx-auto rounded py-2 bg-info text-white " style={{ right: "2%" }}>
                        <div className="border-bottom h4 pb-2">{Hall} Room {state.Room}</div>
                        <div className="d-flex">
                            <div className="m-auto w-50 bg-light">
                                {Halls.map((x,i )=> {
                                    return (
                                        <div onClick={() => { setHall(x + " Hall") }} className={`text-center px-2  text-${Hall === x + " Hall" ? "info" : "white"} bg-${Hall === x + " Hall" ? "white" : "info"}`} key={i}
                                            style={{ cursor: "pointer", zIndex: "100" }}>{x}  Hall  </div>
                                    )
                                })}
                            </div>
                            <div className="m-auto w-25"> Room No.
                                <input type="number" className="input my-2 rounded py-1 px-2 border" max="500" placeholder="Rm No." value={state.Room} name="Room" onChange={(e) => { writ(e) }} />
                            </div>
                        </div>
                    </div>
                    <div className="posotion-relative w-shk shadow border my-4 mx-auto text-center bg-info text-white py-1 rounded">
                       <div className="h4"> {Food} &#x20A6;{quantity}</div> <hr />
                        <div className="d-flex">
                            <div className="m-auto w-50  bg-info">
                                {food.map((x,i) => {
                                    return (
                                        <div onClick={() => { setFood(x) }} className={`text-center px-2 text-${Food === x ? "info" : "white"} bg-${Hall === x? "info" : "white"}`} key={i}
                                            style={{ cursor: "pointer", zIndex: "100" }}>{x}  </div>
                                    )
                                })}
                            </div>
                            <div className="border rounded p-1 m-2  d-flex" style={{ height: "30px" }}>
                                Price :
                                <div className="px-2 h-100" style={{ cursor: 'pointer' }} onClick={() => {
                                    if (quantity > 250) {
                                        setquantity(quantity - 50)
                                        setTotal(Total - 50)
                                    }
                                }}>-</div>
                                <div className="px-1">
                                    {quantity}
                                </div>
                                <div className="px-2 h-100" style={{ cursor: 'pointer' }} onClick={() => {
                                    if (quantity < 600) {
                                        setquantity(quantity + 50)
                                        setTotal(Total + 50)
                                    }
                                }}>+</div>
                            </div>
                        </div>
                    </div>
                    <div className="posotion-relative w-shk shadow text-center border my-1 mx-auto text-center p-2 jumbotron bg-info text-white">
                        <div className="pl-3">
                            {tops.map(({ top, price, number, newprice }, i) => {
                                return (
                                    <div className="d-flex border-bottom pb-1 mt-1 w-100  bg-info" style={{ height: "auto" }} key={i}>
                                    <input type="hidden" name="Food" value={state.Food} onChange={(e)=>{writ(e)}}/>
                                        <div className="w-50 pt-2">{top} &#x20A6;{price} | &#x20A6;{newprice} </div>
                                        <div className="w-50 d-flex" style={{height:"30px"}}>
                                            <div className="px-2 border ml-1 bg-white text-dark  pt-1 rounded-left " style={{ cursor: "pointer" }} onClick={() => { in_ds("-", i) }}>-</div>
                                            <div className='border-top border-bottom px-2 bg-white text-dark  pt-1 '>{number}</div>
                                            <div className="px-2 border mr-1 bg-white text-dark  pt-1 rounded-right" style={{ cursor: "pointer" }} onClick={() => { in_ds("+", i) }}>+</div>
                                        </div>
                                    </div>
                                )
                            })} 
                        </div>
                    </div>
                    <div className="w-100 text-center h4">
                    Total :&#x20A6;{Total + 100}
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <button className="btn border btn-success w-25" onClick={() => { submit() }}> Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Order;