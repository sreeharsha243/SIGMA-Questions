// let pencilPrice = 10;
// let eraserPrice = 5;
// //let output = "The total price is :" + (pencilPrice + eraserPrice) + " Rupees.";
// let output = `The total price is : ${pencilPrice + eraserPrice} Rupees`;
// console.log(output);

//Arithmetic Operators
// let a = 10;
// let b = 2;
// console.log((b = a));
// console.log(a < 0);

// let age = 17;
// if (age > 17) {
//   console.log("you can vote");
// } else {
//   console.log("you cannot vote");
// }

// let color = "blue";
// if (color === "red") {
//   console.log("STOP");
// } else if (color === "yellow") {
//   console.log("GO SLOW");
// } else if (color === "green") {
//   console.log("GO");
// } else {
//   console.log("TRAFFIC LIGHT BROKEN");
// }

// let size = "L";
// if (size === "XL") {
//   console.log("250");
// } else if (size === "L") {
//   console.log("200");
// } else if (size === "M") {
//   console.log("100");
// } else {
//   console.log("50");
// }

// let str = "samsu";
// if (str[0] === "a" && str.length > 3) {
//   console.log("good string");
// } else {
//   console.log("not a good string");
// }

// let num = 12;
// if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
//   console.log("safe");
// } else {
//   console.log("unsafe");
// }

// if (0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Wrong day");
// }

// alert("This is a simple alert");
// console.error("This is an error maessage!");
// console.warn("Warning Message!");

// let a = prompt("enter the value of a");
// let b = prompt("enter another value");
// console.log(a + b);

//Assignment 1
// var num = 150;
// if (num % 10 == 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`${name} is ${age} years old`);

// let quarter = 2;
// switch (quarter) {
//   case 1:
//     console.log("January, February, March");
//     break;
//   case 2:
//     console.log("April, May, June");
//     break;
//   case 3:
//     console.log("July, August, September");
//     break;
//   case 4:
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("Enter a number between 1 to 4");
//     break;
// }

// let str = prompt("Enter a nameapp");
// if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
//   console.log("golden string");
// } else {
//   console.log("Not a golden string");
// }

// let a = 1;
// let b = 9;
// let c = 2;

// if (a > b && a > c) {
//   console.log(`biggest number is ${a}`);
// } else if (b > a && b > c) {
//   console.log(`biggest number is ${b}`);
// } else {
//   console.log(`biggest number is ${c}`);
// }

// let a1 = 2;
// let b1 = 2;

// if (a1 % 10 == b1 % 10) {
//   console.log("Same last digit");
// } else {
//   console.log("Not same last digit");
// }

// let msg = "     Sree Harsha";
// console.log(msg.toLowerCase());
// console.log(msg.toUpperCase());

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);
// console.log(newMsg.slice(5, newMsg.length));
// console.log(newMsg.slice(1));

// let str = "ILoveCoding"; //only first accurence will change
// console.log(str.replace("Love", "do"));
// console.log(str.replace("I", "We"));
// console.log(str.replace("Coding", "Eating"));
// console.log(str.repeat(2));

// let msg = "M help";
// console.log(msg.trim().toUpperCase());

// let nam = "ApnaCollege";
// console.log(nam.slice(4, 9));
// console.log(nam.indexOf("na"));
// console.log(nam.replace("Apna", "Our"));
// console.log(nam.slice(4, nam.length).replace("l", "t").replace("l", "t"));

// let num = [1, 2, 3, 4, 25];
// console.log(num[4]);
// let names = ["harsha", "hari", "ram"];
// names[0] = "Sree Harsha";
// names.push("Jai");
// names.pop();
// console.log(names);
// names.unshift("jai");
// names.shift();
// console.log(names);
// let info = ["harsha", 21, 8.6];
// console.log(info[0]);

// let months = ["january", "july", "march", "august"];
// // months.shift();
// // months.shift();
// // months.unshift("june");
// // months.unshift("july");
// console.log(months);
// console.log(months.indexOf("augus"));
// console.log(months.includes("august"));
// let month = ["february", "march", "april"];
// console.log(months.concat(month));
// // console.log(months.reverse());
// console.log(months.slice(2));
// console.log(months.splice(1, 0, "february"));
// console.log(months);

