import './SignUp.css';
import { useState } from "react";

export default function SignUp({ setUser, toggle }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
                        console.log(r.errors);
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
                    className={[...username].length >= 3 || [...username].length === 0 ? "form-field" : "form-field-red"}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    className={[...password].length >= 8 || [...password].length === 0 ? "form-field" : "form-field-red"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <br />
                <input
                    className={(password.toString() == passwordConfirmation.toString() && [...password].length > 7) || [...password].length === 0 ? "form-field" : "form-field-red"}
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type="password"
                />
                <br />
                <button type="submit" className={
                    password.toString() === passwordConfirmation.toString()
                        &&
                        [...password].length > 7
                        &&
                        [...username].length > 2
                        ? "button-enabled" : "button-disabled"}>
                    Submit
                </button>
                <button className='toggle-btn' onClick={toggle}>
                    Log-in
                </button>
            </form>
        </div>
    )
}