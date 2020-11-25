//Shall I wear a coat program.

// var temperature = 40; //default value was 50

// if(temperature < 0) {

//     console.log('Stay Inside!');

// } else if (temperature < 30 || temperature <50){

//     console.log('Wear hat and coat!');

// } else{

//     console.log('No need to wear your hats and coat, its lovely weather outside.');
// }

//     // else if (temperature != 50){

//     //     console.log('Wear a coat')

//     // }

var temperature = -2; //default value was 50

var snowing = true;

if(temperature < 0 && snowing ) {

    console.log('Stay Inside!');

} else if (temperature < 30){

    console.log('Wear hat and coat!');

} else if (temperature < 50){

    console.log('Wear a coat')

}else{

    console.log('No need to wear your hats and coat, its lovely weather outside.');
}