import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { todoList } from '../../services/todos-service';
import { Link } from 'react-router-dom';

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    todoList()
      .then((todos) => {
        setTodos(todos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <BarLoader color="#626cfd" />
        </div>
      ) : (
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <Link to={`/todos/${todo.id}`}>Ver detalle</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDos;
