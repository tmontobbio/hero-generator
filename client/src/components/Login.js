import './Login.css';
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function Login({ setUser, setFormToggle, toggle }) {
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
            <Form onSubmit={logIn}>
                <Form.Field>
                    <input
                        className="form-field"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        className="form-field"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </Form.Field>
                <Button type="submit">Log In</Button>
            </Form>
            <button onClick={toggle}>Or...Sign Up</button>
        </div>
    )
}