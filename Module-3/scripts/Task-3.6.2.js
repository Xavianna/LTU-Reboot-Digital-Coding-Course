let div = document.querySelector('div');

let paragraph = document.createElement('p');

let paragraphText = document.createTextNode('I am a paragraph created in JavaScript');

    paragraph.appendChild ( paragraphText );

div.appendChild( paragraph );