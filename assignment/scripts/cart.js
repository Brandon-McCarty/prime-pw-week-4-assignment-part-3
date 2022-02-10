console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item, array){
    console.log('in addItem');
    array.push(item);
    return true;
}
console.log(`Basket is ${basket}`);
console.log(`Adding cup -- should be true: `, addItem('cup', basket));
console.log(`Adding tack -- should be true: `, addItem('tack', basket));
console.log(`Basket is now ${basket}`);

function listItems(array){
    console.log('in listItems');
       return array;
}
console.log(basket);
console.log(`The items in basket are: `, listItems(basket));

function empty(array){
    console.log('in empty');
    while (array.length > 0){
        array.pop();
    }
    return true;
} 
//     for (let i = 0; i < array.length; i++){
//         array.pop();
//     }
//     return true;
// } -- This one only removes one item from the array

console.log(`Removing items -- should be true: `, empty(basket));
console.log(`The items in basket are: `, listItems(basket));

console.log('-----Testing Functions-----');
console.log(`Basket is ${basket}`);
console.log(`Adding juice -- should be true: `, addItem('juice', basket));
console.log(`Adding sandwich -- should be true: `, addItem('sandwich', basket));
console.log(`Adding napkins -- should be true: `, addItem('napkins', basket));
console.log(`Basket is now ${basket}`);
console.log(`The items in basket are: `, listItems(basket));
console.log(`Removing items -- should be true: `, empty(basket));
console.log(`The items in basket are: `, listItems(basket));

console.log('-----Stretch Goals-----');
const maxItems = 5;
console.log(`Adding juice -- should be true: `, addItem('juice', basket));
console.log(`Adding sandwich -- should be true: `, addItem('sandwich', basket));
console.log(`Adding napkins -- should be true: `, addItem('napkins', basket));
console.log(`Adding cup -- should be true: `, addItem('cup', basket));
console.log(`Adding tack -- should be true: `, addItem('tack', basket));
console.log(`The items in basket are: `, listItems(basket));


function isFull(array){
    if (array.length < maxItems){
        return false;
    }
    return true;
}

console.log(`Basket is full (Should be true): `, isFull(basket));

