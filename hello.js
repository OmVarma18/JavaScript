let newBtn=document.createElement("button");
newBtn.innerHTML="Click me";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";

document.querySelector("body").prepend(newBtn);

let para=document.querySelector("p");

para.getAttribute("class");

para.setAttribute("class","newClass");

// newBtn.setAttribute("onclick", "console.log(\"You clicked the button\")");

newBtn.setAttribute("ondblclick", "console.log(\"You clicked the button\")");


// let newval=document.createElement("h2");
// newval=innerHTML="<i>Welcome to the DOM</i>";
// document.querySelector("p").append(newval);


newBtn.onclick=()=>{
    console.log(5*2);
}

newBtn.addEventListener("click",(evt)=>{
    console.log("Button 1 was clicked");
    console.log(evt);  
})

let hand=(evt)=>{
    console.log("Button 1 was clicked");
    console.log(evt);  
}

newBtn.addEventListener("click",hand)

newBtn.removeEventListener("click",hand)
