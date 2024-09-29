const rootElement = document.getElementById("root");
let results = [];

const createElement = (type) => {
  return document.createElement(type);
};

const getResultsArea = () => {
  const resultsWrapper = createElement("div");
  resultsWrapper.classList.add("results-area");
  return resultsWrapper;
};

const getResults = async (query) => {
  results = await fetch(`https://demo.dataverse.org/api/search?q=${query}`);
  const data = await results.json();
  return data;
};

const getDebouncedResults = (fn, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const fetchResults = getDebouncedResults(getResults, 3000);

const handleInputChange = (e) => {
  const query = e.target.value;
  fetchResults(query);
};

const getInput = () => {
  const input = createElement("input");
  input.placeholder = "Enter search string";
  input.addEventListener("input", handleInputChange);
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
