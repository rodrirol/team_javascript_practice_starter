// =====================================================================
// STUDENT 6: SHOPPING LIST (ADVANCED LEVEL)
// =====================================================================
// GOAL: The user adds items to a shopping list. The list is an array of
// strings saved in localStorage, so it is still there after the page is
// reloaded.
//
// You need: an array, a for loop, localStorage, the trim() string method,
// functions, events and if/else statements.
//
// RULES
// - Edit ONLY this file. Do not change index.html, style.css, or other
//   students' files.
// - Write all your code inside the student6 function below. This keeps your
//   variables separate, so they cannot clash with your classmates' variables.
//
// ELEMENTS ALREADY IN index.html
//   s6-name     heading with your name
//   s6-item     text input for the item
//   s6-add      "Add item" button
//   s6-clear    "Clear list" button
//   s6-message  paragraph that shows messages
//   s6-count    paragraph that shows the number of items
//   s6-list     empty <ul> where the items appear
//
// HINTS
// - localStorage stores only strings. Convert the array before saving it,
//   and convert it back after loading it:
//     JSON.stringify(items)   array -> string
//     JSON.parse(savedItems)  string -> array
// - localStorage.getItem(key) returns null if nothing has been saved yet.
// - "  milk  ".trim() gives "milk" (removes spaces at both ends).
// - Add a new element to the list like this:
//     const listItem = document.createElement("li");
//     listItem.className = "list-group-item";   // Bootstrap's list style
//     listItem.textContent = "Text to show";
//     list.appendChild(listItem);
// =====================================================================

function student6() {

  // STEP 1: Show your name.
  // Create a constant called studentName that holds your name as a string.
  // Use document.getElementById("s6-name") to find the heading, and set its
  // textContent to studentName.


  // STEP 2: Find the elements.
  // Create six constants using document.getElementById:
  //   itemInput   -> "s6-item"
  //   addButton   -> "s6-add"
  //   clearButton -> "s6-clear"
  //   message     -> "s6-message"
  //   count       -> "s6-count"
  //   list        -> "s6-list"


  // STEP 3: Create the data.
  //   - A constant called storageKey with the string "practiceShoppingList".
  //   - A variable (let) called items with an empty array.


  // STEP 4: Create a function called loadItems with no parameters.
  // Inside it:
  //   a) Create a constant called savedItems equal to
  //      localStorage.getItem(storageKey).
  //   b) IF savedItems is not equal to null, set items to
  //      JSON.parse(savedItems).
  // Use !== for "is not equal to".


  // STEP 5: Create a function called saveItems with no parameters.
  // Inside it, call localStorage.setItem with two arguments: storageKey and
  // JSON.stringify(items).


  // STEP 6: Create a function called showItems with no parameters.
  // Inside it:
  //   a) Set list.textContent to "" to remove the items already displayed.
  //   b) Write a for loop that goes through every position of the items
  //      array. Inside the loop, create an "li" element called listItem,
  //      set its className to "list-group-item", set its textContent to
  //      items[i], and add it to list with appendChild (see the hints).
  //   c) After the loop, set count.textContent so that it looks like this:
  //      Items: 3
  //      Use items.length for the number.


  // STEP 7: Create a function called addItem with no parameters.
  // Inside it:
  //   a) Create a constant called item equal to itemInput.value.trim().
  //   b) Write an if/else statement:
  //      - IF item is equal to "", set message.textContent to:
  //        Please type an item.
  //      - ELSE, in this order:
  //        * Add item to the end of the items array with push.
  //        * Call saveItems().
  //        * Call showItems().
  //        * Set message.textContent so that it looks exactly like this
  //          (using item in place of Milk):
  //          Milk added.
  //        * Set itemInput.value to "".


  // STEP 8: Create a function called clearItems with no parameters.
  // Inside it, in this order:
  //   a) Set items to an empty array.
  //   b) Call localStorage.removeItem(storageKey).
  //   c) Call showItems().
  //   d) Set message.textContent to: List cleared.


  // STEP 9: Connect the buttons.
  // Use addEventListener so that:
  //   - a "click" on addButton runs addItem
  //   - a "click" on clearButton runs clearItems


  // STEP 10: Start the app.
  // Call loadItems(), then showItems(), as the last lines in this function.

}

student6();

// TEST YOUR WORK
// [ ] Your name appears at the top of the card.
// [ ] Add "Milk" -> list shows Milk, "Milk added." and "Items: 1".
// [ ] The input is empty after adding an item.
// [ ] Add "Bread" -> it appears below Milk, and "Items: 2".
// [ ] Leave the input empty, or type only spaces -> Please type an item.
// [ ] Reload the page -> the items are still there.
// [ ] Click Clear list -> "List cleared." and "Items: 0".
// [ ] Reload the page -> the list is still empty.
