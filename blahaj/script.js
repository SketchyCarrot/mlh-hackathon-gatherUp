const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
  const numPlayers = parseInt(prompt("Enter the number of players:"));

  // Create an array to store the player names
  const players = [];

  // Create a loop to prompt the user for each player name
  for (let i = 0; i < numPlayers; i++) {
    const playerName = prompt(`Enter the name of player ${i+1}:`);
    players.push(playerName);
  }

  // Generate a random player with "blahlaj" assigned to them
  const randomIndex = Math.floor(Math.random() * numPlayers);
  const blahlajPlayer = players[randomIndex];
  console.log(`Player ${blahlajPlayer} has been assigned blahlaj.`);

  // Use the player names to create input fields for each player
  const playersDiv = document.getElementById("players");

  players.forEach((playerName) => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = playerName;
    playersDiv.appendChild(input);
  });
});
