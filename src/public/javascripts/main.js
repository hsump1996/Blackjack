function main(){

    const userInput = [];

    document.querySelector('.playBtn').addEventListener('click', function(event) {
        
        event.preventDefault();

        let startDiv = document.querySelector("div.start");

        startDiv.style.display = "none";


        document.getElementById('startValues').value.split(',').forEach((value) => {
            
            userInput.push(value)
        
        });
        
        let deck = [];

        const temp_deck = [];

        let userTotal = 0;

        let computerTotal = 0;

        let userHand = [];

        let computerHand = [];

        for (i = 0; i < userInput.length; i++) {

            if (i == 1 || i == 3) {

                if (userInput[i] == 'J' || userInput[i] == 'Q' || userInput[i] == 'K') {

                    userTotal += 10;
    
                } else if (userInput[i] == 'A'){

                    userTotal += 11;

                } else {
                    
                    userTotal += parseInt(userInput[i]);
                }
            } else if (i == 0 || i == 2) {

                if (userInput[i] == 'J' || userInput[i] == 'Q' || userInput[i] == 'K') {

                    computerTotal += 10;
    
                } else if (userInput[i] == 'A'){

                    computerTotal += 11;

                } else {
                    computerTotal += parseInt(userInput[i]);
                }
            }
        }

        const arrayofImages = ['./img/AS.jpg', './img/AC.jpg', './img/AH.jpg','./img/AD.jpg', './img/KS.jpg', './img/KC.jpg', 
        './img/KH.jpg','./img/KD.jpg', './img/QS.jpg', './img/QC.jpg', './img/QH.jpg','./img/QD.jpg','./img/JS.jpg', './img/JC.jpg', './img/JH.jpg','./img/JD.jpg', 
        './img/10S.jpg', './img/10C.jpg','./img/10H.jpg', './img/10D.jpg', './img/9S.jpg','./img/9C.jpg', './img/9H.jpg', './img/9D.jpg', './img/8S.jpg','./img/8C.jpg', './img/8H.jpg', './img/8D.jpg',
        './img/7S.jpg','./img/7C.jpg', './img/7H.jpg', './img/7D.jpg', './img/6S.jpg','./img/6C.jpg', './img/6H.jpg', './img/6D.jpg', './img/5S.jpg','./img/5C.jpg', './img/5H.jpg', './img/5D.jpg',
        './img/4S.jpg','./img/4C.jpg', './img/4H.jpg', './img/4D.jpg', './img/3S.jpg','./img/3C.jpg', './img/3H.jpg', './img/3D.jpg', './img/2S.jpg','./img/2C.jpg', './img/2H.jpg', './img/2D.jpg'];
        
        
        //Creates the first div
        let div1 = document.createElement('div');
        
        div1.setAttribute("id", "computerHandDisplay");
        
        document.querySelector("div.game").appendChild(div1);

        let computerHandHeader = document.createElement("h1");
		
        let computerHandHeaderContent = document.createTextNode("Computer Hand - Total: ?");
		
        computerHandHeader.appendChild(computerHandHeaderContent);

        document.getElementById("computerHandDisplay").appendChild(computerHandHeader);

        //Creates the second div
        let div2 = document.createElement('div');
        
        div2.setAttribute("id", "computerHand");

        document.querySelector("div.game").appendChild(div2);

        //Creates the third div
        let div3 = document.createElement('div');
        
        div3.setAttribute("id", "playerHandDisplay");


        document.querySelector("div.game").appendChild(div3);

        let playerHandHeader = document.createElement("h1");
		
        let playerHandHeaderConent = document.createTextNode("Player Hand - Total: " + userTotal);
		
        playerHandHeader.appendChild(playerHandHeaderConent);

        document.getElementById("playerHandDisplay").appendChild(playerHandHeader);


        //Creates the fourth div
        let div4 = document.createElement('div');
        
        div4.setAttribute("id", "playerHand");

        document.querySelector("div.game").appendChild(div4);


        //Creates the fifth div with buttons
        let div5 = document.createElement('div');
        
        div5.setAttribute("id", "buttons");

        document.querySelector("div.game").appendChild(div5);

        let hitButton = document.createElement("button");
        hitButton.appendChild(document.createTextNode("Hit"));
        document.getElementById("buttons").appendChild(hitButton);
        
        let standButton = document.createElement("button");
        standButton.appendChild(document.createTextNode("Stand"));
        document.getElementById("buttons").appendChild(standButton);

        
        // Initially fills the deck with userInput
        for (i = 0 ; i < userInput.length; i++) {

            let suit = getRandomInt(4);

            if (suit == 0) {

                deck.push(userInput[i] + "S");

            } else if (suit == 1) {

                deck.push(userInput[i] + "C");

            } else if (suit == 2) {

                deck.push(userInput[i] + "H");

            } else {

                deck.push(userInput[i] + "D");
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

                    temp_deck.push(cardFace + "S");

                } else if (j == 1) {

                    temp_deck.push(cardFace + "C");

                } else if (j == 2) {

                    temp_deck.push(cardFace + "H");

                } else {

                    temp_deck.push(cardFace + "D");

                }
            }
        }

        // Combines the deck(currently with user input) with temp_deck
        for (i = 0; i < temp_deck.length; i++) {

            if (!deck.includes(temp_deck[i])) {
                deck.push(temp_deck[i]);
        
            }
        
        }

        // Sorts the deck from the 5th card to the end
        deck2 = randomSort(deck);
        console.log(deck2);

        // Fills computerHand and userHand with userInput
        for (i = 0; i < 4; i++) {

            if (i == 0 || i == 2) {
                computerHand.push(deck2[i]);

            } else if (i == 1 || i == 3) {
                userHand.push(deck2[i]);
            }
        }


        //Displays both the user's and computer's hands
        for (j = 0; j < deck2.length; j++) {

            if (j >= 0 && j < 4) {

                for (i = 0; i < arrayofImages.length; i++) {

                    if (arrayofImages[i].includes(deck2[j])) {
                        
                        let newImg = document.createElement("img");
                        
                        newImg.src = arrayofImages[i];

                        newImg.height = "150";
                        newImg.width = "200";
                        
                        if (j == 0 || j == 2) {

                            document.getElementById("computerHand").appendChild(newImg);

                        } else {

                            document.getElementById("playerHand").appendChild(newImg);
                        }                        
                        break;
                    
                    }
                }
            } 
        }

        let userIndex = 4;
        let computerIndex = 5;
        let endFlag = false;
        let computerStandFlag = false;
        let playerStandFlag = false;


        hitButton.addEventListener('click', function(event){

            //User Turn
            for (i = 0; i < arrayofImages.length; i++) {

                if (arrayofImages[i].includes(deck2[userIndex])) {

                    let newImg = document.createElement("img");
                    newImg.src = arrayofImages[i];
                    newImg.height = "150";
                    newImg.width = "200";
                    document.getElementById("playerHand").appendChild(newImg);

                    // Pushes the new card into user's hand
                    userHand.push(deck2[userIndex]);

                    playerHandHeaderConent.nodeValue = 'Player Hand - Total: ' + calculateHand(userHand);

                    if (calculateHand(userHand) > 21) {

                        endFlag = true;
                        playerHandHeaderConent.nodeValue = 'Player Lost!'

                        for (i = 2; i < computerHand.length; i++) {
                            for (j = 0; j < arrayofImages.length; j++) {
                                
                                if (arrayofImages[j].includes(computerHand[i])) {
            
                                    let newImg = document.createElement("img");
                                    
                                    newImg.src = arrayofImages[j];
            
                                    newImg.height = "150";
                                    newImg.width = "200";
            
                                    document.getElementById("computerHand").appendChild(newImg);
            
                                }
                            }
                        }
                        computerTotal2 = calculateHand(computerHand)

                        console.log(computerHand);
                        console.log(computerIndex);
                        computerHandHeaderContent.nodeValue = "Computer Hand - Total: " + computerTotal2;
                    }
                    break;
                }
            }
            userIndex += 2;

            if (endFlag == false && computerStandFlag == false) {

                if (calculateHand(computerHand) < 17) {

                    computerHand.push(deck2[computerIndex]);
                    computerIndex +=2;

                    if (calculateHand(computerHand) > 21) {
                        endFlag = true;
                    }
                } else {
                    computerStandFlag = true;
                }
            } 
        }); 

        standButton.addEventListener('click', function(event){
            
            playerStandFlag = true;
            
            while (calculateHand(computerHand) < 17) {
                computerHand.push(deck2[computerIndex]);
                computerIndex +=2;

                // Case when Computer's hand exceeded 21
                if (calculateHand(computerHand) > 21) {
                    
                    //Sets the endFlag to true
                    endFlag = true;

                    //Displays rest of computer's hands
                    for (i = 2; i < computerHand.length; i++) {
                        for (j = 0; j < arrayofImages.length; j++) {
                            
                            if (arrayofImages[j].includes(computerHand[i])) {
        
                                let newImg = document.createElement("img");
                                
                                newImg.src = arrayofImages[j];
        
                                newImg.height = "150";
                                newImg.width = "200";
        
                                document.getElementById("computerHand").appendChild(newImg);
        
                            }
                        }
                    }
                    //Displays computer's total
                    computerTotal = calculateHand(computerHand)
                    computerHandHeaderContent.nodeValue = "Computer Hand - Total: " + computerTotal;
                    playerHandHeaderConent.nodeValue = 'Player Won!';
                    break;
                }
            }

            //Case when Computer's hand did not exceed 21 and decide to "stand"
            if (endFlag == false) {

                computerStandFlag = true;                    
                
                //Displays rest of computer's hands
                for (i = 2; i < computerHand.length; i++) {
                    for (j = 0; j < arrayofImages.length; j++) {
                            
                        if (arrayofImages[j].includes(computerHand[i])) {
        
                            let newImg = document.createElement("img");
                                
                            newImg.src = arrayofImages[j];
        
                            newImg.height = "150";
                            newImg.width = "200";
        
                            document.getElementById("computerHand").appendChild(newImg);
        
                        }
                    }
                }
                    
                computerTotal = calculateHand(computerHand)
                computerHandHeaderContent.nodeValue = "Computer Hand - Total: " + computerTotal;
                
                //Case when userHand is higher than computerHand
                if (calculateHand(userHand) > calculateHand(computerHand)) {


                    playerHandHeaderConent.nodeValue = 'Player Won!';

                //Case when userHand is tied to computerHand
                } else if (calculateHand(userHand) == calculateHand(computerHand)) {

                    playerHandHeaderConent.nodeValue = "It's a Tie!";
                
                //Case when userHand is lower than computerHand
                } else {

                    playerHandHeaderConent.nodeValue = "Player Lost!";

                } 
            }
        });
    });
}


        
function getRandomInt(max) {
    
    return Math.floor(Math.random() * max);
}


