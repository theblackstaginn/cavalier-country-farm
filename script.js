const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

let index = 0;

function moveCarousel() {
    if (!track || slides.length === 0) return;

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 5000);

/* APPLICATIONS MODAL */

const openApplicationsModal = document.getElementById('openApplicationsModal');
const applicationsModal = document.getElementById('applicationsModal');
const applicationsModalClose = document.getElementById('applicationsModalClose');
const openApplicationsLinks = document.querySelectorAll('.open-applications-link');

function openApplicationsMenu(e){
    if(e){
        e.preventDefault();
    }

    if(!applicationsModal) return;

    applicationsModal.classList.add('active');
    applicationsModal.setAttribute('aria-hidden', 'false');
}

function closeApplicationsMenu(){
    if(!applicationsModal) return;

    applicationsModal.classList.remove('active');
    applicationsModal.setAttribute('aria-hidden', 'true');
}

if(openApplicationsModal && applicationsModal && applicationsModalClose){
    openApplicationsModal.addEventListener('click', openApplicationsMenu);

    applicationsModalClose.addEventListener('click', closeApplicationsMenu);

    applicationsModal.addEventListener('click', function(e){
        if(e.target === applicationsModal){
            closeApplicationsMenu();
        }
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            closeApplicationsMenu();
        }
    });
}

if(openApplicationsLinks.length){
    openApplicationsLinks.forEach(function(link){
        link.addEventListener('click', openApplicationsMenu);
    });
}