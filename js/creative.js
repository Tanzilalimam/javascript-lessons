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