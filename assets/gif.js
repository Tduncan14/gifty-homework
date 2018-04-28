
//Global variables that can be accessed anywhere on the javascript

// array of characters.
let dbzArray = ["goku" ,"vegeta","gohan","trunks"];
let gifNumber = 10;
let ratingRestrict ="pg";

$(function(){
    console.log("do you see me");
    //calling out the function 
     restorePlanet(dbzArray,'storeData','#addMeButtons');
})
// 
 function restorePlanet(dbzArray,classToAdd,addMeButtons){
  $(storeData).empty();
   for(var i =0; i < dbzArray.length; i++){
       //adding buttons in the empty div
    let addButtons = $('<button>');
    //  adding data type the class and setting buttons name to the string of the array
    addButtons.attr('data-type',dbzArray[i]);
      //  adding data type the class and setting buttons name to the string of the array
    addButtons.text(dbzArray[i]);
    // now giving the buttons  a direction to go.(apprehend) means attach afterwards
    $('#addmeButtons').append(addButtons);
    console.log("bugfinder");

   }
 }

    //url: "https://api.giphy.com/v1/gifs/search?q=
/*$.ajax({" + show + 
    "&dc6zaTOxFJmzC&rating=" + ratingRestrict + "&limit=" + gifNumber,
    method: "GET"*/