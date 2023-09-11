import { useEffect, useState } from "react";
import { usersList } from "../../services/users-service";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    usersList()
      .then(users => {
        setUsers(users)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {users.length && users.map(user => {
        return (
          <Link key={user.id} to={`/users/${user.id}`} >
            <div>{user.name}</div>
          </Link>

        )
      })}
    </div>
  );
};

export default UsersList;
