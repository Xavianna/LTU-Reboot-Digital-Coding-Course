let shoppingCart = [
    {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
    },
    {
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
    },
    {
    name:"mushrooms",
    type:"food",
    quantity:10,
    price:.1
    },
    {
    name:"can of beer",
    type:"alcohol",
    quantity:4,
    price:1.1
    },
    {
    name:"prosecco",
    type:"alcohol",
    quantity:1,
    price:8.99
    },
    {
    name:"steak",
    type:"food",
    quantity:2,
    price:3.99
    },
    {
    name:"blue cheese",
    type:"food",
    quantity:1,
    price:2.99
    },
    {
    name:"candles",
    type:"home",
    quantity:3,
    price:1.99
    },
    {
    name:"cheesecake",
    type:"food",
    quantity:1,
    price:4.99
    },
    {
    name:"onions",
    type:"food",
    quantity:3,
    price:.4
    }];

function discount( arr, discountAmount, type ){ //1. Create a function that takes 1 parameter ( The Array )
   
    let totalPrice = 0; // 2. Create a variable inside the function called 'totalPrice'

    //3. Loop through each item of the array and adding the value of the item to the total price
    for ( let index = 0; index < arr.length; index++ ){ //let parameter when something is going to change.
       
        if ( arr[index].type === type ){
            let discount = ( arr[index].price * discountAmount ) / 100; //BODMAS

            totalPrice = totalPrice + ( arr[index].price - discount ) * arr[index].quantity;
        } else {

            totalPrice = totalPrice + (arr[index].price * arr[index].quantity); //Accessing an array put in []; BODMAS
        }
        
    }

    //4. Return the totalPrice variable
    return totalPrice.toFixed(2);
}

// let message = 'Your discounted price comes to: £';
 
let shoppingFood = discount ( shoppingCart, 20, 'food');
let shoppingAlcohol = discount ( shoppingCart, 20, 'alcohol');
let shoppingHome = discount ( shoppingCart, 20, 'home');

console.log( shoppingFood );
console.log( shoppingAlcohol );
console.log( shoppingHome );