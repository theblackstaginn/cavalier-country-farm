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

const applicationsOptionsPanel = document.getElementById('applicationsOptionsPanel');
const applicationFormPanel = document.getElementById('applicationFormPanel');
const applicationFormBack = document.getElementById('applicationFormBack');
const applicationFormTitle = document.getElementById('applicationFormTitle');
const dynamicFormFields = document.getElementById('dynamicFormFields');
const formSubject = document.getElementById('formSubject');
const applicationFormTriggers = document.querySelectorAll('.application-form-trigger');
const applicationsModalHeading = document.getElementById('applicationsModalHeading');

const farmForms = {
    puppy: {
        title: 'Cavalier Puppy Application',
        heading: 'Puppy Application',
        subject: 'Cavalier Puppy Application',
        fields: `
            <label>Full Name
                <input type="text" name="Full Name" required>
            </label>

            <label>Phone Number
                <input type="tel" name="Phone Number" required>
            </label>

            <label>Email
                <input type="email" name="Email">
            </label>

            <label>City and State
                <input type="text" name="City and State">
            </label>

            <label>Which puppy are you interested in?
                <input type="text" name="Puppy Interest">
            </label>

            <label>Do you rent or own?
                <select name="Rent or Own">
                    <option value="">Select one</option>
                    <option>Own</option>
                    <option>Rent</option>
                </select>
            </label>

            <label>Have you owned dogs before?
                <textarea name="Dog Experience"></textarea>
            </label>

            <label>Tell us about your home and family
                <textarea name="Home and Family"></textarea>
            </label>

            <label>Anything else you would like us to know?
                <textarea name="Additional Notes"></textarea>
            </label>
        `
    },

    zoo: {
        title: 'Petting Zoo Visit Request',
        heading: 'Visit Request',
        subject: 'Petting Zoo Visit Request',
        fields: `
            <label>Full Name
                <input type="text" name="Full Name" required>
            </label>

            <label>Phone Number
                <input type="tel" name="Phone Number" required>
            </label>

            <label>Email
                <input type="email" name="Email">
            </label>

            <label>Preferred Visit Date
                <input type="date" name="Preferred Visit Date">
            </label>

            <label>Number of Guests
                <input type="number" name="Number of Guests" min="1">
            </label>

            <label>Ages of Children
                <input type="text" name="Ages of Children">
            </label>

            <label>Anything we should know?
                <textarea name="Additional Notes"></textarea>
            </label>
        `
    },

    photo: {
        title: 'Photography Booking Request',
        heading: 'Photo Request',
        subject: 'Photography Booking Request',
        fields: `
            <label>Full Name
                <input type="text" name="Full Name" required>
            </label>

            <label>Phone Number
                <input type="tel" name="Phone Number" required>
            </label>

            <label>Email
                <input type="email" name="Email">
            </label>

            <label>Preferred Session Date
                <input type="date" name="Preferred Session Date">
            </label>

            <label>Session Type
                <input type="text" name="Session Type" placeholder="Family, senior, engagement, seasonal, etc.">
            </label>

            <label>Number of People
                <input type="number" name="Number of People" min="1">
            </label>

            <label>Anything else you would like us to know?
                <textarea name="Additional Notes"></textarea>
            </label>
        `
    }
};

function returnToApplicationOptions(){
    if(!applicationsOptionsPanel || !applicationFormPanel) return;

    applicationFormPanel.classList.remove('active');
    applicationsOptionsPanel.classList.add('active');

    if(applicationsModalHeading){
        applicationsModalHeading.textContent = 'Select An Option';
    }

    if(dynamicFormFields){
        dynamicFormFields.innerHTML = '';
    }
}

function openApplicationForm(formType){
    const selectedForm = farmForms[formType];

    if(
        !selectedForm ||
        !applicationsOptionsPanel ||
        !applicationFormPanel ||
        !applicationFormTitle ||
        !dynamicFormFields ||
        !formSubject
    ) return;

    applicationFormTitle.textContent = selectedForm.title;
    formSubject.value = selectedForm.subject;
    dynamicFormFields.innerHTML = selectedForm.fields;

    if(applicationsModalHeading){
        applicationsModalHeading.textContent = selectedForm.heading;
    }

    applicationsOptionsPanel.classList.remove('active');
    applicationFormPanel.classList.add('active');
}

function openApplicationsMenu(e){
    if(e){
        e.preventDefault();
    }

    if(!applicationsModal) return;

    returnToApplicationOptions();

    applicationsModal.classList.add('active');
    applicationsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeApplicationsMenu(){
    if(!applicationsModal) return;

    applicationsModal.classList.remove('active');
    applicationsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    returnToApplicationOptions();
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

if(applicationFormTriggers.length){
    applicationFormTriggers.forEach(function(button){
        button.addEventListener('click', function(){
            openApplicationForm(button.dataset.form);
        });
    });
}

if(applicationFormBack){
    applicationFormBack.addEventListener('click', returnToApplicationOptions);
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
        status: "Adopted",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "Bam Bam has found his forever home. This sweet boy is beginning his next adventure with a loving family, and we couldn't be happier for him.",
        images: [
            "assets/pups/bambam/bambam-1.webp",
            "assets/pups/bambam/bambam-2.webp"
        ]
    },

    "elsa": {
        name: "Elsa",
        status: "Adopted",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "Elsa has found her forever home. We are so grateful to the wonderful family who welcomed her into their hearts. Thank you for following her journey here at Cavalier Country Farm.",
        images: [
            "assets/pups/elsa/elsa-1.webp",
            "assets/pups/elsa/elsa-2.webp"
        ]
    },

    "pebbles": {
        name: "Pebbles",
        status: "Adopted",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "Pebbles has found her forever home. Thank you to everyone who showed interest in this precious little girl. She is exactly where she was meant to be.",
        images: [
            "assets/pups/pebbles/pebbles-1.webp",
            "assets/pups/pebbles/pebbles-2.webp"
        ]
    },

    "rosie": {
        name: "Rosie",
        status: "Adopted",
        birthday: "March 27",
        weight: "2.2 lbs",
        description: "Rosie has found her forever home. We know she will bring years of joy, cuddles, and companionship to her new family.",
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
        status: "Adopted",
        birthday: "March 27",
        weight: "2.6 lbs",
        description: "Duke has found his forever home. We are so happy for this sweet boy and the loving family who welcomed him home.",
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

        if(galleryModal){
            galleryModal.classList.remove('active');
        }
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

const galleryModal = document.getElementById('galleryModal');
const galleryModalImage = document.getElementById('galleryModalImage');
const galleryModalClose = document.getElementById('galleryModalClose');

document
.querySelectorAll('.farm-gallery-track img')
.forEach(image => {

    image.addEventListener('click', () => {

        if(!galleryModal || !galleryModalImage) return;

        galleryModalImage.src = image.src;
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