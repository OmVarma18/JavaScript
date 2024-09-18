// let change=document.getElementsByTagName("h2");
// console.dir(change);

// h2.innerText = h2.innerText+"from Om";

let divs = document.querySelectorAll(".box")
console.dir(divs);
console.log(divs[1]);
console.log(divs[2]);
console.log(divs[0]);

divs[0].innerText= "New value";
divs[1].innerText="Hwlloe";
divs[2].innerText="Value is 3"

let i=1;
for(div of divs){
    div.innerText=`The new value is ${i}`
    i++
}

let para= document.querySelector("p");
console.dir(para.getAttribute("class"))
console.dir(para.setAttribute("class","new para"))
console.dir(para.getAttribute("class"))
console.dir(div.style);

let newBtn = document.createElement("button");
newBtn.innerText="click me";

document.querySelector("div").append(newBtn);
document.querySelector("div").prepend(newBtn);
document.querySelector("div").before(newBtn);
document.querySelector("body").after(newBtn);

para.remove();


// .appendchild()
// .removechild