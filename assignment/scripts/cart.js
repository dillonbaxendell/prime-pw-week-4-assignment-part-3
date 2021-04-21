console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// - Create a global variable named `basket` and set it to an empty array.

let basket = [];

console.log( `In the basket: ${basket}` );
//- Create a function called `addItem`. It should:
//  - take an input parameter for a string `item`
//  - add the new item to the global array `basket`.
//  - return `true` indicating the item was added

function addItem( item, array ) {
  array.push( item );
  return true;
}

console.log(`In the basket: ${basket}`);
console.log('Adding chocolate (expect true)', addItem('chocolate', basket));
console.log(`In the basket: ${basket}`);

//- Create a function called `listItems`. It should:
//  - loop over the items in the `basket` array
//  - console.log each individual item on a new line

function listItems( array ) {
  for (var i = 0; i < array.length; i++) {
    console.log( array[i] );
  }
}

console.log('Items in the basket using listItems:');
listItems( basket );

//- Create a function called `empty`. It should:
//  - reset the `basket` to an empty array

function empty( array ) {
  array.length = 0;
}

console.log( `Items in the basket before empty: ${basket}` );
empty( basket );
console.log( `Items in the basket after empty: ${basket}` );
