import './Login.css';

import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function Login({ setUser }) {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.toLowerCase(),
                password: password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((r) => {
                    setErrors(r.errors);
                });
            }
        });
    }

    return (
        <div id="login">
            <Form onSubmit={handleSubmit}>
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
                <Form.Field>
                    <input
                        className="form-field"
                        placeholder="Confirm Password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        type="password"
                    />
                </Form.Field>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}