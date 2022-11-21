import React, { useState } from 'react'
import SearchStatus from './components/searchStatus'
import api from './api'
import Users from './components/users'

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {
        setUsers((prevState) => {
            return prevState.filter(user => user._id !== userId)
        })
    }

    const handleToggleBookmark = (userId) => {
        const el = users.findIndex((item)=> item._id === userId)
        const newUsers = [...users]
        newUsers[el].bookmark = !newUsers[el].bookmark
        setUsers(newUsers)
    }
    
    return (
        <div>
            <SearchStatus length={users.length} />
            <Users users={users} onDelete={handleDelete} onBookmarks={handleToggleBookmark}/>            
        </div>
    )
}

export default App