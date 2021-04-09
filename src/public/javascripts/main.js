function main(){



    document.querySelector('.playBtn').addEventListener('click', function(event) {
        
        event.preventDefault();

        const userInput = [];

        const deck = [];

        const temp_deck = [];

        const suits = ['♠','♣','♥', '♦'];
        
        document.querySelector('#startValues').value.split(',').forEach((value) => {
            startValues.push(value)
        });

        // Initially fills the deck with userInput
        for (i = 0 ; i < userInput.length; i++) {

            let suit = getRandomInt(4);

            if (suit == 0) {

                deck.push(userInput[i] + "♠");

            } else if (suit == 1) {

                deck.push(userInput[i] + "♣");

            } else if (suit == 2) {

                deck.push(userInput[i] + "♥");

            } else {

                deck.push(userInput[i] + "♦");
            }
        }


        // Fills the temp_deck with 52 cards with all the suits
        for (i = 2; i <= 14; i++) {

            let cardFace = i;

            if (cardFace == 11) {

                cardFace = 'J';

            } else if (cardFace == 12) {

                cardFace = 'Q';

            } else if (cardFace == 13) {

                cardFace = 'K';

            } else if (cardFace == 14) {

                cardFace = 'A';
            } else {
                
                cardFace = i;
            
            }
            
            // Concatenates the value with suits
            for (j = 0; j < 4; j++) {

                if (j == 0) {

                    temp_deck.push(cardFace + "♠");

                } else if (j == 1) {

                    temp_deck.push(cardFace + "♣");

                } else if (j == 2) {

                    temp_deck.push(cardFace + "♥");

                } else {

                    temp_deck.push(cardFace + "♦");

                }
            }
        }

        


    


    });

}


function getRandomInt(max) {
    
    return Math.floor(Math.random() * max);

}

document.addEventListener('DOMContentLoaded', main);
