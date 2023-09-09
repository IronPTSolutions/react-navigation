import { useEffect, useState } from 'react';
import Ranking from '../../components/Ranking';
import { getPlayers } from '../../api';
import { BarLoader } from 'react-spinners';

const PlayersList = () => {
  const [femaleRanking, setFemaleRanking] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPlayers('female')
      .then((femalePlayers) => {
        setFemaleRanking(femalePlayers);
        setLoading(false);
      })
  }, [])

  return (
    <div>
      <h2>Lista</h2>

      <h3 className="mb-3">Ranking femenino</h3>

      {loading
        ? <div className="d-flex justify-content-center">
            <BarLoader color="#626cfd" />
          </div>
        : <Ranking players={femaleRanking} />
      }
    </div>
  )
}

export default PlayersList;