import players from '../players.json';

export const getPlayers = (genre) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(players[genre])
    }, 1000);
  })
}

export const getPlayerDetail = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const playersArr = []
      Object.values(players).forEach(rankingPlayers => { playersArr.push(rankingPlayers) })

      resolve(playersArr.flat().find(player => player.id === Number(id)))
    }, 1000);
  })
}
