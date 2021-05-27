function homepageNavHandler(event) {
    event.preventDefault();
    
    document.location.replace('/');
};

function contactNavHandler(event) {
    event.preventDefault();

    document.location.replace('/contact');
};

document.querySelector('#homepage-nav').addEventListener('click', homepageNavHandler);
document.querySelector('#contact-nav').addEventListener('click', contactNavHandler);