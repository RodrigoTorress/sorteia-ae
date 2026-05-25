const sportSelect = document.getElementById("sport");
const playerNameInput = document.getElementById("playerName");
const addPlayerButton = document.getElementById("addPlayerButton");
const drawButton = document.getElementById("drawButton");
const sampleButton = document.getElementById("sampleButton");
const clearButton = document.getElementById("clearButton");
const message = document.getElementById("message");
const playerCounter = document.getElementById("playerCounter");
const playerList = document.getElementById("playerList");
const teamAList = document.getElementById("teamA");
const teamBList = document.getElementById("teamB");
const players = [];

function getTotalPlayers(sport) {
  return sport.playersPerTeam * 2;
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

function renderTeam(listElement, players) {
  listElement.innerHTML = "";

  players.forEach(function (player) {
    const item = document.createElement("li");
    item.textContent = player;
    listElement.appendChild(item);
  });
}

function renderPlayers() {
  playerList.innerHTML = "";

  players.forEach(function (player) {
    const item = document.createElement("li");
    item.textContent = player;
    playerList.appendChild(item);
  });
}

function updatePlayerCounter() {
  const selectedSport = sports[sportSelect.value];
  const totalPlayers = getTotalPlayers(selectedSport);
  const missingPlayers = totalPlayers - players.length;

  if (players.length === 0) {
    playerCounter.textContent = "Nenhum jogador adicionado.";
    return;
  }

  if (missingPlayers > 0) {
    playerCounter.textContent =
      players.length +
      " jogador(es) adicionados. Faltam " +
      missingPlayers +
      ".";
    return;
  }

  playerCounter.textContent =
    players.length + " jogador(es) adicionados. Ja e possivel sortear.";
}

function addPlayer() {
  const selectedSport = sports[sportSelect.value];
  const playerName = playerNameInput.value.trim();
  const totalPlayers = getTotalPlayers(selectedSport);

  if (playerName.length === 0) {
    showMessage("Digite o nome de um jogador.", "error");
    return;
  }

  if (players.length >= totalPlayers) {
    showMessage(
      "A quantidade de jogadores para " +
        selectedSport.name +
        " ja foi preenchida.",
      "error"
    );
    return;
  }

  players.push(playerName);
  playerNameInput.value = "";
  playerNameInput.focus();
  renderPlayers();
  updatePlayerCounter();
  clearTeams();
  showMessage("Jogador adicionado.", "success");
}

function clearTeams() {
  teamAList.innerHTML = "";
  teamBList.innerHTML = "";
}

function handleDraw() {
  const selectedSport = sports[sportSelect.value];
  const totalPlayers = getTotalPlayers(selectedSport);

  if (!hasEnoughPlayers(players, selectedSport.playersPerTeam)) {
    clearTeams();
    showMessage(
        "Informe pelo menos " +
        totalPlayers +
        " jogadores para sortear " +
        selectedSport.name +
        ".",
      "error"
    );
    return;
  }

  const teams = drawTeams(players, selectedSport.playersPerTeam);

  renderTeam(teamAList, teams.teamA);
  renderTeam(teamBList, teams.teamB);
  showMessage("Times sorteados com sucesso!", "success");
}

function fillSamplePlayers() {
  const selectedSport = sports[sportSelect.value];
  const totalPlayers = getTotalPlayers(selectedSport);

  players.length = 0;
  samplePlayers.slice(0, totalPlayers).forEach(function (player) {
    players.push(player);
  });
  renderPlayers();
  updatePlayerCounter();
  clearTeams();
  showMessage("Jogadores de exemplo adicionados.", "success");
}

function clearAll() {
  players.length = 0;
  playerNameInput.value = "";
  renderPlayers();
  updatePlayerCounter();
  clearTeams();
  showMessage("", "");
}

sportSelect.addEventListener("change", function () {
  clearAll();
  updatePlayerCounter();
  showMessage("", "");
});

addPlayerButton.addEventListener("click", addPlayer);
playerNameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addPlayer();
  }
});
drawButton.addEventListener("click", handleDraw);
sampleButton.addEventListener("click", fillSamplePlayers);
clearButton.addEventListener("click", clearAll);

updatePlayerCounter();