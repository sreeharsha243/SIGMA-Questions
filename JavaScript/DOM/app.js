//selecting elements
// document.getElementById("");

// let smallImg = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImg.length; i++) {
//   smallImg[i].src = "assets/spiderman_img.png";
//   console.dir(`value of image no.${i} is changed`);
// }

//query selectors
//allow us to use css selectors
//gives first selector, if HTML has multiple same attributes or names
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("div a"));
// for selecting all values we use this one
// console.log(document.querySelectorAll("div a"));

//setting content in objects
// let para = document.querySelector("p");
//innerText, innerHTML, textContent

//manipulating attributes
//attributes are values of an elements
// let Img = document.querySelector("img");
// Img.getAttribute("id");
// Img.setAttribute("src", "assets/creation_1.png");

//manipulating style
// let Img = document.querySelector("img");
// Img.style;
// let head = document.querySelector("h1");
// head.style.backgroundColor = "black";
// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "black"; //it can be done on inline styles
// }

//classList Property add, remove, contain, toggle
//let img = document.querySelector("img");
// img.classList.add("abc");
// img.classList.remove("abc");
//img.setAttribute("class", "abc"); //another usage using this for classList
// img.classList.contains("abc");
//toggle is like a switch for yes or no
// img.classList.toggle("abc");

//navigation in HTML
// let h4 = document.querySelector("h4");
// h4.parentElement;
// let box = document.querySelector(".box");
// box.children;
// box.childElementCount;
// let ul = document.querySelector("ul");
// ul.children[1].previousElementSibling;
// ul.children[0].nextElementSibling;

//Adding Elements
// let newP = document.createElement("p");
// newP.innerText = "Hi, My name is Sree Harsha M";
// //we use append for insert element into HTML Page
// let body = document.querySelector("body");
// body.appendChild(newP);
// let btn = document.createElement("button");
// btn.innerText = "Click!";
// body.appendChild(btn);
//btn.append("Click me");
//prepend to add at first or inverse of append
// btn.prepend("Q");

//adjacent element for adding element at particular position
// let btn = document.createElement("button");
// btn.innerHTML = "Click";
// let p = document.querySelector("p");
// p.insertAdjacentElement("beforebegin", btn);
// p.insertAdjacentElement("afterbegin", btn);
// p.insertAdjacentElement("beforeend", btn);
// p.insertAdjacentElement("afterend", btn);

//remove element from HTML
// let body = document.querySelector("body");
//body.removeChild(btn);
//btn.remove();
// body.remove();

//practice question
// let p = document.createElement("p");
// p.innerHTML = "Hey I'm Red";
// p.classList.add("red");
// let body = document.querySelector("body");
// body.append(p);
// let h3 = document.createElement("h4");
// h3.innerHTML = "Hey I'm blue h4";
// h3.classList.add("blue");
// body.append(h3);

// let dic = document.createElement("div");
// dic.classList.add("pp");
// body.prepend(dic);
// let h1 = document.createElement("h1");
// h1.innerHTML = "I'm h1";
// let p1 = document.createElement("p");
// p1.innerHTML = "I'm P";
// dic.append(h1);
// dic.append(p1);

//part-9 practice questions
// let inp = document.createElement("input");
// let body = document.querySelector("body");
// inp.placeholder = "username";
// body.append(inp);
// let btn = document.createElement("button");
// btn.innerText = "Click Me";
// btn.id = "btn";
// body.append(btn);
// let b1 = document.querySelector("#btn");
// b1.classList.add("b1");
// let h = document.createElement("h1");
// h.innerText = "DOM Practice";
// h.style.textDecoration = "underline";
// h.style.color = "purple";
// body.append(h);
// let p = document.createElement("p");
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// body.append(p);

//DOM events
//Events are signals that something has occured.(user inputs/actions)
// let btn = document.querySelector("button");
// console.dir(btn);
// //onclick event
// btn.onmouseenter = function () {
//   console.log("hello");
// };
// btn.onclick = function () {
//   console.log("Button Clicked");
// };
// //while calling function don't add parathensis
// function hello() {
//   alert("Hello!");
// }

// //Event Listeners
// //for this we can n number of event listeners
// btn.addEventListener("click", function () {
//   console.log("button clicked");
// });

//GENERATE RANDOM COLOR ON WEB PAGE
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let rndm = getRandomclr();
//   h3.innerText = rndm;
//   let div = document.querySelector("div");
//   div.style.backgroundColor = rndm;
// });

// function getRandomclr() {
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);

//   let clr = `rgb(${r},${g},${b})`;
//   return clr;
// }

//mouseevent
// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   console.log("paragraph was clicked");
// });

//this in event listeners
// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "red";
// });

//keyboard events
// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   console.log(event);
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//   // console.log(event);
//   // console.log("key pressed");
//   console.log("code=", event.code);
//   if (event.code == "ArrowUp") {
//     console.log("characters moves forward");
//   } else if (event.code == "ArrowDown") {
//     console.log("characters moves backward");
//   } else if (event.code == "ArrowLeft") {
//     console.log("characters moves left");
//   } else if (event.code == "ArrowRight") {
//     console.log("characters moves right");
//   }
// });

//form events
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); //prevent to goto next pages
//   // alert("form submitted");
//   // console.dir(form);
//   // let inp = document.querySelector("input");
//   // console.dir(inp);
//   // console.log(inp.value);
// });

// //More events like change and input
// let user = document.querySelector("#user");
// user.addEventListener("change", function (event) {
//   event.preventDefault();
//   console.log("input changed");
//   console.log("final value =", this.value);
// });

// let inp = document.querySelector("input");
// inp.addEventListener("mouseout", (event) => {});
// onmouseout = (event) => {};

// let bd = document.querySelector("body");
// let btn = document.createElement("button");
// btn.innerText = "click me";
// bd.append(btn);
// btn.addEventListener("click", function () {
//   btn.style.backgroundColor = "green";
//   return btn;
// });

// let inp = document.querySelector("input");
// let h2 = document.querySelector("h2");
// inp.addEventListener("keypress", function () {
//   h2.innerText = inp.value;
// });
