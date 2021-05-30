async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPass').value.trim();

    if (email && password) {
        axios.post('/api/users/login', { email, password })
            .then(() => document.location.replace('/browse'))
            .catch(err => alert(err));
    }
};

async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#signUpEmail').value.trim();
    const password = document.querySelector('#signUpPass').value.trim();

    if (email && password) {
        axios.post('/api/users', { email, password })
            .then(() => document.location.replace('/browse'))
            .catch(err => alert(err));
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);