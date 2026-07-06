console.log(`lesson 3`);
// object-
const car = {
    name: "vox wagon",
    model: 500,
    weight: '1200 kg',
    safe: true,
    color: "black"
}
console.log(car);
console.log(car.name);
console.log(car.model);
console.log(car.color);
console.log(car.safe);

const car2 = {}     // we can create an empty obj first then put properties in it.
car2.name = 'volvo';
car2.model = 80;
car2.safe = true;
console.log(car2);
console.log(car2["name"]);

const car3 = {
    name: 'bmw',
    model: 'm8',
    weight: 1500,
    speed: '290km/h',
    func: function(){
        return `${this.name} ${this.model} speed is ${this.speed}.`
    }
}
car3.safe = true;
console.log(car3);
console.log(car3.func());
car3.age = 109; //adding new keyword in an obj
delete car3.age; //deleting keywords property in an obj.
delete car3["func"]; //deleting keywords property in an obj.
console.log(car3);

let res = ("name" in car3); //use 'in' to check existance in property
console.log(res);

// nested obj is basically obj/objs in an obj-
const me = {
    name: 'myself',
    age: 27,
    car1:{
        name: 'tundra',
        type: 'suv',
        color: 'black'
    },
    car2: {
        name: 'hillux',
        type: '4 wheeler',
        color: 'beige'
    }
}
me.car2.color = 'blue'; // change a property value in obj
console.log(me);
console.log(me.car1.name); // accessing obj property
console.log(me['car2']['type']);

let p1 = 'car1';
let p2 = 'type';
console.log((me[p1][p2]).toUpperCase()); // using js methods to updating obj properties.

// constructor-
const person = function(first, age, gender){
    this.name = first,
    this.age = age,
    this.gender = gender
    // this.nationality = '' // a given value to property is default value to every new obj.
}
const father = new person('fat', 55, 'male');
const mother = new person('mat', 50, 'female');
const sister = new person('sis', 25, 'female');
console.log(father, mother, sister);

console.log(mother.nationality = 'afghan', mother); // changing property in an obj

console.log(person.prototype.nationality = 'arab', father, mother, sister.nationality);
