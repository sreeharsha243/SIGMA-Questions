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