function randomSort(array) {

    let randomInteger;
    let temp = -1;

    for (i = 0; i < array.length-1; i++) {

        if (i > 3) {
            randomInteger = -1;
            
            while (randomInteger <= 3) {
                
                randomInteger = Math.floor(Math.random() * array.length);
            
            }
            
            temp = array[i];
        
            array[i] = array[randomInteger];

            array[randomInteger] = temp;
        }
    }

    return array;
}
function calculateHand(userHand) {

    let userTotal = 0;

    for (i = 0; i < userHand.length; i++) {

        let stringNum = 0;

        if (userHand[i].includes('J') || userHand[i].includes('Q') || userHand[i].includes('K')) {

            userTotal += 10;

        } else if (userHand[i].includes('A')) {

            if (userTotal + 11 > 21) {

                userTotal += 1;
                
            } else {

                userTotal += 11;
            }

        } else {
            
            if (userHand[i].length == 2) {

                stringNum = userHand[i].substr(0, 1);
                intNum = parseInt(stringNum);
                userTotal += intNum;

            } else {

                stringNum = userHand[i].substr(0, 2);
                intNum = parseInt(stringNum);
                userTotal += intNum;
            }
        }

    }
    if (userTotal > 21) {

        userTotal = 0;

        for (i = 0; i < userHand.length; i++) {

            let stringNum = 0;
    
            if (userHand[i].includes('J') || userHand[i].includes('Q') || userHand[i].includes('K')) {
    
                userTotal += 10;
    
            } else if (userHand[i].includes('A')) {
    
                userTotal += 1;
    
            } else {
                
                if (userHand[i].length == 2) {
    
                    stringNum = userHand[i].substr(0, 1);
                    intNum = parseInt(stringNum);
                    userTotal += intNum;
    
                } else {
    
                    stringNum = userHand[i].substr(0, 2);
                    intNum = parseInt(stringNum);
                    userTotal += intNum;
                }
            }

        }
    }
    return userTotal;   
}


document.addEventListener('DOMContentLoaded', main);
