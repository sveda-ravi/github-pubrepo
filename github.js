function fetchRepositories() {
    const username = document.getElementById('usernameInput').value;
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(repositories => displayRepositories(repositories))
        .catch(error => console.error('Error fetching repositories:', error));
}

function displayRepositories(repositories) {
    const repositoriesList = document.getElementById('repositoriesList');
    repositoriesList.innerHTML = '';

    if (repositories.length === 0) {
        repositoriesList.innerHTML = '<p>No repositories found for this user.</p>';
        return;
    }

    const ul = document.createElement('ul');
    repositories.forEach(repo => {
        const li = document.createElement('li');
        li.textContent = repo.name;
        ul.appendChild(li);
    });

    repositoriesList.appendChild(ul);
}
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
