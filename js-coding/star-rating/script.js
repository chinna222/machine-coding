const stars = document.querySelectorAll("i");

function handleMouseOver(event) {
  const star = event.currentTarget;
  const index = Array.from(stars).indexOf(star);
  getStarColor(star, index);
}

function addEventListeners() {
  stars.forEach((star, index) => {
    star.addEventListener("mouseover", handleMouseOver);
    star.addEventListener("click", () => {
      onClickStar(star, index);
    });
  });
}

const getStarColor = (star, index) => {
  stars.forEach((starEle, ind) => {
    if (Number(star.id) > ind) {
      starEle.style.color = "gold";
    } else {
      starEle.style.color = "#6b6b6b";
    }
  });
};

const onMouseleave = () => {
  stars.forEach((starEle, ind) => {
    starEle.style.color = "#6b6b6b";
  });
};

const starContainer = document.getElementById("star-rating");
starContainer.addEventListener("mouseleave", onMouseleave);

const onClickStar = (star, index) => {
  stars.forEach((starEle, ind) => {
    starEle.removeEventListener("mouseover", handleMouseOver);
    if (Number(star.id) > ind) {
      starEle.style.color = "gold";
    } else {
      starEle.style.color = "#6b6b6b";
    }
  });
  starContainer.removeEventListener("mouseleave", onMouseleave);
};

addEventListeners();
