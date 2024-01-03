// const number = Number(Math.floor(Math.random()*9000))
// console.log(number)
// let sum =Number(0)
// console.log(sum)
// for(i=0;i<number.length;i++){
//     sum+=number[i]
//     console.log(sum)

// // }

// console.log(Math.floor(1000+(4 + (3 - 2) * Math.random()*1000)));
// let number1,number2,number3,number4,sum
// let i = 1
// // do{
//     let  empty =[];
//     for(let i=0;i<100;i++){
//         let number = Math.floor(Math.random()*10);
//         empty.push(number)

//     }
//     // console.log(empty)
//     let a =0;
//     empty.forEach(i => {
//         a+=i
        
    // });
    // console.log(a)
   
    // number1 =Math.floor(Math.random()*10)
    // number2 =Math.floor(Math.random()*10)
    // number3 =Math.floor(Math.random()*10)
    // number4 =Math.floor(Math.random()*10)
    // sum =number1+number2+number3+number4
    // randomNumber=" "+number1+number2+number3+number4
    // console.log(`iteration:${i++},number1:${number1},number2:${number2},number3:${number3},number4:${number4},randomNumber:${randomNumber}`)
    // } 
    // while(sum!==7)
    // console.log(randomNumber)
    // console.log("Random Four-Digit Number: "+number1+number2+number3+number4)
// let number1,number2,number3,number4 
// do{
//     number1 =Math.floor(Math.random()*10)
//     number2 =Math.floor(Math.random()*10)
//     number3 =Math.floor(Math.random()*10)`
//     number4 =Math.floor(Math.random()*10)
//     sum =number1+number2+number3+nu
//     } while(number1+number2+number3+number4 !==7)
//     console.log(number1,number2,number3,number4)
//     console.log("Random Four-Digit Number: "+number1+number2+number3+number4)

// num1 = 1;


/**
 * num1=1,2,3,4
 * 
 * 
 * 
 */
// let sum =0;
// do{
//     let array=[]
//     for(let i =0;i<4;i++){
//         let number = Math.floor(Math.random()*10)
//         array.push(number)
       
//     }
//     console.log(array)
//     array.forEach(i => {
//         sum+=i
       
        
//     }); console.log(sum)

// }while(sum==7)

// sum = 0

// loop ->
//  do {
//     rand1 < 7/4
//     rand1
//  }while(rand  7/4) 

// let number1,number2,number3,number4,sum,i=0
// do{
//     number1=Math.floor(Math.random()*10)
//     number2=Math.floor(Math.random()*10)
//     number3=Math.floor(Math.random()*10)
//     number4=Math.floor(Math.random()*10)
//     sum =number1+number2+number3+number4
//     randomNumber=" "+number1+number2+number3+number4
//     console.log(`iteration:${i++},number1:${number1},number2:${number2},number3:${number3},number4:${number4},randomNumber:${randomNumber}`)

// }while(sum!==7)
// let array =[]
// let sum =0
// let i =0
// do{
//     for(let i=0;i<4;i++){
//         let number =Math.floor(Math.random()*10)
//         array.push(number)
        
//     }
//     for(let k=0;k<array.length;k++){
//         sum+=array[k]
        
//     }
//     console.log(sum)
// console.log(`iteration:${i++},`)

// }while(sum!==7)
// console.log(sum)
// function generateFourDigitNumberWithSum3() {
//     while (true) {
//       var digit1 = Math.floor(Math.random() * 10); // Random digit between 0 and 9
//       var digit2 = Math.floor(Math.random() * 10);
//       var digit3 = Math.floor(Math.random() * 10);
//       var digit4 = 3 - (digit1 + digit2 + digit3); // Calculate the fourth digit
      
//       // Check if the fourth digit is non-negative and less than 10
//       if (digit4 >= 0 && digit4 < 10) {
//         // Combine the digits to form the four-digit number
//         var fourDigitNumber = digit1 * 1000 + digit2 * 100 + digit3 * 10 + digit4;
//         return fourDigitNumber;
//       }
//     }
//   }
  
//   // Generate the random number
//   var randomFourDigitNumber = generateFourDigitNumberWithSum3();
  
//   // Output the result
//   console.log("Random Four-Digit Number with Sum 3: " + randomFourDigitNumber);




 TASK1
function randomNumberGenerator (n,range) {
    let randomNumber ='' 
    let sum=0
    for(let i=0;i<range;i++){
       let number= Math.floor(Math.random()*10)
       randomNumber+=number
       sum+=number
       console.log(i,randomNumber) 
    }
    if(sum==n) return randomNumber;
    else return randomNumberGenerator(n,range)
}
  console.log(randomNumberGenerator(7,4))

//   TASK2
function randomNumberGenerator2(n,range){
    let randomNumber =''
    let sum =0
for(let i=0;i<range;i++){
    let number = Math.floor(Math.random()*10)
    randomNumber+=number;
    sum +=number; 
    console.log(sum) 
}
let sumofsum= 0;
while(sum>0){
    sumofsum=sum%10
    sum =Math.floor(sum/10)
}
if(sumofsum==n)return randomNumber
else return randomNumberGenerator2(n,range)
}
console.log(randomNumberGenerator2(3,4))
  