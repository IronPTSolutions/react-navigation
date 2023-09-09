import { Link } from "react-router-dom";

const PlayerCard = ({ player, showLink = true }) => {
  return (
    <div className="card">
      <img src={player.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">
          Ranking: {player.ranking}
        </p>
        <p className="card-text">
          Puntos: {player.points}
        </p>
        <p className="card-text">
          Posición: {player.position}
        </p>

        {showLink && <Link className="btn btn-primary" to={`/players-list/${player.id}`}>Ver detalle del jugador</Link>}
      </div>
    </div>
  );
};

export default PlayerCard
