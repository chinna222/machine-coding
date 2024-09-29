const rootElement = document.getElementById("root");
const obj = {
  value: [],
  get getValue() {
    return this.value;
  },
  /**
   * @param {string} val
   */
  set setValue(val) {
    this.value = val;
    this.valueListener(val);
  },
  valueListener: function () {},
  addExternalListener: function (listener) {
    this.valueListener = listener;
  },
};

const updateResultsSection = () => {
  const resultsArea = document.getElementById("results-area");
  resultsArea.innerHTML = "";
  const results = obj.value;
  const ul = document.createElement("ul");
  results.forEach((result) => {
    const li = document.createElement("li");
    li.innerText = result.name;
    ul.appendChild(li);
  });
  resultsArea.appendChild(ul);
};

obj.addExternalListener(() => {
  updateResultsSection();
});

const createElement = (type) => {
  return document.createElement(type);
};

const getResultsArea = () => {
  const resultsWrapper = createElement("div");
  resultsWrapper.classList.add("results-area");
  resultsWrapper.id = "results-area";
  return resultsWrapper;
};

const getResults = async (query) => {
  results = await fetch(`https://demo.dataverse.org/api/search?q=${query}`);
  const data = await results.json();
  obj.setValue = data?.data?.items || [];
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

const fetchResults = getDebouncedResults(getResults, 1000);

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
