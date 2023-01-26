"use strict";

// var complexArr = [];
// var simpleArr = [];

// for (var i = 0; i < 10; i++) {
//   var randomNum = Math.round(Math.random() * (30 - 10) + 10);
//   var isSimple = true;
//   for (var j = 2; j < randomNum; j++) {
//     if (randomNum % j === 0) {
//       debugger;
//       complexArr.push(randomNum);
//       isSimple = false;
//       break;
//     }
//   }
//   if (isSimple) simpleArr.push(randomNum);
// }

// console.log(complexArr);
// console.log(simpleArr);

// var complexArray = [];
// var simpleArray = [];
// for (var i = 0; i < 20; i++) {
//   var randomNumber = Math.round(Math.random() * (50 - 20) + 20);
//   var isSimple = true;
//   for (var j = 2; j < randomNumber; j++) {
//     if (randomNumber % j === 0) {
//       complexArray.push(randomNumber);
//       isSimple = false;
//       break;
//     }
//   }

//   if (isSimple) simpleArray.push(randomNumber);
// }

// console.log(complexArray);
// console.log(simpleArray);

var uniqueArr = [];

for (var i = 0; i < 10; i++) {
  var randomNum = Math.round(Math.random() * (50 - 20) + 20);
  var sameNum = false;

  for (var j = 0; j < uniqueArr.length; j++) {
    if (randomNum === uniqueArr[j]) {
      sameNum = true;
      i--;
      break;
    }
  }
  if (!sameNum) uniqueArr.push(randomNum);
}

console.log(uniqueArr);

// var arr = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326];

// for (var i = 0; i < arr.length; i++) {
//   var counter = 0;
//   for (var j = 1; j <= arr[i]; j++) {
//     if (arr[i] % j === 0) {
//       counter++;
//     }
//   }
//   console.log(`${arr[i]} index  -> გამყოფების რაოდენობა ${counter} `);
// }

// var randomArr = [];
// var maxNum = 0;

// for (var i = 0; i < 10; i++) {
//   randomArr.push(Math.round(Math.random() * 20));
//   if (randomArr[i] > maxNum) {
//     maxNum = randomArr[i];
//   }
// }

// console.log(randomArr);
// console.log(maxNum);
