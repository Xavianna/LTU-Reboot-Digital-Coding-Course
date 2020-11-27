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

let image = document.getElementById ('image'); //If using querySelector('#image') need to get the image by ID using the hashtag.

//Will return HTML tag of image
console.log( image );

//Will return just the image source link
console.log( image.src );

//Will return the alt set for the image
console.log( image.alt );

image.src = 'https://images.unsplash.com/photo-1606324879482-7f986b3058fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=60'; //used DOM to manipulate the image displayed