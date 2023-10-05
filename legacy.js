const kToggle = document.getElementById("k-toggle");
const sBtn = document.getElementById("submit");
const wElement = document.getElementById("wins");
const pElement = document.getElementById("percentage");
const rElement = document.getElementById("results");
let kActive = false;
const win = 0;
const loss = 1;
let fInput;
let fNum = 0;
let wins = 0;
let losses = 0;
let stinker = false; // Flag for the first loss encountered

function flip() {
  const flipping = Math.random();

  if (flipping < 0.5) {
    return "Heads";
  } else {
    return "Tails";
  }
}

sBtn.addEventListener("click", (e) => {
  wins = 0;
  fNum = 0;
  e.preventDefault();
  fInput = parseInt(document.getElementById("flip-input").value);
  cFlip();
  wPercent();
  rElement.classList.remove("visually-hidden");
});

kToggle.addEventListener("click", (event) => {
  if (kToggle.classList.contains("active")) {
    kActive = false;
    kToggle.classList.remove("active");
  } else {
    kActive = true;
    kToggle.classList.add("active");
  }
  console.log("thumb active:", kActive);
});

function cFlip() {
  if (kActive) {
    for (var i = 0; i < fInput; i++) {
      let kFlip1 = flip();

      if (kFlip1 === "Heads") {
        console.log("flip 1: heads");
      } else {
        console.log("flip 1: tails");
      }

      let kFlip2 = flip();

      if (kFlip2 === "Heads") {
        console.log("flip 2: heads");
      } else {
        console.log("flip 2: tails");
      }

      if (kFlip1 === "Tails" && kFlip2 === "Tails") {
        losses++;
        break; // End iteration when two 'tails' occur
      } else {
        losses = 0; // Reset consecutive losses
      }

      if (kFlip1 === "Heads" || kFlip2 === "Heads") {
        wins++;
      }
    }
  } else {
    for (var i = 0; i < fInput; i++) {
      let rFlip = flip();

      if (rFlip === "Heads") {
        console.log("flip: heads");
      } else {
        console.log("flip: tails");
      }

      if (rFlip === "Tails") {
        losses++;
        break; // End iteration on the first loss
      } else {
        losses = 0; // Reset consecutive losses
      }

      if (rFlip === "Heads") {
        wins++;
      }
    }
  }
}

function wPercent() {
  if (kActive) {
    fNum = (wins + losses) * 2;
  } else {
    fNum = wins + losses;
  }

  // const fNum = wins + losses;
  const winRate = (wins / fNum) * 100;
  pElement.innerText = winRate.toFixed(2) + "%";
  console.log("wins:", wins);
  wElement.innerText = wins;
  console.log("num of flips:", fNum);
  console.log("win percent:", winRate.toFixed(2) + "%");
}
