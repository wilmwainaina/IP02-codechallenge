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
    
    <div class="card" >
        <img src={bot.avatar_url} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{bot.name}</h5>
            <p class="card-text">{bot.catchphrase}.</p>
        </div>
        <div>
            <i class="bi bi-heart-pulse-fill"></i>
            <span>{bot.health}</span>
            <i class="bi bi-shield-fill"></i>
            <span>{bot.armor}</span>
            <i class="bi bi-exclamation-triangle"></i>
            <span>{bot.damage}</span>
            <h3>{bot.name}</h3>
      {/* Render other bot details */}
      <button onClick={handleEnlist}>Enlist</button>
      <button onClick={handleDischarge}>Discharge</button>
      <button onClick={handleDischargeForever} className="red-button">
        Discharge Forever (X)
      </button>
        </div>
    </div>
  );
};

export default Bot;
