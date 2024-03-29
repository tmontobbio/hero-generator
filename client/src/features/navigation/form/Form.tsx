import React from 'react';
import "./Form.module.css"
import { useState } from "react";

import SignUp from "./options/SignUp"
import Login from "./options/Login"

export default function FormWrapper({ setUser }) {
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
                        setUser={setUser}
                    />
                    :
                    <SignUp
                        toggle={toggle}
                        setUser={setUser}
                    />
            }
        </div>
    )
}