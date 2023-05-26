import "./FormWrapper.css"
import { useState } from "react";
import SignUp from "./SignUp.js"
import Login from "./Login.js"

export default function FormWrapper({ user, setUser }) {
    const [formToggle, setFormToggle] = useState(true)

    function toggle() {
        setFormToggle(!formToggle)
    }

    return (
        <div id="form-wrapper">
            {formToggle ? <Login toggle={toggle} formToggle={formToggle} setFormToggle={setFormToggle} setUser={setUser} /> : <SignUp toggle={toggle} formToggle={formToggle} setFormToggle={setFormToggle} setUser={setUser} />}
        </div>
    )
}