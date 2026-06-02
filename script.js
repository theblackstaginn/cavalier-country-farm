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

if(openApplicationsModal){
    openApplicationsModal.addEventListener('click', openApplicationsMenu);
}

if(applicationsModalClose){
    applicationsModalClose.addEventListener('click', closeApplicationsMenu);
}

if(applicationsModal){
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
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "A sweet Cavalier puppy raised in the home and socialized around family life. Add his exact personality notes here when the litter details are finalized.",
        images: [
            "assets/pups/angus/angus-1.webp",
            "assets/pups/angus/angus-2.webp"
        ]
    },

    "bambam": {
        name: "Bam Bam",
        status: "Available",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "A playful Cavalier puppy with farm-raised charm. Replace this placeholder with his real temperament, color, and deposit status.",
        images: [
            "assets/pups/bambam/bambam-1.webp",
            "assets/pups/bambam/bambam-2.webp"
        ]
    },

    "elsa": {
        name: "Elsa",
        status: "Available",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "A gentle Cavalier puppy raised with care, attention, and daily family handling. Update this text with her real notes when ready.",
        images: [
            "assets/pups/elsa/elsa-1.webp",
            "assets/pups/elsa/elsa-2.webp"
        ]
    },

    "pebbles": {
        name: "Pebbles",
        status: "Available",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "A loving Cavalier puppy from the current litter. Add her exact personality, coat notes, and application status here.",
        images: [
            "assets/pups/pebbles/pebbles-1.webp",
            "assets/pups/pebbles/pebbles-2.webp"
        ]
    },

    "rosie": {
        name: "Rosie",
        status: "Available",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "Beautiful Cavalier puppy raised in the home with daily family interaction.",
        images: [
            "assets/pups/rosie/rosie-1.webp",
            "assets/pups/rosie/rosie-2.webp"
        ]
    },

    "cosmo": {
        name: "Cosmo",
        status: "Available",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "Playful and affectionate Cavalier puppy with a sweet personality.",
        images: [
            "assets/pups/cosmo/cosmo-1.webp",
            "assets/pups/cosmo/cosmo-2.webp"
        ]
    },

    "lily": {
        name: "Lily",
        status: "Available",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "Beautiful Cavalier puppy raised in the home with daily family interaction.",
        images: [
            "assets/pups/lily/lily-1.webp",
            "assets/pups/lily/lily-2.webp"
        ]
    },

    "duke": {
        name: "Duke",
        status: "Sold",
        birthday: "March 27",
        weight: "2.6 lbs",
        description: "Duke has found his forever family.",
        images: [
            "assets/pups/duke/duke-1.webp",
            "assets/pups/duke/duke-2.webp"
        ]
    }
};

const puppyModal = document.getElementById('puppyModal');
const puppyModalName = document.getElementById('puppyModalName');
const puppyModalStatus = document.getElementById('puppyModalStatus');
const puppyModalBirthday = document.getElementById('puppyModalBirthday');
const puppyModalWeight = document.getElementById('puppyModalWeight');
const puppyModalDescription = document.getElementById('puppyModalDescription');
const puppyModalMainImage = document.getElementById('puppyModalMainImage');
const puppyModalThumbs = document.getElementById('puppyModalThumbs');
const puppyCloseBtn = document.querySelector('.puppy-modal-close');
const puppyTriggers = document.querySelectorAll('[data-puppy]');

function openPuppyModal(puppyKey){
    const puppy = puppyData[puppyKey];

    if(!puppy || !puppyModal) return;

    if(puppyModalName){
        puppyModalName.textContent = puppy.name;
    }

    if(puppyModalStatus){
        puppyModalStatus.textContent = puppy.status;
    }

    if(puppyModalBirthday){
        puppyModalBirthday.textContent = puppy.birthday;
    }

    if(puppyModalWeight){
        puppyModalWeight.textContent = puppy.weight;
    }

    if(puppyModalDescription){
        puppyModalDescription.textContent = puppy.description;
    }

    if(puppyModalMainImage){
        puppyModalMainImage.src = puppy.images[0];
        puppyModalMainImage.alt = puppy.name;
    }

    if(puppyModalThumbs){
        puppyModalThumbs.innerHTML = '';

        puppy.images.forEach(function(imageSrc, photoIndex){
            const thumb = document.createElement('button');
            thumb.className = 'puppy-thumb';
            thumb.type = 'button';

            if(photoIndex === 0){
                thumb.classList.add('is-active');
            }

            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${puppy.name} photo ${photoIndex + 1}`;

            thumb.appendChild(img);

            thumb.addEventListener('click', function(){
                if(puppyModalMainImage){
                    puppyModalMainImage.src = imageSrc;
                    puppyModalMainImage.alt = `${puppy.name} photo ${photoIndex + 1}`;
                }

                puppyModalThumbs.querySelectorAll('.puppy-thumb').forEach(function(button){
                    button.classList.remove('is-active');
                });

                thumb.classList.add('is-active');
            });

            puppyModalThumbs.appendChild(thumb);
        });
    }

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