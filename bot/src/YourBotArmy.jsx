// src/components/YourBotArmy.js
import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ army, onDischarge }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <Bot key={bot.id} bot={bot} onDischarge={onDischarge} />
      ))}
    </div>
  );
};

export default YourBotArmy;
