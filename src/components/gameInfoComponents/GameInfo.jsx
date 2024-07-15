import React from "react";
import "./GameInfo.css"

export default function GameInfo({ matchedCards, onReset }) {
  return (
    <div className="game-info">
      <div>Matched Pairs: {matchedCards.length / 2}</div>
      <button className="button" onClick={onReset}>Reset Game</button>
    </div>
  );
}