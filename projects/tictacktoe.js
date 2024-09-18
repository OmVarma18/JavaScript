let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector(".rst-btn");
let turn = 0;
let mess = document.getElementsByClassName("output")[0];
let newBtn = document.getElementsByClassName("new-game")[0];

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turn == 0) {
            turn = 1;
            box.innerHTML = "O";
        } else {
            turn = 0;
            box.innerHTML = "X";
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledboxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const checkWinner = () => {
    let hasWinner=true;
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        
        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            mess.innerHTML = `<h3>The winner is ${pos1Val}</h3>`;
            mess.classList.remove("hide");
            newBtn.classList.remove("hide");
            disabledboxes();
            hasWinner=true;
        }
    }
    if(!hasWinner){
        let allFilled = [...boxes].every(box => box.innerHTML !== "");
        if (allFilled) {
            mess.innerHTML = `<h3>It's a draw!</h3>`;
            mess.classList.remove("hide");
            newBtn.classList.remove("hide");
            isGameOver = true;
        }
    }
};

newBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerHTML = ""; // Clear all boxes
        box.disabled = false; // Enable all boxes
    });
    mess.classList.add("hide");
    newBtn.classList.add("hide");
    turn = 0; // Reset turn to "O"
});

rbtn.addEventListener("click", () => {
    location.reload();
});
