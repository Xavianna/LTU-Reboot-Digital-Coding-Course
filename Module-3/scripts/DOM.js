let heading1 =  document.querySelector('h1'); //let is another way of doing var but the variable can change at some point.

console.log( heading1 );

let paragraph = document.querySelector('p');

console.log( paragraph );

// let listItem2 = document.querySelector('li'); //querySelector only display 1 item from the list.

// console.log( listItem2 );

let listItems = document.querySelectorAll('li'); //querySelectorAll creates an array which shows everything on the list. Saves looping around it.

console.log( listItems );
console.log( listItems [0]);
console.log( listItems [1]);


//To loop around list. This doesn't display the list as an array but 2 separate lists.

// for (let index = 0; index < listItems.length; index++){

//     console.log( listItems[index] );
// }

let itemClass = document.getElementsByClassName('item');

console.log( itemClass );