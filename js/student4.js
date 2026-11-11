// =====================================================================
// STUDENT 4: GRADE CHECKER
// =====================================================================
// GOAL: The user types a test score from 0 to 100 and clicks "Check grade".
// The card shows the letter grade for that score.
//
//   90 to 100  A
//   80 to 89   B
//   70 to 79   C
//   60 to 69   D
//   0 to 59    F
//
// You need: variables, numbers, comparison and logical operators,
// functions, a click event and if / else if / else statements.
//
// RULES
// - Edit ONLY this file. Do not change index.html, style.css, or other
//   students' files.
// - Write all your code inside the student4 function below. This keeps your
//   variables separate, so they cannot clash with your classmates' variables.
//
// ELEMENTS ALREADY IN index.html
//   s4-name    heading with your name
//   s4-score   number input for the score
//   s4-button  "Check grade" button
//   s4-result  paragraph that shows the result
//
// HINTS
// - An input's value is always a string. Number("85") gives the number 85.
// - An empty input has the value "" (an empty string).
// - >= means "greater than or equal to".
// - || means OR. The condition is true if at least one part is true.
// - An if / else if chain stops at the FIRST true condition, so check the
//   highest grade first.
// =====================================================================

function student4() {

  // STEP 1: Show your name.
  // Create a constant called studentName that holds your name as a string.
  // Use document.getElementById("s4-name") to find the heading, and set its
  // textContent to studentName.


  // STEP 2: Find the elements.
  // Create three constants using document.getElementById:
  //   scoreInput -> "s4-score"
  //   button     -> "s4-button"
  //   result     -> "s4-result"


  // STEP 3: Create a function called getGrade with one parameter: score.
  // Use if / else if / else to RETURN the letter as a string:
  //   - IF score is greater than or equal to 90, return "A".
  //   - ELSE IF score is greater than or equal to 80, return "B".
  //   - ELSE IF score is greater than or equal to 70, return "C".
  //   - ELSE IF score is greater than or equal to 60, return "D".
  //   - ELSE return "F".
  // This function must only return the letter. It must not change the page.


  // STEP 4: Create a function called showGrade with no parameters.
  // Inside it, do the following in this order:
  //   a) Create a constant called score. Use Number() to convert
  //      scoreInput.value to a number.
  //   b) Write an if/else statement:
  //      - IF scoreInput.value is equal to "" OR score is less than 0 OR
  //        score is greater than 100, set result.textContent to:
  //        Please enter a score from 0 to 100.
  //      - ELSE:
  //        * Create a constant called grade. Call getGrade(score) to get
  //          its value.
  //        * Set result.textContent so that it looks exactly like this
  //          (using score and grade in place of 85 and B):
  //          A score of 85 is a grade B.
  // Use === for "is equal to".


  // STEP 5: Connect the button.
  // Use addEventListener so that a "click" on button runs showGrade.
  // Write showGrade without parentheses here.

}

student4();

// TEST YOUR WORK
// [ ] Your name appears at the top of the card.
// [ ] 95  -> A score of 95 is a grade A.
// [ ] 90  -> A score of 90 is a grade A.
// [ ] 85  -> A score of 85 is a grade B.
// [ ] 70  -> A score of 70 is a grade C.
// [ ] 65  -> A score of 65 is a grade D.
// [ ] 59  -> A score of 59 is a grade F.
// [ ] 0   -> A score of 0 is a grade F.
// [ ] 105, -5 or empty -> Please enter a score from 0 to 100.
