let modeBin = document.querySelector(".mode");
let curmode = "light";

modeBin.addEventListener("click", () => {
    if (curmode === "light") {
        curmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        curmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});
