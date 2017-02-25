      var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

      var wins = 0;
      var losses = 0;
      var guessCounter = 9;
      var guessList = document.getElementById('guesses');
      
      guessList.innerHTML="";


      document.onkeyup = function(event) {

        var userGuess = event.key.toLowerCase();
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        guessList.innerHTML += userGuess + ", "

        if (userGuess===computerGuess) {
            wins++;
            guessCounter = 9;
            guessList.innerHTML="";

          }
        else {
          guessCounter--;
        }

        if(guessCounter === 0){
          losses++;
          guessCounter = 9;
          guessList.innerHTML="";
        }


        var winsDiv = document.getElementById('wins');
        var lossesDiv = document.getElementById('losses');
        var guessLeftDiv = document.getElementById('guessLeft');


        winsDiv.innerHTML=wins;
        lossesDiv.innerHTML=losses;
        guessLeftDiv.innerHTML=guessCounter;





        };