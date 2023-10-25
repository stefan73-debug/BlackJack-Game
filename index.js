let player1 = {name: "John", chips: 50};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player1.name + ": $" + player1.chips

function getRandomCard() {
    let diceRoll = Math.floor(Math.random() * 13) + 1;
    if (diceRoll > 10) {
        return 10
    } else if (diceRoll === 1) {
        return 11
    } else {
        return diceRoll;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard, secondCard)

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards;
    for (let i = 0; i < cards.length; i++) {
        sumEl.textContent = "Sum: " + sum;
        if (sum <= 20) {
            message = "Do you want to draw a new card?";
        } else if (sum === 21) {
            message = "You've got Blackjack!";
            hasBlackJack = true;
        } else {
            message = "You're out of the game!";
            isAlive = false;
        }
        messageEl.textContent = message;
    }
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        cardsEl.textContent = cards;
        renderGame();
    }
}

