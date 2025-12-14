import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log('error')
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      padding: "20px",
      background: "#f4f4f4",
      minHeight: "100vh"
    }}>
      {users.map(user => (
        <div 
          key={user.id}
          style={{
            width: "250px",
            padding: "15px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
          
          
        >
          <div >
          <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{user.name}</h2>
          <p style={{ color: "#555" }}>{user.email}</p>
          <p style={{ color: "#555" }}>{user.address.city}</p>
          <Link className="btn-btn-primary" to={`/edituser/${user.id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default User
