// var button = document.getElementById("myBtn");

// button.addEventListener("click", function (event) {
//     alert("Hi!");
// });

//When a button is clicked. If you create a function to declare the variable then you can reuse the function in more places. The code above works too but variable is not separately declared.

var button = document.getElementById("myBtn");

var sayHi = function(event){
    alert("Hi!");
};

button.addEventListener('click', sayHi);

//When a mouse hovers over the button

var button = document.getElementById("tickleBtn");

var sayTickle = function(event){
    alert("That tickles!");
};

button.addEventListener('mouseover', sayTickle);