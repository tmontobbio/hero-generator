import './App.css';
import Logo from './components/Logo';
import FormWrapper from './components/FormWrapper';
import Generator from './components/Generator';
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function logout() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      setUser(null);
    });
  }

  return (
    <div className="App">
      <div id="home">
        <Logo />
        {!user && <FormWrapper user={user} setUser={setUser} />}
        <Generator />
        {user && <button id="log-out" onClick={logout}>Log Out</button>}
      </div>
    </div>
  );
}

export default App;
