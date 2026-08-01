// creative it institute-

// class 2 starts here-

console.log('class2');
// conditions-
const chip = 200;
let a = 2500;
if(a < 0){
    console.log(`chip price is ${chip}, you are offering ${a}.negative balance isn't accepted here`);
}
else if(a < chip){
    console.log(`chip price is ${chip}, you are offering ${a} so you can't purchase the chip`);
}
else if(a == chip){
    console.log(`chip price is ${chip}, you are offering ${a} so you can purchase the chip`);
}
else{
    console.log(`here chip price ${chip} doesn't matter anymore you are offering ${a} purchase it right now`);
};

// nested conditions-
const bike = 30000;

let budget = 24000;
if(budget < bike){
    // console.log(`bike price ${bike}, you have ${budget}. can't be purchased.`);
    if(budget >= 25000 && budget <= 30000){
        console.log(`bike price ${bike}, you have ${budget}. you can pay rest of the amount in installments`);
    }
    else{
        console.log(`bike price ${bike}, you have ${budget}. come back after managing the least amount`);
    }
}
else{
    console.log(`bike price ${bike}, you have ${budget}. you can purchase it.`);
};

const bike2 = {
    brand: 'ducati',
    model: 'zxr34',
    abs: true,
    clutch: 'dry',
    price: 3000
}
let budg = 3200;
if(budg < bike2.price){
    console.log(`bike price ${bike2.price} and your budget is ${budg}. you can't purchase it`);
}
else if(budg >= bike2.price){
    if(bike2.abs){
        console.log(`abs ${bike2.abs}`);
        if(bike2.clutch == 'dry'){
            console.log(`clutch is ${bike2.clutch} buy it`);
        }
        else{
            console.log(`clutch ${bike2.clutch} don't buy it`);
        }
    }
    else{
        console.log(`abs ${bike2.abs} don't buy it`);
    }
}
else{
    console.log('buy ducati');
}

// switch-
let l = 'z';
switch(l){
    case 'a': 
    console.log(`${l} is vowel`);
    break;
    case 'e': 
    console.log(`${l} is vowel`);
    break;
    case 'i': 
    console.log(`${l} is vowel`);
    break;
    case 'o': 
    console.log(`${l} is vowel`);
    break;
    case 'u': 
    console.log(`${l} is vowel`);
    break;
    default:
    console.log(`${l} is consonant`);
};

let favAnimal = 'owl';
switch(favAnimal){
    case 'wolf':
    case 'dog': 
    console.log(`it's ${favAnimal}`);
    break;
    case 'jaguar':
    case 'cat': 
    console.log(`it's ${favAnimal}`);
    break;
    case 'owl': 
    console.log(`it's ${favAnimal}`);
    break;

    default:
    console.log(`${favAnimal} isn't in the case`);
}

const tool = 'cardkey';
if(tool == 'key' || tool == 'cardkey' || tool == 'masterkey'){
    console.log(`you have ${tool} can enter the room`);
}
else{
    console.log(`room is locked. you don't have any tool. stay out`);
}


let input = document.querySelector('.inpt');
let btn = document.querySelector('.btn');
let info = document.querySelector('.info');
let error = document.querySelector('.error');

btn.addEventListener('click', function(){
    console.log(input.value);
    if(input.value.length > 1 || input.value.length == 0){
        error.innerHTML = `enter one word at a time`;
    }
    else{
        if(input.value === 'a' || input.value === 'e' || input.value === 'i' || input.value === 'o' || input.value === 'u'){
            info.innerHTML = `${input.value} is vowel`;
            input.value = '';
            error.innerHTML = ``;
        }
        else{
            info.innerHTML = `${input.value} is consonant`;
            input.value = '';
            error.innerHTML = ``;
        }
    }
});

// to do-
let todo_input = document.querySelector('.todo-input');
let todoBtn = document.querySelector('.todo-btn');
let ol = document.querySelector('.ol');

todoBtn.addEventListener('click', function(){
    console.log(todo_input.value);
    ol.innerHTML += `<li>${todo_input.value}</li>`;
    todo_input.value = ``;
});

