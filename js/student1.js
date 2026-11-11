// =====================================================================
// STUDENT 1: TEMPERATURE CONVERTER
// =====================================================================
// GOAL: The user types a temperature in Fahrenheit and clicks "Convert to
// Celsius". The card shows the same temperature in Celsius.
//
// You only need: variables, numbers, the - * / operators, functions and a
// click event.
//
// RULES
// - Edit ONLY this file. Do not change index.html, style.css, or other
//   students' files.
// - Write all your code inside the student1 function below. This keeps your
//   variables separate, so they cannot clash with your classmates' variables.
//
// ELEMENTS ALREADY IN index.html
//   s1-name        heading with your name
//   s1-fahrenheit  number input for the temperature in °F
//   s1-button      "Convert to Celsius" button
//   s1-result      paragraph that shows the result
//
// THE FORMULA
//   Celsius = (Fahrenheit - 32) * 5 / 9
//   Example: (77 - 32) * 5 / 9 = 25
//   The parentheses are important: the subtraction must happen first.
//
// HINTS
// - An input's value is always a string. Number("77") gives the number 77.
// - myNumber.toFixed(1) shows a number with 1 decimal: 37.7777 becomes "37.8".
// - A function can send a value back with return:
//     function double(n) {
//       return n * 2;
//     }
//     const answer = double(5);   // answer is 10
// - To type the degree symbol °, copy it from this comment.
// =====================================================================

function student1() {

  // STEP 1: Show your name.
  // Create a constant called studentName that holds your name as a string.
  // Use document.getElementById("s1-name") to find the heading, and set its
  // textContent to studentName.


  // STEP 2: Find the elements.
  // Create three constants using document.getElementById:
  //   fahrenheitInput -> "s1-fahrenheit"
  //   button          -> "s1-button"
  //   result          -> "s1-result"


  // STEP 3: Create a function called toCelsius with one parameter:
  // fahrenheit. It must RETURN the result of the formula above.
  // This function must only return the number. It must not change the page.


  // STEP 4: Create a function called showCelsius with no parameters.
  // Inside it, do the following in this order:
  //   a) Create a constant called fahrenheit. Use Number() to convert
  //      fahrenheitInput.value to a number.
  //   b) Create a constant called celsius. Call toCelsius(fahrenheit) to get
  //      its value.
  //   c) Set result.textContent so that it looks exactly like this
  //      (using fahrenheit in place of 77, and celsius.toFixed(1) in place
  //      of 25.0):
  //      77°F is 25.0°C.


  // STEP 5: Connect the button.
  // Use addEventListener so that a "click" on button runs showCelsius.
  // Write showCelsius without parentheses here.

}

student1();

// TEST YOUR WORK
// [ ] Your name appears at the top of the card.
// [ ] 77   -> 77°F is 25.0°C.
// [ ] 32   -> 32°F is 0.0°C.
// [ ] 212  -> 212°F is 100.0°C.
// [ ] 100  -> 100°F is 37.8°C.
// [ ] -40  -> -40°F is -40.0°C.
