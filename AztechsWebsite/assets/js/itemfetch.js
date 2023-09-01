// Get the item ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");

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
    // Populate the item details table
    const itemDetails = document.getElementById("item_details");
    itemDetails.innerHTML = `
      <tr>
        <td>${itemData["Item Name"]}</td>
        <td>${itemData.Price}</td>
        <td>${itemData.Description}</td>
        <td><img src="${itemData.Image}" alt="${itemData["Item Name"]}"/></td>
      </tr>`;
  })
  .catch((error) => {
    console.log(error);
  });
