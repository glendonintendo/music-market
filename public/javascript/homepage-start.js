async function startButtonHandler(event) {
    event.preventDefault();

    document.location.replace('/browse');
};

document.querySelector('#start-btn').addEventListener('click', startButtonHandler);