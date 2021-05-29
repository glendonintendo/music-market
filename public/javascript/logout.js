async function logout() {
    axios.post('/api/users/logout')
        .then(() => document.location.replace('/'))
        .catch(err => alert(err));
}

document.querySelector('#logout').addEventListener('click', logout);