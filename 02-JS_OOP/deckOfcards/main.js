// Deck of Cards
const suits = ["Clubs", "Hearts", "Diamonds", "Spades"];


class Card {
    constructor(suit,str_value,num_value){
        this.suit = suit; // Clubs, Hearts, Diamonds, Spades
        this.str_value = str_value;  // King, Queen, Jack, Ace
        this.num_value = num_value; // 1 thru 10

        this.showCard = function(){
            console.log(`Card's suit: ${this.suit} \nCard's value: ${this.str_value}  \nCard's numeric value: ${this.num_value} `);
        }
    }     
}

var card_1 = new Card('Club', 'King', 10, 10);
card_1.showCard();

// class Deck { 
//     constructor(){
//         var fullDeck = 52;
//         this.buildDeck();
//     } 

//     buildDeck(){ 

//     }

//     reset(){ // reset back to 52 cards

//     }

//     shuffle(){ // Mix cards

//     }

//     dealCard(){  //random
        
//     }

//  }


// class Player {
//     constructor (name){
//         this.name = name;
//         this.hand = [];
//         this.score = 0;
//     }

//     deck.deal(){

//     }

//     deck.discard(){

//     }
// }