import { useState } from "react";

useState

function Playerselect({ players }) {
  const [search, setSearch] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Filter players based on the search input
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePlayerSelect = (player) => {
    if (selectedPlayers.length < 2 && !selectedPlayers.includes(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <div>
      <h2>Select any two players for comparison:</h2>
      <input
        type="text"
        placeholder="Search player by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.name} onClick={() => handlePlayerSelect(player)}>
            {player.name}
          </li>
        ))}
      </ul>

      <div>
        <h3>Selected Players:</h3>
        <ul>
          {selectedPlayers.map((player) => (
            <li key={player.name}>{player.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playerselect;
