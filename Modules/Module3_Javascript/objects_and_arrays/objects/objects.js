// create an object representing a person
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // display the person's information on the web page
    const nameElement = document.getElementById('name');
    const ageElement = document.getElementById('age');
    const addressElement = document.getElementById('address');

    nameElement.textContent = `Name: ${person.name}`;
    ageElement.textContent = `Age: ${person.age}`;
    addressElement.textContent = `Address: ${person.address.city}, ${person.address.state}`;
});
