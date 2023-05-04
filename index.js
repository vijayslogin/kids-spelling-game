var spelling = "";
var typedSpelling = "";

function startGame() {

    if($("#result").text() !== "Result") {
        $("#result").text("");
        location.reload();
    }

    var imageArray = ["apple", "ball", "cat", "dog", "elephant", "fish", "grapes", "hen", "ice creem", "juice",
                      "kite", "lion", "mango", "onion", "parrot", "quilt", "rose", "tiger", "umbrella", 
                      "van", "watch", "xmas tree", "yoga", "zeebra", "one", "two", "three", "four", "five", "six", "seven",
                      "eight", "nine", "ten", "elevel", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
                      "eighteen", "nineteen", "twenty"]; // initialize an empty array to store the image filenames

    var randomIndex = Math.floor(Math.random() * imageArray.length); 
    spelling = imageArray[randomIndex]; // get the random image filename
    var imageURL = "./images/" + spelling + ".jpg";
    $("#actualImg").attr("src", imageURL); // add the image to the page
}

$("#inputText").keypress(function(event) {
    
    if(spelling.length === 0) {
        alert("Start game.!");
        location.reload();
    }else if(typedSpelling.length === 0) {
        typedSpelling = event.key.toLowerCase();
    }else {
        typedSpelling = typedSpelling + event.key.toLowerCase();
    }

    if(typedSpelling.length === spelling.length) {
        if(spelling.length !== 0 && typedSpelling === spelling) {
            $("#result").text("Correct.!");
            $("#result").css("color", "green");
            $("body").css("background-image", "url('images/success.gif')");
        }else {
            $("#result").text("Opps :( Wrong.");
            $("#result").css("color", "red");
            $("body").css("background-image", "url('images/failure.gif')");
        }
        setTimeout(function() {
            location.reload();startGame();
        }, 5000);
    }
  });

  
