const Person = {
    name : "Max",
    age : 29,
    greet() {
        console.log('Hi, I am ' +this.name);
    }
}

// 객체 구조 분해
const printName = ({ name }) => {
    console.log(name);
}

printName(Person);

//객체 구조 분해 (destructuring)
const { name, age } = Person;

console.log(name,age);
//
// const copiedPerson = {...Person};
// console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];

// 객체 구문 분해
// 위치 기반 분해
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);
// console.log(hobbies.map(hobby => 'Hobby : ' + hobby));
//
// const toArray = (...args) => {
//     return args[0];
// }
//
// console.log(toArray(1,2,3,4));

