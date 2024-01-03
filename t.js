// let n = 8, range = 5;

// function randomNumberGenerator(n, range) {

//     let rand = '', sumRand = 0;
    
//     for(let i=1; i<=range; i++) {

//         let randomNumber = Math.floor(Math.random() * 10) 
//         rand += randomNumber;
//         sumRand += randomNumber
//     }

//     if (sumRand == n) return rand;
//     else return randomNumberGenerator(n, range);  
// }



// let n = 3, range = 4;

// function randomNumberGenerator(n, range) {

//     let rand = '', sumRand = 0, lastDigit;

    
//     for(let i=1; i<=range; i++) {

//         if(i == range) {
//             lastDigit = n - sumRand;

//             rand += lastDigit;
//             sumRand += lastDigit
//         }
//         else {
//             let randomNumber = Math.floor(Math.random() * 10) 
//             rand += randomNumber;
//             sumRand += randomNumber
//         }

        
//     }

//     if (rand.length != 1 && sumNumbers(sumRand, n)) return rand;
//     else return randomNumberGenerator(n, range);  
// }

// function sumNumbers(sumRand, n) {

//     const numberArray = sumRand.toString().split('')

//     let numberSum = 0
//     for(let i =0; i< numberArray.length; i++) {
//         numberSum += numberArray[i];
//     }

//     if(numberSum == n) return true;
//     return false;
// }

// // console.log(randomNumberGenerator(n, range));
// function generateRandomNumber() {
//     // Generate random digits from 0 to 9 for each position
//     const digit1 = Math.floor(Math.random() * 10);
//     const digit2 = Math.floor(Math.random() * 10);
//     const digit3 = Math.floor(Math.random() * 10);
//     const digit4 = 3 - (digit1 + digit2 + digit3); // Ensure the sum is 3
  
//     // Check if digit4 is a valid digit (between 0 and 9)
//     if (digit4 >= 0 && digit4 <= 9) {
//       // Construct the 4-digit number
//       const randomNumber = digit1 * 1000 + digit2 * 100 + digit3 * 10 + digit4;
//       return randomNumber;
//     } else {
//       // If digit4 is not valid, call the function recursively
//       return generateRandomNumber();
//     }
//   }
  
  // Generate a random number with the desired properties
//   const randomFourDigitNumber = randomNumberGenerator(n, range);
//   console.log("Random Number:", randomFourDigitNumber);

