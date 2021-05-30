function homepageNavHandler(event) {
    event.preventDefault();
    
    document.location.replace('/');
};

function contactNavHandler(event) {
    event.preventDefault();

    document.location.replace('/contact');
};

function browseNavHandler(event) {
    event.preventDefault();

    document.location.replace('/browse');
};

document.querySelector('#homepage-nav').addEventListener('click', homepageNavHandler);
document.querySelector('#contact-nav').addEventListener('click', contactNavHandler);
document.querySelector('#browse-nav').addEventListener('click', browseNavHandler);