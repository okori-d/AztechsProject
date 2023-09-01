// Array to store the compared items
let comparedItems = [];

//FOR COLLECTION1
// Function to add an item to the comparison list
function addItemToCompare(itemId) {
    // Make an HTTP GET request to fetch the item details
    fetch(`https://boiling-fjord-00108-52329a44ed31.herokuapp.com/item/collection1/${itemId}`)
        .then((response) => {
            if (response.ok) {
                return response.json(); // Convert the response to an object
            } else {
                throw new Error("Error: " + response.status);
            }
        })
        .then((itemData) => {
            // Add the item to the comparedItems array
            comparedItems.push(itemData);

            // Save the comparedItems array in localStorage
            localStorage.setItem("comparedItems", JSON.stringify(comparedItems));

            // Display a notification
            alert("Item added to comparison");

            // Update the comparison table
            updateComparisonTable();
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function to update the comparison table
function updateComparisonTable() {
    // Get the compare_table element
    const compareTable = document.getElementById("compare_table");

    // Clear the existing table content
    compareTable.innerHTML = "";

    // Get the comparedItems array from localStorage
    comparedItems = JSON.parse(localStorage.getItem("comparedItems")) || [];

    // Loop through the comparedItems array and populate the table
    comparedItems.forEach((itemData) => {
        compareTable.innerHTML += `
            <tr>
                <td>${itemData["Item Name"]}</td>
                <td>${itemData.Price}</td>
                <td>${itemData.Description}</td>
                <td><img src="${itemData.Image}" alt="${itemData["Item Name"]}"/></td>
            </tr>
        `;
    });
}

// Load the comparison items when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    updateComparisonTable();
});


//FOR COLLECTION2
// Function to add an item to the comparison list
function addItemToCompare2(itemId) {
    // Make an HTTP GET request to fetch the item details
    fetch(`https://boiling-fjord-00108-52329a44ed31.herokuapp.com/item/collection2/${itemId}`)
        .then((response) => {
            if (response.ok) {
                return response.json(); // Convert the response to an object
            } else {
                throw new Error("Error: " + response.status);
            }
        })
        .then((itemData) => {
            // Add the item to the comparedItems array
            comparedItems.push(itemData);

            // Save the comparedItems array in localStorage
            localStorage.setItem("comparedItems", JSON.stringify(comparedItems));

            // Display a notification
            alert("Item added to comparison");

            // Update the comparison table
            updateComparisonTable();
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function to update the comparison table
function updateComparisonTable() {
    // Get the compare_table element
    const compareTable = document.getElementById("compare_table");

    // Clear the existing table content
    compareTable.innerHTML = "";

    // Get the comparedItems array from localStorage
    comparedItems = JSON.parse(localStorage.getItem("comparedItems")) || [];

    // Loop through the comparedItems array and populate the table
    comparedItems.forEach((itemData) => {
        compareTable.innerHTML += `
            <tr>
                <td>${itemData["Item Name"]}</td>
                <td>${itemData.Price}</td>
                <td>${itemData.Description}</td>
                <td><img src="${itemData.Image}" alt="${itemData["Item Name"]}"/></td>
            </tr>
        `;
    });
}

// Load the comparison items when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    updateComparisonTable();
});
