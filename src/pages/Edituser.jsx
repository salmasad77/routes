import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
const {id} = useParams();
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

useEffect(() => {
  

  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res) => {
    setname(res.data.name),
    setEmail(res.data.email);
      })
.catch(err => console.log(err));}, [id])




  const handleEdit = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { name, email })
      .then((res) => {
        alert("Updated User : " + name + " | " + email);
        navigate("/User");
      })
      .catch(err => console.log(err));
  };
    
  return (
    <div>
        <form onSubmit={handleEdit}>

            <input type="text" placeholder='name' value={name} onChange={(e)=> setname(e.target.value)  }  />
            <input type="email"placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>

<button>update</button>
            
        </form>
    </div>
  )
}

export default Edituser