// will use it later
// const li = document.createElement("li");
// li.textContent = todo_input.value;
// ol.appendChild(li);

// class 2 ends here

// class 3 starts here
console.log('class 3');

for(let i = 1; i<= 10; i++){
    console.log('for loop');
}

let i = 1;
while(i<=13){
    console.log('while loop');
    i++
}

i = 1;
do{
    console.log('do while loop');
    i++;
}while(i<=15);

let car = {
    name: 'fiat',
    model: 'bumble 50',
    price: 4000,
    brandNew: true,
    func: function(){
        return `i'm looking for a ${this.name} ${this.model}.`
    }
}
console.log(car);
console.log(car.func());

let nFunction = function(){
    console.log(`this is a named function`);
}
nFunction();

let arrFunction = () =>{
    console.log(`this is an arrow function`);
}
arrFunction();

// password hide&show-
let ipBox = document.getElementById('ipbox');
let ipBtn = document.getElementById('ipbtn');
let err = document.querySelector('.err');
ipBtn.addEventListener('click', function(){
    if(ipBox.value.length >= 4 && ipBox.value.length <= 8){
        if(ipBox.type === 'password'){
            ipBox.type = 'text';
            ipBtn.innerHTML = 'hide';
            err.innerHTML = '';
        }
        else{
            ipBox.type = 'password';
            ipBtn.innerHTML = 'show';
            err.innerHTML = '';
        }
    }
    else if(ipBox.value.length > 8){
        err.style.color = 'red';
        err.innerHTML = `password mustn't exceed 8 words`;        
    }
    else{
        err.style.color = 'red';
        err.innerHTML = `enter at least 4 words`;
    }
});

// odd even checker-
let odd_even = document.getElementById('odd-even');
let oddBtn = document.getElementById('oddbtn');
let res1 = document.querySelector('.res');
oddBtn.addEventListener('click', function(){
    let inputVlaue = odd_even.value;
    if(inputVlaue.length > 0){
        if(inputVlaue % 2 === 0){
            console.log(`${inputVlaue} is even`);
            res1.innerHTML = `${inputVlaue} is even`;
            odd_even.input = '';
        }
        else{
            console.log(`${inputVlaue} is odd`);
            res1.innerHTML = `${inputVlaue} is odd`;
            odd_even.input = '';
        }
    }
    else if(inputVlaue.length === 0){
        res1.style.color = 'red';
        res1.innerHTML = `enter number first and only number`;
    }
});
// class 3 ends here

// class 4 starts here
console.log('class 4- function');
let a = 45;
let b = 15;

function cal(){
    console.log('sum:', a+b);
    console.log('substract: ', a-b);
    console.log('multiplication: ', a*b);
    console.log('dividation: ', a/b);
}
cal();

function calc(a, b){
    console.log('sum: ', a+b);
    console.log('substract: ', a-b);
    console.log('multiplication: ', a*b);
    console.log('dividation: ', a/b);
}
calc(10, 5);

function calc2(a, b){
    let w = a+b;
    let x = a-b;
    let y = a*b;
    let z = a/b;
    let calculate = `sum: ${w}, sub: ${x}, mul: ${y}, div: ${z}`;
    return calculate;
}
// let c = calc2(20, 1);
console.log(calc2(2, 4));;

function calc3(...args){
    // let sum = 1;
    let sum = 0;
    for(let i of args){
        sum = sum + i;
    }
    return sum;
}
console.log(calc3(2,4,6,8,10,12,14,16,18,20));

// class 4 ends here

// class 5 starts
console.log(`class 5`);
// setTimeOut()-
setTimeout(function () {
    console.log('honey bee');
}, 2000);

// let a = () => {
//     console.log('do');
// }
// setTimeout(a, 3000);

setTimeout(hi, 5000);
function hi() {
    console.log(`hi`);
}
console.log('ohe');

// setInterval()-
setInterval(function () {
    console.log(`set interval`);
    clearInterval();
}, 1000000);

