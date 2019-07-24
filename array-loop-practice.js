// Unless stated otherwise, your code should go _only_ inside the anonymous function below.
(function () {

  const apples = [1, 3, 5, 7, 9];
  const bakers = [9, 0, 3, 8, 4, 2, 6, 1, 7, 5];
  const cards = [1, 0, 8, 14, 10, 6, 4, 22, 15, 24, 15, 13, 13, 5, 0, 25, 21, 24, 24, 17, 4, 19, 15, 19, 9];
  const dogs = [29, 29, 17, 23, 23, 29, 17, 29, 17, 29, 23, 29, 23, 23, 29, 29, 23, 23, 17, 23, 29, 29, 23, 29, 17];
  const eggs = [81, 75, 75, 81, 32, 75, 81, 75, 81];
  const fans = [81, 75, 75, 81, 81, 75, 81, 75, 81];
  const grapes = String.fromCharCode(...eggs);
  const hands = String.fromCharCode(...fans);

  // 1. Show array apples.
  console.log(`Array apples: ${apples}.`);

  // 2. Show how many elements are in array apples.
  console.log(`The array apples has ${ apples.length } elements.`);

  // 3. Calculate the sum of the numbers in array apples.
  var aTotal = 0; // initialize a zero result
  for (let i = 0; i < apples.length; i++) {
    aTotal += apples[i]; // add the number to the result
  }
  // show the final result
  console.log(`The sum of numbers in array apples is ${ aTotal }.`);

  // 4. Show array bakers.
  console.log(`Array bakers: ${bakers}.`);

  // 5. Calculate the sum of the numbers in array bakers.
  var bTotal = 0; // initialize a zero result
  for (let i = 0; i < bakers.length; i++) {
    bTotal += bakers[i]; // add the number to the result
  }
  // show the final result
  console.log(`The sum of numbers in array bakers is ${ bTotal }.`);

  // 6a. Calculate the sum of the numbers in the even indices of array bakers.
  var bEvenIndexTotal = 0; // initialize a zero result
  for (let i = 0; i < bakers.length; i++) {
    if (i % 2 == 0) { // if the _index_ is even,
      bEvenIndexTotal += bakers[i]; // add the number in that index to the result.
    }
  }
  // show the final result
  console.log(`The sum of the numbers in the even positions of array bakers is ${ bEvenIndexTotal }.`);

  // 6b. Calculate the sum of the even numbers in array bakers.
  var bEvenTotal = 0; // initialize a zero result
  for (let i = 0; i < bakers.length; i++) {
    if (bakers[i] % 2 == 0) { // if the number is even,
      bEvenTotal += bakers[i]; // add the number to the result.
    }
  }
  // show the final result
  console.log(`The sum of the even numbers in array bakers is ${ bEvenTotal }.`);

  // 7. Show array cards.
  console.log(`Array cards: ${cards}.`);

  // 8. Determine *if* 15 is in array cards, and display the answer.
  // Note: There _is_ a built-in array.includes method to do this.
  //       Usually, you will use that method. But for this 
  //       exercise, write it with a loop.
  // Usual way to find if an array has some value, such as 15.
  if (cards.includes(15)) {
    console.log("15 is in array cards.");
  } else {
    console.log("15 is NOT in array cards.");
  }
  var is_15_in_array = false; // initialize with an empty/false result
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] == 15) { // if cards[i] is 15, we found it!
      is_15_in_array = true; // store the result
      break; // break out of the loop, since we now know the answer.
    }
  }
  // show the final result
  if (is_15_in_array) {
    console.log("15 is in array cards.");
  } else {
    console.log("15 is NOT in array cards.");
  }


  // 9. Determine *where* 15 first appears in array cards.
  // Note: There _is_ a built-in array.indexOf method to do this.
  //       Usually, you will use that method. But for this 
  //       exercise, write it with a loop.
  // Usual way to find the index of some value, such as 15: 
  console.log(`15 is in position ${ cards.indexOf(15) } of array cards.`);
  var index_of_15 = -1; // Because array elements start at 0, initialize with 
  // some other number, so we know if it's found at all.
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] == 15) { // if cards[i] is 15, we found it!
      index_of_15 = i; // store the result
      break; // break out of the loop, since we found the answer.
    }
  }
  // show the final result
  console.log(`15 is in position ${ index_of_15 } of array cards.`);

  // 10. How many times does 15 appear in array cards?
  var appearance15 = 0; // initialize a zero result
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] == 15) {
      appearance15 += 1; // update the result
    }
  }
  // show the final result
  console.log(`15 appears ${ appearance15 } times in array cards.`);

  // 11. How many times does 0, 4 any 13 appear in array cards?
  var someAppearances = 0; // initialize a zero result
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] == 0 || cards[i] == 4 || cards[i] == 13) {
      someAppearances += 1; // update the result
    }
  }
  // show the final result
  console.log(`0, 4 and 13 appear ${ someAppearances } times in array cards.`);

  // 12. Which positions in array cards hold a 15?
  var cIndices = []; // initialize an empty result
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] == 15) { // if 15 is in position i,
      cIndices.push(i); // put that position in the result.
    }
  }
  // show the final result
  console.log(`15 appears in positions ${ cIndices } in array cards.`);

  // 13. How many numbers are in array cards are even?


  // 14. Show array dogs.


  // 15. How large is array dogs?


  // 16. Calculate whether there are more than 8 29s in array dogs.


  // 17. Calculate whether there are more than 20 17s and 23s combined.


  // 18. Calculate how many 29s are in array dogs.


  // 19. Calculate how many 23s and 17s combined are in array dogs.


  // 20. Show array eggs.


  // 21. How large is array eggs?


  // 22. How many 32s are in array eggs?


  // 23. Does array eggs have only 75s and 81s?


  // 24. Show array fans.


  // 25. How large is array fans?


  // 26. How many 32s are in array fans?


  // 27. Does array fans have only 75s and 81s?


  // 28. Show array grapes.


  // 29. How large is array grapes?


  // 30. How many " "s are in array grapes?


  // 31. Does array grapes have only "Q"s and "K"s?


  // 32. Show array hands.


  // 33. How large is array hands?


  // 34. How many " "s are in array hands?


  // 35. Does array hands have only "Q"s and "K"s?


})();