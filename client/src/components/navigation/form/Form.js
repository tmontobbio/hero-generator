import "./Form.css"
import { useState } from "react";
import SignUp from "./options/SignUp.js"
import Login from "./options/Login.js"

export default function FormWrapper({ user, setUser }) {
    const [formToggle, setFormToggle] = useState(true)

    function toggle() {
        setFormToggle(!formToggle)
    }

    return (
        <div id="form">
            {
                formToggle
                    ?
                    <Login
                        toggle={toggle}
                        formToggle={formToggle}
                        setFormToggle={setFormToggle}
                        setUser={setUser}
                    />
                    :
                    <SignUp
                        toggle={toggle}
                        formToggle={formToggle}
                        setFormToggle={setFormToggle}
                        setUser={setUser}
                    />
            }
        </div>
    )
}