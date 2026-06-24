console.log(`lessson 2`);

// named function-

// function definition-
function greet(){
    console.log(`ohio gojaimasu "named function" desu`);
}
// function call-
greet();

function greetUser(user, age){  // parameter
    console.log(`moshi moshi ${user}. are you ${age}?`);
    return user + ", " + age;
}
let val = greetUser('jhon dough', 24); // argument
console.log(val);

/*there can be 4 types of functions-
1. no input, no output.
2. input, no output.
3. no input, output.
4. input, output.
*/

// anonymus function-
let fnc = function(){
    console.log(`this is an anonymus function`);
}
fnc();

// arrow function-
let arrFn = ()=>{
    console.log(`it's an arrow function`);
}
arrFn();

let obj = {
    name: 'john dough',
    normalFn: function(){
        console.log(this);
    },
    arrowFn: ()=>{
        console.log(this);
    }
}
obj.normalFn();
obj.arrowFn();
// Fingerprinting Protection is altering screen.availWidth and screen.availHeight. These values may not match your actual screen dimensions. This protection helps prevent websites building a fingerprint that can be used to track users. Learn more: https://support.mozilla.org/kb/firefox-protection-against-fingerprinting

// advance topic-

// immediate invoked function expression-
(function(){
    console.log(`iife function`);
})();

// generator function- it gives us pausebla function-
let generatorFn = function*(){
    yield console.log(`it's a generator function 1`);
    yield console.log(`it's a generator function 2`);
    yield console.log(`it's a generator function 3`);
}
const gen = generatorFn();
gen.next();
gen.next();
gen.next();

// id generator-
let newId = function*(){
    let lastId = 1;
    while(true){
        yield lastId++;
    }
}
let nxtId = newId();
console.log(nxtId.next().value);
console.log(nxtId.next().value);
console.log(nxtId.next().value);
console.log(nxtId.next().value);
console.log(nxtId.next().value);

// recaursive function- we use when we wanna create a loop via function. it calls itself.

let sum = 0;
for(let i = 0; i<=10; i++){
    sum = sum + i;
}
console.log(`sum: `, sum);

let recursiveFn = function(iterationCount){
    if(iterationCount === 1){
        return iterationCount;
    }
    return iterationCount + recursiveFn(iterationCount-1);
}
console.log(recursiveFn(10));
