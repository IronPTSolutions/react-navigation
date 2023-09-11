import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Navbar'
import ToDos from './views/ToDos/ToDos'

import './App.css'
import ToDoDetail from './views/ToDos/ToDoDetail'
import UsersList from './views/Users/UsersList'
import UserDetail from './views/Users/UserDetail'

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ToDos />} />
          <Route path="/todos/:id" element={<ToDoDetail />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
