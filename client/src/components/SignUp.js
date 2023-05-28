import './SignUp.css';
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function SignUp({ setUser, toggle, formToggle }) {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function signUp(e) {
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
                r.json().then((data) => setUser(data));
            } else {
                r.json().then((r) => {
                    setErrors(r.errors);
                });
            }
        });
    }

    return (
        <div id="sign-up">
            <form className="form" onSubmit={signUp}>
                <input
                    className="form-field"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    className="form-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <br />
                <input
                    className="form-field"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type="password"
                />
                <br />
                <Button type="submit">Submit</Button>
            </form>
            <button className='toggle-btn' onClick={toggle}>
                Log-in
            </button>
        </div>
    )
}