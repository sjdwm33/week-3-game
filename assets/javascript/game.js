      var computerChoices = ["a", "e", "i", "o", "u",];

      var wins = 0;
      var losses = 0;
      var guessCounter = 9;
      var gameOver = 0;


      document.onkeyup = function(event) {

        var userGuess = event.key.toLowerCase();


        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        if (userGuess===computerGuess) {
            wins++;
            guessCounter = 9;
          }
        else {
          guessCounter--;
        }

        if(guessCounter === 0){
          losses++;
          guessCounter = 9;
        }



          var html = "<p>Guess what vowel I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guess left:" + guessCounter + "</p>" +
          "<p>Your guesses so far:" + userGuess + "</p>";

          document.querySelector("#game").innerHTML = html;

        };