import React from 'react';
import { usePaystackPayment } from 'react-paystack';

function Pay(props) {
    const config = {
        reference: (new Date()).getTime(),
        email: "user@example.com",
        amount: props.a * 100,
        publicKey: 'pk_live_da4904115764c17480712876b051bb0352baa58b',
    };
    for (let i = 0; i < props.bag.length; i++) {
        const element = props.bag[i];
        // console.log(element.addons[0].filter(x => x !== 0));
        fetch('', {
            method: "post",
            body: JSON.stringify(element),
            headers: { 'Content-Type': 'application/json' }
        })
    }
    const onSuccess = (reference) => {

        fetch('', {
            method: "post",
            body: "",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(res => res.data)
    };
    const onClose = () => {
    }

    const PaystackHookExample = (props) => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div >
                <button className="btn btn-success" onClick={() => {
                    initializePayment(onSuccess, onClose)
                }}>Complete Order {props.a} </button>
            </div>
        );
    };
    localStorage.setItem("amount", props.a)
    return (
        <div className="App">
            <PaystackHookExample a={props.a} />
        </div>
    );
}

export default Pay;