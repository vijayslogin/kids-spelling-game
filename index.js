var spelling = "";
var typedSpelling = "";

function startGame() {
    if($("#result").text().length !== 0) {
        $("#result").text("");
        location.reload();
    }

    var imageFolder = './images/'; // replace with the actual file path to your images folder
    var imageArray = []; // initialize an empty array to store the image filenames
    var spellingArray = [];
  
    // use jQuery's $.get() function to retrieve the list of files in the folder
    $.get(imageFolder, function(data) {
        console.log("data >>> " + data);
      $(data).find('a').each(function() { // loop through each file
        var filename = $(this).attr('href'); // get the filename
        if (filename.match(/\.(jpeg|jpg|png|gif)$/)) { // check if the file is an image
          imageArray.push(filename); // add the filename to the array
        }
      });
  
      var randomIndex = Math.floor(Math.random() * imageArray.length); // generate a random index
      var randomImage = imageArray[randomIndex]; // get the random image filename
      console.log("image url >>>> " + randomImage);
      $("#actualImg").attr("src", randomImage); // add the image to the page

      spelling = sliceImageName(randomImage).toUpperCase();
      console.log(spelling); // "my-image.jpg"
    });
}

$("#inputText").keypress(function(event) {
    // console.log(">>>" + typedSpelling + ">>>" + spelling) ;
    
    if(spelling.length === 0) {
        alert("Start game.!");
        location.reload();
    }else if(typedSpelling.length === 0) {
        typedSpelling = event.key.toUpperCase();
    }else {
        typedSpelling = typedSpelling + event.key.toUpperCase();
    }

    if(typedSpelling.length === spelling.length) {
        // console.log(">>>" + typedSpelling + ">>>" + spelling) ;
        if(spelling.length !== 0 && typedSpelling === spelling) {
            $("#result").text("Correct.!");
            $("#result").css("color", "green");
            $("body").css("background-image", "url('images/success.gif')");
        }else {
            $("#result").text("Opps :( Wrong.");
            $("#result").css("color", "red");
            $("body").css("background-image", "url('images/failure.gif')");
        }
        // Execute a function after 3 seconds
        setTimeout(function() {
            location.reload();startGame();
        }, 5000);
    }
  });

function sliceImageName (imageURL) {

    var imageUrl = imageURL;
    return imageUrl.split('/').pop().split(".")[0];
    // console.log(imageName); // "my-image.jpg"
}
  
