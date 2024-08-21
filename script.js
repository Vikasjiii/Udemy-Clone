const planDropDownArrows = document.querySelectorAll(
  ".plan-dropdown-down-arrow-img-for-mobile"
);
const planHeader = document.querySelectorAll(".plan-header");
planHeader.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.nextElementSibling.classList.toggle("open-course-info");
    arrow.classList.add('rotate-arrow')
  });
});
