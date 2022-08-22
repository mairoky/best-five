function getPlayerName(elementId) {
    const playerName = document.getElementById(elementId);
    const name = playerName.innerText;
    return name;
}

function setPlayerName(name) {
    const playerList = document.getElementById("player-list");
    const singlePlayer = document.createElement("li");
    singlePlayer.innerText = name;
    playerList.appendChild(singlePlayer);
}

function disableBtn(elementId) {
    document.getElementById(elementId).disabled = true;
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