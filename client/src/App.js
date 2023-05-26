import './App.css';
import Home from './components/Home';
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

  return (
    <div className="App">
      <Home user={user} setUser={setUser} />
    </div>
  );
}

export default App;
