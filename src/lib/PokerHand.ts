import Card from "./Card";

class PokerHand {
  constructor(
    public pokerCards:Card[] = []
  ) {}

  getOutcome() {
    type suit = {
      diams:string[];
      hearts:string[];
      clubs:string[];
      spades:string[];
    }

    type rank = {
      rank2:string[];
      rank3:string[];
      rank4:string[];
      rank5:string[];
      rank6:string[];
      rank7:string[];
      rank8:string[];
      rank9:string[];
      rank10:string[];
      rankJ:string[];
      rankQ:string[];
      rankK:string[];
      rankA:string[];
    }

    let title:string = 'Непонятная комбинация';

    const suit:suit = {
      diams: [],
      hearts: [],
      clubs: [],
      spades: [],
    };

    const rank:rank = {
      rank2: [],
      rank3: [],
      rank4: [],
      rank5: [],
      rank6: [],
      rank7: [],
      rank8: [],
      rank9: [],
      rank10: [],
      rankJ: [],
      rankQ: [],
      rankK: [],
      rankA: [],
    };


    for(const pokerCard of this.pokerCards) {
      if (pokerCard.suit === 'diams') suit.diams.push(pokerCard.suit);
      else if (pokerCard.suit === 'hearts') suit.hearts.push(pokerCard.suit);
      else if (pokerCard.suit === 'clubs') suit.clubs.push(pokerCard.suit);
      else if (pokerCard.suit === 'spades') suit.spades.push(pokerCard.suit);

      if (pokerCard.rank === '2') rank.rank2.push(pokerCard.rank);
      else if (pokerCard.rank === '3') rank.rank3.push(pokerCard.rank);
      else if (pokerCard.rank === '4') rank.rank4.push(pokerCard.rank);
      else if (pokerCard.rank === '5') rank.rank5.push(pokerCard.rank);
      else if (pokerCard.rank === '6') rank.rank6.push(pokerCard.rank);
      else if (pokerCard.rank === '7') rank.rank7.push(pokerCard.rank);
      else if (pokerCard.rank === '8') rank.rank8.push(pokerCard.rank);
      else if (pokerCard.rank === '9') rank.rank9.push(pokerCard.rank);
      else if (pokerCard.rank === '10') rank.rank10.push(pokerCard.rank);
      else if (pokerCard.rank === 'J') rank.rankJ.push(pokerCard.rank);
      else if (pokerCard.rank === 'Q') rank.rankQ.push(pokerCard.rank);
      else if (pokerCard.rank === 'K') rank.rankK.push(pokerCard.rank);
      else if (pokerCard.rank === 'A') rank.rankA.push(pokerCard.rank);
    }

    if (rank.rank2.length === 2 || rank.rank3.length === 2 || rank.rank4.length === 2 || rank.rank5.length === 2 || rank.rank6.length === 2 || rank.rank7.length === 2 || rank.rank8.length === 2 || rank.rank9.length === 2 || rank.rank10.length === 2 || rank.rankJ.length === 2 || rank.rankQ.length === 2 || rank.rankK.length === 2 || rank.rankA.length === 2) {
      title = 'одна пара'
    }

    if (rank.rank2.length === 3 || rank.rank3.length === 3 || rank.rank4.length === 3 || rank.rank5.length === 3 || rank.rank6.length === 3 || rank.rank7.length === 3 || rank.rank8.length === 3 || rank.rank9.length === 3 || rank.rank10.length === 3 || rank.rankJ.length === 3 || rank.rankQ.length === 3 || rank.rankK.length === 3 || rank.rankA.length === 3) {
      title = 'три пары'
    }

    if (suit.clubs.length === 5 || suit.hearts.length === 5 || suit.diams.length === 5 || suit.spades.length === 5) {
      title = 'флеш'
    }

    return title

  }
}

export  default PokerHand