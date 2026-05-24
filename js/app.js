const sportSelect = document.getElementById("sport");
const playersTextarea = document.getElementById("players");
const drawButton = document.getElementById("drawButton");
const sampleButton = document.getElementById("sampleButton");
const clearButton = document.getElementById("clearButton");
const message = document.getElementById("message");
const teamAList = document.getElementById("teamA");
const teamBList = document.getElementById("teamB");

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

function clearTeams() {
  teamAList.innerHTML = "";
  teamBList.innerHTML = "";
}

function handleDraw() {
  const selectedSport = sports[sportSelect.value];
  const players = getPlayersFromText(playersTextarea.value);
  const totalPlayers = selectedSport.playersPerTeam * 2;

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
  const totalPlayers = selectedSport.playersPerTeam * 2;

  playersTextarea.value = samplePlayers.slice(0, totalPlayers).join("\n");
  clearTeams();
  showMessage("Jogadores de exemplo adicionados.", "success");
}

function clearAll() {
  playersTextarea.value = "";
  clearTeams();
  showMessage("", "");
}

drawButton.addEventListener("click", handleDraw);
sampleButton.addEventListener("click", fillSamplePlayers);
clearButton.addEventListener("click", clearAll);