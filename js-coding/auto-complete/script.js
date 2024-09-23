const rootElement = document.getElementById("root");

const createElement = (type) => {
  return document.createElement(type);
};

const getResultsArea = () => {
  const resultsWrapper = createElement("div");
  resultsWrapper.classList.add("results-area");
  return resultsWrapper;
};

const handleInputChange = () => {};

const getInput = () => {
  const input = createElement("input");
  input.placeholder = "Enter search string";
  input.addEventListener("onchange", handleInputChange);
  return input;
};

const AutoComplete = () => {
  const wrapper = createElement("div");
  wrapper.classList.add("auto-complete");
  const input = getInput();
  const resultsArea = getResultsArea();
  wrapper.appendChild(input);
  wrapper.appendChild(resultsArea);
  rootElement.appendChild(wrapper);
};

window.addEventListener("load", AutoComplete());
