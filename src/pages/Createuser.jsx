import { useState } from "react";
import axios from "axios";

function UsersPOST() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
      })
      .then((res) => {
        console.log(res.data);
        setResult(res.data)
        
      })
      .catch((err) => console.error(err));

    setName("");
    setEmail("");
  }





  
const handleDelete = (id) => {
axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res =>{
    console.log(res.data);
    setResult(null)
    
}).catch(err => {
    console.log("error", err);
    
})
}



  return (
    <div className="container mt-5">
      <h2>Add User – POST</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn btn-primary w-100">Add User</button>
      </form>

      {result && (
        <div className="alert alert-success mt-3">
          User added: {result.name} / ({result.email})
          <button onClick={() =>handleDelete(result.id)}>
            delete
          </button>
        </div>
      )}
    </div>
  );
}

export default UsersPOST;