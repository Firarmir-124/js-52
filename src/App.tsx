import React, {useState} from 'react';
import CardView from "./СardView/cardView";
import Card from "./lib/Card";
import CardDesk from "./lib/cardDesk";
import PokerHand from "./lib/PokerHand";

function App() {
  const [card, setCard] = useState<Card[]>([]);

  const pokerHand = new PokerHand();
  pokerHand.pokerCards.push(...card)

  const getCard = () => {
    const cardDesk = new CardDesk();
    setCard(cardDesk.getCards(5));
  }
  const button = <button onClick={getCard}>Раздать карты</button>;


  if (card.length === 0) {
    return (
      <div>
        Array is empty !
        {button}
      </div>
    );
  }



  return (
    <div className="App playingCards faceImages">
      <h1>{pokerHand.getOutcome()}</h1>
      {button}
      <CardView rank={card[0].suit} suit={card[0].rank}/>
      <CardView rank={card[1].suit} suit={card[1].rank}/>
      <CardView rank={card[2].suit} suit={card[2].rank}/>
      <CardView rank={card[3].suit} suit={card[3].rank}/>
      <CardView rank={card[4].suit} suit={card[4].rank}/>
    </div>
  );

}

export default App;

