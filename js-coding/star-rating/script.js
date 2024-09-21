const stars = document.querySelectorAll("i");
const starContainer = document.getElementById("star-rating");
let selectedStarIndex = -1; // Keeps track of the clicked star

// Helper function to set star colors
function updateStarColors(maxIndex) {
  stars.forEach((star, ind) => {
    star.style.color = ind <= maxIndex ? "gold" : "#6b6b6b";
  });
}

// Mouseover event handler
function handleMouseOver(event) {
  const star = event.currentTarget;
  const index = Array.from(stars).indexOf(star);
  updateStarColors(index);
}

// Mouseleave event handler to reset stars if no star is selected
function handleMouseLeave() {
  updateStarColors(selectedStarIndex);
}

// Click event handler
function handleClick(event) {
  const star = event.currentTarget;
  const index = Array.from(stars).indexOf(star);
  selectedStarIndex = index;

  // Remove mouseover functionality once a star is clicked
  stars.forEach((star) =>
    star.removeEventListener("mouseover", handleMouseOver)
  );
  starContainer.removeEventListener("mouseleave", handleMouseLeave);

  updateStarColors(index);
}

// Add event listeners to stars
function addEventListeners() {
  stars.forEach((star, index) => {
    star.addEventListener("mouseover", handleMouseOver);
    star.addEventListener("click", handleClick);
  });

  // Add mouseleave listener to container to reset color when leaving
  starContainer.addEventListener("mouseleave", handleMouseLeave);
}

// Initialize
addEventListeners();
