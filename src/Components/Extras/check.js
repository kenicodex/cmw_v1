export const chk = (value,relation, test) => {
    // let condition = false;
    // const e = ()=>{
    //     if (value === test) {
    //         condition = true;
    //     }
    // }
    // const g = ()=>{
    //     if (value < test) {
    //         condition = true;
    //     }
    // }
    // const l = ()=>{
    //     if (value > test) {
    //         condition = true;
    //     }
    // }
 
}
export const Halls = [
    'Caleb',
    'Joseph',
    'Joshua',
    'Rebacca',
    'Mary'
]
export const food = [
    'White Rice',
    'Fried Rice',
    'Jollof Rice',
    'Mixed Rice',
    'Porridge Beans',
    'Bread 350',
    'Bread 500'

]
export const chn = (sign, array, i) => {
    const toppings =
    [
        { top: "Meat", price: 100, number: 0, newprice : 0 },
        { top: "Rounded fish", price: 200, number: 0, newprice : 0 },
        { top: "Titus Fish", price: 200, number: 0, newprice : 0 },
        { top: "Egg", price: 70, number: 0, newprice : 0 },
        { top: "Kpomo", price: 50, number: 0, newprice : 0 }
    ]
    switch (sign) {
        case "+":
                toppings[i]['number'] = toppings[i]['number'] + 1
            return toppings
        case "-":
        default:
            break;
    }
}
export const toppings =
    [
        { top: "Meat", price: 100, number: 0, newprice : 0 },
        { top: "Rounded fish", price: 200, number: 0, newprice : 0 },
        { top: "Titus Fish", price: 200, number: 0, newprice : 0 },
        { top: "Egg", price: 70, number: 0, newprice : 0 },
        { top: "Kpomo", price: 50, number: 0, newprice : 0 }
    ]