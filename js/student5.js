// =====================================================================
// STUDENT 5: PIGGY BANK
// =====================================================================
// GOAL: An object stores a piggy bank's owner and the money in it. One
// button adds $10. The other button takes out $10, but only if there is
// enough money.
//
// You need: variables, numbers, strings, an object, functions, click
// events and an if/else statement.
//
// RULES
// - Edit ONLY this file. Do not change index.html, style.css, or other
//   students' files.
// - Write all your code inside the student5 function below. This keeps your
//   variables separate, so they cannot clash with your classmates' variables.
//
// ELEMENTS ALREADY IN index.html
//   s5-name      heading with your name
//   s5-info      paragraph that shows the money in the piggy bank
//   s5-message   paragraph that shows what just happened
//   s5-deposit   "Deposit $10" button
//   s5-withdraw  "Withdraw $10" button
//
// HINTS
// - Read and change object properties with a dot:
//     account.balance                       reads the balance
//     account.balance = account.balance + 5; adds 5 to it
// - >= means "greater than or equal to".
// - To show an apostrophe inside double quotes, just type it: "Mia's"
// =====================================================================

function student5() {

  // STEP 1: Show your name.
  // Create a constant called studentName that holds your name as a string.
  // Use document.getElementById("s5-name") to find the heading, and set its
  // textContent to studentName.


  // STEP 2: Find the elements.
  // Create four constants using document.getElementById:
  //   info           -> "s5-info"
  //   message        -> "s5-message"
  //   depositButton  -> "s5-deposit"
  //   withdrawButton -> "s5-withdraw"


  // STEP 3: Create the data.
  //   - A constant called account: an object with exactly these properties:
  //       owner    (string)  "Mia"
  //       balance  (number)  20
  //   - A constant called amount with the value 10.


  // STEP 4: Create a function called showAccount with no parameters.
  // Inside it, use account.owner and account.balance to set
  // info.textContent so that it looks exactly like this:
  //   Mia's piggy bank has $20.


  // STEP 5: Create a function called deposit with no parameters.
  // Inside it, in this order:
  //   a) Add amount to account.balance.
  //   b) Set message.textContent so that it looks exactly like this
  //      (using amount in place of 10):
  //      You added $10.
  //   c) Call showAccount().


  // STEP 6: Create a function called withdraw with no parameters.
  // Inside it, write an if/else statement:
  //   - IF account.balance is greater than or equal to amount:
  //       a) Subtract amount from account.balance.
  //       b) Set message.textContent so that it looks exactly like this
  //          (using amount in place of 10):
  //          You took out $10.
  //       c) Call showAccount().
  //   - ELSE set message.textContent to:
  //     Not enough money!


  // STEP 7: Connect the buttons.
  // Use addEventListener so that:
  //   - a "click" on depositButton runs deposit
  //   - a "click" on withdrawButton runs withdraw


  // STEP 8: Show the account when the page loads.
  // Call showAccount() here, as the last line in this function.

}

student5();

// TEST YOUR WORK
// [ ] Your name appears at the top of the card.
// [ ] On load: Mia's piggy bank has $20.
// [ ] Click Deposit  -> You added $10. and $30.
// [ ] Click Withdraw 3 times -> $0, and "You took out $10." each time.
// [ ] Click Withdraw again -> Not enough money! (still $0)
