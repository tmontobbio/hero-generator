import './SignUp.css';
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function SignUp({ setUser, toggle, formToggle }) {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordValid, setPasswordValid] = useState();
    const [cPasswordValid, setCPasswordValid] = useState();

    function signUp(e) {
        e.preventDefault();

        if (password.toString() == passwordConfirmation.toString()) {
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
        } else {
            alert("passwords do not match!")
        }
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
                    className={[...password].length >= 8 || [...password].length == 0 ? "form-field" : "form-field-red"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <br />
                <input
                    className={password.toString() == passwordConfirmation.toString() || [...password].length == 0 ? "form-field" : "form-field-red"}
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type="password"
                />
                <br />
                <button type="submit" className={password.toString() != passwordConfirmation.toString() || [...password].length == 0 ? "button-disabled" : "button-enabled"}>Submit</button>
            </form>
            <button className='toggle-btn' onClick={toggle}>
                Log-in
            </button>
        </div>
    )
}