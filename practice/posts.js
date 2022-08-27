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

function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => display(json));
}

