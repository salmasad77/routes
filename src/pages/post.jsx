import axios from 'axios';
import React, { useEffect } from 'react'

function user() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit =(e) =>{
        e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/users") ,{name,email}
        .then ((res) => (res.data))
        .catch ((err) => console.log("err")
        );


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => (setName(e.target.value))} value={name}/>
        <input type="email" onChange={(e) => (setEmail(e.target.value))} value={email}/>
        <h1>{name}-{email}</h1>
        <button type='submit'>add user</button>
        </form>
    </div>
  )
}

export default post















































// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function User() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("https://jsonplaceholder.typicode.com/users", {
//         name,
//         email,
//       })
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));


//       const deletefun = (id) => {
// axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
// .then((res) => (res.data) )
// .catch((error) => ("erro"))
//       }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Add User</h1>

//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />

//         <button type="submit">Add User</button>
//       </form>

//       <div>
//         <h1>
//           {name} - {email}
//         </h1>
//         <button>supprimer</button>
//       </div>
//     </div>
//   );
// }

// export default User;
