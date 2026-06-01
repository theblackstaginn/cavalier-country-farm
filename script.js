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
    document.body.style.overflow = 'hidden';
}

function closeApplicationsMenu(){
    if(!applicationsModal) return;

    applicationsModal.classList.remove('active');
    applicationsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if(openApplicationsModal && applicationsModal && applicationsModalClose){
    openApplicationsModal.addEventListener('click', openApplicationsMenu);

    applicationsModalClose.addEventListener('click', closeApplicationsMenu);

    applicationsModal.addEventListener('click', function(e){
        if(e.target === applicationsModal){
            closeApplicationsMenu();
        }
    });
}

if(openApplicationsLinks.length){
    openApplicationsLinks.forEach(function(link){
        link.addEventListener('click', openApplicationsMenu);
    });
}

/* PUPPY MODAL */

const puppyData = {
    "angus": {
        name: "Angus",
        status: "Available",
        description: "A sweet Cavalier puppy raised in the home and socialized around family life. Add his exact personality notes here when the litter details are finalized.",
        images: [
            "assets/pups/angus-1.webp",
            "assets/pups/angus-2.webp"
        ]
    },

    "bam-bam": {
        name: "Bam Bam",
        status: "Available",
        description: "A playful Cavalier puppy with farm-raised charm. Replace this placeholder with his real temperament, color, and deposit status.",
        images: [
            "assets/pups/bam-bam-1.webp",
            "assets/pups/bam-bam-2.webp"
        ]
    },

    "elsa": {
        name: "Elsa",
        status: "Available",
        description: "A gentle Cavalier puppy raised with care, attention, and daily family handling. Update this text with her real notes when ready.",
        images: [
            "assets/pups/elsa-1.webp",
            "assets/pups/elsa-2.webp"
        ]
    },

    "pebbles": {
        name: "Pebbles",
        status: "Available",
        description: "A loving Cavalier puppy from the current litter. Add her exact personality, coat notes, and application status here.",
        images: [
            "assets/pups/pebbles-1.webp",
            "assets/pups/pebbles-2.webp"
        ]
    }
};

const puppyModal = document.getElementById('puppyModal');
const puppyModalName = document.getElementById('puppyModalName');
const puppyModalStatus = document.getElementById('puppyModalStatus');
const puppyModalDescription = document.getElementById('puppyModalDescription');
const puppyModalMainImage = document.getElementById('puppyModalMainImage');
const puppyModalThumbs = document.getElementById('puppyModalThumbs');
const puppyCloseBtn = document.querySelector('.puppy-modal-close');
const puppyTriggers = document.querySelectorAll('[data-puppy]');

function openPuppyModal(puppyKey){
    const puppy = puppyData[puppyKey];

    if(!puppy || !puppyModal) return;

    puppyModalName.textContent = puppy.name;
    puppyModalStatus.textContent = puppy.status;
    puppyModalDescription.textContent = puppy.description;

    puppyModalMainImage.src = puppy.images[0];
    puppyModalMainImage.alt = puppy.name;

    puppyModalThumbs.innerHTML = '';

    puppy.images.forEach(function(imageSrc, index){
        const thumb = document.createElement('button');
        thumb.className = 'puppy-thumb';
        thumb.type = 'button';

        if(index === 0){
            thumb.classList.add('is-active');
        }

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${puppy.name} photo ${index + 1}`;

        thumb.appendChild(img);

        thumb.addEventListener('click', function(){
            puppyModalMainImage.src = imageSrc;
            puppyModalMainImage.alt = `${puppy.name} photo ${index + 1}`;

            document.querySelectorAll('.puppy-thumb').forEach(function(button){
                button.classList.remove('is-active');
            });

            thumb.classList.add('is-active');
        });

        puppyModalThumbs.appendChild(thumb);
    });

    puppyModal.classList.add('is-open');
    puppyModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closePuppyModal(){
    if(!puppyModal) return;

    puppyModal.classList.remove('is-open');
    puppyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if(puppyTriggers.length){
    puppyTriggers.forEach(function(trigger){
        trigger.addEventListener('click', function(){
            const puppyKey = trigger.getAttribute('data-puppy');
            openPuppyModal(puppyKey);
        });
    });
}

if(puppyCloseBtn){
    puppyCloseBtn.addEventListener('click', closePuppyModal);
}

if(puppyModal){
    puppyModal.addEventListener('click', function(e){
        if(e.target === puppyModal){
            closePuppyModal();
        }
    });
}

/* SHARED ESCAPE KEY CLOSE */

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        closeApplicationsMenu();
        closePuppyModal();
    }
});