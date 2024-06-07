let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  //console.log(inp.value);

  let del = document.createElement("button");
  del.innerText = "delete";
  del.classList.add("delete");
  del.className = "delete";

  li.innerText = inp.value;
  ul.appendChild(li);
  li.appendChild(del);
  inp.innerText = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let l = event.target.parentElement;
    l.remove();
  }
});

// let de = document.querySelectorAll(".delete");
// for (i of de) {
//   i.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }
