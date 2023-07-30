// src/App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection.JSX';
import YourBotArmy from './components/YourBotArmy.jsx';
import 'whatwg-fetch';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    // Fetch data from the backend server
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Failed to fetch bots:', error));
  }, []);

  const handleEnlist = (bot) => {
    // Add the bot to the army if it's not already enlisted
    if (!army.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleDischarge = (bot) => {
    // Remove the bot from the army
    setArmy(army.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  const handleDischargeForever = (bot) => {
    // Remove the bot from the army
    setArmy(army.filter((enlistedBot) => enlistedBot.id !== bot.id));

    // Delete the bot from the backend
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

