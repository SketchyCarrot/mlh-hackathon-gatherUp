// Get HTML elements
const challenge = document.getElementById('challenge');
const truthBtn = document.getElementById('truth-btn');
const dareBtn = document.getElementById('dare-btn');
const result = document.getElementById('result');

// Define arrays of truth and dare challenges
const truthChallenges = [
  "What's the most embarrassing thing that's ever happened to you?",
  "What's your biggest fear?",
  "Have you ever lied to your best friend? What did you lie about?",
  "What's the worst date you've ever been on?",
  "What's the most trouble you've ever gotten into at school or home?",
  "Have you ever cheated on a test or an exam?",
  "Have you ever stolen something? What was it?",
  "What's the most annoying thing about your best friend?",
  "What's the most embarrassing thing in your bedroom?",
  "Have you ever had a crush on someone your friend has dated?",
  "What's the most embarrassing thing you've ever said or done in front of a crush?",
  "What's the craziest thing you've ever done to impress a crush?",
];

const dareChallenges = [
  "Do a funny dance for the group.",
  "Sing a song in a funny voice.",
  "Do a cartwheel or a handstand.",
  "Make a prank call to a friend or family member.",
  "Eat a spoonful of hot sauce.",
  "Put ice cubes down your shirt.",
  "Do the chicken dance in a public place.",
  "Take a selfie with a stranger.",
  "Wear your clothes backwards for the rest of the game.",
  "Text your crush and tell them how you really feel.",
  "Try to balance a spoon on your nose for 30 seconds.",
  "Do a handstand against the wall for as long as you can.",
];

// Function to pick a random challenge
function pickRandomChallenge(challenges) {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}

// Event listeners for truth and dare buttons
truthBtn.addEventListener('click', () => {
  const truthChallenge = pickRandomChallenge(truthChallenges);
  challenge.textContent = truthChallenge;
  result.textContent = '';
});

dareBtn.addEventListener('click', () => {
  const dareChallenge = pickRandomChallenge(dareChallenges);
  challenge.textContent = dareChallenge;
  result.textContent = '';
});
