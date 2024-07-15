import React from 'react'
import Card from '../cardComponents/Card'
import './Board.css'


export default function Board({cards, onCardClick}) {
  return (
    <div className='board'>
          {cards.map((card, index) => (
              <Card key={card.id} index={index} card={card} onClick={onCardClick} />
      ))}
    </div>
  )
}