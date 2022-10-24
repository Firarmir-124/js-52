import Card from "./Card";

class CardDesk {
  constructor(
    public desk:Card[] = []
  ) {
    const suit = ['diams', 'hearts', 'clubs', 'spades'];
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for(let j = 0; j < suit.length; j++) {
      for(let i = 0; i < rank.length; i++) {
        desk.push(new Card(`${suit[j]}`, `${rank[i]}`))
      }
    }
  }

  getCard() {
    const randomIndexCard = Math.floor(Math.random() * this.desk.length);
    const randomCard = this.desk[randomIndexCard];
    this.desk.splice(randomIndexCard, 1);
    return randomCard;
  }


  getCards(howMany:number) {
    const randomNumber:Card[] = [];

    for (let i = 0; i < howMany; i++) {
      randomNumber.push(this.getCard());
    }

    return randomNumber
  }

}


export default CardDesk;