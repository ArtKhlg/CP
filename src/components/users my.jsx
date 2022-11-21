import React, { useState } from 'react'
import User from './user'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const renderPhrase = (number) => {
        return (number === 0) ? "Никто не тусанет" : (number > 4) || (number === 1) ? number + " человек тусанет" : number + " человека тусанут"
    }

    const handleDelete = (userId) => {
        setUsers((prevState) => {
            return prevState.filter(user => user._id !== userId)
        })
    }

    if (users.length === 0) return <span className='badge bg-danger'>{renderPhrase(users.length)} с тобой сегодня</span>
    
    return <><span className='badge bg-primary'>{renderPhrase(users.length)} с тобой сегодня</span>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody> {users.map((user) => (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td >{user.qualities.map((quality) => (
                <div key={quality._id} className={`badge bg-${quality.color} m-1`}>{quality.name}</div>
            ))}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} / 5</td>
            <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(user._id)}>delete</button></td>
            

        </tr>)

      )}
    </tbody>
  </table>
  </>
}

export default Users