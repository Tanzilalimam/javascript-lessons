console.log('lesson 1');

// var balance1 = 2500;
// var balance2 = 700;


// let trxAmount = prompt('enter the amount');
// trxAmount = Number(trxAmount);

// const cashOutCharge = trxAmount/100;

// console.log('balance1: ', balance1);
// console.log('balance2: ', balance2);
// console.log('transaction amount: ', trxAmount);
// console.log('cash out charge: ', cashOutCharge);

// /* steps of a money transfer system-
// 1. check: trxAmount > balance1-
//     # yes- show: insufficient balance.
//     # no- i. balance1 - trxAmount
//          ii. balance2 + trxAmount
//         iii. trx successful
// */
// if(trxAmount >= balance1){
//     console.log('insufficient amount. please check your main balance');
// }
// else{
//     newBalance1 = balance1 - trxAmount - cashOutCharge;
//     newBalance2 = balance2 + trxAmount;
// }
// console.log('new balance1: ', newBalance1);
// console.log('new balance2: ', newBalance2);

// data types-
// let a = '2.2';
// console.log(a, typeof a);
// let b = 2.2;
// b = 33;
// console.log(b, typeof b);
// let c = true;
// console.log(c, typeof c);
// let d = undefined;
// console.log(d, typeof d);
// let e = null;
// console.log(e, typeof e);
// let f = {
//     name: 'monu',
//     age: 26,
//     isMarried: true
// }
// console.log(f, typeof f);

// loops-
// for loop-
for(let i = 0; i <= 20; i++){
    console.log(i);
}

// while loop-
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}

// online money transaction demo-

let oldBalance1 = 1000;
let oldBalance2 = 800;


let trxAmount = prompt('enter amount');
trxAmount = Number(trxAmount);

// const cashOutCharge = trxAmount/150;
const sendMoneyCharge = 5;

console.log(`oldBalance1: `, oldBalance1);
console.log(`oldBalance2: `, oldBalance2);
console.log(`trxAmount: `, trxAmount);
console.log(`send money charge: `, sendMoneyCharge);
// console.log(`cash out charge: `, cashOutCharge);

if(trxAmount >= oldBalance1){
    console.log(`insufficient amount. please check your balance`);
}
else{
    newBalance1 = oldBalance1 - trxAmount - sendMoneyCharge;
    newBalance2 = oldBalance2 + trxAmount;
}

console.log(`newBalance1: `, newBalance1);
console.log(`newBalance2: `, newBalance2);
