// create an array of cat facts
const catFacts = [
    "Cats can make over 100 sounds.",
    "Cats can't taste sweet things.",
    "A group of cats is called a clowder.",
    "A cat's brain is 90% similar to a human's.",
    "The world's largest cat measured 48.5 inches long.",
    "Cats can see in near darkness.",
    "A cat's nose pad is as unique as a human's fingerprint."
];

// select HTML elements
const factElement = document.getElementById('fact');
const factListElement = document.getElementById('fact-list');
const generateButton = document.getElementById('generate-btn');

//create a new div to hold the image
const imageDiv = document.createElement('div');
const image = document.createElement('img');


// generate a random cat fact
function generateCatFact() {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    factElement.textContent = catFacts[randomIndex];

    // put the image in the div
    imageDiv.appendChild(image);
    // put the div in the factElement
    factElement.appendChild(imageDiv);
    image.src = `https://placekitten.com/${Math.floor(Math.random() * 200) + 100}/${Math.floor(Math.random() * 200) + 100}`;
    factElement.appendChild(image);

}

// add event listener to generate button
generateButton.addEventListener('click', generateCatFact);

// generate a random cat fact on page load
generateCatFact();

// display all cat facts
for (let i = 0; i < catFacts.length; i++) {
    const factListItem = document.createElement('li');
    factListItem.textContent = catFacts[i];
    factListElement.appendChild(factListItem);
}
