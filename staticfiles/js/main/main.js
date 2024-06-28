const abousContent = document.querySelector(".aboutus-content-divdivdiv");
const frontContent = document.querySelector(".aboutus-content-figure");
const backContent = document.querySelector(".back-div");

abousContent.addEventListener("mouseover", () => {
  frontContent.style.display = "none";
  backContent.style.transform = "none";
});

abousContent.addEventListener("mouseout", () => {
  frontContent.style.display = "block";
  backContent.style.transform = "rotateY(180deg)";
});
