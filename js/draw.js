function hasEnoughPlayers(players, playersPerTeam) {
  return players.length >= playersPerTeam * 2;
}

function shufflePlayers(players) {
  const shuffled = players.slice();

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const currentPlayer = shuffled[index];

    shuffled[index] = shuffled[randomIndex];
    shuffled[randomIndex] = currentPlayer;
  }

  return shuffled;
}

function drawTeams(players, playersPerTeam) {
  const totalPlayers = playersPerTeam * 2;
  const shuffledPlayers = shufflePlayers(players).slice(0, totalPlayers);

  return {
    teamA: shuffledPlayers.slice(0, playersPerTeam),
    teamB: shuffledPlayers.slice(playersPerTeam, totalPlayers)
  };
}