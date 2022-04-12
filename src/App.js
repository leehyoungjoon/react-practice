import React, { useState } from "react";

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const onSubmit = (event) => {
    event.PreventDefault();
    console.log(username, password);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <input
          placeholder="Psssword"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
}

export default App;
