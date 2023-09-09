import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPlayerDetail } from '../../api';
import PlayerCard from '../../components/PlayerCard';
import { BarLoader } from 'react-spinners';

const PlayerDetail = () => {
  const { id } = useParams();
  const [playerInfo, setPlayerInfo] = useState({});
  const [loading, setLoading] = useState(true);
  

  // useEffect(() => {
  //   setLoading(true);

  //   getPlayerDetail(id).then((player) => {
  //     setPlayerInfo(player);
  //     setLoading(false);
  //   });
  // }, [id]);

  const fetchPlayerDetail = useCallback(() => {
    getPlayerDetail(id).then((player) => {
      setPlayerInfo(player);
      setLoading(false);
    });
  }, [id])

  useEffect(() => {
    setLoading(true);

    fetchPlayerDetail();
  }, [fetchPlayerDetail]);

  return (
    <div>
      <h2>Player detail</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <BarLoader color="#626cfd" />
        </div>
      ) : (
        <>
          <PlayerCard player={playerInfo} showLink={false} />
          <Link to={`/players-list/${Number(id)+1}`}>
            Next
          </Link>
        </>
      )}
    </div>
  );
};

export default PlayerDetail;
