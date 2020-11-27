let link = document.getElementById("myLink");

link.addEventListener("click", function(event){

    alert("You cannot access that link!");

    event.preventDefault();

    console.log (event.currentTarget );

    // console.log ( event );

});

