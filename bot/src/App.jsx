// src/App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Failed to fetch bots:', error));
  }, []);

  const handleEnlist = (bot) => {
    if (!army.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleDischarge = (bot) => {
    setArmy(army.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  const handleDischargeForever = (bot) => {
    setArmy(army.filter((enlistedBot) => enlistedBot.id !== bot.id));
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    }).catch((error) => {
      console.error('Failed to discharge bot from backend:', error);
    });
  };

  return (
    <div>
      <h1>Bot Army Manager</h1>
      <BotCollection
        bots={bots}
        onEnlist={handleEnlist}
        onDischarge={handleDischarge}
        onDischargeForever={handleDischargeForever}
      />
      <YourBotArmy army={army} onDischarge={handleDischarge} />
    </div>
  );
};

export default App;

