'use strict';
// დავალება 1

function bol(...numbers) {
    let sum = 0
    for (let index of numbers) {
        sum += index
    }
    return sum;
}
let resume = bol(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resume);
// დავალება 2

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
let nom = `${user.firstname} ${user.lastname}`
console.log(nom);
console.log(user.isloggedin);

// დავალება 3

let lotNumber = (...numbers) => {
    for (let index of numbers) {
        return Math.max(numbers);
    }
};
let maxNumber = lotNumber(Math.max(5, 67, 87, 76, 777, 87, 34, 23, 91));
    console.log(maxNumber);

// დავალება 4

let n = (number) => {
    if (number % 2 == 0) {
        return "this number is even‘"
    }
    return "this number is odd‘"
}
let i = n(7);
console.log(i);

// დავალება 5

let array = [1,2,3,4,5]; 
array.reverse();
for (item of array) {
    console.log(item);
}

// დავალება 6

let age = (userAge) => {
    ageInfo = userAge > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
    return ageInfo;
};
let ageUsed = age(17);
console.log(ageUsed);