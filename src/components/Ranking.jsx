import PlayerCard from './PlayerCard';

const Ranking = ({ players }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {players.map((player) => (
        <div key={player.id} className="col">
          <PlayerCard player={player} />
        </div>
      ))}
    </div>
  );
};

export default Ranking;
