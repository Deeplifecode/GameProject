var you;
var yourScore = 0;
var comp;
var compScore = 0;

var choices = ["rock", "paper", "scissor"];
//console.log('choices',choices);

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
       // console.log('id',choice.id);
        //console.log('src',choice.src);
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    comp = choices[Math.floor(Math.random() * 3)];
    document.getElementById("comp-choice").src = comp + ".png";

    if (you == comp) {
        // Tie - no points
    } else if ((you == "rock" && comp == "scissors") ||
               (you == "scissors" && comp == "paper") ||
               (you == "paper" && comp == "rock")) {
        yourScore += 1;
    } else {
        compScore += 1;
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("comp-score").innerText = compScore;
}