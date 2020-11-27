// let input = document.querySelector('input');

// console.log( input ); //To check that it works.

let div = document.querySelector('div');

let input = document.querySelector('input');

let button = document.querySelector('button');

    button.addEventListener('click', function( event ){
        
            event.preventDefault();

            div.textContent = 'Hello ' + input.value;
        // console.log(input.value);
        // document.write(input.value);
    });

    
    // let div = document.querySelector('div');
    //     div.innerHTML = input.value;

