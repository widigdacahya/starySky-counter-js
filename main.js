// [ELEMENT INVOLVED]
// starCounter to save count of star
// countEl, text to show how many star counted
// countTracker, to show the counted star whenever someone blinked
let starCounter = 0;
let countEl = document.getElementById("count-el");
let countTracker = document.getElementById("count-tracker");

// [CHECK TAKEN ELEMENT]
// console.log(countEl);
// console.log(countTracker);

// [FUNCTION TO INCREMENT STAR COUNTER]
// add counter and show the count
function incrementCount() {
  starCounter += 1;
  countEl.textContent = starCounter;
}

// [FUNCTION TO SAVE COUNTED STAR WHENEVER BLINKED]
// save the current count and concenate it whenever count happen again
function saveCount() {
  let currentCountStr = starCounter + " - ";
  countTracker.textContent += currentCountStr;
  starCounter = 0;
  countEl.textContent = starCounter;
}
