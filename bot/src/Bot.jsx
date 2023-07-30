// src/components/Bot.js
import React from 'react';

const Bot = ({ bot, onEnlist, onDischarge, onDischargeForever }) => {
  const handleEnlist = () => {
    onEnlist(bot);
  };

  const handleDischarge = () => {
    onDischarge(bot);
  };

  const handleDischargeForever = () => {
    onDischargeForever(bot);
  };

  return (
    <div>
      <h3>{bot.name}</h3>
      {/* Render other bot details */}
      <button onClick={handleEnlist}>Enlist</button>
      <button onClick={handleDischarge}>Discharge</button>
      <button onClick={handleDischargeForever} className="red-button">
        Discharge Forever (X)
      </button>
    </div>
  );
};

export default Bot;
