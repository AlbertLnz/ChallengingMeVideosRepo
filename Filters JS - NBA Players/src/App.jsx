import nba from "./nba"
import { useState } from "react";

const App = () => {
  const [filtered, setFiltered] = useState(nba);
  const positions = {'Center': 'C', 'Power Forward': 'PF', 'Small Forward': 'SF', 'Point Guard': 'PG', 'Shooting Guard': 'SG'}

  const handleFiltered = (position='all') => {
    position === 'all' ? setFiltered(nba) : applyFilters(position)
  }

  const applyFilters = (position) => {
    setFiltered(nba.filter((player) => player.position === position))
  }


  return (
    <>
      <div style={{display: 'flex', placeContent: 'center', gap: '6px'}}>
        <button onClick={() => handleFiltered()}>All</button>
        {Object.keys(positions).map((position) => (
          <button key={position} onClick={() => handleFiltered(positions[position])}>{position}</button>
        ))}
      </div>

      <div style={{textAlign: 'center'}}>
        {filtered.slice().reverse().map((player) => {
          return (
            <p key={player.id}>{player.id}. {player.name} - {player.position}</p>
          )
        })}
      </div>

    </>
  )
}

export default App