$(document).ready(function() {
  
  console.log("Top: " + $("img").position().top + " Left: " + $("img").position().left);
 
 $("img").draggable({
   stop: function() {
     console.log("stopping????");
   
     let dogeLeft = $("img").position().left;

     if (dogeLeft > 500) {

       console.log("we above 500");
       $("p").text("you win.. good for you");


      //stop: function() {
       //alert( $("img").position().left );
      //alert("Top: " + $("img").position().top + " Left: " +$("img").position().left);
     }
   }
 });
});
