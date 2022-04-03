class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    let n = this.cards.length;
    for (let i = n - 1; i > 0; i--){
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));

        // Swap arr[i] with the element
        // at random index
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked ++
    if (card1 === card2){
      this.pairsGuessed ++
      return true
    } else return false
  }

  checkIfFinished() {
    if (this.pairsClicked === 0){
      return false
    }
    else if ((this.cards.length) / 2 === this.pairsGuessed){
      return true
    }
    else return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
