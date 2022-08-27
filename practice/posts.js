function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => display(json));
}
function display(array) {
    const article = document.getElementById('article');
    for(const object of array) {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${object.title.toUpperCase()}</h2><p>${object.body}</p>`;
        article.appendChild(div);
    }
}
loadData();