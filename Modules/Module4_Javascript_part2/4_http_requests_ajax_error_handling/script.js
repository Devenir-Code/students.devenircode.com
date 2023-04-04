// AJAX Example

/* 
In this example we will use the XMLHttpRequest object to make a request a server.
In this case we will use the JSONPlaceholder API to make a request to a server.

The JSONPlaceholder API is a fake online REST API that you can use whenever you need some
fake data. It is a great tool for front-end developers because you can use it to test
APIs without having to use your own server.
*/

// Use the Fetch API to make a request to the JSONPlaceholder API

async function getPosts() {
    //make a request to the server
    let result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await result.json();
    console.log(data);

    //pageStatus
    let pageStatus = document.querySelector('#pageStatus');
    pageStatus.innerHTML = `<div>Page: Updated, But not reloaded</div>`;

    //update the DOM #results
    let results = document.querySelector('#results');
    //wrap in a pre tag to make it look nice
    results.innerHTML = `<div>${JSON.stringify(data, null, 2)}</div>`;

    let card = document.querySelector('.card');
    card.innerHTML = `<h1>${data.title}</h1><p>${data.body}</p>`;
}




