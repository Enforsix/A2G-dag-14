let parent = document.querySelector(".container");

// Create a new button and add it to the container
let newButton = document.createElement("button");
newButton.textContent = "detter er ny tekst";
parent.appendChild(newButton);

// Update the <h1> text content
let newHeader = document.querySelector("h1");
newHeader.textContent = "New and Better";

// Corrected event listener for the button click
newButton.addEventListener("click", () => {
    // Find the <p> element and update its text content
    let paragraph = document.querySelector("p");
    paragraph.textContent = "clicked";
});

// Create a new <ul> list when the 'listBtn' button is clicked
let addList = document.querySelector("#listBtn");
addList.addEventListener("click", () => {
    let newList = document.createElement("ul");
    newList.textContent = "list"; // Set the text content for the list
    parent.appendChild(newList);  // Add the list to the parent container
});
