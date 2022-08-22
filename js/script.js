// get player name
function getPlayerName(elementId) {
    const playerName = document.getElementById(elementId);
    const name = playerName.innerText;
    return name;
}
// set player name into the list
function setPlayerName(name) {
    const playerList = document.getElementById("player-list");
    const singlePlayer = document.createElement("li");
    singlePlayer.innerText = name;
    if (playerList.childElementCount < 5) {
        playerList.appendChild(singlePlayer);
    } else {
        alert("You can't select more than five player!!");
    }
}
// Disable Button
function disableBtn(elementId) {
    document.getElementById(elementId).disabled = true;
}

// get input value for budget calculation
function getValueFromInput(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.value;
    const elementValue = parseFloat(elementFieldString);
    elementField.value = '';
    return elementValue;
}

document.getElementById("btn-player-one").addEventListener('click', function () {
    const name = getPlayerName("player-one");
    setPlayerName(name);
    disableBtn("btn-player-one");
})
document.getElementById("btn-player-two").addEventListener('click', function () {
    const name = getPlayerName("player-two");
    setPlayerName(name);
    disableBtn("btn-player-two");
})
document.getElementById("btn-player-three").addEventListener('click', function () {
    const name = getPlayerName("player-three");
    setPlayerName(name);
    disableBtn("btn-player-three");
})
document.getElementById("btn-player-four").addEventListener('click', function () {
    const name = getPlayerName("player-four");
    setPlayerName(name);
    disableBtn("btn-player-four");
})
document.getElementById("btn-player-five").addEventListener('click', function () {
    const name = getPlayerName("player-five");
    setPlayerName(name);
    disableBtn("btn-player-five");
})
document.getElementById("btn-player-six").addEventListener('click', function () {
    const name = getPlayerName("player-six");
    setPlayerName(name);
    disableBtn("btn-player-six");
})
document.getElementById("btn-player-seven").addEventListener('click', function () {
    const name = getPlayerName("player-seven");
    setPlayerName(name);
    disableBtn("btn-player-seven");
})
document.getElementById("btn-player-eight").addEventListener('click', function () {
    const name = getPlayerName("player-eight");
    setPlayerName(name);
    disableBtn("btn-player-eight");
})
document.getElementById("btn-player-nine").addEventListener('click', function () {
    const name = getPlayerName("player-nine");
    setPlayerName(name);
    disableBtn("btn-player-nine");
})

// Budget Calculation
document.getElementById("player-cost-btn").addEventListener('click', function () {
    const playerList = document.getElementById("player-list");
    const totalPlayer = playerList.childElementCount;
    const perPlayerCost = getValueFromInput("per-player-cost");
    if (isNaN(perPlayerCost)) {
        alert("Type Valid Input!!!");
    } else {
        const playerExpenses = totalPlayer * perPlayerCost;
        const playerExpensesElement = document.getElementById("player-expenses");
        playerExpensesElement.innerText = playerExpenses;
    }
})

document.getElementById("total-cost-btn").addEventListener('click', function () {
    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);
    const managerCost = getValueFromInput("manager-cost");
    const coachCost = getValueFromInput("coach-cost");
    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert("Type Valid Input!!!");
    } else {
        const totalCost = playerExpenses + managerCost + coachCost;
        const totalCostElement = document.getElementById("total-cost");
        totalCostElement.innerText = totalCost;
    }

})