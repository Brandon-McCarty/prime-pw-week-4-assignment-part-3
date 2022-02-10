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
// }

console.log(`Removing items -- should be true: `, empty(basket));
console.log(`The items in basket are: `, listItems(basket));

console.log('-----Testing Functions-----');