// let cars = ["bmw", "audi", "toyota", "benz"];
// console.log(cars.sort());
// let nums = [2, 39, 1, 50, 4];
// console.log(nums.sort());

//Assignment

// let assign = ["january", "july", "march", "august"];
// console.log(assign.splice(0, 2, "july", "june"));
// console.log(assign);
// let tech = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(tech.reverse().indexOf("javascript"));

//constant can changed once it has intialized
// const a = 10;
// console.log(a);
// const a1 = [1, 2, 3];
// // a1 = [1, 2];  cannot be done for constant array
// console.log(a1.push(4));
// console.log(a1);

// let nums = [
//   [1, 2, 3],
//   [2, 3],
//   [3, 4],
// ];
// console.log(nums[0][3]);

// let ttt = [
//   ["X", " ", "O"],
//   [" ", "X", " "],
//   ["O", " ", "X"],
// ];
// ttt[0][1] = "O";
// console.log(ttt);

//part-3 assignment
// let arr1 = [7, 9, 0, -2];
// let input = prompt("enter the value of n to print n values of array");
// console.log(arr1.slice(0, input));
// console.log(arr1.slice(-input));

// let str1 = "a";
// if (str1 === " ") {
//   console.log("string is blank");
// } else {
//   console.log("string is not blank");
// }

// let str2 = "harsha";
// if (str2[0] == str2[0].toLowerCase()) {
//   console.log("lower case");
// } else {
//   console.log("not a lower case");
// }

// let str3 = prompt("please enter a string");
// console.log(`${str3}`);
// console.log(`${str3.trim()}`);

// let arr2 = [1, 2, 3, 4, 5];
// let ite = 2;
// if (arr2.indexOf(ite) != -1) {
//   console.log("exists in array");
// } else {
//   console.log("not exists in array");
// }

// FOR LOOP
// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }

// let m = 11;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${m} X ${i} = ${m * i}`);
// }

// for (i = 1; i <= 3; i++) {
//   for (j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

//WHILE LOOP
// let a = 0;
// while (a <= 20) {
//   console.log(a);
//   a++;
// }

// const favmovie = "interstellar";
// let guess = prompt("enter the movie name");

// while (favmovie != guess && guess != "quit") {
//   guess = prompt("wrong guess,please try again");
// }
// if (guess == favmovie) {
//   console.log("correct");
// }

// let days = [
//   ["monday", "first", "sad"],
//   ["tuesday", "second", "sad"],
//   ["wednesday", "third", "sad"],
//   ["thursday", "four", "sad"],
//   ["friday", "five", "sad"],
//   ["saturday", "six", "sad"],
//   ["sunday", "seven", "sad"],
// ];
// for (i = 0; i < days.length; i++) {
//   console.log(`index:${i}`);
//   for (j = 0; j < days[i].length; j++) {
//     console.log(j, days[i][j]);
//   }
// }
// for (i of days) {
//   for (j of i) {
//     console.log(j);
//   }
// }

//TODO APP
// let todo = [];
// let req = prompt("please enter your request");
// while (true) {
//   if (req == "quit") {
//     console.log("quitting app");
//     break;
//   }

//   if (req == "list") {
//     console.log("-----------");
//     for (i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("-----------");
//   } else if (req == "add") {
//     let task = prompt("enter the task to be added");
//     todo.push(task);
//     console.log("task added");
//   } else if (req == "delete") {
//     let idx = prompt("enter the task to be deleted");
//     todo.splice(idx, 1);
//     console.log("task deleted");
//   } else {
//     console.log("wrong request");
//   }
//   req = prompt("please enter your request");
// }

//Assigment part-4
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let n = 2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == n) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// let number = 287152;
// let i = 0;
// while (number > 1) {
//   number = number / 10;
//   i++;
// }
// console.log(i);

// let sum = 0;
// let copy = number;
// while (copy > 0) {
//   digit = copy % 10;
//   sum += digit;
//   copy = Math.floor(copy / 10);
// }
// console.log(sum);

