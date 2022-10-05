//EASY (1)

// var input = [2, 4, 7, 11, 15, 16]; 

// function sortEvenOdd (input) {

// var even = [];

// var odd = [];

// for(var i = 0; i<input.length; i++) {
//     if (input [i] % 2 === 0){
//         even.push(input[i]);
//         //console.log(even);
//     }
//     if(input [i] % 2 === 1){
//         odd.push(input[i]);
//         //console.log(odd);
// }}

// const returnObject = {
//     odd,
//     even,
// }; return returnObject;}

// console.log(sortEvenOdd(input));



//-----------------------------------------



//EASY (2)

// var array = [1,2,3,4,5,6,7,8,9,10];
// var primes = array.filter(sortPrimeNumbers);

// function sortPrimeNumbers(input) {
//     for(var i = 2; i < input; i++) {
//         if(input % i === 0) {
//         return false;
//         }
//     }

//     return input !== 1;
// }

//     console.log(primes);


//-------------------------------------------



//MEDIUM (1)

// function vowelChecker(x) {
//     var input = x.toLowerCase();
//     if (
//         input === "a" ||
//         input === "e" ||
//         input === "i" ||
//         input === "o" ||
//         input === "u"
//     ) {
//         console.log("This is a vowel.");
//     } else {
//         console.log("This is not a vowel.");
//     }
// }
//     vowelChecker("b");
//     vowelChecker("a");



//-------------------------------------------



//MEDIUM (2)

// let string1 = "So dark the con of man";
// let string2 = "Madonna of the Rocks";
// let string3 = "Things are good";
// let string4 = "Dogs eat ants";
// function isAnagram(str1, str2) {
//     let regex = /[a-zA-Z0-9]/g;
//     let words1 = str1.match(regex).length;
//     let words2 = str2.match(regex).length;
//     console.log(words1);
//     console.log(words2);
//         if (words1 != words2) {
//     return false;
// }
//     let sorting1 = str1.split().sort().join();
//     let sorting2 = str1.split().sort().join();
//         if (sorting1 == sorting2) {
//     return true;
// }
// }
    
//     console.log(isAnagram(string1, string2));
//     console.log(isAnagram(string3, string4));



//-------------------------------------------



//MEDIUM (3)

// function gcdNumbers(num1, num2) {
//     num1 = Math.abs(num1);
//     num2 = Math.abs(num2);
//     while (num2) {
//     var t = num2;
//     num2 = num1 % num2;
//     num1 = t;
//     }
//     return num1;
// }

//     console.log(gcdNumbers(336, 360));



//-------------------------------------------



//MEDIUM (4)

// class Car {
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.mileage = 2000;
//         this.color = color;
//         this.driveToWork = function () {
//     console.log("old mileage " + this.mileage);
//         this.mileage += 33;
//     console.log("new mileage "+ this.mileage);
// };
//         this.driveAroundTheWorld = function () {
//         console.log("old mileage " + this.mileage);
//         this.mileage += 24000;
//         console.log("new mileage "+ this.mileage);
// };
//         this.runErrands = function () {
//         console.log("old mileage " + this.mileage);
//         this.mileage += 30;
//         console.log("new mileage "+ this.mileage);
//     };
// }
// }
// let car1 = new Car("Nissan", "Murano", 2017, "red");
// car1.driveToWork();
// car1.driveAroundTheWorld();
// car1.runErrands();


//-------------------------------------------



//HARD (1)

// let str1 = "{hello world}";
// let str2 = "{hello world]";
// let str3 = "hello world";
// function checkString(string) {
//     let brackets = true;
//         if (
//     (string.charAt(0) == "(" && string.charAt(string.length - 1) == ")") ||
//     (string.charAt(0) == "{" && string.charAt(string.length - 1) == "}") ||
//     (string.charAt(0) == "["&& string.charAt(string.length - 1) == "]")
// ) {
//     brackets = true;
//     } else {
//     brackets = false;
// }
//     return brackets;
// }
// console.log(checkString(str1));
// console.log(checkString(str2));
// console.log(checkString(str3));