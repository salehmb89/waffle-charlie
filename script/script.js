$(document).ready(function () {
  console.log("Top: " + $("#dogePic").position().top + " Left: " + $("#dogePic").position().left);

  $("#dogePic").draggable({
    stop: function () {
      console.log("Stopping???");

      // Check if the image is on the far-right side
      let dogeLeft = $("#dogePic").position().left;

      if (dogeLeft > 300) {
        console.log("We are above 300", dogeLeft);

        $("p").text("You won. Good for you.");

        // Change image source on winning
        $("#dogePic").attr("src", "https://picsum.photos/200/300");
      } else {
        console.log("We are NOT above 300");
      }
    },
    containment: "#containment-wrapper",
    scroll: false
  });
});
