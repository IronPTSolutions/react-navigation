import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data);
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
            <pre key={todo.id}>{JSON.stringify(todo)}</pre>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDos;
