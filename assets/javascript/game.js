      var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      var wins = 0;
      var losses = 0;
      // Need to edit the two below*****************
      var guessCounter = 9;
      var maxGuess = 9;


      document.onkeyup = function(event) {

        var userGuess = event.key.toLowerCase();
        console.log(userGuess);


        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        if (userGuess===computerGuess) {
            wins++;
            guessCounter--;
          }

        else if (userGuess !== computerGuess) {
          losses++;
          guessCounter--;
        }


          // Here we create the HTML that will be injected into our div and displayed on the page.
          var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guess left:" + guessCounter + "</p>" +
          "<p>Your guesses so far:" + userGuess + "</p>";

          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#game").innerHTML = html;

        };