// clearInterval()-
// let b = setInterval(loop, 1000);
// function loop() {
//     console.log(`loop`);
// }
// clearInterval(b);

// date method-
let clock1 = document.querySelector('.clock h1');
let clock2 = document.querySelector('.clock h2');
let update1 = () => {
    const d1 = new Date();
    clock1.innerHTML = `${d1}`;
}
setInterval(update1, 1000);

let update2 = () => {
    const d2 = new Date();
    let h = d2.getHours();
    let m = d2.getMinutes();
    let s = d2.getSeconds();
    let ms = d2.getMilliseconds();
    let days = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    let day = days[d2.getDay() + 1];
    let d = d2.getDate();
    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'sepember', 'october', 'november', 'december'];
    let mn = months[d2.getMonth()];
    let y = d2.getFullYear();
    let f = d2.getTimezoneOffset()
    clock2.innerHTML = `Today: ${h}:${m}:${s}:${ms}, ${day}, ${d} ${mn}, ${y}`;
}
setInterval(update2, 100);

// 1-10-
let count = document.querySelector('.counter');
let func = () => {
    let i = 0;
    let counter = setInterval(function () {
        i++;
        count.innerHTML += i;
        count.style.color = 'white';
        console.log(i);
        if (i >= 10) {
            clearInterval(counter);
            count.innerHTML = `counter stopped`;
            count.style.color = 'red';
            console.log('counter stopped');

            let rCounter = setInterval(function () {
                i--;
                count.innerHTML += i;
                console.log(i);
                if (i <= 0) {
                    clearInterval(rCounter);
                    count.innerHTML = `reverse counter stopped`;
                }
            }, 1500);
        }
    }, 1500);
}
// func();

// 1-10 counter more professional way (single direction edition)-
let func2 = () => {
    let i = 0;
    let direction = 1;
    let singleSInterval = setInterval(function () {
        i += direction;
        count.innerHTML = i;
        if (i >= 10) {
            direction = -1;
            count.innerHTML = i;
            count.style.color = 'red';
        }
       else if (i <= 0) {
            clearInterval(singleSInterval);
            count.style.color = 'red';
            count.innerHTML = `counter stopped`;
        }
    }, 1000)
}
// func2();

// 
let func3 = () => {
    let i = 0;
    let direction = 2;
    let singleSInterval = setInterval(() => {
        i = i + direction;
        count.innerHTML = i;
        if (i >= 10) {
            direction = -2;
            count.style.color = 'red';
        }
        else if (i <= 0) {
            count.innerHTML = `counter stopped`;
            clearInterval(singleSInterval);
        }
    }, 2000);
}
// func3();

let fun4 = function () {
    let i = 0;
    let direction = 1;
    let setInterv = setInterval(function () {
        i += direction;
        count.innerHTML = i;
        if (i >= 10) {
            direction = -1;
            count.style.color = 'red';
            // count.innerHTML = `counter stopped`;
        }
        else if (i <= 0) {
            count.innerHTML = `counter stopped`;
            clearInterval(setInterv);
        }
    }, 1000);
}
// fun4();

// traffic light-
let light1 = document.querySelector('.light1');
let light2 = document.querySelector('.light2');
let light3 = document.querySelector('.light3');
let light4 = document.querySelector('.light4');
let btn = document.querySelector('.btn');