// let fact = 4;
// let fac1 = 1;
// if (fact > 0) {
//   for (let i = 1; i <= fact; i++) {
//     fac1 = i * fac1;
//   }
// }
// console.log(fac1);

// let arr1 = [20, 21];
// let high = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (high < arr1[i]) {
//     high = arr1[i];
//   }
// }
// console.log(high);

//object literals
// let student = {
//   name1: "Harsha",
//   age: "21",
//   marks: "8.6",
// };

// const item = {
//   price: 100,
//   discount: 50,
//   colors: ["red", "pink"],
// };

// const post = {
//   uname: "@Harsha",
//   content: "This is my first post",
//   likes: 150,
//   repost: 5,
//   tags: ["@MaSH", "@M1"],
// };

// const obj = {
//   1: "a",
//   2: "b",
//   true: "c",
//   null: "d",
//   undefined: "e",
// };

// let student = {
//   name: "Harsha",
//   age: 21,
//   city: "delhi",
//   marks: 8.6,
// };

//Object of objects
// const classInfo = {
//   harsha: {
//     grade: "A",
//     city: "kalluru",
//   },
//   hari: {
//     grade: "A+",
//     city: "shimoga",
//   },
//   jai: {
//     grade: "A",
//     city: "shimoga",
//   },
// };

//Array of objects
// const classInfo = [
//   {
//     grade: "A",
//     city: "kalluru",
//   },
//   {
//     grade: "A+",
//     city: "shimoga",
//   },
//   {
//     grade: "A",
//     city: "shimoga",
//   },
// ];

//Math Object for Math objects like PI,abs,floor,ceil,random.

// let num = Math.random();
// num = num * 100;
// num = Math.floor(num);
// Math.floor(Math.random() * 5) + 11;

//Guessing game
// const a = prompt("enter the maximum number");
// const random = Math.floor(Math.random() * 5) + 1;
// let guess = prompt("guess the number");
// while (true) {
//   if (guess == "quit") {
//     console.log("user quit");
//     break;
//   }

//   if (guess == random) {
//     console.log("correct guess, random number was", random);
//     break;
//   } else if (guess < random) {
//     guess = prompt("too small, try again");
//   } else if (guess > random) {
//     guess = prompt("too big, try again");
//   }
//   //   else {
//   //     guess = prompt("wrong guess, please try again");
//   //   }
// }

//random representing dice roll
// const num = Math.floor(Math.random() * 6) + 1;
// console.log(num);

// const car = {
//   nam: "Toyota",
//   model: "Fortuner",
//   color: "black",
// };

// const person = {
//   uname: "harsha",
//   age: "21",
//   city: "anantapur",
// };

//FUNCTION
// function hello() {
//   console.log("hello world!");
// }

// hello();
// function printName() {
//   console.log("Sree Harsha M");
//   for (i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }
// printName();

// function poem() {
//   console.log("Twinkle Twinkle little star");
//   console.log("How i wonder what you are");
//   console.log("Up above in the sky");
//   console.log("like a diamond in the sky");
// }
// poem();

// function dice() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }
// dice();

//FUNCTION With Arguments
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(1, 2);

// function Info(uname, age) {
//   console.log(uname, "is", age, "Years old.");
// }
// Info("Harsha", 21);
// Info("Hari", 22);

// function average(a, b, c) {
//   console.log((a + b + c) / 3);
// }
// average(5, 6, 7);

// function table(a) {
//   for (i = 1; i <= 10; i++) {
//     console.log(`${a} x ${i} = ${a * i}`);
//   }
// }
// table(59);

//FUNCTION With Return values
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(3, 2));

// function sum(n) {
//   let x = 0;
//   for (i = 1; i <= n; i++) {
//     x = x + i;
//   }
//   return x;
// }
// console.log(sum(100));

// function concat(str) {
//   let result = "";
//   for (i = 0; i < str.length; i++) {
//     result += str[i];
//   }
//   return result;
// }
// str = ["hello", "my", "is", "Sree Harsha M"];
// console.log(concat(str));

//SCOPE in function

