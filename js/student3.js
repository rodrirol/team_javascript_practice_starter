// =====================================================================
// STUDENT 3: AGE IN MONTHS AND DAYS
// =====================================================================
// GOAL: The user types their age in years and clicks "Calculate". The card
// shows about how many months and days that is.
//
// You only need: variables, numbers, the * operator, a function and a
// click event.
//
// RULES
// - Edit ONLY this file. Do not change index.html, style.css, or other
//   students' files.
// - Write all your code inside the student3 function below. This keeps your
//   variables separate, so they cannot clash with your classmates' variables.
//
// ELEMENTS ALREADY IN index.html
//   s3-name    heading with your name
//   s3-age     number input for the age in years
//   s3-button  "Calculate" button
//   s3-result  paragraph that shows the result
//
// HINTS
// - An input's value is always a string. Number("14") gives the number 14.
// - * multiplies two numbers: 14 * 12 gives 168.
// =====================================================================

function student3() {

  // STEP 1: Show your name.
  // Create a constant called studentName that holds your name as a string.
  // Use document.getElementById("s3-name") to find the heading, and set its
  // textContent to studentName.
  const studentName = "Oscar Rodriguez";
  document.getElementById("s3-name").textContent = studentName;
  


  // STEP 2: Find the elements.
  // Create three constants using document.getElementById:
  //   ageInput -> "s3-age"
  //   button   -> "s3-button"
  //   result   -> "s3-result"
  const ageInput = document.getElementById("s3-age");
  const button = document.getElementById("s3-button");
  const result = document.getElementById("s3-result");


  // STEP 3: Store the fixed values.
  //   - A constant called monthsPerYear with the value 12.
  //   - A constant called daysPerYear with the value 365.
  const monthsPerYear = 12;
  const daysPerYear = 365;


  // STEP 4: Create a function called showAge with no parameters.
  // Inside it, do the following in this order:
  //   a) Create a constant called years. Use Number() to convert
  //      ageInput.value to a number.
  //   b) Create a constant called months equal to years multiplied by
  //      monthsPerYear.
  //   c) Create a constant called days equal to years multiplied by
  //      daysPerYear.
  //   d) Set result.textContent so that it looks exactly like this
  //      (using years, months and days in place of 14, 168 and 5110):
  //      14 years is about 168 months or 5110 days.
  function showAge() {
    const years = Number(ageInput.value);
    const months = years * monthsPerYear;
    const days = years * daysPerYear;
    result.textContent = `${years} years is about ${months} months or ${days} days.`;
  }


  // STEP 5: Connect the button.
  // Use addEventListener so that a "click" on button runs showAge.
  // Write showAge without parentheses here.
  button.addEventListener("click", showAge);

}

student3();

// TEST YOUR WORK
// [ ] Your name appears at the top of the card.
// [ ] 14 -> 14 years is about 168 months or 5110 days.
// [ ] 10 -> 10 years is about 120 months or 3650 days.
// [ ] 1  -> 1 years is about 12 months or 365 days.
// (We say "1 years" for now. Fixing it needs an if statement.)
