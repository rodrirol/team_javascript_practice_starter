// =====================================================================
// STUDENT 2: FAVORITE COLOR
// =====================================================================
// GOAL: The user types the name of a color in English and clicks "Show
// color". A box on the card changes to that color and shows a sentence.
//
// You only need: variables, strings, a function and a click event.
//
// RULES
// - Edit ONLY this file. Do not change index.html, style.css, or other
//   students' files.
// - Write all your code inside the student2 function below. This keeps your
//   variables separate, so they cannot clash with your classmates' variables.
//
// ELEMENTS ALREADY IN index.html
//   s2-name    heading with your name
//   s2-color   text input for the color
//   s2-button  "Show color" button
//   s2-box     box that changes color
//
// HINTS
// - colorInput.value gives you the text the user typed, as a string.
// - Change an element's background like this:
//     box.style.backgroundColor = "orange";
//   Instead of "orange", you can use a variable that holds a color name.
// - Use + to join strings.
// =====================================================================

function student2() {

  // STEP 1: Show your name.
  // Create a constant called studentName that holds your name as a string.
  // Use document.getElementById("s2-name") to find the heading, and set its
  // textContent to studentName.
  const studentName = "Carlos Luis Acosta";
  document.getElementById("s2-name").textContent = studentName;




  // STEP 2: Find the elements.
  // Create three constants using document.getElementById:
  //   colorInput -> "s2-color"
  //   button     -> "s2-button"
  //   box        -> "s2-box"
  const colorInput = document.getElementById("s2-color");
  const button = document.getElementById("s2-button");
  const box = document.getElementById("s2-box");


  // STEP 3: Create a function called showColor with no parameters.
  // Inside it, write three lines in this order:
  //   a) Create a constant called color equal to colorInput.value.
  //   b) Set box.style.backgroundColor to color.
  //   c) Set box.textContent so that it looks exactly like this
  //      (using color in place of blue):
  //      Your favorite color is blue.
  function showColor() {
    const color = colorInput.value;
    box.style.backgroundColor = color;
    box.textContent = "Your favorite color is " + color + ".";
  }


  // STEP 4: Connect the button.
  // Use addEventListener so that a "click" on button runs showColor.
  // Write showColor without parentheses here.
  button.addEventListener("click", showColor);

}

student2();

// TEST YOUR WORK
// [ ] Your name appears at the top of the card.
// [ ] Type lightblue -> light blue box with: Your favorite color is lightblue.
// [ ] Type orange    -> orange box with: Your favorite color is orange.
// [ ] Type pink      -> pink box with: Your favorite color is pink.
// Note: color names have no spaces. Type lightgreen, not light green.
