window.onload = function () {
  let players = [];
  let currentIndex = 0;
  let intervalId;
  let promptIntervalId;
  let gameStarted = false;

  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const parcel = document.getElementById("parcel");
  const prompt = document.getElementById("prompt");
  const participantsInput = document.getElementById("participants");

  function startGame() {
    if (!gameStarted) {
      gameStarted = true;
      startButton.disabled = true;
      stopButton.disabled = false;
      players = participantsInput.value
        .split(",")
        .map((name) => name.trim());
      intervalId = setTimeout(() => {
        currentIndex = currentIndex === players.length - 1 ? 0 : currentIndex + 1;
        console.log(players[currentIndex]);
        promptIntervalId = setInterval(() => {
          prompt.classList.toggle("hidden");
        }, 1000);
        parcel.classList.add("active");
        setTimeout(() => {
          clearInterval(promptIntervalId);
          endGame();
        }, 10000);
      }, 10000);
    }
  }

  function endGame() {
    prompt.classList.add("hidden");
    parcel.classList.remove("active");
    startButton.disabled = false;
    stopButton.disabled = true;
    currentIndex = 0;
    gameStarted = false;
    participantsInput.value = "";
    players = [];
  }

  parcel.addEventListener("click", () => {
    if (gameStarted && parcel.classList.contains("active")) {
      prompt.innerHTML = `It's your turn, ${players[currentIndex]}!`;
    }
  });

  startButton.addEventListener("click", startGame);

  stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    clearInterval(promptIntervalId);
    endGame();
  });
};
