const rockB = document.getElementById("kamen");
const paperB = document.getElementById("papir");
const scissorsB = document.getElementById("makaze");
const resultLabel = document.getElementById("result");
const youLabel = document.getElementById("myChoice");
const compLabel = document.getElementById("computerChoice");

const choices = ["kamen", "papir", "makaze"];
const resultMessages = {
    win: "Pobedili ste!",
    lose: "Izgubili ste!",
    draw: "Nerešeno!"
};

[rockB, paperB, scissorsB].forEach(button => {
    button.addEventListener("click", () => play(button.id));
});

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    youLabel.src = `${playerChoice}.png`;
    youLabel.alt = playerChoice;
    compLabel.src = `${computerChoice}.png`;
    compLabel.alt = computerChoice;

    youLabel.classList.remove('hidden');
    compLabel.classList.remove('hidden');

    const result = getResult(playerChoice, computerChoice);

    resultLabel.textContent = resultMessages[result];

    highlightChoice(playerChoice, computerChoice);
    animateResult(result);
}

function getResult(player, computer) {
    if (player === computer) return "draw";
    if (
        (player === "kamen" && computer === "makaze") ||
        (player === "papir" && computer === "kamen") ||
        (player === "makaze" && computer === "papir")
    ) {
        return "win";
    }
    return "lose";
}

function highlightChoice(playerChoice, computerChoice) {
    document.getElementById(playerChoice).classList.add("selected");
    setTimeout(() => {
        document.getElementById(playerChoice).classList.remove("selected");
    }, 1000);
}

function animateResult(result) {
    resultLabel.classList.add(result);
    setTimeout(() => {
        resultLabel.classList.remove(result);
    }, 1500);
}
