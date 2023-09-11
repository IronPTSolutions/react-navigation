import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { todoDetail } from '../../services/todos-service';

const ToDoDetail = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    todoDetail(id)
      .then(apiTodo => {
        setTodo(apiTodo)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  return (
    <div>
      <h1>Detalle {id}</h1>
      {
        todo && (
          <pre>{JSON.stringify(todo)}</pre>
        )
      }
    </div>
  );
};

export default ToDoDetail;
