// Get the item ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");

// Make an HTTP GET request to fetch the item details
fetch(`https://boiling-fjord-00108-52329a44ed31.herokuapp.com/item/collection2/${itemId}`)  //collection has been changed to collection2
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
        <td>${itemData.name}</td>
        <td>${itemData.price}</td>
        <td>${itemData.key_features}</td>
        <td><img src="${itemData.images}" alt="${itemData.name}"/></td>
      </tr>`;
  })
  .catch((error) => {
    console.log(error);
  });