function turnOff() {
    light1.style.backgroundColor = 'grey';
    light2.style.backgroundColor = 'grey';
    light3.style.backgroundColor = 'grey';
}
let trf = function () {
    let crrColor = 0;
    let trfIntrvl;
    let startTraffic = () => {
        // trfIntrvl = setInterval(() => {
        //     if(crrColor == 0){
        //         turnOff();
        //         light1.style.backgroundColor = 'red';
        //         crrColor++;
        //     }
        //     else if(crrColor == 1){
        //             setTimeout(function(){
        //             turnOff();
        //             light2.style.backgroundColor = 'yellow';
        //             crrColor++;
        //         }, 3000);
        //     }
        //     else if(crrColor == 2){
        //         turnOff();
        //         light3.style.backgroundColor = 'green';
        //         crrColor = 0;
        //     }
        // }, 5000);
        trfIntrvl = function () {
            if (crrColor === 0) {
                setTimeout(function () {
                    turnOff();
                    trfIntrvl();
                    light1.style.backgroundColor = 'red';
                    crrColor++
                }, 5000);
            }
            else if (crrColor === 1) {
                setTimeout(function () {
                    turnOff();
                    trfIntrvl();
                    light2.style.backgroundColor = 'yellow';
                    crrColor++

                }, 2000);
            }
            else if (crrColor === 2) {
                setTimeout(function () {
                    turnOff();
                    trfIntrvl();
                    light3.style.backgroundColor = 'green';
                    crrColor = 0;

                }, 5000);
            }
        }
        // trfIntrvl();
    }
    startTraffic();
    // pedestral sign-
    btn.addEventListener('click', function () {
        console.log('btn clicked');
        function stpRes() {
            if (btn.innerHTML == 'stop traffic') {
                btn.innerHTML = 'resume traffic';
            }
            else {
                btn.innerHTML = 'stop traffic';
            }
        }
        stpRes();
        light4.style.backgroundColor = 'green';
        turnOff();
        light1.style.backgroundColor = 'red';
        // clearInterval(trfIntrvl);
        // clearTimeout(trfIntrvl);
        setTimeout(function () {
            light4.style.backgroundColor = 'grey';
            btn.innerHTML = 'stop traffic';
            startTraffic();
        }, 5000)
    });
}
// trf();

let color = 0;
let delay;
function traffic(){
    setTimeout(function(){
        if(color === 0){
            console.log(`color is red`);
            light1.style.backgroundColor = 'red';
            light2.style.backgroundColor = 'grey';
            light3.style.backgroundColor = 'grey';
            color++;
            delay = 5000;
            traffic();
        }
       else if(color === 1){
            console.log(`color is yellow`);
            light2.style.backgroundColor = 'yellow';
            light1.style.backgroundColor = 'grey';
            light3.style.backgroundColor = 'grey';
            color++;
            delay = 3000;
            traffic();
        }
        else if(color === 2){
            console.log('color is green');
            light3.style.backgroundColor = 'green';
            light1.style.backgroundColor = 'grey';
            light2.style.backgroundColor = 'grey';
            color = 0;
            delay = 5000;
            traffic();
        }
    }, delay);
}

// traffic();

color = 0;
function traf(){
    let delay;
    function trnOff(){
        light1.style.backgroundColor = 'grey';
        light2.style.backgroundColor = 'grey';
        light3.style.backgroundColor = 'grey';
    }
    trnOff();
    // let start = function(){
        if(color === 0){
            // console.log('color is red');
            // trnOff();
            light1.style.backgroundColor = 'red';
            delay = 5000;
            // color++;
            // traf();
        }
        else if(color === 1){
            // console.log('color is yellow');
            // trnOff();
            light2.style.backgroundColor = 'yellow';
            delay = 3000;
            // color++;
            // traf();
        }
        else if(color === 2){
            // console.log('color is green');
            // trnOff();
            light3.style.backgroundColor = 'green';
            delay = 5000;
            // color = 0;
            // traf();
        }
    // }
    setTimeout(function(){
        color++;
        if(color > 2){
            color = 0;
        }
        // traf();
    }, delay);
}
// traf();

// professional way-
trafffic = function(){
    let delay;
    turnOff();
    if(color === 0){
        light1.style.backgroundColor = 'red';
        delay = 5000;
    }
    else if(color === 1){
        light2.style.backgroundColor = 'yellow';
        delay = 3000;
    }
    else if( color === 2){
        light3.style.backgroundColor = 'green';
        delay = 5000;
    }
    setTimeout(function(){
        color++;
        if(color > 2){
            color = 0;
        }
        trafffic();
    }, delay);
}
// traffic();

