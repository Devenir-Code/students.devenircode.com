// {} is an object literal

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

// cards is an array of objects
let cards = [
    person,

    {
        name: 'Jack',
        age: 23,
        address: {
            city: 'San Francisco',
            state: 'CA'
        }
    },
    {
        name: 'Amy',
        age: 40,
        address: {
            city: 'Indianapolis',
            state: 'IN'
        }
    },
    {
        name: 'Jill',
        age: 25,
        address: {
            city: 'Los Angeles',
            state: 'CA'
        }
    },
    {
        name: 'Bill',
        age: 19,
        address: {
            city: 'Chicago',
            state: 'IL'
        }
    },
]




// DomContentLoaded is an event that is fired when the DOM is loaded
// a callback function is passed to the event listener
document.addEventListener('DOMContentLoaded', function () {
    console.log(person);
    // display the person's information on the web page
    const nameElement = document.getElementById('name');
    const ageElement = document.getElementById('age');
    const addressElement = document.getElementById('address');

    nameElement.textContent = `${person.name}`;
    ageElement.textContent = `Age: ${person.age}`;
    addressElement.textContent = `Address: ${person.address.city}, ${person.address.state}`;



    // display the cards on the web page
    const cardListElement = document.getElementById('card-list');


    /* 
    <div class="card">
        <h2>Person Information</h2>
        <p id="name"></p>
        <p id="age"></p>
        <p id="address"></p>
    </div>
    */

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const cardTitleElement = document.createElement('h2');
        cardTitleElement.textContent = `${card.name}`;

        const ageElement = document.createElement('p');

        ageElement.textContent = `Age: ${card.age}`;

        const addressElement = document.createElement('p');

        addressElement.textContent = `Address: ${card.address.city}, ${card.address.state}`;

        cardListElement.appendChild(cardElement);
        cardElement.appendChild(cardTitleElement)
        cardElement.appendChild(ageElement);
        cardElement.appendChild(addressElement);
    }

});

/*
Q: What is a callback function?
A: A callback function is a function that is passed to another 
function as an argument and is executed after some operation has been completed.
 */

