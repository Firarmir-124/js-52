import React from 'react';

interface CardViewProps {
  rank: string;
  suit: string;
}

const CardView:React.FC<CardViewProps> = props => {

  let nameCard:string = '';

  if (props.rank === 'diams') {
    nameCard = '♦';
  } else if (props.rank === 'hearts') {
    nameCard = '♥';
  } else if (props.rank === 'clubs') {
    nameCard = '♣';
  } else if (props.rank === 'spades') {
    nameCard = '♠';
  }

  const spanClass = `card rank-${props.suit.toLowerCase()}  ${props.rank}`;

  return (
    <div>
      <span className= {spanClass}>
        <span className="rank">{props.suit}</span>
        <span className="suit">{nameCard}</span>
      </span>
    </div>
  );
};

export default CardView;