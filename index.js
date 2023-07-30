const myVid = document.getElementById("vid");
const carousel = document.querySelector('.carousel-inner1');

myVid.muted = true;

let currentIndex = 0;
const images = carousel.querySelectorAll('img');
const totalImages = images.length;

function showImage(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)

