import './App.css';
import Logo from './Logo';
import FormWrapper from './form/FormWrapper';
import Generator from './Generator';
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
      <div id="home">
        <Logo />
        {!user && <FormWrapper user={user} setUser={setUser} />}
        <Generator />
        {user && <Button id="log-out" onClick={logout}>Log Out</Button>}
      </div>
    </div>
  );
}

export default App;
