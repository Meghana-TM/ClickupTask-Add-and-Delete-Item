// Maximum entry limit for fruits
const maxEntries = 5;

// List of pre-defined fruits
const fruits = ["🍎 Apple", "🍍 Pineapple", "🍊 Orange", "🍇 Grapes", "🍓 Strawberry"];

// Array to store added fruit names
const addedFruits = [];

// Function to get a random fruit that is not in the addedFruits array
function getRandomFruit() {
    let randomFruit;

    do {
        randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    } while (addedFruits.includes(randomFruit));

    return randomFruit;
}

// Function to add a random fruit
function addRandomFruit() {
    const fruitList = document.getElementById('fruit-list');
    const fruitCount = fruitList.children.length;

    if (fruitCount >= maxEntries) {
        addRandomButton.disabled = true;
        return;
    }

    // Get a random fruit that is not in the addedFruits array
    const randomFruit = getRandomFruit();

    // Add the fruit to the array of added fruits
    addedFruits.push(randomFruit);

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${randomFruit}</span>
        <span class="delete-fruit";"><i class="material-icons" style="color:white">&#xe872;</i></span>
    `;

    // Add an event listener to the delete button
    const deleteButton = listItem.querySelector('.delete-fruit');
    deleteButton.addEventListener('click', function() {
        // Remove the fruit from the array of added fruits
        addedFruits.splice(addedFruits.indexOf(randomFruit), 1);
        listItem.remove();
        addRandomButton.disabled = false;
    });

    // Add the list item to the fruit list
    fruitList.appendChild(listItem);
}

// Add a click event listener to the "Add Random Fruit" button
const addRandomButton = document.getElementById('add-random-fruit');
addRandomButton.addEventListener('click', addRandomFruit);