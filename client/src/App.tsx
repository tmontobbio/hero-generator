import { Counter } from './features/counter/Counter';
import './App.css';

import { Button } from 'semantic-ui-react';
import { useState, useEffect } from "react";

import Nav from './features/navigation/Nav';
import Logo from './features/logo/Logo'
import Generator from './features/generator/Generator';

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
      <div id='nav-wrapper'>
        <Nav user={user} setUser={setUser} />
      </div>
      <div id='main'>
        <Logo />
        <Generator />
        {user && <Button id="log-out" onClick={logout}>Log Out</Button>}
      </div>
      <Counter />
    </div>
  );
}

export default App;
