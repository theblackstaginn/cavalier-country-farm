const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

let index = 0;

function moveCarousel() {

    if (!track || slides.length === 0) return;

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    track.style.transform =
        `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 5000);