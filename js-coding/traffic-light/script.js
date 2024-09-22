// PS: Traffic system which loops from red to orange to green continously
// red: 6 sec
// orange: 2 sec
// green: 4 sec
const signals = Array.from(document.querySelectorAll(".signal"));
const redSignal = signals[0];
const orangeSignal = signals[1];
const greenSignal = signals[2];
const redSignalDuration = 6;
const orangeSignalDuration = 2;
const greenSignalDuration = 4;

const signalDurations = [
  redSignalDuration,
  orangeSignalDuration,
  greenSignalDuration,
];

const availableSignals = ["red-light", "orange-light", "green-light"];
let currentSignal = 0;

const removeAllSignals = () => {
  signals.forEach((signal, ind) => {
    signal.classList.remove(availableSignals[ind]);
  });
};

const startSignals = () => {
  removeAllSignals();
  signals[currentSignal].classList.add(availableSignals[currentSignal]);
  setTimeout(() => {
    currentSignal = (currentSignal + 1) % availableSignals.length;
    startSignals();
  }, signalDurations[currentSignal] * 1000);
};

window.addEventListener("load", () => {
  startSignals();
});
