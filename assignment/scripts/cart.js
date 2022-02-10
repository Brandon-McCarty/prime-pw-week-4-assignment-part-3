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

function addItem2(item, array){
    console.log('in addItem2');
    let full = isFull(array)
    if (full === false){
    array.push(item);
    return true;
    }
    return false;
}

console.log(`Adding milk -- should be false: `, addItem2('milk', basket));
console.log(`The items in basket are: `, listItems(basket));

console.log('-----TEST-----');
console.log(`Removing items -- should be true: `, empty(basket));
console.log(`The items in basket are: `, listItems(basket));

console.log(`Adding jelly -- should be true: `, addItem2('jelly', basket));
console.log(`Adding peanut butter -- should be true: `, addItem2('peanut butter', basket));
console.log(`Adding bread -- should be true: `, addItem2('bread', basket));
console.log(`The items in basket are: `, listItems(basket));

function removeItem(item, array){
    let removed = array.indexOf(item);
    if (removed > -1){
        array.splice(removed, 1)
        return item;
    }
    return null;
}

console.log(`Remove item jelly from basket (should be jelly): `, removeItem('jelly', basket));
console.log(`Remove item bread from basket (should be bread): `, removeItem('bread', basket));
console.log(`Remove item milk from basket (should be null): `, removeItem('milk', basket));
console.log(`The items in basket are: `, listItems(basket));