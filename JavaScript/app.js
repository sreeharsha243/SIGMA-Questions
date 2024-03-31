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

let num = Math.random();
num = num * 100;
num = Math.floor(num);
Math.floor(Math.random() * 5) + 11;
