const stars = document.querySelectorAll("i");

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => getStarColor(star, index));
  star.addEventListener("click", () => {
    onClickStar(star, index);
  });
});

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
    if (Number(star.id) > ind) {
      starEle.style.color = "gold";
    } else {
      starEle.style.color = "#6b6b6b";
    }
  });
  starContainer.removeEventListener("mouseleave", onMouseleave);
  star.removeEventListener("mouseleave", getStarColor);
};
