// src/components/BotCollection.js
import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, onEnlist, onDischarge, onDischargeForever }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          onEnlist={onEnlist}
          onDischarge={onDischarge}
          onDischargeForever={onDischargeForever}
        />
      ))}
    </div>
  );
};

export default BotCollection;
