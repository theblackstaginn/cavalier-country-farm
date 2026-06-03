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
        description: "Angus is a handsome Tricolor Cavalier King Charles Spaniel with beautifully balanced markings and an exceptionally sweet expression. His bright eyes, gentle nature, and classic Cavalier features make him an easy puppy to fall in love with. Raised in our home and surrounded by daily family life, Angus is growing into a loving companion who enjoys attention and cuddles.",
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
        description: "Bam Bam is a striking Tricolor Cavalier with rich black markings, warm tan points, and crisp white accents. His expressive eyes and curious personality give him a wonderful presence, while his affectionate temperament reflects everything people love about the Cavalier breed. He is being raised with daily family interaction and is already showing a gentle, loving disposition.",
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
        description: "Elsa is a beautiful Tricolor Cavalier King Charles Spaniel with elegant markings and a soft, sweet expression. She has a calm, affectionate personality and enjoys being close to people. Raised in our home and socialized from an early age, Elsa is developing into a loving companion with the gentle temperament Cavaliers are known for.",
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
        description: "Pebbles is an adorable Tricolor Cavalier with bright eyes, beautiful markings, and a playful spirit. She is curious, affectionate, and loves attention from her family. Raised in a home environment with daily interaction, Pebbles is growing into a well-socialized puppy with the loving personality that makes Cavaliers such wonderful companions.",
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
        description: "Rosie is a gorgeous Black & Tan Cavalier King Charles Spaniel with rich tan points, a silky dark coat, and an unforgettable expression. She has a confident, outgoing personality while still maintaining the gentle, affectionate nature Cavaliers are famous for. Raised as part of our family, Rosie receives daily love and interaction and is developing into a wonderful lifelong companion.",
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
        description: "Cosmo is a handsome Tricolor Cavalier King Charles Spaniel with expressive eyes, beautiful markings, and a gentle, affectionate nature. He enjoys attention and is growing up surrounded by daily family interaction, helping him develop into a confident and well-socialized companion. Cosmo embodies the sweet temperament, loyalty, and charm that have made Cavaliers such beloved family dogs.",
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
        description: "Lily is a lovely Tricolor Cavalier King Charles Spaniel with a beautifully marked face, bright eyes, and a sweet, attentive expression. She has a gentle, affectionate nature and enjoys being close to her people. Raised in our home with daily family interaction, Lily is growing into a well-socialized companion who embodies the loving temperament and charm that make Cavaliers so special.",
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
/* FARM CAROUSEL */

const farmTrack = document.querySelector('.farm-gallery-track');
const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');

if(farmTrack){

    nextBtn?.addEventListener('click', () => {
        farmTrack.scrollBy({
            left:420,
            behavior:'smooth'
        });
    });

    prevBtn?.addEventListener('click', () => {
        farmTrack.scrollBy({
            left:-420,
            behavior:'smooth'
        });
    });

    setInterval(() => {

        if(
            farmTrack.scrollLeft + farmTrack.clientWidth >=
            farmTrack.scrollWidth - 20
        ){
            farmTrack.scrollTo({
                left:0,
                behavior:'smooth'
            });
        }else{
            farmTrack.scrollBy({
                left:398,
                behavior:'smooth'
            });
        }

    }, 5000);
}

/* FARM GALLERY MODAL */

const galleryModal =
document.getElementById('galleryModal');

const galleryModalImage =
document.getElementById('galleryModalImage');

const galleryModalClose =
document.getElementById('galleryModalClose');

document
.querySelectorAll('.farm-gallery-track img')
.forEach(image => {

    image.addEventListener('click', () => {

        galleryModalImage.src =
        image.src;

        galleryModal.classList.add('active');
    });

});

galleryModalClose?.addEventListener(
'click',
() => {
    galleryModal.classList.remove('active');
});

galleryModal?.addEventListener(
'click',
(e) => {

    if(e.target === galleryModal){

        galleryModal.classList.remove('active');

    }

});