// let sum = 5;
// function csum(a, b) {
//   let sum = a + b;
// }

// csum(1, 2);
// console.log(sum);

//BLOCK Scope
// let age = 25;
// if (age >= 18) {
//   let str = "adult";
//   console.log(str);
// }

//LEXICAL Scope

// function outer() {
//   let x = 5;
//   let y = 6;
//   function inner() {
//     console.log(x);
//     console.log(y);
//   }
//   inner();
// }

//Example Q's

// let greet = "hello";

// function outg() {
//   let greet = "namaste";
//   console.log(greet);
//   function inng() {
//     console.log(greet);
//   }
//   inng();
// }
// console.log(greet);
// outg();

// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(2, 3));

// function multipleGreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("hello");
// };
// multipleGreet(greet, 10);

// function oddEven(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("wrong request");
//   }
// }

// let request = "even";

// const cal = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };

// //OR
// const cal1 = {
//   add(a, b) {
//     return a + b;
//   },
//   sub(a, b) {
//     return a - b;
//   },
//   mul(a, b) {
//     return a * b;
//   },
// };

// let arr = [1, 9, 5, 7];
// let num = 5;
// function high(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }

// high(arr, num);

// function unq(str) {
//   let ans = " ";
//   for (let i = 0; i < str.length; i++) {
//     let cr = str[i];
//     if (ans.indexOf(cr) == -1) {
//       ans += cr;
//     }
//   }
//   return ans;
// }
// let str1 = "abcdabcdefgggh";
// console.log(unq(str1));

// const country = ["india", "Germany", "USA", "Seattle"];

// function high(country) {
//   let ans = 0;
//   for (i = 0; i < country.length; i++) {
//     a1 = country[ans].length;
//     a2 = country[i].length;
//     if (a1 < a2) {
//       ans = i;
//     }
//   }
//   return country[ans];
// }
// console.log(high(country));

// let str = "harshaaeiou";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] == "a" ||
//     str[i] == "e" ||
//     str[i] == "i" ||
//     str[i] == "o" ||
//     str[i] == "u"
//   ) {
//     count++;
//   }
// }
// console.log(count);

// let arr1 = [1, 2, 3, 4, 5, 10, 7];
// let a = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (a < arr1[i + 1]) {
//     a = arr1[i + 1];
//   }
// }
// console.log(a);

// let start = 5;
// let end = 10;
// diff = end - start;
// let rand = Math.floor(Math.random() * diff) + start;
// console.log(rand);

