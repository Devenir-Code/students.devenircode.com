// {} is an object literal

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

// DomContentLoaded is an event that is fired when the DOM is loaded
// a callback function is passed to the event listener
document.addEventListener('DOMContentLoaded', function () {
    // display the person's information on the web page
    const nameElement = document.getElementById('name');
    const ageElement = document.getElementById('age');
    const addressElement = document.getElementById('address');

    nameElement.textContent = `Name: ${person.name}`;
    ageElement.textContent = `Age: ${person.age}`;
    addressElement.textContent = `Address: ${person.address.city}, ${person.address.state}`;
});

/*
Q: What is a callback function?
A: A callback function is a function that is passed to another 
function as an argument and is executed after some operation has been completed.
 */