// ===============================
// NFL STAT MYSTERY PLAYER POOL
// ===============================

const clueList = document.getElementById("clueList");

const statMysteryNFL = [
  {
    name: "Patrick Mahomes",
    clues: [
      "50 passing touchdowns in a season",
      "Career high: 5,250 passing yards",
      "Two-time NFL MVP",
      "Multiple Super Bowl MVP awards"
    ]
  },
  {
    name: "Derrick Henry",
    clues: [
      "2,027 rushing yards in a season",
      "Led the NFL in rushing yards twice",
      "Led the NFL in rushing touchdowns twice",
      "First-Team All-Pro selection"
    ]
  },
  {
    name: "Aaron Donald",
    clues: [
      "20.5 sacks in a season",
      "Three-time Defensive Player of the Year",
      "Eight-time First-Team All-Pro",
      "Led the NFL in tackles for loss twice"
    ]
  },
  {
    name: "Josh Allen",
    clues: [
      "4,544 passing yards in a season",
      "42 total touchdowns in a season",
      "Multiple Pro Bowl selections",
      "Led the NFL in total touchdowns"
    ]
  },
  {
    name: "Justin Jefferson",
    clues: [
      "1,809 receiving yards in a season",
      "Offensive Player of the Year",
      "Led the NFL in receptions",
      "Multiple Pro Bowl selections"
    ]
  },
  {
    name: "Tyreek Hill",
    clues: [
      "1,799 receiving yards in a season",
      "Multiple First-Team All-Pro selections",
      "Led the NFL in receiving yards",
      "Seven-time Pro Bowler"
    ]
  },
  {
    name: "Lamar Jackson",
    clues: [
      "1,206 rushing yards in a season (QB record)",
      "NFL MVP",
      "Led the NFL in passing touchdowns",
      "Multiple Pro Bowl selections"
    ]
  },
  {
    name: "T.J. Watt",
    clues: [
      "22.5 sacks in a season",
      "Defensive Player of the Year",
      "Four-time First-Team All-Pro",
      "Led the NFL in sacks twice"
    ]
  },
  {
    name: "Nick Bosa",
    clues: [
      "18.5 sacks in a season",
      "Defensive Player of the Year",
      "Multiple Pro Bowl selections",
      "Led the NFL in tackles for loss"
    ]
  },
  {
    name: "Stefon Diggs",
    clues: [
      "1,535 receiving yards in a season",
      "Led the NFL in receptions",
      "Multiple Pro Bowl selections",
      "First-Team All-Pro"
    ]
  },
  {
    name: "Jalen Ramsey",
    clues: [
      "Three-time First-Team All-Pro",
      "Multiple Pro Bowl selections",
      "Led the NFL in passes defended",
      "Top‑five draft pick"
    ]
  },
  {
    name: "Von Miller",
    clues: [
      "18.5 sacks in a season",
      "Super Bowl MVP",
      "Multiple First-Team All-Pro selections",
      "Over 120 career sacks"
    ]
  },
  {
    name: "Travis Kelce",
    clues: [
      "1,416 receiving yards in a season",
      "Multiple First-Team All-Pro selections",
      "Seven straight 1,000-yard seasons",
      "Led all tight ends in receptions"
    ]
  },
  {
    name: "Christian McCaffrey",
    clues: [
      "2,392 scrimmage yards in a season",
      "1,000 rushing + 1,000 receiving season",
      "Multiple Pro Bowl selections",
      "Led the NFL in scrimmage yards"
    ]
  },
  {
    name: "Micah Parsons",
    clues: [
      "13 sacks as a rookie",
      "Defensive Rookie of the Year",
      "Multiple First-Team All-Pro selections",
      "Top‑five in sacks multiple seasons"
    ]
  },
  {
    name: "Joe Burrow",
    clues: [
      "4,611 passing yards in a season",
      "Led the NFL in completion percentage",
      "Pro Bowl selection",
      "Comeback Player of the Year"
    ]
  },
  {
    name: "Cooper Kupp",
    clues: [
      "1,947 receiving yards in a season",
      "Offensive Player of the Year",
      "Super Bowl MVP",
      "Led the NFL in receptions, yards, and TDs"
    ]
  },
  {
    name: "Myles Garrett",
    clues: [
      "16 sacks in a season",
      "Multiple First-Team All-Pro selections",
      "Led the NFL in sacks",
      "Former No. 1 overall pick"
    ]
  },
  {
    name: "Saquon Barkley",
    clues: [
      "2,028 scrimmage yards in a season",
      "Offensive Rookie of the Year",
      "Multiple Pro Bowl selections",
      "Led the NFL in scrimmage yards"
    ]
  },
  {
    name: "Matthew Stafford",
    clues: [
      "5,038 passing yards in a season",
      "Super Bowl champion",
      "Over 50,000 career passing yards",
      "Led the NFL in passing attempts"
    ]
  }
];


// ===============================
// GAME LOGIC
// ===============================

let currentPlayer = null;
let currentClueIndex = 0;

const clueBox = document.getElementById("clueBox");
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");
const newPlayerBtn = document.getElementById("newPlayer");
const submitGuessBtn = document.getElementById("submitGuess");

function newPlayer() {
  currentPlayer = statMysteryNFL[Math.floor(Math.random() * statMysteryNFL.length)];
  currentClueIndex = 0;
  clueList.innerHTML = ""; // clear old clues
  result.textContent = "";
  guessInput.value = "";

  // show first clue
  const li = document.createElement("li");
  li.textContent = currentPlayer.clues[currentClueIndex];
  clueList.appendChild(li);
}

function submitGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const answer = currentPlayer.name.toLowerCase();

  if (guess === answer) {
    result.textContent = "Correct! " + currentPlayer.name;
    result.style.color = "lime";
    return;
  }

  // wrong guess
  result.textContent = "Incorrect";
  result.style.color = "red";

  // reveal next clue if available
  if (currentClueIndex < currentPlayer.clues.length - 1) {
    currentClueIndex++;
    const li = document.createElement("li");
    li.textContent = currentPlayer.clues[currentClueIndex];
    clueList.appendChild(li);
  } else {
    // no clues left
    const li = document.createElement("li");
    li.textContent = "No more clues!";
    clueList.appendChild(li);

    result.textContent = "Answer: " + currentPlayer.name;
  }
}

  if (guess === answer) {
    result.textContent = "Correct! " + currentPlayer.name;
    result.style.color = "lime";
  } else {
    result.textContent = "Incorrect";
    result.style.color = "red";

    if (currentClueIndex < currentPlayer.clues.length - 1) {
      currentClueIndex++;
      clueBox.textContent = currentPlayer.clues[currentClueIndex];
    } else {
      clueBox.textContent = "Out of clues!";
      result.textContent = "Answer: " + currentPlayer.name;
    }
  }
}

newPlayerBtn.addEventListener("click", newPlayer);
submitGuessBtn.addEventListener("click", submitGuess);
