function searchProducts() {
    var searchQuery = document.getElementById("searchInput").value;
  
    // Make an HTTP GET request to the search API endpoint
    fetch(`https://boiling-fjord-00108-52329a44ed31.herokuapp.com/search?query=${encodeURIComponent(searchQuery)}`)
      .then((response) => {
        if (response.ok) {
          return response.json(); // Convert the response to an object
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then((responseData) => {
        const objectData = responseData.collection2; // Access the desired collection  since this is jumia its switched to collection2
  
        let tableData = "";
        objectData.forEach((values) => {
          tableData += `<tr>
            <td><a href="item.html?id=${values._id}">${values._id}</a></td>
            <td>${values.name}</td>
            <td>${values.price}</td>
            <td><img src="${values.images}" alt="${values.name}"/></td>
          </tr>`;
        });
  
        document.getElementById("table_body").innerHTML = tableData;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
// Listen for keydown event on the search input field
document.getElementById("searchInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === "Return") {
    searchProducts(); // Call the search function when Enter key is pressed
  }
});