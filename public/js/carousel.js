// carousel.js
document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const totalItems = carouselItems.length;
  let currentItem = 0;
  function showItem(index) {
    carouselItems.forEach(function (item) {
      item.classList.remove("active");
    });
    carouselItems[index].classList.add("active");
  }
  function nextItem() {
    currentItem = (currentItem + 1) % totalItems;
    showItem(currentItem);
  }
  function previousItem() {
    currentItem = (currentItem - 1 + totalItems) % totalItems;
    showItem(currentItem);
  }
  // Add event listeners to next and previous buttons
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  nextBtn.addEventListener("click", nextItem);
  prevBtn.addEventListener("click", previousItem);
  // Show the initial item
  showItem(currentItem);
});
