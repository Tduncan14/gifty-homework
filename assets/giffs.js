$(function(){
   console.log("testing")
namekButtons(dbzArray,'classButtons','#buttonArea');

})

// list for giffs
let dbzArray=["Milkyway","Blackhole","Wormhole","Planets"];

// this is my functions that holds all the buttons

function namekButtons (Array,classes,areaStore){
  $(areaStore).empty();
    console.log("testing/bugging")
    // clears duplicate buttons
    for(var i = 0; i < Array.length; i++){
     //inner scope in blockCode if a variable was declared cannot be called from the global scope
     var zButtons= $('<button>');
     zButtons.addClass(classes);
     zButtons.attr('data-type',Array[i]);
     zButtons.text(Array[i]);
     $(areaStore).append(zButtons);
    }
   console.log("testing");

}
  $(".classButton").on('click',function(){
     ("#buttonArea").empty();
  })

// grabs the gifs
//// probably not working console log because my buttons are not showing up.
 $(document).on('click','.classButtons',function(){
     // dispalays the dataType
     let define = $(this).data('type');
     console.log(define);
     console.log("showUp");
     let  queryURL ="http://api.giphy.com/v1/gifs/search?q=" + define + "&api_key=neNX2j5ZrsjjNJFK461KlUvSR5mqCqlT&limit=5";
     console.log(queryURL);
     $.ajax({url:queryURL,method:"GET"})
     .done(function(response){
       console.log(response);
        for(var i = 0; i < response.data.length; i++){
            //another inner block cope
           let search = $('<div class = "itemsearch">');
            let rating = response.data[i].rating;
            let p =$('<p>').text('Rating:' + rating);
            let animated = response.data[i].images.fixed_height.url;
            let still = response.data[i].images.fixed_height_still.url;
            let image = $('<img>');       i
            image.attr("src", still);
          //  animalImage.attr("data-still", still);
          //  animalImage.attr("data-animate", animated);
           // animalImage.attr("data-state", "still");
            image.attr("data-still", still);
            image.attr('data-animate',animated);
            image.attr('data-state','still');
            image.addClass('searchImage');
            search.append(p);
            search.append(image);
            $('#searches').append(search);
        }
       console.log("this is madness");
     })
      console.log("Kratos: I am the God of Warrr!")
 })
 console.log("on the global scope");


 $(document).on("click",".searchImage",function(){
     var state = $(this).attr("data-state");
     if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      } 
 

 });



 /*$(".itemsearch").on("click", function() {
    var state = $(this).attr("data-state");
    // the if else conditons 
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    } 
});
*/
 // creating a click function that adds and holds buttons
 $('#buttonSub').on('click',function(){
   event.preventDefault();
   let   newgif = $('input').eq(0).val();
   dbzArray.push(newgif);
   namekButtons(dbzArray,'classButtons','#buttonArea');
   return false;
 });