import './Login.css';
import { useState } from "react";
import { Button } from "semantic-ui-react";

export default function Login({ setUser, toggle, formToggle }) {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function logIn(e) {
        e.preventDefault();
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username.toLowerCase(), password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((data) => setUser(data));
                console.log("Log in successful")
            } else {
                console.log("Log in Failed")
            }
        });
    }

    return (
        <div id="login">
            <form className="form" onSubmit={logIn}>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    placeholder="Password"
                    className={[...password].length >= 8 || [...password].length == 0 ? "form-field" : "form-field-red"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <br />
                <Button type="submit">Enter</Button>
            </form>
            <button className='toggle-btn' onClick={toggle}>Sign up!</button>
        </div>
    )
}