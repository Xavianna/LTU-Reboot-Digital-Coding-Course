let div = document.querySelector('div');

let paragraph = document.createElement('p');

let paragraphText = document.createTextNode('I am a paragraph created in JavaScript');

    paragraph.appendChild ( paragraphText );

div.appendChild( paragraph );

let link = document.querySelector('a');

// console.log ( link );

link.addEventListener ( 'click', function( event ){
    event.preventDefault();
    console.log('Default disabled');
}); //Preventing people from going to the link