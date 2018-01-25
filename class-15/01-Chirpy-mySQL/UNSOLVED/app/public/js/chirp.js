// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps
$(document).ready(function(){
    function getAllChirps(){
        $("#chirpDisplay").empty();
        $.ajax("/api/allChirps",{
            type: "GET"
        }).then(function(data){
            // console.log(data);
        for(var i = 0; i < data.length; i++){
                makeChirp(data[i]);
            }
        });
    }

    $("#addChirp").on("click", function(event){

        var newChirp = {
            author: $("#author").val().trim(),
            chirp: $("#chirp").val().trim()
        }
        $.ajax("/api/new",{
            type: "POST",
            data: newChirp
        }).then(function(data){
            getAllChirps();
        })
    });

    getAllChirps();
});


function makeChirp(data){
    var chirp = $('<div>');
    chirp.addClass("chirp");
    chirp.append(`<p>${data.author}</p>`);
    chirp.append(`<p>${data.chirp}</p>`);
    chirp.append(`<p>${data.timeCreated}</p>`);
    $("#chirpDisplay").append(chirp);
}
// When user chirps
