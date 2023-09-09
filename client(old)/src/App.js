import './App.css';

import Logo from './components/logo/Logo';
import Form from '../../client/src/features/navigation/form/Form';
import Generator from './components/generator/Generator';
import Nav from './components/navigation/Nav';

import { Button } from 'semantic-ui-react';
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
      <div id='nav-wrapper'>
        <Nav user={user} setUser={setUser} />
      </div>
      <div id='main'>
        <Logo />
        <Generator />
        {user && <Button id="log-out" onClick={logout}>Log Out</Button>}
      </div>
    </div>
  );
}

export default App;
