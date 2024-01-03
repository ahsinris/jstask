
// // function getObject(a, b, c) {
// //     let obj = a
// //     for (let key of b) {
// //         if (obj && key in obj) {
// //             obj = obj[key]

// //         }
// //         else {
// //             return c
// //         }

// //     }

// //     return obj

// // }

// // var inputObject = { 'a': [{ 'b': { 'c': 3 } }] };

// // let searchQuery = ['a', 0, 'b', 'c']

// // console.log(getObject(inputObject, searchQuery, 0))



// class Calculator {
//     constructor() {
//         this.result = 0
//     }
//     add(value) {
//         this.result += value
//         return this
//     }
//     subtract(value) {
//         this.result -= value
//         return this
//     }
//     multiply(value) {
//         this.result *= value
//         return this

//     }
//     evaluate() {
//         return this.result
//     }

// }

// const calc = new Calculator()
// const result = calc.add(5).multiply(2).subtract(3).evaluate();
// console.log(result);



const arr = ['Prihodi 23456 danaci 34 razhodi 23455 I drugi.']

const mapArray = arr.filter((item) => {
    if (item < 0 || item >= 0) return item;
});

console.log(mapArray);