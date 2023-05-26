import './App.css';
import Logo from './components/Logo';
import FormWrapper from './components/FormWrapper';
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        console.log("no user logged in")
      }
    });
  }, []);

  function logout() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        console.log("Successfully logged out")
      } else {
        console.log("Logout was unsuccessful")
      }
    });
  }

  return (
    <div className="App">
      <div id="home">
        <Logo />
        {user ? null : <FormWrapper user={user} setUser={setUser} />}
        <button id="btn" onClick={logout}>Log Out</button>
      </div>
    </div>
  );
}

export default App;
