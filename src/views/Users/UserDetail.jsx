import React, { useEffect, useState } from 'react';
import { userDetail } from '../../services/users-service';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const [user, setUser] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    userDetail(id)
      .then(user => {
        setUser(user)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      {user && (
        <div>{user.name}</div>
      )
      }
    </div >
  );
};

export default UserDetail;
