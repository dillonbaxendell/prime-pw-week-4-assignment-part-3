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

// function addItem( item, array ) {
//   array.push( item );
//   return true;
// }

const maxItems = 5;

function addItem( item, array ) {
  if (array.length < maxItems) {
    array.push( item );
    return true;
  }
  else {
    return false;
  }
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
console.log( `Items in the basket after empty (expect nothing): ${basket}` );



console.log('****STRETCH GOALS****');




// 1. Add a global `const` named `maxItems` and set it to 5.

// const maxItems = 5;

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

function isFull() {
  if (basket < maxItems) {
    return false;
  }
  else {
    return true;
  }
}

console.log( `Is basket full?: ${isFull( basket )}` );

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

// function addItem( item, array ) {
//   if (array.length < maxItems) {
//     array.push( item );
//     return true;
//   }
//   else {
//     return false;
//   }
// }

console.log('Testing out function addItem after update:');

let potatoes = [ 'french fries', 'hashbrowns', 'mashed potatoes', 'loaded baked potato', 'potato chips'];

console.log( `This is what happens when we try to add an item to an array that is already at max items (expect false): ${addItem( 'curly fries', potatoes)}`);

// __Using Array built-in functions!__
//
// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

function removeItem( item, array ) {
     if (array.indexOf( item ) >= 0) {
       let n = array.indexOf( item );
       console.log( n );
       array.splice( n, 1);
       console.log( `Item removed: ${item}` );
     }
     else {
       console.log( 'null' );
     }
     console.log( `New array: ${array}` );
  }


removeItem( 'loaded baked potato', potatoes );
