let buttons = document.querySelectorAll(".myButton");
let paragraphs = document.querySelectorAll(".unhide");
let icons = document.querySelectorAll(".myIcon");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (paragraphs[index].style.display === "none") { // We check if the paragraph at this index is hidden:
        //If hidden we show it and change icon to minus.
      paragraphs[index].style.display = "block";
      icons[index].src = "./assets/images/icon-minus.svg";
    } else {
        // we hide it again and change icon to plus.
      paragraphs[index].style.display = "none";
      icons[index].src = "./assets/images/icon-plus.svg";
    }
  });
});

//buttons selects all elements with the class .myButton.querySelectorAll returns a NodeList — similar to an array.
// forEach  lets us loop through each item in the NodeList.
//button — refers to the current button element we are looping over
// index — refers to the position of the current button in the list (0, 1, 2, ...).
// addEventListener This sets up an event listener so that when the user clicks this particular button, the function inside runs.

//paragraphs[index] and icons[index] are NodeLists, just like buttons

//in a nut shell --- For each button, when it is clicked, find its matching paragraph and icon using the same index, and toggle them open or closed

