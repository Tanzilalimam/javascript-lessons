// arrays-
console.log(`array`);

// basic array-
let arr1 = ['bmw', 'volvo', 'ford'];
console.log(arr1, typeof arr1);

let arr2 = []; // inserting values/elements in an empty array
arr2[0] = 'cucumber';
arr2[1] = 'banana';
arr2[2] = true;
arr2[3] = 23;
arr2[4] = false;
arr2[5] = 'almond';
console.log(arr2);
let index = arr2[0]; // accessing array with index number
console.log(index);

arr2[3] = 'opel'; // changing array elements
console.log(arr2);
console.log(arr2.length); // returns the number of elems
console.log(`array sort: `, arr2.sort()); // sorts the array into order.

console.log(arr2.toString()); // turning array into string

let tex = arr2;
console.log(tex); // displaying array via another variable
tex = JSON.stringify(arr2); // displaying array via another variable(best practice)
console.log(tex);

let arr3 = new Array(3, 5, 2, 1, 4, 0);
console.log(arr3.sort()); // also works with numbers
console.log(arr3[0]); // accessing array's first elem
console.log(arr3[arr3.length-1]); // accessing array's last elem

// looping through array elements-
let fruit = ['mango', 'banana', 'apple', 'guava', 'strawberry',23];
let frt_length = fruit.length;

for(let i=0; i<= frt_length-1; i++){ // this is one way
    console.log(fruit[i]);
}

// for(let i = 0; i < frt_length; i++){ // same but another way
//     console.log(fruit[i]);
// }

// array.forEach() function-
fruit.forEach(function(elems){
    console.log(elems);
});

// adding array elements-
fruit.push('tomato'); // push technique
console.log(fruit);

fruit[fruit.length] = 'lemon'; // can be added via length
console.log(fruit);
fruit[9] = 'durian'; // adding with higher index leaves empty slots so never try this
console.log(fruit);

console.log(Array.isArray(fruit)); // checking if the variable is actually an array.

let arrObj = {
    name: 'monir',
    age: 90,
    cars:[
        {
            name: 'ford',
            model: ['bronco', 'fiesta', 'mustang']
        },
        {
            name: 'bmw',
            model: ['m3', 'i7', 'sedan']
        },
        {
            name: 'toyota',
            model: ['land cruiser', 'crown']
        }
    ]
}
console.log(arrObj);

// to access arrays in array need to use for in loop-
for(let i in arrObj.cars){
    console.log(arrObj.cars[i].name);
}
for(let j in arrObj.cars){
    console.log(arrObj.cars[j].model);
}

// js array methods-
console.log(fruit.pop(), fruit); // removes last element
console.log(fruit.shift(), fruit); // removes first element
console.log(fruit.unshift('durian'), fruit); // adds new elem in first element
fruit[5] = 'kiwi';
console.log(fruit);

// concatenning- merges arrays into another-
let girls = ['molly', 'sofia'];
let boys = ['adil', 'rahim'];
let food = ['chicken', 'beef']
console.log(boys.concat(girls, food));

// splice method- adds new elements to array
let birds = ['dove', 'eagle', 'pegion', 'owl'];
birds.splice(1, 0, 'duck', 'hen');  // 1st- indicates position, 2nd indicates- elems to remove.
console.log(birds);

// toSpliced()- instead of altering main array it creates new one
let spliced = birds.toSpliced(0, 1, 'bee');
console.log(spliced);

// slice method-
let animal = ['lion', 'tiger', 'rihno', 'deer', 'tiger'];
let selectedAnimal = animal.slice(1);
citrus = animal.slice(0,1);
console.log(selectedAnimal);
console.log(animal);

// search method- many method remains
animal = ['lion', 'tiger', 'rihno', 'deer', 'tiger'];
console.log(animal.indexOf('rihno')); // indexOf()
console.log(animal.lastIndexOf('tiger')); // lastIndexOf()
console.log(animal.includes('deer')); // includes()
console.log(animal.includes('leopard'));


// sort-
console.log(animal.sort()); // sorts whole array
console.log(animal.reverse()); // reverses whole array
let sortedAnimal = animal.toSorted(); // sortes while making new array
console.log(sortedAnimal);
sortedAnimal = animal.toReversed(); // reverses while making new array
console.log(sortedAnimal);