// const student = {
//   name: "harsha",
//   age: 23,
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getavg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got avg marks = ${avg}`);
//   },
// };

//Try and Catch block
// console.log("hello");
// try {
//   console.log(a);
// } catch {
//   console.log("Error");
// }
// console.log("hello2");

//Arrow functions
// const sum = (a, b) => console.log(a + b);

// sum(10, 20);

// const cube = (n) => {
//   n * n * n;
// };
// console.log(cube(5));

//set Timeout function

// console.log("hi there");

// setTimeout(() => {
//   console.log("Sree Harsha M");
// }, 1000);
// //Or
// setTimeout(hi, 4000);

// function hi() {
//   console.log("Sree Harsha M");
// }

// console.log("Welcomes you");

//set Interval function

// let iq = setInterval(() => {
//   console.log("hello");
// }, 2000);
// console.log(iq);

//this with arrow functions *****
// const student = {
//   name: "Harsha",
//   marks: 82,
//   prop: this,
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this);
//     return this.marks; //for arrow functions this is known as parent scope
//   },
//   getInfo: function () {
//     setTimeout(() => console.log(this), 1000); //student
//   },
//   getInfo2: function () {
//     setTimeout(function () {
//       console.log(this); //window
//     }, 1000);
//   },
// };

//practice Q's
// let sqr = (n) => {
//   console.log(n * n);
// };

// let id = setInterval(() => {
//   console.log("hello world");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("clear interval ");
// }, 10000);

//part 7 practice questions
// const arr = (a1) => {
//   let a2 = 0;
//   const a = a1.length;
//   for (i = 0; i < a1.length; i++) {
//     a2 = a2 + a1[i];
//   }
//   return a2 / a;
// };

// let arr1 = [10, 12];
// console.log(arr(arr1));

// const iseven = (n) => {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log("Given number is " + iseven(12));

// const object = {
//   message: "Hello, World!",
//   logMsg() {
//     console.log(this.message);
//   },
// };
// setTimeout(object.logMsg, 1000);

// let length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object1 = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };
// object1.method(callback, 1, 2);

//Array Methods
// let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//   console.log(el);
// };

// arr.forEach(print);

// arr.forEach(function (el) {
//   console.log(el);
// });

// let arr = [
//   {
//     name: "Harsha",
//     marks: 82,
//   },
//   {
//     name: "Hari",
//     marks: 90,
//   },
// ];

// arr.forEach((el) => {
//   console.log(el.marks);
// });

// let gpa = arr.map((el) => {
//   return el.marks / 10;
// });

//array MAP
let num = [1, 2, 3, 4];
// let double = num.map((el) => {
//   return el * 2;
// });

//array FILTER
// let even = num.filter((el) => {
//   return el % 2 == 0;
// });

//array EVERY
// let a1 = num.every((el) => {
//   //for all correct values it prints true or false in remaining cases
//   return el % 2 == 0;
// });

//array SOME
// let red = num.reduce((res, el) => {
//   //accumulator is a variable used to store the values of elements
//   //reduce(accumulator,element)
//   console.log(res);
//   return res + el;
// });
// console.log(red);

// let arr = [1, 4, 2, 7, 10, 7];
// let max = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let max1 = arr.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });
// console.log(max1);

//practice Questions
// let arr = [10, 100, 40, 50];

// let mul = arr.every((el) => {
//   return el % 10 == 0;
// });
// console.log(mul);

// let min = arr.reduce((res, el) => {
//   if (res < el) {
//     return res;
//   } else {
//     return el;
//   }
// });
// console.log(min);

//Default Parameters
// function sum(a = 1, b = 1) {
//   return a + b;
// }

//spread for separating values
// console.log(Math.min(10, 1, 100));
// let arr = [1, 2, 3, 2, 3, 1, 0, 1, 3, 1, 0, -1];
// console.log(Math.min(...arr));
// console.log(...arr);
// console.log(..."SreeHarshaM");

//spread with array literals
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArr = [...arr];
// console.log(newArr);

// let a1 = "Harsha";
// let chars = [...a1];
// console.log(chars);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let nums = [...odd, ...even];
// console.log(nums);

//spread with Object literals
// let data = {
//   email: "msharsha8118@gmail.com",
//   pass: "abcd",
// };

// let cpy = { ...data, id: 123 };

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let cp = { ...arr1 };

//REST(inverse of spread)
// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log("you gave number", args[i]);
//   }
// }

// sum(1, 2, 3, 4);

// function min() {
//   console.log(arguments.length);
// }

// min(1, 2, 3, 4);

// function sum(...args) {
//   return args.reduce((sum, el) => sum + el);
// }

//Destructuring
// let names = ["tony", "bruce", "steve", "peter"];
// let [winner, runner, ...others] = names;
// console.log(winner, runner, others);

//Destructuring with objects
// const student = {
//   name: "harsha",
//   age: 21,
//   clas: 12,
// };

// let { name: username, age, clas: hel = 13 } = student;

//part-8 practice questions
// let arr = [1, 2, 3, 4, 5];
// const sqr = arr.map((num) => num * num);
// console.log(sqr);

// const add = arr.reduce((a, b) => a + b);
// console.log(add);

// const avg = add / arr.length;
// console.log(avg);

// let number = [2, 4, 6, 8, -2, -4];
// console.log(number.map((num) => num + 5));

// let words = ["harsha", "hello", "hari", "high"];
// console.log(words.map((wr) => wr.toUpperCase()));

// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((v) => v * 2),
// ];

// let arr = [1, 2, 3, 4];
// console.log(doubleAndReturnArgs(arr, 5, 6));

// const mergeObjects = (o1, o2) => ({ ...o1, ...o2 });
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

//DOM(Documnet Object Model)
