import './App.css';
import Home from './components/Home';
import Login from './components/Login';
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
      }
    });
  }

  return (
    <div className="App">
      <Home />
      {/* {user ? <Login /> : null} */}
    </div>
  );
}

export default App;
