import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Navbar'
import PlayersList from './views/PlayersList/PlayersList'
import PlayerDetail from './views/PlayerDetail/PlayersDetail'
import './App.css'
import ToDos from './views/ToDos/ToDos'

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players-list" element={<PlayersList />} />
          <Route path="/players-list/:id" element={<PlayerDetail />} />
          <Route path="/todos" element={<ToDos />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