function c(){
    let i = 0;
    let direction = 1;
    let sInt = setInterval(function(){
        i += direction;
        count.innerHTML = `${i}`;
        if(i>=10){
            direction = -1;
        }
        else if(i<=0){
            clearInterval(sInt);
            count.style.color = 'red';
            count.innerHTML = `counter stopped`;
        }
    }, 1000);
}
// c();

// practice start-

// let an = 10;
//  function outer(){
//     let an = 20;
//     function inner(){
//         let an = 30;
//         console.log(an);
//     }
//     inner();
//     console.log(an);
// }
// // outer();
// // console.log(an);

// let name = 'global';
// function first(){
//     let name = 'First';
//     function second(){
//         console.log(name);
//     }
//     return second;
// }
// const fn = first();
// // fn();

// function k(){
//     let m = 23
//     console.log(m);
// }
// k();

// function l(){
//     let m = 44;
//     console.log(m);
// }
// l();
// function g(a){
//     return a*a;
// }
// console.log(g(4));

let outer = function(){
    let x = 10;
    return function(){
        x++;
        console.log(x);
    }
}
let a = outer();
let b = outer();
a();
a();
b();
a();

// practice end-

// class 5 ends

// class 8 starts
console.log('class 7 string, array method');
let inputBox = document.querySelector('.inputbox');
let add = document.querySelector('.add');
let disp = document.querySelector('.disp');
let err = document.querySelector('.err');

let arr = [];

add.addEventListener('click', function(){
    console.log('clicked');
    arr.push(inputBox.value);
    // console.log(inputBox.value);
    if(inputBox.value.length > 1 || inputBox.value.length === 0){
        err.innerHTML = `enter one and only one character`;
        return;
    }
    let inptVal = inputBox.value;
    arr.map(function(item, index){
        disp.innerHTML = inptVal.toUpperCase(inputBox.value) +':' +' '+inptVal.charCodeAt(`${item}`);
        console.log(inputBox.value, inptVal.charCodeAt(`${item}`));
    });
    inputBox.value = '';
    
});

/* string method- */

// charAt()-
let tx = `i am eating rice`;
let tx2 = `    i have to go school \ud600`;
console.log(tx.charAt(2));

// charCodeAt()- get each char. utf-8 code
console.log(tx.charCodeAt(3));

// concat-
let sc = tx.concat('. '+tx2);
console.log(sc);

// slice-
console.log(tx.slice(2, 4));
console.log(tx.slice(2));

console.log(tx.toUpperCase());

console.log(tx.isWellFormed());

console.log(tx2.isWellFormed());
console.log(tx2.toWellFormed());
console.log(tx2.isWellFormed());

console.log(tx2.trim());

// padStart-padEnd
let tx3 = '5';
console.log(tx3.padStart(4, '202'));
console.log(tx3.padEnd(4, '202'));

// repeat-
let tx4 = 'i love meat raw. raw.';
let rpt = tx4.repeat(10);
console.log(rpt);

// replace-
let rplc = tx4.replace('raw', 'cooked');
console.log(rplc);
rplc = tx4.replaceAll('raw', 'cokked');
console.log(rplc);

// split-
let tx5 = `ice cream made from cream milk.`;
let splt = tx5.split('.');
console.log(splt);
console.log(splt.length);

// array method-
// join();
let arr2 = ['mango', 'lemon', 'orange', 'guava'];
console.log(arr2.join('*'));

// pop, push-
console.log(arr2.pop());
console.log(arr2.push('tomato'));
console.log(arr2);

// shift, unshift-
console.log(arr2.shift());
console.log(arr2);
console.log(arr2.unshift('kiwi')); // returns new array length
console.log(arr2);

arr2[0] = 'strawberry';
arr2[arr2.length] = 'blueberry';
console.log(arr2);

let arr3 = ['car', 'cycle', 'bike'];
let cnct = arr2.concat(arr3);
console.log(cnct);

// splice, slice-
let splc = arr2.splice(2, 2, 'mango');
console.log(splc);
console.log(arr2);

let slc = arr2.slice(1);
console.log(slc);
console.log(arr2); // slice doesn't remove elem from main array

// class 8 ends